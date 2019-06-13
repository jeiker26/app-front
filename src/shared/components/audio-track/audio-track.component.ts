import { Component, Input, OnInit } from '@angular/core';
import { MediaObject } from '@ionic-native/media/ngx';
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

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
    /** WARNING START: If it does not start and for reproduction the total duration is "-1" */
    this.audio.play();
    setTimeout(() => {
      this.audio.pause();
      this.totalDuration = this.audio.getDuration();
    },         500);
    /** WARNING END*/

    /**
    * Status:
    *  Media.MEDIA_NONE = 0;
    *  Media.MEDIA_STARTING = 1;
    *  Media.MEDIA_RUNNING = 2;
    *  Media.MEDIA_PAUSED = 3;
    *  Media.MEDIA_STOPPED = 4;
    * */
    this.audio.onStatusUpdate.subscribe((status) => {
      // When the audio finishes playing
      if (this.currentState === this.STATES_AUDIO_TRACK.PLAY_AUDIO && status === 4) {
        this.finishedAudio();
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

  finishedAudio() {
    this.clearCurrentPosition();
    this.currentState = this.STATES_AUDIO_TRACK.PAUSE_AUDIO;
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
