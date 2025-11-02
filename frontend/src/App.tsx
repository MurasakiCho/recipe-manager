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
  const [showForm, setShowForm] = useState<boolean>(false);

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
    fetch(`http://localhost:8080/api/recipes/${id}`, {
      method: "DELETE"
    }) 
    //functional form of setRecipes that avoids stale state issues if multiple 
    //deletes happen quickly (when the fetch is done, THEN run this function)
      .then(() => setRecipes(prev => prev.filter(r => r.id !== id)))
      .then(() => console.log(id));
  };

  const handleEditRecipe = (editedRecipe: Recipe) => {
    fetch(`http://localhost:8080/api/recipes/${editedRecipe.id}`, {
      method: "PATCH",
      headers:{ "Content-Type": "application/json"},
      body: JSON.stringify(editedRecipe)
    })
      .then(res => res.json())
      .then((updatedRecipe: Recipe) => setRecipes(prev =>
        prev.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
      ));

      setRecipeToEdit(null);
  };

  return (
    <div className="App">
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={setCategoryId}
      />
      <main>
        {showForm && (
          <div className="overlay">
            <div className="form-modal">
              <AddRecipeForm 
                categories={categories}
                recipe={recipeToEdit}
                onAdd={handleAddRecipe}
                onEdit={handleEditRecipe}
              />
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </div>
        )}


        
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