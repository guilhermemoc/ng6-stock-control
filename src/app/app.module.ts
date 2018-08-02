import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
// import { BookComponent } from './book/book.component';
// import { BookDetailComponent } from './book-detail/book-detail.component';
// import { BookCreateComponent } from './book-create/book-create.component';
// import { BookEditComponent } from './book-edit/book-edit.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  {
    path: 'produtos',
    component: ProductComponent,
    data: { title: 'produtos' }
  },
  {
    path: 'detalhes-produto/:id',
    component: ProductDetailComponent,
    data: { title: 'Detalhes do Produto' }
  },
  {
    path: 'cadastrar-produto',
    component: ProductCreateComponent,
    data: { title: 'Cadastro de produto' }
  },
  {
    path: 'editar-produto/:id',
    component: ProductEditComponent,
    data: { title: 'Editar produto' }
  },
  { path: '',
    redirectTo: '/produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
