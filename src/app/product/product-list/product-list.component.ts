import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _productService: any;

  listOfData: Product[] = [];
  imageWidth : number = 50;
  imageMargin : number = 2;
  showImage : boolean = false;
  value!: string;
  filterList: Product[] = [];
  _listfilter!: string;
  message1!: string;
  errorMessage!: string;
  flag : boolean = true;
  displayTable : boolean = false;

  constructor(private productService : ProductService,
    private route : Router) { }

  ngOnInit() {
  setTimeout(() => {
    this.flag= false;
}, 3000);
    this.productService.getProducts().subscribe({
      next : products => {
        this.listOfData = products;
        this.filterList = this.listOfData;
      },
      error : err => {this.errorMessage = err} 
    });
  }

  public get listfilter(): string {
    return this._listfilter;
  }
  public set listfilter(value: string) {
    this._listfilter = value;
    this.filterList = this._listfilter ? this.performFilter(this._listfilter) : this.listOfData;
  }

   onNotify(message : string) : void {
    this.message1 = message; 
   }

  performFilter(value: string): Product[] {
    value = value.toLocaleLowerCase();
    let list = this.listOfData.filter((product : Product) => 
    product.productName.toLocaleLowerCase().indexOf(value) !== -1);
    return list;
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }
}

export default ProductListComponent;
