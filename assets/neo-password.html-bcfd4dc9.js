import{_ as h,X as v,Y as b,a0 as s,a1 as i,Z as a,$ as n,a2 as c,E as e}from"./framework-88257335.js";const m={},x=c('<h2 id="组件说明" tabindex="-1"><a class="header-anchor" href="#组件说明" aria-hidden="true">#</a> 组件说明</h2><p>password</p><h2 id="安装方式" tabindex="-1"><a class="header-anchor" href="#安装方式" aria-hidden="true">#</a> 安装方式</h2><h2 id="安装方式-1" tabindex="-1"><a class="header-anchor" href="#安装方式-1" aria-hidden="true">#</a> 安装方式</h2>',4),k=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"pnpm"),n(),a("span",{class:"token function"},"install"),n(" neo-password "),a("span",{class:"token parameter variable"},"--save"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),g=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"npm"),n(),a("span",{class:"token function"},"install"),n(" neo-password "),a("span",{class:"token parameter variable"},"--save"),n(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),f=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token function"},"yarn"),n(),a("span",{class:"token function"},"add"),n(` neo-password
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"})])],-1),_=a("h2",{id:"使用方法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#使用方法","aria-hidden":"true"},"#"),n(" 使用方法")],-1),y=a("h2",{id:"组件属性",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#组件属性","aria-hidden":"true"},"#"),n(" 组件属性")],-1),w={id:"uploadinfo",tabindex:"-1"},S=a("a",{class:"header-anchor",href:"#uploadinfo","aria-hidden":"true"},"#",-1),V=c(`<div class="hint-container info"><p class="hint-container-title">文件上传信息</p><ul><li><p>类型: Props</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>默认值:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><h2 id="组件事件" tabindex="-1"><a class="header-anchor" href="#组件事件" aria-hidden="true">#</a> 组件事件</h2><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change" aria-hidden="true">#</a> change</h3><div class="hint-container info"><p class="hint-container-title">change 事件</p><ul><li>参数: Values</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Values</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="组件方法" tabindex="-1"><a class="header-anchor" href="#组件方法" aria-hidden="true">#</a> 组件方法</h2><h3 id="getdata" tabindex="-1"><a class="header-anchor" href="#getdata" aria-hidden="true">#</a> getData</h3><div class="hint-container info"><p class="hint-container-title">获取操作数据</p><ul><li><p>参数 1: string</p></li><li><p>参数 2: Options</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>返回值: Returns</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Returns</span> <span class="token operator">=</span> Options<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></div><h2 id="组件插槽" tabindex="-1"><a class="header-anchor" href="#组件插槽" aria-hidden="true">#</a> 组件插槽</h2><h3 id="preset-fields" tabindex="-1"><a class="header-anchor" href="#preset-fields" aria-hidden="true">#</a> preset-fields</h3><div class="hint-container info"><p class="hint-container-title">表单标题</p></div><h3 id="slot1" tabindex="-1"><a class="header-anchor" href="#slot1" aria-hidden="true">#</a> slot1</h3><div class="hint-container info"><p class="hint-container-title">作用域插槽 1</p><ul><li><p>参数: Slots</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Slots</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> Row<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="substr" tabindex="-1"><a class="header-anchor" href="#substr" aria-hidden="true">#</a> subStr</h3><div class="hint-container info"><p class="hint-container-title">截取字符串并返回新的字符串</p><ul><li>参数 1: 要截取的字符串 <ul><li>必填: 是</li><li>类型: string</li></ul></li><li>参数 2: 开始下标 <ul><li>必填: 是</li><li>类型: number</li></ul></li><li>参数 3: 截取数量(不传则截取至结尾) <ul><li>必填: 否</li><li>类型: number</li></ul></li><li>返回值: 新字符串 <ul><li>类型: string</li></ul></li></ul></div><h2 id="源码地址" tabindex="-1"><a class="header-anchor" href="#源码地址" aria-hidden="true">#</a> 源码地址</h2>`,16),A=a("h2",{id:"更新记录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#更新记录","aria-hidden":"true"},"#"),n(" 更新记录")],-1),B=a("h3",{id:"v1-1-1",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#v1-1-1","aria-hidden":"true"},"#"),n(" v1.1.1")],-1),T=a("ol",null,[a("li",null,"更新了 xxxxxxx"),a("li",null,"新增了 xxxxxxx"),a("li",null,"删除了 xxxxxxx")],-1);function N(j,O){const r=e("Tabs"),o=e("Badge"),p=e("Source"),u=e("AuthorTime");return v(),b("div",null,[x,s(r,{id:"12",data:[{title:"pnpm"},{title:"npm"},{title:"yarn"}]},{tab0:i(({title:t,value:l,isActive:d})=>[k]),tab1:i(({title:t,value:l,isActive:d})=>[g]),tab2:i(({title:t,value:l,isActive:d})=>[f]),_:1}),_,y,a("h3",w,[S,n(" uploadInfo "),s(o,{text:"必填"})]),V,s(p,{href:"xxx"}),A,B,T,s(u,{name:"x",time:"xxxx-xx-xx"})])}const R=h(m,[["render",N],["__file","neo-password.html.vue"]]);export{R as default};
