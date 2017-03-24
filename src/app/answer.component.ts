import { Component } from '@angular/core'; 

@Component({
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})

export class AnswerComponent {
	titulo:string;
  descripcion:string;
  contructor(){
  this.titulo="Encuesta Completa";
  this.descripcion="Sus respuestas fueron enviadas";
  }
}
