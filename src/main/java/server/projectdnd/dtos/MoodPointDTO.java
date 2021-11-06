package server.projectdnd.dtos;

public class MoodPointDTO {
	
	private int id;
	private String mood;
	private String moodText;
	
	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMood() {
		return this.mood;
	}

	public void setMood(String mood) {
		this.mood = mood;
	}
	public String getMoodText() {
		return this.moodText;
	}

	public void setMoodText(String moodText) {
		this.moodText = moodText;
	}


	@Override
	public String toString() {
		return "id: " + id + " mood: " + mood + " moodText: " + moodText;
	}
}


