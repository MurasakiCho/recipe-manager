import type { Recipe } from "../types/recipe";

type RecipeListProps = {
    recipes: Recipe[];
    selectedCategoryId: number | null;
};

export default function RecipeList(props: RecipeListProps){
    const { recipes, selectedCategoryId } = props;

    //filter recipes by category
    const filteredRecipes = selectedCategoryId 
        ? recipes.filter((r) => r.categoryId === selectedCategoryId) 
        : recipes;

    return(
        <main>
            <ul>
                {filteredRecipes.map((r) => (
                    <li key={r.id} >
                        <h3>{r.recipeName}</h3>
                        <p>{r.ingredients}</p>
                        <p>{r.instructions}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}