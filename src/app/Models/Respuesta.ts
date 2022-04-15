import { Token, User } from "./User";
import { Categoria } from "./Categoria";
import { sensor } from "./sensores";

export interface Respuesta {
    mensaje?: string;
    usuario?: User;
    usuarios?: User[];
    access_token?: Token;
    categorias?: Categoria[];
    sensores?: sensor[];
    sen?: sensor;
}
