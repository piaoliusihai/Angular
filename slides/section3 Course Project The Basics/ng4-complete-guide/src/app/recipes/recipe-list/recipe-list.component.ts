import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://tse4-mm.cn.bing.net/th/id/OIP.8RcQhvrshoYY0Z20x8o2_QHaJ4?pid=Api&rs=1'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://tse4-mm.cn.bing.net/th/id/OIP.8RcQhvrshoYY0Z20x8o2_QHaJ4?pid=Api&rs=1')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
