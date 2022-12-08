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

    get mayusculas(): string{
        return this.nombre.toUpperCase();
    }

    cambiarASpiderMan(): void {
        this.nombre = 'SpiderMan';
    }

    cambiarAIronMan(): void {
        this.nombre = 'IronMan';
    }

    aumentarEdad(): void {
        this.edad = this.edad + 1;
    }

    disminuirEdad(): void {
        this.edad = this.edad - 1;
    }

    

    ngOnInit(): void { }
}
