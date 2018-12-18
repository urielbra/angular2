import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  //cursos = [];
  cursos = ['Java','Python','CSS','HTML','Ruby','Perl','C++','C#','JavaScript','TypeScript'];

  constructor() { }

  ngOnInit() {
  }

}
