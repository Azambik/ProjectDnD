import { Component, OnInit } from '@angular/core';
import { CharacterSheetService } from 'src/charactersheet.service';

@Component({
  selector: 'app-personality-panel',
  templateUrl: './personality-panel.component.html',
  styleUrls: ['./personality-panel.component.scss']
})
export class PersonalityPanelComponent implements OnInit {
    personalityTraits: string = "";
    ideals: string = "";
    bonds: string = "";
    flaws: string = "";
  constructor(private characterSheetService:CharacterSheetService) { }

  updatePersonalityTraits(val: string): void {
    this.characterSheetService.characterSheet.personalityPanel.personalityTraits = val;
  }
  updateIdeals(val: string): void {
    this.characterSheetService.characterSheet.personalityPanel.ideals = val;
  }
  updateBonds(val: string): void {
    this.characterSheetService.characterSheet.personalityPanel.bonds = val;
  }
  updateFlaws(val: string): void {
    this.characterSheetService.characterSheet.personalityPanel.flaws = val;
  }
  ngOnInit(): void {
    this.personalityTraits = this.characterSheetService.characterSheet.personalityPanel.personalityTraits;
    this.ideals = this.characterSheetService.characterSheet.personalityPanel.ideals;
    this.bonds = this.characterSheetService.characterSheet.personalityPanel.bonds;
    this.flaws = this.characterSheetService.characterSheet.personalityPanel.bonds;
  }

}
