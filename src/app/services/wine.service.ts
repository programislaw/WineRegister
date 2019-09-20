import { Wine } from '../model/wine.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class WineService {
    apiURL: string = '/wines';
    private wines: Wine [] = new Array<Wine>();
    public firstPage: String = '';
    public prevPage: String = '';
    public nextPage: String = '';
    public lastPage: String = '';
    winesChanges = new Subject<Wine[]>();

    constructor(private httpClient: HttpClient ) {
        this.loadWines();
    }

    loadWines() {
        console.log('getWines');
        this.httpClient.get<Wine[]>(this.apiURL).subscribe(wines => {
            console.log(wines);
            this.wines = wines;
            this.winesChanges.next(this.getWines());
        });
    }

    getWines() {
        return this.wines.slice();
    }

    public getWine(index: number): Wine {
        return this.wines[index];
    }

    addWine(wine: Wine) {
        this.httpClient.post<Wine[]>(this.apiURL, wine).subscribe(wines => {
            this.wines.push(wine);
            this.winesChanges.next(this.getWines());
        });
    }

    editWine(index: number, wine: Wine) {
        const bd = this.wines[index];
        bd.name = wine.name;
        bd.kind = wine.kind;
        bd.volume = wine.volume;
        this.httpClient.post<Wine[]>(this.apiURL, wine).subscribe(wines => {
            this.wines.push(wine);
            this.winesChanges.next(this.getWines());
        });
    }

    deleteWine(index: number) {
        this.wines.splice(index, 1);
    }
}
