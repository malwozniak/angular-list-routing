import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../../service/person.service';

@Component({
  selector: 'add',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent implements OnInit {
  form: FormGroup;
  titleAlert: string = 'This field is required';
  myInfo$ = this._personService.myData;

  constructor(
    private formBuilder: FormBuilder,
    private _personService: PersonService
  ) {}

  ngOnInit() {
    this._personService.clearAllLocalStorage();
    this._initForm();
  }

  private _initForm() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      familyName: ['', Validators.required],
      age: [],
      address: this.formBuilder.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        postCode: ['', Validators.required],
      }),
    });
  }

  save() {
    const { firstName, familyName, age, city, street, postCode } =
      this.form.value;
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
