import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent} from './footer/footer.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home/home.component'; 
import { SobreComponent } from './sobre/sobre.component'; 
import { ContatoComponent } from './contato/contato.component';
import { ChildComponent } from './child/child.component';
import { FatherComponent } from './father/father.component';
import { ButtonComponent } from './button/button.component';

import { CamelCasePipe } from './camel-case.pipe';
import { CrudComponent } from './componentes/crud/crud.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DonationComponent,
    ChildComponent,
    FatherComponent,
    ButtonComponent,
   
    CamelCasePipe,
         CrudComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
   
    

    RouterModule.forRoot([ // Use um array para definir as rotas
     // { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'contato', component: ContatoComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent }
      
    ]),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
