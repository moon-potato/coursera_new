
(function (window) {

 var helloSpeaker = {};
 var speakWord = "Hello";

helloSpeaker.sayHello = function speak(name) {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);