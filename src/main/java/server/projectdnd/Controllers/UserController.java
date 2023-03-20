package server.projectdnd.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import server.projectdnd.DatabaseLayers.DBServices.PasswordEncoder;
import server.projectdnd.DatabaseLayers.Entities.User;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    
    @GetMapping("users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }
    //@GetMapping("users/login")
    @RequestMapping(value="user/login", method = RequestMethod.GET)
    public @ResponseBody boolean getUsersforLogin(@RequestParam("userName") String userName, @RequestParam("passWord") String passWord) {
      boolean validLogin = false;
      List < User > userList = this.userRepository.findAll();
      if(userList != null){
        for(User userRef: userList){
            if(userRef.getUserName().equals(userName) && userRef.getPassWord().equals(passWord)){
               validLogin = true;
            }
        }
      }
      return validLogin;
    }

    @PostMapping("users")
    public HttpStatus createUser(@RequestBody User user){
        if (user != null){
            String username = user.getUserName().toLowerCase();
            String email = user.getEmail().toLowerCase();
            user.setUserName(username);
            user.setEmail(email);  
        }
        this.userRepository.save(user);
        return HttpStatus.CREATED;
    } 

}
