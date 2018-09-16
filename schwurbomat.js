var Markov = function(length)
{
    this.length = length
    this.data = {}
}

Markov.prototype =
{
    analyze: function(verse)
    {
        for (var i = 0; i < this.length; i++)
        {
            verse = '^' + verse
        }
        verse += '$'
        for (var i = 0; i < verse.length - this.length; i++)
        {
            var current = verse.substring(i, i + this.length)
            var next = verse.charAt(i + this.length)
            if (!(current in this.data))
            {
                this.data[current] = []
            }
            this.data[current].push(next)
        }
    },

    generate: function()
    {
        verse = ''
        for (var i = 0; i < this.length; i++)
        {
            verse += '^'
        }
        while (verse.charAt(verse.length - 1) != '$')
        {
            current = verse.substring(verse.length - this.length)
            next = draw(this.data[current])
            verse += next
        }
        return verse.substring(this.length, verse.length - 1)
    }
}

var analyzeEverything = function()
{
    var length = parseInt(document.getElementById('length').value)
    markov = new Markov(length)
    for (var i = 0; i < woo.length; i++)
    {
        var verse = woo[i]
        markov.analyze(verse)
    }
}

var draw = function(urn)
{
    return urn[Math.floor(urn.length * Math.random())]
}

var generateVerse = function()
{
    var verse = markov.generate()
    document.getElementById('verse').innerHTML = verse
}

