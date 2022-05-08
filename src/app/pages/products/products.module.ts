import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

import {MatCardModule} from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomPipe } from 'src/app/shared/pipes/custom.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    CustomPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
