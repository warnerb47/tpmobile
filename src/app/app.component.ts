import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'IMC', url: 'imc', icon: 'medkit' },
    { title: 'Todo', url: 'todo', icon: 'list' },
    { title: 'Contact', url: 'contact', icon: 'people' },
    // { title: 'Contact', url: '/folder/Favorites', icon: 'people' },
  ];

  constructor() {}
}
