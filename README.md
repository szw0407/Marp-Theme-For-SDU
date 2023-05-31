# Marp-Theme  Marp 主题

本项目计划基于国科大Marp主题进行修改，并已经基本完成2个模板的修改，同时对于背景的图片保留了一个PSD文件可供二次编辑。

Marp的官方文档写得很不清晰，不容易看懂，而且似乎不是面向普通用户的。本人的另一个仓库
[Marp-Theme-for-UCAS(Forked from BeWaterMyFriend7/Marp-Theme-UCAS)](https://github.com/szw0407/Marp-Theme-for-UCAS)
中分析了Marp的文件结构和修改的方案，并通过一些方式，理论上同时能推送修改到这里（实际上可能会出现各种问题，因为我现在还是不熟悉Git的全部操作）

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
