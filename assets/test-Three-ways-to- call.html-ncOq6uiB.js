import{_ as e,r as i,o as l,c as o,a as s,b as a,d as r,e as t}from"./app-rGCND2AC.js";const p={},B=s("h1",{id:"labelphonenum",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#labelphonenum"},[s("span",null,"LabelPhoneNum")])],-1),c={href:"https://github.com/OrageKK/LabelPhoneNum",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="真机测试结果" tabindex="-1"><a class="header-anchor" href="#真机测试结果"><span>真机测试结果</span></a></h2><h4 id="设备型号-iphone6s" tabindex="-1"><a class="header-anchor" href="#设备型号-iphone6s"><span>设备型号：iphone6s</span></a></h4><h4 id="系统-10-1-1" tabindex="-1"><a class="header-anchor" href="#系统-10-1-1"><span>系统:10.1.1</span></a></h4><h4 id="xcode-版本-8-1" tabindex="-1"><a class="header-anchor" href="#xcode-版本-8-1"><span>Xcode 版本：8.1</span></a></h4><h3 id="三种打电话的方法" tabindex="-1"><a class="header-anchor" href="#三种打电话的方法"><span>三种打电话的方法</span></a></h3><blockquote><p>方法一:网上说使用此方法，电话结束后进入联系人列表，测试结果为：正常，电话结束后返回程序</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    +(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)callPhoneOne:(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *)phoneNum{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    UIApplication *application </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [UIApplication </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sharedApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    /*--------拨号方法一-----------*/</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    // 使用此方法，电话结束后进入联系人列表</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *num1 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> stringWithFormat:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;tel://</span><span style="color:#D19A66;--shiki-dark:#D19A66;">%@</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,phoneNum];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    [application </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">openURL:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURL</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> URLWithString:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">num1] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">options:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@{} </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">completionHandler:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">^(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">BOOL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> success) {}];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法二：测试结果为先弹窗后拨打，呼叫结束后返回程序，是否可以通过审核无法确认</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    +(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)callPhoneTwo:(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *)phoneNum{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    UIApplication *application </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [UIApplication </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">sharedApplication</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        /*--------拨号方法二-----------*/</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //这个方法则打电话前先弹框  是否打电话 然后打完电话之后回到程序中 网上说这个方法可能不合法 无法通过审核</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *num2 </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> stringWithFormat:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;telprompt://</span><span style="color:#D19A66;--shiki-dark:#D19A66;">%@</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,phoneNum];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        [application </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">openURL:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURL</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> URLWithString:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">num2] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">options:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">@{} </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">completionHandler:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">^(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">BOOL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> success) {}];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>方法三：调用 UIWebView 进行呼叫功能，测试结果为：弹窗速度稍慢，电话挂掉之后返回程序</p></blockquote><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    // 要在出发呼叫功能前不被release需要强引用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    @</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">property</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (nonatomic,strong) UIWebView *phoneCallWebView;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    #pragma mark</span><span style="color:#E06C75;--shiki-dark:#E06C75;"> - 拨号方法三，会稍微慢于前两种方法</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    - (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)callPhoneThree:(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *)phoneNum{</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    /*--------拨号方法三-----------*/</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    NSURL</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *phoneURL </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURL</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> URLWithString:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> stringWithFormat:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;tel://</span><span style="color:#D19A66;--shiki-dark:#D19A66;">%@</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,phoneNum]];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ( </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">_phoneCallWebView ) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        _phoneCallWebView </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[UIWebView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">initWithFrame:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">CGRectZero];</span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 这个webView只是一个后台的容易 不需要add到页面上来  效果跟方法二一样 但是这个方法是合法的</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    [_phoneCallWebView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadRequest:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURLRequest</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> requestWithURL:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">phoneURL]];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>总结来说除了第二种不知是否可以通过审核，其余方法均可实现呼叫并返回程序功能。</p></li><li><p>只是第一种方法爱需要手动弹出 AlertViewController；</p></li><li><p>第三种方法优势在于可以自动识别电话格式并弹窗，如号码为:01088867777 弹窗为 010-88867777。并且代码相对于第一种来说极为精简，少了自定义 AlertViewController 的步骤</p></li></ul>`,12);function d(h,F){const n=i("ExternalLinkIcon");return l(),o("div",null,[B,s("p",null,[a("使用 YYtext 实现 label 中的某些文字点击拨打电话---"),s("a",c,[a("Github"),r(n)])]),k])}const A=e(p,[["render",d],["__file","test-Three-ways-to- call.html.vue"]]),b=JSON.parse(`{"path":"/posts/iOS/other/test-Three-ways-to-%20call.html","title":"Test Three ways to call","lang":"zh-CN","frontmatter":{"title":"Test Three ways to call","date":"2016-11-12T12:31:17.000Z","category":["iOS"],"tag":["iOS"],"description":"LabelPhoneNum 使用 YYtext 实现 label 中的某些文字点击拨打电话---Github 真机测试结果 设备型号：iphone6s 系统:10.1.1 Xcode 版本：8.1 三种打电话的方法 方法一:网上说使用此方法，电话结束后进入联系人列表，测试结果为：正常，电话结束后返回程序 方法二：测试结果为先弹窗后拨打，呼叫结束后返回程...","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/iOS/other/test-Three-ways-to-%20call.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"Test Three ways to call"}],["meta",{"property":"og:description","content":"LabelPhoneNum 使用 YYtext 实现 label 中的某些文字点击拨打电话---Github 真机测试结果 设备型号：iphone6s 系统:10.1.1 Xcode 版本：8.1 三种打电话的方法 方法一:网上说使用此方法，电话结束后进入联系人列表，测试结果为：正常，电话结束后返回程序 方法二：测试结果为先弹窗后拨打，呼叫结束后返回程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2016-11-12T12:31:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Test Three ways to call\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-11-12T12:31:17.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"真机测试结果","slug":"真机测试结果","link":"#真机测试结果","children":[{"level":3,"title":"三种打电话的方法","slug":"三种打电话的方法","link":"#三种打电话的方法","children":[]}]}],"git":{"createdTime":1678187456000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":1.77,"words":532},"filePathRelative":"posts/iOS/other/test-Three-ways-to- call.md","localizedDate":"2016年11月12日","excerpt":"\\n<p>使用 YYtext 实现 label 中的某些文字点击拨打电话---<a href=\\"https://github.com/OrageKK/LabelPhoneNum\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Github</a></p>\\n<h2>真机测试结果</h2>\\n<h4>设备型号：iphone6s</h4>\\n<h4>系统:10.1.1</h4>\\n<h4>Xcode 版本：8.1</h4>\\n<h3>三种打电话的方法</h3>\\n<blockquote>\\n<p>方法一:网上说使用此方法，电话结束后进入联系人列表，测试结果为：正常，电话结束后返回程序</p>\\n</blockquote>","autoDesc":true}`);export{A as comp,b as data};
