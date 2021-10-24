package server.projectdnd.DatabaseLayers.Repositories;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import server.projectdnd.DatabaseLayers.Entities.CharacterSheetEntity;

public interface CharacterSheetRepository extends CrudRepository<CharacterSheetEntity, Long>{
}
