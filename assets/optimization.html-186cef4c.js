import{_ as p,r as o,o as c,c as r,h as t,a as s,b as n,d as l,e}from"./app-ed7e03fd.js";const i={},B=e('<div class="hint-container info"><p class="hint-container-title">相关信息</p><p>永远不要过早优化，优化也有相应的代价</p><ul><li>开发时间变长</li><li>开发成本增加</li><li>代码难以阅读</li><li>增加维护成本</li></ul><p>何时优化，因地制宜，是一门艺术，尽量把优化的思想带入写代码的过程中</p></div><p>本文章的优化手段基于<code>vue2</code></p>',2),d=e(`<h2 id="服务端渲染-ssr-or-预渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染-ssr-or-预渲染" aria-hidden="true">#</a> 服务端渲染 SSR or 预渲染</h2><p>客户端渲染：使用 JavaScript 框架进行页面渲染 服务端渲染：服务端将HTML文本组装好，并返回给浏览器，这个HTML文本被浏览器解析之后，不需要经过 JavaScript 脚本的执行，即可直接构建出希望的 DOM 树并展示到页面中，最后将这些静态标记&quot;激活&quot;为客户端上完全可交互的应用程序。</p><p><strong>优点：</strong></p><p>更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。对客户端渲染的页面来说，简直无能为力，因为返回的HTML是一个空壳，它需要执行 JavaScript 脚本之后才会渲染真正的页面。 用户将会更快速地看到完整渲染的页面</p><p><strong>缺点:</strong></p><p>为了实现服务端渲染，应用代码中需要兼容服务端和客户端两种运行情况 由于服务器增加了渲染HTML的需求，使得原本只需要输出静态资源文件的nodejs服务，新增了数据获取的IO和渲染HTML的CPU占用， 服务器渲染应用程序，需要处于 Node.js server 运行环境。</p><h3 id="如何实现" tabindex="-1"><a class="header-anchor" href="#如何实现" aria-hidden="true">#</a> 如何实现？</h3><p>想要在服务器端渲染，我们需要做什么呢？那就是同构我们的项目，Vue.js 是构建客户端应用程序的框架，服务器渲染的 Vue.js 应用程序也可以被认为是&quot;同构&quot;或&quot;通用&quot;，因为应用程序的大部分代码都可以在服务器和客户端上运行</p><p>当运行在不同环境中时，我们的代码将不会完全相同，同构就是让一份代码，既可以在服务端中执行，也可以在客户端中执行，并且执行的效果都是一样的，都是完成这个html的组装，正确的显示页面。 对于同构应用来说，我们必须实现客户端与服务端的路由、模型组件、数据模型的共享。</p><h3 id="服务器端渲染注意事项" tabindex="-1"><a class="header-anchor" href="#服务器端渲染注意事项" aria-hidden="true">#</a> 服务器端渲染注意事项</h3><p>为避免造成交叉请求状态污染，每个请求应该都是全新的、独立的应用程序实例。 由于没有动态更新，所有的生命周期钩子函数中，只有 beforeCreate 和 created 会在服务器端渲染(SSR)过程中被调用。 通用代码不可接受像 window 或 document，这种仅浏览器可用的全局变量 浏览器可能会更改的一些特殊的 HTML 结构，例如，浏览器会在</p><p>内部自动注入 ，然而，由于 Vue 生成的虚拟 DOM(virtual DOM) 不包含 ，所以会导致无法匹配。</p><h2 id="使用key" tabindex="-1"><a class="header-anchor" href="#使用key" aria-hidden="true">#</a> 使用key</h2><p>对于通过循环生成的列表，应给每个列表项一个稳定且唯一的key，这有利于在列表变动时，尽量少的删除、新增、改动元素</p><h2 id="使用冻结的对象" tabindex="-1"><a class="header-anchor" href="#使用冻结的对象" aria-hidden="true">#</a> 使用冻结的对象</h2><p>冻结的对象不会被响应化，如果对象很多，嵌套结构很深，遍历过程需要花费很多时间，如果对象不需要动态更改，可以使用冻结对象，如：商品列表等纯展示页面，并不会通过用户交互来更改</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 冻结对象</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">freeze</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 尝试更改</span></span>
<span class="line"><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">3</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 打印</span></span>
<span class="line"><span style="color:#ABB2BF;">{a:</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,b:</span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 验证</span></span>
<span class="line"><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">isFrozen</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 结果</span></span>
<span class="line"><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue在处理过程中，如果发现对象是冻结对象，就不会去遍历对象，不会变成响应式</p><h4 id="下面是1000000个对象的加载过程" tabindex="-1"><a class="header-anchor" href="#下面是1000000个对象的加载过程" aria-hidden="true">#</a> 下面是1000000个对象的加载过程</h4><p><strong>vue</strong></p><figure><img src="https://s3.bmp.ovh/imgs/2023/05/17/225d8b0bb0b07ab1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>冻结对象</strong></p><figure><img src="https://s3.bmp.ovh/imgs/2023/05/17/3c863e0c03a3a382.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可见vue把对象深度遍历成为响应式，对于大量结构复杂的数据来说，是很耗时间的</p><h2 id="使用函数式组件" tabindex="-1"><a class="header-anchor" href="#使用函数式组件" aria-hidden="true">#</a> 使用函数式组件</h2><p>函数式组件，设置<code>functional:true</code>，函数式组件没有<code>data</code>，这以为它无状态（没有<mark>响应式数据</mark>）</p><p>，也没用实例（没有<code>this</code>上下文），所以组件树中不存在函数式组件，一个函数式组件就像这样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">Vue</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;my-component&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">functional</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// Props 是可选的</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 为了弥补缺少的实例</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// 提供第二个参数作为上下文</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">createElement</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">context</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：在 2.3.0 之前的版本中，如果一个函数式组件想要接收 prop，则 <code>props</code> 选项是必须的。在 2.3.0 或以上的版本中，你可以省略 <code>props</code> 选项，所有组件上的 attribute 都会被自动隐式解析为 prop。</p><p>当使用函数式组件时，该引用将会是 HTMLElement，因为他们是无状态的也是无实例的。</p></blockquote>`,29),y={href:"https://v2.cn.vuejs.org/v2/guide/single-file-components.html",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">functional</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>组件需要的一切都是通过 <code>context</code> 参数传递，它是一个包括如下字段的对象：</p>`,2),F=s("li",null,[s("code",null,"props"),n("：提供所有 prop 的对象")],-1),A=s("li",null,[s("code",null,"children"),n("：VNode 子节点的数组")],-1),u=s("li",null,[s("code",null,"slots"),n("：一个函数，返回了包含所有插槽的对象")],-1),m=s("li",null,[s("code",null,"scopedSlots"),n("：(2.6.0+) 一个暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽。")],-1),h=s("code",null,"data",-1),b={href:"https://v2.cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5%E6%95%B0%E6%8D%AE%E5%AF%B9%E8%B1%A1",target:"_blank",rel:"noopener noreferrer"},C=s("code",null,"createElement",-1),E=s("li",null,[s("code",null,"parent"),n("：对父组件的引用")],-1),f=s("li",null,[s("code",null,"listeners"),n("：(2.3.0+) 一个包含了所有父组件为当前组件注册的事件监听器的对象。这是 "),s("code",null,"data.on"),n(" 的一个别名。")],-1),D=s("code",null,"injections",-1),g={href:"https://v2.cn.vuejs.org/v2/api/#provide-inject",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"inject",-1),x=e(`<p>在添加 <code>functional: true</code> 之后，需要更新我们的锚点标题组件的渲染函数，为其增加 <code>context</code> 参数，并将 <code>this.$slots.default</code> 更新为 <code>context.children</code>，然后将 <code>this.level</code> 更新为 <code>context.props.level</code>。</p><p>因为函数式组件只是函数，所以渲染开销(<strong>时间</strong>和<strong>内存</strong>)也低很多。</p><p>在作为包装组件时它们也同样非常有用。比如，当你需要做这些时：</p><ul><li>程序化地在多个组件中选择一个来代为渲染；</li><li>在将 <code>children</code>、<code>props</code>、<code>data</code> 传递给子组件之前操作它们。</li></ul><p>下面是一个 <code>smart-list</code> 组件的例子，它能根据传入 prop 的值来代为渲染更具体的组件：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">EmptyList</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* ... */</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">TableList</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* ... */</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">OrderedList</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* ... */</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">UnorderedList</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#7F848E;font-style:italic;">/* ... */</span><span style="color:#ABB2BF;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">Vue</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">component</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;smart-list&#39;</span><span style="color:#ABB2BF;">, {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">functional</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">props</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">items</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">type</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Array</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">required</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">isOrdered</span><span style="color:#ABB2BF;">: </span><span style="color:#E06C75;">Boolean</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">: </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">createElement</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">context</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">appropriateListComponent</span><span style="color:#ABB2BF;"> () {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">items</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">context</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">items</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">items</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">)           </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">EmptyList</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">items</span><span style="color:#ABB2BF;">[</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;object&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">TableList</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">context</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">props</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">isOrdered</span><span style="color:#ABB2BF;">)      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">OrderedList</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">UnorderedList</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">appropriateListComponent</span><span style="color:#ABB2BF;">(),</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">context</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">context</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span></span>
<span class="line"><span style="color:#ABB2BF;">    )</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用计算属性" tabindex="-1"><a class="header-anchor" href="#使用计算属性" aria-hidden="true">#</a> 使用计算属性</h2><p>如果模版中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们</p><h2 id="非实时绑定的表单项" tabindex="-1"><a class="header-anchor" href="#非实时绑定的表单项" aria-hidden="true">#</a> 非实时绑定的表单项</h2><p>当使用<code>v-model</code>绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致vue发生重新渲染（<code>rerender</code>），这会带来一些性能的开销。</p><p>我们可以通过使用<code>lazy</code>或不使用<code>v-model</code>的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。</p><p>vue设计思想是关注的是数据而不是界面，代码的可维护性和可阅读性也很重要，js执行线程和浏览器渲染线程是互斥的，所以运行动画时执行jS线程动画会卡顿</p><p>如双向绑定的文本框输入的内容改变，输入abcd，会进行4次重新渲染，可以使用<code>v-model.lazy</code>,监听<code>@change</code>，不使用监听的是<code>@input</code></p><h2 id="保持对象引用稳定" tabindex="-1"><a class="header-anchor" href="#保持对象引用稳定" aria-hidden="true">#</a> 保持对象引用稳定</h2><p>在绝大部分情况下，<code>vue</code>出发<code>rerender</code>的时机是其依赖的数据发生<strong>变化</strong></p><p>若数据没有发生变化，哪怕给数据重新赋值了，<code>vue</code>也不会做出任何处理的</p><p>下面是vue判断数据<strong>没有变化</strong>的源码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">hasChanged</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#56B6C2;">/</span><span style="color:#E06C75;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">||</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">y</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染</p><p>对于原始数据类型，保持其值不变即可</p><p>对于对象类型，保持其引用不变即可</p><h2 id="使用v-show替代v-if" tabindex="-1"><a class="header-anchor" href="#使用v-show替代v-if" aria-hidden="true">#</a> 使用v-show替代v-if</h2><p>对于频繁切换显示状态的元素，使用v-show可以保证虚拟的dom树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量dom元素的节点，这一点及其重要</p><h2 id="使用延迟装载defer" tabindex="-1"><a class="header-anchor" href="#使用延迟装载defer" aria-hidden="true">#</a> 使用延迟装载defer</h2><p>首页白屏时间主要受到两个因素的影响：</p><ul><li><p>打包体积过大</p><p>巨型包需要消耗大量的传输时间，导致JS传输完成前页面只有一个<code>&lt;div&gt;</code>，没有可显示的内容</p></li><li><p>需要立即渲染的内容太多</p></li></ul><p>JS传输完成后，浏览器开始执行JS构造页面</p><p>但可能一开始要渲染的组件太多，不仅JS的事件很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏loading过久</p><p>一个可行的办法就是延迟装载组件，让组件按照指定的先后顺序依次一个一个渲染出来</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>延迟装载是一个思路，本质上就是利用<code>requestAnimationFrame</code>事件分批渲染内容，它的具体实现多种多样</p></div>`,30),k={href:"https://so.csdn.net/so/search?q=%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},j=s("code",null,"callback",-1),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/DOMHighResTimeStamp",target:"_blank",rel:"noopener noreferrer"},S={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/now",target:"_blank",rel:"noopener noreferrer"},L=s("code",null,"requestAnimationFrame()",-1),z=e(`<p>思路：浏览器渲染1s渲染60次，第一次渲染一部分，第二次一部分，隔开渲染,分批绘制</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// defer.js</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">maxFrameCount</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">data</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 浏览器每重绘一次，计数</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">frameCount</span><span style="color:#ABB2BF;">:</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      };</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">mounted</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">refreshFrameCount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">requestAnimationFrame</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        	</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">frameCount</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">frameCount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">maxFrameCount</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">refreshFrameCount</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">          }</span></span>
<span class="line"><span style="color:#ABB2BF;">        });</span></span>
<span class="line"><span style="color:#ABB2BF;">      };</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">refreshFrameCount</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">methods</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">defer</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">showInFrameCount</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 用于v-if 的判断条件，渲染次数大于showInFrameCount后继续下一次渲染</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">frameCount</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">showInFrameCount</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;container&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">&lt;!--vue3.0 v-if 优先级高 vue2.x v-for优先级高--&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;block&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-for</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;n in 20&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">v-if</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;defer(n)&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">heavy-comp</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">heavy-comp</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">defer</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;./mixin/defer&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">mixins</span><span style="color:#ABB2BF;">: [</span><span style="color:#61AFEF;">defer</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">300</span><span style="color:#ABB2BF;">)],</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">components</span><span style="color:#ABB2BF;">: { </span><span style="color:#E06C75;">HeavyComp</span><span style="color:#ABB2BF;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用keep-alive" tabindex="-1"><a class="header-anchor" href="#使用keep-alive" aria-hidden="true">#</a> 使用keep-alive</h2><p>用于缓存内部组件实例，里面有include和exclude属性，max设置最大缓存数，超过后，自动删除最久没用的。</p><p>受到keep-alive影响，其内部的组件都具有两个生命周期，<code>activated</code>和<code>deactivated</code> ,分别再组件激活和失活时触发，第一次<code>activated</code>是在<code>mounted</code>之后。</p><p>一般用在需要多个页面频繁操作的场景（导航条）</p><h2 id="长列表优化" tabindex="-1"><a class="header-anchor" href="#长列表优化" aria-hidden="true">#</a> 长列表优化</h2><p>一般用在app端下拉的时候，或者列表很长的时候，通过一个固定大小的渲染池来解决。通过滚动条等一些操作，减少页面渲染市场，有现成的库，vue-virtual-scroller</p>`,9),M={href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"},O=e('<p>通过v-once创建低开销的静态组件，渲染一次后就缓存起来了，除非你非常留意渲染速度，不然最好不要用，因为有的开发者不知道这个属性或者看漏了，然后花费好几个小时来找为什么模板无法正确更新。</p><h2 id="打包体积优化" tabindex="-1"><a class="header-anchor" href="#打包体积优化" aria-hidden="true">#</a> 打包体积优化</h2><ul><li>Webpack 对图片进行压缩</li><li>静态资源的优化使用对象存储加CDN</li><li>减少 ES6 转为 ES5 的冗余代码</li><li>提取公共代码</li><li>模板预编译</li><li>提取组件的 CSS</li><li>优化 SourceMap</li><li>构建结果输出分析</li><li>Vue 项目的编译优化</li></ul><h2 id="基础优化" tabindex="-1"><a class="header-anchor" href="#基础优化" aria-hidden="true">#</a> 基础优化</h2><ul><li>开启 gzip 压缩</li><li>浏览器缓存</li><li>CDN 的使用</li><li>使用 Chrome Performance 查找性能瓶颈</li></ul>',5);function T(V,w){const a=o("ExternalLinkIcon");return c(),r("div",null,[B,t(" more "),d,s("p",null,[n("在 2.5.0 及以上版本中，如果你使用了"),s("a",y,[n("单文件组件"),l(a)]),n("，那么基于模板的函数式组件可以这样声明：")]),v,s("ul",null,[F,A,u,m,s("li",null,[h,n("：传递给组件的整个"),s("a",b,[n("数据对象"),l(a)]),n("，作为 "),C,n(" 的第二个参数传入组件")]),E,f,s("li",null,[D,n("：(2.3.0+) 如果使用了 "),s("a",g,[_,l(a)]),n(" 选项，则该对象包含了应当被注入的 property。")])]),x,s("p",null,[n("告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的"),s("a",k,[n("回调函数"),l(a)]),n("更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行")]),s("p",null,[j,n("： 下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传入"),s("a",q,[n("DOMHighResTimeStamp"),l(a)]),n("参数，该参数与"),s("a",S,[n("performance.now()"),l(a)]),n("的返回值相同，它表示"),L,n(" 开始去执行回调函数的时刻。")]),z,s("p",null,[s("a",M,[n("https://github.com/Akryum/vue-virtual-scroller"),l(a)])]),O])}const H=p(i,[["render",T],["__file","optimization.html.vue"]]);export{H as default};