import { Component, OnInit } from '@angular/core';
import { Contact, Contacts } from '@capacitor-community/contacts';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  contacts: Contact[] = [];
  constructor() { }

  ngOnInit() {
    this.loadContacts();
  }

 async loadContacts() {
   try {
    if (isPlatform('android')) {
      const permission=  await Contacts.getPermissions();
      if (!permission.granted) {
        return;
      }
    }
     const results = await Contacts.getContacts();
     this.contacts = results.contacts;
     console.log('contacts', this.contacts);
   } catch (error) {
     console.log('error', error);
   }
 }
}
