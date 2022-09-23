import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { /* FOI ADICIONADO PELA INSTALAÇÃO DO 
MATERIAL DESIGN PELO COMANDO: ng g c views/home  */

  constructor() { }

  ngOnInit(): void {
  }

}
