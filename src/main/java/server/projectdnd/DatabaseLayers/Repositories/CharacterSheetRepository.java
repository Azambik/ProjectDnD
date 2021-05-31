package server.projectdnd.DatabaseLayers.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import server.projectdnd.DatabaseLayers.Entities.CharacterSheet;

public interface CharacterSheetRepository extends JpaRepository<CharacterSheet, Integer>{
}
