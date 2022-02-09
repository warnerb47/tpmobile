import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  libelle: string = null;
  valid = true;
  doneList: string[] = [];
  unDoneList: string[] = [];
  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  addTask(libelle: string) {
    if (libelle) {
      this.unDoneList.push(libelle);
    }
  }

  async onAddTask() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nouvelle tâche',
      inputs: [
        {
          name: 'libelle',
          type: 'text',
          placeholder: 'Entrer le libellé de la tâche'
        },
      ],
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'valider',
          handler: (value) => {
            if (value.libelle) {
              console.log(value.libelle);
              this.addTask(value.libelle);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  markDone(libelle: string) {
    if (libelle) {
      const index = this.unDoneList.indexOf(libelle);
      if (index > -1) {
        this.unDoneList.splice(index, 1);
        this.doneList.push(libelle);
      }
    }
  }

  markUnDone(libelle: string) {
    if (libelle) {
      const index = this.doneList.indexOf(libelle);
      if (index > -1) {
        this.doneList.splice(index, 1);
        this.unDoneList.push(libelle);
      }
    }
  }

  deleteTask(libelle: string, doneList = true) {
    if (libelle && doneList) {
      const index = this.doneList.indexOf(libelle);
      if (index > -1) {
        this.doneList.splice(index, 1);
      }
    } else if (libelle && !doneList){
      const index = this.unDoneList.indexOf(libelle);
      if (index > -1) {
        this.unDoneList.splice(index, 1);
      }
    }
  }

  async onDeleteTask(libelle: string, doneList = true) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: ' supprimer cette tâche ?',
      message: 'Êtes vous sûres de vouloir supprimer cette tâche',
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'supprimer',
          id: 'confirm-button',
          handler: () => {
            this.deleteTask(libelle, doneList);
          }
        }
      ]
    });

    await alert.present();
  }

  submit() {
    this.valid = true;
    if (this.libelle) {
      this.addTask(this.libelle);
    } else {
      this.valid = false;
    }
  }

}
