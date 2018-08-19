import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, of } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { BaseService } from './baseService';


import { CharacterDTO } from '../model/CharacterDTO';

@Injectable({
    providedIn: 'root',
})

//list of different calls to the API character

export class CharacterService {
    private api = 'http://gateway.marvel.com/v1/public/characters';
    
    constructor(private http: Http, private base: BaseService) {}

    getCharacters( strFilter: string = "" ): Observable<any> {
        const search: URLSearchParams = new URLSearchParams();
        
        let time: string = this.base.getTimeStamp();

        if( strFilter != "" )
            search.set('nameStartsWith', strFilter);

        search.set('ts', time);
        search.set('apikey', this.base.getPublicKey());
        search.set('hash', this.base.getHash(time));

        let obs: Observable<any> = this.http
          .get(this.api, new RequestOptions({search}))
          .pipe(map( (response: any) => response.json()));

        return obs;
    }

    getCharacter(id: string): Observable<any>{
        const search: URLSearchParams = new URLSearchParams();
        
        let time: string = this.base.getTimeStamp();

        search.set('ts', time);
        search.set('apikey', this.base.getPublicKey());
        search.set('hash', this.base.getHash(time));
        
        let obs: Observable<any> = this.http
          .get(this.api + "/" + id , new RequestOptions({search}))
          .pipe(map( (response: any) => response.json()));

        return obs;
    }
}