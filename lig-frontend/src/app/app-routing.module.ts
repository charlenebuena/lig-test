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
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
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
