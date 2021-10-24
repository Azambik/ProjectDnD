package server.projectdnd.olddndstuff;

//import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CharacterSheetRepository extends CrudRepository<CharacterSheetEntity, Long>{
}
