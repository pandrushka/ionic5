import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async closeModel() {
    const close = 'Modal used.';
    await this.modalController.dismiss(close);
  }
}
