let sentences = [];
function generate() {
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

  printSentences(sentences);
}

function printSentences(sentences) {
  let textBox = document.getElementById("sentences");
  textBox.innerHTML = "";
  for (let i = sentences.length - 1; i >= 0; i--) {
    textBox.innerHTML += "<p>" + sentences[i] + "</p>";
  }
}
