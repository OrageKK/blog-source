const e=JSON.parse(`{"key":"v-51ca29a7","path":"/blog/waline-mail.html","title":"评论插件 Waline 之邮件通知配置","lang":"zh-CN","frontmatter":{"date":"2023-03-29T00:00:00.000Z","icon":"waline","star":true,"category":["Blog"],"tag":["Blog"],"description":"评论插件 Waline 之邮件通知配置 ✨ 陆续优化中……这次到了评论的邮件通知，由于 waline 带后端，可以开启评论通知，我是部署在 Vercel 上的，配置一下就可以了，模版要感谢小波同学 前置注意点 1.邮件要注意每日发信限制，短时密集评论会导致直接被封，禁止发信 2.最好不要使用自己平常使用的邮箱，使用一个单独的邮箱来操作 3.有服务器的同学，自己部署SMTP服务可以不受限制","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blog/waline-mail.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"评论插件 Waline 之邮件通知配置"}],["meta",{"property":"og:description","content":"评论插件 Waline 之邮件通知配置 ✨ 陆续优化中……这次到了评论的邮件通知，由于 waline 带后端，可以开启评论通知，我是部署在 Vercel 上的，配置一下就可以了，模版要感谢小波同学 前置注意点 1.邮件要注意每日发信限制，短时密集评论会导致直接被封，禁止发信 2.最好不要使用自己平常使用的邮箱，使用一个单独的邮箱来操作 3.有服务器的同学，自己部署SMTP服务可以不受限制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-07T13:18:20.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"Blog"}],["meta",{"property":"article:published_time","content":"2023-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-07T13:18:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"评论插件 Waline 之邮件通知配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-07T13:18:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"1. waline 官方邮件通知环境变量说明","slug":"_1-waline-官方邮件通知环境变量说明","link":"#_1-waline-官方邮件通知环境变量说明","children":[{"level":3,"title":"1.1 waline 邮件通知必填环境变量","slug":"_1-1-waline-邮件通知必填环境变量","link":"#_1-1-waline-邮件通知必填环境变量","children":[]},{"level":3,"title":"1.2 waline 邮件通知选填环境变量","slug":"_1-2-waline-邮件通知选填环境变量","link":"#_1-2-waline-邮件通知选填环境变量","children":[]},{"level":3,"title":"1.3 waline 邮件通知模版环境变量","slug":"_1-3-waline-邮件通知模版环境变量","link":"#_1-3-waline-邮件通知模版环境变量","children":[]},{"level":3,"title":"1.4 waline邮件通知模版index.js服务端配置参数","slug":"_1-4-waline邮件通知模版index-js服务端配置参数","link":"#_1-4-waline邮件通知模版index-js服务端配置参数","children":[]}]},{"level":2,"title":"2.根据部署方式选择合适的邮件模版修改方法","slug":"_2-根据部署方式选择合适的邮件模版修改方法","link":"#_2-根据部署方式选择合适的邮件模版修改方法","children":[{"level":3,"title":"2.1 vercel","slug":"_2-1-vercel","link":"#_2-1-vercel","children":[]},{"level":3,"title":"2.2 独立部署","slug":"_2-2-独立部署","link":"#_2-2-独立部署","children":[]}]},{"level":2,"title":"3.开始配置","slug":"_3-开始配置","link":"#_3-开始配置","children":[{"level":3,"title":"3.1 设置完毕1.1中Vercel配置必须的环境变量","slug":"_3-1-设置完毕1-1中vercel配置必须的环境变量","link":"#_3-1-设置完毕1-1中vercel配置必须的环境变量","children":[]},{"level":3,"title":"3.2 继续使用环境变量设置模版","slug":"_3-2-继续使用环境变量设置模版","link":"#_3-2-继续使用环境变量设置模版","children":[]},{"level":3,"title":"3.3 使用服务端入口文件index.js变量设置模版","slug":"_3-3-使用服务端入口文件index-js变量设置模版","link":"#_3-3-使用服务端入口文件index-js变量设置模版","children":[]},{"level":3,"title":"4. 结语","slug":"_4-结语","link":"#_4-结语","children":[]}]}],"git":{"createdTime":1680084175000,"updatedTime":1680873500000,"contributors":[{"name":"oragekk","email":"oragekk@163.com","commits":2}]},"readingTime":{"minutes":10.06,"words":3018},"filePathRelative":"blog/waline-mail.md","localizedDate":"2023年3月29日","excerpt":"<h1> 评论插件 Waline 之邮件通知配置</h1>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">✨</p>\\n<p>陆续优化中……这次到了评论的邮件通知，由于 waline 带后端，可以开启评论通知，我是部署在 Vercel 上的，配置一下就可以了，模版要感谢<a href=\\"https://blog.ganxb2.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">小波同学</a></p>\\n<p>前置注意点</p>\\n<p>1.邮件要注意每日发信限制，短时密集评论会导致直接被封，禁止发信</p>\\n<p>2.最好不要使用自己平常使用的邮箱，使用一个单独的邮箱来操作</p>\\n<p>3.有服务器的同学，自己部署SMTP服务可以不受限制</p>\\n</div>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}`);export{e as data};
