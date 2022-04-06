import { Role } from "./Role";

export interface Vista {
    id?:           number;
    nombre?:       string;
    icono?:        string;
    nivel?:        string;
    ruta?:         string;
    status?:       number;
    categoria_id?: number;
    roles?:        Role[];
}