import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
isLoggedIn: boolean = true;


ngOnInit(): void {
}

  logout() {
    this.isLoggedIn = false;
    console.log(this.isLoggedIn)
  }
}
