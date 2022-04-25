export const environment = {
  production: true,
  // urlbase:'http://127.0.0.1:3333/api/v1'
  urlbase:'http://3.145.197.253:3333/api/v1'
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
  datos:`${environment.urlbase}/dato`,
  borrar:`${environment.urlbase}/dato/`,
  movimiento:`${environment.urlbase}/auto/set/movimiento`,
  obtener:`${environment.urlbase}/autos`,
  obtenerAutosUsuario:`${environment.urlbase}/usuario/autos`,
  Obtener:`${environment.urlbase}/autos/`,
  leds:`${environment.urlbase}/auto/get/leds`,
  led:`${environment.urlbase}/auto/last/leds`,
  crearAuto: `${environment.urlbase}/autos`,
}
