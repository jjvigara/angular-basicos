import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman','IronMan','Hulk','Goku'];
    heroeBorrado: string = '';

    BorrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';
    }

}
