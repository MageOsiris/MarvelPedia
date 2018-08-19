import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

import { ComicService } from '../../services/ComicService.service';
import { ComicDTO } from '../../model/ComicDTO';
import { MarvelResponse } from '../../model/MarvelDTO';

@Component({
    selector: 'comics',
    templateUrl: './comics.component.html',
    styleUrls: ['./comics.component.css']
})

//List of comics and the filter to found your comic

export class ComicsComponent {
    strFilter: string = "";
    searchterm: string;
    elements: MarvelResponse<ComicDTO>;
    comics: ComicDTO[] = [];
    total: number = 0;

    constructor (private _comicService: ComicService, private router: Router) {
        this.searchComics();
    };

    onConfirm(data: string) {
        this.strFilter = data;
        this.searchComics(this.strFilter);
    }
  
    searchComics( strFilter: string = ""): boolean {
      this._comicService.getComics( strFilter )
        .subscribe(
            elements => 
            {
                this.elements = elements;
                this.comics = elements.data.results;
                this.total = elements.data.total;
            },
            error => console.error(error)
        );
      return false;
    }

    onSelect(id: string){
        this.router.navigate(['/comic', id]);
    }
}
