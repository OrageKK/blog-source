import{_ as s,o as a,c as n,e as i}from"./app-rGCND2AC.js";const l={},e=i(`<blockquote><p>记录一下限制输入字符的判断。不仅局限于中文或英文</p></blockquote><ul><li>首先在 ViewDidLoad 中注册通知</li></ul><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">[[</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSNotificationCenter</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> defaultCenter</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">]addObserver:</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> selector:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">@selector(</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">textFieldEditChanged:</span><span style="color:#C678DD;--shiki-dark:#C678DD;">)</span></span>
<span class="line"><span style="color:#61AFEF;--shiki-dark:#61AFEF;">	name:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;UITextFieldTextDidChangeNotification&quot;</span><span style="color:#61AFEF;--shiki-dark:#61AFEF;"> object:</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">self</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.userTF];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>下面是判断逻辑 由于需求有中文键盘下的字母数字输入，所以其中那部分判断如不需要可以去除</li></ul><div class="language-objc line-numbers-mode" data-ext="objc" data-title="objc"><pre class="shiki shiki-themes one-dark-pro one-dark-pro" style="background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 输入字符判断</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">-(</span><span style="color:#C678DD;--shiki-dark:#C678DD;">void</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)textFieldEditChanged:(</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">NSNotification</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *)obj {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    UITextField *textField </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (UITextField *)</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">obj</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">object</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *toBeString </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;"> textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">    NSString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> *lang </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [textField.textInputMode </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">primaryLanguage</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> ([lang </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">isEqualToString:</span><span style="color:#98C379;--shiki-dark:#98C379;">@&quot;zh-Hans&quot;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">])</span><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">// 简体中文输入</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    	{</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        //获取高亮部分</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        UITextRange *selectedRange </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [textField </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">markedTextRange</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        UITextPosition *position </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [textField </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">positionFromPosition:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">selectedRange.start </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">offset:</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">        // 没有高亮选择的字，则对已输入的文字进行字数统计和限制</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">!</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">position </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">||</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> !</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">selectedRange)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">toBeString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> MAX_CHINESE_LENGTH)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                NSRange rangeIndex </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequenceAtIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_CHINESE_LENGTH];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">rangeIndex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringToIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_CHINESE_LENGTH];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                else</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    NSRange rangeRange </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequencesForRange:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">NSMakeRange</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, MAX_CHINESE_LENGTH)];</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringWithRange:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">rangeRange];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">toBeString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> MAX_ENGLISH_LENGTH)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                NSRange rangeIndex </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequenceAtIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_ENGLISH_LENGTH];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">rangeIndex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                {</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringToIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_ENGLISH_LENGTH];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">                else</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                {</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                    NSRange rangeRange </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequencesForRange:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">NSMakeRange</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, MAX_ENGLISH_LENGTH)];</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                    textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringWithRange:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">rangeRange];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#7F848E;--shiki-dark:#7F848E;font-style:italic;--shiki-dark-font-style:italic;">    	// 中文输入法以外的直接对其统计限制即可，不考虑其他语种情况</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">    	else</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    	{</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">        	if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">toBeString</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> &gt;</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> MAX_ENGLISH_LENGTH)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        		{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            		NSRange rangeIndex </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequenceAtIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_ENGLISH_LENGTH];</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            		if</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> (</span><span style="color:#E5C07B;--shiki-dark:#E5C07B;">rangeIndex</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">length</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> ==</span><span style="color:#D19A66;--shiki-dark:#D19A66;"> 1</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            		{</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                		textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringToIndex:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">MAX_ENGLISH_LENGTH];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            		}</span></span>
<span class="line"><span style="color:#C678DD;--shiki-dark:#C678DD;">            		else</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            		{</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">                NSRange rangeRange </span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">=</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">rangeOfComposedCharacterSequencesForRange:</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;">NSMakeRange</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">(</span><span style="color:#D19A66;--shiki-dark:#D19A66;">0</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">, MAX_ENGLISH_LENGTH)];</span></span>
<span class="line"><span style="color:#E5C07B;--shiki-dark:#E5C07B;">                textField</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">.</span><span style="color:#E06C75;--shiki-dark:#E06C75;">text</span><span style="color:#56B6C2;--shiki-dark:#56B6C2;"> =</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;"> [toBeString </span><span style="color:#61AFEF;--shiki-dark:#61AFEF;">substringWithRange:</span><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">rangeRange];</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">            		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">        		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">    		}</span></span>
<span class="line"><span style="color:#ABB2BF;--shiki-dark:#ABB2BF;">		}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),B=[e];function r(o,p){return a(),n("div",null,B)}const k=s(l,[["render",r],["__file","textfiled限制输入字符.html.vue"]]),d=JSON.parse(`{"path":"/posts/iOS/ui/textfiled%E9%99%90%E5%88%B6%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6.html","title":"textfield限制输入字符","lang":"zh-CN","frontmatter":{"title":"textfield限制输入字符","date":"2017-05-21T00:00:00.000Z","category":["iOS"],"tag":["iOS"],"description":"记录一下限制输入字符的判断。不仅局限于中文或英文 首先在 ViewDidLoad 中注册通知 下面是判断逻辑 由于需求有中文键盘下的字母数字输入，所以其中那部分判断如不需要可以去除","head":[["meta",{"property":"og:url","content":"https://oragekk.me/posts/iOS/ui/textfiled%E9%99%90%E5%88%B6%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6.html"}],["meta",{"property":"og:site_name","content":"Oragekk's Blog"}],["meta",{"property":"og:title","content":"textfield限制输入字符"}],["meta",{"property":"og:description","content":"记录一下限制输入字符的判断。不仅局限于中文或英文 首先在 ViewDidLoad 中注册通知 下面是判断逻辑 由于需求有中文键盘下的字母数字输入，所以其中那部分判断如不需要可以去除"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-10T06:30:41.000Z"}],["meta",{"property":"article:author","content":"Oragekk"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2017-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-10T06:30:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"textfield限制输入字符\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-10T06:30:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Oragekk\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[],"git":{"createdTime":1678187456000,"updatedTime":1678429841000,"contributors":[{"name":"huangkun","email":"huangkun@tonshow.cn","commits":1}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"posts/iOS/ui/textfiled限制输入字符.md","localizedDate":"2017年5月21日","excerpt":"<blockquote>\\n<p>记录一下限制输入字符的判断。不仅局限于中文或英文</p>\\n</blockquote>\\n<ul>\\n<li>首先在 ViewDidLoad 中注册通知</li>\\n</ul>\\n<div class=\\"language-objc line-numbers-mode\\" data-ext=\\"objc\\" data-title=\\"objc\\"><pre class=\\"shiki shiki-themes one-dark-pro one-dark-pro\\" style=\\"background-color:#282c34;--shiki-dark-bg:#282c34;color:#abb2bf;--shiki-dark:#abb2bf\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">[[</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">NSNotificationCenter</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> defaultCenter</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">]addObserver:</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">self</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> selector:</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">@selector(</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">textFieldEditChanged:</span><span style=\\"color:#C678DD;--shiki-dark:#C678DD\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\">\\tname:</span><span style=\\"color:#98C379;--shiki-dark:#98C379\\">@\\"UITextFieldTextDidChangeNotification\\"</span><span style=\\"color:#61AFEF;--shiki-dark:#61AFEF\\"> object:</span><span style=\\"color:#E5C07B;--shiki-dark:#E5C07B\\">self</span><span style=\\"color:#ABB2BF;--shiki-dark:#ABB2BF\\">.userTF];</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{k as comp,d as data};
