import scrapy
from AlbumReleaseScraper.items import ReleaseItem

class SputnikSpider(scrapy.Spider):
    name = "sputnik"
    start_urls = [
            'http://www.sputnikmusic.com',
    ]

    def parse(self, response):
        for row in response.xpath("//table[contains(tr/td/span/strong/span/text(),'TRENDING ALBUMS')]/tr/td/table/tr"):
            item = ReleaseItem()
            item['artist'] = row.xpath('.//font/text()').extract_first()
            item['album'] = row.xpath('.//font/span/text()').extract_first()
            yield item
