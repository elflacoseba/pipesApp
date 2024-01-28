import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Sebastián';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Camila';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['María', 'Pedro', 'Fernando','Camila','Micaela'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Sebastián',
    age: 42,
    address: 'Juramento 598, San Miguel de Tucumán'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval( 2000 );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( ' Tenemos data en la promesa. ' )
    }, 3500);
  })
}
