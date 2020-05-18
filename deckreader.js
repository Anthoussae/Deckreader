// this fetches the decklist, turns it into the argument for masterfunction.
fetch('decklists.txt')
  .then(res => res.text())
  .then(str => {
    masterFunction(str);
  })
// global values
let indexTracker;
let tempWin;
let tempLoss;
let arrayDisplay;
let deckBox = [];
let ikoriaCardNames = ",Adaptive Shimmerer, Adventurous Impulse, Aegis Turtle, Alert Heedbonder, Almighty Brushwagg, Anticipate, Archipelagore, Auspicious Starrix, Avian Oddity, Back for More, Barrier Breach, Bastion of Remembrance, Blade Banish, Blazing Volley, Blisterspit Gremlin, Blitz Leech, Blitz of the Thunder-Raptor, Blood Curdle, Bloodfell Caves, Blossoming Sands, Bonders' Enclave, Boneyard Lurker, Boon of the Wish-Giver, Boot Nipper, Bristling Boar, Brokkos Apex of Forever, Bushmeat Poacher, Call of the Death-Dweller, Capture Sphere, Cathartic Reunion, Cavern Whisperer, Channeled Force, Charge of the Forever-Beast, Checkpoint Officer, Chevill Bane of Monsters, Chittering Harvester, Clash of Titans, Cloudpiercer, Colossification, Convolute, Coordinated Charge, Corpse Churn, Crystacean, Crystalline Giant, Cubwarden, Cunning Nightbonder, Dark Bargain, Daysquad Marshal, Dead Weight, Death's Oasis, Dire Tactics, Dirge Bat, Dismal Backwater, Divine Arrow, Drannith Healer, Drannith Magistrate, Drannith Stinger, Dreamtail Heron, Durable Coilbug, Duskfang Mentor, Easy Prey, Eerie Ultimatum, Emergent Ultimatum, Escape Protocol, Essence Scatter, Essence Symbiote, Everquill Phoenix, Evolving Wilds, Excavation Mole, Extinction Event, Exuberant Wolfbear, Facet Reader, Farfinder, Ferocious Tigorilla, Fertilid, Fiend Artisan, Fight as One, Fire Prophecy, Flame Spill, Flourishing Fox, Flycatcher Giraffid, Footfall Crater, Forbidden Friendship, Forest, Frenzied Raptor, Frillscare Mentor, Frondland Felidar, Frost Lynx, Frostveil Ambush, Fully Grown, Garrison Cat, Gemrazer, General Kudro of Drannith, General's Enforcer, Genesis Ultimatum, Glimmerbell, Gloom Pangolin, Glowstone Recluse, Go for Blood, Greater Sandwurm, Grimdancer, Gust of Wind, Gyruda Doom of Depths, Hampering Snare, Heartless Act, Heightened Reflexes, Helica Glider, Honey Mammoth, Hornbash Mentor, Humble Naturalist, Hunted Nightmare, Huntmaster Liger, Illuna Apex of Wishes, Imposing Vantasaur, Indatha Crystal, Indatha Triome, Insatiable Hemophage, Inspired Ultimatum, Island, Ivy Elemental, Jegantha the Wellspring, Jubilant Skybonder, Jungle Hollow, Kaheera the Orphanguard, Keensight Mentor, Keep Safe, Keruga the Macrosage, Ketria Crystal, Ketria Triome, Kinnan Bonder Prodigy, Kogla the Titan Ape, Labyrinth Raptor, Lavabrink Venturer, Lava Serpent, Lead the Stampede, Light of Hope, Lore Drakkis, Lukka Coppercoat Outcast, Luminous Broodmoth, Luminous Broodmoth, Lurking Deadeye, Lurrus of the Dream Den, Lutri the Spellchaser, Majestic Auricorn, Maned Serval, Memory Leak, Migration Path, Migratory Greathorn, Momentum Rumbler, Monstrous Step, Mosscoat Goriak, Mountain, Mutual Destruction, Mysterious Egg, Mystic Subdual, Mythos of Brokkos, Mythos of Illuna, Mythos of Nethroi, Mythos of Snapdax, Mythos of Vadrok, Narset of the Ancient Way, Necropanther, Nethroi Apex of Death, Neutralize, Nightsquad Commando, Obosh the Preypiercer, Offspring's Revenge, Of One Mind, Ominous Seas, Pacifism, Parcelbeast, Patagia Tiger, Perimeter Sergeant, Phase Dolphin, Plains, Plummet, Pollywog Symbiote, Porcuparrot, Pouncing Shoreshark, Prickly Marmoset, Primal Empathy, Proud Wildbonder, Pyroceratops, Quartzwood Crasher, Raking Claws, Ram Through, Raugrin Crystal, Raugrin Triome, Reconnaissance Mission, Regal Leosaur, Reptilian Reflection, Rielle the Everwise, Rooting Moloch, Rugged Highlands, Ruinous Ultimatum, Rumbling Rockslide, Sanctuary Lockdown, Sanctuary Smasher, Savai Crystal, Savai Sabertooth, Savai Thundermane, Savai Triome, Scoured Barrens, Sea-Dasher Octopus, Serrated Scorpion, Shark Typhoon, Shredded Sails, Skull Prophet, Skycat Sovereign, Sleeper Dart, Slitherwisp, Snapdax Apex of the Hunt, Snare Tactician, Solid Footing, Song of Creation, Sonorous Howlbonder, Spelleater Wolverine, Splendor Mare, Spontaneous Flight, Springjaw Trap, Sprite Dragon, Startling Development, Stormwild Capridor, Sudden Spinnerets, Suffocating Fumes, Survivors' Bond, Swallow Whole, Swamp, Swiftwater Cliffs, Tentative Connection, The Ozolith, Thieving Otter, Thornwood Falls, Thwart the Enemy, Titanoth Rex, Titans' Nest, Tranquil Cove, Trumpeting Gnarr, Umori the Collector, Unbreakable Bond, Unexpected Fangs, Unlikely Aid, Unpredictable Cyclone, Vadrok Apex of Thunder, Valiant Rescuer, Vivien Monsters' Advocate, Void Beckoner, Voracious Greatshark, Vulpikeet, Weaponize the Monsters, Whirlwind of Thought, Whisper Squad, Will of the All-Hunter, Wilt, Wind-Scarred Crag, Wingfold Pteron, Wingspan Mentor, Winota Joiner of Forces, Yidaro Wandering Monster, Yorion Sky Nomad, Zagoth Crystal, Zagoth Mamba, Zagoth Triome, Zenith Flare, Zilortha Strength Incarnate, Zirda the Dawnwaker,"
let allDeckLists;
let tempCardCount;
let companionCount = 0;
let globalAverage;
let totWins = 0;
let totLosses = 0;
let winSortedTable;
let lossSortedTable;
let percentSortedTable;
let ratingSortedTable;
let playedSortedTable;
// finds the total number instances  of a given word in the string
function findWord(searchedString, targetWord) {

  let outputNumber = 0;
  let confirmTicker = 0;

  for (let i = 0; i < searchedString.length; i++) {
    if (searchedString[i].toUpperCase() === targetWord[0].toUpperCase()) {
      confirmTicker = 0;
      for (let j = 0; j < targetWord.length; j++) {

        if (i + j < searchedString.length) {

          if (searchedString[i + j].toUpperCase() === targetWord[j].toUpperCase()) {
            confirmTicker = confirmTicker + 1;
          }

          if (j === targetWord.length - 1) {
            if (confirmTicker === (targetWord.length)) {
              outputNumber = outputNumber + 1;
              confirmTicker = 0;
            }
          }
        }
      }
    }
  }
  return outputNumber;
}
// builds a data storage array from a list of comma separated items and puts them into arrayDisplay.
function arrayBuilder(string) {
  let currentWord = "";
  let outputBox = [["Card Name", "#Maindeck", "Wins", "Losses", "#Companion", "Win%", "Power LvL"]];
  for (let i = 0; i < string.length; i++) {
    if (string[i] != ",") {
      currentWord = currentWord + string[i];
    }
    else if (string[i] === "," && currentWord.length > 0) {
      outputBox.push([currentWord, 0, 0, 0, 0, 0, 0]);
      currentWord = "";
    }
  }
  outputBox.push(["Totals:", 0, 0, 0, 0, 0, 0])
  arrayDisplay = outputBox;
}
// checks to see if a string corresponds to a number.
function isStringNum(string) {
  if (string === "0" ||
    string === "1" ||
    string === "2" ||
    string === "3" ||
    string === "4" ||
    string === "5" ||
    string === "6" ||
    string === "7" ||
    string === "8" ||
    string === "9") {
    return true;
  }
  else {
    return false;
  }
}
// finds the first instance of a string-integer in a string in a given direction.
function intSearch(string, index, direction) {

  let output;
  let tempIndex = index

  if (direction === "earlier" || direction === "left") {
    while (isStringNum(string[tempIndex]) === false && tempIndex > -1) {
      tempIndex = tempIndex - 1;
    }
    if (isStringNum(string[tempIndex]) === true) {
      output = string[tempIndex];
    }
    else {
      output = "Error:  No Integer Found";
    }
  }
  else if (direction === "later" || direction === "right") {
    while (isStringNum(string[tempIndex]) === false && tempIndex < string.length) {
      tempIndex = tempIndex + 1;
    }
    if (isStringNum(string[tempIndex]) === true) {
      output = string[tempIndex];
    }
    else {
      output = "Error:  No Integer Found";
    }
  }
  indexTracker = tempIndex
  return output;
}
// finds the index of the last character of the first instance of a word in a string.
function wordIndex(searchedString, targetWord) {
  let confirmTicker = 0;
  for (let i = 0; i < searchedString.length; i++) {
    if (searchedString[i].toUpperCase() === targetWord[0].toUpperCase()) {
      confirmTicker = 0;
      for (let j = 0; j < targetWord.length; j++) {
        if (searchedString[i + j].toUpperCase() === targetWord[j].toUpperCase()) {
          confirmTicker = confirmTicker + 1;
        }
        if (j === targetWord.length - 1) {
          if (confirmTicker === (targetWord.length)) {
            return i + j;
          }
        }
      }
    }
  }
}
// takes a deck(string), and sets the tempwin and temploss values to  the first two  numbers after the word deck.
function deckWinLossCheck(string) {
  let deckIndex = wordIndex(string, "deck");
  if (isStringNum(intSearch(string, deckIndex, "later")) === true) {
    tempWin = Number(intSearch(string, deckIndex, "later"));
    tempLoss = Number(intSearch(string, deckIndex + 3, "later"));
  }
  else {
    tempWin = 0;
    tempLoss = 0;
  }
}
// checks a card name in a deck(string), and sets tempCardCount to match the number of times it occurs.
function cardInstances(string, cardname) {
  if (findWord(string, cardname) > 0) {
    let cardnameIndex = wordIndex(string, cardname);
    tempCardCount = Number(intSearch(string, cardnameIndex, "earlier"));
  }
}
// finds the index of the next occurrence of a word in a string, starting from index N
function nextWordIndex(searchedString, targetWord, startIndex) {
  let confirmTicker = 0;
  for (let i = startIndex; i < searchedString.length; i++) {

    if (searchedString[i].toUpperCase() === targetWord[0].toUpperCase()) {
      confirmTicker = 0;
      for (let j = 0; j < targetWord.length; j++) {
        if (i + j < searchedString.length) {
          if (searchedString[i + j].toUpperCase() === targetWord[j].toUpperCase()) {
            confirmTicker = confirmTicker + 1;
          }
          if (j === targetWord.length - 1) {
            if (confirmTicker === (targetWord.length)) {
              return i + j;
            }
          }
        }
      }
    }
  }
}
// takes a giant string, and slices it into decks, which are then put into the deckbox array.
function deckSlicer(string) {

  //part one: build the deckbox with raw decks.
  let currentDeck = [];
  let startSliceIndex = wordIndex(string, "deck") - 2;
  let endSliceIndex;
  let numberOfDecks = findWord(string, "deck");


  for (let i = 0; i < numberOfDecks; i++) {
    endSliceIndex = nextWordIndex(string, "deck", startSliceIndex);

    for (let j = startSliceIndex - 1; j < endSliceIndex - 3; j++) {
      currentDeck = currentDeck + string[j];
    }
    deckBox.push([currentDeck]);
    currentDeck = "";
    startSliceIndex = endSliceIndex - 2;
    endSliceIndex = nextWordIndex(string, "deck", startSliceIndex);

  }
}
// a function to clean up the deckbox, removing superfluous sideboard data.
function deckBoxCleaner(array) {

  let interimDeck = "";
  let interimDeckBox = [];
  let endSliceIndex;

  for (let i = 0; i < array.length; i++) {
    endSliceIndex = nextWordIndex(array[i][0], "sideboard", 0);
    for (let j = 0; j < endSliceIndex - 8; j++) {
      if (array[i][0][j] != ",") { interimDeck = interimDeck + array[i][0][j]; }
    }
    interimDeckBox.push([interimDeck]);
    interimDeck = "";
  }
  deckBox = interimDeckBox;
}
// a function that takes an input string, and removes all line breaks.
function removeLineBreaks(string) {
  return string.replace(/\n/g, '');
}
// board draw
function drawTable(array) {
  let container = document.querySelector('.container');
  let html = '';
  html += '<table>';
  for (let xS = 0; xS < array.length; xS++) {
    html += '<tr>';
    for (let yS = 0; yS < array[0].length; yS++) {
      html += '<td width=20>';
      html += array[xS][yS];
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  container.innerHTML = html;
}
// creates a card quality rating based on #times played, #wins, and #losses.
function powerLevelChecker(numPlayed, numWins, numLosses) {
  if (numPlayed < 1) {
    return 0;
  }
  else {

    // let wins = numWins
    // let losses  = numLosses
    // let n = wins + losses;
    // let mean = wins/n;
    // let variance  = mean*(1-mean)/n;
    // let s  = Math.sqrt(variance).toFixed(3);
    // s  = Number(s)
    // let mishmash  = 1.960*(s/Math.sqrt(n))
    // let bottomRange = mean - mishmash;
    // let topRange = mean + mishmash;
    // bottomRange = bottomRange.toFixed(1);
    // topRange = topRange.toFixed(1);

    // return (bottomRange + "-" + topRange)
    return "Math Pending"
  }
}
// takes a deckbox of treated decks, and sets all the values in the corresponing place in the array.
function setDeckData() {
  for (let i = 0; i < deckBox.length - 1; i++) {
    deckWinLossCheck(deckBox[i][0]);
    totWins = totWins + tempWin;
    totLosses = totLosses + tempLoss;
    for (let j = 1; j < 267; j++) {
      let wordToCheck = arrayDisplay[j][0];
      let deckToCheck = deckBox[i][0];
      if (findWord(deckToCheck, wordToCheck) > 0) {
        cardInstances(deckToCheck, wordToCheck);
        if (tempCardCount > 0) {
          arrayDisplay[j][1] = arrayDisplay[j][1] + tempCardCount;
          arrayDisplay[j][2] = arrayDisplay[j][2] + tempWin;
          arrayDisplay[j][3] = arrayDisplay[j][3] + tempLoss;
          arrayDisplay[j][5] = (arrayDisplay[j][2] / (arrayDisplay[j][3] + arrayDisplay[j][2]) * 100).toFixed(0) + "%";
        }
      }
      arrayDisplay[j][6] = powerLevelChecker(arrayDisplay[j][1], arrayDisplay[j][2], arrayDisplay[j][3]);
    }
  }

  let totCardsPlayed = 0;
  let totCompanions = 0;

  for (let q = 1; q < 267; q++) {
    totCardsPlayed = totCardsPlayed + arrayDisplay[q][1];
    totCompanions = totCompanions + arrayDisplay[q][4];
  }

  arrayDisplay[267][1] = totCardsPlayed;
  arrayDisplay[267][2] = totWins;
  arrayDisplay[267][3] = totLosses;
  arrayDisplay[267][4] = totCompanions;
  arrayDisplay[267][5] = (arrayDisplay[267][2] / (arrayDisplay[267][3] + arrayDisplay[267][2]) * 100).toFixed(0) + "%";
  globalAverage = arrayDisplay[267][5];
  arrayDisplay[267][6] = powerLevelChecker(arrayDisplay[267][1], arrayDisplay[267][2], arrayDisplay[267][3]);

}
// handles collecting companion data and putting it in the appropriate place.
function companionChecker() {
  for (let i = 0; i < deckBox.length; i++) {
    deckWinLossCheck(deckBox[i][0]);
    if (findWord(deckBox[i][0], "Companion") > 0) {
      companionCount = 1;
      let textSnip = "";
      let tempStartIndex = wordIndex(deckBox[i][0], "companion");
      let tempEndIndex = nextWordIndex(deckBox[i][0], "(", tempStartIndex);
      for (let p = tempStartIndex + 4; p < tempEndIndex; p++) {
        textSnip = textSnip + deckBox[i][0][p];
      }
      textSnip = textSnip.replace(",", "");
      textSnip = textSnip.toUpperCase();
      textSnip = textSnip.slice(0, -1);
      textSnip = textSnip.replace(/\s/g, '');
      let tempLocation;
      for (let j = 1; j < 267; j++) {
        let nameComparison = "";
        nameComparison = arrayDisplay[j][0].toUpperCase();
        nameComparison = nameComparison.substr(1);
        nameComparison = nameComparison.replace(/\s/g, '');
        let compare = textSnip.localeCompare(nameComparison);
        if (compare === 0) {
          arrayDisplay[j][4] = arrayDisplay[j][4] + 1;
          arrayDisplay[j][2] = arrayDisplay[j][2] + tempWin;
          arrayDisplay[j][3] = arrayDisplay[j][3] + tempLoss;
          arrayDisplay[j][5] = (arrayDisplay[j][2] / (arrayDisplay[j][3] + arrayDisplay[j][2]) * 100).toFixed(0) + "%"
          arrayDisplay[j][6] = powerLevelChecker(arrayDisplay[j][1], arrayDisplay[j][2], arrayDisplay[j][3]);
        }
      }
    }
  }
}
// colours the table
function colorTable() {
  let tdElems = document.querySelectorAll('td');
  for (let i = 0; i < tdElems.length; i++) {
    if (tdElems[i].innerHTML === "Card Name" ||
      tdElems[i].innerHTML === "#Maindeck" ||
      tdElems[i].innerHTML === "Wins" ||
      tdElems[i].innerHTML === "Losses" ||
      tdElems[i].innerHTML === "#Companion" ||
      tdElems[i].innerHTML === "Win%" ||
      tdElems[i].innerHTML === "Power LvL" ||
      tdElems[i].innerHTML === "Totals:"
    ) {
      tdElems[i].style.color = "black";
      tdElems[i].style.backgroundColor = "lightSalmon";
    }
    else if (tdElems[i].innerHTML[2] === "%") {
      if (tdElems[i].innerHTML < globalAverage) {
        tdElems[i].style.color = "white";
        tdElems[i].style.backgroundColor = "red";
      }
      else if (tdElems[i].innerHTML > globalAverage) {
        tdElems[i].style.color = "white";
        tdElems[i].style.backgroundColor = "green";
      }
      else {
        tdElems[i].style.color = "white";
        tdElems[i].style.backgroundColor = "blue";
      }
    }
    else if (tdElems[i].innerHTML[3] === "%") {
      tdElems[i].style.color = "white";
      tdElems[i].style.backgroundColor = "green";
    }
    else if (tdElems[i].innerHTML[0] === " " || tdElems[i].innerHTML[0] === "A") {
      tdElems[i].style.color = "black";
      tdElems[i].style.backgroundColor = "lightgreen";
    }
  }
}
//consolidated sorting call
function buildSortedArrays() {
  playedSortedTable = sizeSort(1);
  winSortedTable = sizeSort(2);
  lossSortedTable = sizeSort(3);
  percentSortedTable = sizeSort(5);
  ratingSortedTable = sizeSort(6);
}
//magnitude sorting algorithm. Takes an index (corresponding to category for sorting) and an array. Outputs a sorted array
function sizeSort(i) {
  if (i != 5){
    let outputArray;
    let hold;
    outputArray = arrayDisplay.map((x) => x);
    for (let p = 0; p < 265; p++) {
      for (let j = 1; j < 266; j++) {
        if (outputArray[j][i] > outputArray[j + 1][i]) {
          hold = outputArray[j + 1];
          outputArray[j + 1] = outputArray[j];
          outputArray[j] = hold;
        }
      }
    }
    let reversedArray = outputArray.map(item => item).reverse();
    hold  = reversedArray[0];
    reversedArray[0] = reversedArray[267];
    reversedArray[267] = hold;
    return reversedArray;
  }
  else {
      let outputArray;
      let hold;
      outputArray = arrayDisplay.map((x) => x);
      for (let p = 0; p < 265; p++) {
        for (let j = 1; j < 266; j++) {
          let thiswins = outputArray[j][2];
          let thislosses = outputArray[j][3];
          let thismatches  = thiswins+thislosses;
          let thispercent;
          if (thismatches === 0) {
            thispercent = 0;
          }
          else { 
            thispercent = thiswins/thismatches;
          }
          let nextwins = outputArray[j+1][2];
          let nextlosses = outputArray[j+1][3];
          let nextmatches  = nextwins+nextlosses;
          let nextpercent;
          if (nextmatches === 0) {
            nextpercent = 0;
          }
          else { 
            nextpercent = nextwins/nextmatches;
          }
          if (thispercent > nextpercent) {
            hold = outputArray[j + 1];
            outputArray[j + 1] = outputArray[j];
            outputArray[j] = hold;
          }
        }
      }
      //invert me
    let reversedArray = outputArray.map(item => item).reverse();
    hold  = reversedArray[0];
    reversedArray[0] = reversedArray[267];
    reversedArray[267] = hold;
    return reversedArray;
  }
}
//buttons to reorder the table
function alphaSort() {
  console.log("alphabetically sorted");
  drawTable(arrayDisplay);
  colorTable();
}
function winSort() {
  console.log("win sorted");
  drawTable(winSortedTable);
  colorTable();
}
function lossSort() {
  console.log("loss sorted");
  drawTable(lossSortedTable);
  colorTable();
}
function percentSort() {
  console.log("% sorted");
  drawTable(percentSortedTable);
  colorTable();
}
function ratingSort() {
  console.log("rating sorted");
  drawTable(ratingSortedTable);
  colorTable();
}
function playSort() {
  console.log("played sorted");
  drawTable(playedSortedTable);
  colorTable();
}
//consolidated program that puts everything together
function masterFunction(string) {
  let treatedString = removeLineBreaks(string);
  arrayBuilder(ikoriaCardNames);
  deckSlicer(treatedString);
  deckBoxCleaner(deckBox);
  companionChecker();
  setDeckData();
  buildSortedArrays();
  drawTable(arrayDisplay);
  colorTable();
}

//hello james you're on github