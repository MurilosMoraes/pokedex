import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading: boolean = false
  homePage: boolean = true
  detailsPage: boolean = false
  favorite: boolean = false
  pokemons: any[] = []
  selectedPokemon: any;
  searchTerm: string;
  dinamicImage: string
  options: AnimationOptions = {
    path: '/assets/animation/loading.json',
  };

  constructor(
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.loading = true
    this.pokemonService.getPokemons().subscribe(
      (res: any) => {
        res.results.forEach(result => {
          this.pokemonService.getInfosPokemon(result.url)
            .subscribe(completeInfos => {
              this.pokemons.push(completeInfos)
            })
        })
      }
    )
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }

  togglePage() {
    this.loading = true
    this.homePage = !this.homePage
    this.detailsPage = !this.detailsPage

    setTimeout(() => {
      this.loading = false
    }, 3000)
  }

  selectPokemon(pokemon) {
    this.selectedPokemon = pokemon
    this.togglePage()
  }

}
