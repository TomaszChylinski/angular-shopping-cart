import { Component, OnInit } from '@angular/core';
import {ProductsService} from 'src/app/services/products.service';
import {Product} from 'src/app/models/product';

@Component({
  selector: 'app-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.html']
})
export class ListComponent implements OnInit {

  productList: Product[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(){
   this.productService.getProducts().subscribe((produts) => {
     this.productList = produts;
     console.log('show me product list: ', this.productList);
   });
  }
}
