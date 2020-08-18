import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient []>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Flour (cups)', 1.5)
	];

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients);
	}

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredients(ingredient: Ingredient[]) {
		this.ingredients.push(...ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
