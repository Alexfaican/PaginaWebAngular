import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private router: Router) { }

  vector: string [] = [];
  suma:number=0;
  suma2:number=0;
  ngOnInit(): void {
    this.total();
  }
 navegacion1(){
  this.router.navigate(['web2'])
 }
 total(){
  let num1:number=0;
  let num2:number=2;
  this.suma=num1 + num2;
  console.log(this.suma);
  this.suma2=this.suma+5;
  console.log(this.suma2);

  this.total2(this.suma2);
 }
 total2(sum:number){
  console.log(sum*2);
 }
 navegacion2(){
  this.router.navigate(['web3'])
}
navegacion3(){
  this.router.navigate(['web4'])
}

}
