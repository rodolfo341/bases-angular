import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
//import { ContadorComponent } from './contador/contador/contador.component';

import { HeroesModule } from './heroes/heroes.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HeroesModule,
        ContadorModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }


