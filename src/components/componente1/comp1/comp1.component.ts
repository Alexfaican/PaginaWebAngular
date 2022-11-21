import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 navegacion1(){
  this.router.navigate(['web2'])
 }
 navegacion2(){
  this.router.navigate(['web3'])
}
navegacion3(){
  this.router.navigate(['web4'])
}

}
