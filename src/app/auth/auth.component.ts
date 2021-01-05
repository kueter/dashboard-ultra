import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  // animations: [
  //   trigger(
  //     'inOutAnimation',[
  //       transition(':enter',[
  //           style({ height: 0, opacity: 0 }), animate('.1s ease-out',style({ opacity: 1 }))
  //       ]),
  //       transition(':leave',[
  //           style({ opacity: 1 }), animate('.1s ease-in', style({ height: 0, opacity: 0 }))
  //       ])
  //     ]
  //   )
  // ]
})
export class AuthComponent implements OnInit {

  AuthForm: FormGroup;
  RegForm: FormGroup;

  @Output() state = new EventEmitter();

  spin = false;

  _s = false;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.AuthForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        ),
      ]),
      password: new FormControl('', [Validators.required])
    });

    this.RegForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'
        ),
      ]),
      password: new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.RegForm.get('name');
  }

  get password() {
    return this.AuthForm.get('password');
  }

  get email() {
    return this.AuthForm.get('email');
  }



  login() {
    this.spin = true;
    setTimeout(() => {
      this.spin = false;
    }, 1000);
  }

  switchTo() {
    this._s = !this._s;
    this.state.emit(this._s);
  }


}
