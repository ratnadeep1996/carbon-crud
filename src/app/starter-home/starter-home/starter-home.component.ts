import { Component, OnInit, Injector, TemplateRef, ViewChild } from '@angular/core';
import { TableModel, TableItem, TableHeaderItem, ModalService } from 'carbon-components-angular';
import { LibraryService } from '../library.service';
import { CONSTANT } from '../constants';
import { CreateModalComponent } from '../create-modal/create-modal.component';
import { ModifyModalComponent } from '../modify-modal/modify-modal.component';

@Component({
	selector: 'app-starter-home',
	templateUrl: './starter-home.component.html',
	styleUrls: ['./starter-home.component.scss']
})

export class StarterHomeComponent implements OnInit {
	public model = new TableModel();
	title = "Library Records";
	description = "Students book entries";
	limit = 10;
	offset = 1;
	modalText: string;
	open = true;

	@ViewChild("customTableItemTemplate", null)
	protected customTableItemTemplate: TemplateRef<any>;

	constructor(private libraryService: LibraryService, private modalService: ModalService) {
	}

	ngOnInit() {
		this.constructTableHeader();
		this.getLibraryRecords(this.limit, this.offset);
		this.model.pageLength = 10;
		this.model.currentPage = 1;
	}

	getLibraryRecords(limit, offset) {

		this.libraryService.getLibraryRecords(limit, offset).subscribe(result => {
			let records = result.body.records;
			let finalRecords = [];
			records && records.forEach(element => {
				finalRecords.push(this.constructTableRow(element));
			});
			this.model.data = [...finalRecords];

			this.model.totalDataLength = result.body.rowCount;
		})
	}

	constructTableHeader() {
		this.model.header = [
			new TableHeaderItem({ data: CONSTANT.ROLL_NO,style: { "width": "10%" } }),
			new TableHeaderItem({ data: CONSTANT.STUDENT_NAME, style: { "width": "30%" } }),
			new TableHeaderItem({ data: CONSTANT.BOOK_NAME, style: { "width": "30%" } }),
			new TableHeaderItem({ data: CONSTANT.BOOK_ID, style: { "width": "10%" } }),
			new TableHeaderItem({ data: CONSTANT.ACTION, style: { "width": "10%" } })
		];
	}
	constructTableRow(tableData: any) {
		let row = [];
		row.push(
			new TableItem({ data: tableData.rollno }), new TableItem({ data: tableData.student_name }),
			new TableItem({ data: tableData.book_name }), new TableItem({ data: tableData.book_id }),
			new TableItem({ data: { id: tableData.id }, template: this.customTableItemTemplate })
		)
		return row;
	}
	selectPage(page) {
		debugger
		this.offset = page;
		this.limit = this.model.pageLength;
		this.getLibraryRecords(this.limit, this.offset);
		this.model.currentPage = page;
	}

	openModal(id:number) {
		this.modalService.create({ component: CreateModalComponent ,inputs: {data: id}});
	}

	onDelete(id: number) {
		this.libraryService.deleteEntry(id).subscribe(() => {
			alert("Entry Deleted successfully");
			this.getLibraryRecords(this.limit, this.offset);
		})
	}
}
