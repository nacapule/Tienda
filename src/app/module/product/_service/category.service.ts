import { Injectable } from '@angular/core';
import { Category } from '..//_model/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] =[];

  constructor() { }

  getCategories(){
    this.categories = [];

    this.categories.push(new Category(1, "Artificial Intelligence", "AI", 1));
    this.categories.push(new Category(1, "Machine Learning", "ML", 1));
    this.categories.push(new Category(1, "Virtual Reality", "VR", 0));
    
    return this.categories;
  }

}
