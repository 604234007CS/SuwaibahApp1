import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  contactArray = [{name: 'F', telephone: '0822836624', imageUrl: 'assets/imgs/friend1.jpg'},
                  {name: 'Far', telephone: '0916466030', imageUrl: 'assets/imgs/friend2.jpg'},
                  {name: 'Kan', telephone: '0882372938', imageUrl: 'assets/imgs/friend3.jpg'},
                  {name: 'Nasree', telephone: '0822697162', imageUrl: 'assets/imgs/friend4.jpg'},
                  {name: 'Ake', telephone: '0934721197', imageUrl: 'assets/imgs/friend5.jpg'}
                  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }
}//endclass
