package server.projectdnd.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import server.projectdnd.DatabaseLayers.DBServices.UserDBService;
import server.projectdnd.DatabaseLayers.Entities.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    
    @Autowired
    private UserDBService userDBService;

    @GetMapping("/allusers")
    public List<User> getAllUsers() {
        return userDBService.getAllUsers();
    }
}
