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
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    const filterRecipe = recipes.filter((r) => r.id === id ? setRecipe(r) : null);


    return(
      <main>
        {recipe?.recipeName}
      </main>  
    );
}