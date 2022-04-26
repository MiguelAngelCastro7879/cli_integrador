import { Token, User, Usuario } from "./User";
import { Categoria } from "./Categoria";
import { sensor } from "./sensores";
import { Auto, Estado, Movil, Temperatura, Ultrasonico1, Ultrasonico2, Velocidad } from "./Auto";

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
    user?: Usuario;

    ultrasonico1?: Ultrasonico1[];
    ultrasonico2?: Ultrasonico2[];
    velocidad?: Velocidad[];
}
