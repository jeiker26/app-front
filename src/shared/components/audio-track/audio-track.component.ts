import { Component, Input, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-audio-track',
  templateUrl: 'audio-track.html',
  styleUrls: ['./audio-track.scss'],
})
export class AudioTrackComponent implements OnInit {
  STATES_AUDIO_TRACK = {
    INITIAL_STATE: 'INITIAL_STATE',
    PLAY_AUDIO: 'PLAY_AUDIO',
    PAUSE_AUDIO: 'PAUSE_AUDIO',
  };

  @Input('audio') audio: MediaObject;
  currentState: string = this.STATES_AUDIO_TRACK.INITIAL_STATE;
  currentPosition = 0;
  totalDuration = 0;
  positionInterval;

  constructor(public translate: TranslateService,
              private media: Media) {
  }

  ngOnInit() {
    // Ñapa porque si no se inicia no reconoce la duracion
    this.audio.play();
    setTimeout(() => {
      this.audio.pause();
      this.totalDuration = this.audio.getDuration();
      console.log(this.totalDuration);
    },         500);

    /*
    * Status: (record or play)
    * 1 - ¿?
    * 2 - start
    * 4 - finish
    *
    *
    *  Docu:
    *  Media.MEDIA_NONE = 0;
    *  Media.MEDIA_STARTING = 1;
    *  Media.MEDIA_RUNNING = 2;
    *  Media.MEDIA_PAUSED = 3;
    *  Media.MEDIA_STOPPED = 4;
    * */
    this.audio.onStatusUpdate.subscribe((status) => {
      console.log(`> onStatusUpdate= ${status}`);
    });

    this.audio.onSuccess.subscribe(() => {
      if (this.currentState === this.STATES_AUDIO_TRACK.PLAY_AUDIO) {
        // When audio play and finished
        this.finishedAudio();
      } else {
        console.log('> onSuccess');
      }
    });

    this.audio.onError.subscribe((error) => {
      console.log('> onError');
      console.log(error);
    });

  }

  playAudio() {
    this.audio.play();
    this.getCurrentPosition();
    this.currentState = this.STATES_AUDIO_TRACK.PLAY_AUDIO;
  }

  pauseAudio() {
    this.audio.pause();
    this.clearCurrentPosition();
    this.currentState = this.STATES_AUDIO_TRACK.PAUSE_AUDIO;
  }

  finishedAudio() { // NOT WORKING, LLEGA PERO NO ACTUALIZA LA UI
    console.log('Fisished audio');
    this.clearCurrentPosition();
    this.currentState = this.STATES_AUDIO_TRACK.PAUSE_AUDIO; // Return PAUSE AUDIO for init play again
  }

  getCurrentPosition() {
    this.positionInterval = setInterval(() => {
      this.audio.getCurrentPosition().then((position) => {
        this.currentPosition = position;
      });
    },                                  50);
  }

  clearCurrentPosition() {
    clearInterval(this.positionInterval);
  }
}
