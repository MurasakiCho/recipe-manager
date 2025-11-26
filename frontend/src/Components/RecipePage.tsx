import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Recipe } from "../types";

type RecipePageProps = {
    recipes: Recipe[];
    selectedCategoryId: number | null;
    onDelete: (id: number) => void;
};

export default function RecipePage(props: RecipePageProps) {
    const { recipes } = props;

    //extracts the id form the URL
    const { id } = useParams(); //gives a String
    const numId = Number(id); 

    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
      const find = recipes.find((r) => r.id === numId);
      setRecipe(find || null);
    }, [recipes, numId])

    return(
      <main>
        <h3>{recipe?.recipeName}</h3>
        <p>{recipe?.ingredients}</p>
        <p>{recipe?.instructions}</p>
      </main>  
    );
}