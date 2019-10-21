import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full',
    },
    {
        path: 'homepage',
        loadChildren: './homepage/homepage.module#HomepageModule'
    },
    {
        path: 'policy',
        loadChildren: './contact/contact.module#ContactModule'
    },
    {
        path: 'banner-page',
        loadChildren: './banner-page/banner-page.module#BannerPageModule'
    },
    {
        path: '**',
        redirectTo: '/homepage',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
