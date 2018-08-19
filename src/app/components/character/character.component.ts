import { Component } from '@angular/core';
import { Observable, of } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { CharacterService } from '../../services/CharacterService.service';
import { CharacterDTO } from '../../model/CharacterDTO';
import { MarvelResponse } from '../../model/MarvelDTO';

@Component({
    selector: 'character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})

//Displaying of one character

export class CharacterComponent {
        elements: MarvelResponse<CharacterDTO>;
        character: CharacterDTO = new CharacterDTO();
    
        isLoaded: boolean = false;
    
        id: string;
        sub: any;
    
        constructor (private _characterService: CharacterService, private route: ActivatedRoute) {};
    
        ngOnInit() {
            this.sub = this.route.params.subscribe( params => {
                this.id = params['id'];
                this.getCharacter(this.id);
            });
        }
    
        ngOnDestroy() {
            this.sub.unsubscribe();
        }
      
        getCharacter( id: string ): boolean {
          this._characterService.getCharacter( id )
            .subscribe(
                elements => 
                {
                    this.elements = elements;
                    this.character = elements.data.results[0]
                    this.isLoaded = true;
                },
                error => console.error(error)
            );
          return false;
        }
    }
