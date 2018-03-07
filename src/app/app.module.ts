import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routerAnimation } from './animations';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  {
    path: 'home', component: ContentComponent, data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'order', component: CreateOrderComponent, data: {
      animation: {
        value: 'order',
      }
    }
  },
  {
    path: 'pricing', component: ContentComponent, data: {
      animation: {
        value: 'pricing',
      }
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    ContentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes, {
        useHash: true
      }
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
