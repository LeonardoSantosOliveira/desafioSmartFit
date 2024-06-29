import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { Location } from './Interfaces/unit-response/location.interface';
import { GetUnitService } from './services/get-unit.service';
import { LegendComponent } from './components/legend/legend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsComponent,
    HeaderComponent,
    CardsListComponent,
    CommonModule,
    LegendComponent,
  ],
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  unitsList: Location[] = [];
  showList = new BehaviorSubject(false);

  constructor(
    private readonly unitService: GetUnitService
  ) { }

  onSubmit() {
    this.showList.next(true);
    this.unitsList = this.unitService.getFilteredUnits();
  }

}