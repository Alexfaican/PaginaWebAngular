import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
    atras(){
      this.nav.navigate([''])
    }
    navegacion1(){
      this.nav.navigate(['web2'])
    }
    navegacion2(){
      this.nav.navigate(['web3'])
    }
  

}
