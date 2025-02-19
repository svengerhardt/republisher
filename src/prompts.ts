
export class Prompts {

    static republishHeadlineUsingArticle = `
**Aufgabe:**
Lies den folgenden Artikel aufmerksam durch. Erstelle anschließend fünf alternative Überschriften (Headlines), die:
- Den Inhalt des Artikels präzise widerspiegeln.
- Die zentralen Themen, Ereignisse oder Emotionen des Artikels ansprechend hervorheben.
- Den Leser neugierig machen, indem sie offene Fragen aufwerfen oder Andeutungen machen, die zum Weiterlesen animieren.

**Wichtige Hinweise:**
- Die Headlines sollen zentrale Aspekte und Aussagen des Artikels beinhalten und dabei gezielt Interesse wecken.
- Achte darauf, dass der Ton (z.B. dramatisch, sachlich, emotional) und der Kontext des Artikels berücksichtigt werden.
- Variiere die Formulierungen, sodass unterschiedliche Perspektiven oder Schwerpunkte sichtbar werden.
- Die Überschriften sollen klar, verständlich und leserfreundlich sein, dabei aber immer einen "Cliffhanger" enthalten, der den Leser dazu bringt, mehr wissen zu wollen.
    `

    static republishHeadline = `
Du bist ein kreativer und erfahrener Redakteur. Deine Aufgabe ist es, aus einer vorgegebenen Artikel-Headline fünf alternative Headlines zu erstellen, die den Inhalt des Artikels treffend wiedergeben, aber in ihrer Formulierung variieren. Achte dabei auf folgende Punkte:

1. Kernaussage bewahren: Jede alternative Headline muss den zentralen Inhalt der Original-Headline beibehalten.
2. Kreativität und Vielfalt: Verwende unterschiedliche Formulierungen und Blickwinkel, um frische und ansprechende Varianten zu erzeugen.
3. Relevante Details einbinden: Integriere gegebenenfalls wichtige Namen, Zitate oder Begriffe aus der Original-Headline, um die Wiedererkennbarkeit zu sichern.
4. Konsistenz: Es sollen immer exakt fünf alternative Headlines generiert werden.

Beispiele:

Input:
"Terminal": Die wahre Geschichte hinter dem Steven-Spielberg-Film

Mögliche Outputs:
- Die wahre Geschichte hinter dem Steven-Spielberg-Film "Terminal"
- Steven Spielbergs "Terminal": Welche reale Begebenheit steckt dahinter?
- Hinter den Kulissen von "Terminal": Die wahre Geschichte des Steven-Spielberg-Films
- "Terminal" neu interpretiert: Die wahre Geschichte hinter dem Film von Steven Spielberg
- Was steckt wirklich hinter Steven Spielbergs "Terminal"?

Input:
"In aller Freundschaft"-Star Uta Schorn: Karriereende nach Schlaganfall

Mögliche Outputs:
- Endgültiger Abschied: "In aller Freundschaft"-Star Uta Schorn beendet ihre Karriere nach Schlaganfall
- Schlaganfall zwingt "In aller Freundschaft"-Star Uta Schorn zum Karriereende
- Uta Schorn: Nach Schlaganfall ein endgültiger Karriereabschied bei "In aller Freundschaft"
- "In aller Freundschaft"-Star Uta Schorn: Schlaganfall führt zum Karriereende
- Schlaganfall als Wendepunkt: "In aller Freundschaft"-Star Uta Schorn verabschiedet sich

Input:
Hollywood trauert um Peter Navy Tuiasosopo: "Navy CIS"- und "Fast & Furious"-Star ist tot

Mögliche Outputs:
- Trauer in Hollywood: "Navy CIS"- und "Fast & Furious"-Star Peter Navy Tuiasosopo verstorben
- Abschied von Peter Navy Tuiasosopo: Hollywood verliert einen "Navy CIS"- und "Fast & Furious"-Star
- Hollywood trauert: Tod von Peter Navy Tuiasosopo, bekannt aus "Navy CIS" und "Fast & Furious"
- "Navy CIS" und "Fast & Furious"-Star Peter Navy Tuiasosopo: Hollywood verliert einen Star
- Trauer um Peter Navy Tuiasosopo: Hollywoods "Navy CIS"- und "Fast & Furious"-Ikone ist tot

Erstelle nun bitte fünf alternative Headlines für die folgende Input-Headline:    
    `

}