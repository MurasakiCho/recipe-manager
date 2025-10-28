import { Sidebar, RecipeList, AddRecipeForm } from "./components";
import type { Category, Recipe } from "./types";
import { useState, useEffect } from "react";
import "./App.css"

// const categories: Category[] = [
//   { id: 1, category: "Breakfast"},
//   { id: 2, category: "Lunch"},
//   { id: 3, category: "Dinner"},
// ];

// const starterRecipes: Recipe[] = [
//   {id: 1, categoryId: 1, recipeName: "Pancakes", ingredients: "Flour, Sugar, Eggs, Milk", instructions: "Mix and cook."},
//   {id: 2, categoryId: 2, recipeName: "Tacos", ingredients: "Beef, Tortillas, Cheese", instructions: "Assemble and serve."},
//   {id: 3, categoryId: 3, recipeName: "Spaghetti", ingredients: "Pasta, Tomato Sauce", instructions: "Boil pasta, add sauce and serve."}
// ]

export default function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeToEdit, setRecipeToEdit] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/recipes") //returns a promise
      .then(res => res.json()) //parses HTTP response into a JS object (parsed JSON)
      .then(data => setRecipes(data)); 
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/categories") //returns a promise
      .then(res => res.json()) //parses HTTP response into a JS object (parsed JSON)
      .then(data => setCategories(data)); 
  }, []);

  const handleAddRecipe = (newRecipe: Recipe) => {
    //setRecipes([...recipes, newRecipe]);
    
    fetch("http://localhost:8080/api/recipes", {
      method: "POST",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(newRecipe)
    })
    //makes sure you get the DB copy with the correct generated ID
      .then(res => res.json())
      .then(saved => setRecipes(prev => [...prev, saved])); 
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
        categories={categories}
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