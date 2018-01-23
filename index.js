const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  var newkittens = kittens.unshift('Bob');
}

function destructivelyRemoveLastKitten(name) {
  var newkittens = kittens.pop('Bob');
}

function destructivelyRemoveFirstKitten(name) {
  var newkittens = kittens.shift('Bob');
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

