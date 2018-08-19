import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent{
    @Input() total: number = 0;
    @Output() strFilter = new EventEmitter<string>();

    filter: string = "";

    onConfirm() {
        this.strFilter.emit(this.filter);
    }
}
