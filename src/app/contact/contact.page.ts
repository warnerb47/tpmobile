import { Component, OnInit } from '@angular/core';
// import { Contact, Contacts } from '@capacitor-community/contacts';
// import { isPlatform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


type ContactType = {
  nom: string;
  numero: string;
  prenom: string;
  id: number;
};
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  // contacts: Contact[] = [];
  contacts: ContactType[] = [];
  constructor(
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    // this.loadContacts();
    this.getContacts();
  }

//  async loadContacts() {
//    try {
//     if (isPlatform('android')) {
//       const permission=  await Contacts.getPermissions();
//       if (!permission.granted) {
//         return;
//       }
//     }
//      const results = await Contacts.getContacts();
//      this.contacts = results.contacts;
//      console.log('contacts', this.contacts);
//    } catch (error) {
//      console.log('error', error);
//    }
//  }

 public async getContacts() {
   try {
    const response = await fetch('http://localhost:3000/contacts');
    const data = await response.json();
    console.log(data);
    this.contacts = data;
   } catch (error) {
     console.log(error);
   }
 }

  public async addContact(contact: ContactType) {
    console.log(contact);
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options: RequestInit = {
        method: 'POST',
        headers,
        body: JSON.stringify(contact),
        redirect: 'follow'
      };
      const response = await fetch('http://localhost:3000/contacts', options);
      const data = await response.json();
      console.log(data);
      this.getContacts();
     } catch (error) {
       console.log(error);
     }
  }

  public async removeContact(id: number) {
    try {
      if (id) {
        const options: RequestInit = {
          method: 'DELETE',
          redirect: 'follow'
        };
        const response = await fetch('http://localhost:3000/contacts/'+id, options);
        const data = await response.json();
        console.log(data);
        this.getContacts();
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async updateContact(contact: ContactType) {
    try {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options: RequestInit = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(contact),
        redirect: 'follow'
      };
      const response = await fetch('http://localhost:3000/contacts/'+contact.id, options);
      const data = await response.json();
      console.log(data);
      this.getContacts();
    } catch (error) {
      console.log(error);
    }
  }

  public async onUpdateContact(contact: ContactType) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Modifier Contact',
      inputs: [
        {
          name: 'prenom',
          type: 'text',
          value: contact.prenom,
          placeholder: contact.prenom
        },
        {
          name: 'nom',
          type: 'text',
          value: contact.nom,
          placeholder: contact.nom
        },
        {
          name: 'numero',
          type: 'text',
          value: contact.numero,
          placeholder: contact.numero
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
          text: 'modifier',
          handler: (value: ContactType) => {
            console.log(value);
            if (value.nom && value.prenom && value.numero) {
              contact.nom = value.nom;
              contact.prenom = value.prenom;
              contact.numero = value.numero;
              this.updateContact(contact);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  public async onRemoveContact(contact: ContactType) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: ' supprimer ce contact?',
      // message: 'Êtes vous sûres de vouloir supprimer ce contact: '+contact.prenom,
      message:  `Êtes vous sûres de vouloir supprimer ce contact: <b> ${contact.prenom} ${contact.nom} </b>`,
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
            this.removeContact(contact.id);
          }
        }
      ]
    });

    await alert.present();
  }

  public async onAddContact() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ajouter un contact',
      inputs: [
        {
          name: 'prenom',
          type: 'text',
          placeholder: 'Prenom',
        },
        {
          name: 'nom',
          type: 'text',
          placeholder: 'Nom',
        },
        {
          name: 'numero',
          type: 'text',
          placeholder: 'Numero',
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
          text: 'ajouter',
          handler: (value: ContactType) => {
            if (value.nom && value.prenom && value.numero) {
              value.id = this.contacts.length+1;
              this.addContact(value);
            }
          }
        }
      ]
    });

    await alert.present();
  }

}
