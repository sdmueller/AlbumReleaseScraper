# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html


class AlbumreleasescraperPipeline(object):
    def process_item(self, item, spider):
        if item['artist']:
            item['artist'] = str(item['artist']).strip()
        if item['album']:
            item['album'] = str(item['album']).strip()
        return item
