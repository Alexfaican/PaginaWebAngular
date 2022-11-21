import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  constructor(private nav : Router) { }

  ngOnInit(): void {
  }
  atras(){
    this.nav.navigate([''])
  }
  navegacion2(){
    this.nav.navigate(['web3'])
  }
  navegacion3(){
    this.nav.navigate(['web4'])
  }
}
