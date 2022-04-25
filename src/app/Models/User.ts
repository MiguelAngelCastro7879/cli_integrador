export interface User {
    username?: string;
    password?: string;
    email?:string;
}
export interface Token {
    type?: string;
    token?: string;
    refreshToken?:string;
}
export interface Usuario {
    username?: string;
    password?: string;
    email?:string;
    rol?: string;
}