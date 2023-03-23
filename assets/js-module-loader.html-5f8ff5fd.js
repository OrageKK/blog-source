const e=JSON.parse(`{"key":"v-138a56d7","path":"/posts/Web/JavaScript/js-module-loader.html","title":"CommonJS，RequireJS，SeaJS 归纳笔记","lang":"zh-CN","frontmatter":{"title":"CommonJS，RequireJS，SeaJS 归纳笔记","date":"2015-05-25T00:00:00.000Z","category":["JavaScript"],"tag":["前端开发","JavaScript"],"description":"Foreword Here comes Module! 随着网站逐渐变成「互联网应用程序」，嵌入网页的 JavaScript 代码越来越庞大，越来越复杂。网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试……我们不得不使用软件工程的方法，来管理网页的业务逻辑。 于是，JavaScript 的模块化成为迫切需求。在 ES6 Module 来临之前，JavaScript 社区提供了强大支持，尝试在现有的运行环境下，实现模块的效果。 Catalog","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/Web/JavaScript/js-module-loader.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"CommonJS，RequireJS，SeaJS 归纳笔记"}],["meta",{"property":"og:description","content":"Foreword Here comes Module! 随着网站逐渐变成「互联网应用程序」，嵌入网页的 JavaScript 代码越来越庞大，越来越复杂。网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试……我们不得不使用软件工程的方法，来管理网页的业务逻辑。 于是，JavaScript 的模块化成为迫切需求。在 ES6 Module 来临之前，JavaScript 社区提供了强大支持，尝试在现有的运行环境下，实现模块的效果。 Catalog"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:published_time","content":"2015-05-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CommonJS，RequireJS，SeaJS 归纳笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2015-05-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"Foreword","slug":"foreword","link":"#foreword","children":[]},{"level":2,"title":"Catalog","slug":"catalog","link":"#catalog","children":[]},{"level":2,"title":"CommonJS & Node","slug":"commonjs-node","link":"#commonjs-node","children":[]},{"level":2,"title":"History","slug":"history","link":"#history","children":[]},{"level":2,"title":"RequireJS & AMD","slug":"requirejs-amd","link":"#requirejs-amd","children":[{"level":3,"title":"1. 执行时机","slug":"_1-执行时机","link":"#_1-执行时机","children":[]},{"level":3,"title":"2. 书写风格","slug":"_2-书写风格","link":"#_2-书写风格","children":[]}]},{"level":2,"title":"SeaJS & CMD","slug":"seajs-cmd","link":"#seajs-cmd","children":[]},{"level":2,"title":"AMD vs CMD","slug":"amd-vs-cmd","link":"#amd-vs-cmd","children":[]},{"level":2,"title":"WebPack","slug":"webpack","link":"#webpack","children":[]}],"git":{"createdTime":1678429841000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":7.82,"words":2345},"filePathRelative":"posts/Web/JavaScript/js-module-loader.md","localizedDate":"2015年5月25日","excerpt":"<h2> Foreword</h2>\\n<blockquote>\\n<p>Here comes Module!</p>\\n</blockquote>\\n<p>随着网站逐渐变成「互联网应用程序」，嵌入网页的 JavaScript 代码越来越庞大，越来越复杂。网页越来越像桌面程序，需要一个团队分工协作、进度管理、单元测试……我们不得不使用软件工程的方法，来管理网页的业务逻辑。</p>\\n<p>于是，JavaScript 的模块化成为迫切需求。在 ES6 Module 来临之前，JavaScript 社区提供了强大支持，尝试在现有的运行环境下，实现模块的效果。</p>\\n<hr>\\n<h2> Catalog</h2>","copyright":{"author":"Oragekk","license":"MIT"},"autoDesc":true}`);export{e as data};
