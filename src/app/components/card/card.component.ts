import { Component, Input } from '@angular/core';
import { Location } from '../../Interfaces/unit-response/location.interface';
import { OpenorclosedPipe } from '../pipes/openorclosed.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    OpenorclosedPipe,
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: Location;
  


}
