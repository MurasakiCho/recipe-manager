package com.briana.recipemanager.service;

import com.briana.recipemanager.dto.RecipeCategoryDTO;
import com.briana.recipemanager.dto.RecipeDTO;
import com.briana.recipemanager.mapper.RecipeMapper;
import com.briana.recipemanager.model.Recipe;
import com.briana.recipemanager.model.RecipeCategory;
import com.briana.recipemanager.repository.RecipeCategoryRepository;
import com.briana.recipemanager.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    private RecipeCategoryRepository recipeCategoryRepository;
    private RecipeMapper recipeMapper;

    //constructor
    public RecipeService(RecipeRepository recipeRepository, RecipeCategoryRepository recipeCategoryRepository, RecipeMapper recipeMapper){
        this.recipeRepository = recipeRepository;
        this.recipeCategoryRepository = recipeCategoryRepository;
        this.recipeMapper = recipeMapper;
    }

    public List<RecipeDTO> getAllRecipes() {
        List<Recipe> recipes = recipeRepository.findAll();
        return toDTOList(recipes);
    }

    public RecipeDTO createRecipe(RecipeDTO recipeDTO) {
       //convert DTO to Entity
        Recipe recipe = toEntity(recipeDTO);

        //null category fix
        RecipeCategory category = recipeCategoryRepository.findById(recipeDTO.getCategory().getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found."));
        recipe.setCategory(category);

        //save Entity to repository
        Recipe savedRecipe = recipeRepository.save(recipe);

        //revert back to DTO and return
        return toDTO(savedRecipe);
    }

    public RecipeDTO updateRecipe (Long id, Map<String, Object> updates){
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Recipe not found."));

        if (updates.containsKey("recipeName")){
            recipe.setRecipeName((String) updates.get("recipeName"));
        }
        if (updates.containsKey("categoryId")){
            Long categoryId = ((Number) updates.get("categoryId")).longValue();
            RecipeCategory recipeCategory = recipeCategoryRepository.findById(categoryId)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Category not found."));
            recipe.setCategory(recipeCategory);
        }
        if (updates.containsKey("ingredients")){
            recipe.setIngredients((String) updates.get("ingredients"));
        }
        if (updates.containsKey("instructions")){
            recipe.setInstructions((String) updates.get("instructions"));
        }

        recipeRepository.save(recipe);
        return toDTO(recipe);
    }

    public ResponseEntity<String> deleteRecipe (Long id){
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Recipe not found."));
        recipeRepository.delete(recipe);
        return ResponseEntity.ok(recipe.getRecipeName() + " successfully deleted.");
    }

    //manual mapping
    public RecipeDTO toDTO (Recipe recipe){
        if(recipe == null){
            return null;
        }

        RecipeDTO dto = new RecipeDTO();
        dto.setId(recipe.getId());
        dto.setRecipeName(recipe.getRecipeName());
        dto.setIngredients(recipe.getIngredients());
        dto.setInstructions(recipe.getInstructions());

        if(recipe.getCategory() != null){
            RecipeCategoryDTO categoryDTO = new RecipeCategoryDTO();
            categoryDTO.setId(recipe.getCategory().getId());
            categoryDTO.setCategory(recipe.getCategory().getCategory());
            dto.setCategory(categoryDTO);
        }

        return dto;
    }

    public Recipe toEntity(RecipeDTO recipeDTO){
        if(recipeDTO == null){return null;}

        Recipe recipe = new Recipe();
        recipe.setId(recipeDTO.getId());
        recipe.setRecipeName(recipeDTO.getRecipeName());
        recipe.setIngredients(recipeDTO.getIngredients());
        recipe.setInstructions(recipeDTO.getInstructions());

        if(recipeDTO.getCategory() != null){
            RecipeCategory category = new RecipeCategory();
            category.setId(recipeDTO.getCategory().getId());
            category.setCategory(recipeDTO.getCategory().getCategory());
            recipe.setCategory(category);
        }

        return recipe;
    }

    public List<RecipeDTO> toDTOList(List<Recipe> recipeList){
        if(recipeList == null){return null;}

        List<RecipeDTO> dtoList = new ArrayList<>();
        for (Recipe recipe : recipeList){
            dtoList.add(toDTO(recipe));
        }

        return dtoList;
    }

    public List<Recipe> toEntityList(List<RecipeDTO> dtoList){
        if(dtoList == null){return null;}

        List<Recipe> recipes = new ArrayList<>();
        for (RecipeDTO recipeDTO : dtoList){
            recipes.add(toEntity(recipeDTO));
        }

        return recipes;
    }

}

//    //functions
//    public void displayRecipe(){
//        System.out.println("#: " + getId());
//        System.out.println("Recipe: " + getRecipeName());
//        System.out.println("Ingredients: " + getIngredients());
//        System.out.println("Instructions: " + getInstructions());
//        System.out.println();
//    }
//
//    //functions
//    public List<RecipeCategory> getCategories(){
//        return categories;
//    }
//
//    public Recipe findRecipe (String recipeName) {
//        for (RecipeCategory c : categories) {
//            for (Recipe r : c.recipes) {
//                if (r.getRecipeName().equalsIgnoreCase(recipeName)) {
//                    return r;
//                }
//            }
//        }
//        System.out.println("Recipe not found.");
//        return null;
//    }
//
//    public void updateRecipe (String recipeName){
//        Recipe recipe = findRecipe(recipeName);
//        //check if exists
//        if (recipe == null){
//            return;
//        }
//
//        //prompt
//        Scanner scanner = new Scanner(System.in);
//
//        System.out.println("To keep original text, leave field blank.");
//        System.out.println("Enter new recipe name. Current name: '" + recipe.getRecipeName() + "'");
//        String newName = scanner.nextLine();
//        if (newName != null) {
//            recipe.setRecipeName(newName);
//        }
//
//        System.out.println("Enter new ingredients separated by commas. Current ingredients: " + recipe.getIngredients());
//        String inputIngredients = scanner.nextLine();
//        if (inputIngredients != null) {
//            String[] array = inputIngredients.split(",");
//            List<String> newIngredients = new ArrayList<>(Arrays.asList(array));
//            recipe.setIngredients(newIngredients);
//        }
//
//        System.out.println("Enter new instructions. Current instructions: " + recipe.getInstructions());
//        String newInstructions = scanner.nextLine();
//        recipe.setInstructions(newInstructions);
//    }
//
//
//    public void printBook(){
//        for (RecipeCategory c : categories){
//            c.printRecipes();
//        }
//    }

//    //functions
//    public void addRecipe(Recipe recipe){
//        //check for null/empty recipe name
//        if(recipe.getRecipeName() == null || recipe.getRecipeName().isEmpty()){
//            System.out.println("Recipe not added. Please enter a valid recipe name.");
//        }
//
//        for(Recipe r : recipes){
//            if(r.getRecipeName().equalsIgnoreCase(recipe.getRecipeName())){
//                System.out.println("Recipe already exists.");
//                return;
//            }
//        }
//        recipes.add(recipe);
//    }
//
//    public void removeRecipe(String recipeName){
//        for(Recipe r : recipes){
//            if(r.getRecipeName().equalsIgnoreCase(recipeName)){
//                recipes.remove(r);
//                System.out.println(r.getRecipeName() + " removed from the recipe book.");
//                return;
//            }
//        }
//        System.out.println("Recipe not found.");
//    }
//
//    public void printRecipes(){
//        for(Recipe r : recipes){
//            r.displayRecipe();
//        }
//    }
//
//    public abstract void description();

