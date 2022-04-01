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