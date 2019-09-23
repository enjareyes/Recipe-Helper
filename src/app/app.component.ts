import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	loadedRoute = 'recipes'
	onNavigate(route: string) {
		this.loadedRoute = route;

	}
}
