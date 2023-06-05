# Marp-Theme  Marp 主题

本项目计划基于国科大Marp主题进行修改，并已经基本完成2个模板的修改，同时对于背景的图片保留了一个PSD文件可供二次编辑。

Marp的官方文档写得很不清晰，不容易看懂，而且似乎不是面向普通用户的。本人的另一个仓库
[Marp-Theme-for-UCAS(Forked from BeWaterMyFriend7/Marp-Theme-UCAS)](https://github.com/szw0407/Marp-Theme-for-UCAS)
中分析了Marp的文件结构和修改的方案，并通过一些方式，理论上同时能推送修改到这里（实际上可能会出现各种问题，因为我现在还是不熟悉Git的全部操作）

如果有问题或建议，恳求路过的大佬赐教，请加群唠嗑：

![QRcode](https://szw0407.github.io/images/QQgroup.jpg)

至于我为什么要用marp而不是比如说slidev······只是因为我第一个接触到Markdown presentation的就是这个项目，比较熟悉。本人觉得这很适合新手上手，尤其适合拿来熟悉CSS甚至JS这些原生前端开发工具，对于零基础、不熟悉框架的用户也比较友好。其较为简洁，或许进行进一步修改，自己用JS手搓插件也能比较容易。

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
  |     |__SDUSce.css    //UCASSce主题文件
  |     |__SDUSimple.css //UCASSimple主题文件
  |__Scenery.md           //UCASSce主题对应的md文件
  |__SimpleBrown.md        //UCASSimple主题对应的md文件
```
