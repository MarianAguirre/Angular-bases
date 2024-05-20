import { NgModule } from "@angular/core";
import { CounterComponente } from "./components/counter/counter.component";

@NgModule({
  declarations:[
    CounterComponente
  ],
  exports: [
    CounterComponente
  ]
})
export class CounterModule{

}
