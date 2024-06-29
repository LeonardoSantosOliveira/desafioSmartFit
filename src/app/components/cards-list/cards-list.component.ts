import { Component, Input, OnInit } from '@angular/core';
import { GetUnitService } from '../../services/get-unit.service';
import { Location } from '../../Interfaces/unit-response/location.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [
    CardComponent,
    CommonModule
  ],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];
}
