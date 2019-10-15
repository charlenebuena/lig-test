import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Components
 */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannersComponent } from './banners/banners.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        BannersComponent,
        ImageSliderComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BannersComponent,
        ImageSliderComponent
    ],
    providers: [],
})
export class SharedModule { }
