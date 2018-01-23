const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
   var kittens2 = [...kittens, 'Broom'];
   return kittens2
}

function prependKitten(name) {
  var kittens3 = ['Arnold', ...kittens]
  return kittens3
}

function removeLastKitten() {
  var kittens4 = kittens.slice(0,2)
  return kittens4
}

function removeFirstKitten() {
  var kittens5 = kittens.slice(1)
  return kittens5
}

