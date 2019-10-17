import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HomepageComponent } from './pages/main/homepage.component';
import { ItemBlockComponent } from './components/item-block/item-block.component';

import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
    declarations: [
        HomepageComponent,
        ItemBlockComponent
    ],
    imports: [
        HomepageRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        HomepageComponent
    ],
    providers: [],
})
export class HomepageModule { }
