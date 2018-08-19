import { Md5 } from 'ts-md5/dist/md5';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

//This class is use in all of services to use more easly the private and public key

export class BaseService{
    private privateKey: string = "ENTER HERE YOUR PRIVATE API KEY";
    private publicKey: string = "ENTER HERE YOUR PUBLIC API KEY"

    getPublicKey(): string{
        return this.publicKey;
    }

    getTimeStamp() : string {
        return new Date().valueOf().toString();
    }    

    getHash(timeStamp : string) : string {
        let hashGenerator : Md5 = new Md5();
        hashGenerator.appendStr(timeStamp);
        hashGenerator.appendStr(this.privateKey);
        hashGenerator.appendStr(this.publicKey);
        let hash : string = hashGenerator.end().toString();
        return hash;
    }
}