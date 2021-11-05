import { Injectable } from "@nestjs/common";
import { ICommand, ofType, Saga } from "@nestjs/cqrs";
import { map, Observable } from "rxjs";
import { UserCommand } from "src/user/shared/enum/command";
import { CreateUserQueryCommand } from "src/user/user.query/commands/impl/create.cmd";
import { CreatedUserEvent } from "../events/impl/event-stream-created.event";




@Injectable()


export class UserSagas {
    private readonly context = UserSagas.name;
    @Saga()
    querySide = (events$ : Observable<any>): Observable<ICommand> => {
        return events$.pipe(
            ofType(CreatedUserEvent),
            map((event:CreatedUserEvent)=>{
                let cmd : ICommand;
                    console.log('saga')

                switch(event.messagePattern){
                    case UserCommand.CREATED_USER:cmd = new CreateUserQueryCommand(
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