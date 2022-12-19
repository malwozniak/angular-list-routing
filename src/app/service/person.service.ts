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
  personList: Person[] = [];
  constructor(private _localStorageRefService: LocalStorageRefService) {
    this._localStorage = _localStorageRefService.localStorage;
  }

  save(data: Person): void {
    const personList: Person[] = [];

    const jsonData = JSON.stringify(data);
    this._localStorage.setItem('Person', jsonData);
    personList.push(data);
    console.log(personList);
    this._Person.next(data);
  }
  getById(data: string) {
    var fromStorage = JSON.parse(this._localStorage.getItem('Person'));
    var toFind = fromStorage.filter(function (obj) {
      return obj.code == data;
    });
  }
  removeById(valueToFind) {
    var fromStorage = this._localStorage.getItem('Person');
    var objectsFromStorage = JSON.parse(fromStorage);
    console.log(objectsFromStorage);

    var toFind = objectsFromStorage.filter(function (obj) {
      return obj.code == valueToFind;
    });

    var index = objectsFromStorage.findIndex((x) => x.code === valueToFind);

    if (index >= 0) {
      objectsFromStorage.splice(index, 1);
      var stringToStore = JSON.stringify(objectsFromStorage);
      this._localStorage.setItem('Person', stringToStore);
    }
  }
  loadInfo(): void {
    const data = JSON.parse(this._localStorage.getItem('Person'));
    this._Person.next(data);
  }

  clearInfo() {
    this._localStorage.removeItem('Person');
    this._Person.next(null);
  }

  clearAllLocalStorage(): void {
    this._localStorage.clear();
    this._Person.next(null);
  }
}
