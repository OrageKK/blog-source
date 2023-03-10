const e=JSON.parse(`{"key":"v-6a069072","path":"/posts/iOS/ui/textfiled%E9%99%90%E5%88%B6%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6.html","title":"textfield限制输入字符","lang":"zh-CN","frontmatter":{"title":"textfield限制输入字符","date":"2017-05-21T00:00:00.000Z","category":["iOS"],"tag":["iOS"],"description":"记录一下限制输入字符的判断。不仅局限于中文或英文 首先在 ViewDidLoad 中注册通知 [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(textFieldEditChanged:) \\tname:@\\"UITextFieldTextDidChangeNotification\\" object:self.userTF];","head":[["meta",{"property":"og:url","content":"https://oragekk.github.io/posts/iOS/ui/textfiled%E9%99%90%E5%88%B6%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"textfield限制输入字符"}],["meta",{"property":"og:description","content":"记录一下限制输入字符的判断。不仅局限于中文或英文 首先在 ViewDidLoad 中注册通知 [[NSNotificationCenter defaultCenter]addObserver:self selector:@selector(textFieldEditChanged:) \\tname:@\\"UITextFieldTextDidChangeNotification\\" object:self.userTF];"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2017-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"textfield限制输入字符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1678429841000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"posts/iOS/ui/textfiled限制输入字符.md","localizedDate":"2017年5月21日","excerpt":"<blockquote>\\n<p>记录一下限制输入字符的判断。不仅局限于中文或英文</p>\\n</blockquote>\\n<ul>\\n<li>首先在 ViewDidLoad 中注册通知</li>\\n</ul>\\n<div class=\\"language-objc line-numbers-mode\\" data-ext=\\"objc\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">[[</span><span style=\\"color: #E5C07B\\">NSNotificationCenter</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">defaultCenter</span><span style=\\"color: #ABB2BF\\">]addObserver:</span><span style=\\"color: #E5C07B\\">self</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">selector:</span><span style=\\"color: #C678DD\\">@selector(</span><span style=\\"color: #61AFEF\\">textFieldEditChanged:</span><span style=\\"color: #C678DD\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">\\t</span><span style=\\"color: #61AFEF\\">name:</span><span style=\\"color: #98C379\\">@\\"UITextFieldTextDidChangeNotification\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">object:</span><span style=\\"color: #E5C07B\\">self</span><span style=\\"color: #ABB2BF\\">.userTF];</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Oragekk","license":"MIT"},"autoDesc":true}`);export{e as data};
