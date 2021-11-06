package server.projectdnd.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import server.projectdnd.dtos.MoodPointDTO;

@RestController
public class MoodController {
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/savemood")
	public ResponseEntity<String> SaveMood(@RequestBody MoodPointDTO moodPoint) {
		
		ResponseEntity<String> response = null;

		// this prints out what you received from the backend; this is a custom toString() method
		System.out.println(moodPoint.toString());
		
		// what needs to happen here is you need to transform the MoodPointDTO into a MoodPointEntity
		
		
		// after your transform that, save the MoodPointEntity to the MoodPointRepository
		
		
		// send this response text back to the front-end
		response = new ResponseEntity<String>("I finished saving data", HttpStatus.OK);

		return response;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/getmoods")
	public ResponseEntity<List<MoodPointDTO>> getAllMoods() {
		
		ResponseEntity<List<MoodPointDTO>> response = null;
		
		/* this is an empty list to add your moodPoints to, to send this list back to the frontend */
		List<MoodPointDTO> allMoodPointsDTO = new ArrayList<MoodPointDTO>();
		
		// use the MoodPointRepository to get all the MoodPoints stored in the database, this will be a list of MoodPointEntity
		
		
		// transform each of the MoodPointEntity to a MoodPointDTO object, then add that MoodPointDTO Object to the allMoodPointsDTO list
		
		
		// all the MoodPointDTO objects that you added to the allMoodPointsDTO list will go back
		response = new ResponseEntity<List<MoodPointDTO>>(allMoodPointsDTO, HttpStatus.OK);
		
		return response;
	}
}
