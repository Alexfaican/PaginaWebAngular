import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private nav:Router) { }

  ngOnInit(): void {
  }
  navegacion1(){
    this.nav.navigate(['web2'])
   }
   atras(){
    this.nav.navigate([''])
  }
}
