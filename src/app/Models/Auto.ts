
export interface Auto{
    data:[
        Motor_Apagado : any, 
        Motor_Delante : any, 
        Motor_Derecha : any, 
        Motor_Izquieda : any, 
        Motor_Reversa : any, 
    ];
}

export interface Movil{
        _id?:    string;
        nombre?: string;
}

export interface Estado {
    _id?:  string;
    leds?: LED[];
}

export interface LED {
    estado?: boolean;
    fecha?:  Date;
}

export interface Temperatura {
    valor?: number;
    fecha?: Date;
}
export interface Infrarrojo1 {
    valor?: number;
    fecha?: Date;
}
export interface Infrarrojo2 {
    valor?: number;
    fecha?: Date;
}
export interface Ultrasonico1 {
    valor?: number;
    fecha?: Date;
}
export interface Ultrasonico2 {
    valor?: number;
    fecha?: Date;
}
export interface Velocidad {
    valor?: number;
    fecha?: Date;
}

