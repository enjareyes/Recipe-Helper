import { Recipe } from  './recipe.model'
import { Ingredient } from  '../shared/ingredient.model'
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
	public recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			'Apple Pie',
			'Delicious stuff mmmm yeah',
			"https://lexiscleankitchen.com/wp-content/uploads/2018/07/Paleo-Apple-Pie.jpg",
			[
				new Ingredient('Sugar', 3),
				new Ingredient('Butter', 1),
			]
		),

		new Recipe(
			'Muffins',
			'Yum muffins mmmm yeah',
			"https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/06/blueberry-oatmeal-muffins.jpg",
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

	addIngredientsToList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

}
