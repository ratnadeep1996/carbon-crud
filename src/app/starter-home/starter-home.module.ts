import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarterHomeComponent } from './starter-home/starter-home.component';
import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule
} from 'carbon-components-angular';
import { StarterHomeRoutingModule } from './starter-home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {
	TableModule, UIShellModule, SearchModule, NFormsModule, DialogModule, ButtonModule,
	PaginationModule, PlaceholderModule, ModalModule,SelectModule 
} from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { Delete16Module } from '@carbon/icons-angular/lib/delete/16';
import { Add32Module } from '@carbon/icons-angular/lib/add/32';
import { Edit16Module } from '@carbon/icons-angular/lib/edit/16';

import { CreateModalComponent } from './create-modal/create-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModifyModalComponent } from './modify-modal/modify-modal.component';

@NgModule
	({
		imports: [
			CommonModule,
			ReactiveFormsModule,
			FormsModule,
			StarterHomeRoutingModule,
			GridModule,
			ListModule,
			TabsModule,
			UIShellModule,
			TilesModule,
			Notification20Module,
			UserAvatar20Module,
			AppSwitcher20Module,
			Delete16Module,
			Edit16Module,
			TableModule,
			SearchModule,
			NFormsModule, DialogModule, ButtonModule, PaginationModule, Add32Module,
			PlaceholderModule, ModalModule,SelectModule 
		],
		declarations: [StarterHomeComponent, NavbarComponent, CreateModalComponent, ModifyModalComponent],
		entryComponents:[CreateModalComponent],
		exports: [StarterHomeComponent]
	})
export class StarterHomeModule { }
