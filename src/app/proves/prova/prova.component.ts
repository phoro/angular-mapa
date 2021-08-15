import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {

  arrai: string[] = ['primer', 'segon', 'tercer', 'quart'];
  itemDeleted: string = '';

  borrarItem() {
    this.itemDeleted = this.arrai.pop() || '';

  }
}
