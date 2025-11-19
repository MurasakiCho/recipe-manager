import type { Recipe } from "../types/recipe";
import "./RecipeCard.css";

type RecipeCardProps = {
    recipes: Recipe[];
    selectedCategoryId: number | null;
    onDelete: (id: number) => void;
    onEdit: (recipe: Recipe) => void;
};

export default function RecipeCard(props: RecipeCardProps){
    const { recipes, selectedCategoryId, onDelete, onEdit } = props;

    //filter recipes by category
    const filteredRecipes = selectedCategoryId 
        ? recipes.filter((r) => r.category.id === selectedCategoryId) 
        : recipes;

    return(
        <main>
            {filteredRecipes.length === 0? (
                <p className="no-recipes">No recipes to show.</p>
            ) : (
            <ul>
                {filteredRecipes.map((r) => (
                    <li key={r.id} >
                        <h3>{r.recipeName}</h3>
                        <p>{r.ingredients}</p>
                        <p>{r.instructions}</p>
                        <button onClick={() => onDelete(r.id!)}>Delete</button>
                        <button onClick={() => onEdit(r)}>Edit</button>
                    </li>
                ))}
            </ul>
            )}
        </main>
    );
}