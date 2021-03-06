package server.projectdnd.DatabaseLayers.DBServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import server.projectdnd.DatabaseLayers.Entities.User;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;

@Service
public class UserDBService {
    
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
