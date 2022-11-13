import { Component} from '@angular/core';

@Component ({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>{{ base }}</h3>
        
        
        <button (click)="acumular(-base)">-{{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(base)">+{{ base }}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador';
    numero: number = 10;
    base: number = 5;
    

    acumular( num: number){
        this.numero+= num;
    }

}