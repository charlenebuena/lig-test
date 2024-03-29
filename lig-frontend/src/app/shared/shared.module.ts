import { CommonModule} from '@angular/common';
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
        ImageSliderComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BannersComponent,
        ImageSliderComponent,
    ],
    providers: [],
})
export class SharedModule { }
