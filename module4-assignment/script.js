(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (name in names) {
  if (name.charAt(0) == "j") {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
})();
