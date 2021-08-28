package server.projectdnd.dtos;

public class CharacterSheet {

	private int id;
	private String characterName;
	private String classNLevel;
	private String characterBackground;
	private String playerName;
	private String characterFaction;
	private String characterAlignment;
	private String characterRace;
	private int experiencePoints;
	private double strength;
	private double strengthModifier;
	private double dexterity;
	private double dexterityModifier;
	private double constitution;
	private double constitutionModifier;
	private double intelligence;
	private double intelligenceModifier;
	private double wisdom;
	private double wisdomModifier;
	private double charisma;
	private double charismaModifier;

	public int getId() {
		return id;
	}
	public void setId(int id){
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
	public double getStrength() {
		return strength;
	}
	public void setStrength(double strength) {
		this.strength = strength;
	}
	public double getStrengthModifier() {
		if(strength == 1) {
			strengthModifier = -5;
		}
		if(strength == 2 || strength == 3) {
			strengthModifier = -4;
		}
		if(strength == 4 || strength == 5) {
			strengthModifier = -3;
		}
		if(strength == 6 || strength == 7) {
			strengthModifier = -2;
		}
		if(strength == 8 || strength == 9) {
			strengthModifier = -1;
		}
		if(strength == 10 || strength == 11  ) {
			strengthModifier = 0;
		}
		if(strength == 12 || strength == 13  ) {
			strengthModifier = 1;
		}
		if(strength == 14 || strength == 15  ) {
			strengthModifier = 2;
		}
		if(strength == 16 || strength == 17  ) {
			strengthModifier = 3;
		}
		if(strength == 18 || strength == 19  ) {
			strengthModifier = 4;
		}
		if(strength == 20 || strength == 21  ) {
			strengthModifier = 5;
		}
		if(strength == 22 || strength == 23  ) {
			strengthModifier = 6;
		}
		if(strength == 24 || strength == 25  ) {
			strengthModifier = 7;
		}
		if(strength == 26 || strength == 27  ) {
			strengthModifier = 8;
		}
		if(strength == 28 || strength == 29  ) {
			strengthModifier = 9;
		}
		if(strength >= 30 ) {
			strengthModifier = 10;
		}
		return strengthModifier;
	}
	public void setStrengthModifier(double strengthModifier) {
		this.strengthModifier = strengthModifier;
	}
	public double getDexterity() {
		return dexterity;
	}
	public void setDexterity(double dexterity) {
		this.dexterity = dexterity;
	}
	public double getDexterityModifier() {
		if(dexterity == 1) {
			dexterityModifier = -5;
		}
		if(dexterity == 2 || dexterity == 3) {
			dexterityModifier = -4;
		}
		if(dexterity == 4 || dexterity == 5) {
			dexterityModifier = -3;
		}
		if(dexterity == 6 || dexterity == 7) {
			dexterityModifier = -2;
		}
		if(dexterity == 8 || dexterity == 9) {
			dexterityModifier = -1;
		}
		if(dexterity == 10 || dexterity == 11  ) {
			dexterityModifier = 0;
		}
		if(dexterity == 12 || dexterity == 13  ) {
			dexterityModifier = 1;
		}
		if(dexterity == 14 || dexterity == 15  ) {
			dexterityModifier = 2;
		}
		if(dexterity == 16 || dexterity == 17  ) {
			dexterityModifier = 3;
		}
		if(dexterity == 18 || dexterity == 19  ) {
			dexterityModifier = 4;
		}
		if(dexterity == 20 || dexterity == 21  ) {
			dexterityModifier = 5;
		}
		if(dexterity == 22 || dexterity == 23  ) {
			dexterityModifier = 6;
		}
		if(dexterity == 24 || dexterity == 25  ) {
			dexterityModifier = 7;
		}
		if(dexterity == 26 || dexterity == 27  ) {
			dexterityModifier = 8;
		}
		if(dexterity == 28 || dexterity == 29  ) {
			dexterityModifier = 9;
		}
		if(dexterity >= 30 ) {
			dexterityModifier = 10;
		}
		return dexterityModifier;
	}
	public void setDexterityModifier(double dexterityModifier) {
		this.dexterityModifier = dexterityModifier;
	}
	public double getConstitution() {
		return constitution;
	}
	public void setConstitution(double constitution) {
		this.constitution = constitution;
	}
	public double getConstitutionModifier() {
		if(constitution == 1) {
			constitutionModifier = -5;
		}
		if(constitution == 2 || constitution == 3) {
			constitutionModifier = -4;
		}
		if(constitution == 4 || constitution == 5) {
			constitutionModifier = -3;
		}
		if(constitution == 6 || constitution == 7) {
			constitutionModifier = -2;
		}
		if(constitution == 8 || constitution == 9) {
			constitutionModifier = -1;
		}
		if(constitution == 10 || constitution == 11  ) {
			constitutionModifier = 0;
		}
		if(constitution == 12 || constitution == 13  ) {
			constitutionModifier = 1;
		}
		if(constitution == 14 || constitution == 15  ) {
			constitutionModifier = 2;
		}
		if(constitution == 16 || constitution == 17  ) {
			constitutionModifier = 3;
		}
		if(constitution == 18 || constitution == 19  ) {
			constitutionModifier = 4;
		}
		if(constitution == 20 || constitution == 21  ) {
			constitutionModifier = 5;
		}
		if(constitution == 22 || constitution == 23  ) {
			constitutionModifier = 6;
		}
		if(constitution == 24 || constitution == 25  ) {
			constitutionModifier = 7;
		}
		if(constitution == 26 || constitution == 27  ) {
			constitutionModifier = 8;
		}
		if(constitution == 28 || constitution == 29  ) {
			constitutionModifier = 9;
		}
		if(constitution >= 30 ) {
			constitutionModifier = 10;
		}
		return constitutionModifier;
	}
	public void setConstitutionModifier(double constitutionModifier) {
		this.constitutionModifier = constitutionModifier;
	}
	public double getIntelligence() {
		return intelligence;
	}
	public void setIntelligence(double intelligence) {
		this.intelligence = intelligence;
	}
	public double getIntelligenceModifier() {
		if(intelligence == 1) {
			intelligenceModifier = -5;
		}
		if(intelligence == 2 || intelligence == 3) {
			intelligenceModifier = -4;
		}
		if(intelligence == 4 || intelligence == 5) {
			intelligenceModifier = -3;
		}
		if(intelligence == 6 || intelligence == 7) {
			intelligenceModifier = -2;
		}
		if(intelligence == 8 || intelligence == 9) {
			intelligenceModifier = -1;
		}
		if(intelligence == 10 || intelligence == 11  ) {
			intelligenceModifier = 0;
		}
		if(intelligence == 12 || intelligence == 13  ) {
			intelligenceModifier = 1;
		}
		if(intelligence == 14 || intelligence == 15  ) {
			intelligenceModifier = 2;
		}
		if(intelligence == 16 || intelligence == 17  ) {
			intelligenceModifier = 3;
		}
		if(intelligence == 18 || intelligence == 19  ) {
			intelligenceModifier = 4;
		}
		if(intelligence == 20 || intelligence == 21  ) {
			intelligenceModifier = 5;
		}
		if(intelligence == 22 || intelligence == 23  ) {
			intelligenceModifier = 6;
		}
		if(intelligence == 24 || intelligence == 25  ) {
			intelligenceModifier = 7;
		}
		if(intelligence == 26 || intelligence == 27  ) {
			intelligenceModifier = 8;
		}
		if(intelligence == 28 || intelligence == 29  ) {
			intelligenceModifier = 9;
		}
		if(intelligence >= 30 ) {
			intelligenceModifier = 10;
		}
		return intelligenceModifier;
	}
	public void setIntelligenceModifier(double intelligenceModifier) {
		this.intelligenceModifier = intelligenceModifier;
	}
	public double getWisdom() {
		return wisdom;
	}
	public void setWisdom(double wisdom) {
		this.wisdom = wisdom;
	}
	public double getWisdomModifier() {
		if(wisdom == 1) {
			wisdomModifier = -5;
		}
		if(wisdom == 2 || wisdom == 3) {
			wisdomModifier = -4;
		}
		if(wisdom == 4 || wisdom == 5) {
			wisdomModifier = -3;
		}
		if(wisdom == 6 || wisdom == 7) {
			wisdomModifier = -2;
		}
		if(wisdom == 8 || wisdom == 9) {
			wisdomModifier = -1;
		}
		if(wisdom == 10 || wisdom == 11  ) {
			wisdomModifier = 0;
		}
		if(wisdom == 12 || wisdom == 13  ) {
			wisdomModifier = 1;
		}
		if(wisdom == 14 || wisdom == 15  ) {
			wisdomModifier = 2;
		}
		if(wisdom == 16 || wisdom == 17  ) {
			wisdomModifier = 3;
		}
		if(wisdom == 18 || wisdom == 19  ) {
			wisdomModifier = 4;
		}
		if(wisdom == 20 || wisdom == 21  ) {
			wisdomModifier = 5;
		}
		if(wisdom == 22 || wisdom == 23  ) {
			wisdomModifier = 6;
		}
		if(wisdom == 24 || wisdom == 25  ) {
			wisdomModifier = 7;
		}
		if(wisdom == 26 || wisdom == 27  ) {
			wisdomModifier = 8;
		}
		if(wisdom == 28 || wisdom == 29  ) {
			wisdomModifier = 9;
		}
		if(wisdom >= 30 ) {
			wisdomModifier = 10;
		}
		return wisdomModifier;
	}
	public void setwisdomModifier(double wisdomModifier) {
		this.wisdomModifier = wisdomModifier;
	}
	public double getCharisma() {
		return charisma;
	}
	public void setCharisma(double charisma) {
		this.charisma = charisma;
	}
	public double getCharismaModifier() {
		if(charisma == 1) {
			charismaModifier = -5;
		}
		if(charisma == 2 || charisma == 3) {
			charismaModifier = -4;
		}
		if(charisma == 4 || charisma == 5) {
			charismaModifier = -3;
		}
		if(charisma == 6 || charisma == 7) {
			charismaModifier = -2;
		}
		if(charisma == 8 || charisma == 9) {
			charismaModifier = -1;
		}
		if(charisma == 10 || charisma == 11  ) {
			charismaModifier = 0;
		}
		if(charisma == 12 || charisma == 13  ) {
			charismaModifier = 1;
		}
		if(charisma == 14 || charisma == 15  ) {
			charismaModifier = 2;
		}
		if(charisma == 16 || charisma == 17  ) {
			charismaModifier = 3;
		}
		if(charisma == 18 || charisma == 19  ) {
			charismaModifier = 4;
		}
		if(charisma == 20 || charisma == 21  ) {
			charismaModifier = 5;
		}
		if(charisma == 22 || charisma == 23  ) {
			charismaModifier = 6;
		}
		if(charisma == 24 || charisma == 25  ) {
			charismaModifier = 7;
		}
		if(charisma == 26 || charisma == 27  ) {
			charismaModifier = 8;
		}
		if(charisma == 28 || charisma == 29  ) {
			charismaModifier = 9;
		}
		if(charisma >= 30 ) {
			charismaModifier = 10;
		}
		return charismaModifier;
	}
	public void setCharismaModifier(double charismaModifier) {
		this.charismaModifier = charismaModifier;
	}
	
}
