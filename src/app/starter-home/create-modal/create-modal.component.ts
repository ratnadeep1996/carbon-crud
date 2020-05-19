import { Component, OnInit, Inject, Injector } from '@angular/core';
import { ModalService, BaseModal } from 'carbon-components-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent extends BaseModal implements OnInit {
  entryForm: FormGroup;
  rollno: String;
  student_name: String;
  book_id: String;
  book_name: String;
  books: any[];
  @Inject("data") public data;
  id: number;
  constructor(
    protected modalService: ModalService, private formBuilder: FormBuilder,
    private libraryService: LibraryService, private injector: Injector) {
    super();
    this.entryForm = this.formBuilder.group({
      "rollno": [null, Validators.required],
      "student_name": [null, Validators.required],
      "book_id": [null, Validators.required],
      "book_name": [null, Validators.required],
      "books": [null, Validators.required]
    })

    this.id = this.injector.get("data");
  }

  ngOnInit() {
    if (this.id) {
      this.getRecordById(this.id);
    }
    this.getBooks();
  }

  getRecordById(id: number) {
    this.libraryService.getLibraryRecordById(id).subscribe((result) => {
      this.prefilledValues(result);
    })
  }
  prefilledValues(result) {
    debugger
    this.entryForm.patchValue({
      "rollno": result && result.body.rollno,
      "student_name": result && result.body.student_name,
      "book_id": result && result.body.book_id,
      "book_name": result && result.body.book_name
    })
  }

  onEntry(entryForm: any) {
    debugger
    let bookArr = entryForm.books && entryForm.books.split('-');

    if (this.id) {
      entryForm.book_id = (bookArr && bookArr[0]) || entryForm.book_id;
      entryForm.book_name = (bookArr && bookArr[1]) || entryForm.book_name;
      this.libraryService.updateEntry(this.id, entryForm).subscribe(() => {
        alert('Entry updated successfully');
        this.closeModal();
      })
    } else {
      entryForm.book_id = (bookArr && bookArr[0]) || this.books[0].id;
      entryForm.book_name = (bookArr && bookArr[1]) || this.books[0].name;
      this.libraryService.createEntry(entryForm).subscribe(() => {
        alert('Entry successfully');
        this.closeModal();
      })
    }
  }

  getBooks() {
    this.libraryService.getBooks().subscribe(result => {
      this.books = result.body.bookList;
    })
  }

}
