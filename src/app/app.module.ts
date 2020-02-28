import { environment } from './../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AngularFireModule } from '@angular/fire';
import 'firebase/firestore';
import { AngularFirestoreModule} from '@angular/fire/firestore'
import {   AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,



    AngularFireModule.initializeApp(
    {
      apiKey: "AIzaSyAIZLkI3DrgBfRmLGhM3LtGuNSa-LnYxVQ",
      authDomain: "ecommerceapp-acee3.firebaseapp.com",
      databaseURL: "https://ecommerceapp-acee3.firebaseio.com",
      projectId: "ecommerceapp-acee3",
      storageBucket: "ecommerceapp-acee3.appspot.com",
      messagingSenderId: "909205155537",
      appId: "1:909205155537:web:8bbb45b275a181ef3f1ff0",
      measurementId: "G-HJT7WRRY74"
    }
    ),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
   
    

  ],
  
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
