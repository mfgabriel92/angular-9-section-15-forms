import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  user: {
    username: string;
    email: string;
    secret: string;
    answer: string;
    gender: string;
  };

  onSuggestedUsernameClick() {
    this.form.form.patchValue({
      username: 'Lorem'
    });
  }

  onSubmitClick(): void {
    this.user = this.form.value;
  }
}
