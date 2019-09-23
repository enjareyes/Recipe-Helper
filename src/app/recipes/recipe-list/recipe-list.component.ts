import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	@Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('Apple Pie', 'Delicious stuff mmmm yeah', "https://lexiscleankitchen.com/wp-content/uploads/2018/07/Paleo-Apple-Pie.jpg"),
		new Recipe('Muffins', 'Yum muffins mmmm yeah', "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/06/blueberry-oatmeal-muffins.jpg")
	];

	constructor() {}

	ngOnInit() {}

	onRecipeSelected(recipe: Recipe) {
		this.recipeWasSelected.emit(recipe)
	}

}
