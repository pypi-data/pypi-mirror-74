from typing import *
import aiohttp
import urllib.parse
import royalnet.commands as rc

from .play import PlayCommand


class FunkwhaleCommand(PlayCommand):
    name: str = "funkwhale"

    aliases = ["fuckwhale", "fw", "royalwhale", "rw"]

    description: str = "Cerca una canzone su RoyalWhale e aggiungila alla coda della chat vocale."

    syntax = "{ricerca}"

    def get_embed_color(self):
        return 0x009FE3

    async def get_urls(self, args):
        search = urllib.parse.quote(args.joined(require_at_least=1))
        async with aiohttp.ClientSession() as session:
            async with session.get(self.config["Funkwhale"]["instance_url"] +
                                   f"/api/v1/search?query={search}") as response:
                if response.status >= 400:
                    raise rc.ExternalError(f"Request returned {response.status}")
                j = await response.json()
        if len(j["tracks"]) < 1:
            raise rc.UserError("Nessun file audio trovato con il nome richiesto.")
        return [f'{self.config["Funkwhale"]["instance_url"]}{j["tracks"][0]["listen_url"]}']
