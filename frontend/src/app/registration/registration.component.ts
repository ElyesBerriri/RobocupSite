import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  chef!: string;
  email!:string;
  tel!: string;
  robot!: string;
  concours!: string;
  form: any = {
    chef: null,
    email: null,
    tel: null,
    robot: null,
    concours: null
  };
  errorMessage = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    const { chef, email, tel, robot, concours } = this.form;

    this.authService.registerComp(chef, email, tel, robot, concours).subscribe(
      (data: any) => {
        console.log(data);
        alert("Your registration is successful!");
        window.location.assign('login');
      },
      (err: any) => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
