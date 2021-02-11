import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: String 
  email!: String
  agency!: String
  password!: String 
  npn!: Number;

  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toLogin(){
    this.router.navigate(['/login'])
  }

  register(){
    
    const user = {
      name: this.name,
      password: this.password,
      email: this.password,
      agency: this.agency,
      npn: this.agency
    }
    console.log(user)
  }

}
