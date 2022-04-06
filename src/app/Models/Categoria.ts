import { Vista } from "./Vista";

export interface Categoria {
    id?:         number;
    nombre?:     string;
    icono?:      string;
    nivel?:      string;
    status?:     number;
    vistas?:     Vista[];
}