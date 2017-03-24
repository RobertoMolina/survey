import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: 'survey', component: AppComponent},
    {path: 'answerSend', component: AnswerComponent},
    { path: '',   redirectTo: '/survey', pathMatch: 'full' }
    ];

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
