import {Component } from '@angular/core';
import {Sort} from '@angular/material';
@Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css']
})
export class AppComponent { 
   /*******************************************************/
   //we will populate this data to table
   foods:any[]  = [
      {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, 
       protein: 4},
      {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, 
       protein: 4},
      {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, 
       protein: 6},
      {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, 
       protein: 4},
      {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, 
       protein: 4},
   ];
   /*****************************************************************/
   
   /***************************************************/
   sortedFood:any[];
   constructor() {
      this.sortedFood = this.foods.slice();
   }
   /**************************************************/

   /*********************************************************/
   sortFood(sort: Sort) {
      const data = this.foods.slice();
      this.sortedFood = data.sort((a, b) => {
         const isAsc = sort.direction === 'asc';
         switch (sort.active) {
            case 'name': return compare(a.name, b.name, isAsc);
            case 'calories': return compare(a.calories, b.calories, 
                                            isAsc);
            case 'fat': return compare(a.fat, b.fat, 
                                       isAsc);
            case 'carbs': return compare(a.carbs, b.carbs, isAsc);
            case 'protein': return compare(a.protein, b.protein, 
                                           isAsc);
            default: return 0;
         } 
      });
   }
   /*************************************************************/
}
function compare(a: number | string, 
                 b: number | string, 
                 isAsc: boolean) {
   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}