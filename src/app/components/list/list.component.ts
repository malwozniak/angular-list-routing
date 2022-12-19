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
  constructor(private _personService: PersonService) {}

  ngOnInit() {}
}
