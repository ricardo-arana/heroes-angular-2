import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHeroe() {
    this.router.navigate( ['/detalle', this.index]);
  }

}
