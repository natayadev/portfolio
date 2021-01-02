import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MylinksComponent } from './mylinks/mylinks.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SlidesroutesComponent } from './slidesroutes/slidesroutes.component';
import { TalksComponent } from './talks/talks.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    WelcomeComponent,
    SkillsComponent,
    WorkComponent,
    HeaderComponent,
    MylinksComponent,
    ContactComponent,
    FooterComponent,
    PagenotfoundComponent,
    SlidesroutesComponent,
    TalksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule,
    FontAwesomeModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }