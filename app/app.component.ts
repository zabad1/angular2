import {Component} from "@angular/core";

@Component({
	selector: 'angular2',
	templateUrl: './templates/angular2.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}