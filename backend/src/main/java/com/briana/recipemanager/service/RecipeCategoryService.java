package com.briana.recipemanager.service;

import com.briana.recipemanager.dto.RecipeCategoryDTO;
import com.briana.recipemanager.model.RecipeCategory;
import com.briana.recipemanager.repository.RecipeCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeCategoryService {
    @Autowired
    RecipeCategoryRepository recipeCategoryRepository;

    public List<RecipeCategoryDTO> getAllCategories() {
        List<RecipeCategory> categoryList = recipeCategoryRepository.findAll();
        return dtoList(categoryList);
    }

    public RecipeCategoryDTO toDTO (RecipeCategory recipeCategory){
        if(recipeCategory == null){
            return null;
        }

        RecipeCategoryDTO recipeCategoryDTO = new RecipeCategoryDTO();
        recipeCategoryDTO.setId(recipeCategory.getId());
        recipeCategoryDTO.setCategory(recipeCategory.getCategory());

        return recipeCategoryDTO;
    }

    public List<RecipeCategoryDTO> dtoList (List<RecipeCategory> categoryList) {
        if(categoryList == null){
            return null;
        }

        List<RecipeCategoryDTO> list = new ArrayList<>();
        for(RecipeCategory recipeCategory : categoryList){
            list.add(toDTO(recipeCategory));
        }

        return list;
    }
}
