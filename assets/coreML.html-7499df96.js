import{_ as a,r as o,o as t,c as p,a as s,b as n,d as l,e as r}from"./app-931984b6.js";const c={},i=s("blockquote",null,[s("p",null,"CoreML 是 iOS 11 新推出的机器学习框架，是人工智能的核心内容，他可以在训练好的机器学习模型应用到 APP 中")],-1),B=s("figure",null,[s("img",{src:"http://upload-images.jianshu.io/upload_images/74454-4726f1eccb39b18c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),d={href:"https://developer.apple.com/documentation/gameplaykit",target:"_blank",rel:"noopener noreferrer"},u=s("h2",{id:"获取模型",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#获取模型","aria-hidden":"true"},"#"),n(" 获取模型")],-1),y=s("p",null,"Core ML 支持多种机器学习模型，其中包括了神经网络 (Neural Network)、组合树 (Tree Ensemble)、支持向量机 (Support Vector Machine) 以及广义线性模型 (Generalized Linear Model)。Core ML 的运行需要使用 Core ML 模型格式（也就是以 .mlmodel 扩展名结尾的模型）。",-1),m={href:"https://developer.apple.com/machine-learning/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"工程实例",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#工程实例","aria-hidden":"true"},"#"),n(" 工程实例")],-1),h=s("p",null,"首先因为 CoreML 和 Vision 都是 iOS 11 才有的功能，你要确保 Xcode9 和 iOS 11 的设备，当然模拟器也可以。开发语言使用 Swift4",-1),g=s("br",null,null,-1),F=s("br",null,null,-1),b=s("img",{src:"https://storage1.cuntuku.com/2017/11/21/Snip20171121_6.png",alt:"Snip20171121_6.png",loading:"lazy"},null,-1),A=s("br",null,null,-1),v=s("br",null,null,-1),f={href:"https://cuntuku.com/image/KNKHr",target:"_blank",rel:"noopener noreferrer"},C=s("img",{src:"https://storage2.cuntuku.com/2017/11/21/Snip20171121_7.md.png",alt:"Snip20171121_7.md.png",loading:"lazy"},null,-1),D=s("br",null,null,-1),k=s("blockquote",null,[s("p",null,"Detects the dominant objects present in an image from a set of 1000 categories such as trees, animals, food, vehicles, people, and more.大意为可以从 1000 个类别中筛选传树木、动物、食品、汽车、人等等。")],-1),E=s("li",null,[s("p",null,[n("模型解读"),s("br"),n(" inputs 中写了需要一个 image 大小 299*299；outputs 里会有两个参数 classLabelProbs 和 classLabel"),s("br"),n(" ，classLabelProbs 是一个[string:Double]的字典数组，数组里每一个字典就是这个输入图片分析得出可能的一个结果 string 就是对图片类型的描述，而 double 就是可能性百分比。另一个 classLabel 就是最有可能的一个一个结果描述")]),s("pre",null,[s("code",null,`*Model Class*下面有这个类文件点进去可以看到如下三个类

**input输入源，可以看到它需要一个CVPixelBuffer格式的图片作为输入**
[![Snip20171121_8.md.png](https://storage2.cuntuku.com/2017/11/21/Snip20171121_8.md.png)](https://cuntuku.com/image/KNlCE)
**output可以看到输出的两个参数classLabel和classLabelProbs正式我们上面有介绍过的所有可能的结果数组与最有可能的结果描述**
[![Snip20171121_9.md.png](https://storage1.cuntuku.com/2017/11/21/Snip20171121_9.md.png)](https://cuntuku.com/image/KNgTJ)
**inceptionv3调用这个类的Prediction方法来开始进行分析**
[![Snip20171121_10.md.png](https://storage1.cuntuku.com/2017/11/21/Snip20171121_10.md.png)](https://cuntuku.com/image/KN1Im)
`)])],-1),S=s("li",null,[s("p",null,[n("编写代码"),s("br"),n(" 定义一个 imageView，一个 Label，一个 button"),s("br"),n(" 点击按钮打开相册选取图片，选取完成执行下面的方法，然后再 label 显示分析结果")])],-1),L=r(`<div class="language-swift line-numbers-mode" data-ext="swift"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">	</span><span style="color:#C678DD;">func</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">process</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">_</span><span style="color:#ABB2BF;"> </span><span style="color:#ABB2BF;font-style:italic;">image</span><span style="color:#ABB2BF;">: UIImage) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        imageView.image = image</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 需要CVPixelBuffer格式的输入源</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">guard</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> pixelBuffer = image.</span><span style="color:#61AFEF;">pixelBuffer</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">width</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">299</span><span style="color:#ABB2BF;">, </span><span style="color:#61AFEF;">height</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">299</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">return</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//I have \`Use of unresolved identifier &#39;Inceptionv3&#39;\` error here when I use New Build System (File &gt; Project Settings)   ¯\\_(ツ)_/¯</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> model = </span><span style="color:#61AFEF;">Inceptionv3</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">do</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 调用model的prediction方法进行分析</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> output = </span><span style="color:#C678DD;">try</span><span style="color:#ABB2BF;"> model.</span><span style="color:#61AFEF;">prediction</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">image</span><span style="color:#ABB2BF;">: pixelBuffer)</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;">// 打印输出结果</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> probs = output.</span><span style="color:#E06C75;">classLabelProbs</span><span style="color:#ABB2BF;">.</span><span style="color:#56B6C2;">sorted</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">$0</span><span style="color:#ABB2BF;">.value &gt; </span><span style="color:#E5C07B;">$1</span><span style="color:#ABB2BF;">.value }</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> prob = probs.</span><span style="color:#56B6C2;">first</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                Label.text = </span><span style="color:#98C379;">&quot;</span><span style="color:#C678DD;">\\(</span><span style="color:#ABB2BF;">prob.</span><span style="color:#E06C75;">key</span><span style="color:#C678DD;">)</span><span style="color:#98C379;"> </span><span style="color:#C678DD;">\\(</span><span style="color:#ABB2BF;">prob.value</span><span style="color:#C678DD;">)</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">catch</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">presentAlertController</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">withTitle</span><span style="color:#ABB2BF;">: title,</span></span>
<span class="line"><span style="color:#ABB2BF;">                                        </span><span style="color:#61AFEF;">message</span><span style="color:#ABB2BF;">: error.</span><span style="color:#E06C75;">localizedDescription</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行效果" tabindex="-1"><a class="header-anchor" href="#运行效果" aria-hidden="true">#</a> 运行效果</h2>`,2),x={href:"https://cuntuku.com/image/KNToV",target:"_blank",rel:"noopener noreferrer"},N=s("img",{src:"https://storage2.cuntuku.com/2017/11/21/Snip20171121_3.md.png",alt:"Snip20171121_3.md.png",loading:"lazy"},null,-1),M=s("br",null,null,-1),V={href:"https://cuntuku.com/image/KNvFW",target:"_blank",rel:"noopener noreferrer"},w=s("img",{src:"https://storage1.cuntuku.com/2017/11/21/Snip20171121_4.md.png",alt:"Snip20171121_4.md.png",loading:"lazy"},null,-1),K=s("br",null,null,-1),P={href:"https://cuntuku.com/image/KNNdd",target:"_blank",rel:"noopener noreferrer"},I=s("img",{src:"https://storage2.cuntuku.com/2017/11/21/Snip20171121_5.md.png",alt:"Snip20171121_5.md.png",loading:"lazy"},null,-1),z=s("h2",{id:"demo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),n(" Demo")],-1),T={href:"https://github.com/OrageKK/coreML-Examples",target:"_blank",rel:"noopener noreferrer"},q=s("br",null,null,-1),O=s("strong",null,"如果有帮助烦请点 star",-1);function j(G,U){const e=o("ExternalLinkIcon");return t(),p("div",null,[i,B,s("p",null,[n("所谓已训练模型 (trained model)指的是对一组训练数据应用了某个机器学习算法后，所生成的一组结果 Core ML 是领域特定 (domain-specific) 框架和功能的基础所在。Core ML 为 Vision 提供了图像处理的支持，为 Foundation 提供了自然语言处理的支持（例如 NSLinguisticTagger 类），为 "),s("a",d,[n("GameplayKit"),l(e)]),n(" 提供了对学习决策树 (learned decision tree) 进行分析的支持。Core ML 本身是基于底层基本类型而建立的，包括 Accelerate、BNNS 以及 Metal Performance Shaders 等。")]),u,y,s("p",null,[n("Apple 提供了一些常见的"),s("a",m,[n("开源模型"),l(e)]),n("供大家使用，这些模型已经使用了 Core ML 模型格式。您可以自行下载这些模型，然后就可以开始在应用中使用它们了。")]),_,h,s("ol",null,[s("li",null,[s("p",null,[n("将模型添加到 Xcode 中"),g,n(" 创建工程并引入模型文件"),F,b,A,n(" 单击这个文件就可以看到这个模型的详细信息"),v,s("a",f,[C,l(e)]),D,n(" 下面是这个模型的官方介绍")]),k]),E,S]),L,s("p",null,[s("a",x,[N,l(e)]),M,s("a",V,[w,l(e)]),K,s("a",P,[I,l(e)])]),z,s("p",null,[s("a",T,[n("👉Demo 下载"),l(e)]),q,O])])}const $=a(c,[["render",j],["__file","coreML.html.vue"]]);export{$ as default};