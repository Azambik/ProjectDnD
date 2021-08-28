package server.projectdnd.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.projectdnd.DatabaseLayers.Entities.CharacterSheetEntity;

public interface CharacterSheetRepository extends JpaRepository<CharacterSheetEntity, Integer>{
}
