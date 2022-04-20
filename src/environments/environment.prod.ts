export const environment = {
  production: true,
  urlbase:'http://127.0.0.1:3333/api/v1'
};
export const rutas = {
  login:`${environment.urlbase}/login`,
  register:`${environment.urlbase}/user`,
  token_validacion:`${environment.urlbase}/get/user`,
  obtenerVistas:`${environment.urlbase}/get/views`,
  usuarios:`${environment.urlbase}/user`,
  logout:`${environment.urlbase}/logout`,
  sensores:`${environment.urlbase}/sensores`,
  sensor:`${environment.urlbase}/sensores`,
}
