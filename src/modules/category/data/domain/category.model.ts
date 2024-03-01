export interface CategoryModel {
    id: string;
    name: string;
    products?: any[];
    created_at: Date;
    updated_at: Date;
}