import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    titulo: string = 'Contador';
    numero: number = 10;
    base: number = 5;
    

    acumular( num: number){
        this.numero+= num;
    }

}
