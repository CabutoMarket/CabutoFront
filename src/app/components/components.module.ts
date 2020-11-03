import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

const PAGES=[
  HeaderComponent,
  FooterComponent,
  MenuComponent
]


@NgModule({
  declarations: PAGES,
  exports: PAGES,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
