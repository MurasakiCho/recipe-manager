import Header from "./components/Header";
import type { Category } from "./types";
import { useState } from "react";

const categories: Category[] = [
  { id: 1, category: "Breakfast"},
  { id: 2, category: "Lunch"},
  { id: 3, category: "Dinner"},
]

export default function App() {
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);
  //setCategoryId(1);
  console.log("Currently selected category:", selectedCategoryId);

  return (
    <div>
      <Header />
      <main style = {{padding: "1rem"}}>
        <p>This is where recipes will go.</p>
      </main>
    </div>
    
  )
}