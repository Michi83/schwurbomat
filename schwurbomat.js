var adjectives = []
var modifiers = []
var nouns = []
var verbs = []

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
    this.dative = nominative
    this.accusative = nominative
    this.gender = gender
    nouns.push(this)
}

var Verb = function (verb, case_) {
    this.verb = verb
    this.case_ = case_
    verbs.push(this)
}

var articles = {
    nominative: {m: "der", f: "die", n: "das"},
    genitive: {m: "des", f: "der", n: "des"},
    dative : {m: "dem", f: "der", n: "dem"},
    accusative : {m: "den", f: "die", n: "das"},
}

var adjectiveEndings = {
    nominative: {m: "e", f: "e", n: "e"},
    genitive: {m: "en", f: "en", n: "en"},
    dative : {m: "en", f: "en", n: "en"},
    accusative : {m: "en", f: "e", n: "e"},
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
    if (window.location.hostname !== "michi83.github.io") {
        alert("Dies ist eine Kopie des Schwurbomat. Das Original findest du auf https://michi83.github.io/schwurbomat/.")
        return null
    }
    var woo = ""
    shuffle(adjectives)
    shuffle(modifiers)
    shuffle(nouns)
    shuffle(verbs)
    woo += articles.nominative[nouns[0].gender] + " "
    woo += adjectives[0].adjective
    woo += adjectiveEndings.nominative[nouns[0].gender] + " "
    woo += modifiers[0].modifier
    woo += nouns[0].nominative + " "
    woo += verbs[0].verb + " "
    woo += articles[verbs[0].case_][nouns[1].gender] + " "
    woo += adjectives[1].adjective
    woo += adjectiveEndings[verbs[0].case_][nouns[1].gender] + " "
    woo += modifiers[1].modifier
    woo += nouns[1][verbs[0].case_] + " "
    woo += articles.genitive[nouns[2].gender] + " "
    woo += adjectives[2].adjective
    woo += adjectiveEndings.genitive[nouns[2].gender] + " "
    woo += modifiers[2].modifier
    woo += nouns[2].genitive + "."
    woo = capitalize(woo)
    return woo
}

var wooButton = document.getElementById("woo-button")
wooButton.addEventListener(
    "click",
    function () {
        var wooDiv = document.getElementById("woo")
        $(wooDiv).fadeOut(
            400,
            function () {
                var woo = generateWoo()
                wooDiv.innerHTML = woo
                var twitterButton = document.getElementById("twitter-button")
                var twitterHref = "https://twitter.com/intent/tweet"
                twitterHref += "?text=" + encodeURIComponent(woo)
                twitterHref += "&url=" + encodeURIComponent("https://michi83.github.io/schwurbomat/")
                twitterHref += "&hashtags=" + encodeURIComponent("Schwurbomat,Esoterik")
                twitterButton.href = twitterHref
                twitterButton.style.display = "inline"
                $(wooDiv).fadeIn()
            }
        );
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
new Adjective("hermetisch")
new Adjective("holographisch")
new Adjective("homöopathisch")
new Adjective("karmisch")
new Adjective("keltisch")
new Adjective("kosmisch")
new Adjective("magisch")
new Adjective("magnetisch")
new Adjective("männlich")
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
new Adjective("spirituell")
new Adjective("telepathisch")
new Adjective("theosophisch")
new Adjective("therapeutisch")
new Adjective("tonisierend")
new Adjective("transzendent")
new Adjective("universell")
new Adjective("weiblich")

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
new Modifier("Delfin")
new Modifier("Dimensions")
new Modifier("Einhorn")
new Modifier("Elementar")
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
new Modifier("Mars")
new Modifier("Meerjungfrauen")
new Modifier("Meta")
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
new Modifier("Venus")
new Modifier("Vollmond")
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
new Noun("energie", "energie", "f")
new Noun("essenz", "essenz", "f")
new Noun("feld", "felds", "n")
new Noun("flow", "flows", "m")
new Noun("frequenz", "frequenz", "f")
new Noun("heilung", "heilung", "f")
new Noun("homöopathie", "homöopathie", "f")
new Noun("horoskop", "horoskops", "n")
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

new Verb("augmentiert", "accusative")
new Verb("beherrscht", "accusative")
new Verb("belebt", "accusative")
new Verb("beschwört", "accusative")
new Verb("channelt", "accusative")
new Verb("durchströmt", "accusative")
new Verb("energetisiert", "accusative")
new Verb("entsteht durch", "accusative")
new Verb("entstört", "accusative")
new Verb("fließt durch", "accusative")
new Verb("gehorcht", "dative")
new Verb("harmonisiert", "accusative")
new Verb("harmonisiert mit", "dative")
new Verb("heilt", "accusative")
new Verb("informiert", "accusative")
new Verb("interferiert mit", "dative")
new Verb("kanalisiert", "accusative")
new Verb("neutralisiert", "accusative")
new Verb("ist", "nominative")
new Verb("potenziert", "accusative")
new Verb("reinigt", "accusative")
new Verb("resoniert mit", "dative")
new Verb("unterstützt", "accusative")
new Verb("verbindet", "accusative")
new Verb("verstärkt", "accusative")

