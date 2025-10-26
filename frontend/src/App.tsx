import { Sidebar, RecipeList, AddRecipeForm } from "./components";
import type { Category, Recipe } from "./types";
import { useState } from "react";
import "./App.css"

const categories: Category[] = [
  { id: 1, category: "Breakfast"},
  { id: 2, category: "Lunch"},
  { id: 3, category: "Dinner"},
]

const starterRecipes: Recipe[] = [
  {id: 1, categoryId: 1, recipeName: "Pancakes", ingredients: "Flour, Sugar, Eggs, Milk", instructions: "Mix and cook."},
  {id: 2, categoryId: 2, recipeName: "Tacos", ingredients: "Beef, Tortillas, Cheese", instructions: "Assemble and serve."},
  {id: 3, categoryId: 3, recipeName: "Spaghetti", ingredients: "Pasta, Tomato Sauce", instructions: "Boil pasta, add sauce and serve."}
]

export default function App() {
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>(starterRecipes);

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={setCategoryId}
      />
      <main>
        <AddRecipeForm onAdd={handleAddRecipe}/>
        <RecipeList
          recipes={recipes}
          selectedCategoryId={selectedCategoryId}
        />
      </main>

      
    </div>
  );
}