import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;

  onSuggestedUsernameClick() {
    this.form.form.patchValue({
      username: 'Lorem'
    });
  }

  onSubmitClick(): void {
    console.log(this.form);
  }
}
