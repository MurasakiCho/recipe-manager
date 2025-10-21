package com.briana.recipemanager.mapper;

import com.briana.recipemanager.dto.RecipeDTO;
import com.briana.recipemanager.model.Recipe;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring", uses = RecipeCategoryMapper.class)
public interface RecipeMapper {
    RecipeMapper INSTANCE = Mappers.getMapper(RecipeMapper.class);

    RecipeDTO toDTO(Recipe recipe);
    Recipe toEntity(RecipeDTO recipeDTO);

    List<RecipeDTO> toDTOs(List<Recipe> recipes);
    List<Recipe> toEntities(List<RecipeDTO> recipeDTOS);
}
