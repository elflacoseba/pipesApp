import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import localeEsAR from '@angular/common/locales/es-AR';
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsAR );
registerLocaleData( localeFrCA );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
