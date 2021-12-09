import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { AppliancesComponent } from './products/appliances/appliances.component';
import { FashionComponent } from './products/fashion/fashion.component';
import { NeedDataServiceComponent } from './need-data-service/need-data-service.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    MobileComponent,
    LaptopsComponent,
    AppliancesComponent,
    FashionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
  ],
  providers: [NeedDataServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
