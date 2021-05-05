import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {postReducer} from './reducers/post.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {simpleReducer} from './simple.reducer';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({message:simpleReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
