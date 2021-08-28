package server.projectdnd.DatabaseLayers.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import server.projectdnd.DatabaseLayers.Entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String>{
	public List<UserEntity> findByEmail(String email);
}
