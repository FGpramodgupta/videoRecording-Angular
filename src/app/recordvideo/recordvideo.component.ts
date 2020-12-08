import { Component, OnInit,ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare const StartRecording: any;
declare const StopRecording: any;
declare const initlization: any;
declare const clearRecording: any;
@Component({
  selector: 'app-recordvideo',
  templateUrl: './recordvideo.component.html',
  styleUrls: ['./recordvideo.component.css']
})
export class RecordvideoComponent implements OnInit {
  @ViewChild('audioOptionName') audioOptionName: ElementRef;
  @Output() RecordStart: EventEmitter<boolean> = new EventEmitter();
  public recordingsymbol = false;
  public recordintroductioncompleteHideButton = true;
  public RecordedVideoBase64 = '';
  public recordaddresscomplete = false;
  public recordvideocomplete = false;
  public timeLeft = 0;
  interval;
  public RecordingMessage = '';
  public width: number;
  public height: number;
  
   public recordintroductioncomplete: boolean;
    public SuccessResponse = '';
    public iscustmerAddress : boolean;
    public photovideorecordbutton: boolean;
    public name='';
    public languagecode="en";

   
  constructor() { }

  ngOnInit(): void {
    initlization();
   
  }
  
  
  public recordVideo5Second() {
    debugger;
     this.photovideorecordbutton = false;
     this.recordintroductioncomplete = false;
    // this.audioOptionName.nativeElement.play();
    this.RecordStart.emit(true);
    this.recordintroductioncompleteHideButton = false;

    this.recordingsymbol = true;
 
      this.startTimer();
    
    this.RecordedVideoBase64 = StartRecording();
    setTimeout(() => {
      this.recordingsymbol = false;
      this.RecordStart.emit(false);
      this.recordaddresscomplete = true;
      this.recordvideocomplete = true;

    }, 6000);
  }

  public RetakeVideo() {
    this.recordvideocomplete = false;
    this.recordintroductioncomplete = true;
    this.SuccessResponse = '';
    this.iscustmerAddress = false;
    this.recordVideo5Second();


  }

  public VerifyVideo() {
    alert('video recorded continue');
    
  }


  startTimer() {
    this.timeLeft = 0;
    // this.interval=0;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if (this.timeLeft < 5) {
        //   this.recordingsymbol = true;
        this.timeLeft++;
        this.RecordingMessage = 'Recording... ' + this.timeLeft + ' Seconds';
      } else {
        this.RecordingMessage = '';
      }
    }, 1000);
  }



  onResize1(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth - (win.innerWidth * 30) / 100;
    this.height = win.innerHeight - ((win.innerHeight * 30) / 100) - 50;
    }

}
