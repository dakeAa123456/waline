import{_ as s}from"./chunks/pandow.D58_wM15.js";import{_ as n,c as i,j as e,a as l,G as r,a4 as d,B as h,o as p}from"./chunks/framework.TZvUneVo.js";const o="/assets/placename1.CiP-dFqf.png",q=JSON.parse('{"title":"IP 归属地查询接口","description":"","frontmatter":{},"headers":[],"relativePath":"zh/placeNameIp.md","filePath":"zh/placeNameIp.md","lastUpdated":null}'),c={name:"zh/placeNameIp.md"};function g(k,t,y,m,b,u){const a=h("ArticleMetadata");return p(),i("div",null,[t[0]||(t[0]=e("h1",{id:"ip-归属地查询接口",tabindex:"-1"},[e("strong",null,[e("em",null,"IP 归属地查询接口")]),l(),e("a",{class:"header-anchor",href:"#ip-归属地查询接口","aria-label":'Permalink to "**_IP 归属地查询接口_**"'},"​")],-1)),r(a),t[1]||(t[1]=d('<hr><p>在 2022 年 5 月初，网络上各大平台上，都开始展示用户 IP 属地，在某音、某手等小视频平台以及各主流网站应用中，都展示 IP 归属地，如下图所示： <img src="'+o+'" alt="IP图片" loading="lazy"></p><hr><h2 id="接口描述" tabindex="-1"><strong><em>接口描述</em></strong> <a class="header-anchor" href="#接口描述" aria-label="Permalink to &quot;**_接口描述_**&quot;">​</a></h2><blockquote><p>使用者调用该接口，可以传入 IP 将返回指定 IP 地址的归属地，如果不传入参数，将会返回请求者 IP 地址的归属地。 注意：只能查国内，国外会返回未知。</p></blockquote><h2 id="接口地址" tabindex="-1"><strong><em>接口地址</em></strong> <a class="header-anchor" href="#接口地址" aria-label="Permalink to &quot;**_接口地址_**&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//tea.qingnian8.com/tools/placename</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="请求方式" tabindex="-1"><strong><em>请求方式</em></strong> <a class="header-anchor" href="#请求方式" aria-label="Permalink to &quot;**_请求方式_**&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="请求参数" tabindex="-1"><strong><em>请求参数</em></strong> <a class="header-anchor" href="#请求参数" aria-label="Permalink to &quot;**_请求参数_**&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">参数名</th><th style="text-align:center;">参数值</th><th style="text-align:center;">是否必填</th><th style="text-align:center;">参数类型</th><th style="text-align:center;">描述说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">ip</td><td style="text-align:center;">119.163.220.145</td><td style="text-align:center;">否</td><td style="text-align:center;">String</td><td style="text-align:center;">输入要查询的 IP 地址</td></tr></tbody></table><hr><h2 id="秘钥验证" tabindex="-1"><strong><em>秘钥验证</em></strong> <a class="header-anchor" href="#秘钥验证" aria-label="Permalink to &quot;**_秘钥验证_**&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">参数名</th><th style="text-align:center;">参数值</th><th style="text-align:center;">是否必填</th><th style="text-align:center;">参数类型</th><th style="text-align:center;">描述说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">access-key</td><td style="text-align:center;">dake123321</td><td style="text-align:center;">是</td><td style="text-align:center;">String</td><td style="text-align:center;">获得秘钥参数。</td></tr></tbody></table><hr><h2 id="扫码获取秘钥" tabindex="-1"><strong><em>扫码获取秘钥</em></strong> <a class="header-anchor" href="#扫码获取秘钥" aria-label="Permalink to &quot;**_扫码获取秘钥_**&quot;">​</a></h2><p><img src="'+s+`" alt="壁纸接口" loading="lazy"></p><hr><h2 id="响应示例" tabindex="-1"><strong><em>响应示例</em></strong> <a class="header-anchor" href="#响应示例" aria-label="Permalink to &quot;**_响应示例_**&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;errCode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;errMsg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;查询成功&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;浙江&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	&quot;timeCost&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><table tabindex="0"><thead><tr><th style="text-align:center;">序号</th><th style="text-align:center;">参数名</th><th style="text-align:center;">参数类型</th><th style="text-align:center;">描述说明</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">errCode</td><td style="text-align:center;">Integer</td><td style="text-align:center;">0：成功 400：失败</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">errMsg</td><td style="text-align:center;">String</td><td style="text-align:center;">查询结果描述</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">timeCost</td><td style="text-align:center;">Integer</td><td style="text-align:center;">接口消耗时间</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">data</td><td style="text-align:center;">String</td><td style="text-align:center;">IP 归属地名称</td></tr></tbody></table>`,23))])}const _=n(c,[["render",g]]);export{q as __pageData,_ as default};
