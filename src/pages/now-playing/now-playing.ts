import { MovieDetialPage } from './../movie-detial/movie-detial';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the NowPlayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-now-playing',
  templateUrl: 'now-playing.html',
})
export class NowPlayingPage {

  movieArray : any = [];
  imgPath = 'https://image.tmdb.org/t/p/original/';
  queryText : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nowmovie :  MovieProvider) {
    this.loadNowdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPlayingPage');
  }


  MovieApp(){      //ปุ่มhome
    this.navCtrl.push("MovieAppPage");
  }

  loadNowdata(){
    this.nowmovie.getNowPlaying().subscribe(nowmovie =>{
      this.movieArray=nowmovie["results"];
    });
  }

  Moviedetail(nowmovie){
    this.navCtrl.push("MovieDetialPage",nowmovie);
  }

  
  }
 
   

