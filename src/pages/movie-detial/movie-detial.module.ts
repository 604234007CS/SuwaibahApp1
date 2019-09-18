import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetialPage } from './movie-detial';

@NgModule({
  declarations: [
    MovieDetialPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieDetialPage),
  ],
})
export class MovieDetialPageModule {}
