import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PartnersComponent } from './partners/partners.component';
import { OffersAndDealsComponent } from './offers-and-deals/offers-and-deals.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { LayoutComponent } from './common/layout/layout.component';
import { MenuSearchComponent } from './common/menu-search/menu-search.component';
import { FilterComponent } from './common/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PartnersComponent,
    OffersAndDealsComponent,
    ProductsSearchComponent,
    LayoutComponent,
    MenuSearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
