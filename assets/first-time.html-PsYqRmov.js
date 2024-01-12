import{_ as n,r as a,o as i,c as h,a as t,b as e,d as o,e as r}from"./app-LXt6v6qG.js";const l={},u=t("h2",{id:"rust-发展历程",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rust-发展历程","aria-hidden":"true"},"#"),e(" Rust 发展历程")],-1),_=t("p",null,"Rust 最早是 Mozilla 雇员 Graydon Hoare 的个人项目。从 2009 年开始，得到了 Mozilla 研究院的资助，2010 年项目对外公布，2010 ～ 2011 年间实现自举。自此以后，Rust 在部分重构 -> 崩溃的边缘反复横跳（历程极其艰辛），终于，在 2015 年 5 月 15 日发布 1.0 版。",-1),d={href:"https://github.com/rust-lang/rust",target:"_blank",rel:"noopener noreferrer"},c={href:"https://foundation.rust-lang.org/",target:"_blank",rel:"noopener noreferrer"},R=t("p",null,"大家可能疑惑 Rust 为啥用了这么久才到 1.0 版本？与之相比，Go 语言 2009 年发布，却在 2012 年仅用 3 年就发布了 1.0 版本。",-1),p=t("ul",null,[t("li",null,"首先，Rust 语言特性较为复杂，所以需要全盘考虑的问题非常多；"),t("li",null,"其次，Rust 当时的参与者太多，七嘴八舌的声音很多，众口难调，而 Rust 开发团队又非常重视社区的意见；"),t("li",null,"最后，一旦 1.0 快速发布，那绝大部分语言特性就无法再被修改，对于有完美强迫症的 Rust 开发者团队来说，某种程度上的不完美是不可接受的。")],-1),f=t("p",null,"因此，Rust 语言用了足足 6 年时间，才发布了尽善尽美的 1.0 版本。",-1),E={id:"为何又来一门新语言",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#为何又来一门新语言","aria-hidden":"true"},"#",-1),m={href:"https://course.rs/into-rust.html#%E4%B8%BA%E4%BD%95%E5%8F%88%E6%9D%A5%E4%B8%80%E9%97%A8%E6%96%B0%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},g=t("p",null,[e("简而言之，"),t("strong",null,"因为还缺一门无 GC 且无需手动内存管理、性能高、工程性强、语言级安全性以及能同时得到工程派和学院派认可的语言"),e("，而 Rust 就是这样的语言。你也可以回忆下熟悉的语言，看是不是有另外一门可以同时满足这些需求：)")],-1),B=t("p",null,"至于 Rust 最为人诟病的点，那也就一个：学习曲线陡峭。不过当语言生态起来后，这都不算问题。",-1),A={id:"缓解内卷",tabindex:"-1"},k=t("a",{class:"header-anchor",href:"#缓解内卷","aria-hidden":"true"},"#",-1),C={href:"https://course.rs/into-rust.html#%E7%BC%93%E8%A7%A3%E5%86%85%E5%8D%B7",target:"_blank",rel:"noopener noreferrer"},x=t("p",null,"有人说 Rust 作为新语言会增加内卷，其实恰恰相反，Rust 可以缓解内卷。为何不说 C++ 内卷，而说 Java、Python、JS 内卷？不就是后几个相对简单、上手容易嘛？而 Rust 怎么看也是 C++ 级别的上手难度。",-1),F=t("p",null,"其实从我内心不可告人的角度出发，并不希望 Rust 大众化，因为这样可以保饭碗、保薪资，还能拥有行业内的地位。但是从对 Rust 的喜爱角度出发，我还是希望能卷一些。不过，目前来看真的卷不动，现在全世界范围内 Rust 的需求都大于供给，特别是优秀的 Rust 程序员更是难寻。",-1),S=t("p",null,"与 Go 语言相比，成为一名优秀的 Rust 程序员所需的门槛高得多，例如融汇贯通 Rust 语言各种中高级特性、闭着眼睛趟过各种坑、不用回忆无需查找就能立刻写出最合适的包/模块/方法、性能/安全/工程性的权衡选择信手拈来、深层性能优化易如反掌、异步编程小菜一碟，更别说 Rust 之外的操作系统、网络、算法等等相关知识。",-1),G=t("p",null,"所以，Rust 可以缓解内卷，而不是增加内卷。可以说是程序员的福音，不再是被随意替换的螺丝钉。",-1),v={id:"运行效率",tabindex:"-1"},D=t("a",{class:"header-anchor",href:"#运行效率","aria-hidden":"true"},"#",-1),y={href:"https://course.rs/into-rust.html#%E8%BF%90%E8%A1%8C%E6%95%88%E7%8E%87",target:"_blank",rel:"noopener noreferrer"},j={href:"https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/rust.html",target:"_blank",rel:"noopener noreferrer"},J=t("p",null,"同时 Rust 有一个极大的优点：只要按照正确的方式使用 Rust，无需性能优化，就能有非常优秀的表现，不可谓不惊艳。",-1),N=t("p",null,"现在有不少用 Rust 重写的工具、平台都超过了原来用 C、C++ 实现的版本，将老前辈拍死在沙滩上，俨然成为一种潮流～～",-1),W={id:"开发效率",tabindex:"-1"},I=t("a",{class:"header-anchor",href:"#开发效率","aria-hidden":"true"},"#",-1),L={href:"https://course.rs/into-rust.html#%E5%BC%80%E5%8F%91%E6%95%88%E7%8E%87",target:"_blank",rel:"noopener noreferrer"},P=t("p",null,"Rust 的开发效率可以用先抑后扬来形容。在最初上手写项目时，你的开发速度将显著慢于 Go、Java 等语言，不过，一旦开始熟悉标准库、熟悉生命周期和所有权的常用解决方法，开发效率将大幅提升，甚至当形成肌肉记忆后，开发效率将不会慢于这些语言，而且原生就能写出高质量、安全、高效的代码，可以说中高级 Rust 程序员就是高效程序员的代名词。",-1),M={id:"开源",tabindex:"-1"},T=t("a",{class:"header-anchor",href:"#开源","aria-hidden":"true"},"#",-1),V={href:"https://course.rs/into-rust.html#%E5%BC%80%E6%BA%90",target:"_blank",rel:"noopener noreferrer"},z=r("<p>目前 Rust 的主战场是在开源上，Go 的成功也证明了农村包围城市( 开源包围商业 )的可行性。</p><ul><li>UI 层开发，Rust 的 WASM 发展的如火如荼，隐隐有王者风范，在 JS 的基础设施领域，Rust 也是如鱼得水，例如 <code>swc</code>、 <code>deno</code> 等。同时 <code>nextjs</code> 也是押宝 Rust，可以说 Rust 在前端的成功完全是无心插柳柳成荫。</li><li>基础设施层、数据库、搜索引擎、网络设施、云原生等都在出现 Rust 的身影，而且还不少。</li><li>系统开发，目前 Linux 已经将 Rust 语言纳入内核，是继 C 语言后第二门支持内核开发的语言，不过刚开始将主要支持驱动开发。</li><li>系统工具，现在最流行的就是用 Rust 重写之前 C、C++ 写的一票系统工具，还都获得了挺高的关注和很好的效果，例如 sd, exa, ripgrep, fd, bat 等。</li><li>操作系统，正在使用 Rust 开发的操作系统有好几个，其中最有名的可能就是谷歌的 Fuchsia，Rust 在其中扮演非常重要的角色。</li><li>区块链，如果 Rust 的份额说第二，应该没人敢稳说自己是第一吧？</li></ul><p>类似的还有很多，我们就不一一列举。总之，现在有大量的项目正在被 Rust 重写，同时还有海量的项目在等待被重写，这些都是赚取github 星星和认可的好机会。在其它语言杀成一片红海时，Rust 还留了一大片蓝海等待大家的探索！</p>",3),H={id:"相比其他语言-rust-的优势",tabindex:"-1"},O=t("a",{class:"header-anchor",href:"#相比其他语言-rust-的优势","aria-hidden":"true"},"#",-1),q={href:"https://course.rs/into-rust.html#%E7%9B%B8%E6%AF%94%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80-rust-%E7%9A%84%E4%BC%98%E5%8A%BF",target:"_blank",rel:"noopener noreferrer"},w=t("p",null,"由于篇幅有限，我们这里不会讲述详细的对比，就是简单介绍下 Rust 的优势，并不是说 Rust 优于这些语言，大家轻喷：)",-1),U={id:"go",tabindex:"-1"},K=t("a",{class:"header-anchor",href:"#go","aria-hidden":"true"},"#",-1),Q={href:"https://course.rs/into-rust.html#go",target:"_blank",rel:"noopener noreferrer"},X=t("p",null,"Rust 语言表达能力更强，性能更高。同时线程安全方面 Rust 也更强，不容易写出错误的代码。包管理 Rust 也更好，Go 虽然在 1.10 版本后提供了包管理，但是目前还比不上 Rust 。",-1),Y={id:"c",tabindex:"-1"},Z=t("a",{class:"header-anchor",href:"#c","aria-hidden":"true"},"#",-1),$={href:"https://course.rs/into-rust.html#c",target:"_blank",rel:"noopener noreferrer"},tt=t("p",null,"Rust 与 C++ 的性能旗鼓相当，但是在安全性方面 Rust 会更优，特别是使用第三方库时，Rust 的严格要求会让三方库的质量明显高很多。",-1),et=t("p",null,"语言本身的学习，Rust 的前中期学习曲线会更陡峭，但是在实际的项目开发过程中，C++ 会更难，代码也更难以维护。",-1),st={id:"java",tabindex:"-1"},ot=t("a",{class:"header-anchor",href:"#java","aria-hidden":"true"},"#",-1),rt={href:"https://course.rs/into-rust.html#java",target:"_blank",rel:"noopener noreferrer"},nt=t("p",null,"除了极少数纯粹的数字计算性能，Rust 的性能全面领先于 Java 。同时 Rust 占用内存小的多，因此实现同等规模的服务，Rust 所需的硬件成本会显著降低。",-1),at={id:"python",tabindex:"-1"},it=t("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#",-1),ht={href:"https://course.rs/into-rust.html#python",target:"_blank",rel:"noopener noreferrer"},lt=t("p",null,"性能自然是 Rust 完胜，同时 Rust 对运行环境要求较低，这两点差不多就足够抉择了。不过 Python 和 Rust 的彼此适用面其实也不太冲突。",-1),ut={id:"使用现状",tabindex:"-1"},_t=t("a",{class:"header-anchor",href:"#使用现状","aria-hidden":"true"},"#",-1),dt={href:"https://course.rs/into-rust.html#%E4%BD%BF%E7%94%A8%E7%8E%B0%E7%8A%B6",target:"_blank",rel:"noopener noreferrer"},ct=t("li",null,"AWS 从 2017 年开始就用 Rust 实现了无服务器计算平台： AWS Lambda 和 AWS Fargate，并且用 Rust 重写了 Bottlerocket OS 和 AWS Nitro 系统，这两个是弹性计算云 (EC2) 的重要服务",-1),Rt=t("li",null,"Cloudflare 是 Rust 的重度用户，DNS、无服务计算、网络包监控等基础设施都与 Rust 密不可分",-1),pt=t("li",null,"Dropbox 的底层存储服务完全由 Rust 重写，达到了数万 PB 的规模",-1),ft=t("li",null,"Google 除了在安卓系统的部分模块中使用 Rust 外，还在它最新的操作系统 Fuchsia 中重度使用 Rust",-1),Et=t("li",null,"Facebook 使用 Rust 来增强自己的网页端、移动端和 API 服务的性能，同时还写了 Hack 编程语言的虚拟机",-1),bt=t("li",null,"Microsoft 使用 Rust 为 Azure 平台提供一些组件，其中包括 IoT 的核心服务",-1),mt={href:"http://npmjs.com",target:"_blank",rel:"noopener noreferrer"},gt=t("li",null,"Rust 目前已经成为全世界区块链平台的首选开发语言",-1),Bt=t("li",null,"TiDB，国内最有名的开源分布式数据库",-1),At=t("p",null,[e("尤其值得一提的是，AWS 实际上在押宝 Rust，内部对 Rust 的使用已经上升到头等公民 "),t("strong",null,"first-class"),e(" 的地位。")],-1),kt={id:"rust-语言版本更新",tabindex:"-1"},Ct=t("a",{class:"header-anchor",href:"#rust-语言版本更新","aria-hidden":"true"},"#",-1),xt={href:"https://course.rs/into-rust.html#rust-%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC%E6%9B%B4%E6%96%B0",target:"_blank",rel:"noopener noreferrer"},Ft=r('<p>与其它语言相比，Rust 的更新迭代较为频繁（得益于精心设计过的发布流程以及 Rust 语言开发者团队的严格管理）：</p><ul><li>每 6 周发布一个迭代版本</li><li>2-3 年发布一个新的大版本，例如 Rust 2018 edition，Rust 2021 edition</li></ul><p>好处在于，可以满足不同的用户群体的需求：</p><ul><li>对于活跃的 Rust 用户，他们总是能很快获取到新的语言内容，毕竟，尝鲜是技术爱好者的共同特点：)</li><li>对于一般的用户，edition 大版本的发布会告诉他们：Rust 语言相比上次大版本发布，有了重大的改进，值得一看</li><li>对于 Rust 语言开发者，可以让他们的工作成果更快的被世人所知，不必锦衣夜行</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>连续 6 年最受欢迎的语言当然不是浪得虚名。 无 GC、效率高、工程性强、强安全性以及能同时得到工程派和学院派认可，这些令 Rust 拥有了自己的特色和生存空间。社区的友善，生态的快速发展，大公司的重仓跟进，一切的一切都在说明 Rust 的璀璨未来。</p><p>当然，语言毕竟只是工具，我们不能神话它，但是可以给它一个机会，也许，你最终能收获自己的真爱 ：)</p><p>相信大家听了这么多 Rust 的优点，已经迫不及待想要开始学习旅程，那么容我引用一句 CS（Counter-Strike：反恐精英） 的经典台词：Ok, Let&#39;s Rust.</p>',8),St={href:"https://course.rs/into-rust.html",target:"_blank",rel:"noopener noreferrer"};function Gt(vt,Dt){const s=a("ExternalLinkIcon");return i(),h("div",null,[u,_,t("p",null,[e("在紧锣密鼓的开发过程中，Rust 建立了一个强大且活跃的社区，形成一整套完善稳定的项目贡献机制（Rust 能够飞速发展，与这一点密不可分）。Rust 现在由 "),t("a",d,[e("Rust 项目开发者社区"),o(s)]),e(" 维护， "),t("a",c,[e("Rust 基金会"),o(s)]),e("赞助支持。")]),R,p,f,t("h2",E,[b,e(),t("a",m,[e("为何又来一门新语言？"),o(s)])]),g,B,t("h3",A,[k,e(),t("a",C,[e("缓解内卷"),o(s)])]),x,F,S,G,t("h4",v,[D,e(),t("a",y,[e("运行效率"),o(s)])]),t("p",null,[e("得益于各种零开销抽象、深入到底层的优化潜力、优质的标准库和第三方库实现，Rust 具备非常优秀的性能，和 C、C++ 是 "),t("a",j,[e("一个级别"),o(s)]),e("。")]),J,N,t("h4",W,[I,e(),t("a",L,[e("开发效率"),o(s)])]),P,t("h3",M,[T,e(),t("a",V,[e("开源"),o(s)])]),z,t("h3",H,[O,e(),t("a",q,[e("相比其他语言 Rust 的优势"),o(s)])]),w,t("h4",U,[K,e(),t("a",Q,[e("Go"),o(s)])]),X,t("h4",Y,[Z,e(),t("a",$,[e("C++"),o(s)])]),tt,et,t("h4",st,[ot,e(),t("a",rt,[e("Java"),o(s)])]),nt,t("h4",at,[it,e(),t("a",ht,[e("Python"),o(s)])]),lt,t("h3",ut,[_t,e(),t("a",dt,[e("使用现状"),o(s)])]),t("ul",null,[ct,Rt,pt,ft,Et,bt,t("li",null,[e("GitHub 和 "),t("a",mt,[e("npmjs.com"),o(s)]),e("，使用 Rust 提供高达每天 13 亿次的 npm 包下载")]),gt,Bt]),At,t("h2",kt,[Ct,e(),t("a",xt,[e("Rust 语言版本更新"),o(s)])]),Ft,t("blockquote",null,[t("p",null,[e("引自："),t("a",St,[e("Rust语言圣经(Rust Course)"),o(s)])])])])}const jt=n(l,[["render",Gt],["__file","first-time.html.vue"]]);export{jt as default};
