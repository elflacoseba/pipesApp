import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    MegaMenuModule,
    MenubarModule,
    MenuModule,
  ]
})
export class PrimeNgModule { }
