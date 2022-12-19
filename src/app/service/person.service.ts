import { J } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../interface/person';
import { LocalStorageRefService } from './local-storage-ref-service.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private _localStorage: Storage;
  private _Person = new BehaviorSubject<Person>(null);
  Person$ = this._Person.asObservable();
  public personList: Person[] = [];
  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  save(data: Person): void {
    this.personList.push(data);
    const jsonData = JSON.stringify(this.personList);

    this._localStorage.setItem('Person', jsonData);
    console.log('data: ', JSON.parse(jsonData));
    console.log(this.personList);
    this._Person.next(data);
  }
  findById(valueTofind) {
    var fromStorage = this._localStorage.getItem('Person');

    var objectsFromStorage = JSON.parse(fromStorage);

    objectsFromStorage.filter(function (obj) {
      return obj.code == valueTofind;
    });
    var stringToStore = JSON.stringify(objectsFromStorage);
    this._localStorage.setItem('Person', stringToStore);
  }

  removeById(valueToFind) {
    var fromStorage = this._localStorage.getItem('Person');
    var objectsFromStorage = JSON.parse(fromStorage);

    var toFind = objectsFromStorage.filter(function (obj) {
      return obj.code == valueToFind;
    });
    if (valueToFind >= 0) {
      objectsFromStorage.splice(valueToFind, 1);
      this.personList.splice(valueToFind, 1);
      var stringToStore = JSON.stringify(objectsFromStorage);
      this._localStorage.setItem('Person', stringToStore);
    }
  }

  clearInfo() {
    this._localStorage.removeItem('Person');
    this._Person.next(null);
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear();
    this.personList.length = 0;
    this._Person.next(null);
  }
}
