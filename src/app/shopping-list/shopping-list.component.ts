import { Component, OnInit } from '@angular/core';
import { Indgredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Indgredient[] = [
  new Indgredient('Apple', 5),
  new Indgredient('OnePlus', 5),
];
  constructor() { }

  ngOnInit(): void {
  }
  onIngradientAdded(ingredient: Indgredient){
    this.ingredients.push(ingredient);
  }
}
