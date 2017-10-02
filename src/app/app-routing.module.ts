import { MyCartComponent } from './my-cart/my-cart.component';
import { RegisterComponent } from './core/register/register.component';
import { AuthGuard } from './core/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { HotlistComponent } from './hotlists/hotlist/hotlist.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'home', component: HotlistComponent, canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: RegisterComponent
    },
    {
        path: 'mycart', component: MyCartComponent
    },
    { path: '**', component: HotlistComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouting {

}