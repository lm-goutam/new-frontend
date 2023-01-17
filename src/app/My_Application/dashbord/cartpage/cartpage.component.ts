import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  
  // constructor( private route:Route ){} name:any;
  // ngOnInit():void{}
  
  // navToTestComp()
  // {
  //   this.route.navigateByUrl('/test')
  // }
  
  // cart()
  // {
  //   alert("You Successfully Added to your Cart!!!!!")
  // }
  msg()
  {
    alert("Do You Want to Delete this???")
  }
  removemsg()
  {
    alert("Do You Really Want to Remove from this cart???")
  }
}
