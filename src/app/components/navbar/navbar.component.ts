import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img="https://images.hdqwalls.com/download/naruto-logo-anime-8k-qz-1680x1050.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
