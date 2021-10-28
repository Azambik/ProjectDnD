package server.projectdnd.olddndstuff;

public class CharacterSheet {

	//description panel
	private int id;
	private String characterName;
	private String classNLevel;
	private String background;
	private String playerName;
	private String faction;
	private String alignment;
	private String race;
	private int exp;
	private int age;
	private String height;
	private String weight;
	private String eyes;
	private String skin;
	private String hair;
	// stat panel
	private double strength;
	private double dexterity;
	private double constitution;
	private double intelligence;
	private double wisdom;
	private double charisma;
	// skill save panel
	private double inspiration;
	private double proficiencyBonus;
	private double strengthSave;
	private double dexteritySave;
	private double constitutionSave;
	private double intelligenceSave;
	private double wisdomSave;
	private double charismaSave;
	private boolean strengthTick;
	private boolean dexterityTick;
	private boolean constitutionTick;
	private boolean intelligenceTick;
	private boolean wisdomTick;
	private boolean charismaTick;
	// skill panel
	private double acrobatics;
	private double animalHandling;
	private double arcana;
	private double athletics;
	private double deception;
	private double history;
	private double insight;
	private double intimidation;
	private double investigation;
	private double medicine;
	private double nature;
	private double perception;
	private double performance;
	private double persuasion;
	private double religion;
	private double slightOfHand;
	private double stealth;
	private double survival;
	private boolean acrobaticsTick;
	private boolean animalHandlingTick;
	private boolean arcanaTick;
	private boolean athleticsTick;
	private boolean deceptionTick;
	private boolean historyTick;
	private boolean insightTick;
	private boolean intimidationTick;
	private boolean investigationTick;
	private boolean medicineTick;
	private boolean natureTick;
	private boolean perceptionTick;
	private boolean performanceTick;
	private boolean persuasionTick;
	private boolean religionTick;
	private boolean slightOfHandTick;
	private boolean stealthTick;
	private boolean survivalTick;
	// combat panel
	private double armorClass;
	private double initiative;
	private double speed;
	private double hitPointMaximum;
	private double currentHitPoints;
	private double temporaryHitPoint;
	private String hitDie;
	// attack panel
	private String attackOne;
	private String attackBonusOne;
	private String attackTypeOne;
	private String attackTwo;
	private String attackBonusTwo;
	private String attackTypeTwo;
	private String attackThree;
	private String attackBonusThree;
	private String attackTypeThree;
	private String attackFour;
	private String attackBonusFour;
	private String attackTypeFour;
	// personality panel
	private String personalityTraits;
	private String ideals;
	private String bonds;
	private String flaws;
	// equipment panel
	private String equipment;
	private double copperPoints;
	private double silverPoints;
	private double electrumPoints;
	private double goldPoints;
	private double platinumPoints;
	// character details panel
	private String darkGift;
	private String additionalFeaturesAndTraits;
	private String characterBackStory;
	private String alliesAndOrganizations;
	private String treasure;
	// spell panel header
	private String spellCastingClass;
	private String spellCastingAbility;
	private String spellSaveDC;
	private String spellAttackBonus;
	// spell panel cantrips
	private String cantripOne;
	private String cantripTwo;
	private String cantripThree;
	private String cantripFour;
	private String cantripFive;
	private String cantripSix;
	private String cantripSeven;
	private String cantripEight;
	// spell panel level 1
	private String l1Slot1;
	private String l1Slot2;
	private String l1Slot3;
	private String l1Slot4;
	private String l1Slot5;
	private String l1Slot6;
	private String l1Slot7;
	private String l1Slot8;
	private String l1Slot9;
	private String l1Slot10;
	private String l1Slot11;
	private String l1Slot12;
	private boolean l1Slot1Tick;
	private boolean l1Slot2Tick;
	private boolean l1Slot3Tick;
	private boolean l1Slot4Tick;
	private boolean l1Slot5Tick;
	private boolean l1Slot6Tick;
	private boolean l1Slot7Tick;
	private boolean l1Slot8Tick;
	private boolean l1Slot9Tick;
	private boolean l1Slot10Tick;
	private boolean l1Slot11Tick;
	private boolean l1Slot12Tick;
	// spell panel level 2
	private String l2Slot1;
	private String l2Slot2;
	private String l2Slot3;
	private String l2Slot4;
	private String l2Slot5;
	private String l2Slot6;
	private String l2Slot7;
	private String l2Slot8;
	private String l2Slot9;
	private String l2Slot10;
	private String l2Slot11;
	private String l2Slot12;
	private boolean l2Slot1Tick;
	private boolean l2Slot2Tick;
	private boolean l2Slot3Tick;
	private boolean l2Slot4Tick;
	private boolean l2Slot5Tick;
	private boolean l2Slot6Tick;
	private boolean l2Slot7Tick;
	private boolean l2Slot8Tick;
	private boolean l2Slot9Tick;
	private boolean l2Slot10Tick;
	private boolean l2Slot11Tick;
	private boolean l2Slot12Tick;
	// spell panel level 3
	private String l3Slot1;
	private String l3Slot2;
	private String l3Slot3;
	private String l3Slot4;
	private String l3Slot5;
	private String l3Slot6;
	private String l3Slot7;
	private String l3Slot8;
	private String l3Slot9;
	private String l3Slot10;
	private String l3Slot11;
	private String l3Slot12;
	private boolean l3Slot1Tick;
	private boolean l3Slot2Tick;
	private boolean l3Slot3Tick;
	private boolean l3Slot4Tick;
	private boolean l3Slot5Tick;
	private boolean l3Slot6Tick;
	private boolean l3Slot7Tick;
	private boolean l3Slot8Tick;
	private boolean l3Slot9Tick;
	private boolean l3Slot10Tick;
	private boolean l3Slot11Tick;
	private boolean l3Slot12Tick;
	// spell panel level 4
	private String l4Slot1;
	private String l4Slot2;
	private String l4Slot3;
	private String l4Slot4;
	private String l4Slot5;
	private String l4Slot6;
	private String l4Slot7;
	private String l4Slot8;
	private String l4Slot9;
	private String l4Slot10;
	private String l4Slot11;
	private String l4Slot12;
	private boolean l4Slot1Tick;
	private boolean l4Slot2Tick;
	private boolean l4Slot3Tick;
	private boolean l4Slot4Tick;
	private boolean l4Slot5Tick;
	private boolean l4Slot6Tick;
	private boolean l4Slot7Tick;
	private boolean l4Slot8Tick;
	private boolean l4Slot9Tick;
	private boolean l4Slot10Tick;
	private boolean l4Slot11Tick;
	private boolean l4Slot12Tick;
	// spell panel level 5
	private String l5Slot1;
	private String l5Slot2;
	private String l5Slot3;
	private String l5Slot4;
	private String l5Slot5;
	private String l5Slot6;
	private String l5Slot7;
	private String l5Slot8;
	private String l5Slot9;
	private String l5Slot10;
	private String l5Slot11;
	private String l5Slot12;
	private boolean l5Slot1Tick;
	private boolean l5Slot2Tick;
	private boolean l5Slot3Tick;
	private boolean l5Slot4Tick;
	private boolean l5Slot5Tick;
	private boolean l5Slot6Tick;
	private boolean l5Slot7Tick;
	private boolean l5Slot8Tick;
	private boolean l5Slot9Tick;
	private boolean l5Slot10Tick;
	private boolean l5Slot11Tick;
	private boolean l5Slot12Tick;
	// spell panel level 6
	private String l6Slot1;
	private String l6Slot2;
	private String l6Slot3;
	private String l6Slot4;
	private String l6Slot5;
	private String l6Slot6;
	private String l6Slot7;
	private String l6Slot8;
	private String l6Slot9;
	private String l6Slot10;
	private String l6Slot11;
	private String l6Slot12;
	private boolean l6Slot1Tick;
	private boolean l6Slot2Tick;
	private boolean l6Slot3Tick;
	private boolean l6Slot4Tick;
	private boolean l6Slot5Tick;
	private boolean l6Slot6Tick;
	private boolean l6Slot7Tick;
	private boolean l6Slot8Tick;
	private boolean l6Slot9Tick;
	private boolean l6Slot10Tick;
	private boolean l6Slot11Tick;
	private boolean l6Slot12Tick;
	// spell panel level 7
	private String l7Slot1;
	private String l7Slot2;
	private String l7Slot3;
	private String l7Slot4;
	private String l7Slot5;
	private String l7Slot6;
	private String l7Slot7;
	private String l7Slot8;
	private String l7Slot9;
	private String l7Slot10;
	private String l7Slot11;
	private String l7Slot12;
	private boolean l7Slot1Tick;
	private boolean l7Slot2Tick;
	private boolean l7Slot3Tick;
	private boolean l7Slot4Tick;
	private boolean l7Slot5Tick;
	private boolean l7Slot6Tick;
	private boolean l7Slot7Tick;
	private boolean l7Slot8Tick;
	private boolean l7Slot9Tick;
	private boolean l7Slot10Tick;
	private boolean l7Slot11Tick;
	private boolean l7Slot12Tick;
	// spell panel level 8
	private String l8Slot1;
	private String l8Slot2;
	private String l8Slot3;
	private String l8Slot4;
	private String l8Slot5;
	private String l8Slot6;
	private String l8Slot7;
	private String l8Slot8;
	private String l8Slot9;
	private String l8Slot10;
	private String l8Slot11;
	private String l8Slot12;
	private boolean l8Slot1Tick;
	private boolean l8Slot2Tick;
	private boolean l8Slot3Tick;
	private boolean l8Slot4Tick;
	private boolean l8Slot5Tick;
	private boolean l8Slot6Tick;
	private boolean l8Slot7Tick;
	private boolean l8Slot8Tick;
	private boolean l8Slot9Tick;
	private boolean l8Slot10Tick;
	private boolean l8Slot11Tick;
	private boolean l8Slot12Tick;
	// spell panel level 1
	private String l9Slot1;
	private String l9Slot2;
	private String l9Slot3;
	private String l9Slot4;
	private String l9Slot5;
	private String l9Slot6;
	private String l9Slot7;
	private String l9Slot8;
	private String l9Slot9;
	private String l9Slot10;
	private String l9Slot11;
	private String l9Slot12;
	private boolean l9Slot1Tick;
	private boolean l9Slot2Tick;
	private boolean l9Slot3Tick;
	private boolean l9Slot4Tick;
	private boolean l9Slot5Tick;
	private boolean l9Slot6Tick;
	private boolean l9Slot7Tick;
	private boolean l9Slot8Tick;
	private boolean l9Slot9Tick;
	private boolean l9Slot10Tick;
	private boolean l9Slot11Tick;
	private boolean l9Slot12Tick;

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCharacterName() {
		return this.characterName;
	}

	public void setCharacterName(String characterName) {
		this.characterName = characterName;
	}

	public String getClassNLevel() {
		return this.classNLevel;
	}

	public void setClassNLevel(String classNLevel) {
		this.classNLevel = classNLevel;
	}

	public String getBackground() {
		return this.background;
	}

	public void setBackground(String background) {
		this.background = background;
	}

	public String getPlayerName() {
		return this.playerName;
	}

	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}

	public String getFaction() {
		return this.faction;
	}

	public void setFaction(String faction) {
		this.faction = faction;
	}

	public String getAlignment() {
		return this.alignment;
	}

	public void setAlignment(String alignment) {
		this.alignment = alignment;
	}

	public String getRace() {
		return this.race;
	}

	public void setRace(String race) {
		this.race = race;
	}

	public int getExp() {
		return this.exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	public int getAge() {
		return this.age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getHeight() {
		return this.height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getWeight() {
		return this.weight;
	}

	public void setWeight(String weight) {
		this.weight = weight;
	}

	public String getEyes() {
		return this.eyes;
	}

	public void setEyes(String eyes) {
		this.eyes = eyes;
	}

	public String getSkin() {
		return this.skin;
	}

	public void setSkin(String skin) {
		this.skin = skin;
	}

	public String getHair() {
		return this.hair;
	}

	public void setHair(String hair) {
		this.hair = hair;
	}

	public double getStrength() {
		return this.strength;
	}

	public void setStrength(double strength) {
		this.strength = strength;
	}

	public double getDexterity() {
		return this.dexterity;
	}

	public void setDexterity(double dexterity) {
		this.dexterity = dexterity;
	}

	public double getConstitution() {
		return this.constitution;
	}

	public void setConstitution(double constitution) {
		this.constitution = constitution;
	}

	public double getIntelligence() {
		return this.intelligence;
	}

	public void setIntelligence(double intelligence) {
		this.intelligence = intelligence;
	}

	public double getWisdom() {
		return this.wisdom;
	}

	public void setWisdom(double wisdom) {
		this.wisdom = wisdom;
	}

	public double getCharisma() {
		return this.charisma;
	}

	public void setCharisma(double charisma) {
		this.charisma = charisma;
	}



	public double getInspiration() {
		return this.inspiration;
	}

	public void setInspiration(double inspiration) {
		this.inspiration = inspiration;
	}

	public double getProficiencyBonus() {
		return this.proficiencyBonus;
	}

	public void setProficiencyBonus(double proficiencyBonus) {
		this.proficiencyBonus = proficiencyBonus;
	}

	public double getStrengthSave() {
		return this.strengthSave;
	}

	public void setStrengthSave(double strengthSave) {
		this.strengthSave = strengthSave;
	}

	public double getDexteritySave() {
		return this.dexteritySave;
	}

	public void setDexteritySave(double dexteritySave) {
		this.dexteritySave = dexteritySave;
	}

	public double getConstitutionSave() {
		return this.constitutionSave;
	}

	public void setConstitutionSave(double constitutionSave) {
		this.constitutionSave = constitutionSave;
	}

	public double getIntelligenceSave() {
		return this.intelligenceSave;
	}

	public void setIntelligenceSave(double intelligenceSave) {
		this.intelligenceSave = intelligenceSave;
	}

	public double getWisdomSave() {
		return this.wisdomSave;
	}

	public void setWisdomSave(double wisdomSave) {
		this.wisdomSave = wisdomSave;
	}

	public double getCharismaSave() {
		return this.charismaSave;
	}

	public void setCharismaSave(double charismaSave) {
		this.charismaSave = charismaSave;
	}

	public boolean isStrengthTick() {
		return this.strengthTick;
	}

	public void setStrengthTick(boolean strengthTick) {
		this.strengthTick = strengthTick;
	}

	public boolean isDexterityTick() {
		return this.dexterityTick;
	}

	public void setDexterityTick(boolean dexterityTick) {
		this.dexterityTick = dexterityTick;
	}

	public boolean isConstitutionTick() {
		return this.constitutionTick;
	}

	public void setConstitutionTick(boolean constitutionTick) {
		this.constitutionTick = constitutionTick;
	}

	public boolean isIntelligenceTick() {
		return this.intelligenceTick;
	}

	public void setIntelligenceTick(boolean intelligenceTick) {
		this.intelligenceTick = intelligenceTick;
	}

	public boolean isWisdomTick() {
		return this.wisdomTick;
	}

	public void setWisdomTick(boolean wisdomTick) {
		this.wisdomTick = wisdomTick;
	}

	public boolean isCharismaTick() {
		return this.charismaTick;
	}

	public void setCharismaTick(boolean charismaTick) {
		this.charismaTick = charismaTick;
	}

	public double getAcrobatics() {
		return this.acrobatics;
	}

	public void setAcrobatics(double acrobatics) {
		this.acrobatics = acrobatics;
	}

	public double getAnimalHandling() {
		return this.animalHandling;
	}

	public void setAnimalHandling(double animalHandling) {
		this.animalHandling = animalHandling;
	}

	public double getArcana() {
		return this.arcana;
	}

	public void setArcana(double arcana) {
		this.arcana = arcana;
	}

	public double getAthletics() {
		return this.athletics;
	}

	public void setAthletics(double athletics) {
		this.athletics = athletics;
	}

	public double getDeception() {
		return this.deception;
	}

	public void setDeception(double deception) {
		this.deception = deception;
	}

	public double getHistory() {
		return this.history;
	}

	public void setHistory(double history) {
		this.history = history;
	}

	public double getInsight() {
		return this.insight;
	}

	public void setInsight(double insight) {
		this.insight = insight;
	}

	public double getIntimidation() {
		return this.intimidation;
	}

	public void setIntimidation(double intimidation) {
		this.intimidation = intimidation;
	}

	public double getInvestigation() {
		return this.investigation;
	}

	public void setInvestigation(double investigation) {
		this.investigation = investigation;
	}

	public double getMedicine() {
		return this.medicine;
	}

	public void setMedicine(double medicine) {
		this.medicine = medicine;
	}

	public double getNature() {
		return this.nature;
	}

	public void setNature(double nature) {
		this.nature = nature;
	}

	public double getPerception() {
		return this.perception;
	}

	public void setPerception(double perception) {
		this.perception = perception;
	}

	public double getPerformance() {
		return this.performance;
	}

	public void setPerformance(double performance) {
		this.performance = performance;
	}

	public double getPersuasion() {
		return this.persuasion;
	}

	public void setPersuasion(double persuasion) {
		this.persuasion = persuasion;
	}

	public double getReligion() {
		return this.religion;
	}

	public void setReligion(double religion) {
		this.religion = religion;
	}

	public double getSlightOfHand() {
		return this.slightOfHand;
	}

	public void setSlightOfHand(double slightOfHand) {
		this.slightOfHand = slightOfHand;
	}

	public double getStealth() {
		return this.stealth;
	}

	public void setStealth(double stealth) {
		this.stealth = stealth;
	}

	public double getSurvival() {
		return this.survival;
	}

	public void setSurvival(double survival) {
		this.survival = survival;
	}

	public boolean isAcrobaticsTick() {
		return this.acrobaticsTick;
	}

	public void setAcrobaticsTick(boolean acrobaticsTick) {
		this.acrobaticsTick = acrobaticsTick;
	}

	public boolean isAnimalHandlingTick() {
		return this.animalHandlingTick;
	}

	public void setAnimalHandlingTick(boolean animalHandlingTick) {
		this.animalHandlingTick = animalHandlingTick;
	}

	public boolean isArcanaTick() {
		return this.arcanaTick;
	}

	public void setArcanaTick(boolean arcanaTick) {
		this.arcanaTick = arcanaTick;
	}

	public boolean isAthleticsTick() {
		return this.athleticsTick;
	}

	public void setAthleticsTick(boolean athleticsTick) {
		this.athleticsTick = athleticsTick;
	}

	public boolean isDeceptionTick() {
		return this.deceptionTick;
	}

	public void setDeceptionTick(boolean deceptionTick) {
		this.deceptionTick = deceptionTick;
	}

	public boolean isHistoryTick() {
		return this.historyTick;
	}

	public void setHistoryTick(boolean historyTick) {
		this.historyTick = historyTick;
	}

	public boolean isInsightTick() {
		return this.insightTick;
	}

	public void setInsightTick(boolean insightTick) {
		this.insightTick = insightTick;
	}

	public boolean isIntimidationTick() {
		return this.intimidationTick;
	}

	public void setIntimidationTick(boolean intimidationTick) {
		this.intimidationTick = intimidationTick;
	}

	public boolean isInvestigationTick() {
		return this.investigationTick;
	}

	public void setInvestigationTick(boolean investigationTick) {
		this.investigationTick = investigationTick;
	}

	public boolean isMedicineTick() {
		return this.medicineTick;
	}

	public void setMedicineTick(boolean medicineTick) {
		this.medicineTick = medicineTick;
	}

	public boolean isNatureTick() {
		return this.natureTick;
	}

	public void setNatureTick(boolean natureTick) {
		this.natureTick = natureTick;
	}

	public boolean isPerceptionTick() {
		return this.perceptionTick;
	}

	public void setPerceptionTick(boolean perceptionTick) {
		this.perceptionTick = perceptionTick;
	}

	public boolean isPerformanceTick() {
		return this.performanceTick;
	}

	public void setPerformanceTick(boolean performanceTick) {
		this.performanceTick = performanceTick;
	}

	public boolean isPersuasionTick() {
		return this.persuasionTick;
	}

	public void setPersuasionTick(boolean persuasionTick) {
		this.persuasionTick = persuasionTick;
	}

	public boolean isReligionTick() {
		return this.religionTick;
	}

	public void setReligionTick(boolean religionTick) {
		this.religionTick = religionTick;
	}

	public boolean isSlightOfHandTick() {
		return this.slightOfHandTick;
	}

	public void setSlightOfHandTick(boolean slightOfHandTick) {
		this.slightOfHandTick = slightOfHandTick;
	}

	public boolean isStealthTick() {
		return this.stealthTick;
	}

	public void setStealthTick(boolean stealthTick) {
		this.stealthTick = stealthTick;
	}

	public boolean isSurvivalTick() {
		return this.survivalTick;
	}

	public void setSurvivalTick(boolean survivalTick) {
		this.survivalTick = survivalTick;
	}

	
	public double getArmorClass() {
		return this.armorClass;
	}

	public void setArmorClass(double armorClass) {
		this.armorClass = armorClass;
	}

	public double getInitiative() {
		return this.initiative;
	}

	public void setInitiative(double initiative) {
		this.initiative = initiative;
	}

	public double getSpeed() {
		return this.speed;
	}

	public void setSpeed(double speed) {
		this.speed = speed;
	}

	public double getHitPointMaximum() {
		return this.hitPointMaximum;
	}

	public void setHitPointMaximum(double hitPointMaximum) {
		this.hitPointMaximum = hitPointMaximum;
	}

	public double getCurrentHitPoints() {
		return this.currentHitPoints;
	}

	public void setCurrentHitPoints(double currentHitPoints) {
		this.currentHitPoints = currentHitPoints;
	}

	public double getTemporaryHitPoint() {
		return this.temporaryHitPoint;
	}

	public void setTemporaryHitPoint(double temporaryHitPoint) {
		this.temporaryHitPoint = temporaryHitPoint;
	}

	public String getHitDie() {
		return this.hitDie;
	}

	public void setHitDie(String hitDie) {
		this.hitDie = hitDie;
	}

	public String getAttackOne() {
		return this.attackOne;
	}

	public void setAttackOne(String attackOne) {
		this.attackOne = attackOne;
	}

	public String getAttackBonusOne() {
		return this.attackBonusOne;
	}

	public void setAttackBonusOne(String attackBonusOne) {
		this.attackBonusOne = attackBonusOne;
	}

	public String getAttackTypeOne() {
		return this.attackTypeOne;
	}

	public void setAttackTypeOne(String attackTypeOne) {
		this.attackTypeOne = attackTypeOne;
	}

	public String getAttackTwo() {
		return this.attackTwo;
	}

	public void setAttackTwo(String attackTwo) {
		this.attackTwo = attackTwo;
	}

	public String getAttackBonusTwo() {
		return this.attackBonusTwo;
	}

	public void setAttackBonusTwo(String attackBonusTwo) {
		this.attackBonusTwo = attackBonusTwo;
	}

	public String getAttackTypeTwo() {
		return this.attackTypeTwo;
	}

	public void setAttackTypeTwo(String attackTypeTwo) {
		this.attackTypeTwo = attackTypeTwo;
	}

	public String getAttackThree() {
		return this.attackThree;
	}

	public void setAttackThree(String attackThree) {
		this.attackThree = attackThree;
	}

	public String getAttackBonusThree() {
		return this.attackBonusThree;
	}

	public void setAttackBonusThree(String attackBonusThree) {
		this.attackBonusThree = attackBonusThree;
	}

	public String getAttackTypeThree() {
		return this.attackTypeThree;
	}

	public void setAttackTypeThree(String attackTypeThree) {
		this.attackTypeThree = attackTypeThree;
	}

	public String getAttackFour() {
		return this.attackFour;
	}

	public void setAttackFour(String attackFour) {
		this.attackFour = attackFour;
	}

	public String getAttackBonusFour() {
		return this.attackBonusFour;
	}

	public void setAttackBonusFour(String attackBonusFour) {
		this.attackBonusFour = attackBonusFour;
	}

	public String getAttackTypeFour() {
		return this.attackTypeFour;
	}

	public void setAttackTypeFour(String attackTypeFour) {
		this.attackTypeFour = attackTypeFour;
	}

	public String getPersonalityTraits() {
		return this.personalityTraits;
	}

	public void setPersonalityTraits(String personalityTraits) {
		this.personalityTraits = personalityTraits;
	}

	public String getIdeals() {
		return this.ideals;
	}

	public void setIdeals(String ideals) {
		this.ideals = ideals;
	}

	public String getBonds() {
		return this.bonds;
	}

	public void setBonds(String bonds) {
		this.bonds = bonds;
	}

	public String getFlaws() {
		return this.flaws;
	}

	public void setFlaws(String flaws) {
		this.flaws = flaws;
	}

	public String getEquipment() {
		return this.equipment;
	}

	public void setEquipment(String equipment) {
		this.equipment = equipment;
	}

	public double getCopperPoints() {
		return this.copperPoints;
	}

	public void setCopperPoints(double copperPoints) {
		this.copperPoints = copperPoints;
	}

	public double getSilverPoints() {
		return this.silverPoints;
	}

	public void setSilverPoints(double silverPoints) {
		this.silverPoints = silverPoints;
	}

	public double getElectrumPoints() {
		return this.electrumPoints;
	}

	public void setElectrumPoints(double electrumPoints) {
		this.electrumPoints = electrumPoints;
	}

	public double getGoldPoints() {
		return this.goldPoints;
	}

	public void setGoldPoints(double goldPoints) {
		this.goldPoints = goldPoints;
	}

	public double getPlatinumPoints() {
		return this.platinumPoints;
	}

	public void setPlatinumPoints(double platinumPoints) {
		this.platinumPoints = platinumPoints;
	}

	public String getDarkGift() {
		return this.darkGift;
	}

	public void setDarkGift(String darkGift) {
		this.darkGift = darkGift;
	}

	public String getAdditionalFeaturesAndTraits() {
		return this.additionalFeaturesAndTraits;
	}

	public void setAdditionalFeaturesAndTraits(String additionalFeaturesAndTraits) {
		this.additionalFeaturesAndTraits = additionalFeaturesAndTraits;
	}

	public String getCharacterBackStory() {
		return this.characterBackStory;
	}

	public void setCharacterBackStory(String characterBackStory) {
		this.characterBackStory = characterBackStory;
	}

	public String getAlliesAndOrganizations() {
		return this.alliesAndOrganizations;
	}

	public void setAlliesAndOrganizations(String alliesAndOrganizations) {
		this.alliesAndOrganizations = alliesAndOrganizations;
	}

	public String getTreasure() {
		return this.treasure;
	}

	public void setTreasure(String treasure) {
		this.treasure = treasure;
	}

	public String getSpellCastingClass() {
		return this.spellCastingClass;
	}

	public void setSpellCastingClass(String spellCastingClass) {
		this.spellCastingClass = spellCastingClass;
	}

	public String getSpellCastingAbility() {
		return this.spellCastingAbility;
	}

	public void setSpellCastingAbility(String spellCastingAbility) {
		this.spellCastingAbility = spellCastingAbility;
	}

	public String getSpellSaveDC() {
		return this.spellSaveDC;
	}

	public void setSpellSaveDC(String spellSaveDC) {
		this.spellSaveDC = spellSaveDC;
	}

	public String getSpellAttackBonus() {
		return this.spellAttackBonus;
	}

	public void setSpellAttackBonus(String spellAttackBonus) {
		this.spellAttackBonus = spellAttackBonus;
	}

	public String getCantripOne() {
		return this.cantripOne;
	}

	public void setCantripOne(String cantripOne) {
		this.cantripOne = cantripOne;
	}

	public String getCantripTwo() {
		return this.cantripTwo;
	}

	public void setCantripTwo(String cantripTwo) {
		this.cantripTwo = cantripTwo;
	}

	public String getCantripThree() {
		return this.cantripThree;
	}

	public void setCantripThree(String cantripThree) {
		this.cantripThree = cantripThree;
	}

	public String getCantripFour() {
		return this.cantripFour;
	}

	public void setCantripFour(String cantripFour) {
		this.cantripFour = cantripFour;
	}

	public String getCantripFive() {
		return this.cantripFive;
	}

	public void setCantripFive(String cantripFive) {
		this.cantripFive = cantripFive;
	}

	public String getCantripSix() {
		return this.cantripSix;
	}

	public void setCantripSix(String cantripSix) {
		this.cantripSix = cantripSix;
	}

	public String getCantripSeven() {
		return this.cantripSeven;
	}

	public void setCantripSeven(String cantripSeven) {
		this.cantripSeven = cantripSeven;
	}

	public String getCantripEight() {
		return this.cantripEight;
	}

	public void setCantripEight(String cantripEight) {
		this.cantripEight = cantripEight;
	}

	public String getL1Slot1() {
		return this.l1Slot1;
	}

	public void setL1Slot1(String l1Slot1) {
		this.l1Slot1 = l1Slot1;
	}

	public String getL1Slot2() {
		return this.l1Slot2;
	}

	public void setL1Slot2(String l1Slot2) {
		this.l1Slot2 = l1Slot2;
	}

	public String getL1Slot3() {
		return this.l1Slot3;
	}

	public void setL1Slot3(String l1Slot3) {
		this.l1Slot3 = l1Slot3;
	}

	public String getL1Slot4() {
		return this.l1Slot4;
	}

	public void setL1Slot4(String l1Slot4) {
		this.l1Slot4 = l1Slot4;
	}

	public String getL1Slot5() {
		return this.l1Slot5;
	}

	public void setL1Slot5(String l1Slot5) {
		this.l1Slot5 = l1Slot5;
	}

	public String getL1Slot6() {
		return this.l1Slot6;
	}

	public void setL1Slot6(String l1Slot6) {
		this.l1Slot6 = l1Slot6;
	}

	public String getL1Slot7() {
		return this.l1Slot7;
	}

	public void setL1Slot7(String l1Slot7) {
		this.l1Slot7 = l1Slot7;
	}

	public String getL1Slot8() {
		return this.l1Slot8;
	}

	public void setL1Slot8(String l1Slot8) {
		this.l1Slot8 = l1Slot8;
	}

	public String getL1Slot9() {
		return this.l1Slot9;
	}

	public void setL1Slot9(String l1Slot9) {
		this.l1Slot9 = l1Slot9;
	}

	public String getL1Slot10() {
		return this.l1Slot10;
	}

	public void setL1Slot10(String l1Slot10) {
		this.l1Slot10 = l1Slot10;
	}

	public String getL1Slot11() {
		return this.l1Slot11;
	}

	public void setL1Slot11(String l1Slot11) {
		this.l1Slot11 = l1Slot11;
	}

	public String getL1Slot12() {
		return this.l1Slot12;
	}

	public void setL1Slot12(String l1Slot12) {
		this.l1Slot12 = l1Slot12;
	}

	public boolean isL1Slot1Tick() {
		return this.l1Slot1Tick;
	}

	public void setL1Slot1Tick(boolean l1Slot1Tick) {
		this.l1Slot1Tick = l1Slot1Tick;
	}

	public boolean isL1Slot2Tick() {
		return this.l1Slot2Tick;
	}

	public void setL1Slot2Tick(boolean l1Slot2Tick) {
		this.l1Slot2Tick = l1Slot2Tick;
	}

	public boolean isL1Slot3Tick() {
		return this.l1Slot3Tick;
	}

	public void setL1Slot3Tick(boolean l1Slot3Tick) {
		this.l1Slot3Tick = l1Slot3Tick;
	}

	public boolean isL1Slot4Tick() {
		return this.l1Slot4Tick;
	}

	public void setL1Slot4Tick(boolean l1Slot4Tick) {
		this.l1Slot4Tick = l1Slot4Tick;
	}

	public boolean isL1Slot5Tick() {
		return this.l1Slot5Tick;
	}

	public void setL1Slot5Tick(boolean l1Slot5Tick) {
		this.l1Slot5Tick = l1Slot5Tick;
	}

	public boolean isL1Slot6Tick() {
		return this.l1Slot6Tick;
	}

	public void setL1Slot6Tick(boolean l1Slot6Tick) {
		this.l1Slot6Tick = l1Slot6Tick;
	}

	public boolean isL1Slot7Tick() {
		return this.l1Slot7Tick;
	}

	public void setL1Slot7Tick(boolean l1Slot7Tick) {
		this.l1Slot7Tick = l1Slot7Tick;
	}

	public boolean isL1Slot8Tick() {
		return this.l1Slot8Tick;
	}

	public void setL1Slot8Tick(boolean l1Slot8Tick) {
		this.l1Slot8Tick = l1Slot8Tick;
	}

	public boolean isL1Slot9Tick() {
		return this.l1Slot9Tick;
	}

	public void setL1Slot9Tick(boolean l1Slot9Tick) {
		this.l1Slot9Tick = l1Slot9Tick;
	}

	public boolean isL1Slot10Tick() {
		return this.l1Slot10Tick;
	}

	public void setL1Slot10Tick(boolean l1Slot10Tick) {
		this.l1Slot10Tick = l1Slot10Tick;
	}

	public boolean isL1Slot11Tick() {
		return this.l1Slot11Tick;
	}

	public void setL1Slot11Tick(boolean l1Slot11Tick) {
		this.l1Slot11Tick = l1Slot11Tick;
	}

	public boolean isL1Slot12Tick() {
		return this.l1Slot12Tick;
	}

	public void setL1Slot12Tick(boolean l1Slot12Tick) {
		this.l1Slot12Tick = l1Slot12Tick;
	}


	public String getL2Slot1() {
		return this.l2Slot1;
	}

	public void setL2Slot1(String l2Slot1) {
		this.l2Slot1 = l2Slot1;
	}

	public String getL2Slot2() {
		return this.l2Slot2;
	}

	public void setL2Slot2(String l2Slot2) {
		this.l2Slot2 = l2Slot2;
	}

	public String getL2Slot3() {
		return this.l2Slot3;
	}

	public void setL2Slot3(String l2Slot3) {
		this.l2Slot3 = l2Slot3;
	}

	public String getL2Slot4() {
		return this.l2Slot4;
	}

	public void setL2Slot4(String l2Slot4) {
		this.l2Slot4 = l2Slot4;
	}

	public String getL2Slot5() {
		return this.l2Slot5;
	}

	public void setL2Slot5(String l2Slot5) {
		this.l2Slot5 = l2Slot5;
	}

	public String getL2Slot6() {
		return this.l2Slot6;
	}

	public void setL2Slot6(String l2Slot6) {
		this.l2Slot6 = l2Slot6;
	}

	public String getL2Slot7() {
		return this.l2Slot7;
	}

	public void setL2Slot7(String l2Slot7) {
		this.l2Slot7 = l2Slot7;
	}

	public String getL2Slot8() {
		return this.l2Slot8;
	}

	public void setL2Slot8(String l2Slot8) {
		this.l2Slot8 = l2Slot8;
	}

	public String getL2Slot9() {
		return this.l2Slot9;
	}

	public void setL2Slot9(String l2Slot9) {
		this.l2Slot9 = l2Slot9;
	}

	public String getL2Slot10() {
		return this.l2Slot10;
	}

	public void setL2Slot10(String l2Slot10) {
		this.l2Slot10 = l2Slot10;
	}

	public String getL2Slot11() {
		return this.l2Slot11;
	}

	public void setL2Slot11(String l2Slot11) {
		this.l2Slot11 = l2Slot11;
	}

	public String getL2Slot12() {
		return this.l2Slot12;
	}

	public void setL2Slot12(String l2Slot12) {
		this.l2Slot12 = l2Slot12;
	}

	public boolean isL2Slot1Tick() {
		return this.l2Slot1Tick;
	}

	public void setL2Slot1Tick(boolean l2Slot1Tick) {
		this.l2Slot1Tick = l2Slot1Tick;
	}

	public boolean isL2Slot2Tick() {
		return this.l2Slot2Tick;
	}

	public void setL2Slot2Tick(boolean l2Slot2Tick) {
		this.l2Slot2Tick = l2Slot2Tick;
	}

	public boolean isL2Slot3Tick() {
		return this.l2Slot3Tick;
	}

	public void setL2Slot3Tick(boolean l2Slot3Tick) {
		this.l2Slot3Tick = l2Slot3Tick;
	}

	public boolean isL2Slot4Tick() {
		return this.l2Slot4Tick;
	}

	public void setL2Slot4Tick(boolean l2Slot4Tick) {
		this.l2Slot4Tick = l2Slot4Tick;
	}

	public boolean isL2Slot5Tick() {
		return this.l2Slot5Tick;
	}

	public void setL2Slot5Tick(boolean l2Slot5Tick) {
		this.l2Slot5Tick = l2Slot5Tick;
	}

	public boolean isL2Slot6Tick() {
		return this.l2Slot6Tick;
	}

	public void setL2Slot6Tick(boolean l2Slot6Tick) {
		this.l2Slot6Tick = l2Slot6Tick;
	}

	public boolean isL2Slot7Tick() {
		return this.l2Slot7Tick;
	}

	public void setL2Slot7Tick(boolean l2Slot7Tick) {
		this.l2Slot7Tick = l2Slot7Tick;
	}

	public boolean isL2Slot8Tick() {
		return this.l2Slot8Tick;
	}

	public void setL2Slot8Tick(boolean l2Slot8Tick) {
		this.l2Slot8Tick = l2Slot8Tick;
	}

	public boolean isL2Slot9Tick() {
		return this.l2Slot9Tick;
	}

	public void setL2Slot9Tick(boolean l2Slot9Tick) {
		this.l2Slot9Tick = l2Slot9Tick;
	}

	public boolean isL2Slot10Tick() {
		return this.l2Slot10Tick;
	}

	public void setL2Slot10Tick(boolean l2Slot10Tick) {
		this.l2Slot10Tick = l2Slot10Tick;
	}

	public boolean isL2Slot11Tick() {
		return this.l2Slot11Tick;
	}

	public void setL2Slot11Tick(boolean l2Slot11Tick) {
		this.l2Slot11Tick = l2Slot11Tick;
	}

	public boolean isL2Slot12Tick() {
		return this.l2Slot12Tick;
	}

	public void setL2Slot12Tick(boolean l2Slot12Tick) {
		this.l2Slot12Tick = l2Slot12Tick;
	}

	public String getL3Slot1() {
		return this.l3Slot1;
	}

	public void setL3Slot1(String l3Slot1) {
		this.l3Slot1 = l3Slot1;
	}

	public String getL3Slot2() {
		return this.l3Slot2;
	}

	public void setL3Slot2(String l3Slot2) {
		this.l3Slot2 = l3Slot2;
	}

	public String getL3Slot3() {
		return this.l3Slot3;
	}

	public void setL3Slot3(String l3Slot3) {
		this.l3Slot3 = l3Slot3;
	}

	public String getL3Slot4() {
		return this.l3Slot4;
	}

	public void setL3Slot4(String l3Slot4) {
		this.l3Slot4 = l3Slot4;
	}

	public String getL3Slot5() {
		return this.l3Slot5;
	}

	public void setL3Slot5(String l3Slot5) {
		this.l3Slot5 = l3Slot5;
	}

	public String getL3Slot6() {
		return this.l3Slot6;
	}

	public void setL3Slot6(String l3Slot6) {
		this.l3Slot6 = l3Slot6;
	}

	public String getL3Slot7() {
		return this.l3Slot7;
	}

	public void setL3Slot7(String l3Slot7) {
		this.l3Slot7 = l3Slot7;
	}

	public String getL3Slot8() {
		return this.l3Slot8;
	}

	public void setL3Slot8(String l3Slot8) {
		this.l3Slot8 = l3Slot8;
	}

	public String getL3Slot9() {
		return this.l3Slot9;
	}

	public void setL3Slot9(String l3Slot9) {
		this.l3Slot9 = l3Slot9;
	}

	public String getL3Slot10() {
		return this.l3Slot10;
	}

	public void setL3Slot10(String l3Slot10) {
		this.l3Slot10 = l3Slot10;
	}

	public String getL3Slot11() {
		return this.l3Slot11;
	}

	public void setL3Slot11(String l3Slot11) {
		this.l3Slot11 = l3Slot11;
	}

	public String getL3Slot12() {
		return this.l3Slot12;
	}

	public void setL3Slot12(String l3Slot12) {
		this.l3Slot12 = l3Slot12;
	}

	public boolean isL3Slot1Tick() {
		return this.l3Slot1Tick;
	}

	public void setL3Slot1Tick(boolean l3Slot1Tick) {
		this.l3Slot1Tick = l3Slot1Tick;
	}

	public boolean isL3Slot2Tick() {
		return this.l3Slot2Tick;
	}

	public void setL3Slot2Tick(boolean l3Slot2Tick) {
		this.l3Slot2Tick = l3Slot2Tick;
	}

	public boolean isL3Slot3Tick() {
		return this.l3Slot3Tick;
	}

	public void setL3Slot3Tick(boolean l3Slot3Tick) {
		this.l3Slot3Tick = l3Slot3Tick;
	}

	public boolean isL3Slot4Tick() {
		return this.l3Slot4Tick;
	}

	public void setL3Slot4Tick(boolean l3Slot4Tick) {
		this.l3Slot4Tick = l3Slot4Tick;
	}

	public boolean isL3Slot5Tick() {
		return this.l3Slot5Tick;
	}

	public void setL3Slot5Tick(boolean l3Slot5Tick) {
		this.l3Slot5Tick = l3Slot5Tick;
	}

	public boolean isL3Slot6Tick() {
		return this.l3Slot6Tick;
	}

	public void setL3Slot6Tick(boolean l3Slot6Tick) {
		this.l3Slot6Tick = l3Slot6Tick;
	}

	public boolean isL3Slot7Tick() {
		return this.l3Slot7Tick;
	}

	public void setL3Slot7Tick(boolean l3Slot7Tick) {
		this.l3Slot7Tick = l3Slot7Tick;
	}

	public boolean isL3Slot8Tick() {
		return this.l3Slot8Tick;
	}

	public void setL3Slot8Tick(boolean l3Slot8Tick) {
		this.l3Slot8Tick = l3Slot8Tick;
	}

	public boolean isL3Slot9Tick() {
		return this.l3Slot9Tick;
	}

	public void setL3Slot9Tick(boolean l3Slot9Tick) {
		this.l3Slot9Tick = l3Slot9Tick;
	}

	public boolean isL3Slot10Tick() {
		return this.l3Slot10Tick;
	}

	public void setL3Slot10Tick(boolean l3Slot10Tick) {
		this.l3Slot10Tick = l3Slot10Tick;
	}

	public boolean isL3Slot11Tick() {
		return this.l3Slot11Tick;
	}

	public void setL3Slot11Tick(boolean l3Slot11Tick) {
		this.l3Slot11Tick = l3Slot11Tick;
	}

	public boolean isL3Slot12Tick() {
		return this.l3Slot12Tick;
	}

	public void setL3Slot12Tick(boolean l3Slot12Tick) {
		this.l3Slot12Tick = l3Slot12Tick;
	}

	public String getL4Slot1() {
		return this.l4Slot1;
	}

	public void setL4Slot1(String l4Slot1) {
		this.l4Slot1 = l4Slot1;
	}

	public String getL4Slot2() {
		return this.l4Slot2;
	}

	public void setL4Slot2(String l4Slot2) {
		this.l4Slot2 = l4Slot2;
	}

	public String getL4Slot3() {
		return this.l4Slot3;
	}

	public void setL4Slot3(String l4Slot3) {
		this.l4Slot3 = l4Slot3;
	}

	public String getL4Slot4() {
		return this.l4Slot4;
	}

	public void setL4Slot4(String l4Slot4) {
		this.l4Slot4 = l4Slot4;
	}

	public String getL4Slot5() {
		return this.l4Slot5;
	}

	public void setL4Slot5(String l4Slot5) {
		this.l4Slot5 = l4Slot5;
	}

	public String getL4Slot6() {
		return this.l4Slot6;
	}

	public void setL4Slot6(String l4Slot6) {
		this.l4Slot6 = l4Slot6;
	}

	public String getL4Slot7() {
		return this.l4Slot7;
	}

	public void setL4Slot7(String l4Slot7) {
		this.l4Slot7 = l4Slot7;
	}

	public String getL4Slot8() {
		return this.l4Slot8;
	}

	public void setL4Slot8(String l4Slot8) {
		this.l4Slot8 = l4Slot8;
	}

	public String getL4Slot9() {
		return this.l4Slot9;
	}

	public void setL4Slot9(String l4Slot9) {
		this.l4Slot9 = l4Slot9;
	}

	public String getL4Slot10() {
		return this.l4Slot10;
	}

	public void setL4Slot10(String l4Slot10) {
		this.l4Slot10 = l4Slot10;
	}

	public String getL4Slot11() {
		return this.l4Slot11;
	}

	public void setL4Slot11(String l4Slot11) {
		this.l4Slot11 = l4Slot11;
	}

	public String getL4Slot12() {
		return this.l4Slot12;
	}

	public void setL4Slot12(String l4Slot12) {
		this.l4Slot12 = l4Slot12;
	}

	public boolean isL4Slot1Tick() {
		return this.l4Slot1Tick;
	}

	public void setL4Slot1Tick(boolean l4Slot1Tick) {
		this.l4Slot1Tick = l4Slot1Tick;
	}

	public boolean isL4Slot2Tick() {
		return this.l4Slot2Tick;
	}

	public void setL4Slot2Tick(boolean l4Slot2Tick) {
		this.l4Slot2Tick = l4Slot2Tick;
	}

	public boolean isL4Slot3Tick() {
		return this.l4Slot3Tick;
	}

	public void setL4Slot3Tick(boolean l4Slot3Tick) {
		this.l4Slot3Tick = l4Slot3Tick;
	}

	public boolean isL4Slot4Tick() {
		return this.l4Slot4Tick;
	}

	public void setL4Slot4Tick(boolean l4Slot4Tick) {
		this.l4Slot4Tick = l4Slot4Tick;
	}

	public boolean isL4Slot5Tick() {
		return this.l4Slot5Tick;
	}

	public void setL4Slot5Tick(boolean l4Slot5Tick) {
		this.l4Slot5Tick = l4Slot5Tick;
	}

	public boolean isL4Slot6Tick() {
		return this.l4Slot6Tick;
	}

	public void setL4Slot6Tick(boolean l4Slot6Tick) {
		this.l4Slot6Tick = l4Slot6Tick;
	}

	public boolean isL4Slot7Tick() {
		return this.l4Slot7Tick;
	}

	public void setL4Slot7Tick(boolean l4Slot7Tick) {
		this.l4Slot7Tick = l4Slot7Tick;
	}

	public boolean isL4Slot8Tick() {
		return this.l4Slot8Tick;
	}

	public void setL4Slot8Tick(boolean l4Slot8Tick) {
		this.l4Slot8Tick = l4Slot8Tick;
	}

	public boolean isL4Slot9Tick() {
		return this.l4Slot9Tick;
	}

	public void setL4Slot9Tick(boolean l4Slot9Tick) {
		this.l4Slot9Tick = l4Slot9Tick;
	}

	public boolean isL4Slot10Tick() {
		return this.l4Slot10Tick;
	}

	public void setL4Slot10Tick(boolean l4Slot10Tick) {
		this.l4Slot10Tick = l4Slot10Tick;
	}

	public boolean isL4Slot11Tick() {
		return this.l4Slot11Tick;
	}

	public void setL4Slot11Tick(boolean l4Slot11Tick) {
		this.l4Slot11Tick = l4Slot11Tick;
	}

	public boolean isL4Slot12Tick() {
		return this.l4Slot12Tick;
	}

	public void setL4Slot12Tick(boolean l4Slot12Tick) {
		this.l4Slot12Tick = l4Slot12Tick;
	}

	public String getL5Slot1() {
		return this.l5Slot1;
	}

	public void setL5Slot1(String l5Slot1) {
		this.l5Slot1 = l5Slot1;
	}

	public String getL5Slot2() {
		return this.l5Slot2;
	}

	public void setL5Slot2(String l5Slot2) {
		this.l5Slot2 = l5Slot2;
	}

	public String getL5Slot3() {
		return this.l5Slot3;
	}

	public void setL5Slot3(String l5Slot3) {
		this.l5Slot3 = l5Slot3;
	}

	public String getL5Slot4() {
		return this.l5Slot4;
	}

	public void setL5Slot4(String l5Slot4) {
		this.l5Slot4 = l5Slot4;
	}

	public String getL5Slot5() {
		return this.l5Slot5;
	}

	public void setL5Slot5(String l5Slot5) {
		this.l5Slot5 = l5Slot5;
	}

	public String getL5Slot6() {
		return this.l5Slot6;
	}

	public void setL5Slot6(String l5Slot6) {
		this.l5Slot6 = l5Slot6;
	}

	public String getL5Slot7() {
		return this.l5Slot7;
	}

	public void setL5Slot7(String l5Slot7) {
		this.l5Slot7 = l5Slot7;
	}

	public String getL5Slot8() {
		return this.l5Slot8;
	}

	public void setL5Slot8(String l5Slot8) {
		this.l5Slot8 = l5Slot8;
	}

	public String getL5Slot9() {
		return this.l5Slot9;
	}

	public void setL5Slot9(String l5Slot9) {
		this.l5Slot9 = l5Slot9;
	}

	public String getL5Slot10() {
		return this.l5Slot10;
	}

	public void setL5Slot10(String l5Slot10) {
		this.l5Slot10 = l5Slot10;
	}

	public String getL5Slot11() {
		return this.l5Slot11;
	}

	public void setL5Slot11(String l5Slot11) {
		this.l5Slot11 = l5Slot11;
	}

	public String getL5Slot12() {
		return this.l5Slot12;
	}

	public void setL5Slot12(String l5Slot12) {
		this.l5Slot12 = l5Slot12;
	}

	public boolean isL5Slot1Tick() {
		return this.l5Slot1Tick;
	}

	public void setL5Slot1Tick(boolean l5Slot1Tick) {
		this.l5Slot1Tick = l5Slot1Tick;
	}

	public boolean isL5Slot2Tick() {
		return this.l5Slot2Tick;
	}

	public void setL5Slot2Tick(boolean l5Slot2Tick) {
		this.l5Slot2Tick = l5Slot2Tick;
	}

	public boolean isL5Slot3Tick() {
		return this.l5Slot3Tick;
	}

	public void setL5Slot3Tick(boolean l5Slot3Tick) {
		this.l5Slot3Tick = l5Slot3Tick;
	}

	public boolean isL5Slot4Tick() {
		return this.l5Slot4Tick;
	}

	public void setL5Slot4Tick(boolean l5Slot4Tick) {
		this.l5Slot4Tick = l5Slot4Tick;
	}

	public boolean isL5Slot5Tick() {
		return this.l5Slot5Tick;
	}

	public void setL5Slot5Tick(boolean l5Slot5Tick) {
		this.l5Slot5Tick = l5Slot5Tick;
	}

	public boolean isL5Slot6Tick() {
		return this.l5Slot6Tick;
	}

	public void setL5Slot6Tick(boolean l5Slot6Tick) {
		this.l5Slot6Tick = l5Slot6Tick;
	}

	public boolean isL5Slot7Tick() {
		return this.l5Slot7Tick;
	}

	public void setL5Slot7Tick(boolean l5Slot7Tick) {
		this.l5Slot7Tick = l5Slot7Tick;
	}

	public boolean isL5Slot8Tick() {
		return this.l5Slot8Tick;
	}

	public void setL5Slot8Tick(boolean l5Slot8Tick) {
		this.l5Slot8Tick = l5Slot8Tick;
	}

	public boolean isL5Slot9Tick() {
		return this.l5Slot9Tick;
	}

	public void setL5Slot9Tick(boolean l5Slot9Tick) {
		this.l5Slot9Tick = l5Slot9Tick;
	}

	public boolean isL5Slot10Tick() {
		return this.l5Slot10Tick;
	}

	public void setL5Slot10Tick(boolean l5Slot10Tick) {
		this.l5Slot10Tick = l5Slot10Tick;
	}

	public boolean isL5Slot11Tick() {
		return this.l5Slot11Tick;
	}

	public void setL5Slot11Tick(boolean l5Slot11Tick) {
		this.l5Slot11Tick = l5Slot11Tick;
	}

	public boolean isL5Slot12Tick() {
		return this.l5Slot12Tick;
	}

	public void setL5Slot12Tick(boolean l5Slot12Tick) {
		this.l5Slot12Tick = l5Slot12Tick;
	}
	public String getL6Slot1() {
		return this.l6Slot1;
	}

	public void setL6Slot1(String l6Slot1) {
		this.l6Slot1 = l6Slot1;
	}

	public String getL6Slot2() {
		return this.l6Slot2;
	}

	public void setL6Slot2(String l6Slot2) {
		this.l6Slot2 = l6Slot2;
	}

	public String getL6Slot3() {
		return this.l6Slot3;
	}

	public void setL6Slot3(String l6Slot3) {
		this.l6Slot3 = l6Slot3;
	}

	public String getL6Slot4() {
		return this.l6Slot4;
	}

	public void setL6Slot4(String l6Slot4) {
		this.l6Slot4 = l6Slot4;
	}

	public String getL6Slot5() {
		return this.l6Slot5;
	}

	public void setL6Slot5(String l6Slot5) {
		this.l6Slot5 = l6Slot5;
	}

	public String getL6Slot6() {
		return this.l6Slot6;
	}

	public void setL6Slot6(String l6Slot6) {
		this.l6Slot6 = l6Slot6;
	}

	public String getL6Slot7() {
		return this.l6Slot7;
	}

	public void setL6Slot7(String l6Slot7) {
		this.l6Slot7 = l6Slot7;
	}

	public String getL6Slot8() {
		return this.l6Slot8;
	}

	public void setL6Slot8(String l6Slot8) {
		this.l6Slot8 = l6Slot8;
	}

	public String getL6Slot9() {
		return this.l6Slot9;
	}

	public void setL6Slot9(String l6Slot9) {
		this.l6Slot9 = l6Slot9;
	}

	public String getL6Slot10() {
		return this.l6Slot10;
	}

	public void setL6Slot10(String l6Slot10) {
		this.l6Slot10 = l6Slot10;
	}

	public String getL6Slot11() {
		return this.l6Slot11;
	}

	public void setL6Slot11(String l6Slot11) {
		this.l6Slot11 = l6Slot11;
	}

	public String getL6Slot12() {
		return this.l6Slot12;
	}

	public void setL6Slot12(String l6Slot12) {
		this.l6Slot12 = l6Slot12;
	}

	public boolean isL6Slot1Tick() {
		return this.l6Slot1Tick;
	}

	public void setL6Slot1Tick(boolean l6Slot1Tick) {
		this.l6Slot1Tick = l6Slot1Tick;
	}

	public boolean isL6Slot2Tick() {
		return this.l6Slot2Tick;
	}

	public void setL6Slot2Tick(boolean l6Slot2Tick) {
		this.l6Slot2Tick = l6Slot2Tick;
	}

	public boolean isL6Slot3Tick() {
		return this.l6Slot3Tick;
	}

	public void setL6Slot3Tick(boolean l6Slot3Tick) {
		this.l6Slot3Tick = l6Slot3Tick;
	}

	public boolean isL6Slot4Tick() {
		return this.l6Slot4Tick;
	}

	public void setL6Slot4Tick(boolean l6Slot4Tick) {
		this.l6Slot4Tick = l6Slot4Tick;
	}

	public boolean isL6Slot5Tick() {
		return this.l6Slot5Tick;
	}

	public void setL6Slot5Tick(boolean l6Slot5Tick) {
		this.l6Slot5Tick = l6Slot5Tick;
	}

	public boolean isL6Slot6Tick() {
		return this.l6Slot6Tick;
	}

	public void setL6Slot6Tick(boolean l6Slot6Tick) {
		this.l6Slot6Tick = l6Slot6Tick;
	}

	public boolean isL6Slot7Tick() {
		return this.l6Slot7Tick;
	}

	public void setL6Slot7Tick(boolean l6Slot7Tick) {
		this.l6Slot7Tick = l6Slot7Tick;
	}

	public boolean isL6Slot8Tick() {
		return this.l6Slot8Tick;
	}

	public void setL6Slot8Tick(boolean l6Slot8Tick) {
		this.l6Slot8Tick = l6Slot8Tick;
	}

	public boolean isL6Slot9Tick() {
		return this.l6Slot9Tick;
	}

	public void setL6Slot9Tick(boolean l6Slot9Tick) {
		this.l6Slot9Tick = l6Slot9Tick;
	}

	public boolean isL6Slot10Tick() {
		return this.l6Slot10Tick;
	}

	public void setL6Slot10Tick(boolean l6Slot10Tick) {
		this.l6Slot10Tick = l6Slot10Tick;
	}

	public boolean isL6Slot11Tick() {
		return this.l6Slot11Tick;
	}

	public void setL6Slot11Tick(boolean l6Slot11Tick) {
		this.l6Slot11Tick = l6Slot11Tick;
	}

	public boolean isL6Slot12Tick() {
		return this.l6Slot12Tick;
	}

	public void setL6Slot12Tick(boolean l6Slot12Tick) {
		this.l6Slot12Tick = l6Slot12Tick;
	}

	public String getL7Slot1() {
		return this.l7Slot1;
	}

	public void setL7Slot1(String l7Slot1) {
		this.l7Slot1 = l7Slot1;
	}

	public String getL7Slot2() {
		return this.l7Slot2;
	}

	public void setL7Slot2(String l7Slot2) {
		this.l7Slot2 = l7Slot2;
	}

	public String getL7Slot3() {
		return this.l7Slot3;
	}

	public void setL7Slot3(String l7Slot3) {
		this.l7Slot3 = l7Slot3;
	}

	public String getL7Slot4() {
		return this.l7Slot4;
	}

	public void setL7Slot4(String l7Slot4) {
		this.l7Slot4 = l7Slot4;
	}

	public String getL7Slot5() {
		return this.l7Slot5;
	}

	public void setL7Slot5(String l7Slot5) {
		this.l7Slot5 = l7Slot5;
	}

	public String getL7Slot6() {
		return this.l7Slot6;
	}

	public void setL7Slot6(String l7Slot6) {
		this.l7Slot6 = l7Slot6;
	}

	public String getL7Slot7() {
		return this.l7Slot7;
	}

	public void setL7Slot7(String l7Slot7) {
		this.l7Slot7 = l7Slot7;
	}

	public String getL7Slot8() {
		return this.l7Slot8;
	}

	public void setL7Slot8(String l7Slot8) {
		this.l7Slot8 = l7Slot8;
	}

	public String getL7Slot9() {
		return this.l7Slot9;
	}

	public void setL7Slot9(String l7Slot9) {
		this.l7Slot9 = l7Slot9;
	}

	public String getL7Slot10() {
		return this.l7Slot10;
	}

	public void setL7Slot10(String l7Slot10) {
		this.l7Slot10 = l7Slot10;
	}

	public String getL7Slot11() {
		return this.l7Slot11;
	}

	public void setL7Slot11(String l7Slot11) {
		this.l7Slot11 = l7Slot11;
	}

	public String getL7Slot12() {
		return this.l7Slot12;
	}

	public void setL7Slot12(String l7Slot12) {
		this.l7Slot12 = l7Slot12;
	}

	public boolean isL7Slot1Tick() {
		return this.l7Slot1Tick;
	}

	public void setL7Slot1Tick(boolean l7Slot1Tick) {
		this.l7Slot1Tick = l7Slot1Tick;
	}

	public boolean isL7Slot2Tick() {
		return this.l7Slot2Tick;
	}

	public void setL7Slot2Tick(boolean l7Slot2Tick) {
		this.l7Slot2Tick = l7Slot2Tick;
	}

	public boolean isL7Slot3Tick() {
		return this.l7Slot3Tick;
	}

	public void setL7Slot3Tick(boolean l7Slot3Tick) {
		this.l7Slot3Tick = l7Slot3Tick;
	}

	public boolean isL7Slot4Tick() {
		return this.l7Slot4Tick;
	}

	public void setL7Slot4Tick(boolean l7Slot4Tick) {
		this.l7Slot4Tick = l7Slot4Tick;
	}

	public boolean isL7Slot5Tick() {
		return this.l7Slot5Tick;
	}

	public void setL7Slot5Tick(boolean l7Slot5Tick) {
		this.l7Slot5Tick = l7Slot5Tick;
	}

	public boolean isL7Slot6Tick() {
		return this.l7Slot6Tick;
	}

	public void setL7Slot6Tick(boolean l7Slot6Tick) {
		this.l7Slot6Tick = l7Slot6Tick;
	}

	public boolean isL7Slot7Tick() {
		return this.l7Slot7Tick;
	}

	public void setL7Slot7Tick(boolean l7Slot7Tick) {
		this.l7Slot7Tick = l7Slot7Tick;
	}

	public boolean isL7Slot8Tick() {
		return this.l7Slot8Tick;
	}

	public void setL7Slot8Tick(boolean l7Slot8Tick) {
		this.l7Slot8Tick = l7Slot8Tick;
	}

	public boolean isL7Slot9Tick() {
		return this.l7Slot9Tick;
	}

	public void setL7Slot9Tick(boolean l7Slot9Tick) {
		this.l7Slot9Tick = l7Slot9Tick;
	}

	public boolean isL7Slot10Tick() {
		return this.l7Slot10Tick;
	}

	public void setL7Slot10Tick(boolean l7Slot10Tick) {
		this.l7Slot10Tick = l7Slot10Tick;
	}

	public boolean isL7Slot11Tick() {
		return this.l7Slot11Tick;
	}

	public void setL7Slot11Tick(boolean l7Slot11Tick) {
		this.l7Slot11Tick = l7Slot11Tick;
	}

	public boolean isL7Slot12Tick() {
		return this.l7Slot12Tick;
	}

	public void setL7Slot12Tick(boolean l7Slot12Tick) {
		this.l7Slot12Tick = l7Slot12Tick;
	}

	public String getL8Slot1() {
		return this.l8Slot1;
	}

	public void setL8Slot1(String l8Slot1) {
		this.l8Slot1 = l8Slot1;
	}

	public String getL8Slot2() {
		return this.l8Slot2;
	}

	public void setL8Slot2(String l8Slot2) {
		this.l8Slot2 = l8Slot2;
	}

	public String getL8Slot3() {
		return this.l8Slot3;
	}

	public void setL8Slot3(String l8Slot3) {
		this.l8Slot3 = l8Slot3;
	}

	public String getL8Slot4() {
		return this.l8Slot4;
	}

	public void setL8Slot4(String l8Slot4) {
		this.l8Slot4 = l8Slot4;
	}

	public String getL8Slot5() {
		return this.l8Slot5;
	}

	public void setL8Slot5(String l8Slot5) {
		this.l8Slot5 = l8Slot5;
	}

	public String getL8Slot6() {
		return this.l8Slot6;
	}

	public void setL8Slot6(String l8Slot6) {
		this.l8Slot6 = l8Slot6;
	}

	public String getL8Slot7() {
		return this.l8Slot7;
	}

	public void setL8Slot7(String l8Slot7) {
		this.l8Slot7 = l8Slot7;
	}

	public String getL8Slot8() {
		return this.l8Slot8;
	}

	public void setL8Slot8(String l8Slot8) {
		this.l8Slot8 = l8Slot8;
	}

	public String getL8Slot9() {
		return this.l8Slot9;
	}

	public void setL8Slot9(String l8Slot9) {
		this.l8Slot9 = l8Slot9;
	}

	public String getL8Slot10() {
		return this.l8Slot10;
	}

	public void setL8Slot10(String l8Slot10) {
		this.l8Slot10 = l8Slot10;
	}

	public String getL8Slot11() {
		return this.l8Slot11;
	}

	public void setL8Slot11(String l8Slot11) {
		this.l8Slot11 = l8Slot11;
	}

	public String getL8Slot12() {
		return this.l8Slot12;
	}

	public void setL8Slot12(String l8Slot12) {
		this.l8Slot12 = l8Slot12;
	}

	public boolean isL8Slot1Tick() {
		return this.l8Slot1Tick;
	}

	public void setL8Slot1Tick(boolean l8Slot1Tick) {
		this.l8Slot1Tick = l8Slot1Tick;
	}

	public boolean isL8Slot2Tick() {
		return this.l8Slot2Tick;
	}

	public void setL8Slot2Tick(boolean l8Slot2Tick) {
		this.l8Slot2Tick = l8Slot2Tick;
	}

	public boolean isL8Slot3Tick() {
		return this.l8Slot3Tick;
	}

	public void setL8Slot3Tick(boolean l8Slot3Tick) {
		this.l8Slot3Tick = l8Slot3Tick;
	}

	public boolean isL8Slot4Tick() {
		return this.l8Slot4Tick;
	}

	public void setL8Slot4Tick(boolean l8Slot4Tick) {
		this.l8Slot4Tick = l8Slot4Tick;
	}

	public boolean isL8Slot5Tick() {
		return this.l8Slot5Tick;
	}

	public void setL8Slot5Tick(boolean l8Slot5Tick) {
		this.l8Slot5Tick = l8Slot5Tick;
	}

	public boolean isL8Slot6Tick() {
		return this.l8Slot6Tick;
	}

	public void setL8Slot6Tick(boolean l8Slot6Tick) {
		this.l8Slot6Tick = l8Slot6Tick;
	}

	public boolean isL8Slot7Tick() {
		return this.l8Slot7Tick;
	}

	public void setL8Slot7Tick(boolean l8Slot7Tick) {
		this.l8Slot7Tick = l8Slot7Tick;
	}

	public boolean isL8Slot8Tick() {
		return this.l8Slot8Tick;
	}

	public void setL8Slot8Tick(boolean l8Slot8Tick) {
		this.l8Slot8Tick = l8Slot8Tick;
	}

	public boolean isL8Slot9Tick() {
		return this.l8Slot9Tick;
	}

	public void setL8Slot9Tick(boolean l8Slot9Tick) {
		this.l8Slot9Tick = l8Slot9Tick;
	}

	public boolean isL8Slot10Tick() {
		return this.l8Slot10Tick;
	}

	public void setL8Slot10Tick(boolean l8Slot10Tick) {
		this.l8Slot10Tick = l8Slot10Tick;
	}

	public boolean isL8Slot11Tick() {
		return this.l8Slot11Tick;
	}

	public void setL8Slot11Tick(boolean l8Slot11Tick) {
		this.l8Slot11Tick = l8Slot11Tick;
	}

	public boolean isL8Slot12Tick() {
		return this.l8Slot12Tick;
	}

	public void setL8Slot12Tick(boolean l8Slot12Tick) {
		this.l8Slot12Tick = l8Slot12Tick;
	}

	public String getL9Slot1() {
		return this.l9Slot1;
	}

	public void setL9Slot1(String l9Slot1) {
		this.l9Slot1 = l9Slot1;
	}

	public String getL9Slot2() {
		return this.l9Slot2;
	}

	public void setL9Slot2(String l9Slot2) {
		this.l9Slot2 = l9Slot2;
	}

	public String getL9Slot3() {
		return this.l9Slot3;
	}

	public void setL9Slot3(String l9Slot3) {
		this.l9Slot3 = l9Slot3;
	}

	public String getL9Slot4() {
		return this.l9Slot4;
	}

	public void setL9Slot4(String l9Slot4) {
		this.l9Slot4 = l9Slot4;
	}

	public String getL9Slot5() {
		return this.l9Slot5;
	}

	public void setL9Slot5(String l9Slot5) {
		this.l9Slot5 = l9Slot5;
	}

	public String getL9Slot6() {
		return this.l9Slot6;
	}

	public void setL9Slot6(String l9Slot6) {
		this.l9Slot6 = l9Slot6;
	}

	public String getL9Slot7() {
		return this.l9Slot7;
	}

	public void setL9Slot7(String l9Slot7) {
		this.l9Slot7 = l9Slot7;
	}

	public String getL9Slot8() {
		return this.l9Slot8;
	}

	public void setL9Slot8(String l9Slot8) {
		this.l9Slot8 = l9Slot8;
	}

	public String getL9Slot9() {
		return this.l9Slot9;
	}

	public void setL9Slot9(String l9Slot9) {
		this.l9Slot9 = l9Slot9;
	}

	public String getL9Slot10() {
		return this.l9Slot10;
	}

	public void setL9Slot10(String l9Slot10) {
		this.l9Slot10 = l9Slot10;
	}

	public String getL9Slot11() {
		return this.l9Slot11;
	}

	public void setL9Slot11(String l9Slot11) {
		this.l9Slot11 = l9Slot11;
	}

	public String getL9Slot12() {
		return this.l9Slot12;
	}

	public void setL9Slot12(String l9Slot12) {
		this.l9Slot12 = l9Slot12;
	}

	public boolean isL9Slot1Tick() {
		return this.l9Slot1Tick;
	}

	public void setL9Slot1Tick(boolean l9Slot1Tick) {
		this.l9Slot1Tick = l9Slot1Tick;
	}

	public boolean isL9Slot2Tick() {
		return this.l9Slot2Tick;
	}

	public void setL9Slot2Tick(boolean l9Slot2Tick) {
		this.l9Slot2Tick = l9Slot2Tick;
	}

	public boolean isL9Slot3Tick() {
		return this.l9Slot3Tick;
	}

	public void setL9Slot3Tick(boolean l9Slot3Tick) {
		this.l9Slot3Tick = l9Slot3Tick;
	}

	public boolean isL9Slot4Tick() {
		return this.l9Slot4Tick;
	}

	public void setL9Slot4Tick(boolean l9Slot4Tick) {
		this.l9Slot4Tick = l9Slot4Tick;
	}

	public boolean isL9Slot5Tick() {
		return this.l9Slot5Tick;
	}

	public void setL9Slot5Tick(boolean l9Slot5Tick) {
		this.l9Slot5Tick = l9Slot5Tick;
	}

	public boolean isL9Slot6Tick() {
		return this.l9Slot6Tick;
	}

	public void setL9Slot6Tick(boolean l9Slot6Tick) {
		this.l9Slot6Tick = l9Slot6Tick;
	}

	public boolean isL9Slot7Tick() {
		return this.l9Slot7Tick;
	}

	public void setL9Slot7Tick(boolean l9Slot7Tick) {
		this.l9Slot7Tick = l9Slot7Tick;
	}

	public boolean isL9Slot8Tick() {
		return this.l9Slot8Tick;
	}

	public void setL9Slot8Tick(boolean l9Slot8Tick) {
		this.l9Slot8Tick = l9Slot8Tick;
	}

	public boolean isL9Slot9Tick() {
		return this.l9Slot9Tick;
	}

	public void setL9Slot9Tick(boolean l9Slot9Tick) {
		this.l9Slot9Tick = l9Slot9Tick;
	}

	public boolean isL9Slot10Tick() {
		return this.l9Slot10Tick;
	}

	public void setL9Slot10Tick(boolean l9Slot10Tick) {
		this.l9Slot10Tick = l9Slot10Tick;
	}

	public boolean isL9Slot11Tick() {
		return this.l9Slot11Tick;
	}

	public void setL9Slot11Tick(boolean l9Slot11Tick) {
		this.l9Slot11Tick = l9Slot11Tick;
	}

	public boolean isL9Slot12Tick() {
		return this.l9Slot12Tick;
	}

	public void setL9Slot12Tick(boolean l9Slot12Tick) {
		this.l9Slot12Tick = l9Slot12Tick;
	}
	
	
}