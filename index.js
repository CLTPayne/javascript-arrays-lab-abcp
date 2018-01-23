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
   return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens]
}

function removeLastKitten() {
  var kittens4 = kittens.slice(0,2)
  return kittens4
}

function removeFirstKitten() {
  var kittens5 = kittens.slice(1)
  return kittens5
}

