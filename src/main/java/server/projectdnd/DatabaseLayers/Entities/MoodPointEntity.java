package server.projectdnd.DatabaseLayers.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "moodPoints")
public class MoodPointEntity {
    @Id
    private int id;
    
    @Column
    private String mood;

    @Column
    private String moodText;

    public int getId() {
        return id;
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

}
