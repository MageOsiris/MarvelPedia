import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { Router } from '@angular/router';

import { CharacterService } from '../../services/CharacterService.service';
import { CharacterDTO } from '../../model/CharacterDTO';
import { MarvelResponse } from '../../model/MarvelDTO';

@Component({
    selector: 'characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.css']
})

//List of characters and the filter to found your character


export class CharactersComponent {
    strFilter: string = "";
    searchterm: string;
    elements: MarvelResponse<CharacterDTO>;
    characters: CharacterDTO[] = [];
    total: number = 0;

    constructor (private _characterService: CharacterService, private router: Router) {
        this.searchCharacters();
    };

    onConfirm(data: string) {
        this.strFilter = data;
        this.searchCharacters(this.strFilter);
    }

    searchCharacters(strFilter = ""): boolean {
      this._characterService.getCharacters(strFilter)
        .subscribe(
            elements => 
            {
                this.elements = elements;
                this.characters = elements.data.results;
                this.total = elements.data.total;
            },
            error => console.error(error)
        );
      return false;
    }

    onSelect(id: string){
        this.router.navigate(['/character', id]);
    }
}
