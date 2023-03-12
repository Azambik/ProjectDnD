package server.projectdnd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import server.projectdnd.DatabaseLayers.Entities.User;
import server.projectdnd.DatabaseLayers.Repositories.UserRepository;

@SpringBootApplication
public class ProjectDnDApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ProjectDnDApplication.class, args);
	}

	@Autowired 
	private UserRepository userRepository;

	@Override
	public void run(String...args) throws Exception {
		//this.userRepository.save(new User("bob", "grey", "bgrey@gmail.com"));
        //this.userRepository.save(new User("Tom", "Cruise", "tom@gmail.com"));
      //  this.userRepository.save(new User("Tony", "Stark", "tony@gmail.com"));
	}
}
