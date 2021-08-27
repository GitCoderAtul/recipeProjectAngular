import { Component } from "@angular/core";

@Component({
    selector:'recipe-project',
    templateUrl:'/recipeProject.component.html'
})

export class recipePorjectComponent{
    loadedFeature = 'recipe';
    
    onNavigate(feature:string){
        this.loadedFeature=feature;
    }
    
}