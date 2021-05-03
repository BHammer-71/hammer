import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
/* Shared Module */
/* App Root */
import { AppComponent } from './app.component';
/* Routing Module */
// import { AppRoutingModule } from './app-routing.module';
/* Angular Modules */
// import { HttpClientModule } from '@angular/common/http';
/* Feature modules */
// import { FeatureHomeModule } from '@hammer/vphoa/features';

import { VphoaFeatureShellModule} from '@hammer/vphoa/vphoa-feature-shell'

  // import components second
  // import services and options third
  // import temp for testing/development

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    VphoaFeatureShellModule,
    // HttpClientModule,
    // AppRoutingModule,
    // FeatureHomeModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
