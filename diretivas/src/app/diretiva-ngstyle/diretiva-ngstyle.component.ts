import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  constructor() { }

  tamanho:number = 10;
  colorido:boolean = false;

  ngOnInit() {
  }

  transforma(){
  	this.colorido = !this.colorido;
  }

  aumenta(event){
  	if(event.key=='ArrowUp'){
  		this.tamanho++;
  	}

  	else if(event.key=='ArrowDown'){
  		this.tamanho--;
  	}
  	//console.log(event);
  }

}
