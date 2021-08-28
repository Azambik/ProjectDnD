package server.projectdnd.testdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import server.projectdnd.DatabaseLayers.Entities.UserEntity;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;
import server.projectdnd.pojos.SaltHash;

@Component
public class DBTestData {

	@Autowired
	private UserRepository userRepo;
	
	@EventListener
	public void appReady(ApplicationReadyEvent event) {
		
		SaltHash saltHash = server.projectdnd.utils.Encryptor.encryptPassword("test".toCharArray());
		UserEntity testUser = new UserEntity();
		testUser.setUsername("testuser");
		testUser.setEmail("test.user@gmail.com");
		testUser.setSalt(saltHash.getSalt());
		testUser.setPassword(saltHash.getHash());
		testUser = userRepo.save(testUser);
	}
}
