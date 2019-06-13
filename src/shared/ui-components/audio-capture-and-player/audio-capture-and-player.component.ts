import { Component } from '@angular/core';
import { MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-audio-capture-and-player',
  templateUrl: 'audio-capture-and-player.html',
  styleUrls: ['./audio-capture-and-player.scss'],
})
export class AudioCaptureAndPlayerComponent {
  audio: MediaObject;

  constructor() {
  }

  callbackAudioRecord({ audio }) {
    this.audio = audio;
  }

  callbackAudioDelete() {
    this.audio = null;
  }
}
