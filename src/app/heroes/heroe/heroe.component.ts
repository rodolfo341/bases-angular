import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
    constructor() { }

    nombre: string = 'IronMan';
    edad: number = 50;

    obtenerNombre():string {
        return `${this.nombre} - ${this.edad}`;
    }

    get mayusculas(){
        return this.nombre.toUpperCase();
    }

    ngOnInit(): void { }
}
