const e=JSON.parse(`{"key":"v-76f48372","path":"/posts/iOS/ui/cell%E5%A4%8D%E7%94%A8-accessoryType%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html","title":"Cell的accessoryType属性标记单元格之后，出现的重用问题","lang":"zh-CN","frontmatter":{"title":"Cell的accessoryType属性标记单元格之后，出现的重用问题","date":"2017-02-13T00:00:00.000Z","category":["iOS"],"tag":["iOS","Bug录"],"description":"今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。 解决办法 把 tableView 的 allowsMultipleSelection 属性设为了 YES； _tableView.allowsMultipleSelection = YES; 在 didSelectRowAtIndexPath 和 didDeselectRowAtIndexPath 方法里面使用了如下方法实现了点击单元格然后用 check mark 标记的方式。","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/iOS/ui/cell%E5%A4%8D%E7%94%A8-accessoryType%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"Cell的accessoryType属性标记单元格之后，出现的重用问题"}],["meta",{"property":"og:description","content":"今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。 解决办法 把 tableView 的 allowsMultipleSelection 属性设为了 YES； _tableView.allowsMultipleSelection = YES; 在 didSelectRowAtIndexPath 和 didDeselectRowAtIndexPath 方法里面使用了如下方法实现了点击单元格然后用 check mark 标记的方式。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:tag","content":"Bug录"}],["meta",{"property":"article:published_time","content":"2017-02-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cell的accessoryType属性标记单元格之后，出现的重用问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-02-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[{"level":3,"title":"重点来了 两种思路","slug":"重点来了-两种思路","link":"#重点来了-两种思路","children":[]},{"level":3,"title":"至此已完美解决因为复用所导致的问题","slug":"至此已完美解决因为复用所导致的问题","link":"#至此已完美解决因为复用所导致的问题","children":[]}]}],"git":{"createdTime":1678429841000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"posts/iOS/ui/cell复用-accessoryType解决办法.md","localizedDate":"2017年2月13日","excerpt":"<blockquote>\\n<p>今天项目里出现一个问题，就是做一个列表选择，然后点击导航栏的确定按钮返回上级界面，并把选择的 cell 数据传递到上级界面。再使用 accessoryType 属性标记单元格之后会出现重用问题。</p>\\n</blockquote>\\n<h2> 解决办法</h2>\\n<ul>\\n<li>\\n<p>把 tableView 的 allowsMultipleSelection 属性设为了 YES；</p>\\n<div class=\\"language-objc line-numbers-mode\\" data-ext=\\"objc\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">_tableView.allowsMultipleSelection </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">YES</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p>在 didSelectRowAtIndexPath 和 didDeselectRowAtIndexPath 方法里面使用了如下方法实现了点击单元格然后用 check mark 标记的方式。</p>\\n</li>\\n</ul>","copyright":{"author":"Oragekk","license":"MIT"},"autoDesc":true}`);export{e as data};
