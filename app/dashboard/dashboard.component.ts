import {Component, OnInit} from "@angular/core";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  goToDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
