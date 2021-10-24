package server.projectdnd.DatabaseLayers.Entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.checkerframework.checker.units.qual.C;

@Entity
@Table(name = "CharacterSheet")
public class CharacterSheetEntity {

    // description panel start
    @Id
    private int id;

    @Column
    private String characterName;

    @Column
    private String classNLevel;

	@Column
	private String background;

	@Column
	private String playerName;

	@Column
	private String faction;

    @Column
    private String alignment;

	@Column
	private String race;

    @Column
    private int exp;

	@Column
	private int age;

	@Column
	private String height;

	@Column
	private String weight;

	@Column
	private String eyes;

	@Column
	private String skin;

	@Column
	private String hair;

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

    // skill save panel
	@Column
	private double inspiration;

	@Column
	private double proficiencyBonus;

	@Column
	private double strengthSave;

	@Column
	private double dexteritySave;

	@Column
	private double constitutionSave;

	@Column
	private double intelligenceSave;

	@Column
	private double wisdomSave;

	@Column
	private double charismaSave;

	@Column
	private boolean strengthTick;

	@Column
	private boolean dexterityTick;

	@Column
	private boolean constitutionTick;

	@Column
	private boolean intelligenceTick;

	@Column
	private boolean wisdomTick;

	@Column
	private boolean charismaTick;

	// skill panel
	@Column
	private double acrobatics;

	@Column
	private double animalHandling;

	@Column
	private double arcana;

	@Column
	private double athletics;

	@Column
	private double deception;

	@Column
	private double history;

	@Column
	private double insight;

	@Column
	private double intimidation;

	@Column
	private double investigation;

	@Column
	private double medicine;

	@Column
	private double nature;

	@Column
	private double perception;

	@Column
	private double performance;

	@Column
	private double persuasion;

	@Column
	private double religion;

	@Column
	private double slightOfHand;

	@Column
	private double stealth;

	@Column
	private double survival;

	@Column
	private boolean acrobaticsTick;

	@Column
	private boolean animalHandlingTick;

	@Column
	private boolean arcanaTick;

	@Column
	private boolean athleticsTick;

	@Column
	private boolean deceptionTick;

	@Column
	private boolean historyTick;

	@Column
	private boolean insightTick;

	@Column
	private boolean intimidationTick;

	@Column
	private boolean investigationTick;

	@Column
	private boolean medicineTick;
	
	@Column
	private boolean natureTick;
	
	@Column
	private boolean perceptionTick;
	
	@Column
	private boolean performanceTick;
	
	@Column
	private boolean persuasionTick;
	
	@Column
	private boolean religionTick;
	
	@Column
	private boolean slightOfHandTick;
	
	@Column
	private boolean stealthTick;
	
	@Column
	private boolean survivalTick;
	// combat panel
	@Column
	private double armorClass;
	
	@Column
	private double initiative;
	
	@Column
	private double speed;
	
	@Column
	private double hitPointMaximum;
	
	@Column
	private double currentHitPoints;
	
	@Column
	private double temporaryHitPoint;
	
	@Column
	private String hitDie;
	// attack panel
	@Column
	private String attackOne;
	
	@Column
	private String attackBonusOne;
	
	@Column
	private String attackTypeOne;
	
	@Column
	private String attackTwo;
	
	@Column
	private String attackBonusTwo;
	
	@Column
	private String attackTypeTwo;
	
	@Column
	private String attackThree;
	
	@Column
	private String attackBonusThree;
	
	@Column
	private String attackTypeThree;
	
	@Column
	private String attackFour;
	
	@Column
	private String attackBonusFour;
	
	@Column
	private String attackTypeFour;
	// personality panel
	@Column
	private String personalityTraits;
	
	@Column
	private String ideals;
	
	@Column
	private String bonds;
	
	@Column
	private String flaws;
	// equipment panel
	@Column
	private String equipment;
	
	@Column
	private double copperPoints;
	