var woo =
[
    'Die Erkenntnisse der Quantenphysik ermöglichen, Bioresonanz auf völlig neue Art und Weise therapeutisch zu nutzen.',
    'Mittels moderner Informations- bzw. Energiemedizin können alltägliche elektronische Geräte als Resonanzverstärker umfunktioniert und zu therapeutischen Zwecken eingesetzt werden.',
    'Biofeld- oder Energietherapien gehören längst zum Standard der Alternativmedizin.',
    'Die Verfahren der Bioresonanz zählen hierbei sicherlich zu den populärsten, nicht zuletzt weil mit ihnen diagnostiziert und therapiert werden kann.',
    'Diese Popularität findet jedoch kaum Entsprechung in der Schulmedizin, welche Bioresonanz diskreditiert und ihr die Daseinsberechtigung abspricht.',
    'Die Annahme, körpereigene Schwingungen von außen verändern zu können, wird als Esoterik und Scharlatanerie abgetan.',
    'Interessanterweise übersieht man dabei, dass resonierende Schwingungen z.B. auch in der Schulmedizin fester Bestandteil der Diagnostik und Therapie sind (z.B. bildgebende Verfahren oder Hochfrequenztherapie).',
    'Die Tradition der Bioresonanz reicht, das wird gerne übersehen, weiter zurück als bis zu Morell und Rasche.',
    'Von der Pionierarbeit des amerikanischen Arztes Albert Abrams bis zu dem kroatischen Jahrhundertgenie Nikola Tesla liegen zahlreiche theoretische wie empirische Belege vor, die zeigen, dass energetische Schwingungen das Grundprinzip des Lebens sind.',
    'Nicht zuletzt die Quantenphysik bestätigt das.',
    'Laut einer ihrer Kernaussagen hat Materie, und somit Gesundheit, im Grunde keine materielle, sondern eine energetische Basis.',
    'Denn letztlich bleibt jenseits von Atomen Energie als kohärenzbildende Substanz.',
    'Diese Energie manifestiert sich in schwingender Information.',
    'Krankheit ist folglich eine dysfunktionale biologische Schwingung.',
    'Solche Störschwingungen, die die Physik destruktive Interferenz nennt, können mittels konstruktiver Interferenz aufgehoben werden.',
    'Das ist auch das Prinzip der elektronischen Bioresonanzgeräte, welche körpereigene Schwingungen über eine Eingangselektrode in das Gerät einleiten, verstärken und invertieren, und dann wieder über eine Ausgangselektrode in den Körper zurückleiten.',
    'Vereinfacht ausgedrückt spiegeln Bioresonanzgeräte Frequenzbereiche dadurch, dass zwischen den Verstärkungsstufen die Plus- und Masse-Verbindungen miteinander vertauscht werden.',
    'Es lässt sich leicht erkennen, dass (zumindest die ursprünglichen) Bioresonanzgeräte Prinzipien der HiFi-Technik anwenden, bei denen Vorverstärker zum Einsatz kommen, um das Ausgangssignal breitbandig zu machen.',
    'Die moderne Informations- und Energiemedizin vor allem russischer Prägung hat das Prinzip der konstruktiven Interferenz so weiter entwickelt, dass weder Eingangs- oder Ausgangselektroden noch ein eigenes elektronisches Gerät als Verstärker benötigt werden.',
    'Das geht mit besonderen Speichermedien, auf denen z.B. Frequenzen akustisch oder quantenoptisch gespeichert sind.',
    'In Verbindung mit einem Hochfrequenzfelder produzierenden Gerät wie etwa dem z.B. dem Handy wird dieses zu einem Bioresonanzgerät.',
    'Manche dieser Medien arbeiten mit Skalarwellen, die z.B. subatomare Partikel der Zellionen im Uhrzeigersinn drehen.',
    'Diese Drehung verursacht eine positive Vortex-Polarität und damit eine Energetisierung und Regeneration.',
    'Das Besondere ist nun, dass solche Speichermedien ganz beliebig bespielt werden können.',
    'Auf dem Vita Chip z.B. sind Frequenzen gespeichert, die aus der optimierten Referenzinformation von 1.300 gesunde Meridianen und 200.000 Messpunkten entstammen.',
    'Diese Information wechselwirkt mit dem Zielsystem (der Zelle) und stellt dort Kohärenz her.',
    'Kohärente Schwingungsmuster erlauben der Zelle optimales Funktionieren.',
    'Inkohärenz bedeutet Zellstress und im Extremfall Zelltod.',
    'Die positive Wirkung bleibt solange bestehen, wie eine ausreichende Nähe des Vita Chip zum Körper gewährleistet ist.',
    'Die flächendeckende Ausstattung z.B. der Wohnung schafft eine störfreie Umgebung, die Regenerations- und Leistungsfähigkeit erheblich steigert.',
    'Angesichts der eklatanten Gefahren gerade des Mobilfunks erscheint der Einsatz hochfrequenter Felder zu therapeutischen Zwecken geradezu ketzerisch.',
    'Schließlich rät gerade die Alternativmedizin vom Einsatz künstlicher elektromagnetischer Felder nicht nur ab, sondern fordert darüber hinaus mehr aktiven Schutz durch die Behörden.',
    'Interessanterweise gilt die Behauptung, Schaden durch Informationstechnologie zu neutralisieren, ebenfalls als Esoterik.',
    'Die Behauptung gar, EMF als Träger zum Schutz nutzen zu können, gilt gar als Scharlatanerie.',
    'Allerdings liegen für den Vita Chip zahlreiche empirische Belege für eine revitalisierende und leistungsverbessernde Wirkung vor.',
    'Sie reichen von chronischen Erkrankungen bis zu Immunerkrankungen.',
    'Es stimmt zwar, dass Informationstechnologie nicht in der Lage ist, E-Smog-Emission zu reduzieren.',
    'Aber die positive Wirkung kommt über die Wechselwirkung mit dem Organismus zustande und muss daher auch dort gemessen werden.',
    'Die Könige vergangener Jahrhunderte hatten ihre Hofastrologen, die ihnen jeweils den günstigsten Zeitpunkt für bestimmte Entscheidungen und Aktionen anhand der Sternenkonstellationen nannten.',
    'Selbst der Weggefährte Luthers, Philipp Melanchthon, war Astrologe und versuchte, die Astrologie für die Sache der Reformation zu nutzen.',
    'Gleichwohl, Luther selbst war als entschiedener Gegner der Astrologie bekannt, zumal die Katholische Kirche ihn mittels seines Geburtshoroskops zum „Anti-Christen“ hochstilisierte.',
    'Das sind 500 Jahre her – ist also Astrologie noch zeitgemäß oder doch Aberglaube aus magischen Zeiten vor der Aufklärung?',
    'Eva Lambrich schildert anhand ihrer Biographie, dass sie schon als Kind durch eine Tante, die Astrologie betrieb, davon fasziniert war und jeden fragte: „Was bist du denn für ein Sternzeichen?“',
    'Natürlich konnte sie damals das alles noch nicht wirklich „einkategorisieren“, aber es entwickelte sich ein Gefühl für die Menschentypen des jeweiligen Sternzeichens, unter dem sie geboren waren.',
    'Das meiste von dem, womit sie heute Menschen berät, hat sie sich im Selbststudium angeeignet, sie hatte aber durchaus auch Lehrer.',
    'Ein ganz praktisches Beispiel, wozu diese Erfahrungswissenschaft im Alltag dienen kann: Keine Verträge oder weitreichende ökonomische Entscheidungen beim einem „rückläufigen“ Merkur.',
    'Die Wahrscheinlichkeit, dass es bei in dieser Zeit abgeschlossenen Verträgen zu Komplikationen führt, ist sehr hoch.',
    'Bereits seit der Gründung der Rayonex beschäftigen wir uns mit der Entwicklung von biofeldformenden Geräten.',
    'Gemäß der Bioresonanz nach Paul Schmidt wurden diejenigen Frequenzspektren ermittelt, die durch geologische Störzonen (Gitter, Wasseradern, Verwerfungen, ...) auf den Organismus destabilisierend einwirken.',
    'Die Duplex-Biofeldformer enthalten im Innern ein Resonanzsystem, welches auf die Frequenzspektren der geologischen Störzonen abgestimmt ist.',
    'Diese werden durch den Duplex bipolar – für den Menschen gemäß der Bioresonanz nach Paul Schmidt regulierend – in den Raum abgegeben.',
    'Warum wurde die Neuentwicklung des Duplex IV notwendig?',
    'Der Grund liegt in den veränderten Umweltbedingungen, die nicht nur auf uns Menschen wirken, sondern auch die biofeldformenden Geräte belasten.',
    'Durch das gestiegene Belastungspotenzial können die alten Duplex - Geräte die Frequenzspektren heute nicht mehr in der ursprünglichen und notwendigen Intensität abgeben.',
    'In aller erster Linie ist es der extrem stark gewordene Elektrosmog, der die Neuentwicklung notwendig machte.',
    'Die Duplex III - Generation wurde bereits auf die veränderten Umweltbedingungen hin optimiert.',
    'Wenn keine zu starken geopathischen Belastungen vorliegen sind diese Geräte weiterhin problemlos einsetzbar.',
    'Liegen aber starke Belastungen durch Elektrosmog - vorzugsweise durch impulsmodulierte Einstrahlungen vor - empfiehlt sich grundsätzlich der neue Duplex IV, der aktuell das leitungsstärkste biofeldformende Gerät der Rayonex darstellt.',
    'Mit der Bioresonanz nach Paul Schmidt lässt sich das abklingende Belastungspotenzial nach Aufstellung des Duplex IV zeigen.',
    'Dieser Prozess kann manchmal bis zu einem halben Jahr dauern.',
    'Damit das Gerät unter starken Belastungen seine eigene Polarität nicht verändern kann, wurde es vollständig aus einer speziellen Edelstahllegierung gefertigt.',
    'Auf diese Weise wurde die bislang übliche Erdung des Gerätes überflüssig.',
    'Zusätzlich wurde die Intensität der abgegebenen Frequenzen erhöht. Auch ist der neue Duplex IV unempfindlich gegen negative Einflüsse des Aufstellortes.',
    'Quantenmedizin ist eine Medizinform, die die neuesten naturwissenschaftlichen Erkenntnisse der Physik, besonders der Quantenphysik und Post-Quantenphysik, der Bewusstseinsphysik für die Diagnose und Therapie einbezieht.',
    'Sie ist eine neue Wissenschaftsmedizin von lebenden, nichtlinearen Systemen, zu denen alle adaptiven, kybernetischen Organfunktionen des menschlichen Organismus gehören.',
    'Quantenmedizin wendet die naturwissenschaftlichen Forschungsergebnisse der neuesten Physik an.',
    'Hierbei spielen die Erkenntnisse der Quantenphysik eine herausragende Rolle.',
    'Max Planck entdeckte Ende des 19. Jahrhunderts das nach ihm benannte Plancksche Wirkungsquantum eines Photons des Lichtes, die kleinste bis heute fassbare Energieeinheit.',
    'Durch die Entdeckungen der Quantenphysik im atomaren und subatomaren Bereich entstanden völlig neue Gesetze der Physik, die das Weltbild und Gültigkeit der klassischen Physik revolutionierten:',
    'Die alten Gesetze von Isaac Newton von der absoluten Raum und Zeit wurden durch Albert Einstein Anfang des 20. Jahrhunderts relativiert und von weiteren Physikern aufgehoben (John Barbour 1999).',
    'Der Glaube an eine feste Materie wurde um 1925 durch die Kopenhagener Deutung von Werner Heisenberg und Nils Bohr sowie der Wellengleichung von Erwin Schrödinger erschüttert.',
    'Carlo Rubia erhielt 1984 den Nobelpreis dafür, dass er nachweisen konnte, dass die Materie nur aus einem milliardstel Teil an Masse besteht.',
    'Die übrigen Teile konnten die Physiker nicht messen und bezeichneten sie als Vakuum.',
    'Die Masse war das Einzige, um die sich die klassische Physik und Wissenschaftsmedizin kümmert.',
    'Paul Davies entdeckt 1990 wie sich der Spin von Elektronen und dadurch die Bindungsfähigkeit von Atomen durch unsere Gedankenvorstellungen ändert.',
    'Er kam zu der Erkenntnis, daß die "Natur ein Sklave unserer geistigen Vorstellungen" sei.',
    'Das bedeutet, dass der Mensch die Natur Kraft seines Geistes durch Information beeinflussen kann.',
    'Die Quantenphysik ist eine Physik der Information und der Beziehungen von einzelnen Teilchen untereinander (Anton Zeilinger).',
    'Die Quantenmedizin ist eine Informationsmedizin.',
    'Sie wendet die Entdeckungen und Forschungsergebnisse der Quantenphysik auf das ganzheitliche System des menschlichen Organismus an und ist eine neue Wissenschaftsmedizin.',
    'Das wichtigste und bedeutendste Fachgebiet der Quantenmedizin ist die Energie-Informationsmedizin.',
    'Weitere Gebiete, die dazu zählen sind die Regulationsmedizin und die Individualmedizin.',
    'Fehlerhafte Informationen erzeugen Krankheit durch gestörte Ordnung.',
    'Gesundheit beinhaltet optimale Ordnung von richtigen Informationen.',
    'Therapie besteht darin, die Ordnung durch Informationsveränderung am rechten Ort und zu rechten Zeit wiederherzustellen.',
    'Der menschliche Organismus wird mit Hilfe eines Informationspools oder einer nicht materiellen, geistigen Informationsmatrix aufgebaut und kontinuierlich davon in "Gang" gehalten.',
    'Zur Erhaltung des Lebens fließt eine permanente, korrekte Information auf den Menschen zu!',
    'Quantenmedizin benutzt neben den physikalischen Erkenntnissen die neuen Erkenntnisse der Quantenchemie und der Quantenbiologie, ebenso die Erkenntnisse der traditionellen Heilmethoden wie die der Ayurvedischen Medizin, der Chinesischen Medizin, der Homöopathischen Medizin, der Phytotherapie und weiteren naturheilkundlichen Methoden.',
    'Das Gemeinsame und Verbindende ist die Übertragung von Informationen.',
    'Bei manchen funktioniert diese Informationsübertragung seit vielen tausenden von Jahren: in der Ayurvedischen Medizin seit ca 5000 Jahren, in der Chinesischen Medizin ca 2000 Jahren, in der Homöopathischen Medizin seit ca 200 Jahren und in der Energie-Informationsmedizin seit ca. 30 Jahren.',
    'Die Grundfrage der Quantenmedizin lautet: Wie kann eine Information optimal aus einem Pool eines informativen Feldes erkannt, erfasst und therapeutisch verwendet werden?',
    'Die Möglichkeiten der Informationsübertragung ist durch die Computertechnik, eine Ergebnis der Quantenphysik, der gewaltig gestiegen.',
    'Dadurch ist es heute möglich eine enorme Mengen an Informationen in kürzester Zeit an jeden beliebigen Ort des menschlichen Körpers nichtinvasiv und nebenwirkungsfrei zu transferieren.',
    'Mit Hilfe dieser modernsten Informationstechnologie kann der Arzt in kürzester Zeit durch Schwingungsanalysen Krankheiten erkennen, lokalisieren, die Ursachen erfassen und die passende Therapie einleiten.',
    'Die Geräte, die mit diesen Techniken arbeiten sind: Oberon, Ingenium, Vitatec und Scenar.',
    'Mit Hilfe des Resonanzprinzips können diese neuen technischen Geräte Krankheiten schnell und erstaunlich sicher erkennen und die gewünschten therapeutischen Informationen übertragen.',
    'Dadurch können Heilhindernisse beseitigt und Therapieblockaden aufgehoben werden und die Selbstheilungskräfte ihr Wirkung entfalten.',
    'Diese Untersuchungsgeräte sind ein wesentlicher Bestandteil unserer Heidelberger Ganzheitsmedizin hdg.',
    'Die Quantenmedizin kann bei allen lebenden, nichtlinearen Systemen des menschlichen Organismus angewandt und als eine revolutionäre Methode der neuesten naturwissenschaftlichen Erkenntnisse betrachtet werden.',
    'Bei diesen Behandlungsmethoden spielt das Bewusstsein des Therapeuten eine alles entscheidende Rolle.',
    'Jedes technische Gerät kann nur soviel leisten, wie das geschulte Bewusstsein des Anwenders es zu lässt.',
    'Ein geschultes Bewusstsein kann die hinter einer Krankheit liegenden Ursachen berühren.',
    'Deshalb kann ein Gerät nur den Therapieerfolg bringen, der durch die Intention, durch das Bewusstsein des Therapeuten zu entstehen vermag.',
]
