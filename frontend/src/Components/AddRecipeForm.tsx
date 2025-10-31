import type { Recipe, Category } from "../types";
import { useEffect, useState } from "react";

type AddRecipeFormProps = {
    categories: Category[];
    recipe?: Recipe | null; //OPTIONAL prop: for editing recipes
    onAdd: (recipe: Recipe) => void; //communicate back up to parent (App) to handle what happens to data
    onEdit: (recipe: Recipe) => void;
};

export default function AddRecipeForm(props: AddRecipeFormProps){
    const [recipeName, setRecipeName] = useState(props.recipe?.recipeName ?? ""); //new state with default empty string
    const [ingredients, setIngredients] = useState(props.recipe?.ingredients ?? "");
    const [instructions, setInstructions] = useState(props.recipe?.instructions ?? "");
    const [selectedCategoryId, setCategoryId] = useState(props.recipe?.category.id.toString() ?? "1");
    const {categories} = props;

    useEffect(() => {
        console.log("Recipe id:", props.recipe?.id);

        if(props.recipe){
            setRecipeName(props.recipe.recipeName);
            setIngredients(props.recipe.ingredients);
            setInstructions(props.recipe.instructions);
            setCategoryId(props.recipe.category.id.toString());
        } else {
            setRecipeName("");
            setIngredients("");
            setInstructions("");
            setCategoryId("1");
        }
    }, [props.recipe]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); //prevents page reload, which is default form behavior

        const recipe: Recipe = {
            id: props.recipe?.id ?? 0,
            recipeName,
            ingredients,
            instructions,
            category: {
                id: parseInt(selectedCategoryId),
                categoryName: categories.find(c => c.id === parseInt(selectedCategoryId))?.category || ""
            }
            //categoryId: parseInt (selectedCategoryId, 10) //convert id to int (form gives a string)
        }

        if (props.recipe){
            props.onEdit(recipe); //EDIT mode
        } else {
            props.onAdd(recipe); //send new recipe to parent to add
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Recipe Name:</label><br/>
            <input 
                type="text" 
                value={recipeName} //input shows current state
                onChange={(e) => setRecipeName(e.target.value)} //updates state while typing
            /><br />

            <label>Ingredients:</label><br />
            <input 
                type="text" 
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            /><br />

            <label>Instructions:</label><br />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            ></textarea><br />

            <label>Category</label><br />
            <select 
                value={selectedCategoryId}
                onChange={(e) => setCategoryId(e.target.value)}
            >
                {categories.map(c =>(
                    <option key={c.id} value={c.id}>{c.category}</option>
                    )
                )}
            </select><br />

            <button type="submit">
                {props.recipe ? "Edit Recipe" : "Add Recipe"}
            </button>
        </form>
    );
}