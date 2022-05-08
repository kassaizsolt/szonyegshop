import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

 productArray: Array<Product> = new Array<Product>();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.loadImageMeta().subscribe((product: Array<Product>) => {
        this.productArray = product;
        for (let i = 0; i < this.productArray.length; i++) {
            this.productService.loadImage(this.productArray[i].image).subscribe(arr => {
                this.productArray[i].image = arr;
            })
        }
    })
}

}
