import {Component,Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-detail',
  templateUrl: 'table-detail.component.html'
})
export class TableDetailComponent {
    @Input() element:any;
}