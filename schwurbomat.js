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

var shuffle = function (array) {
    for (var i = array.length; i > 1; i--) {
        var j = Math.floor(Math.random() * i)
        var temp = array[i - 1]
        array[i - 1] = array[j]
        array[j] = temp
    }
}

var capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
}

var generateWoo = function () {
    var woo = ""
    shuffle(adjectives)
    shuffle(modifiers)
    shuffle(nouns)
    woo += articles.nominative[nouns[0].gender] + " "
    woo += adjectives[0].adjective + "e "
    woo += modifiers[0].modifier
    woo += nouns[0].nominative + " ist "
    woo += articles.nominative[nouns[1].gender] + " "
    woo += adjectives[1].adjective + "e "
    woo += modifiers[1].modifier
    woo += nouns[1].nominative + " "
    woo += articles.genitive[nouns[2].gender] + " "
    woo += adjectives[2].adjective + "en "
    woo += modifiers[2].modifier
    woo += nouns[2].genitive + "."
    woo = capitalize(woo)
    return woo
}

var wooButton = document.getElementById("woo-button")
wooButton.addEventListener(
    "click",
    function () {
        var woo = generateWoo()
        var wooDiv = document.getElementById("woo")
        wooDiv.innerHTML = woo
        var twitterButton = document.getElementById("twitter-button")
        var twitterHref = "https://twitter.com/intent/tweet"
        twitterHref += "?text=" + encodeURIComponent(woo)
        twitterHref += "&url=" + encodeURIComponent("https://michi83.github.io/schwurbomat/")
        twitterHref += "&hashtags=" + encodeURIComponent("Schwurbomat,Esoterik,Globukalypse")
        twitterButton.href = twitterHref
        twitterButton.style.display = "inline"
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
new Adjective("theosophisch")
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
new Noun("tarot", "tarots", "n")
new Noun("tensor", "tensors", "m")
new Noun("verschränkung", "verschränkung", "f")
new Noun("welle", "welle", "f")
