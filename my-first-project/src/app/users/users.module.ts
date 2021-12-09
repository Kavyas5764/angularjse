import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TemplateComponent } from './template/template.component';
import { SurveyformComponent } from './surveyform/surveyform.component';
import { StaticcardComponent } from './staticcard/staticcard.component';




@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    TemplateComponent,
    SurveyformComponent,
    StaticcardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    SignupComponent,
    TemplateComponent,
    SurveyformComponent,
    StaticcardComponent

  ]
})
export class UsersModule { }
