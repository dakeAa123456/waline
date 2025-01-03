<div style="display:flex;">
<img  src="../public/images/themeone.png" width="30px" height="30px"></img><h1>文档初衷与诞生</h1>
</div>

这个文档的初衷是打造一个好用的、面向程序员的`知识管理工具`。

对于程序员来说，繁杂的知识体系难免会有遗忘的地方。如果有一个方便好用的知识管理工具，可以帮助我们很好的管理知识，并能够快速地把遗忘的知识点找回来。

## Markdown

最初接触[Markdown](https://xugaoyi.com/pages/ad247c4332211551/)的时候，我就被它简洁的语法干净的文本结构吸引住，它的代码块和兼容`html`标签的能力更是让我爱上它，很高兴找到了一个高效记录学习笔记的工具。

## VitePress <Badge type="info" text="v1.1.0 +" />

[VitePress](https://vitejs.cn/vitepress/)是一个 Vue 驱动的静态网站生成器，正是以 Markdown 为中心的项目结构，它简洁至上的理念正合我心。鉴于我对 Vue 还算有一些了解的前端，迫不及待的想去使用它来搭建一个我的云笔记网站。

## 知识管理

在一段学习的日子里，我尝试过用`txt`记录笔记、云笔记、`Markdown`笔记，并把`Markdown`文件上传到 `github` 进行管理，但总感觉还是不够方便...直到我发现了 `VitePress`，它似乎可以管理我的学习笔记，并且把站点部署到 `github pages` 不就是一个在线的云笔记网站了吗

我以前的一个领导和我们说过一个好的知识管理可以帮助我们提高开发质量和开发效率，下面这张图就是他想传达的，我想分享一下：
![Example Image](../public/images/themetwo.jpg)

什么是一个好用的知识管理工具呢？其实我也在不断的寻找和思考中。不过我觉得它至少要结构清晰、管理方便，在查找知识点的过程中可以快速的找到，正像上图所说的要在 15 秒内找到一个知识点，在添加内容的时候可以很方便的添加，并且保证结构清晰。

VitePress 的官方默认主题是专门为写文档而生的，和我心目中的知识库有一些差距，比如在满足结构清晰这点上，每添加一个内容就得手动的添加侧边栏数据，还有在满足 15 秒内找到一个知识点上还是不够好，因此我觉得需要做一些改造。

在知识管理方面，有三种典型的知识形态：

> - <sapn class="marker-evy">结构化：看重知识的条理性和实用性，有一定专业背景才能看懂</sapn>
> - <sapn class="marker-evy">体系化：对某一领域的完整解读，通常是某类知识的专业之作</sapn>
> - <sapn class="marker-evy">碎片化：描述具体的知识点，通俗易懂</sapn>

<snow />
