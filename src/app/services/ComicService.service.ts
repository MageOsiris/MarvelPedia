import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, of } from "rxjs";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

import { BaseService } from './baseService';

import { ComicDTO } from '../model/ComicDTO';

@Injectable({
    providedIn: 'root',
})

//list of different calls to the API comic

export class ComicService {
    private api = 'http://gateway.marvel.com/v1/public/comics';

    constructor(private http: Http, private base: BaseService) {}

    getComics( titleFilter: string = "" ): Observable<any> {
        const search: URLSearchParams = new URLSearchParams();
        
        let time: string = this.base.getTimeStamp();

        if( titleFilter != "" )
            search.set('titleStartsWith',titleFilter);

        search.set('ts', time);
        search.set('apikey', this.base.getPublicKey());
        search.set('hash', this.base.getHash(time));

        console.log(search);
        let obs: Observable<any> = this.http
          .get(this.api, new RequestOptions({search}))
          .pipe(map( (response: any) => response.json()));

        return obs;
    }

    getComic(id: string): Observable<any>{
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