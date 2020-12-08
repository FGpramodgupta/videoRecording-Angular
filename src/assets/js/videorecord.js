
// var videoMaxLengthInSeconds = 10;



// function StartRecording() {

//     // Inialize the video player
//     var player = videojs("videorecord", {
//         controls: true,
//         width: 720,
//         height: 480,
//         fluid: false,
//         plugins: {
//             record: {
//                 audio: true,
//                 video: true,
//                 maxLength: videoMaxLengthInSeconds,
//                 debug: true,
//                 videoMimeType: "video/webm;codecs=H264"
//             }
//         }
//     }, function () {
//         // print version information at startup
//         videojs.log(
//             'Using video.js', videojs.VERSION,
//             'with videojs-record', videojs.getPluginVersion('record'),
//             'and recordrtc', RecordRTC.version
//         );
//     });

//     // error handling for getUserMedia
//     player.on('deviceError', function () {
//         console.log('device error:', player.deviceErrorCode);
//     });

//     // Handle error events of the video player
//     player.on('error', function (error) {
//         console.log('error:', error);
//     });

//     // user clicked the record button and started recording !
//     player.on('startRecord', function () {
//         console.log('started recording! Do whatever you need to');
//     });

//     // user completed recording and stream is available
//     // Upload the Blob to your server or download it locally !
//     player.on('finishRecord', function () {

//         // the blob object contains the recorded data that
//         // can be downloaded by the user, stored on server etc.
//         var videoBlob = player.recordedData.video;

//         console.log('finished recording: ', videoBlob);
//     });


// }

// // function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
// //     navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
// // }

// // var videosContainer = document.getElementById('videos-container');

// // var mRecordRTC = new MRecordRTC();
// // mRecordRTC.mediaType = {
// //     audio: true, // or StereoAudioRecorder or MediaStreamRecorder (WebAssembly also supports audio-encoding however not implemented in WebAssemblyRecorder YET)
// //     video: true  // or WhammyRecorder      or MediaStreamRecorder or WebAssemblyRecorder or CanvasRecorder
// // };

// // if (DetectRTC.browser.name === 'Edge') {
// //     // Microsoft Edge currently supports only audio and gif recording
// //     mRecordRTC.mediaType = {
// //         audio: StereoAudioRecorder
// //     };
// // }
// // // mRecordRTC.bufferSize = 16384;

// // // document.querySelector('#start').onclick = function () {

// // // function StartRecording() {
// // //     this.disabled = true;

// // //     captureUserMedia({
// // //         audio: true,
// // //         video: true
// // //     }, function (stream) {
// // //         var video = document.createElement('video');
// // //         video.autoplay = true;
// // //         video.srcObject = stream;

// // //         var mediaElement = getMediaElement(video, {
// // //             buttons: [],
// // //             showOnMouseEnter: false,
// // //             enableTooltip: false,
// // //             onMuted: function () {
// // //                 document.querySelector('#audio').muted = true;
// // //             },
// // //             onUnMuted: function () {
// // //                 document.querySelector('#audio').muted = true;
// // //                 document.querySelector('#audio').play();
// // //             }
// // //         });
// // //         videosContainer.appendChild(mediaElement);

// // //         mRecordRTC.addStream(stream);
// // //         mRecordRTC.startRecording();
// // //     }, function (error) {
// // //         alert(JSON.stringify(error));
// // //     });
// // // };

// // // // document.querySelector('#stop').onclick = function () {
// // // function StopRecording() {

// // //     this.disabled = true;

// // //     mRecordRTC.stopRecording(function (url, type) {
// // //         document.querySelector(type).srcObject = null;
// // //         document.querySelector(type).src = url;
// // //         document.querySelector(type).play();

// // //         // fixing firefox playback issue
// // //         if (!!navigator.mozGetUserMedia) {
// // //             document.querySelector(type).onended = function () {
// // //                 document.querySelector(type).srcObject = null;
// // //                 document.querySelector(type).src = URL.createObjectURL(mRecordRTC.getBlob()[type]);
// // //                 document.querySelector(type).play();
// // //             };
// // //         }

// // //         mRecordRTC.writeToDisk();
// // //         save.disabled = false;
// // //     });
// // // };

// // // document.getElementById('save').onclick = function () {
// // //     this.disabled = true;
// // //     mRecordRTC.save();
// // // };

// // // document.querySelector('#get').onclick = function () {
// // //     this.disabled = true;

// // //     !!navigator.webkitGetUserMedia && MRecordRTC.getFromDisk('all', function (dataURL, type) {
// // //         if (!dataURL) return;

