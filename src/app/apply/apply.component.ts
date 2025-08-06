import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apply',
  imports: [ReactiveFormsModule],
  templateUrl: './apply.component.html',
  styleUrl: './apply.component.css'
})
export class ApplyComponent {
  jobForm!: FormGroup;
selectedFile: File | null = null;

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.jobForm = this.fb.group({
    name: [''],
    fatherName: [''],
    email: [''],
    aadhaar: [''],
    github: [''],
    linkedin: [''],
    portfolio: [''],
    address: ['']
  });
}


onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}

submitJobForm() {
  if (this.jobForm.valid) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(this.jobForm.value));
    if (this.selectedFile) {
      formData.append('resume', this.selectedFile);
    }

    // Submit to API here
    console.log('Form Submitted', formData);
  }
}


}
