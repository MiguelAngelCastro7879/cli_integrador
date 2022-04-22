
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

export interface Led{
    estado?:  string,
    fecha?: Date;
}
