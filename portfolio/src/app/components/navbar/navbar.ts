import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isOpen = false;

  menu = [
    { label: 'Inicio', link: '/' },
    { label: 'Proyectos', link: '/projects' },
    { label: 'Educación', link: '/education' },
    { label: 'Experiencia', link: '/experience' },
    { label: 'Contacto', link: '/contact' }
  ];
}
