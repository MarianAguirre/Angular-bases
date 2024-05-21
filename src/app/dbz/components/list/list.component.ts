import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id:uuid(),
    name: 'Trunks',
    power: 10
  }]


  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();

  // onDeleteCharacter(index:number): void{
  //   // console.log({index})
  //   this.onDelete.emit ( index)
  // }

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id:string): void{
    // console.log({index})
    // if (!id) return;
    this.onDelete.emit ( id)
  }
}
