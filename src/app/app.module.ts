import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {AppComponent} from './app.component';
import {HomeService} from './home.service'
import {HomeComponent} from './pages/home/home.component';

import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './pages/header/header.component';
import {FooterComponent} from './pages/footer/footer.component';

import {ProductComponent} from './pages/product/product.component'

import {AccodionComponent} from './pages/accodion/accodion.component';
import {SectionComponent} from './pages/section/section.component';
import {GuitarComponent} from './pages/guitar/guitar.component';
import {DrumComponent} from './pages/drum/drum.component';
import {KeyboardComponent} from './pages/keyboard/keyboard.component';
import {AmplifierComponent} from './pages/amplifier/amplifier.component';
import {HttpClientModule} from "@angular/common/http";
import {ShoppingCartComponent} from './pages/shopping-cart/shopping-cart.component';
import {ComparisonPageComponent} from './pages/comparison-page/comparison-page.component';
import {AuthorizationComponent} from './pages/authorization/authorization.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {CreateAccountComponent} from './pages/create-account/create-account.component';
import {ContactComponent} from './pages/contact/contact.component';
import {BlogComponent} from './pages/blog/blog.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {ShowProductComponent} from './pages/show-product/show-product.component';
import {SearchService} from './search.service';
import {FilterPipe} from './shared/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './pages/search/search.component';

//Import routing
const appRoutes: Routes = [
  {
    path: '', component: SectionComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'accordion',
        component: AccodionComponent,
      },
      {
        path: 'drum',
        component: DrumComponent,
      },
      {
        path: 'guitar',
        component: GuitarComponent,
      },
      {
        path: 'amplifier',
        component: AmplifierComponent,
      },
      {
        path: 'keyboard',
        component: KeyboardComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      }
    ]
  },
  {
    path: 'authorization',
    component: AuthorizationComponent,
  },
  {
    path: 'comparison-page',
    component: ComparisonPageComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contacts',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'show-product',
    component: ShowProductComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AccodionComponent,
    SectionComponent,
    GuitarComponent,
    DrumComponent,
    KeyboardComponent,
    AmplifierComponent,
    ShoppingCartComponent,
    ComparisonPageComponent,
    AuthorizationComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    ContactComponent,
    BlogComponent,
    AboutUsComponent,
    ShowProductComponent,
    FilterPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    HttpClientModule,
    GoogleMapsModule, FormsModule, ReactiveFormsModule
  ],
  providers: [HomeService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
