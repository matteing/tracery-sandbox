let sentences = [];
function generateSentence() {
  var data = {
    start: ["#Desc# #N# #Vtrans# the #Adj# #N2#."],
    Det: ["The", "This", "That"],
    N: [
      "John Keating",
      "Bob Harris",
      "Bruce Wayne",
      "John Constantine",
      "Tony Stark",
      "John Wick",
      "Sherlock Holmes",
      "King Leonidas",
    ],
    Desc: ["My good friend", "The awesome", "Legend", "Our Royal Highness"],
    N2: ["friend", "family", "computer", "app", "game", "bottle"],
    Adj: ["cool", "lazy", "amazing", "fantastic", "fabulous", "sweet"],
    Vtrans: [
      "computes",
      "examines",
      "helps",
      "prefers",
      "sends",
      "plays with",
      "messes up with",
    ],
    Vintr: [
      "loves",
      "coughs",
      "daydreams",
      "whines",
      "slobbers",
      "appears",
      "disappears",
      "exists",
      "cries",
      "laughs",
    ],
  };

  let grammar = tracery.createGrammar(data);
  let expansion = grammar.flatten("#start#");

  sentences.push(expansion);

  print(sentences);
}

let phones = [];
function generatePhones() {
  var data = {
    start: [
      "#FirstName# #LastName# (#AreaCode#) #Digit##Digit##Digit#-#Digit##Digit##Digit##Digit#",
    ],
    AreaCode: ["787", "939"],
    FirstName: ["Jesus", "Juan", "Juana", "Quique", "Sergio"],
    LastName: ["Rodriguez", "Torres", "Mattei", "Ramirez"],
    Digit: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  };

  let grammar = tracery.createGrammar(data);
  let expansion = grammar.flatten("#start#");

  sentences.push(expansion);

  print(sentences, "phones");
}

function print(values, id = "sentences") {
  let textBox = document.getElementById(id);
  textBox.innerHTML = "";
  for (let i = values.length - 1; i >= 0; i--) {
    textBox.innerHTML += "<p>" + values[i] + "</p>";
  }
}
