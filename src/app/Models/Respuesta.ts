import { Token, User } from "./User";
import { Categoria } from "./Categoria";
import { sensor } from "./sensores";
import { Dato } from "./Dato";

export interface Respuesta {
    mensaje?: string;
    usuario?: User;
    usuarios?: User[];
    datos?: Dato[];
    dato?: Dato;
    access_token?: Token;
    categorias?: Categoria[];
    sensores?: sensor[];
    sen?: sensor;
}
