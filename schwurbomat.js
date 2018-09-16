var adjectives = []
var modifiers = []
var nouns = []

var Adjective = function (nominative, genitive) {
    this.nominative = nominative
    this.genitive = genitive
    adjectives.push(this)
}

var Modifier = function (modifier) {
    this.modifier = modifier
    modifiers.push(this)
}

var Noun = function (nominative, genitive, gender) {
    this.nominative = nominative
    this.genitive = genitive
    this.gender = gender
    nouns.push(this)
}

var articles = {
    nominative: {m: "der", f: "die", n: "das"},
    genitive: {m: "des", f: "der", n: "des"},
}

var pickOne = function (array) {
    var index = Math.floor(Math.random() * array.length)
    return array[index]
}

var capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
}

var generateWoo = function () {
    var adjective1 = pickOne(adjectives)
    var adjective2 = pickOne(adjectives)
    var adjective3 = pickOne(adjectives)
    var modifier1 = pickOne(modifiers)
    var modifier2 = pickOne(modifiers)
    var modifier3 = pickOne(modifiers)
    var noun1 = pickOne(nouns)
    var noun2 = pickOne(nouns)
    var noun3 = pickOne(nouns)
    var woo = ""
    woo += capitalize(articles.nominative[noun1.gender]) + " "
    woo += adjective1.nominative + " "
    woo += modifier1.modifier
    woo += noun1.nominative + " ist "
    woo += articles.nominative[noun2.gender] + " "
    woo += adjective2.nominative + " "
    woo += modifier2.modifier
    woo += noun2.nominative + " "
    woo += articles.genitive[noun3.gender] + " "
    woo += adjective3.genitive + " "
    woo += modifier3.modifier
    woo += noun3.genitive + "."
    return woo
}

var wooButton = document.getElementById("woo-button")
wooButton.addEventListener(
    "click",
    function () {
        var wooDiv = document.getElementById("woo")
        wooDiv.innerHTML = generateWoo()
    }
)

new Adjective("alternative", "alternativen")
new Adjective("anthroposophische", "anthroposophischen")
new Adjective("astrale", "astralen")
new Adjective("ätherische", "ätherischen")
new Adjective("ayurvedische", "ayurvedischen")
new Adjective("disharmonische", "disharmonischen")
new Adjective("energetische", "energetischen")
new Adjective("esoterische", "esoterischen")
new Adjective("feinstoffliche", "feinstofflichen")
new Adjective("ganzheitliche", "ganzheitlichen")
new Adjective("harmonische", "harmonischen")
new Adjective("harmonisierende", "harmonisierenden")
new Adjective("kosmische", "kosmischen")
new Adjective("mentale", "mentalen")
new Adjective("nachhaltige", "nachhaltigen")
new Adjective("negative", "negativen")
new Adjective("positive", "positiven")
new Adjective("sechsdimensionale", "sechsdimensionalen")
new Adjective("therapeutische", "therapeutischen")
new Adjective("tonisierende", "tonisierenden")
new Adjective("universelle", "universellen")

new Modifier("Astro")
new Modifier("Bio")
new Modifier("Dimensions")
new Modifier("Einhorn")
new Modifier("Energie")
new Modifier("Engels")
new Modifier("Heil")
new Modifier("Hyper")
new Modifier("Informations")
new Modifier("Interferenz")
new Modifier("Licht")
new Modifier("Orgon")
new Modifier("Quanten")
new Modifier("Schwingungs")

new Noun("akkumulator", "akkumulators", "m")
new Noun("aura", "aura", "f")
new Noun("channeling", "channelings", "n")
new Noun("ebene", "ebene", "f")
new Noun("einhorn", "einhorns", "n")
new Noun("essenz", "essenz", "f")
new Noun("felds", "felds", "n")
new Noun("flow", "flows", "n")
new Noun("frequenz", "frequenz", "f")
new Noun("homöopathie", "homöopathie", "f")
new Noun("medizin", "medizin", "f")
new Noun("orakel", "orakels", "n")
new Noun("resonanz", "resonanz", "f")
new Noun("schwingung", "schwingung", "f")
new Noun("sigille", "sigille", "f")
new Noun("tarot", "tarot", "n")
new Noun("verschränkung", "verschränkung", "f")
new Noun("welle", "welle", "f")
