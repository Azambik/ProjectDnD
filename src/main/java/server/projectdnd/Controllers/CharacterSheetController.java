package server.projectdnd.Controllers;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import server.projectdnd.DatabaseLayers.Entities.CharacterSheetEntity;
import server.projectdnd.DatabaseLayers.Repositories.CharacterSheetRepository;
//import server.projectdnd.dtos.CharacterSheet;

@RestController
@RequestMapping("/character")
@CrossOrigin(origins = "http://localhost:4200")
public class CharacterSheetController {

    CharacterSheetRepository characterSheetRepository;

    public CharacterSheetController(CharacterSheetRepository characterSheetRepository){
        this.characterSheetRepository = characterSheetRepository;
    }
	//@Autowired
   // private CharacterSheetRepository characterSheetRepo;
    //seting get request to send character sheet.
   // @GetMapping("/getCharacterSheet")
   // public CharacterSheet getCharacterSheet() {
    	
    	//CharacterSheet sheet = new CharacterSheet();
    	
    	// CharacterSheet rawSheet = characterSheetRepo.getOne(id);
    	
    	
    	//return sheet;
   // }
    @PostMapping("/saveCharacterSheet")                 
    public HttpStatus addCharacterSheet(@RequestBody CharacterSheetEntity characterSheetEntity ){
        characterSheetRepository.save(characterSheetEntity);
       return HttpStatus.CREATED;
    }
}
