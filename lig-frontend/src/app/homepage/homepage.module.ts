import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './homepage.component';

import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
    declarations: [
        HomepageComponent
    ],
    imports: [
        HomepageRoutingModule,
        SharedModule,
    ],
    exports: [
        HomepageComponent
    ],
    providers: [],
})
export class HomepageModule { }
