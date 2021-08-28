package server.projectdnd.utils;

public class Utils {
	
	public static boolean isNullOrWhiteSpace(String value) {
		return value == null || value.isBlank();
	}
	
	public static boolean isNullOrWhiteSpace(StringBuilder value) {
		return value == null || value.length() == 0;
	}
}
