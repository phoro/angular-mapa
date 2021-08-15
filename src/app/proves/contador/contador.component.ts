import { Component } from "@angular/core";

@Component({
    selector: 'app-component',
    template: `
        <h1>{{ title}}</h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>
        <button (click)="sumar( +base)">+ {{ base }}</button>
        <span>{{ contador }}</span>
        <button (click)="sumar( -base )">- {{ base }}</button>
    `,
    styleUrls: ['contador.component.css']
})

export class ContadorComponent {
    title: string = 'Contador App';
    contador: number = 0;
    base: number = 5;

    sumar(valor: number) {
        this.contador += valor;
    }
}