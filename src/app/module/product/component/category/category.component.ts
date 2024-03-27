import { Component } from '@angular/core';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService
  ){
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }
}
