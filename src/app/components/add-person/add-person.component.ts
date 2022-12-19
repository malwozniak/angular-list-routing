import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import addressForm from '@angular/material/schematics/ng-generate/address-form';
import { Person } from '../../interface/person';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'add',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  form: FormGroup;
  titleAlert: string = 'This field is required';
  myInfo$ = this._personService.Person$;
  person: Person = {
    address: {},
  };

  constructor(
    private formBuilder: FormBuilder,
    private _personService: PersonService
  ) {}

  ngOnInit() {
    this._initForm();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      familyName: ['', Validators.required],
      age: '',
      address: this.formBuilder.group({
        city: ['', Validators.required],
        street: [''],
        postCode: [''],
      }),
    });
  }

  save() {
    const {
      firstName,
      familyName,
      age,
      address: { city, street, postCode },
    } = this.form.value;
    console.log(city);
    this._personService.save({
      firstName,
      familyName,
      age,
      address: {
        city,
        street,
        postCode,
      },
    });
  }

  clearInfo() {
    this._personService.clearInfo();
  }
}
