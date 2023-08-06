from typing import *
import royalnet
import royalnet.commands as rc
import random
import datetime


class FortuneCommand(rc.Command):
    name: str = "fortune"

    description: str = "Quanto sarai fortunato oggi?"

    syntax: str = ""

    _fortunes = [
        "😄 Oggi sarà una fantastica giornata!",
        "😌 Oggi sarà una giornata molto chill e rilassante.",
        "💰 Oggi sui tuoi alberi cresceranno più Stelline!",
        "🍎 Oggi un unicorno ti lascerà la sua Blessed Apple!",
        "📈 Oggi il tuo team in ranked sarà più amichevole e competente del solito!",
        "🏝 Oggi potrai raggiungere l'Isola Miraggio!",
        "🐱 Oggi vedrai più gatti del solito su Internet!",
        "🐶 Oggi vedrai più cani del solito su Internet!",
        "🐦 Oggi vedrai più uccelli del solito su Internet!",
        "🐌 Oggi incontrerai una chiocciola sperduta!",
        "🎁 Oggi i dispenser di regali in centro funzioneranno senza problemi!",
        "🥕 Oggi il tuo raccolto avrà qualità Iridium Star!",
        "🔴 Oggi troverai più oggetti di rarità rossa del solito!",
        "✨ Oggi farai molti più multicast!",
        "♦️ Oggi troverai una Leggendaria Dorata!",
        "⭐️ Oggi la stella della RYG ti sembrerà un pochino più dritta!",
        "💎 Oggi i tuoi avversari non riusciranno a deflettere i tuoi Emerald Splash!",
    ]

    async def run(self, args: rc.CommandArgs, data: rc.CommandData) -> None:
        author = await data.get_author()
        today = datetime.date.today()

        h = author.uid * hash(today)

        r = random.Random(x=h)

        message = r.sample(self._fortunes, 1)[0]
        await data.reply(message)
