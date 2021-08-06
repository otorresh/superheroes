import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }

  verHeroe(idx: number): void {
    this._router.navigate(['/heroe', idx]);
  }

}
