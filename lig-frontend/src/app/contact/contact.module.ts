import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ContactComponent } from './pages/main/contact.component';

import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        ContactRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
    ],
    providers: [],
})
export class ContactModule { }
