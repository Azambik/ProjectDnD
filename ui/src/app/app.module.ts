import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { characterSheetComponent } from './characterSheet/characterSheet.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { descriptionPanelComponent } from './descriptionpanel/descriptionpanel.component';
import { statPanelComponent } from './statpanel/statpanel.component';
import { skillSavePanelComponent } from './skillsavepanel/skillsavepanel.component';
import { FormsModule } from '@angular/forms';
import { skillPanelComponent } from './skillpanel/skillpanel.component';
import { CombatPanelComponent } from './combat-panel/combat-panel.component';
import { PersonalityPanelComponent } from './personality-panel/personality-panel.component';
import { AttackPanelComponent } from './attack-panel/attack-panel.component';
import { EquipmentPanelComponent } from './equipment-panel/equipment-panel.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { SpellPanelComponent } from './spell-panel/spell-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HeaderComponent,
    characterSheetComponent,
    descriptionPanelComponent,
    statPanelComponent,
    skillSavePanelComponent,
    skillPanelComponent,
    CombatPanelComponent,
    PersonalityPanelComponent,
    AttackPanelComponent,
    EquipmentPanelComponent,
    CharacterDetailsComponent,
    SpellPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
