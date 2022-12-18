import { Component, VERSION } from '@angular/core';

import { PersonService } from './service/person.service';
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private _personService: PersonService) {}

  clearAll() {
    this._personService.clearAllLocalStorage();
  }
}
