package com.briana.recipemanager;

import com.briana.recipemanager.model.RecipeCategory;
import com.briana.recipemanager.repository.RecipeCategoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final RecipeCategoryRepository categoryRepository;

    public DataSeeder(RecipeCategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    @Override
    public void run(String... args){
        if(categoryRepository.count() == 0){
            categoryRepository.save(new RecipeCategory("Breakfast"));
            categoryRepository.save(new RecipeCategory("Lunch"));
            categoryRepository.save(new RecipeCategory("Dinner"));
            categoryRepository.save(new RecipeCategory("Dessert"));
        }
    }
}
