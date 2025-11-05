## Development Log
1 - Java & OOP
- Implemented Recipe, RecipeCategory, and RecipeBook classes.
- Practiced OOP fundamentals, constructors, lists, and abstraction.

2 - Collections & Java Syntax 
- Added methods to add, remove, and find a recipe.
- Practiced loops, conditionals, .equals, and error handling (removing/updating nonexistent recipes and adding null, empty, or duplicate recipes).

3 - Spring Boot Setup and Basic API
- Used https://start.spring.io/ to initialize a Spring Boot project with dependencies (Spring Web, Spring Data JPA, and PostgreSQL)
- Copied Recipe, RecipeCategory, and RecipeBook classes into model/ package.
- Created an ERD [docs/Recipe-Manager-ERD.drawio.png]
- Added new ingredient classes, made Entities, and set up database relationships.
- Setup controller, service, dto, and repository packages

4 - Getting the backend running
- Added MapStruct and mapper classes for easier DTO and Entity conversions.
- Added Lombok for less boilerplate.
- Decided to remove RecipeBook and Ingredients/RecipeIngredients for a simpler implementation
- Created a DataSeeder to prepopulate database for testing purposes
- Decided to remove MapStruct and Lombok; causing too many issues
- Finished GET /recipes and POST /recipes
- Finished PATCH and DELETE /recipes/{id}

5 - Frontend Skeleton
- Downloaded and set up node + npm + react/vite project
- Created types for category and recipe and filled in some dummy data to show on webpage
- Utilized React's useState that tracks the current value and updates it
- Created the Sidebar component. Made a type called SidebarProps and a function that takes in the type to set and render the properties of the component.
- Inserted the Sidebar component into App() and passed the dummy data into it. The webpage now displays the categories and highlights whichever one is clicked!
- Created RecipeList component. Filtered the recipes by categoryId and displayed them via App.tsx using dummy data.
- Basic styling

6 - CRUD Functions through UI
- Created a Component for adding recipes. Utilized onAdd to send , useState and onChange for capturing input, and the form html element.
- Created onAdd to send user input (the new recipe) to the parent (App)
- Used useState and onChange which updates the state in real time on the form.
- Gave recipe's a delete button that, when clicked, signals to App.tsx to delete a specified recipe and the list updates.
- Reused AddRecipeForm component to edit recipes. Implemented an optional recipe prop, that when included, the form pre-fills with the recipe's values.

7 - Connecting the Backend to the Frontend
- Utilized React's useEffect hook to fetch data from the API and display it on the UI.
- Configured RecipeCategoryController with GET /api/categories for the frontend to dynamically fetch category options
- Corrected a mismatch between frontend payload (categoryId) and backend DTO (category: {id, categoryName})
- Also encountered StaleObjectStateException from sending an id field for new recipes. Hibernate assumed it was an update. Made id optional in the frontend recipe type and sent new recipes without an id so JPA can create one automatically.
- Used fetch to POST new recipes and update the UI accordingly.
	
