import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    subject: new FormControl(""),
    message: new FormControl("")
  })

  submit(){
    console.log(this.contactForm.value);
    
  }


}
