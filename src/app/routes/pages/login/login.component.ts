import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SettingsService } from "../../../core/settings/settings.service";

@Component({
  selector: 'app-pages-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  valForm: FormGroup;

  constructor(public settings: SettingsService, fb: FormBuilder, private router: Router) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  submit() {
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('Valid!');
      console.log(this.valForm.value);
      this.router.navigate(['dashboard']);
    }
  }
}
