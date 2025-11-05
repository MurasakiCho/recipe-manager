## Development Log
1 - Java & OOP
- Implemented `Recipe`, `RecipeCategory`, and `RecipeBook` classes.
- Practiced object-oriented programming: constructors, encapsulation, lists, and relationships
- Focused on structuring data models to represent real-world concepts.

2 - Collections & Java Syntax 
- Added methods to add, remove, and get a recipe.
- Handled invalid operations such as:
	-  Adding duplicates
	 - Removing non-existent recipes
	 - Passing null or blank recipe names
 - Practice loops, conditoinals, and `.equals()` comparisons

3 - Spring Boot Setup and Basic API
- Initialized a Spring Boot project using start.spring.io with:
	- Spring Web
	- Spring Data JPA
	- PostgreSQL driver
- Migrated core classes into a `model/` package
- Created **controller**, **service**, **dto**, and **repository** layers.
- Added database entities and established JPA relationships

4 - Getting the backend running
- Added MapStruct and Lombok, then later removed both due to complexity and conflicts.
- Created `DataSeedeer` to auto-populate sample categories/recipes for testing.
- Simplified schema by removing:
	- `RecipeBook`
	- `RecipeIngredient` join table
	- `Ingredient` model
- Completed all core REST API endpoints:
	- `GET /recipes`
	- `POST /recipes`
	- `PATCH /recipes{id}`
	- `DELETE /recipes{id}`

5 - Frontend Skeleton
- Installed and set up Node.js, npm, and a Vite React project
- Created reusable Types for `Recipe` and `Category` and filled in some dummy data to show on webpage
- Implemented Sidebar component:
	- Displays categories
	- Highlights selected category
 - Implemented RecipeList component:
	 - Filters recipes by selected category
	 - Displays recipe details
 - Added CSS styling and layout

6 - CRUD Functions through UI
- Built `AddRecipeForm` component with controlled inputs via `useState`.
- Enabled:
	- Adding new recipes (onAdd -> sends data up to App state)
	- Deleteing recipes (via callback to App)
	- Editing recipes (shared form logic that pre-populates form when editing)
- Implemented conditional UI states and component reuse.

7 - Connecting the Backend to the Frontend
- Used `useEffect` to fetch data from backend on page load:
	- `GET /recipes`
	- `GET /categories`
- Discovered and fixed:
	- DTO mismatch (`categoryId` vs `category: { id, ctegoryName }`)
	- `StaleObjectStateException` caused by sending an id during creation.
- Updated POST and PATCH requests to send and receive full Recipe objects.
- UI now updates live after API responses (`setRecipes(prev => [...])`)

8 - UI/UX Upgrade and Form Overlay
- Added a modal overlay to show recipe form as a popup.
- Added a Cancel button to close the form without submitting.
- Styled form with custom CS:
	- Clear labels
	- Consistent spacing and typography
	- Button hover states
- Improved layout:
	- Sidebar has fixed width
	- Recipes fill remaining space
- Added a conditional UI state:
	- If no recipes exist for the selected category, "No recipes to show."
- App now behaves more like a polished app rather than a demo.
	
