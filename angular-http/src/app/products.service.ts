import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public getProductsList(): Observable<ProductModel[]> {
    return this.http.get<IProduct[]>(`${API_URL}/products`)
      .pipe(
        map(items => items.map(item => new ProductModel(item)))
      );
  }
}

export const API_URL = 'https://6059934bb11aba001745c5eb.mockapi.io';

export interface IProduct {
  id: string;
  createdAt: string;
  name: string;
  price: string;
}

export class ProductModel {
  id: number;
  createdAt: moment.Moment;
  name: string;
  price: number;
  vat: number;

  constructor(input: IProduct) {
    this.id = +input?.id;
    this.createdAt = input?.createdAt ? moment(input.createdAt) : null;
    this.name = input?.name;
    this.price = +input?.price;
    this.vat = 0.23 * this.price;
  }
}
