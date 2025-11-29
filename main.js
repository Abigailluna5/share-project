// OBJECT
const user = {
  name: "Abigail",
  greet: function() {
    console.log("Welcome, " + this.name + "!");
  }
};

user.greet();

// ARRAY with messages
let messages = [
  "You are doing amazing today!",
  "Take a deep breath you got this.",
  "Good things are coming your way.",
  "Be proud of how far you’ve come.",
  "You’re stronger than you think."
];

// ARRAY METHOD
messages.push("Keep believing in yourself!");

// LOOP (just demonstrating it in console)
for (let i = 0; i < messages.length; i++) {
  console.log("Message " + (i + 1) + ": " + messages[i]);
}

// CHANGE CSS + SHOW MESSAGE
function showMessage() {
  const box = document.getElementById("messageBox");

  // Pick a random message
  let random = Math.floor(Math.random() * messages.length);
  box.innerText = messages[random];

  // Change background color randomly
  let colors = ["pink", "lightblue", "lightgreen", "lavender", "peachpuff"];
  let randColor = Math.floor(Math.random() * colors.length);
  box.style.backgroundColor = colors[randColor];
}
