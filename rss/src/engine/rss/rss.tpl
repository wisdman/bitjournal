<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:yandex="http://news.yandex.ru" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>BitJournal</title>
    <link>https://bitjournal.io</link>
    <language>ru</language>
    <copyright>Сopyright 2017, BitJournal</copyright>
    <description>Команда BitJournal выбирает для вас самые важные новости и готовит лучшие тексты из мира криптоиндустрии — все о самых грандиозных ICO в истории, огромных майнинг-фермах про летящий на луну биткоин и многое другое</description>
    <image>
      <url>https://bitjournal.io/logo-100x100.png</url>
      <title>BitJournal</title>
      <link>https://bitjournal.io</link>
      <width>100</width>
      <height>100</height>
    </image>
    <yandex:logo type="square">https://bitjournal.io/logo-100x100.png</yandex:logo>
    <atom:link href="https://bitjournal.io/rss" rel="self" type="application/rss+xml" />
    {{~it.items :item:index}}
      <item>
        <guid>{{=item.link}}</guid>
        <title>{{=item.title}}</title>
        <link>{{=item.link}}</link>
        <pdalink>{{=item.link}}</pdalink>
        <comments>{{=item.link}}#comments</comments>
        <description>{{=item.description}}</description>
        <author>{{=item.author}}</author>
        <enclosure url="{{=item.image}}" type="image/jpeg"/>
        <pubDate>{{=item.pubDate}}</pubDate>
        <yandex:full-text>{{=item.clearText}}</yandex:full-text>
      </item>
    {{~}}
  </channel>
</rss>
