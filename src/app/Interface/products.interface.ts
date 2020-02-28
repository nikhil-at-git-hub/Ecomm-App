import { ProductsComponent } from './../components/products/products.component';

export interface Product{
    Name : string;
    Price : number;
    Desc ?: string;
    ProductPath : string;
}