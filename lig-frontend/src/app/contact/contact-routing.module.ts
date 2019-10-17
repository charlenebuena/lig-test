import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/main/contact.component';

export const routes: Routes = [
    { path: '', component: ContactComponent, canActivate: [] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {}
export const routedComponents = [ContactComponent];