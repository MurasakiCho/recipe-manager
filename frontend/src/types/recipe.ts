export type Recipe = {
    id?: number;
    category: {id: number; categoryName: string;};
    recipeName: string;
    ingredients: string;
    instructions: string;
};