import { MovieProvider } from './../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  movieArray : any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  queryText : string;

  constructor(public navCtrl: NavController, public navParams: NavParams , public nowmovie : MovieProvider) {
    this.loadNowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }


  loadNowdata(){
    this.nowmovie.getPopular().subscribe(nowmovie =>{
      this.movieArray=nowmovie["results"];
    });
  }

  Moviedetail(nowmovie){
    this.navCtrl.push("MovieDetialPage",nowmovie);
  }
}
