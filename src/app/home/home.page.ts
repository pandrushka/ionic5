import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modalData: any;

  constructor(private modalCtrl: ModalController) { }

  async openIonModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        modalTitle: this.constructor.name
      }
    });

    modal.onDidDismiss().then(modalData => {
      if (modalData !== null) {
        this.modalData = modalData.data;
        console.log('Modal Data : ' + modalData.data);
      }
    });

    return await modal.present();
  }
}
