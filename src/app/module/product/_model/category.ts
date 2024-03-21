export class Category{
    category_id: number = 0;
    category: string = "";
    code: string = "";
    status: number = 0;

    constructor(category_id: number, category: string, code: string, status: number){
        this.category_id = category_id;
        this.category = category;
        this.code = code;
        this.status = status;
    }
}