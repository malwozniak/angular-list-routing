import { Component, OnInit } from '@angular/core';
import { Person } from '../../interface/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  myInfo$ = this._personService.Person$;

  personList$ = this._personService.personList;
  constructor(private _personService: PersonService) {}

  ngOnInit() {}
  onDelete(deleteme) {
    // this.personList$.splice(deleteme, 1);
    this._personService.removeById(deleteme);
  }
  findDetail(valueTofind) {
    this._personService.findById(valueTofind);
  }
}
