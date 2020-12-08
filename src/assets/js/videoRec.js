
var recordingPreview;
var downloadButton;
var preview;
var recordingTimeMS = 6000;
// let preview = document.getElementById("preview");
var videostream;
var x = window.matchMedia("(max-width: 600px)")
var z = window.matchMedia("(max-width: 1024px)")
function initlization() {
  preview = document.getElementById("preview");

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
  }).then(stream => {

    videostream = stream
    preview.srcObject = stream;


    preview.volume = 0
    // downloadButton.href = stream;
    preview.captureStream = preview.captureStream || preview.mozCaptureStream;
    return new Promise(resolve => preview.onplaying = resolve);
  })
}


// $(document).on('click', '#startButton', function () {

// downloadButton.hide();

// downloadButton.style.display = "none";
function StartRecording() {

  // preview = document.getElementById("preview");
  webcam_idx2 = document.getElementById("webcam_idx2");
  downloadButton = document.getElementById("downloadButton");
  Downloadbtn = document.getElementById("Download");
  // captureVideoAgain = document.getElementById("captureVideoAgain");
  recordingPreview = document.getElementById("recording");



  try {
    recordingPreview.style.display = "none";
  }
  catch { }


  try {
    // 08-10-2020
    if (x.matches) {
      if (preview.style.display == "none") {
        preview.style.display = "block";
        // preview.style.marginLeft="15%";
        preview.style.marginLeft = "15%";

        // alert('Display None');
      }
    } else {
      if (preview.style.display == "none") {
        preview.style.display = "block";
        // preview.style.marginLeft="15%";
        preview.style.marginLeft = "23%";

        // alert('Display None');
      }
    }

    // if (z.matches) {
    //   if (preview.style.display == "none") {
    //     preview.style.display = "block";
    //     // preview.style.marginLeft="15%";
    //     preview.style.marginLeft = "15%";

    //     // alert('Display None');
    //   }
    // } else {
    //   if (preview.style.display == "none") {
    //     preview.style.display = "block";
    //     // preview.style.marginLeft="15%";
    //     preview.style.marginLeft = "30%";

    //     // alert('Display None');
    //   }
    // }

    preview.volume = 0
  }
  catch { }


  //localStorage.setItem('VideoRecorded', base64data);




  // try {
  //   webcam_idx2.style.display = "none";
  // }
  // catch{ }

  // navigator.mediaDevices.getUserMedia({
  //   video: true,
  //   audio: true
  // }).then(stream => {
  //   preview.srcObject = stream;
  //   // downloadButton.href = stream;
  //   preview.captureStream = preview.captureStream || preview.mozCaptureStream;
  //   return new Promise(resolve => preview.onplaying = resolve);
  // }).then(() =>
  // startRecording(preview.captureStream(0), recordingTimeMS)
  startRecording(videostream, recordingTimeMS)
    .then(recordedChunks => {

      // captureVideoAgain.style.display = "block";

      downloadButton.style.display = "block"

      recordingPreview.style.display = "block";
      // preview.volume = 1
      preview.style.display = "none";
      // preview.volume = 0




      let recordedBlob = new Blob(recordedChunks, { type: "video/mp4" });
      var base64data = ''

      var reader = new window.FileReader();
      reader.readAsDataURL(recordedBlob);
      reader.onloadend = function () {
        base64data = reader.result;
        // console.log(base64data);

        localStorage.setItem('VideoRecorded', base64data);

      }

      recordingPreview.src = URL.createObjectURL(recordedBlob);
      downloadButton.href = recordingPreview.src;
      downloadButton.download = "RecordedVideo.mp4";
      // downloadButton.style.display = "block"

      // log("Successfully recorded " + recordedBlob.size + " bytes of " +
      //   recordedBlob.type + " media.");

      // downloadButton.style.display = "block";



      // return base64data;
    })
    .catch(log);
  // });

}

// $(document).on('click', '#stopButton', function () {
function StopRecording() {

  stop(preview.srcObject);
  // });
}

function clearRecording() {
  recordingPreview.style.display = "none";
  preview.style.display = "block";
  if (x.matches) {
    // if (preview.style.display == "none") {
    //   preview.style.display = "block";
    //   // preview.style.marginLeft="15%";
    //  }
    preview.style.marginLeft = "15%";

  } else {
    preview.style.marginLeft = "23%";
    // if (preview.style.display == "none") {
    //   preview.style.display = "block";
    //   // preview.style.marginLeft="15%";
    //   preview.style.marginLeft = "23%";
    // }
  }
}
function log(msg) {
  let logElement = document.getElementById("log");
  logElement.innerHTML += msg + "\n";
}
function wait(delayInMS) {
  return new Promise(resolve => setTimeout(resolve, delayInMS));
}
function stop(stream) {
  stream.getTracks().forEach(track => track.stop());
}
function startRecording(stream, lengthInMS) {
  var options = { mimeType: 'video/mp4' };
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  // this.log(recorder.state + " for " + (lengthInMS / 1000) + " seconds...");
  let stopped = new Promise((resolve, reject) => {
    recorder.onstop = resolve;
    recorder.onerror = event => reject(event.name);
  });

  let recorded = this.wait(lengthInMS).then(
    () => recorder.state == "recording" && recorder.stop()
  );

  return Promise.all([
    stopped,
    recorded
  ])
    .then(() => data);
}