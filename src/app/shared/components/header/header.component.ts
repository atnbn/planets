import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public routeHoverCollection = new Map<string, string>([
    ['/mercury', 'hover-class-route1'],
    ['/venus', 'hover-class-route2'],
    ['/earth', 'hover-class-route3'],
    ['/mars', 'hover-class-route4'],
    ['/jupiter', 'hover-class-route5'],
    ['/saturn', 'hover-class-route6'],
    ['/uranus', 'hover-class-route7'],
    ['/neptune', 'hover-class-route8'],
  ]);
  constructor(private router: Router, private route: ActivatedRoute) {}
  isDropdownOpen: boolean = false;
  navigateTo(target: String) {
    this.router.navigate([target]);
  }

  getHoverClass(): string | undefined {
    const currentRoutePath = this.route.snapshot.routeConfig?.path;

    if (currentRoutePath) {
      return this.routeHoverCollection.get(currentRoutePath);
    }

    return undefined;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;

    if (this.isDropdownOpen) {
      document.body.classList.add('disable-scroll');
    } else {
      document.body.classList.remove('disable-scroll');
    }
  }
  close() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
