package server.projectdnd.DatabaseLayers.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class CharacterSheetEntity {

    // description panel start
    @Id
    private int id;

    @Column
    private String characterName;

    @Column
    private String classNLevel;

    @Column
    private String characterBackground;

    @Column
    private String playerName;

    @Column
    private String characterFaction;

    @Column
    private String characterAlignment;

    @Column
    private String characterRace;

    @Column
    private int experiencePoints;

    //description panel end

    // stat panel start

    @Column
    private double strenght;

    @Column
    private double dexterity;

    @Column
    private double constitution;

    @Column
    private double intelligence;

    @Column
    private double wisdom;

    @Column
    private double charisma;

    // stat panel end

    // skill and save panel start

    @Column
    private double insperation;

    @Column
    private double proficiencyBonus;

    @Column
    private boolean strengthSave;

    @Column
    private boolean dexteritySave;

    @Column
    private boolean constitutionSave;

    @Column
    private boolean intelligenceSave;

    @Column
    private boolean wisdomSave;

    @Column
    private boolean charismaSave;

    //skill and save panel end

    public int getId() {
        return id;
    }
	// description panel getters and setters start
    public void setId(int id) {
        this.id = id;
    }

	public String getCharacterName() {
		return characterName;
	}

	public void setCharacterName(String characterName) {
		this.characterName = characterName;
	}

	public String getClassNLevel() {
		return classNLevel;
	}

	public void setClassNLevel(String classNLevel) {
		this.classNLevel = classNLevel;
	}

	public String getCharacterBackground() {
		return characterBackground;
	}

	public void setCharacterBackground(String characterBackground) {
		this.characterBackground = characterBackground;
	}

	public String getPlayerName() {
		return playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getCharacterFaction() {
		return characterFaction;
	}

	public void setCharacterFaction(String characterFaction) {
		this.characterFaction = characterFaction;
	}

	public String getCharacterAlignment() {
		return characterAlignment;
	}

	public void setCharacterAlignment(String characterAlignment) {
		this.characterAlignment = characterAlignment;
	}

	public String getCharacterRace() {
		return characterRace;
	}

	public void setCharacterRace(String characterRace) {
		this.characterRace = characterRace;
	}

	public int getExperiencePoints() {
		return experiencePoints;
	}

	public void setExperiencePoints(int experiencePoints) {
		this.experiencePoints = experiencePoints;
	}
	// description panel getter and setter end

	// stat panel getter and setter start
	public double getStrenght() {
		return strenght;
	}

	public void setStrenght(double strenght) {
		this.strenght = strenght;
	}

	public double getDexterity() {
		return dexterity;
	}

	public void setDexterity(double dexterity) {
		this.dexterity = dexterity;
	}

	public double getConstitution() {
		return constitution;
	}

	public void setConstitution(double constitution) {
		this.constitution = constitution;
	}

	public double getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(double intelligence) {
		this.intelligence = intelligence;
	}

	public double getWisdom() {
		return wisdom;
	}

	public void setWisdom(double wisdom) {
		this.wisdom = wisdom;
	}

	public double getCharisma() {
		return charisma;
	}

	public void setCharisma(double charisma) {
		this.charisma = charisma;
	}
	// stat panel getter and setter end
	
	// skill and save panel getter and setter start
	public double getInsperation() {
		return insperation;
	}

	public void setInsperation(double insperation) {
		this.insperation = insperation;
	}

	public double getProficiencyBonus() {
		return proficiencyBonus;
	}

	public void setProficiencyBonus(double proficiencyBonus) {
		this.proficiencyBonus = proficiencyBonus;
	}

	public boolean isStrengthSave() {
		return strengthSave;
	}

	public void setStrengthSave(boolean strengthSave) {
		this.strengthSave = strengthSave;
	}

	public boolean isDexteritySave() {
		return dexteritySave;
	}

	public void setDexteritySave(boolean dexteritySave) {
		this.dexteritySave = dexteritySave;
	}

	public boolean isConstitutionSave() {
		return constitutionSave;
	}

	public void setConstitutionSave(boolean constitutionSave) {
		this.constitutionSave = constitutionSave;
	}

	public boolean isIntelligenceSave() {
		return intelligenceSave;
	}

	public void setIntelligenceSave(boolean intelligenceSave) {
		this.intelligenceSave = intelligenceSave;
	}

	public boolean isWisdomSave() {
		return wisdomSave;
	}

	public void setWisdomSave(boolean wisdomSave) {
		this.wisdomSave = wisdomSave;
	}

	public boolean isCharismaSave() {
		return charismaSave;
	}

	public void setCharismaSave(boolean charismaSave) {
		this.charismaSave = charismaSave;
	}
	// skill and save panel getter and setter end
    
}
