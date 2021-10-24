package server.projectdnd.Controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import server.projectdnd.dtos.MoodPointDTO;

public class MoodController {
	
	@PostMapping("/savemood")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<String> SaveMood(@RequestBody MoodPointDTO moodPoint) {

		System.out.println(moodPoint.toString());

		ResponseEntity<String> response = null;

		response = new ResponseEntity<String>("I got data", HttpStatus.OK);

		return response;
	}
}
