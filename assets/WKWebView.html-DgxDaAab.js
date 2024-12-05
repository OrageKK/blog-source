import{_ as s,o as a,c as i,e as n}from"./app-DGmDblna.js";const e={},l=n(`<blockquote><p>记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应</p></blockquote><h2 id="一、新特性" tabindex="-1"><a class="header-anchor" href="#一、新特性"><span>一、新特性</span></a></h2><ul><li>在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。</li><li>允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制）</li><li>支持了更多的 HTML5 特性；</li><li>高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）；</li><li>将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（<a href="https://developer.apple.com/reference/webkit" target="_blank" rel="noopener noreferrer">查看苹果官方文档</a>）；</li></ul><h2 id="二、初始化" tabindex="-1"><a class="header-anchor" href="#二、初始化"><span>二、初始化</span></a></h2><ul><li>首先需要引入 WebKit 库</li></ul><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">#import</span><span style="color:#98C379;--shiki-dark:#98C379;"> &lt;WebKit/WebKit.h&gt;</span></span></code></pre></div><ul><li>采用 configuration 的方式初始化（可选）</li></ul><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (WKWebView *)webView {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">_webView) {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        WKWebViewConfiguration *config </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [WKWebViewConfiguration </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">new</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //初始化偏好设置属性：preferences</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">preferences</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [WKPreferences </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">new</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //The minimum font size in points default is 0;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">preferences</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">minimumFontSize</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 10</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //是否支持JavaScript</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">preferences</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">javaScriptEnabled</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> YES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //不通过用户交互，是否可以打开窗口</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        config</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">preferences</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">javaScriptCanOpenWindowsAutomatically</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        _webView </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]initWithFrame:</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">CGRectMake</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view.width, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view.height) </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">configuration:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">config];</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        _webView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">UIDelegate</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        _webView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">navigationDelegate</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        // 此处因为高度自适应所以不应该让webview内部可以滚动</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">        _webView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">scrollView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">scrollEnabled</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> NO</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> _webView;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>加载网页</li></ul><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WKWebView *webView </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">initWithFrame:</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view.bounds];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[webView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadRequest:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURLRequest</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> requestWithURL:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSURL</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> URLWithString:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;http://m.baidu.com&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]]];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addSubview:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">webView];</span></span></code></pre></div><h2 id="三、wkwebview-代理方法" tabindex="-1"><a class="header-anchor" href="#三、wkwebview-代理方法"><span>三、WKWebView 代理方法</span></a></h2><p>1.WKNavigationDelegate</p><p>该代理提供的方法，可以用来追踪加载过程（页面开始加载、加载完成、加载失败）、决定是否执行跳转。</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 页面开始加载时调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 当内容开始返回时调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 页面加载完成之后调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 页面加载失败时调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation;</span></span></code></pre></div><p>页面跳转的代理方法有三种，分为（收到跳转与决定是否跳转两种）</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 接收到服务器跳转请求之后调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 在收到响应后，决定是否跳转</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (^)(WKNavigationResponsePolicy))decisionHandler;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 在发送请求之前，决定是否跳转</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (^)(WKNavigationActionPolicy))decisionHandler;</span></span></code></pre></div><p>2.WKUIDelegate</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 创建一个新的WebView</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (WKWebView *)webView:(WKWebView *)webView createWebViewWithConfiguration:(WKWebViewConfiguration *)configuration forNavigationAction:(WKNavigationAction *)navigationAction windowFeatures:(WKWindowFeatures *)windowFeatures;</span></span></code></pre></div><p>剩下三个代理方法全都是与界面弹出提示框相关的，针对于 web 界面的三种提示框（警告框、确认框、输入框）分别对应三种代理方法。下面只举了警告框的例子</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *  web界面中有弹出警告框时调用</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *  @param webView           实现该代理的webview</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *  @param message           警告框中的内容</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *  @param frame             主窗口</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> *  @param completionHandler 警告框消失调用</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *)message initiatedByFrame:(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (^)())completionHandler;</span></span></code></pre></div><p>3.WKScriptMessageHandler</p><p>这个协议中包含一个必须实现的方法，这个方法是提高 App 与 web 端交互的关键，它可以直接将接收到的 JS 脚本转为 OC 或 Swift 对象</p><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 从web界面中接收到一个脚本时调用</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message;</span></span></code></pre></div><h2 id="四、wkwebview-加载-js" tabindex="-1"><a class="header-anchor" href="#四、wkwebview-加载-js"><span>四、WKWebView 加载 JS</span></a></h2><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// js代码</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *js </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> @&quot;	var count = document.images.length;for (var i = 0; i &lt; count; i++) {var image = document.images[i];image.style.width=320;};window.alert(&#39;找到&#39; + count + &#39;张图&#39;);&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 根据JS字符串初始化WKUserScript对象</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WKUserScript *script </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[WKUserScript </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">initWithSource:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">js </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">injectionTime:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WKUserScriptInjectionTimeAtDocumentEnd </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">forMainFrameOnly:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">YES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 根据生成的WKUserScript对象，初始化WKWebViewConfiguration</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WKWebViewConfiguration *config </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[WKWebViewConfiguration </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">init</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]; [config.userContentController </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addUserScript:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">script]; _webView </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">initWithFrame:</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view.bounds </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">configuration:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">config];</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 加载html字符串</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[_webView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">loadHTMLString:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;&lt;head&gt;&lt;/head&gt;&lt;img src=&#39;http://www.nsu.edu.cn/v/2014v3/img/background/3.jpg&#39; /&gt;&quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">baseURL:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">nil</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.view </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">addSubview:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">_webView];</span></span></code></pre></div><h2 id="五、作为-cell-自适应行高" tabindex="-1"><a class="header-anchor" href="#五、作为-cell-自适应行高"><span>五、作为 cell 自适应行高</span></a></h2><figure><img src="https://storage2.cuntuku.com/2017/05/27/2.gif" alt="2.gif" tabindex="0" loading="lazy"><figcaption>2.gif</figcaption></figure><ul><li>在 didFinishNavigation 方法中获取行高，然后刷新表格，网上资料所说的获取 webview.scrollview.contentsize.height 本人测试不可行，此处采用调用 js 通过 ajax 获取高度</li></ul><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 页面加载完成之后调用 此方法会调用多次</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)webView:(WKWebView *)webView didFinishNavigation:(null_unspecified WKNavigation *)navigation {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    __block</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> CGFloat webViewHeight;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> webView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">frame</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    //获取内容实际高度（像素）@&quot;document.getElementById(\\&quot;content\\&quot;).offsetHeight;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    [webView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">evaluateJavaScript:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;document.body.scrollHeight&quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> completionHandler:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">^(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">id</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> _Nullable result,</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSError</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * _Nullable error) {</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    // 此处js字符串采用scrollHeight而不是offsetHeight是因为后者并获取不到高度，看参考资料说是对于加载html字符串的情况下使用后者可以，但如果是和我一样直接加载原站内容使用前者更合适</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //获取页面高度，并重置webview的frame</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        webViewHeight </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [result </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">doubleValue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">        NSLog</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;</span><span style="color:#D19A66;--shiki-dark:#D19A66;">%f</span><span style="color:#98C379;--shiki-dark:#98C379;">&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">,webViewHeight);</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">        dispatch_async</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">dispatch_get_main_queue</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(), ^{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (webViewHeight </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">height</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                webView</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">frame</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> CGRectMake</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, </span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">view</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">frame</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">size</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">width</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, webViewHeight);</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">reloadData</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#56B6C2;--shiki-dark:#56B6C2;">    NSLog</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;结束加载&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此处完成之后需要在 heightforrow 方法中设置 cell 的高为 webview 的高，但是会出现一个问题就是内容显示不全。还需要调用下面这个方法进行重布局</li></ul><div class="language-objc" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro vp-code" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">- (</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)scrollViewDidScroll:(UIScrollView *)scrollView {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ([scrollView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isKindOfClass:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.tableView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">class</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]]) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        [</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.webView </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">setNeedsLayout</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="六、小结" tabindex="-1"><a class="header-anchor" href="#六、小结"><span>六、小结</span></a></h2><blockquote><p>自适应行高是本文的重点，是我自己试验了多种方法之后确定可行的方法</p></blockquote><blockquote><p>下篇文章将介绍拦截 url 进行原生跳转</p></blockquote>`,34),o=[l];function r(p,t){return a(),i("div",null,o)}const c=s(e,[["render",r],["__file","WKWebView.html.vue"]]),k=JSON.parse(`{"path":"/posts/iOS/system/WKWebView.html","title":"WKWebView使用及自适应高度","lang":"zh-CN","frontmatter":{"title":"WKWebView使用及自适应高度","date":"2017-05-26T15:47:40.000Z","category":["iOS"],"tag":["iOS"],"description":"记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应 一、新特性 在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。 允许 JavaScript 的...","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/iOS/system/WKWebView.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"WKWebView使用及自适应高度"}],["meta",{"property":"og:description","content":"记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应 一、新特性 在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。 允许 JavaScript 的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://storage2.cuntuku.com/2017/05/27/2.gif"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2017-05-26T15:47:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WKWebView使用及自适应高度\\",\\"image\\":[\\"https://storage2.cuntuku.com/2017/05/27/2.gif\\"],\\"datePublished\\":\\"2017-05-26T15:47:40.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"一、新特性","slug":"一、新特性","link":"#一、新特性","children":[]},{"level":2,"title":"二、初始化","slug":"二、初始化","link":"#二、初始化","children":[]},{"level":2,"title":"三、WKWebView 代理方法","slug":"三、wkwebview-代理方法","link":"#三、wkwebview-代理方法","children":[]},{"level":2,"title":"四、WKWebView 加载 JS","slug":"四、wkwebview-加载-js","link":"#四、wkwebview-加载-js","children":[]},{"level":2,"title":"五、作为 cell 自适应行高","slug":"五、作为-cell-自适应行高","link":"#五、作为-cell-自适应行高","children":[]},{"level":2,"title":"六、小结","slug":"六、小结","link":"#六、小结","children":[]}],"git":{"createdTime":1678187456000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":4.11,"words":1233},"filePathRelative":"posts/iOS/system/WKWebView.md","localizedDate":"2017年5月26日","excerpt":"<blockquote>\\n<p>记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应</p>\\n</blockquote>\\n<h2>一、新特性</h2>\\n<ul>\\n<li>在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。</li>\\n<li>允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制）</li>\\n<li>支持了更多的 HTML5 特性；</li>\\n<li>高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）；</li>\\n<li>将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（<a href=\\"https://developer.apple.com/reference/webkit\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">查看苹果官方文档</a>）；</li>\\n</ul>","autoDesc":true}`);export{c as comp,k as data};