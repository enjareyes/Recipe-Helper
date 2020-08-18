import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

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
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, recipe: Recipe) {
		this.recipes[index] = recipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}

}
