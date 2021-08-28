package server.projectdnd.pojos;

public class SaltHash {
	
	private String salt;
	private String hash;

	public String getSalt() {
		return salt;
	}
	public void setSalt(String salt) {
		this.salt = salt;
	}
	public String getHash() {
		return hash;
	}
	public void setHash(String hash) {
		this.hash = hash;
	}	
}
