package com.briana.recipemanager.mapper;

import com.briana.recipemanager.dto.RecipeCategoryDTO;
import com.briana.recipemanager.model.RecipeCategory;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RecipeCategoryMapper {
    RecipeCategoryMapper INSTANCE = Mappers.getMapper(RecipeCategoryMapper.class);

    RecipeCategoryDTO toDTO(RecipeCategory category);
    RecipeCategory toEntity(RecipeCategoryDTO dto);
}
