import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  books: any;
  displayedColumns = ['isbn', 'title', 'author'];
  dataSource = new BookDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getBooks()
      .subscribe(res => {
        console.log(res);
        this.books = res;
      }, err => {
        console.log(err);
      });
  }
}

export class BookDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getBooks();
  }

  disconnect() {

  }
}
