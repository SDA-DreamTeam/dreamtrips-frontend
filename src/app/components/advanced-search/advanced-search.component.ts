import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Country } from 'src/app/model/country.model';
import { CountryService } from 'src/app/services/country.service';


@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  public isCollapsed = false;
  searchForm: FormGroup;

  countries: Country[] = []

  constructor(
    private countryService: CountryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(data => {
      this.countries = [];
      data.forEach((element) => {
        this.countries.push({ id: element.id, name: element.name })
      });
    });
    this.searchForm = this.formBuilder.group({
    });
  }

  onSubmit(form: NgForm) {
    this.tripSearchEvent.emit(form.value);
  }

  @Output() tripSearchEvent = new EventEmitter();

}
