import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { JoblistComponent } from './job/joblist/joblist.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ApplyComponent,FormsModule,LoginComponent, HomeComponent, AboutComponent, HeaderComponent, FooterComponent, ContactComponent, JobDetailsComponent, JoblistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobTemplate';
}
