export interface sensor {
    id?:         number;
    nombre?:       string;
    descripcion?: string;
    status?:     number;
}

export interface respSen{
    sesnore: sensor []
}