package server.projectdnd.Controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.projectdnd.DatabaseLayers.Entities.UserEntity;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;
import server.projectdnd.dtos.Login;
import server.projectdnd.dtos.Signup;
import server.projectdnd.pojos.SaltHash;
import server.projectdnd.utils.Encryptor;
import server.projectdnd.utils.Utils;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {
	
	private static final String FAKE_TOKEN = "FAKE";
    
    @Autowired
    private UserRepository userRepo;
    
    @PostMapping("/login")
	public ResponseEntity<String> login(Login login) {
		
		ResponseEntity<String> response = null;

		try {
			String token = null;
			UserEntity member = userRepo.findById(login.getUsername()).get();
			
			if (member == null) {
				
				throw new Exception("User does not exist");
			}
			
			if (!Encryptor.checkPassword(member.getPassword(),
					(login.getPassword() + member.getSalt()).toCharArray())) {
				
				throw new Exception("Incorrect Password");
			}
			
			token = UUID.randomUUID().toString() + FAKE_TOKEN;
		
			response = new ResponseEntity<String>(token, HttpStatus.OK);
		} catch (Exception e) {
			
			response = new ResponseEntity<String>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}
		

		return response;
	}

	@PostMapping("/signup")
	public ResponseEntity<String> Signup(@RequestBody Signup signup) {

		ResponseEntity<String> response = null;

		try {
			String token = null;
			StringBuilder failureReason = new StringBuilder();			
			
			if (Utils.isNullOrWhiteSpace(signup.getEmail())) {
				failureReason.append("Email is empty or null\n");
			}
	
			if (Utils.isNullOrWhiteSpace(signup.getUsername())) {
				failureReason.append("Username is empty or null\n");
			}
	
			if (Utils.isNullOrWhiteSpace(signup.getPassword())) {
				failureReason.append("Password is empty or null\n");
			}
			
			if (!Utils.isNullOrWhiteSpace(failureReason)) {
				
				throw new Exception(failureReason.toString());
			}
			
			UserEntity entity = userRepo.findById(signup.getUsername()).orElse(null);
			
			if (entity != null) {
				
				throw new Exception("Username already exists");
			}
			
			List<UserEntity> memberEntities = userRepo.findByEmail(signup.getEmail());
			
			if (!memberEntities.isEmpty()) {

				throw new Exception("Email already exists");
			}
		
			SaltHash saltHash = Encryptor.encryptPassword(signup.getPassword().toCharArray());
			
			if (Utils.isNullOrWhiteSpace(saltHash.getHash()) ||
					Utils.isNullOrWhiteSpace(saltHash.getSalt())) {
				
				throw new Exception("Password failed to save");
			}
			
			UserEntity newEntity = new UserEntity();
			
			newEntity.setUsername(signup.getUsername());
			newEntity.setPassword(saltHash.getHash());
			newEntity.setSalt(saltHash.getSalt());
			newEntity.setEmail(signup.getEmail());
			
			userRepo.save(newEntity);
			
			token = UUID.randomUUID().toString() + FAKE_TOKEN;
			response = new ResponseEntity<String>(token, HttpStatus.OK);
		} catch (Exception e) {
			
			response = new ResponseEntity<String>(e.getMessage() + "\n" + e.getClass().toString(), HttpStatus.INTERNAL_SERVER_ERROR);
		}

		return response;
	}
}
