import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';


@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.page.html',
  styleUrls: ['./lobby.page.scss'],
})
export class LobbyPage implements OnInit {

  loading: boolean = false

  options: AnimationOptions = {
    path: '/assets/animation/loading.json',
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toHome(){
      this.router.navigate(['/home'])
  }

}
