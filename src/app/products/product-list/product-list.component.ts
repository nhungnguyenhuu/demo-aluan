import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listProduct: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProduct();
  }

  public getAllProduct(){
    this.productService.getAllProduct().subscribe(products =>{
      this.listProduct = products});
  }

}
