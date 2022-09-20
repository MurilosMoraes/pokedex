import { HttpClient } from '@angular/common/http';
import { Injectable, ɵisSubscribable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/'
  public pokemons: any[];
  public idPokemons: number;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPokemons() {
    return this.httpClient.get(`${this.baseUrl}pokemon/`)
  }

  getInfosPokemon(url: string) {
   return this.httpClient.get(`${url}`)
  }
}
