import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { LineNumbersComponent } from './layout/line-numbers/line-numbers.component';
import { SkillComponent } from './skill/skill.component';
import { ToolsComponent } from './tools/tools.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    LineNumbersComponent,
    SkillComponent,
    ToolsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
