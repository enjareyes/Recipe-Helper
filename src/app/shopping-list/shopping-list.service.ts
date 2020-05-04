import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient []>();
	startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Flour (cups)', 1.5)
	];

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients);
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	getIngredients() {
		return this.ingredients.slice();
	}

	removeIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredient: Ingredient[]) {
		this.ingredients.push(...ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
