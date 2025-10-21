package com.briana.recipemanager.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn (name = "category_id")
    private RecipeCategory category;

    private String ingredients;
    private String recipeName;

    @Column(columnDefinition = "TEXT")
    private String instructions;

    //Constructors
    public Recipe (){}

    public Recipe (String recipeName, RecipeCategory category, String ingredients, String instructions){
        this.recipeName = recipeName;
        this.category = category;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }

    //getters and setters
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getRecipeName() {
        return recipeName;
    }

    public void setRecipeName(String recipeName) {
        this.recipeName = recipeName;
    }

    public RecipeCategory getCategory() {
        return category;
    }

    public void setCategory(RecipeCategory category) {
        this.category = category;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients (String ingredients){
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }
}
