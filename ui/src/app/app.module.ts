import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CharactersheetComponent } from './charactersheet/charactersheet.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DescriptionpanelComponent } from './descriptionpanel/descriptionpanel.component';
import { StatpanelComponent } from './statpanel/statpanel.component';
import { SkillsavepanelComponent } from './skillsavepanel/skillsavepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
    HeaderComponent,
    CharactersheetComponent,
    DescriptionpanelComponent,
    StatpanelComponent,
    SkillsavepanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