	@Column
	private double silverPoints;
	
	@Column
	private double electrumPoints;
	
	@Column
	private double goldPoints;
	
	@Column
	private double platinumPoints;
	// character details panel
	@Column
	private String darkGift;
	
	@Column
	private String additionalFeaturesAndTraits;
	
	@Column
	private String characterBackStory;
	
	@Column
	private String alliesAndOrganizations;
	
	@Column
	private String treasure;
	// spell panel header
	@Column
	private String spellCastingClass;
	
	@Column
	private String spellCastingAbility;
	
	@Column
	private String spellSaveDC;
	
	@Column
	private String spellAttackBonus;
	// spell panel cantrips
	@Column
	private String cantripOne;
	
	@Column
	private String cantripTwo;
	
	@Column
	private String cantripThree;
	
	@Column
	private String cantripFour;
	
	@Column
	private String cantripFive;
	
	@Column
	private String cantripSix;
	
	@Column
	private String cantripSeven;
	
	@Column
	private String cantripEight;
	// spell panel level 1
	@Column
	private String l1Slot1;
	
	@Column
	private String l1Slot2;
	
	@Column
	private String l1Slot3;
	
	@Column
	private String l1Slot4;
	
	@Column
	private String l1Slot5;
	
	@Column
	private String l1Slot6;
	
	@Column
	private String l1Slot7;
	
	@Column
	private String l1Slot8;
	
	@Column
	private String l1Slot9;
	
	@Column
	private String l1Slot10;
	
	@Column
	private String l1Slot11;
	
	@Column
	private String l1Slot12;
	
	@Column
	private boolean l1Slot1Tick;
	
	@Column
	private boolean l1Slot2Tick;
	
	@Column
	private boolean l1Slot3Tick;
	
	@Column
	private boolean l1Slot4Tick;
	
	@Column
	private boolean l1Slot5Tick;
	
	@Column
	private boolean l1Slot6Tick;
	
	@Column
	private boolean l1Slot7Tick;
	
	@Column
	private boolean l1Slot8Tick;
	
	@Column
	private boolean l1Slot9Tick;
	
	@Column
	private boolean l1Slot10Tick;
	
	@Column
	private boolean l1Slot11Tick;
	
	@Column
	private boolean l1Slot12Tick;
	// spell panel level 2
	@Column
	private String l2Slot1;
	
	@Column
	private String l2Slot2;
	
	@Column
	private String l2Slot3;
	
	@Column
	private String l2Slot4;
	
	@Column
	private String l2Slot5;
	
	@Column
	private String l2Slot6;
	
	@Column
	private String l2Slot7;
	
	@Column
	private String l2Slot8;
	
	@Column
	private String l2Slot9;
	
	@Column
	private String l2Slot10;
	
	@Column
	private String l2Slot11;
	
	@Column
	private String l2Slot12;
	
	@Column
	private boolean l2Slot1Tick;
	
	@Column
	private boolean l2Slot2Tick;
	
	@Column
	private boolean l2Slot3Tick;
	
	@Column
	private boolean l2Slot4Tick;
	
	@Column
	private boolean l2Slot5Tick;
	
	@Column
	private boolean l2Slot6Tick;
	
	@Column
	private boolean l2Slot7Tick;
	
	@Column
	private boolean l2Slot8Tick;
	
	@Column
	private boolean l2Slot9Tick;
	
	@Column
	private boolean l2Slot10Tick;
	
	@Column
	private boolean l2Slot11Tick;
	
	@Column
	private boolean l2Slot12Tick;
	// spell panel level 3
	@Column
	private String l3Slot1;
	
	@Column
	private String l3Slot2;
	
	@Column
	private String l3Slot3;
	
	@Column
	private String l3Slot4;
	
	@Column
	private String l3Slot5;
	
	@Column
	private String l3Slot6;
	
	@Column
	private String l3Slot7;
	
	@Column
	private String l3Slot8;
	
	@Column
	private String l3Slot9;
	
