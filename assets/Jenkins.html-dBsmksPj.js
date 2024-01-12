const e=JSON.parse(`{"key":"v-c3de8a60","path":"/tutorial/CI_CD/Jenkins.html","title":"Jenkins 远程触发构建踩坑记","lang":"zh-CN","frontmatter":{"title":"Jenkins 远程触发构建踩坑记","description":"CSRF crumbk,Jenkins,","icon":"shell","date":"2024-01-12T00:00:00.000Z","isOriginal":true,"order":1,"category":["工具教程"],"tag":["Jenkins"],"head":[["meta",{"property":"og:url","content":"https://oragekk.me/tutorial/CI_CD/Jenkins.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"Jenkins 远程触发构建踩坑记"}],["meta",{"property":"og:description","content":"CSRF crumbk,Jenkins,"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-12T03:45:54.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:published_time","content":"2024-01-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-12T03:45:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins 远程触发构建踩坑记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-12T03:45:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 通过 Jenkins 提供的【触发远程构建】","slug":"_1-通过-jenkins-提供的【触发远程构建】","link":"#_1-通过-jenkins-提供的【触发远程构建】","children":[{"level":3,"title":"1.1. 勾选【触发远程构建】并填入 token","slug":"_1-1-勾选【触发远程构建】并填入-token","link":"#_1-1-勾选【触发远程构建】并填入-token","children":[]},{"level":3,"title":"1.2. 配置 API token","slug":"_1-2-配置-api-token","link":"#_1-2-配置-api-token","children":[]},{"level":3,"title":"1.3. 如何调用 Url","slug":"_1-3-如何调用-url","link":"#_1-3-如何调用-url","children":[]},{"level":3,"title":"1.4. 编写.gitlab-ci.yml","slug":"_1-4-编写-gitlab-ci-yml","link":"#_1-4-编写-gitlab-ci-yml","children":[]},{"level":3,"title":"1.5.  deploy.sh","slug":"_1-5-deploy-sh","link":"#_1-5-deploy-sh","children":[]}]},{"level":2,"title":"2. 通过 GitLab 的 webhook 触发远程构建","slug":"_2-通过-gitlab-的-webhook-触发远程构建","link":"#_2-通过-gitlab-的-webhook-触发远程构建","children":[{"level":3,"title":"2.1. 勾选插件选项","slug":"_2-1-勾选插件选项","link":"#_2-1-勾选插件选项","children":[]},{"level":3,"title":"2.2. 选择配置","slug":"_2-2-选择配置","link":"#_2-2-选择配置","children":[]},{"level":3,"title":"2.3. 将生成的 url 和 token 填入 GitLab 中","slug":"_2-3-将生成的-url-和-token-填入-gitlab-中","link":"#_2-3-将生成的-url-和-token-填入-gitlab-中","children":[]},{"level":3,"title":"2.4. 查看运行结果","slug":"_2-4-查看运行结果","link":"#_2-4-查看运行结果","children":[]}]}],"git":{"createdTime":1705031154000,"updatedTime":1705031154000,"contributors":[{"name":"oragekk","email":"oragekk@163.com","commits":1}]},"readingTime":{"minutes":3.21,"words":963},"filePathRelative":"tutorial/CI:CD/Jenkins.md","localizedDate":"2024年1月12日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>如果想在代码 Push 后，或者 Merge request 后，自动部署，可以采用多种方案，以下介绍两种</p>\\n<p>不知道如何配置的同学，可以参考一下</p>\\n</div>\\n<h2> 1. 通过 Jenkins 提供的【触发远程构建】</h2>\\n<h3> 1.1. 勾选【触发远程构建】并填入 token</h3>\\n<figure><img src=\\"https://s3.bmp.ovh/imgs/2024/01/12/45009f0747ed807a.png\\" alt=\\"勾选远程构建开关\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>勾选远程构建开关</figcaption></figure>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"}}`);export{e as data};
