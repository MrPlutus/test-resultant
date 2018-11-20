import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Currency } from './currency';
import { interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public dataSource: Array<Currency> = [];
  public displayedColumns: string[] = ['name', 'volume', 'amount'];
  public loading: boolean = false;

  constructor (
    private _service: AppService
  ){}

  ngOnInit() {
    this.getData();

    setInterval(() => {
      this.getData();
    }, 15000);

  }

  public getData() {
    this.loading = true;
    this._service.getСurrency().subscribe(
      data => {
      console.log(data);
      this.dataSource = data.stock;
    },
      () => {},
      () => {
        this.loading = false;
      }
    );
  }

}
