import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DescriptionPanelComponent } from './descriptionpanel/descriptionpanel.component';
import { statPanelComponent } from './statpanel/statpanel.component';
import { skillSavePanelComponent } from './skillsavepanel/skillsavepanel.component';
import { FormsModule } from '@angular/forms';
import { SkillPanelComponent } from './skillpanel/skillpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HeaderComponent,
    CharacterSheetComponent,
    DescriptionPanelComponent,
    statPanelComponent,
    skillSavePanelComponent,
    SkillPanelComponent,
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
