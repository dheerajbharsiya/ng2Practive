import { LoginComponent } from './core/login/login.component';
import { HotlistComponent } from './hotlists/hotlist/hotlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HotlistComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    { path: '**', component: HotlistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting {

}