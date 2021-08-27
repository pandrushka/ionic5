import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal/modal.component';
import { StarWarsService } from '../services/api/star-wars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  modalData: any;
  people = [];

  constructor(
    private router: Router,
    private starWarsService: StarWarsService,
    private modalCtrl: ModalController
  ) { }

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
    this.getStarWarsPeople();
  }

  getStarWarsPeople(): void {
    //  TODO: rename get call.
    this.starWarsService.getStarWarsPeople().subscribe(people => {
      this.people = people.results;
    });
  }

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
