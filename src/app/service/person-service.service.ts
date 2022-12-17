import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../interface';

@Injectable()
export class PersonServiceService {
  private _localStorage: Storage;
  private _myData = new BehaviorSubject<Person>(null);
  myData = this._myData.asObservable();

  constructor( private _localStorageRefService: LocalStorageRefService) {}
}
