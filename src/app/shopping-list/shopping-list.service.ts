import { OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>()

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Flour (cups)', 1.5)
	];

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients)
	}

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredients(ingredient: Ingredient[]) {
		this.ingredients.push(...ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}