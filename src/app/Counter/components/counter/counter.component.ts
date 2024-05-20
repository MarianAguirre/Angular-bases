import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
  Counter:{{counter}}
</p>

<button (click)="increseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increseBy(-1)">-1</button>
  `
})



export class CounterComponente {
  public counter: number = 10;

  increseBy(value: number): void{
    this.counter += value;
  }
  resetCounter():void{
    this.counter = 10;
  }
}