	@Column
	private String l3Slot10;
	
	@Column
	private String l3Slot11;
	
	@Column
	private String l3Slot12;
	
	@Column
	private boolean l3Slot1Tick;
	
	@Column
	private boolean l3Slot2Tick;
	
	@Column
	private boolean l3Slot3Tick;
	
	@Column
	private boolean l3Slot4Tick;
	
	@Column
	private boolean l3Slot5Tick;
	
	@Column
	private boolean l3Slot6Tick;
	
	@Column
	private boolean l3Slot7Tick;
	
	@Column
	private boolean l3Slot8Tick;
	
	@Column
	private boolean l3Slot9Tick;
	
	@Column
	private boolean l3Slot10Tick;
	
	@Column
	private boolean l3Slot11Tick;
	
	@Column
	private boolean l3Slot12Tick;
	// spell panel level 4
	@Column
	private String l4Slot1;
	
	@Column
	private String l4Slot2;
	
	@Column
	private String l4Slot3;
	
	@Column
	private String l4Slot4;
	
	@Column
	private String l4Slot5;
	
	@Column
	private String l4Slot6;
	
	@Column
	private String l4Slot7;
	
	@Column
	private String l4Slot8;
	
	@Column
	private String l4Slot9;
	
	@Column
	private String l4Slot10;
	
	@Column
	private String l4Slot11;
	
	@Column
	private String l4Slot12;
	
	@Column
	private boolean l4Slot1Tick;
	
	@Column
	private boolean l4Slot2Tick;
	
	@Column
	private boolean l4Slot3Tick;
	
	@Column
	private boolean l4Slot4Tick;
	
	@Column
	private boolean l4Slot5Tick;

    @Column
	private boolean l4Slot6Tick;

    @Column
	private boolean l4Slot7Tick;

    @Column
	private boolean l4Slot8Tick;

	@Column
	private boolean l4Slot9Tick;

	@Column
	private boolean l4Slot10Tick;

	@Column
	private boolean l4Slot11Tick;

	@Column
	private boolean l4Slot12Tick;
	// spell panel level 5
	@Column
	private String l5Slot1;

	@Column
	private String l5Slot2;

	@Column
	private String l5Slot3;

	@Column
	private String l5Slot4;

	@Column
	private String l5Slot5;

	@Column
	private String l5Slot6;

	@Column
	private String l5Slot7;

	@Column
	private String l5Slot8;
	
	@Column
	private String l5Slot9;

	@Column
	private String l5Slot10;

	@Column
	private String l5Slot11;

	@Column
	private String l5Slot12;

	@Column
	private boolean l5Slot1Tick;

	@Column
	private boolean l5Slot2Tick;

	@Column
	private boolean l5Slot3Tick;

	@Column
	private boolean l5Slot4Tick;

	@Column
	private boolean l5Slot5Tick;

	@Column
	private boolean l5Slot6Tick;
	
	@Column
	private boolean l5Slot7Tick;

	@Column
	private boolean l5Slot8Tick;

	@Column
	private boolean l5Slot9Tick;

	@Column
	private boolean l5Slot10Tick;

	@Column
	private boolean l5Slot11Tick;

	@Column
	private boolean l5Slot12Tick;
	// spell panel level 6
	@Column
	private String l6Slot1;

	@Column
	private String l6Slot2;

	@Column
	private String l6Slot3;

	@Column
	private String l6Slot4;

	@Column
	private String l6Slot5;

	@Column
	private String l6Slot6;

	@Column
	private String l6Slot7;

	@Column
	private String l6Slot8;

	@Column
	private String l6Slot9;
	
	@Column	
	private String l6Slot10;

	@Column
	private String l6Slot11;

	@Column
	private String l6Slot12;

	@Column
	private boolean l6Slot1Tick;

	@Column
	private boolean l6Slot2Tick;

	@Column
	private boolean l6Slot3Tick;

	@Column
	private boolean l6Slot4Tick;

