import{_ as s,J as n,K as a,N as l}from"./framework-ede8edbb.js";const o={},e=l(`<blockquote><p>本文介绍 iOS 中 cookie 的使用包含 AFNetWorking 3.0 中的使用，常用于登录状态信息保存</p></blockquote><h2 id="什么是-cookies" tabindex="-1"><a class="header-anchor" href="#什么是-cookies" aria-hidden="true">#</a> 什么是 Cookies？</h2><p>Cookie 是由服务器保存在用户浏览器（客户端）上的一块数据，它可以包含有关用户的信息,比如果登陆的状态，用户标识等。 Cookie 有什么作用？</p><p>主要用在以下三个方面:</p><ul><li><p>会话状态管理（如用户登录状态、购物车）</p></li><li><p>个性化设置（如用户自定义设置）</p></li><li><p>浏览器行为跟踪（如跟踪分析用户行为）</p></li></ul><h2 id="cookie-的处理步骤" tabindex="-1"><a class="header-anchor" href="#cookie-的处理步骤" aria-hidden="true">#</a> cookie 的处理步骤</h2><ul><li>服务器向客户端发送 cookie</li><li>通常使用 HTTP 协议规定的 Set-Cookie 头操作。</li><li>规范规定 cookie 的格式为 name = value 格式，且必须包含这部分。</li><li>浏览器将 cookie 保存</li><li>每次请求浏览器都会将 cookie 发向服务器</li></ul><p>其他可选的 cookie 参数会影响将 cookie 发送给服务器端的过程，主要有以下几种：</p><table><thead><tr><th>key</th><th style="text-align:center;">是否可选</th><th style="text-align:right;">value</th></tr></thead><tbody><tr><td>name</td><td style="text-align:center;">T</td><td style="text-align:right;">xxx</td></tr><tr><td>value</td><td style="text-align:center;">T</td><td style="text-align:right;">xxx</td></tr><tr><td>path</td><td style="text-align:center;">F</td><td style="text-align:right;">路径</td></tr><tr><td>expires</td><td style="text-align:center;">F</td><td style="text-align:right;">UTC 格式时间</td></tr><tr><td>maxAge</td><td style="text-align:center;">F</td><td style="text-align:right;">是 cookie 多久后过期的相对时间</td></tr><tr><td>secure</td><td style="text-align:center;">F</td><td style="text-align:right;">为 true 时 cookie 在 HTTP 中是无效 在 HTTPS 中才有效</td></tr><tr><td>httpOnly</td><td style="text-align:center;">F</td><td style="text-align:right;">浏览器不允许脚本操作 document.cookie 去更改 cookie。一般情况下都应该设置这个为 true，这样可以避免被 xss 攻击拿到 cookie。</td></tr></tbody></table><h2 id="cookies-长什么样子" tabindex="-1"><a class="header-anchor" href="#cookies-长什么样子" aria-hidden="true">#</a> Cookies 长什么样子？</h2><p>当服务器收到 HTTP 请求时，可以在响应头里面增加一个 Set-Cookie 头部。浏览器收到响应之后会取出 Cookie 信息并保存，之后对该服务器每一次请求中都通过 Cookie 请求头部将 Cookie 信息发送给服务器。大概都长的都是这个格式：</p><p><code>Set-Cookie: &lt;cookie名称&gt;=&lt;cookie值&gt;</code></p><p>所以一个简单的 Cookie 像这样：</p><p><code>language=zh_CN; expires=Sat, 05-Aug-2017 08:21:16 GMT; Max-Age=2592000; path=/; domain=192.75.17.211:6603</code></p><h2 id="在-ios-中使用-cookies" tabindex="-1"><a class="header-anchor" href="#在-ios-中使用-cookies" aria-hidden="true">#</a> 在 iOS 中使用 Cookies</h2><ul><li><p>NSHTTPCookieStorage 这个类就是一个单例，它的主要任务就是管理 Cookies, 增删改查等各种</p></li><li><p>NSURLRequest NSURLRequest 是 HTTP 请求协议 URL 资源的消息对象 Request</p></li><li><p>NSHTTPURLResponse</p><p>NSHTTPURLResponse 是 HTTP 协议请求 URL 资源的响应消息对象。这个对象将 HTTP 协议的序列化了，可以很方便的获得的状态码(statusCode)，消息报头(allHeaderFields)等信息</p></li></ul><h2 id="开始手动管理-cookies" tabindex="-1"><a class="header-anchor" href="#开始手动管理-cookies" aria-hidden="true">#</a> 开始手动管理 Cookies</h2><ul><li>从 NSHTTPURLResponse 获取服务器发给我们的 Cookie,<strong>此种方式获取的是 Headers 中的</strong></li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">NSHTTPURLResponse</span><span style="color:#ABB2BF;">* response </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">NSHTTPURLResponse</span><span style="color:#ABB2BF;">* )task.response;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSDictionary</span><span style="color:#ABB2BF;"> *allHeaderFieldsDic </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> response.allHeaderFields;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *setCookie </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">allHeaderFieldsDic</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">@&quot;Set-Cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (setCookie </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *cookie </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[setCookie </span><span style="color:#61AFEF;">componentsSeparatedByString:</span><span style="color:#98C379;">@&quot;;&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">objectAtIndex:</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">         </span><span style="color:#56B6C2;">NSLog</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">@&quot;cookie : </span><span style="color:#D19A66;">%@</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">, cookie); </span><span style="color:#7F848E;font-style:italic;">// 这里可对cookie进行存储</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://storage1.cuntuku.com/2017/07/06/cookie12x.png" alt="cookie12x.png" tabindex="0" loading="lazy"><figcaption>cookie12x.png</figcaption></figure><ul><li>从 NSHTTPCookieStorage 获取想要 Cookie，<strong>此种获取方式是获取的 cookies 中的</strong></li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//获取cookie</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSArray</span><span style="color:#ABB2BF;"> *cookies </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[</span><span style="color:#E5C07B;">NSHTTPCookieStorage</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sharedHTTPCookieStorage</span><span style="color:#ABB2BF;">]cookiesForURL:[</span><span style="color:#E5C07B;">NSURL</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">URLWithString:</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">stringWithFormat:</span><span style="color:#98C379;">@&quot;</span><span style="color:#D19A66;">%@%@</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,</span><span style="color:#D19A66;">kBaseURL</span><span style="color:#ABB2BF;">,[</span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">stringWithFormat:</span><span style="color:#98C379;">@&quot;/index.php?route=mapi/</span><span style="color:#D19A66;">%@</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,urlstring]]]];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">NSHTTPCookie</span><span style="color:#ABB2BF;"> *tempCookie </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> cookies)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//打印cookies</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">NSLog</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">@&quot;getCookie:</span><span style="color:#D19A66;">%@</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,tempCookie);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSDictionary</span><span style="color:#ABB2BF;"> *Request </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">NSHTTPCookie</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">requestHeaderFieldsWithCookies:</span><span style="color:#ABB2BF;">cookies];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSUserDefaults</span><span style="color:#ABB2BF;"> *userCookies </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">NSUserDefaults</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">standardUserDefaults</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    [userCookies </span><span style="color:#61AFEF;">setObject:</span><span style="color:#ABB2BF;">[Request </span><span style="color:#61AFEF;">objectForKey:</span><span style="color:#98C379;">@&quot;Cookie&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">forKey:</span><span style="color:#98C379;">@&quot;cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    [userCookies </span><span style="color:#61AFEF;">synchronize</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://storage2.cuntuku.com/2017/07/06/cookie22x.png" alt="cookie22x.png" tabindex="0" loading="lazy"><figcaption>cookie22x.png</figcaption></figure><ul><li>清除 Cookie</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">NSHTTPCookieStorage</span><span style="color:#ABB2BF;"> *cookieStorage </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">NSHTTPCookieStorage</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">sharedHTTPCookieStorage</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSArray</span><span style="color:#ABB2BF;"> *_tmpArray </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#E5C07B;">NSArray</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">arrayWithArray:</span><span style="color:#ABB2BF;">[cookieStorage </span><span style="color:#61AFEF;">cookies</span><span style="color:#ABB2BF;">]];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;"> obj </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> _tmpArray) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        [cookieStorage </span><span style="color:#61AFEF;">deleteCookie:</span><span style="color:#ABB2BF;">obj];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-afnetworking-时-对-cookies-管理的示例" tabindex="-1"><a class="header-anchor" href="#使用-afnetworking-时-对-cookies-管理的示例" aria-hidden="true">#</a> 使用 AFNetworking 时，对 Cookies 管理的示例</h2><ul><li>AFNetworking 3.0 默认是保存 cookies 的。</li><li>模拟登录，保存 cookie 以及设置 cookie:</li><li></li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">NSURLSessionConfiguration *sessionConfiguration </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [NSURLSessionConfiguration </span><span style="color:#61AFEF;">defaultSessionConfiguration</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    AFHTTPSessionManager *httpManager </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[AFHTTPSessionManager </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">initWithBaseURL:</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">NSURL</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">URLWithString:</span><span style="color:#98C379;">@&quot;hostURL&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">sessionConfiguration:</span><span style="color:#ABB2BF;">sessionConfiguration];</span></span>
<span class="line"><span style="color:#ABB2BF;">    AFHTTPRequestSerializer *requestSerialization </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [AFHTTPRequestSerializer </span><span style="color:#61AFEF;">serializer</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    requestSerialization.timeoutInterval </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">15</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 设置自动管理Cookies</span></span>
<span class="line"><span style="color:#ABB2BF;">    requestSerialization.HTTPShouldHandleCookies </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">YES</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 如果已有Cookie, 则把你的cookie符上</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *cookie </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[</span><span style="color:#E5C07B;">NSUserDefaults</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">standardUserDefaults</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">objectForKey:</span><span style="color:#98C379;">@&quot;Set-Cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (cookie </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            [requestSerialization </span><span style="color:#61AFEF;">setValue:</span><span style="color:#ABB2BF;">cookie </span><span style="color:#61AFEF;">forHTTPHeaderField:</span><span style="color:#98C379;">@&quot;Set-Cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 安全策略</span></span>
<span class="line"><span style="color:#ABB2BF;">    AFSecurityPolicy *securityPolicy </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [AFSecurityPolicy </span><span style="color:#61AFEF;">policyWithPinningMode:</span><span style="color:#ABB2BF;">AFSSLPinningModeNone];</span></span>
<span class="line"><span style="color:#ABB2BF;">    securityPolicy.allowInvalidCertificates </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">YES</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    securityPolicy.validatesDomainName </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NO</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    [httpManager </span><span style="color:#61AFEF;">POST:</span><span style="color:#98C379;">@&quot;logInURL&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">           </span><span style="color:#61AFEF;">parameters:</span><span style="color:#D19A66;">nil</span></span>
<span class="line"><span style="color:#ABB2BF;">             </span><span style="color:#61AFEF;">progress:</span><span style="color:#D19A66;">NULL</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#61AFEF;">success:</span><span style="color:#ABB2BF;">^(NSURLSessionDataTask * _Nonnull task, </span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;">  _Nullable responseObject) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> ([</span><span style="color:#E06C75;">responseObject</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">@&quot;status&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">isEqualToString:</span><span style="color:#98C379;">@&quot;SUCCESS&quot;</span><span style="color:#ABB2BF;">]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#7F848E;font-style:italic;">//获取 Cookie</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#E5C07B;">NSHTTPURLResponse</span><span style="color:#ABB2BF;">* response </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">NSHTTPURLResponse</span><span style="color:#ABB2BF;">* )</span><span style="color:#E5C07B;">task</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">response</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#E5C07B;">NSDictionary</span><span style="color:#ABB2BF;"> *allHeaderFieldsDic </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">response</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">allHeaderFields</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *setCookie </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">allHeaderFieldsDic</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">@&quot;Set-Cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (setCookie </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                          </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *cookie </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[setCookie </span><span style="color:#61AFEF;">componentsSeparatedByString:</span><span style="color:#98C379;">@&quot;;&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">objectAtIndex:</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">                          </span><span style="color:#7F848E;font-style:italic;">// 这里对cookie进行存储</span></span>
<span class="line"><span style="color:#ABB2BF;">                          [[</span><span style="color:#E5C07B;">NSUserDefaults</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">standardUserDefaults</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">setObject:</span><span style="color:#ABB2BF;">cookie </span><span style="color:#61AFEF;">forKey:</span><span style="color:#98C379;">@&quot;cookie&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">                      }</span></span>
<span class="line"><span style="color:#ABB2BF;">                  }</span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">                      </span><span style="color:#7F848E;font-style:italic;">// 登录失败</span></span>
<span class="line"><span style="color:#ABB2BF;">                  }</span></span>
<span class="line"><span style="color:#ABB2BF;">              }</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#61AFEF;">failure:</span><span style="color:#ABB2BF;">^(NSURLSessionDataTask * _Nullable task, </span><span style="color:#E5C07B;">NSError</span><span style="color:#ABB2BF;"> * _Nonnull error) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                  </span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *errorMessage </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">error</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">userInfo</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">@&quot;NSLocalizedDescription&quot;</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">              }];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),p=[e];function t(r,i){return n(),a("div",null,p)}const B=s(o,[["render",t],["__file","iOS的Cookie使用.html.vue"]]);export{B as default};
