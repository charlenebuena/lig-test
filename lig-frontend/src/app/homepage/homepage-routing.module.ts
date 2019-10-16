import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, canActivate: [] },
    // { path: 'add-template', component: AddTemplateComponent, canActivate: [AuthGuard] },
    // {
    //     path: 'edit-template/:id',
    //     component: EditTemplateComponent,
    //     canActivate: [AuthGuard],
    //     resolve: {
    //         details: TemplateSetResolver
    //     }
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule {}
export const routedComponents = [HomepageComponent];