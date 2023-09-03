# Marp-Theme  Marp 主题

**公告**：由于一些原因，包括但不限于marp功能很有限而且新特性的更新很缓慢。作者（我）已经认为本项目基本完备，决定停止活跃更新，本人正在准备将注意力迁移到另外的presentation项目。如果哪天我又开始用这个东西而且感觉需要做个新模板再说。

> 当然，如果您在使用的时候认为marp的精简、高效等特点很符合您的要求，欢迎提pr或者fork。

本项目计划基于国科大Marp主题进行修改，并已经基本完成2个模板的修改，同时对于背景的图片保留了一个PSD文件可供二次编辑。

Marp的官方文档写得很不清晰，不容易看懂，而且似乎不是面向普通用户的。本人的另一个仓库
[Marp-Theme-for-UCAS(Forked from BeWaterMyFriend7/Marp-Theme-UCAS)](https://github.com/szw0407/Marp-Theme-for-UCAS)
中分析了Marp的文件结构和修改的方案，并通过一些方式，理论上同时能推送修改到这里（实际上可能会出现各种问题，因为我现在还是不熟悉Git的全部操作）**【申明：这是画饼，实际上我大半年了也还没写几个字】**

简单讲一下这个仓库的来历：我把上述的仓库Fork来了以后，本来没必要将更改弄到另一个仓库的，但是我那会~~可能是因为手欠，~~ 不知道为什么`Git remote`给弄得不能push了，于是我建了另一个仓库，直接把remote改到这里一个push，就把原本仓库的commit记录一起带过来了（大雾）。来都来了，但是我实在是懒得写文档，于是我干脆想了一个办法，把文档弄到隔壁不就好了。我从Git history里面找出来了我做修改之前的某个位置，然后拉了一个新的分支连到了我隔壁那个仓库（这次重新添加绑定remote成功了），理论上我改那一个分支，本地一个`Git merge` ，这边也就能同时更改好了。

如果有问题或建议，恳求路过的大佬赐教，请加群唠嗑：

![QRcode](https://szw0407.github.io/images/QQgroup.jpg)

至于我为什么要用marp而不是比如说slidev······只是因为我第一个接触到Markdown presentation的就是这个项目，比较熟悉。本人觉得这很适合新手上手，尤其适合拿来熟悉CSS甚至JS这些原生前端开发工具，对于零基础、**不熟悉框架**的用户也比较友好。其较为简洁，或许进行进一步修改，自己用JS手搓插件也能比较容易。

【Update】今天偶然发现[Marp的Obsidian插件](https://github.com/JichouP/obsidian-marp-plugin) 已经推出，这个插件可以让我们在Obsidian上使用Marp进行制作。[Obsidian](https://obsidian.md/)是一个所见即所得的、跨平台、实时保存的功能强大的免费Markdown编辑器。可以在Obsidian插件市场找到下载使用。

**以下内容修改自原仓库的readme**

> 如何使用Markdown做PPT?本仓库是利用Marp实现的markdown Slides

这是为山大设计的两款 [Marp](https://github.com/marp-team/marp) 主题.

如果你想要使用这两款主题，强烈建议你先看一下生成的pdf文件。

更多使用细节，可以点击 [前往本人的另一个仓库](https://github.com/szw0407/Marp-Theme-for-UCAS)

如果你想自定义Marp主题，也可以看一下原作者的这些教程：

[link](https://zhuanlan.zhihu.com/p/449668027)
[link](https://mdnice.com/writing/9cb2de742bed48d0b131e35d653515f2)

## File structure

```bash
Marp
  |__ .vscode
  |     |__settings.json   //主题配置文件
  |__ images              //文稿和主题所用到的图片文件 可对背景和logo进行替换
  |__ themes
  |     |__SDUSce.css    //主题文件1
  |     |__SDUSimple.css //主题文件2
  |__Scenery.md           //主题1对应的md文件
  |__SimpleBrown.md        //主题2对应的md文件
```
