import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopRatedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-top-rated',
  templateUrl: 'top-rated.html',
})
export class TopRatedPage {

  movieArray : any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  queryText : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie : MovieProvider) {
    this.loadNowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopRatedPage');
  }

  loadNowdata(){
    this.nowmovie.getTopRated().subscribe(nowmovie =>{
      this.movieArray = nowmovie["results"];
    });
  }

  Moviedetail(nowmovie){
    this.navCtrl.push("MovieDetialPage",nowmovie);
  }
}
