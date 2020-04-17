import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
		new Recipe(
			'Apple Pie',
			'Delicious stuff mmmm yeah',
			"https://www.cuisinart.com/share/images/recipes/photos/recipe_8553_45006627.jpg",
			[
				new Ingredient('Sugar', 3),
				new Ingredient('Butter', 1),
			]
		),

		new Recipe(
			'Muffins',
			'Yum muffins mmmm yeah',
			"https://smittenkitchendotcom.files.wordpress.com/2010/08/perfect-blueberry-muffins.jpg?w=1200",
			[
				new Ingredient('Butter', 1),
				new Ingredient('Blueberries', 2),
			]
		),
	];

	constructor(private slService: ShoppingListService) {}

	getRecipes() {
		// returns copy of the recipes array
		return this.recipes.slice();
	}

	getRecipe(index) {
		return this.recipes[index];
	}

	addIngredientsToList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

}
