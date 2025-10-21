package com.briana.recipemanager.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Table(name = "recipe_category")
@Entity
public class RecipeCategory {
    @Id
    @GeneratedValue
    private Long id;

    private String category;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
    private List<Recipe> recipes;

    //constructors
    public RecipeCategory(){}

    public RecipeCategory(String category){
        this.category = category;
        this.recipes = new ArrayList<>();
    }

    //getters and setters
    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }
}
