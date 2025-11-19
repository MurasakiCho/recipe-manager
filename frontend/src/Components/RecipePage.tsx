import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "../types";

export default function RecipePage() {
    //extracts the id form the URL
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);


    return();
}