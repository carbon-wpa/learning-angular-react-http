import * as moment from 'moment';
import axios from "axios";

export const getProductsList = () => {
    return axios.get(`${API_URL}/products`)
        .then(items => items.data.map(item => new ProductModel(item)))
};

export const API_URL = 'https://6059934bb11aba001745c5eb.mockapi.io';

export class ProductModel {
    id;
    createdAt;
    name;
    price;
    vat;

    constructor(input) {
        this.id = +input?.id;
        this.createdAt = input?.createdAt ? moment(input.createdAt) : null;
        this.name = input?.name;
        this.price = +input?.price;
        this.vat = 0.23 * this.price;
    }
}
