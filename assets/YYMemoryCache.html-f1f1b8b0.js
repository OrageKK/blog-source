import{_ as p,J as o,K as c,L as s,a4 as l,a9 as n,N as e,C as i}from"./framework-ede8edbb.js";const B={},t=s("h1",{id:"yymemorycache-源码分析",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#yymemorycache-源码分析","aria-hidden":"true"},"#"),n(" YYMemoryCache 源码分析")],-1),r=s("h4",{id:"yymemorycache-是内存缓存-所以存取速度非常快-主要用到两种数据结构的-lru-淘汰算法",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#yymemorycache-是内存缓存-所以存取速度非常快-主要用到两种数据结构的-lru-淘汰算法","aria-hidden":"true"},"#"),n(" YYMemoryCache 是内存缓存，所以存取速度非常快，主要用到两种数据结构的 LRU 淘汰算法")],-1),y=e("<li><p>LRU 淘汰算法</p><blockquote><p>LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。</p><p>最常见的实现是使用一个链表保存缓存数据</p><p>【命中率】</p><p>当存在热点数据时，LRU 的效率很好，但偶发性的、周期性的批量操作会导致 LRU 命中率急剧下降，缓存污染情况比较严重。</p><p>Cache 的容量是有限的，当 Cache 的空间都被占满后，如果再次发生缓存失效，就必须选择一个缓存块来替换掉。LRU 法是依据各块使用的情况， 总是选择那个最长时间未被使用的块替换。这种方法比较好地反映了程序局部性规律</p></blockquote></li><li><p>数据结构</p><ul><li>双向链表 (Doubly Linked List)</li><li>哈希表 (Dictionary)</li></ul></li><li><p>缓存操作</p><ul><li>新数据插入到链表头部；</li><li>每当缓存命中（即缓存数据被访问），则将数据移到链表头部；</li><li>当链表满的时候，将链表尾部的数据丢弃。</li></ul></li>",3),d=s("p",null,"分析图",-1),F={href:"https://cuntuku.com/image/bpM38",target:"_blank",rel:"noopener noreferrer"},v=s("img",{src:"https://storage6.cuntuku.com/2019/04/27/bpM38.png",alt:"bpM38.png",tabindex:"0",loading:"lazy"},null,-1),A=s("figcaption",null,"bpM38.png",-1),u=e(`<li><p>YYMemoryCache.m 里的两个分类</p><ol><li><p>链表节点 <code>_YYLinkedMapNode</code></p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">@interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_YYLinkedMapNode</span><span style="color:#ABB2BF;"> : </span><span style="color:#E5C07B;">NSObject</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@package</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 指向前一个节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    __unsafe_unretained _YYLinkedMapNode *_prev; </span><span style="color:#7F848E;font-style:italic;">// retained by dic</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 指向后一个节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    __unsafe_unretained _YYLinkedMapNode *_next; </span><span style="color:#7F848E;font-style:italic;">// retained by dic</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 缓存key</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;"> _key;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 缓存对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;"> _value;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 当前缓存内存开销</span></span>
<span class="line"><span style="color:#ABB2BF;">    NSUInteger _cost;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 缓存时间</span></span>
<span class="line"><span style="color:#ABB2BF;">    NSTimeInterval _time;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">@end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>链表 <code>_YYLinkedMap</code></p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">@interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_YYLinkedMap</span><span style="color:#ABB2BF;"> : </span><span style="color:#E5C07B;">NSObject</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">@package</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 用字典保存所有节点_YYLinkedMapNode (为什么不用oc字典?因为用CFMutableDictionaryRef效率高，毕竟基于c)</span></span>
<span class="line"><span style="color:#ABB2BF;">    CFMutableDictionaryRef _dic;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 总缓存开销</span></span>
<span class="line"><span style="color:#ABB2BF;">    NSUInteger _totalCost;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 总缓存数量</span></span>
<span class="line"><span style="color:#ABB2BF;">    NSUInteger _totalCount;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    _YYLinkedMapNode *_head;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 链表尾节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    _YYLinkedMapNode *_tail;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是否在主线程上，异步释放 _YYLinkedMapNode对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">BOOL</span><span style="color:#ABB2BF;"> _releaseOnMainThread;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 是否异步释放 _YYLinkedMapNode对象</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">BOOL</span><span style="color:#ABB2BF;"> _releaseAsynchronously;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 添加节点到链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;">insertNodeAtHead:</span><span style="color:#ABB2BF;">(_YYLinkedMapNode *)</span><span style="color:#ABB2BF;font-style:italic;">node</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 移动当前节点到链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;">bringNodeToHead:</span><span style="color:#ABB2BF;">(_YYLinkedMapNode *)</span><span style="color:#ABB2BF;font-style:italic;">node</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 移除链表节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;">removeNode:</span><span style="color:#ABB2BF;">(_YYLinkedMapNode *)</span><span style="color:#ABB2BF;font-style:italic;">node</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 移除链表尾节点(如果存在)</span></span>
<span class="line"><span style="color:#ABB2BF;">- (_YYLinkedMapNode *)</span><span style="color:#61AFEF;">removeTailNode</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 移除所有缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span><span style="color:#61AFEF;">removeAll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">@end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>链表插入、查找、替换操作实现</p><ul><li><p>添加节点到链表头节点</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 添加节点到链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)insertNodeAtHead:(_YYLinkedMapNode *)node {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 哈希表保存链表节点node</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">CFDictionarySetValue</span><span style="color:#ABB2BF;">(_dic, (__bridge </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> *)(</span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_key</span><span style="color:#ABB2BF;">), (__bridge </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> *)(node));</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 叠加该缓存开销到总内存开销</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCost </span><span style="color:#C678DD;">+=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_cost</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 总缓存数+1</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCount</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_head) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 存在链表头，取代当前表头</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _head;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_head</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> node;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 重新赋值链表表头临时变量_head</span></span>
<span class="line"><span style="color:#ABB2BF;">        _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> node;</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 不存在链表头</span></span>
<span class="line"><span style="color:#ABB2BF;">        _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> node;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://upload-images.jianshu.io/upload_images/295346-1cb03d629ecbf2fa.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>移动当前节点到链表头节点</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 移动当前节点到链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)bringNodeToHead:(_YYLinkedMapNode *)node {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 当前节点已是链表头节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_head </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> node) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_tail </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> node) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//**如果node是链表尾节点**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 把node指向的上一个节点赋值给链表尾节点</span></span>
<span class="line"><span style="color:#ABB2BF;">        _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 把链表尾节点指向的下一个节点赋值nil</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//**如果node是非链表尾节点和链表头节点**</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 此处比较难以理解：总结如下</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 链接当前节点上节点(node-&gt;_prev)到当前节点下节点（node-&gt;_next）的上索引(-&gt;_prev)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">_next</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 链接当前节点下节点(node-&gt;_next)到当前节点上节点（node-&gt;_prev）的下索引(-&gt;_next)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">_prev</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 此处操作等于将本节点上下索引分别赋值给右左节点上下索引，将上下节点链接</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 把链表头节点赋值给node指向的下一个节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _head;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 把node指向的上一个节点赋值nil</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 把节点赋值给链表头节点的指向的上一个节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">_head</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> node;</span></span>
<span class="line"><span style="color:#ABB2BF;">    _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> node;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://upload-images.jianshu.io/upload_images/295346-682e8396c2d9e092.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>移除节点</p><ul><li><p>移除指定节点</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 移除节点</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)removeNode:(_YYLinkedMapNode *)node {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 从字典中移除node</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">CFDictionaryRemoveValue</span><span style="color:#ABB2BF;">(_dic, (__bridge </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> *)(</span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_key</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 减掉总内存消耗</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCost </span><span style="color:#C678DD;">-=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_cost</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// // 总缓存数-1</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCount</span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 重新连接链表(看图分析吧)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">_next</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">) </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E5C07B;">_prev</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_head </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> node) _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_tail </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> node) _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>移除尾节点</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 移除尾节点(如果存在)</span></span>
<span class="line"><span style="color:#ABB2BF;">- (_YYLinkedMapNode *)removeTailNode {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">_tail) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 拷贝一份要删除的尾节点指针</span></span>
<span class="line"><span style="color:#ABB2BF;">    _YYLinkedMapNode *tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _tail;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 移除链表尾节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">CFDictionaryRemoveValue</span><span style="color:#ABB2BF;">(_dic, (__bridge </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> *)(</span><span style="color:#E5C07B;">_tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_key</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 减掉总内存消耗</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCost </span><span style="color:#C678DD;">-=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_cost</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 总缓存数-1</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCount</span><span style="color:#56B6C2;">--</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_head </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> _tail) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 清除节点，链表上已无节点了</span></span>
<span class="line"><span style="color:#ABB2BF;">        _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 设倒数第二个节点为链表尾节点</span></span>
<span class="line"><span style="color:#ABB2BF;">        _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">_tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_prev</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_tail</span><span style="color:#ABB2BF;">-&gt;</span><span style="color:#E06C75;">_next</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 返回完tail后_tail将会释放</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> tail;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>移除所有缓存</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 移除所有缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)removeAll {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 清空内存开销与缓存数量</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCost </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    _totalCount </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 清空头尾节点</span></span>
<span class="line"><span style="color:#ABB2BF;">    _head </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    _tail </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#61AFEF;">CFDictionaryGetCount</span><span style="color:#ABB2BF;">(_dic) </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 拷贝一份字典</span></span>
<span class="line"><span style="color:#ABB2BF;">        CFMutableDictionaryRef holder </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _dic;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 重新分配新的空间</span></span>
<span class="line"><span style="color:#ABB2BF;">        _dic </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">CFDictionaryCreateMutable</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">CFAllocatorGetDefault</span><span style="color:#ABB2BF;">(), </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, &amp;</span><span style="color:#D19A66;">kCFTypeDictionaryKeyCallBacks</span><span style="color:#ABB2BF;">, &amp;</span><span style="color:#D19A66;">kCFTypeDictionaryValueCallBacks</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_releaseAsynchronously) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 异步释放缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">            dispatch_queue_t queue </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> _releaseOnMainThread </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">dispatch_get_main_queue</span><span style="color:#ABB2BF;">() </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">YYMemoryCacheGetReleaseQueue</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">dispatch_async</span><span style="color:#ABB2BF;">(queue, ^{</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#61AFEF;">CFRelease</span><span style="color:#ABB2BF;">(holder); </span><span style="color:#7F848E;font-style:italic;">// hold and release in specified queue</span></span>
<span class="line"><span style="color:#ABB2BF;">            });</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (_releaseOnMainThread </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">!</span><span style="color:#61AFEF;">pthread_main_np</span><span style="color:#ABB2BF;">()) {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 主线程上释放缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">dispatch_async</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">dispatch_get_main_queue</span><span style="color:#ABB2BF;">(), ^{</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#61AFEF;">CFRelease</span><span style="color:#ABB2BF;">(holder); </span><span style="color:#7F848E;font-style:italic;">// hold and release in specified queue</span></span>
<span class="line"><span style="color:#ABB2BF;">            });</span></span>
<span class="line"><span style="color:#ABB2BF;">        } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 同步释放缓存</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#61AFEF;">CFRelease</span><span style="color:#ABB2BF;">(holder);</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li>`,2),b={href:"https://www.jianshu.com/p/492c3c3a0485",target:"_blank",rel:"noopener noreferrer"},m=s("p",null,"ps 未完待续……",-1);function C(_,E){const a=i("ExternalLinkIcon");return o(),c("div",null,[t,r,s("ol",null,[y,s("li",null,[d,s("figure",null,[s("a",F,[v,l(a)]),A])]),u]),s("blockquote",null,[s("p",null,[n("图片引用自"),s("a",b,[n("YYCache 源码分析(二)"),l(a)]),n(" 感谢作者")]),m])])}const f=p(B,[["render",C],["__file","YYMemoryCache.html.vue"]]);export{f as default};
