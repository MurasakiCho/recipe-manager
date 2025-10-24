import Sidebar from "./components/Sidebar";
import type { Category } from "./types";
import { useState } from "react";

const categories: Category[] = [
  { id: 1, category: "Breakfast"},
  { id: 2, category: "Lunch"},
  { id: 3, category: "Dinner"},
]

export default function App() {
  const [selectedCategoryId, setCategoryId] = useState<number | null>(null);

  return (
    <div>
      <Sidebar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelect={setCategoryId}
      />
    </div>
  );
}