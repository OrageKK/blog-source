import{_ as o,r as i,o as r,c as p,a as s,b as a,d as e,w as c,e as l}from"./app-rGCND2AC.js";const d={},B=l(`<h2 id="reactnative-state-状态" tabindex="-1"><a class="header-anchor" href="#reactnative-state-状态"><span>ReactNative State(状态)</span></a></h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>通俗来讲，一个组件，或者一个视图，他们都是 Component，Component 用两个最重要的东西，一个<code>props</code></p><p>一个<code>state</code></p><p>我们使用两种数据来控制一个组件：<code>props</code>和<code>state</code>。<code>props</code>是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。(<code>props</code>就像一个类的初始化属性一样，只有在创建时可以赋值，并且组件内部不可修改，也就是<code>readonly</code>)</p><p>对于需要改变的数据，我们需要使用<code>state</code>。也可以把<code>state</code>理解为一个状态机，对于那些需要改变的数据可以使用<code>state</code>来更改，比如网络接口拿回来的数据，可以放在<code>state</code>里，当需要改变的时候只需要调用<code>setState</code>即可</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>一般来说，你需要在 class 中声明一个<code>state</code>对象，然后在需要修改时调用<code>setState</code>方法。</p><p>假如我们有一个弹窗，想要控制弹窗是不是显示，需要一个<code>modalVisible</code>属性，当更改它的值时从而使界面 UI 产生相应的变化</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 声明state对象</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">interface</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> IState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">boolean</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">export</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> default</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> class</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> ModalMenu</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> extends</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> React</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Component</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">IProps</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">IState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  constructor</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:italic;">props</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">IProps</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;font-style:italic;--shiki-dark-font-style:italic;">    super</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#E06C75;--shiki-dark:#E06C75;">props</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">state</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> { </span><span style="color:#E06C75;--shiki-dark:#E06C75;">modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种声明方式，声明在类内部，声明的同时，进行初始化</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">state</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">  modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>this.state.modalVisible</code>来控制组件是否显示</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">render</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            &lt;</span><span style="color:#E06C75;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:italic;">Modal</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                animationType</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;fade&quot;</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                transparent</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{</span><span style="color:#E06C75;--shiki-dark:#E06C75;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                visible</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{this.state.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">                onRequestClose</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">{() =&gt; {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setModalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">false</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }}</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">            &gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        );</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新组件状态使用</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> });</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点"><span>注意点</span></a></h3>`,17),k={href:"http://redux.js.org/index.html",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>每次调用<code>setState</code>时，BlinkApp 都会重新执行 render 方法重新渲染。</p><ul><li>render（）中 UI 的变化只有当绑定的 state 中的某个属性变化后，才会变化</li><li>一切界面变化都是<code>状态state变化</code></li><li><code>state</code>的修改必须通过<code>setState()</code>方法 <ul><li>this.state.likes = 100; // 这样的<code>直接赋值修改无效！</code></li><li>setState 是一个 merge 合并操作，只修改指定属性，不影响其他属性</li><li>setState 是<code>异步</code>操作，修改<code>不会马上生效</code></li></ul></li></ul><p>我们可以看到<code>setState</code>内部的声明</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">setState</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">K</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> extends</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> keyof</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> S</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            state</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: ((</span><span style="color:#E06C75;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:italic;">prevState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Readonly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;, </span><span style="color:#E06C75;--shiki-dark:#E06C75;font-style:italic;--shiki-dark-font-style:italic;">props</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">Readonly</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">P</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">&gt;) </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Pick</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">K</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> |</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> S</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> |</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)) </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">|</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E06C75;--shiki-dark:#E06C75;">Pick</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">S</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">K</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> |</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> S</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> |</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> null</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#E06C75;--shiki-dark:#E06C75;">            callback</span><span style="color:#C678DD;--shiki-dark:#C678DD;">?:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#C678DD;--shiki-dark:#C678DD;"> void</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        ): </span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果想要同步使用，我们可以使用第二个参数 callback?它是可选的</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">this</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setState</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">({ </span><span style="color:#E06C75;--shiki-dark:#E06C75;">modalVisible</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">: </span><span style="color:#D19A66;--shiki-dark:#D19A66;">true</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> }, () </span><span style="color:#C678DD;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">  // 这里是同步的</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>参考资料：</p>`,8),y={href:"https://reactnative.cn/docs/layout-props/#justifycontent",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.jianshu.com/p/ae0a9ec1f8d6?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.tslang.cn/docs/home.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.imooc.com/video/14286",target:"_blank",rel:"noopener noreferrer"},m=s("p",null,[s("a",{href:"%5Bhttps://docs.nativebase.io%5D(https://docs.nativebase.io/)"},"https://docs.nativebase.io ")],-1);function v(b,u){const t=i("RouteLink"),n=i("ExternalLinkIcon");return r(),p("div",null,[s("blockquote",null,[s("p",null,[a("接上篇 "),e(t,{to:"/posts/ReactNative/react2.html"},{default:c(()=>[a("ReactNative开发环境配置，ES6语法介绍")]),_:1})])]),B,s("p",null,[a("实际开发中，我们一般不会在定时器函数（setInterval、setTimeout 等）中来操作 state。典型的场景是在接收到服务器返回的新数据，或者在用户输入数据之后。你也可以使用一些“状态容器”比如"),s("a",k,[a("Redux"),e(n)]),a("来统一管理数据流。")]),h,s("p",null,[s("a",y,[a("官方文档"),e(n)])]),s("p",null,[s("a",C,[a("ES6 延展操作符（...）"),e(n)])]),s("p",null,[s("a",A,[a("typeScriptg 中文文档"),e(n)])]),s("p",null,[s("a",F,[a("ReactNative 入门与进阶"),e(n)])]),m])}const g=o(d,[["render",v],["__file","react3.html.vue"]]),D=JSON.parse(`{"path":"/posts/cross-platform/ReactNative/react3.html","title":"ReactNative State(状态)","lang":"zh-CN","frontmatter":{"title":"ReactNative State(状态)","description":"ReactNative State(状态)","date":"2019-11-12T00:00:00.000Z","order":3,"category":["前端跨平台"],"tag":["前端","React Native"],"head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/cross-platform/ReactNative/react3.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"ReactNative State(状态)"}],["meta",{"property":"og:description","content":"ReactNative State(状态)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-13T15:16:38.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"React Native"}],["meta",{"property":"article:published_time","content":"2019-11-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-13T15:16:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ReactNative State(状态)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-11-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-13T15:16:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"ReactNative State(状态)","slug":"reactnative-state-状态","link":"#reactnative-state-状态","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"注意点","slug":"注意点","link":"#注意点","children":[]}]}],"git":{"createdTime":1678187456000,"updatedTime":1678720598000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1},{"name":"oragekk","email":"oragekk@163.com","commits":1}]},"readingTime":{"minutes":2.51,"words":753},"filePathRelative":"posts/cross-platform/ReactNative/react3.md","localizedDate":"2019年11月12日","excerpt":"<blockquote>\\n<p>接上篇 <a href=\\"/posts/ReactNative/react2.html\\" target=\\"_blank\\">ReactNative开发环境配置，ES6语法介绍</a></p>\\n</blockquote>\\n<h2>ReactNative State(状态)</h2>\\n<h3>概念</h3>\\n<p>通俗来讲，一个组件，或者一个视图，他们都是 Component，Component 用两个最重要的东西，一个<code>props</code></p>\\n<p>一个<code>state</code></p>\\n<p>我们使用两种数据来控制一个组件：<code>props</code>和<code>state</code>。<code>props</code>是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。(<code>props</code>就像一个类的初始化属性一样，只有在创建时可以赋值，并且组件内部不可修改，也就是<code>readonly</code>)</p>"}`);export{g as comp,D as data};
