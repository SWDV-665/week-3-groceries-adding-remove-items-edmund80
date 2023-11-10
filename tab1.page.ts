import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { text } from 'express';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  
  title = "Grocery List";

  items = [
    {
      name: 'Milk',
      quantity: 2
    },
    {
      name: 'Bread',
      quantity: 2
    },
    {
      name: 'Banana',
      quantity: 3
    },
    {
      name: 'Sugar',
      quantity: 1
    },
  ];

  
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {}

  async removeItem(item: { name: string; }, index: any) {
    console.log("Removing Item -", item, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Item-' + item.name + "...",
      duration: 3000
    });
    (await toast).present();

    this.items.splice(index, 1);
    
  }

  addItem() {
    console.log('Adding Items');
    this.showAddItemPrompt();
  }

  async showAddItemPrompt() {  
    const prompt = await this.alertCtrl.create({
      message: "Please enter the a item....",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          
        },
        {
          name: 'quantity',
          placeholder: 'Quanity',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel Clicked');
          }
          },
          {
          text: 'Save',
          handler: item => {
            console.log('Saved Clicked', item)
            this.items.push(item)
          }
        },
        ]
    });
  prompt.present(); 
}
}



