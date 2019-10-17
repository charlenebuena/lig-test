import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerPageComponent } from './pages/main/banner-page.component';

export const routes: Routes = [
    { path: '', component: BannerPageComponent, canActivate: [] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BannerPageRoutingModule {}
export const routedComponents = [BannerPageComponent];