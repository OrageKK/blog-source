import{_ as s,r as t,o as r,c as o,a as i,b as a,d as e,e as n}from"./app-rGCND2AC.js";const p={},c=n(`<blockquote><p>前言</p></blockquote><blockquote><p>移动端的数据库选型一直是一个难题，直到前段时间看到了 WeMobileDev(微信前端团队)放出了第三个开源组件-WCDB</p></blockquote><blockquote><p>WCDB(WeChat DataBase)是微信官方的移动端数据库组件，致力于提供一个高效、易用、完整的移动端存储方案</p></blockquote><h2 id="微信团队怎么说" tabindex="-1"><a class="header-anchor" href="#微信团队怎么说"><span>微信团队怎么说</span></a></h2><ul><li><p>基于 SQLCipher</p></li><li><p>WCDB-iOS/Mac</p></li><li><p>WCDB-Android</p></li><li><p>数据库损坏修复工具 WDBRepair</p></li></ul><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><p>WCDB 的出现可以说解决了目前移动端数据库的几个难点</p><ul><li><p>首先在选型上，<strong>FMDB</strong>的 SQL 拼接、难以防止的 SQL 注入；<strong>CoreData</strong>虽然可以方便 ORM，但学习成本高，稳定性堪忧，而且多线程鸡肋；另外基于 C 语言的<strong>sqlite</strong>我想用的人也应该不多；除了上述关系型数据库之外然后还有一些其他的 Key-Value 型数据库，如我用过的 Realm，对于 ObjC 开发者来说，上手倒是没什么难度，但缺点显而易见，需要继承，入侵性强，对于单继承的 OC 来说这并不理想，而且对于集合类型不完全支持，复杂查询也比较无力。</p></li><li><p><strong>高效</strong></p><ul><li><p>多线程高并发：WCDB 支持多线程读与读、读与写并发执行，写与写串行执行。</p></li><li><p>批量写操作性能测试：</p><table><thead><tr><th>批量写</th><th style="text-align:center;">ops/sec</th></tr></thead><tbody><tr><td>WCDB</td><td style="text-align:center;">458000</td></tr><tr><td>FMDB</td><td style="text-align:center;">161000</td></tr></tbody></table></li></ul></li><li><p><strong>易用</strong> WCDB 支持一句代码即可将数据取出并组合为 object</p><ul><li><p>WINQ(WCDB 语言集成查询)：通过 WINQ，开发者无须为了拼接 SQL 的字符串而写一大坨胶水代码。</p></li><li><p>ORM(Object Relational Mapping)：WCDB 支持灵活、易用的 ORM。开发者可以很便捷地定义表、索引、约束，并进行增删改查操作。</p></li><li><p>像这样</p><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[database </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getObjectsOfClass:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WCTSampleConvenient.class</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">		fromTable:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">tableName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">		where:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">WCTSampleConvenient.intValue</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;=</span><span style="color:#D19A66;--shiki-dark:#D19A66;">10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">		limit:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">20</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p><strong>完整</strong></p><ul><li>加密：WCDB 提供基于 SQLCipher 的数据库加密。</li><li>损坏修复：WCDB 内建了 Repair Kit 用于修复损坏的数据库。</li><li>WCDB 提供接口直接获取 SQL 的执行耗时，可用于监控性能。</li><li>反注入：WCDB 内建了对 SQL 注入的保护</li></ul></li></ul><h2 id="orm" tabindex="-1"><a class="header-anchor" href="#orm"><span>ORM</span></a></h2><p>在 WCDB 内，ORM（Object Relational Mapping）是指</p><ul><li><p>将一个 ObjC 的类，映射到数据库的表和索引；</p></li><li><p>将类的 property，映射到数据库表的字段；</p></li></ul><p>这一过程。通过 ORM，可以达到直接通过 Object 进行数据库操作，省去拼装过程的目的。</p><p>WCDB 通过内建的宏实现 ORM 的功能。如下</p><figure><img src="https://s2.ax1x.com/2019/11/15/Ma6EBF.png" alt="Ma6EBF.png" tabindex="0" loading="lazy"><figcaption>Ma6EBF.png</figcaption></figure><figure><img src="https://s2.ax1x.com/2019/11/15/Ma6FXT.png" alt="Ma6FXT.png" tabindex="0" loading="lazy"><figcaption>Ma6FXT.png</figcaption></figure>`,15),d=i("strong",null,"PS",-1),B={href:"http://xn--siqsr627c.mm",target:"_blank",rel:"noopener noreferrer"},h=i("strong",null,"WCTTableCoding",-1),k=i("strong",null,"WCDB_PROPERTY",-1),m=n(`<p>对于一个已有的 ObjC 类，</p><ul><li><p>引用 WCDB 框架头文件#import &lt;WCDB/WCDB.h&gt;，并定义类遵循 WCTTableCoding 协议</p></li><li><p><strong>WCDB_PROPERTY</strong>用于在头文件中声明绑定到数据库表的字段。</p></li><li><p><strong>WCDB_IMPLEMENTATION</strong>，用于在类文件中定义绑定到数据库表的类。同时，该宏内实现了 WCTTableCoding。因此，开发者无须添加更多的代码来完成 WCTTableCoding 的接口</p></li><li><p><strong>WCDB_SYNTHESIZE</strong>，用于在类文件中定义绑定到数据库表的字段。</p></li><li><p><strong>WCDB_PRIMARY</strong>用于定义主键</p></li><li><p><strong>WCDB_PRIMARY_AUTO_INCREMENT</strong> 用于定义自增主键</p></li><li><p><strong>WCDB_INDEX</strong>用于定义索引</p></li><li><p><strong>WCDB_UNIQUE</strong>用于定义唯一约束</p></li><li><p><strong>WCDB_NOT_NULL</strong>用于定义非空约束</p></li></ul><h2 id="crud" tabindex="-1"><a class="header-anchor" href="#crud"><span>CRUD</span></a></h2><p>得益于 ORM 的定义，WCDB 可以直接进行通过 object 进行增删改查（CRUD）操作。</p><ul><li><p><strong>增</strong></p><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">//插入</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  Person *man </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[Person </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">init</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  man.isAutoIncrement </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> YES</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  man.name </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#98C379;--shiki-dark:#98C379;"> @&quot;Hello, WCDB!&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  man.age </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 12</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  [database </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">insertObject:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">man </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">into:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">TABLE_WCDB_NAME];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>删</strong></p><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [database </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">deleteObjectsFromTable:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">TABLE_WCDB_NAME </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">where:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person.studentId </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> studentId];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>改</strong></p><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person *person </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [[Person </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">alloc</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">] </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">init</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">  person.name </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> content;</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">  return</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [database </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">updateRowsInTable:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">TABLE_WCDB_NAME </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">onProperties:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person.name </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">withObject:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">person </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">where:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person.studentId </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">==</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> studentId];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>查</strong></p><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSArray</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&lt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person *</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">&gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> * person </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [database </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">getObjectsOfClass:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person.class </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">fromTable:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">TABLE_WCDB_NAME </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">orderBy:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">Person.localID.</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">order</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">()];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="transaction" tabindex="-1"><a class="header-anchor" href="#transaction"><span>Transaction</span></a></h2><p>WCDB 内可通过两种方式执行 Transaction（事务），一是 runTransaction:接口</p>`,7),g={href:"https://imgchr.com/i/Ma6AnU",target:"_blank",rel:"noopener noreferrer"},u=i("img",{src:"https://s2.ax1x.com/2019/11/15/Ma6AnU.md.png",alt:"Ma6AnU.md.png",tabindex:"0",loading:"lazy"},null,-1),b=i("figcaption",null,"Ma6AnU.md.png",-1),A=i("p",null,"这种方式要求数据库操作在一个 BLOCK 内完成，简单易用。",-1),C=i("p",null,"另一种方式则是获取 WCTTransaction 对象",-1),F={href:"https://imgchr.com/i/Ma6eAJ",target:"_blank",rel:"noopener noreferrer"},y=i("img",{src:"https://s2.ax1x.com/2019/11/15/Ma6eAJ.md.png",alt:"Ma6eAJ.md.png",tabindex:"0",loading:"lazy"},null,-1),D=i("figcaption",null,"Ma6eAJ.md.png",-1),_=n('<p>WCTTransaction 对象可以在类或函数间传递，因此这种方式也更具灵活性。</p><h2 id="winq" tabindex="-1"><a class="header-anchor" href="#winq"><span>WINQ</span></a></h2><p>WINQ（WCDB Integrated Query，音&#39;wink&#39;），即 WCDB 集成查询，是将自然查询的 SQL 集成到 WCDB 框架中的技术，基于 C++实现。</p><ul><li>免去拼接 SQL 字符串、防注入</li><li>借助 IDE 代码提示和编译器语法检查</li><li>对于一个已绑定 ORM 的类，可以通过 className.propertyName 的方式，获得数据库内字段的映射</li><li>WINQ 的接口包括但不限于： <ul><li>一元操作符：+、-、!等</li><li>二元操作符：||、&amp;&amp;、+、-、*、/、|、&amp;、&lt;&lt;、&gt;&gt;、&lt;、&lt;=、==、!=、&gt;、&gt;=等</li><li>范围比较：IN、BETWEEN 等</li><li>字符串匹配：LIKE、GLOB、MATCH、REGEXP 等</li><li>聚合函数：AVG、COUNT、MAX、MIN、SUM 等</li><li>...</li></ul></li></ul><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h3><ul><li>初衷，适应 WCDB+ORM 解决 SQL 字符串的代码冗余和难以被编译器进行语法检查而造成的错误和时间浪费。SQL 字符串太容易被注入</li><li>SQL 抽象</li><li>封装常用操作，覆盖 80%的使用场景</li><li>暴露底层接口，适配剩余 20%的特殊情况</li><li>定义常用操作</li><li>特殊场景所暴露的底层接口，应该以什么形式存在？</li><li>SELECT、DISTINCT、ALL 等等大写字母是 keyword，属于 SQL 的保留字。</li><li>result-column、``table-or-subquery、expr 等等小写字母是 token。token 可以再进一步地展开其构成的语法规则。</li><li>将固定的 keyword，封装为函数名，作为连接。</li><li>将可以展开的 token，封装为类，并在类内实现其不同的组合。</li><li>在语法规则中，WHERE、LIMIT 等都接受 expr 作为参数。因此，不管 SQL 多么复杂，StatementSelect 也只接受 Expr 的参数。而其组合的能力，则在 Expr 类内实现。</li></ul><h3 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h3><p><strong>as 重定向</strong></p><p>基于 ORM 的支持，我们可以从数据库直接取出一个 Object。然而，有时候需要取出并非是某个字段，而是有一些组合。例如：</p><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1wT04kHF8su04FELDiaTjw6vmh0DmDibNqsQZZp61Dr1lAfPuyqYDgv2w/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这段代码从数据库中取出了消息的最新的修改时间，并以此将此时间作为消息的创建时间，新建了一个 message。这种情况下，就可以使用 as 重定向。</p><p>as 重定向，它可以将一个查询结果重定向到某一个字段，如下：</p><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1ibXvcR7J18em4DydIzyQ2EVjcLCTcN9njspEph85UMnlGwzw9dSeZ3A/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>通过 as(Message.createTime)的语法，将查询结果重新指向了 createTime。因此只需一行代码便可完成原来的任务。</p><p><strong>链式调用</strong></p><p>链式调用是指对象的接口返回一个对象，从而允许在单个语句中将调用链接在一起，而不需要变量来存储中间结果。</p><p>WCDB 对于增删改查操作，都提供了对应的类以实现链式调用</p><ul><li>WCTInsert</li><li>WCTDelete</li><li>WCTUpdate</li><li>WCTSelect</li><li>WCTRowSelect</li><li>WCTMultiSelect</li></ul><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc172epk1WSTvV3A8toxkjs2h23NLn5PgrVunTVVnahR15R0aEdLia0oPQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>where、orderBy、limit 等接口的返回值均为 self，因此可以通过链式调用，更自然更灵活的写出对应的查询。</p><p>传统的接口方便快捷，可以直接获得操作结果；链式接口则更具灵活性，开发者可以获取数据库操作的耗时、错误信息；也可以通过遍历逐个生成 object。</p><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1LO9iaRVNx1YsIlZX6Xhy7ichve0CcsvBNibGaKaPgbZN9BvpticjBWVicqw/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>WCDB 内同时支持这两种接口，优势互补，开发者可以根据需求，选择使用。</p><p><strong>多表查询</strong></p><p>SQLite 支持联表查询，在某些特定的场景下，可以起到优化性能、简化表结构的作用。</p><p>WCDB 同样提供了对应的接口，并在 ORM 的支持下，通过 WCTMultiSelect 的链式接口，可以同时从表中取出多个类的对象。</p><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1OAQQtZ36iaibr6Oric1XNA9E9ribfJefdjrHTjy0e62LS1XxHialzibWOeJw/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p><strong>类字段绑定</strong></p><p>在 ORM 中，我们通过宏，将 ObjC 类的 property 绑定为数据库的一个字段。但并非所有 property 的类型都能绑定到字段。</p><p>WCDB 内置支持的类型有：</p><ul><li>const char*的 C 字符串类型</li><li>包括但不限于 int、unsigned、long、unsigned long、long long、unsigned long long 等所有基于整型的 C 基本类型</li><li>包括但不限于 float、double、long double 等所有基于浮点型的 C 基本类型</li><li>enum 及所有基于枚举型的 C 基本类型</li><li>NSString、NSMutableString</li><li>NSData、NSMutableData</li><li>NSArray、NSMutableArray</li><li>NSDictionary、NSMutableDictionary</li><li>NSSet、NSMutableSet</li><li>NSValue</li><li>NSDate</li><li>NSNumber</li><li>NSURL</li></ul><p>然而，内置支持得再多，也不可能完全覆盖开发者所有的需求。因此 WCDB 支持开发者自定义类字段绑定。</p><p>类只需实现 WCTColumnCoding 协议，即可支持绑定。</p><figure><img src="http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1Nl0xSkc8HpEKr5ynDEEUver6lhNGBgtAAR9UicicqdsREmGnicOLfbniag/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>columnTypeForWCDB 接口定义类对应数据库中的类型</li><li>unarchiveWithWCTValue:接口定义从数据库类型反序列化到类的转换方式</li><li>archivedWCTValue 接口定义从类序列化到数据库类型的转换方式</li></ul><h2 id="数据库修复" tabindex="-1"><a class="header-anchor" href="#数据库修复"><span>数据库修复</span></a></h2><ul><li>官方的 Dump 恢复方案 - 遍历 sqlite_master 表，将未损坏的表和已损坏的前半部分读取出来将 dump 出来的 SQL 语句逐行执行，最终可以得到一个等效的新 DB<br> 功率约为 30%。 - 第一页就损坏后续无法读取</li><li>备份恢复方案 <ul><li>COPY</li><li>在 DB 完好的时候执行.dump</li><li>Backup API： SQLite 自身提供的一套备份机制，按 Page 为单位复制到新 DB， 支持热备份。</li><li>最终选择 Dump + 压缩，恢复成功率达到 72%</li></ul></li><li>解析 B-tree 恢复方案（RepairKit） <ul><li>成功率约为 78%</li></ul></li><li>不同方案的组合 <ul><li>RepairKit 尝试恢复最新数据</li><li>备份恢复 遇到错误填补漏缺</li><li>Dump 最后的尝试</li></ul></li></ul><h2 id="for-android" tabindex="-1"><a class="header-anchor" href="#for-android"><span>For Android</span></a></h2>',38),f=i("li",null,[i("p",null,"基本功能"),i("ul",null,[i("li",null,"基于 SQLCipher 的数据库加密"),i("li",null,"使用连接池实现并发读写"),i("li",null,"内建 Repair Kit 可用于修复损坏数据"),i("li",null,"针对占用空间大小优化的数据库备份/恢复功能"),i("li",null,"日志输出重定向以及性能跟踪接口"),i("li",null,"内建用于全文搜索的 mmicu FTS3/4 分词器")])],-1),E=i("p",null,"接入与迁移",-1),x=i("li",null,"WCDB for Android 可通过 Maven 或 AAR 包引用，API 接口与 Android SDK 非常相近， 所以将已有的 App 迁移到 WCDB 是相当容易的。",-1),W={href:"https://github.com/Tencent/wcdb/wiki/Android%E6%8E%A5%E5%85%A5%E4%B8%8E%E8%BF%81%E7%A7%BB",target:"_blank",rel:"noopener noreferrer"},w=i("p",null,"数据库修复",-1),v={href:"https://github.com/Tencent/wcdb/wiki/Android%E6%95%B0%E6%8D%AE%E5%BA%93%E4%BF%AE%E5%A4%8D",target:"_blank",rel:"noopener noreferrer"},S=i("li",null,[i("p",null,"从源码编译"),i("ul",null,[i("li",null,"你可以使用预编译的依赖库（OpenSSL crypto 和 SQLCipher）来编译 WCDB for Android， 使用 Gradle 或 Android Studio 皆可。Android Studio 请导入 android 目录作为 Root Project。"),i("li",null,"编译 WCDB 需要安装 Android NDK r11c 或以上，并在 android/local.properties 上配置好 SDK 与 NDK 路径。Android Studio 一般会帮你配置好。"),i("li",null,"如果你需要自己编译 OpenSSL 等依赖项，你需要一个 Bash 环境（Windows 可以安装 Cygwin 或 MSys）、target 为本机的 C 编译器（如 GCC）、Perl 5 以及 Tcl。之后执行下面命令即可编译依赖项。")])],-1),T=i("blockquote",null,[i("p",null,"参考资料")],-1),M={href:"https://github.com/OrageKK/WCDB_DEMO",target:"_blank",rel:"noopener noreferrer"},N={href:"https://mp.weixin.qq.com/s/1XxcrsR2HKam9ytNk8vmGw",target:"_blank",rel:"noopener noreferrer"},j={href:"https://mp.weixin.qq.com/s/Ln7kNOn3zx589ACmn5ESQA",target:"_blank",rel:"noopener noreferrer"},O={href:"https://mp.weixin.qq.com/s/FY2Y9x1_8TcXHDgTRXcTDA",target:"_blank",rel:"noopener noreferrer"},z={href:"https://mp.weixin.qq.com/s/NFnYEXSxAaHBqpi7WofSPQ",target:"_blank",rel:"noopener noreferrer"};function q(R,L){const l=t("ExternalLinkIcon");return r(),o("div",null,[c,i("p",null,[d,a(":但我不建议这么做，首先要避免在.h 文件中引用<WCDB/WCDB.h>,因为你一旦引用，就需要改变.m "),i("a",B,[a("文件为.mm"),e(l)]),a(" 文件，因为 WCDB 是基于 objectiveC++；你可以使用 Category 特性将其隔离，在 category 中引用<WCDB/WCDB.h>，并遵守"),h,a("协议，使用"),k,a("将声明绑定到数据库表的字段。然后在模型类中引用 category。达到不印象 Controller 和 View 的目的。这点官方 wiki 中也有提到，使用文件模板来创建。具体请见 Demo")]),m,i("figure",null,[i("a",g,[u,e(l)]),b]),A,C,i("figure",null,[i("a",F,[y,e(l)]),D]),_,i("ul",null,[f,i("li",null,[E,i("ul",null,[x,i("li",null,[i("a",W,[a("Android 接入与迁移"),e(l)])])])]),i("li",null,[w,i("ul",null,[i("li",null,[i("a",v,[a("Android 数据库修复"),e(l)])])])]),S]),T,i("blockquote",null,[i("p",null,[i("a",M,[a("Demo"),e(l)])])]),i("blockquote",null,[i("p",null,[i("a",N,[a("微信移动端数据库组件 WCDB 系列（一）-iOS 基础篇"),e(l)])])]),i("blockquote",null,[i("p",null,[i("a",j,[a("微信移动端数据库组件 WCDB 系列（二） — 数据库修复三板斧"),e(l)])])]),i("blockquote",null,[i("p",null,[i("a",O,[a("微信移动端数据库组件 WCDB 系列（三） — WINQ 原理篇"),e(l)])])]),i("blockquote",null,[i("p",null,[i("a",z,[a("微信移动数据库组件 WCDB（四） — Android 特性篇"),e(l)])])])])}const Q=s(p,[["render",q],["__file","WCDB.html.vue"]]),P=JSON.parse(`{"path":"/posts/iOS/source/WCDB.html","title":"WCDB漫谈","lang":"zh-CN","frontmatter":{"title":"WCDB漫谈","date":"2018-01-18T00:00:00.000Z","icon":"others","category":["iOS"],"tag":["iOS","工具集"],"description":"前言 移动端的数据库选型一直是一个难题，直到前段时间看到了 WeMobileDev(微信前端团队)放出了第三个开源组件-WCDB WCDB(WeChat DataBase)是微信官方的移动端数据库组件，致力于提供一个高效、易用、完整的移动端存储方案 微信团队怎么说 基于 SQLCipher WCDB-iOS/Mac WCDB-Android 数据库损坏...","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/iOS/source/WCDB.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"WCDB漫谈"}],["meta",{"property":"og:description","content":"前言 移动端的数据库选型一直是一个难题，直到前段时间看到了 WeMobileDev(微信前端团队)放出了第三个开源组件-WCDB WCDB(WeChat DataBase)是微信官方的移动端数据库组件，致力于提供一个高效、易用、完整的移动端存储方案 微信团队怎么说 基于 SQLCipher WCDB-iOS/Mac WCDB-Android 数据库损坏..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://s2.ax1x.com/2019/11/15/Ma6EBF.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-20T08:16:10.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:tag","content":"工具集"}],["meta",{"property":"article:published_time","content":"2018-01-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-20T08:16:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WCDB漫谈\\",\\"image\\":[\\"https://s2.ax1x.com/2019/11/15/Ma6EBF.png\\",\\"https://s2.ax1x.com/2019/11/15/Ma6FXT.png\\",\\"https://s2.ax1x.com/2019/11/15/Ma6AnU.md.png\\",\\"https://s2.ax1x.com/2019/11/15/Ma6eAJ.md.png\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1wT04kHF8su04FELDiaTjw6vmh0DmDibNqsQZZp61Dr1lAfPuyqYDgv2w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1ibXvcR7J18em4DydIzyQ2EVjcLCTcN9njspEph85UMnlGwzw9dSeZ3A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc172epk1WSTvV3A8toxkjs2h23NLn5PgrVunTVVnahR15R0aEdLia0oPQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1LO9iaRVNx1YsIlZX6Xhy7ichve0CcsvBNibGaKaPgbZN9BvpticjBWVicqw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1OAQQtZ36iaibr6Oric1XNA9E9ribfJefdjrHTjy0e62LS1XxHialzibWOeJw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"http://mmbiz.qpic.cn/mmbiz_jpg/csvJ6rH9MctkzbxEw7JwfIhYBtueEWc1Nl0xSkc8HpEKr5ynDEEUver6lhNGBgtAAR9UicicqdsREmGnicOLfbniag/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\"],\\"datePublished\\":\\"2018-01-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-20T08:16:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"微信团队怎么说","slug":"微信团队怎么说","link":"#微信团队怎么说","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]}]},{"level":2,"title":"ORM","slug":"orm","link":"#orm","children":[]},{"level":2,"title":"CRUD","slug":"crud","link":"#crud","children":[]},{"level":2,"title":"Transaction","slug":"transaction","link":"#transaction","children":[]},{"level":2,"title":"WINQ","slug":"winq","link":"#winq","children":[{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"高级用法","slug":"高级用法","link":"#高级用法","children":[]}]},{"level":2,"title":"数据库修复","slug":"数据库修复","link":"#数据库修复","children":[]},{"level":2,"title":"For Android","slug":"for-android","link":"#for-android","children":[]}],"git":{"createdTime":1678187456000,"updatedTime":1705738570000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1},{"name":"oragekk","email":"oragekk@163.com","commits":1}]},"readingTime":{"minutes":9.65,"words":2894},"filePathRelative":"posts/iOS/source/WCDB.md","localizedDate":"2018年1月18日","excerpt":"<blockquote>\\n<p>前言</p>\\n</blockquote>\\n<blockquote>\\n<p>移动端的数据库选型一直是一个难题，直到前段时间看到了 WeMobileDev(微信前端团队)放出了第三个开源组件-WCDB</p>\\n</blockquote>\\n<blockquote>\\n<p>WCDB(WeChat DataBase)是微信官方的移动端数据库组件，致力于提供一个高效、易用、完整的移动端存储方案</p>\\n</blockquote>\\n<h2>微信团队怎么说</h2>\\n<ul>\\n<li>\\n<p>基于 SQLCipher</p>\\n</li>\\n<li>\\n<p>WCDB-iOS/Mac</p>\\n</li>\\n<li>\\n<p>WCDB-Android</p>\\n</li>\\n<li>\\n<p>数据库损坏修复工具 WDBRepair</p>\\n</li>\\n</ul>","autoDesc":true}`);export{Q as comp,P as data};
