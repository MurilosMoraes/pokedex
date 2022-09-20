import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LobbyPageRoutingModule } from './lobby-routing.module';
import { LobbyPage } from './lobby.page';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LobbyPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [LobbyPage]
})
export class LobbyPageModule {}
