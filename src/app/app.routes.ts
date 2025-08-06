import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { JoblistComponent } from './job/joblist/joblist.component';
import { JobCategoryComponent } from './pages/job-category/job-category.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { ErrorComponent } from './pages/error/error.component';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
      {
            path: "", redirectTo: '/login', pathMatch: "full"
      },
      {
            path: "home", component: HomeComponent
      },
      {
            path: "login", component: LoginComponent
      }
      ,
      {
            path: "about", component: AboutComponent
      }
      ,
      {
            path: "apply", component: ApplyComponent
      }
      ,
      {
            path: "contact", component: ContactComponent
      },
      {
            path: "job-details", component: JobDetailsComponent
      },
      {
            path: "joblist", component: JoblistComponent
      },
      {
            path: "jobCategory", component: JobCategoryComponent
      },
      {
            path: "testimonial", component: TestimonialComponent
      },
      {
            path: "404", component: ErrorComponent
      },
];
