import { parallel } from '@angular/cdk/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../../interface/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  myInfo$ = this._personService.Person$;
  personList$ = this._personService.personList;

  constructor(
    private _personService: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      console.log(params);
    });
    console.log('llll', this.personList$);
  }

  ondelete(deleteme) {
    this.personList$.splice(deleteme, 1);
  }

  public goHome() {
    this.router.navigate(['/details', 2]);
  }
}
