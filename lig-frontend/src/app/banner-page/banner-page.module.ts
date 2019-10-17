import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BannerPageComponent } from './pages/main/banner-page.component';
import { BannerPageRoutingModule } from './banner-page-routing.module'; 

@NgModule({
    declarations: [
        BannerPageComponent,
    ],
    imports: [
        BannerPageRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
    ],
    providers: [],
})
export class BannerPageModule { }
