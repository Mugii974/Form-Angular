import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  // Méthode qui récupère ce qu'on envoit au pipe et renvoie le résultat
  transform(value: any, args?: number): number {
    // Pour ne faire planter l'appli si undefined du value (ex : Pb de co à la bd)
    if (value) {
      if (args) {
        return value.totalTTC(args);
      }
      return value.totalHT();
    }
    return null;
  }

}
