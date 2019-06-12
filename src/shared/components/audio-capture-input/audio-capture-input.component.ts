import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-audio-capture-input',
  templateUrl: 'audio-capture-input.html',
  styleUrls: ['./audio-capture-input.scss'],
})
export class AudioCaptureInputComponent implements OnInit {
  @Output() audioRecordFinished = new EventEmitter();
  @Output() audioDeleted = new EventEmitter();
  STATES_AUDIO_RECORD = {
    INITIAL_STATE: 'INITIAL_STATE',
    START_RECORD: 'START_RECORD',
    STOP_RECORD: 'STOP_RECORD',
  };

  fileName: string = 'my_file.wav';
  audio: MediaObject;
  currentState: string = this.STATES_AUDIO_RECORD.INITIAL_STATE;

  constructor(public translate: TranslateService,
              private media: Media) {
  }

  ngOnInit() {
    this.initFile();
  }

  initFile() {
    this.audio = this.media.create(this.fileName);
  }

  startRecord() {
    this.audio.startRecord();
    this.currentState = this.STATES_AUDIO_RECORD.START_RECORD;
  }

  stopRecord() {
    this.audio.stopRecord();
    this.audio.release();
    this.currentState = this.STATES_AUDIO_RECORD.STOP_RECORD;

    this.audioRecordFinished.emit({ audio: this.audio });
  }

  deleteAudio() {
    this.currentState = this.STATES_AUDIO_RECORD.INITIAL_STATE;
    this.initFile(); // The file is overwritten so it is not necessary to delete it
    this.audioDeleted.emit();
  }
}
