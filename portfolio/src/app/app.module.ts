import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { BlogsAndHobbiesComponent } from './blogs-and-hobbies/blogs-and-hobbies.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ProjectsComponent,
    SkillsComponent,
    BlogsAndHobbiesComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
