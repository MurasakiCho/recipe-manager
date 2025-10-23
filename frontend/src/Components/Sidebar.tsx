import type { Category } from "../types";
import "./Sidebar.css";

type SidebarProps = {
    categories: Category[];
    selectedCategoryId: number | null;
    onSelect: (id: number | null) => void;
};

export default function Sidebar(props: SidebarProps){
    const { categories, selectedCategoryId, onSelect } = props;

    return (
        <aside>
            <ul>
                <li
                    key="all"
                    onClick={() => onSelect(null)}
                    className={selectedCategoryId === null ? "active" : ""}
                >
                    All Recipes
                </li>

                {categories.map((c) => ( 
                    <li 
                        key={c.id} 
                        onClick={() => onSelect(c.id)}
                        className={selectedCategoryId === c.id ? "active" : ""}
                    >
                        {c.category}
                    </li>
                ))}
            </ul>
        </aside>
    );
}