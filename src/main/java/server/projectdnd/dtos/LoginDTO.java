package server.projectdnd.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LoginDTO {

	private String email;
	private String username;
	private String password;

	@JsonProperty("username")
	public String getUsername() {
		return username;
	}
	
	@JsonProperty("username")
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	@JsonProperty("password")
	public String getPassword() {
		return password;
	}
	
	@JsonProperty("password")
	public void setPassword(String password) {
		this.password = password;
	}
}