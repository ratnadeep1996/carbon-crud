import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Login20Module } from '@carbon/icons-angular/lib/login/20';
import { InputModule, ButtonModule } from 'carbon-components-angular';
import { LoginPageComponent } from './login-page/login-page.component';
import {
	TableModule,
	SearchModule, NFormsModule, DialogModule, PaginationModule
} from 'carbon-components-angular';

@NgModule({
	declarations: [
		AppComponent,
		LoginPageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		UIShellModule,
		HttpClientModule,
		InputModule,
		ButtonModule,
		Login20Module,
		TableModule,
		SearchModule,
		NFormsModule, DialogModule, ButtonModule, PaginationModule
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
