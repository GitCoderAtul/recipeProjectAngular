import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { from } from 'rxjs';
import { Assignment3Component } from './assignment3/assignment3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'; 
import { recipePorjectComponent } from './recipeProject/recipePorject.component';
import { SplitAppsComponent } from './split-apps/split-apps.component';
import { CockpitComponent } from './split-apps/cockpit/cockpit.component';
import { ServerElementComponent } from './split-apps/server-element/server-element.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { MainAccountComponent } from './main-account/main-account.component'; 
import { LoggingService } from './services/logging.service';
import { AccountService } from './services/account.service';
import { Assignment5Component } from './assignment5/assignment5.component';
import { ActiveUserComponent } from './assignment5/active-user/active-user.component';
import { InactiveUserComponent } from './assignment5/inactive-user/inactive-user.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const appRoutes: Routes = [
  {path:'demoForm', component:DemoFormComponent},
  {path:'reactiveForm', component:ReactiveformComponent},
  {path:'mainAccount', component:MainAccountComponent},
  {path:'recipeProject', component:recipePorjectComponent},
  {path:'splitapps', component:SplitAppsComponent},
  {path:'recipe', component:RecipesComponent},
  {path:'shopping', component:ShoppingListComponent},
  {path:'assignment2', component:Assignment2Component},
  {path:'assignment3', component:Assignment3Component},
  {path:'assignment4', component:Assignment4Component},
  {path:'assignment5', component:Assignment5Component},
  {path:'assignment6', component:Assignment6Component}

]

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment3Component,
    recipePorjectComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SplitAppsComponent,
    CockpitComponent,
    ServerElementComponent,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AppHeaderComponent,
    NewAccountComponent,
    AccountComponent,
    MainAccountComponent,
    Assignment5Component,
    ActiveUserComponent,
    InactiveUserComponent,
    DemoFormComponent,
    Assignment6Component,
    ReactiveformComponent, 
  ],
  imports: [
    BrowserModule,FormsModule, NgbModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule
  ],
  providers: [LoggingService,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
