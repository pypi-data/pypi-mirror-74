from typing import *
import royalnet.commands as rc
import aiohttp
import urllib.parse

from .lazyplay import LazyplayCommand


class LazypeertubeCommand(LazyplayCommand):
    name: str = "lazypeertube"

    aliases = ["lpt", "lazyroyaltube", "lrt"]

    description: str = "Cerca un video su RoyalTube e lo aggiunge (lazy) alla coda della chat vocale."

    syntax = "{ricerca}"

    async def get_urls(self, args):
        search = urllib.parse.quote(args.joined(require_at_least=1))
        async with aiohttp.ClientSession() as session:
            async with session.get(self.config["Peertube"]["instance_url"] +
                                   f"/api/v1/search/videos?search={search}") as response:
                j = await response.json()
        if j["total"] < 1:
            raise rc.InvalidInputError("Nessun video trovato.")
        return [f'{self.config["Peertube"]["instance_url"]}/videos/watch/{j["data"][0]["uuid"]}']
