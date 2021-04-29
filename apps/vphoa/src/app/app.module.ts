import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* Shared Module */
/* App Root */
import { AppComponent } from './app.component';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
/* Angular Modules */
import { HttpClientModule } from '@angular/common/http';
/* Feature modules */
  // import components second
  // import services and options third
  // import temp for testing/development

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
