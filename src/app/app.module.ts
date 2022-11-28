import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoutes:Routes = [
    {
        path:"",
        component:AddTodoComponent
    },
    {
        path:"view",
        component:ViewTodoComponent
    }
]
@NgModule({
    declarations: [
        AppComponent,
        AddTodoComponent,
        ViewTodoComponent,
        NavbarComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(myRoutes),
        FormsModule
    ]
})
export class AppModule { }
