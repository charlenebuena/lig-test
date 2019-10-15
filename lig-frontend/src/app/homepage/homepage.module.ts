import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
        SharedModule,
        HomepageRoutingModule
    ],
    providers: [],
})
export class HomepageModule { }
