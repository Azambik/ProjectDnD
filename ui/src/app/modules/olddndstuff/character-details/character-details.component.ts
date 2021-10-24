import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  darkGift: string = "";
  additionalFeaturesAndTraits: string = "";
  characterBackStory: string = "";
  alliesAndOrganizations: string = "";
  treasure: string = "";
  constructor(private characterSheetService: CharacterSheetService) { }

  ngOnInit(): void {
    this.darkGift = this.characterSheetService.characterSheet.characterDetailsPanel.darkGift;
    this.additionalFeaturesAndTraits = this.characterSheetService.characterSheet.characterDetailsPanel.additionalFeaturesAndTraits;
    this.characterBackStory = this.characterSheetService.characterSheet.characterDetailsPanel.characterBackStory;
    this.alliesAndOrganizations = this.characterSheetService.characterSheet.characterDetailsPanel.alliesAndOrganizations;
    this.treasure = this.characterSheetService.characterSheet.characterDetailsPanel.treasure;
  }

  updateDarkGift(val : string): void {
    this.characterSheetService.characterSheet.characterDetailsPanel.darkGift = val
  }
  updateAdditionalFeaturesAndTraits(val : string): void {
    this.characterSheetService.characterSheet.characterDetailsPanel.additionalFeaturesAndTraits = val
  }
  updateCharacterBackStory(val : string): void {
    this.characterSheetService.characterSheet.characterDetailsPanel.characterBackStory = val
  }
  updateAlliesAndOrganizations(val : string): void {
    this.characterSheetService.characterSheet.characterDetailsPanel.alliesAndOrganizations = val
  }
  updateTreasure(val : string): void {
    this.characterSheetService.characterSheet.characterDetailsPanel.treasure = val
  }
}
