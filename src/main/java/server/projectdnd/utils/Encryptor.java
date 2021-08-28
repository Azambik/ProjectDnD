package server.projectdnd.utils;

import java.util.UUID;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import server.projectdnd.pojos.SaltHash;

public class Encryptor {
	
	public static SaltHash encryptPassword(char[] password) {
		
		SaltHash saltHash = new SaltHash();
		Argon2 argon2 = Argon2Factory.create();
		char[] passwordWithSalt = null;
		
		try {
			
			String salt = UUID.randomUUID().toString();
			passwordWithSalt = new StringBuilder()
				.append(password)
				.append(salt)
				.toString()
				.toCharArray();
			
			String hash = argon2.hash(10, 65536, 1, passwordWithSalt);
			
			saltHash.setHash(hash);
			saltHash.setSalt(salt);
		} finally {

			argon2.wipeArray(password);
			
			if (passwordWithSalt != null) {
				argon2.wipeArray(passwordWithSalt);
			}
		}
		
		return saltHash;
	}
	
	public static boolean checkPassword(String hash, char[] passwordWithSalt) {

		boolean retVal = false;
		Argon2 argon2 = Argon2Factory.create();
				
		try {

		    retVal = (argon2.verify(hash, passwordWithSalt));
		} finally {
		    
			argon2.wipeArray(passwordWithSalt);
		}
		
		return retVal;
	}	
}
