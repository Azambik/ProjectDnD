package server.projectdnd.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import server.projectdnd.DatabaseLayers.Repositories.CharacterSheetRepository;
import server.projectdnd.dtos.CharacterSheet;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CharacterSheetController {

	@Autowired
    private CharacterSheetRepository characterSheetRepo;
    //seting get request to send character sheet.
    @GetMapping("/getCharacterSheet")
    public CharacterSheet getCharacterSheet() {
    	
    	CharacterSheet sheet = new CharacterSheet();
    	
    	// CharacterSheet rawSheet = characterSheetRepo.getOne(id);
    	
    	// sheet.setStrength(rawSheet.getStrength());
    	// sheet.setStrengthModifier(rawSheet.getStrength() * 10);
    	
    	return sheet;
    }
    //@PostMapping("/saveCharacterSheet")
    //public CharacterSheetSave create(@Valid @RequestBody CharacterSheet characterSheet ){
    //    return CharacterSheetRepository.save(characterSheet);
   // }
}
