import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AdminComponent,
    UserComponent,
    ProductComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'product', component: ProductComponent },
      { path: 'user', component: UserComponent },
      { path: 'admin', component: AdminComponent },
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: '**', component: NotFoundComponent}
      
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
