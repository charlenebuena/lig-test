import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/main/homepage.component';
import { ViewItemComponent } from './pages/view-item/view-item.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent, canActivate: [] },
    { path: 'detail', component: ViewItemComponent, canActivate: [] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule {}
export const routedComponents = [HomepageComponent];