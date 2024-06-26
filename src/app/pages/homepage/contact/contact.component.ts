import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule, FormControl, FormGroupDirective, Validators, FormGroup } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { NgClass } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ThemePalette} from '@angular/material/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule, NgClass, MatCheckboxModule, MatSnackBarModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  matcher = new MyErrorStateMatcher();

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    legal: false
  };

  mailTest = false;

  post = {
    endPoint: 'https://kutupcevik.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  translate = inject(TranslationService);

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

  openSnackBar() {
    this.snackBar.open('Message sent.', 'close', {
      duration: 5000, // Zeit in Millisekunden, bis der SnackBar automatisch geschlossen wird
    });
  }
}
