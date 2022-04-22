import { Token, User } from "./User";
import { Categoria } from "./Categoria";
import { sensor } from "./sensores";
import { Dato } from "./Dato";
import { Auto, Led, Movil } from "./Auto";

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
    autos?:     Movil[];
    auto?:     Movil[];
    estados?:     Led[];
}
