package server.projectdnd.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.projectdnd.DatabaseLayers.Entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
}
