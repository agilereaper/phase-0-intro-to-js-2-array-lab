const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
cats.unshift(name)
}
function destructivelyRemoveLastCat() {
cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
const copyofcats = [...cats]
copyofcats.push(name)
return copyofcats
}
function prependCat(name) {
    const copyofcats = [...cats]
    copyofcats.unshift(name);
    return copyofcats
}
function removeLastCat(name) {
    const copyofcats = [...cats]
    copyofcats.pop(name)
    return copyofcats
}
function removeFirstCat(name) {
    const copyofcats = [...cats]
    copyofcats.shift(name)
    return copyofcats
}
// destructivelyPrependCat("Bob")
// destructivelyPrependCat("hallie")
// destructivelyPrependCat("jen")
// console.log(cats)