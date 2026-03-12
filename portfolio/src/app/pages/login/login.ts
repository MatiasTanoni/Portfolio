import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (username === "admin" && password === "1234") {
      console.log("Login exitoso");
      localStorage.setItem("logged", "true");
      this.router.navigate(['/stats']);
    } else {
      console.log("Login fallido");
      alert("Usuario o contraseña incorrectos");
    }
  }
}