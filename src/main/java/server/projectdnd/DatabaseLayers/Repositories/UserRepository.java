package server.projectdnd.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import server.projectdnd.DatabaseLayers.Entities.User;

public interface UserRepository extends JpaRepository<User, String>{
}
