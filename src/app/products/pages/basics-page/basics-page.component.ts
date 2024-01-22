import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'sebastián';
  public nameUpper: string = 'SEBASTIÁN';
  public fullName: string = 'SebAsTIán SerrSUELa';

}
