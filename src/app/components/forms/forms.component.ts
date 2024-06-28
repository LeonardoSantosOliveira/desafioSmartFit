import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetUnitService } from '../../services/get-unit.service';
import { HttpClientModule } from '@angular/common/http';
import { Location } from '../../Interfaces/unit-response/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';
@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly unitService: GetUnitService,
    private readonly filterUnitsService: FilterUnitsService,
  ) { }

  ngOnInit() {
    this.unitService.getAllUnits().subscribe((data) => {
      this.results = data;
      this.filteredResults = data;
    });
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
  }

  onSubmit() {
    let { showClosed, hour } = this.formGroup.value;
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.unitService.setFilteredUnits(this.filteredResults)

  }

  onClean() {
    this.formGroup.reset();
  }
}
