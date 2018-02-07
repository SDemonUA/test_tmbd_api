import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showSearch = !this.router.isActive('/search', false);
  navItems = [
    { title: 'Movies', link: '/movies' },
    { title: 'TV Shows', link: '/tvshows' },
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToSearch(query: string = ''): void {
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }

}
