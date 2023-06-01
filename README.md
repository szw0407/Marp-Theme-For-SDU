# Marp-Theme  Marp 主题

本项目计划基于国科大Marp主题进行修改，但是**暂未更改任何部分**

本仓库旨在分析Marp的文件结构，并提供一些二次开发的指导。

Marp的官方文档写得很不清晰，不容易看懂，而且似乎不是面向普通用户的。本仓库内的很多内容都是我参考国科大的模板“理解”出来的。

如果有问题或建议，恳求路过的大佬赐教，请加群唠嗑：

![QRcode](https://szw0407.github.io/images/QQgroup.jpg)

至于我为什么要用marp而不是比如说slidev······只是因为我第一个接触到Markdown presentation的就是这个项目，比较熟悉。本人觉得这很适合新手上手，尤其适合拿来熟悉CSS甚至JS这些原生前端开发工具，对于零基础、不熟悉框架的用户也比较友好。其较为简洁，或许进行进一步修改，自己用JS手搓插件也能比较容易。

**以下内容是原仓库的readme**

> 如何使用Markdown做PPT?本仓库是利用Marp实现的国科大markdown Slides

这是为国科大设计的两款 [Marp](https://github.com/marp-team/marp) 主题.

如果你想要使用这两款主题，强烈建议你先看一下生成的pdf文件。

更多使用细节，可以点击 [link](https://mdnice.com/writing/9cb2de742bed48d0b131e35d653515f2)

如果你想自定义Marp主题，可以看一下这篇教程 [link](https://zhuanlan.zhihu.com/p/449668027)

## File structure

```bash
Marp
  |__ .vscode
  |     |__settings.json   //主题配置文件
  |__ doc
  |     |__Scenery        //Scenery.md 生成的PPT图片
  |     |__SimpleBlue     //SimpleBLue.md 生成的PPT图片
  |     |__Scenery.pdf    //Scenery.md 导出的Pdf
  |     |__SimpleBlue.pdf //SimpleBlue.md 导出的Pdf
  |__ images              //文稿和主题所用到的图片文件 可对背景和logo进行替换
  |__ themes
  |     |__UCASSce.css    //UCASSce主题文件
  |     |__UCASSimple.css //UCASSimple主题文件
  |__Scenery.md           //UCASSce主题对应的md文件
  |__SimpleBlue.md        //UCASSimple主题对应的md文件
```

## Some Picture

![img1](doc/SimpleBlue/SimpleBlue_1.jpg)

![img2](doc/Scenery/Scenery_8.jpg)

![img3](doc/Scenery/Scenery_2.jpg)

![img4](doc/Scenery/Scenery_1.jpg)
