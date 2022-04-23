// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
<<<<<<< HEAD
  crearAuto: `${environment.urlbase}/autos`,
=======
  valores:`${environment.urlbase}/auto/set/valores`
>>>>>>> 61ec7907da699928f3f6270c32909c9cfaa361d0
}
 
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
