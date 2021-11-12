import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { map, Observable } from "rxjs";
import { CreateQueryCommand } from "src/product/product.query/commands/impl/create-query.cmd";
import { ProductCommand } from "src/product/shared/enum/command";
import { CreatedProductEvent } from "../events/impl/event-stream-created.event";


@Injectable()

export class ProductSagas {
  private readonly context = ProductSagas.name;
  @Saga()
  querySide = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CreatedProductEvent),
      map((event:CreatedProductEvent)=>{
        let cmd : ICommand;
        console.log("sagas")
        switch(event.messagePattern){
          case ProductCommand.CREATE_PRODUCT : 
            cmd = new CreateQueryCommand(
              event.messagePattern,
              event.streamId,
              event.payload
            );
           break;


          default: break;
        }
        return cmd
      })
    )
  }
}