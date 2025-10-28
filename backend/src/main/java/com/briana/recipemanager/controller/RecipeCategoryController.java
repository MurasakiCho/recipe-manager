package com.briana.recipemanager.controller;

import com.briana.recipemanager.dto.RecipeCategoryDTO;
import com.briana.recipemanager.service.RecipeCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/categories")
public class RecipeCategoryController {
    @Autowired
    private RecipeCategoryService recipeCategoryService;

    @GetMapping
    public List<RecipeCategoryDTO> getAllCategories(){
        return recipeCategoryService.getAllCategories();
    }
}
