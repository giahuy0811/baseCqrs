import { ModelBase } from "src/user/shared/base/model.base";



export class UserDocument extends ModelBase {
    username: string;
    password: string;
}