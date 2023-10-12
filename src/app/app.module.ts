import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { ProjectDetailComponent } from './components/projects/project-detail/project-detail.component';
import { ProjectCarouselComponent } from './components/projects/project-carousel/project-carousel.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ProjectCardComponent,
    ProjectDetailComponent,
    ProjectCarouselComponent,
    AlertDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([], {
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80]
    })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
