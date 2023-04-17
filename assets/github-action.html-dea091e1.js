const t=JSON.parse(`{"key":"v-00e70726","path":"/tutorial/github/github-action.html","title":"GitHub Actions 使用介绍","lang":"zh-CN","frontmatter":{"title":"GitHub Actions 使用介绍","icon":"actions","date":"2023-04-14T00:00:00.000Z","star":true,"cover":"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg","category":["GitHub"],"tag":["GitHub Actions"],"description":"GitHub Actions 是什么？ Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。 很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。","head":[["meta",{"property":"og:url","content":"https://oragekk.me/tutorial/github/github-action.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"GitHub Actions 使用介绍"}],["meta",{"property":"og:description","content":"GitHub Actions 是什么？ Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。 很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-17T09:17:44.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"GitHub Actions 使用介绍"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"GitHub Actions"}],["meta",{"property":"article:published_time","content":"2023-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-17T09:17:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub Actions 使用介绍\\",\\"image\\":[\\"https://w.wallhaven.cc/full/j3/wallhaven-j3zvvp.jpg\\"],\\"datePublished\\":\\"2023-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-17T09:17:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"GitHub Actions 是什么？","slug":"github-actions-是什么","link":"#github-actions-是什么","children":[]},{"level":2,"title":"什么是CI/CD？","slug":"什么是ci-cd","link":"#什么是ci-cd","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"关于工作流程","slug":"关于工作流程","link":"#关于工作流程","children":[{"level":3,"title":"工作流基础","slug":"工作流基础","link":"#工作流基础","children":[]},{"level":3,"title":"工作流触发","slug":"工作流触发","link":"#工作流触发","children":[]}]},{"level":2,"title":"实例","slug":"实例","link":"#实例","children":[]},{"level":2,"title":"流程解读","slug":"流程解读","link":"#流程解读","children":[]},{"level":2,"title":"配置代码","slug":"配置代码","link":"#配置代码","children":[]},{"level":2,"title":"配置解读","slug":"配置解读","link":"#配置解读","children":[]}],"git":{"createdTime":1681723064000,"updatedTime":1681723064000,"contributors":[{"name":"oragekk","email":"oragekk@163.com","commits":1}]},"readingTime":{"minutes":7.56,"words":2267},"filePathRelative":"tutorial/github/github-action.md","localizedDate":"2023年4月14日","excerpt":"<!-- more -->\\n\\n<h2> GitHub Actions 是什么？</h2>\\n<p>Github Actions 是 Github 官方出的持续集成服务, 挺早之前就推出了。类似的还有如微软的DevOps、GitLab CI、Circle CI、Travis CI等等。大家知道，持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等。GitHub 把这些操作就称为 actions。</p>\\n<p>很多操作在不同项目里面是类似的，完全可以共享。GitHub 注意到了这一点，想出了一个很妙的点子，允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用。</p>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}`);export{t as data};
