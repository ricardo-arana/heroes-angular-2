import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { heroes } from 'src/app/heroes';
import { Heroe } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  heroe: Heroe;
  heroes: Heroe[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.heroes = heroes;
    this.activatedRoute.params.subscribe(
      params => {
        this.heroe = this.heroes[params["id"].toString()];
      }
    )
   }

  ngOnInit(): void {
  }

}
