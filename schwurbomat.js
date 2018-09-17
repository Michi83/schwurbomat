var adjectives = []
var modifiers = []
var nouns = []

var Adjective = function (adjective) {
    this.adjective = adjective
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
    woo += adjective1.adjective + "e "
    woo += modifier1.modifier
    woo += noun1.nominative + " ist "
    woo += articles.nominative[noun2.gender] + " "
    woo += adjective2.adjective + "e "
    woo += modifier2.modifier
    woo += noun2.nominative + " "
    woo += articles.genitive[noun3.gender] + " "
    woo += adjective3.adjective + "en "
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

new Adjective("alchemistisch")
new Adjective("alternativ")
new Adjective("anthroposophisch")
new Adjective("aquatisch")
new Adjective("astral")
new Adjective("astrologisch")
new Adjective("ätherisch")
new Adjective("ayurvedisch")
new Adjective("disharmonisch")
new Adjective("elementar")
new Adjective("energetisch")
new Adjective("esoterisch")
new Adjective("feinstofflich")
new Adjective("ganzheitlich")
new Adjective("geistig")
new Adjective("göttlich")
new Adjective("harmonisch")
new Adjective("harmonisierend")
new Adjective("heilig")
new Adjective("holographisch")
new Adjective("homöopathisch")
new Adjective("karmisch")
new Adjective("keltisch")
new Adjective("kosmisch")
new Adjective("magisch")
new Adjective("mental")
new Adjective("nachhaltig")
new Adjective("natürlich")
new Adjective("negativ")
new Adjective("positiv")
new Adjective("radionisch")
new Adjective("rituell")
new Adjective("schöpferisch")
new Adjective("schwebend")
new Adjective("sechsdimensional")
new Adjective("telepathisch")
new Adjective("therapeutisch")
new Adjective("tonisierend")
new Adjective("transzendent")
new Adjective("universell")

new Modifier("Akasha")
new Modifier("Akupunktur")
new Modifier("Astral")
new Modifier("Äther")
new Modifier("Atlantis")
new Modifier("Aura")
new Modifier("Bewusstseins")
new Modifier("Bio")
new Modifier("Chakra")
new Modifier("Christus")
new Modifier("Dimensions")
new Modifier("Einhorn")
new Modifier("Elementar")
new Modifier("Energie")
new Modifier("Engels")
new Modifier("Gedanken")
new Modifier("Geist")
new Modifier("Gottes")
new Modifier("Heil")
new Modifier("Herz")
new Modifier("Hologramm")
new Modifier("Hyper")
new Modifier("Informations")
new Modifier("Inkarnations")
new Modifier("Interferenz")
new Modifier("Karma")
new Modifier("Kristall")
new Modifier("Licht")
new Modifier("Liebes")
new Modifier("Mond")
new Modifier("Natur")
new Modifier("Orgon")
new Modifier("Photonen")
new Modifier("Prana")
new Modifier("Quanten")
new Modifier("Runen")
new Modifier("Schwingungs")
new Modifier("Seelen")
new Modifier("Sonnen")
new Modifier("Tachyonen")
new Modifier("Tesla")
new Modifier("Traum")
new Modifier("Yoga")

new Noun("akkumulator", "akkumulators", "m")
new Noun("akupunktur", "akupunktur", "f")
new Noun("amethyst", "amethysts", "m")
new Noun("amulett", "amuletts", "n")
new Noun("äther", "äthers", "m")
new Noun("aura", "aura", "f")
new Noun("bewusstsein", "bewusstseins", "n")
new Noun("chakra", "chakras", "n")
new Noun("channeling", "channelings", "n")
new Noun("dimension", "dimension", "f")
new Noun("ebene", "ebene", "f")
new Noun("element", "elements", "n")
new Noun("elixier", "elixiers", "n")
new Noun("essenz", "essenz", "f")
new Noun("feld", "felds", "n")
new Noun("flow", "flows", "m")
new Noun("frequenz", "frequenz", "f")
new Noun("heilung", "heilung", "f")
new Noun("homöopathie", "homöopathie", "f")
new Noun("inkarnation", "inkarnation", "f")
new Noun("karma", "karmas", "n")
new Noun("kristall", "kristalls", "m")
new Noun("medizin", "medizin", "f")
new Noun("orakel", "orakels", "n")
new Noun("pyramide", "pyramide", "f")
new Noun("radionik", "radionik", "f")
new Noun("resonanz", "resonanz", "f")
new Noun("schwingung", "schwingung", "f")
new Noun("sigille", "sigille", "f")
new Noun("tarot", "tarot", "n")
new Noun("tensor", "tensors", "m")
new Noun("verschränkung", "verschränkung", "f")
new Noun("welle", "welle", "f")
