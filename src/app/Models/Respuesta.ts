import { Token, User } from "./User";
import { Categoria } from "./Categoria";

export interface Respuesta {
    mensaje?: string;
    usuario?: User;
    usuarios?: User[];
    access_token?: Token;
    categorias?: Categoria[];
}
