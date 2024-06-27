import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetUnitService } from '../../services/get-unit.service';
import { HttpClientModule } from '@angular/common/http';

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

  results = [];
  formGroup!: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly unitService: GetUnitService
  ) { }

  ngOnInit() {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }
 
  onSubmit() {

  }

  onClean() {
    this.formGroup.reset();
  }
}
