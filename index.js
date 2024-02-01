const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}
function prependCat(name){
    const newCats = [name, ...cats]
    return newCats
}
function removeLastCat(name){
    const newCats = [...cats]
    return newCats.slice(0, cats.length - 1)
}
function removeFirstCat(){
    const newCats = [...cats]
    return newCats.slice(1)
}