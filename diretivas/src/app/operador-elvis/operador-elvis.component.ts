import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.css']
})
export class OperadorElvisComponent implements OnInit {

  constructor() { }

 
  ngOnInit() {
  }

  tarefa = {
  	descricao:'Descrição da Tarefa',
  	responsavel: null
  //	responsavel: {
  //		nome:'uriel',
  //		telefone:'987538282'
  //	}

  };


}
