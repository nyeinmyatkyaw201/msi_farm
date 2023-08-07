import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  constructor(
    private heroservices : HeroService, private activateroute : ActivatedRoute
  )
  {}
  
  productName : String = '';
  image : String = '';
  from : String =  '';
  nuterients : String = '';
  quantity : String = '';
  price : String = '';
  organic : Boolean = false;
  description : String = '';
  notorganic :Boolean = false;
  ngOnInit(): void {
    const productid : string= this.activateroute.snapshot.params['productid'];
    var indexNo = parseInt(productid)
    
      this.productName =this.heroservices.msifarm[indexNo].productName;
      this.image = this.heroservices.msifarm[indexNo].image;
      this.from = this.heroservices.msifarm[indexNo].from;
      this.nuterients= this.heroservices.msifarm[indexNo].nuterients;
      this.quantity =this.heroservices.msifarm[indexNo].quantity;
      this.price = this.heroservices.msifarm[indexNo].price;
      this.organic= this.heroservices.msifarm[indexNo].organic;
      this.description=  this.heroservices.msifarm[indexNo].description;
     if(this.organic == true){
      this.notorganic = false
     }else if (this.organic == false){
      this.notorganic = true
     }
   
  }
 

}
