import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProductModel } from "./models/product.model";

@Injectable({
    providedIn: "root"
})
export class DataService {
    public url = 'http://127.0.0.1:3002/v1';

    constructor(
        private http: HttpClient
    ) { }

    getProducts() {
        return this.http.get<Array<ProductModel>>(`${this.url}/products`);
    }
}