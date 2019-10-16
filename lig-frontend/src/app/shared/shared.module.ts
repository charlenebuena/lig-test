import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BannersComponent,
        ImageSliderComponent,
        ScrollTopComponent
    ],
    imports: [
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BannersComponent,
        ImageSliderComponent,
        ScrollTopComponent
    ],
    providers: [],
})
export class SharedModule { }
