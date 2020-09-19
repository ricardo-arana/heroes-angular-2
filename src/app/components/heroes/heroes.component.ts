import { Component, OnInit } from '@angular/core';
import { heroes } from 'src/app/heroes';
import { Heroe } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  constructor() {
    this.heroes = heroes;
  }

  ngOnInit(): void {
  }

}
