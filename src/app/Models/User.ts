export interface User {
    id?: number;
    nombre?: string;
    username?: string;
    password?: string;
    password_confirmation?: string;
    email?:string;
    f_nacimiento?: string;
    nacionalidad?: string;
    cuenta?:{
        username: string;
        email:string;
    }
}
export interface Token {
    type?: string;
    token?: string;
}