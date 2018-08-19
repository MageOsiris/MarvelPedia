
//Object to have acces easly to the data of the mavel api

export abstract class MarvelResponse<T> {
    public code : number;
    public status : string;
    public attributionHTML : string;
    public data : MarvelList<T>;
}

export class MarvelList<T> {
    public offset : number;
    public limit : number;
    public total : number;
    public count : number;
    public results : T[];
}

export class Origin {
    public origin : string;
    public headers : Headers;
}

export class Headers {
    public Accept: string;
}