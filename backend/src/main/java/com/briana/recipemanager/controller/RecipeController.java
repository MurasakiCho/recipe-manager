package com.briana.recipemanager.controller;

import com.briana.recipemanager.dto.RecipeDTO;
import com.briana.recipemanager.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    //GET /api/recipes
    @GetMapping
    public List<RecipeDTO> getAllRecipes(){
        return recipeService.getAllRecipes();
    }

    //POST /api/recipes
    @PostMapping
    public RecipeDTO createRecipe (@RequestBody RecipeDTO recipeDTO){
        return recipeService.createRecipe(recipeDTO);
    }

    //PATCH /api/recipes/{id}
    @PatchMapping("/{id}")
    public RecipeDTO updateRecipe (@PathVariable Long id, @RequestBody Map<String, Object> updates){
        return recipeService.updateRecipe(id, updates);
    }

    //DELETE /api/recipes/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRecipe (@PathVariable Long id){
        return recipeService.deleteRecipe(id);
    }
}
