import { Sidebar, RecipeList, AddRecipeForm } from "./components";
import type { Category, Recipe } from "./types";
import { useState, useEffect } from "react";
import "./App.css"

const categories: Category[] = [
  { id: 1, category: "Breakfast"},
  { id: 2, category: "Lunch"},
  { id: 3, category: "Dinner"},
];

// const starterRecipes: Recipe[] = [
//   {id: 1, categoryId: 1, recipeName: "Pancakes", ingredients: "Flour, Sugar, Eggs, Milk", instructions: "Mix and cook."},
//   {id: 2, categoryId: 2, recipeName: "Tacos", ingredients: "Beef, Tortillas, Cheese", instructions: "Assemble and serve."},
//   {id: 3, categoryId: 3, recipeName: "Spaghetti", ingredients: "Pasta, Tomato Sauce", instructions: "Boil pasta, add sauce and serve."}
// ]



export default function App() {
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeToEdit, setRecipeToEdit] = useState<Recipe | null>(null);

  useEffect(() => {
  fetch("http://localhost:8080/api/recipes") //returns a promise
    .then(res => res.json()) //parses HTTP response into a JS object (parsed JSON)
    .then(data => setRecipes(data)); 
  });

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id: number) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const handleEditRecipe = (editedRecipe: Recipe) => {
    setRecipes(recipes.map(r => r.id === editedRecipe.id ? editedRecipe : r));
  };

  return (
    <div className="App">
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={setCategoryId}
      />
      <main>
        <AddRecipeForm 
          recipe={recipeToEdit}
          onAdd={handleAddRecipe}
          onEdit={handleEditRecipe}
        />
        <RecipeList
          recipes={recipes}
          selectedCategoryId={selectedCategoryId}
          onDelete={handleDeleteRecipe}
          onEdit={setRecipeToEdit}
        />
      </main>

      
    </div>
  );
}