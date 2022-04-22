import { Token, User } from "./User";
import { Categoria } from "./Categoria";
import { sensor } from "./sensores";
import { Auto, Estado, Movil, Temperatura } from "./Auto";

export interface Respuesta {
    mensaje?: string;
    usuario?: User;
    usuarios?: User[];
    access_token?: Token;
    categorias?: Categoria[];
    sensores?: sensor[];
    sen?: sensor;
    autos?:     Movil[];
    auto?:     Movil[];
    estados?: Estado[];
    temperatura?: Temperatura[];
}
