import Sidebar from "./components/Sidebar.tsx";
import RecipeList from "./components/RecipeList.tsx";
import type { Category } from "./types";
import type { Recipe } from "./types/recipe.ts";
import { useState } from "react";
import "./App.css"

const categories: Category[] = [
  { id: 1, category: "Breakfast"},
  { id: 2, category: "Lunch"},
  { id: 3, category: "Dinner"},
]

const recipes: Recipe[] = [
  {id: 1, categoryId: 1, recipeName: "Pancakes", ingredients: "Flour, Sugar, Eggs, Milk", instructions: "Mix and cook."},
  {id: 2, categoryId: 2, recipeName: "Tacos", ingredients: "Beef, Tortillas, Cheese", instructions: "Assemble and serve."},
  {id: 3, categoryId: 3, recipeName: "Spaghetti", ingredients: "Pasta, Tomato Sauce", instructions: "Boil pasta, add sauce and serve."}
]

export default function App() {
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);

  return (
    <div className="App">
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={setCategoryId}
      />
      <RecipeList
        recipes={recipes}
        selectedCategoryId={selectedCategoryId}
      />
    </div>
  );
}