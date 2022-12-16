import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
    styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }

    heroeBorrado: string = '';
    heroes: string [] = ['SpiderMan','IronMan','Hulk','Thor'];

    borrar(): void{
        this.heroeBorrado = this.heroes.shift() || '';
    }
    

}