// // //         if (type == 'audio') {
// // //             document.querySelector('#audio').src = dataURL;
// // //         }
// // //         if (type == 'video') {
// // //             var video = document.createElement('video');
// // //             video.src = dataURL;
// // //             var mediaElement = getMediaElement(video, {
// // //                 buttons: ['mute-video'],
// // //                 showOnMouseEnter: false,
// // //                 enableTooltip: false,
// // //                 onMuted: function () {
// // //                     document.querySelector('#audio').muted = true;
// // //                 },
// // //                 onUnMuted: function () {
// // //                     document.querySelector('#audio').muted = true;
// // //                     document.querySelector('#audio').play();
// // //                 }
// // //             });
// // //             videosContainer.appendChild(mediaElement);
// // //             document.querySelector('#audio').play();
// // //             mediaElement.media.play();
// // //         }

// // //         if (type == 'gif') {
// // //             var gifImage = document.createElement('img');
// // //             gifImage.src = dataURL;
// // //             videosContainer.appendChild(gifImage);
// // //         }
// // //     });

// // //     !!navigator.mozGetUserMedia && MRecordRTC.getFromDisk('video', function (dataURL) {
// // //         if (!dataURL) return;

// // //         var video = document.createElement('video');
// // //         video.src = dataURL;
// // //         var mediaElement = getMediaElement(video, {
// // //             buttons: ['mute-video'],
// // //             showOnMouseEnter: false,
// // //             enableTooltip: false,
// // //             onMuted: function () {
// // //                 mediaElement.muted = true;
// // //             },
// // //             onUnMuted: function () {
// // //                 mediaElement.muted = true;
// // //                 mediaElement.play();
// // //             }
// // //         });
// // //         videosContainer.appendChild(mediaElement);
// // //         mediaElement.media.play();
// // //     });
// // // };

// // // window.addEventListener('beforeunload', function () {
// // //     document.querySelector('#start').disabled = false;
// // //     document.querySelector('#stop').disabled = false;
// // //     document.querySelector('#get').disabled = false;
// // // }, false);




// // // Store a reference of the preview video element and a global reference to the recorder instance

// // var video = document.getElementById('my-preview');
// // var recorder;

// // function StartRecording(video) {
// //     // When the user clicks on start video recording
// //     // document.getElementById('btn-start-recording').addEventListener("click", function () {
// //     // Disable start recording button
// //     this.disabled = true;

// //     // Request access to the media devices
// //     navigator.mediaDevices.getUserMedia({
// //         audio: true,
// //         video: { facingMode: "user" }
// //     }).then(function (stream) {
// //         // Display a live preview on the video element of the page
// //         //setSrcObject(stream, video);



// //         video.srcObject = stream;
// //         // Start to display the preview on the video element
// //         // and mute the video to disable the echo issue !
// //         video.play();
// //         video.muted = true;

// //         // Initialize the recorder
// //         recorder = new RecordRTCPromisesHandler(stream, {
// //             mimeType: 'video/webm',
// //             bitsPerSecond: 128000
// //         });






// //         // Start recording the video
// //         recorder.startRecording().then(function () {
// //             console.info('Recording video ...');
// //         }).catch(function (error) {
// //             console.error('Cannot start video recording: ', error);
// //         });

// //         // release stream on stopRecording
// //         recorder.stream = stream;

// //         // Enable stop recording button
// //         document.getElementById('btn-stop-recording').disabled = false;

// //         return recorder;

// //     }).catch(function (error) {
// //         console.error("Cannot access media devices: ", error);
// //         return recorder;
// //     });
// //     // }, false);


// // }


// // function StopRecording(video) {
// //     // When the user clicks on Stop video recording
// //     // document.getElementById('btn-stop-recording').addEventListener("click", function () {
// //     this.disabled = true;

// //     recorder.stopRecording().then(function () {
// //         console.info('stopRecording success');

// //         // Retrieve recorded video as blob and display in the preview element
// //         var videoBlob = recorder.getBlob();

// //         video.src = window.URL.revokeObjectURL(videoBlob);

// //         // var reader = new FileReader();
// //         // reader.readAsDataURL(blob.video); 
// //         // reader.onloadend = function() {
// //         //     var base64data = reader.result;                
// //         //     console.log(base64data);
// //         // }


// //         // this function invokes save-as dialog
// //         // invokeSaveAsDialog(recorder.getBlob(), 'video.webm');
// //         // saveAs(blob, filename);
// //         // video.srcObject = recorder.srcObject;


// //         // this.save('file-name');

// //         // or manually:
// //         // invokeSaveAsDialog(recorder.getBlob(), 'filename.webm');


// //         // video.srcObject = recorder.stream;
// //         // video.srcObject = recorder.stream;

// //         // video.srcObject = blob;



// //         video.play();

// //         // Unmute video on preview
// //         video.muted = false;

// //         // Stop the device streaming
// //         recorder.stream.stop();

// //         // Enable record button again !
// //         document.getElementById('btn-start-recording').disabled = false;
// //     }).catch(function (error) {
// //         console.error('stopRecording failure', error);
// //     });
// //     // }, false);

// // }