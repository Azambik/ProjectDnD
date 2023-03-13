package server.projectdnd.Controllers;

//import javax.websocket.server.PathParam;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.projectdnd.DatabaseLayers.Entities.User;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;
//import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class UserController {
    
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }

    @PostMapping("users")
    public HttpStatus createUser(@RequestBody User user){
        this.userRepository.save(user);
        return HttpStatus.CREATED;
    }
    

}
