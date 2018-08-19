import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { ComicService } from '../../services/ComicService.service';
import { ComicDTO } from '../../model/ComicDTO';
import { MarvelResponse } from '../../model/MarvelDTO';

@Component({
    selector: 'comic',
    templateUrl: './comic.component.html',
    styleUrls: ['./comic.component.css']
})

//Displaying of one comic

export class ComicComponent {
    elements: MarvelResponse<ComicDTO>;
    comic: ComicDTO = new ComicDTO();

    isLoaded: boolean = false;

    id: string;
    sub: any;

    constructor (private _comicService: ComicService, private route: ActivatedRoute) {};

    ngOnInit() {
        this.sub = this.route.params.subscribe( params => {
            this.id = params['id'];
            this.getComic(this.id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
  
    getComic( id: string ): boolean {
      this._comicService.getComic( id )
        .subscribe(
            elements => 
            {
                this.elements = elements;
                this.comic = elements.data.results[0]
                this.isLoaded = true;
            },
            error => console.error(error)
        );
      return false;
    }
}
