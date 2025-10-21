package com.briana.recipemanager.dto;

import java.util.List;

public class RecipeDTO {
    private Long id;
    private String recipeName;
    private RecipeCategoryDTO category;
    private String ingredients;
    private String instructions;

    //constructors
    public RecipeDTO(){}

    public RecipeDTO (Long id, String recipeName, RecipeCategoryDTO category, String ingredients, String instructions){
        this.id =id;
        this.recipeName = recipeName;
        this.category = category;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    //getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public RecipeCategoryDTO getCategory() {
        return category;
    }

    public void setCategory(RecipeCategoryDTO category) {
        this.category = category;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions (){
        return instructions;
    }

    public void setInstructions (String instructions){
        this.instructions = instructions;
    }
}
