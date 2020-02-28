import { Product } from './../../Interface/products.interface';
import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Products : Array<any> = [
  { Name: 'Python', Price: 50, Desc:'Course', ProductPath:'../assets/Pics/Python.png'},
  { Name: 'Angular', Price: 45, Desc:'Course', ProductPath:'../assets/Pics/Angular.jpg'},
  { Name: 'Data Analytics', Price: 60, Desc:'Fruits', ProductPath:'../assets/Pics/wm.jpg'},
  { Name: 'Ethical Hacking', Price: 35, Desc:'Fruits', ProductPath:'../assets/Pics/kiwi.jpg'},
  { Name: 'StrawBerry', Price: 3, Desc:'Fruits', ProductPath:'../assets/Pics/st.jpg'},
  { Name: 'Cherries', Price: 7, Desc:'Fruits', ProductPath:'../assets/Pics/cherries.jpg'},
  { Name: 'Grapes', Price: 8, Desc:'Fruits', ProductPath:'../assets/Pics/Gr.jpg'},
  { Name: 'Pomegranate', Price: 5, Desc:'Fruits', ProductPath:'../assets/Pics/Po.jpg'},
  


];

  constructor( private ps : ProductsService ) { }

  ngOnInit(){
    this.ps.getAllProducts().subscribe(
     data => this.Products = data
    )
  
  }


  addToCart(index)
  {
    console.log('Added', this.Products[index]);
  }

}


