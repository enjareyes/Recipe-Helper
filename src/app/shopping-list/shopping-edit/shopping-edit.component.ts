import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f', {static: false}) slForm: NgForm;

	subscription: Subscription;
	editMode = false;
	editedItemIndx: number;
	editedItem: Ingredient;

	constructor(private slService: ShoppingListService) { }

	ngOnInit() {
		this.subscription = this.slService.startedEditing.subscribe(
			(index: number) => {
				this.editMode = true;
				this.editedItemIndx = index;
				this.editedItem = this.slService.getIngredient(index);
				this.slForm.setValue({
					name: this.editedItem.name,
					amount: this.editedItem.amount,
				});
			}
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	onSubmit(form: NgForm) {
		const formVal = form.value;
		const newIngredient = new Ingredient(formVal.name, formVal.amount);

		if (this.editMode) {
			this.slService.updateIngredient(this.editedItemIndx, newIngredient);
		} else {
			this.slService.addIngredient(newIngredient);
		}

		this.editMode = false;
		this.slForm.reset();
	}

	onClear() {
		this.slForm.reset();
		this.editMode = false;
	};

	onDelete() {
		this.slService.removeIngredient(this.editedItemIndx);
		this.onClear();
	};

}
