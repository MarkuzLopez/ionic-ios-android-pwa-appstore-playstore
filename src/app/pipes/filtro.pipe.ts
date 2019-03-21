import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  // transform(arreglo: any[], texto: string): any[] {

  //   if (texto === '') {
  //       return arreglo;
  //   }

  //   /// el texto en minusculas
  //   texto = texto.toLowerCase();

  //   return arreglo.filter( item => {
  //     /// textp tanto para mayusculas como minusculas
  //     return item.title.toLowerCase().includes(texto);
  //   });

  // }

  transform(arreglo: any[], texto: string, columna: string): any[] {

    if (texto === '') {
        return arreglo;
    }

    /// el texto en minusculas
    texto = texto.toLowerCase();

    return arreglo.filter( item => {
      /// textp tanto para mayusculas como minusculas
      return item[columna].toLowerCase().includes(texto);
    });

  }

}
