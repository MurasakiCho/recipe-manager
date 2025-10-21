package com.briana.recipemanager.dto;

public class RecipeCategoryDTO {
    private Long id;
    private String category;

    //constructors
    public RecipeCategoryDTO(){}

    public RecipeCategoryDTO(String category){
        this.category = category;
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

    public void setCategory(String category) {
        this.category = category;
    }
}
