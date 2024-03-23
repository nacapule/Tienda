import { Component } from '@angular/core';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from'sweetalert2';

declare var $: any; // JQuery

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: Category[] = [];
// Category form
  form = this.formBuilder.group({
    category: ["", [Validators.required]],
    code: ["", [Validators.required]],
});
  submitted = false; // Form submitted
  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
  ){
  }

  ngOnInit(){
    this.getCategories();
  }

  onSubmit(){
    // validate form
    this.submitted = true;
    if(this.form.invalid) return;
    this.submitted = false;

    // add category to category list
    let id = this.categories.length + 1;
    let category = new Category(id, this.form.controls['category'].value!, this.form.controls['code'].value!, 1);
    this.categories.push(category);

    // close modal
    this.hideModalForm();

    // show message
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      toast: true,
      text: 'La categoría se ha registrado con éxito',
      background: '#D8D8D8',
      showConfirmButton: false,
      timer: 2500
    });

  }

  getCategories(){
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }
  getRegions(){
    this.categories = this.categoryService.getCategories();
  }

showModalForm(){
    $("#modalForm").modal("show");
    this.form.reset();
    this.submitted = false;
  }

hideModalForm(){
    $("#modalForm").modal("hide");
  }
} 
