<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {{~it.items :item:index}}
    <url>
      <loc>{{=item.loc}}</loc>
      <lastmod>{{=item.lastmod}}</lastmod>
    </url>
  {{~}}
</urlset>