	@Column
	private boolean l6Slot5Tick;

	@Column
	private boolean l6Slot6Tick;

	@Column
	private boolean l6Slot7Tick;

	@Column
	private boolean l6Slot8Tick;

	@Column
	private boolean l6Slot9Tick;

	@Column
	private boolean l6Slot10Tick;

	@Column
	private boolean l6Slot11Tick;

	@Column
	private boolean l6Slot12Tick;
	// spell panel level 7
	@Column
	private String l7Slot1;

	@Column
	private String l7Slot2;

	@Column
	private String l7Slot3;

	@Column
	private String l7Slot4;

	@Column
	private String l7Slot5;

	@Column
	private String l7Slot6;

	@Column
	private String l7Slot7;

	@Column
	private String l7Slot8;

	@Column
	private String l7Slot9;

	@Column
	private String l7Slot10;

	@Column
	private String l7Slot11;
	
	@Column	
	private String l7Slot12;

	@Column
	private boolean l7Slot1Tick;

	@Column
	private boolean l7Slot2Tick;
	
	@Column
	private boolean l7Slot3Tick;

	@Column
	private boolean l7Slot4Tick;
	
	@Column
	private boolean l7Slot5Tick;
	
	@Column
	private boolean l7Slot6Tick;

	@Column
	private boolean l7Slot7Tick;

	@Column
	private boolean l7Slot8Tick;

	@Column
	private boolean l7Slot9Tick;

	@Column
	private boolean l7Slot10Tick;

	@Column
	private boolean l7Slot11Tick;
	
	@Column
	private boolean l7Slot12Tick;
	// spell panel level 8
	@Column
	private String l8Slot1;

	@Column
	private String l8Slot2;

	@Column
	private String l8Slot3;

	@Column
	private String l8Slot4;

	@Column
	private String l8Slot5;

	@Column
	private String l8Slot6;

	@Column
	private String l8Slot7;

	@Column
	private String l8Slot8;

	@Column
	private String l8Slot9;

	@Column
	private String l8Slot10;
	
	@Column
	private String l8Slot11;
	
	@Column
	private String l8Slot12;

	@Column
	private boolean l8Slot1Tick;

	@Column
	private boolean l8Slot2Tick;
	
	@Column
	private boolean l8Slot3Tick;

	@Column
	private boolean l8Slot4Tick;

	@Column
	private boolean l8Slot5Tick;

	@Column
	private boolean l8Slot6Tick;

	@Column
	private boolean l8Slot7Tick;

	@Column
	private boolean l8Slot8Tick;

	@Column
	private boolean l8Slot9Tick;

	@Column
	private boolean l8Slot10Tick;

	@Column
	private boolean l8Slot11Tick;

	@Column
	private boolean l8Slot12Tick;
	// spell panel level 1
	@Column
	private String l9Slot1;

	@Column
	private String l9Slot2;

	@Column
	private String l9Slot3;

	@Column
	private String l9Slot4;

	@Column
	private String l9Slot5;

	@Column
	private String l9Slot6;

	@Column
	private String l9Slot7;

	@Column
	private String l9Slot8;

	@Column
	private String l9Slot9;

	@Column
	private String l9Slot10;

	@Column
	private String l9Slot11;

	@Column
	private String l9Slot12;

	@Column
	private boolean l9Slot1Tick;

	@Column
	private boolean l9Slot2Tick;

	@Column
	private boolean l9Slot3Tick;

	@Column
	private boolean l9Slot4Tick;

	@Column
	private boolean l9Slot5Tick;

	@Column
	private boolean l9Slot6Tick;

	@Column
	private boolean l9Slot7Tick;

	@Column
	private boolean l9Slot8Tick;

	@Column
	private boolean l9Slot9Tick;

	@Column
	private boolean l9Slot10Tick;

	@Column
	private boolean l9Slot11Tick;

	@Column
	private boolean l9Slot12Tick;

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
