import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
    selector: 'list-elements',
    templateUrl: './listelements.component.html',
    styleUrls: ['./listelements.component.css']
})

//This class take any elements in input, but you do implements necessary verification in the html file

export class ListElementsComponent{
    @Input() elements: any [];
    @Output() selected = new EventEmitter<string>();
    
    onSelect(id: string) {
        this.selected.emit(id);
    }
}
