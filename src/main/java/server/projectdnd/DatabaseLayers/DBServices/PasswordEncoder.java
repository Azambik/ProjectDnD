package server.projectdnd.DatabaseLayers.DBServices;
import org.springframework.context.annotation.Bean;

public class PasswordEncoder {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public String encode(String passWord) {
        // TODO Auto-generated method stub
        return null;
    }
}
