import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppState } from 'src/app/core/services/store/app-state';
import { storeReducers } from 'src/app/core/services/store/reducers';
import { StoreService } from 'src/app/core/services/store/store.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


// Initial store
function storeFactory() {
  return new StoreService<AppState>(storeReducers, {courses: [], currentCourse: {}});
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [
    {
      provide: StoreService,
      useFactory: storeFactory // create an instance of this class with the default values
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
