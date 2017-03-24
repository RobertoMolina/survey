import { Component } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title:string;
	selected:string;
	answers : any[];
	survey : any;
	constructor(){

  		this.title = 'Educacion';
  		this.survey = {
  					'title':'Educacion',
  					'pregunta':'Esta de acuerdo con el nuevo sistema de evaluacion?'
  					};
  		this.answers = ['Si','Indeciso','No']
  	}
  setAnswer(answer){
  	this.selected = answer;
  }
  sendAnswer(){
  	console.log("MANDAR RESPUESTA");
    window.location('./answerSend');
  }
}
