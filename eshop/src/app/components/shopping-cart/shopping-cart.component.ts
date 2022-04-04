import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Remove, Clear } from 'src/app/actions/cart.action';
import { CartModel } from 'src/app/models/cart.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  cart$: Observable<CartModel>;

  constructor(
    private store: Store<CartModel>,
    private alertCtrl: AlertController
  ) {
    this.cart$ = this.store.pipe(select('cart'));
  }

  ngOnInit() { }

  remove(item) {
    this.store.dispatch(Remove(item));
  }

  reset() {
    this.store.dispatch(Clear());
  }

  async presentRemoveConfirm(item) {
    const alert = await this.alertCtrl.create({
      header: 'Remover Item',
      message: `Deseja remover o item ${item.title} do carrinho?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Remover',
          handler: () => {
            this.remove(item);
          }
        }
      ]
    });
    await alert.present();
  }

}
