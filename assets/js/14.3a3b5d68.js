(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{354:function(a,t,n){"use strict";n.r(t);var e=n(0),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("​")]),a._v(" "),n("blockquote",[n("p",[a._v("“ 最近的工作中要求选型英文NLP(自然语言处理)工具，然后网上搜索了一番，发现符合条件的比较少，最后选定了CoreNLP和OpenNLP这两款，然后国产的是HanLP，HanLP主要是处理中文的能力比较强，但对于英文分词好像也支持，也顺便一起用一下看看。”")])]),a._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("img",{attrs:{src:"/images/java/nlp.jpeg",title:""}})]),a._v(" "),n("h2",{attrs:{id:"_01-hanlp-流行的中文nlp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-hanlp-流行的中文nlp"}},[a._v("#")]),a._v(" 01 HanLP-流行的中文NLP")]),a._v(" "),n("p",[a._v("HanLP应该是业界使用最多的中文自然语言处理工具了吧，在GitHub上也比较受欢迎，支持Python和Java语言。拥有中文分词，摘要、关键词提取，命名实体识别，智能推荐，拼音简繁转换等等功能，而且还自带强大的各类人名、机构名等高质量语料库。下面就主要来试用一下这个NLP的功能")]),a._v(" "),n("p",[a._v("这里使用的Java版本的，按照Java版本的来使用。地址：\n"),n("a",{attrs:{href:"https://github.com/hankcs/HanLP/tree/1.x",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/hankcs/HanLP/tree/1.x"),n("OutboundLink")],1)]),a._v(" "),n("h3",{attrs:{id:"_1-下载相关jar包和语料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载相关jar包和语料"}},[a._v("#")]),a._v(" 1.下载相关jar包和语料")]),a._v(" "),n("h4",{attrs:{id:"下载data，方式一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载data，方式一"}},[a._v("#")]),a._v(" 下载data，方式一")]),a._v(" "),n("p",[a._v("使用maven来配置：")]),a._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.hankcs"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("hanlp"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("portable-1.7.7"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br")])]),n("h4",{attrs:{id:"下载data，方式二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载data，方式二"}},[a._v("#")]),a._v(" 下载data，方式二")]),a._v(" "),n("p",[a._v("直接下载jar：\n"),n("a",{attrs:{href:"http://nlp.hankcs.com/download.php?file=data",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://nlp.hankcs.com/download.php?file=data"),n("OutboundLink")],1),a._v("\n这种方式可以将程序和数据分离，给了用户高度自定义词典的自由。")]),a._v(" "),n("p",[a._v("下载jar和默认配置文件\n"),n("a",{attrs:{href:"http://nlp.hankcs.com/download.php?file=jar",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://nlp.hankcs.com/download.php?file=jar"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("下载下来会包括一个jar包和一个默认的配置文件。新建一个Java工程，把这个jar包引入到工程中，把hanlp.properties文件放到任意classpath路径下，这里选择放到resources的路径下。然后修改hanlp.properties文件第一行root=为你的data数据的存储路径。data中包含dictionary和model两个文件夹，需要用到词典或模型的功能都读取这里的文件。")]),a._v(" "),n("p",[a._v("接下来就编写程序使用基本的功能(主要分词功能)，这里的分词有标准分词、NLP分词，索引分词，极速词典分词，N-最短路径分词，CRF分词等，主要测试前两种分词，其他的自行再研究。")]),a._v(" "),n("h3",{attrs:{id:"_2-编码使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-编码使用"}},[a._v("#")]),a._v(" 2. 编码使用")]),a._v(" "),n("p",[a._v("2.1 标准分词:\n"),n("img",{attrs:{src:"/images/java/hanlp1.png",alt:""}})]),a._v(" "),n("p",[a._v("2.2 NLP分词：\n"),n("img",{attrs:{src:"/images/java/hanlp2.png",alt:""}})]),a._v(" "),n("p",[a._v("这两种分词模式都会用到词库，但是两者的分词结果又不完全一样。")]),a._v(" "),n("p",[a._v("2.3 自定义词典")]),a._v(" "),n("p",[a._v("可能自带的词典不能满足我们的需求，这时就需要自定义自己的词典了。自定义词典有两种方式：\n在代码中动态添加，这样添加到内存中，而不会添加到词典文件\n自己自定义词典文件，添加词、词性和词频，在配置文件中追加配置")]),a._v(" "),n("p",[a._v("在代码中动态添加，通过一个全局的类：CustomDictionary来完成。\n"),n("img",{attrs:{src:"/images/java/hanlp3.png",alt:""}})]),a._v(" "),n("p",[a._v("添加自定义词典文件：\n在/data/dictionary/custom/目录下新建一个myWords.txt文件，其中添加自定义的词语。然后在hanlp.properties配置文件中修改配置：\n"),n("img",{attrs:{src:"/images/java/hanlpprop.png",alt:""}})]),a._v(" "),n("p",[a._v("注意要空格隔开，有词性就在后面空格后添加词性。")]),a._v(" "),n("p",[a._v("然后删除同步目下的"),n("code",[a._v("CustomDiction.txt.bin")]),a._v("文件，再重新运行HanLP，在第一次使用时会报错，然后等待两分钟后自动生成bin文件了，所以有的自定义词典都会训练到这个模型文件中来。")]),a._v(" "),n("p",[a._v("可能会遇到的坑：添加了自定义txt文件，生成bin文件后，分词不生效？\n可能的原因：")]),a._v(" "),n("ol",[n("li",[a._v("检查在配置文件中的路径书写是否正确，可以尝试以全路径放到最后，不用分号结尾试试。（网上有说这样可以解决）")]),a._v(" "),n("li",[a._v("检查自定义txt文件的编码，记住一定要改成"),n("code",[a._v("UTF-8")]),a._v("格式编码的，这是我踩过的坑，文件是GBK的，然后一直无效，右键改成utf-8的编码后重新生成就可以了。")])]),a._v(" "),n("h2",{attrs:{id:"_02-corenlp-斯坦福大学出品"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-corenlp-斯坦福大学出品"}},[a._v("#")]),a._v(" 02 CoreNLP-斯坦福大学出品")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/java/corenlp.png",alt:""}})]),a._v(" "),n("p",[a._v("这个是国外斯坦福大学的一个英文NLP项目，现在已更新到4.0版本。包含诸多的NLP该有的功能，如命名实体识别，情感分析，关系抽取，词性分析等等。英文语言的处理要比中文处理简单，因为英文都是一个单词一个单词以空格分隔，而中文一句话往往紧密相连，很难判断其具体语境。")]),a._v(" "),n("p",[a._v("但在使用CoreNLP的过程中发现，原来它的分词基本上是以空格来实现，并没有词组的分词功能，但可以扩展使用外部的解释器。")]),a._v(" "),n("h3",{attrs:{id:"_1-基本使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本使用"}},[a._v("#")]),a._v(" 1. 基本使用")]),a._v(" "),n("p",[a._v("官网：\n"),n("a",{attrs:{href:"https://stanfordnlp.github.io/CoreNLP/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://stanfordnlp.github.io/CoreNLP/index.html"),n("OutboundLink")],1),a._v("\n功能测试试用：\n"),n("a",{attrs:{href:"http://corenlp.run/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://corenlp.run/"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("下载jar及相关的词库、模型文件。其中模型文件是以jar包的方式引入，然后corenlp从jar包中读取相关的模型。当然我们不一定用到全部功能，可能只是用到其中一两个功能，没必要全部引入，而且jar太大，严重影响工程的打包。")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/java/corenlp2.png",alt:""}})]),a._v(" "),n("p",[a._v("所以可以对这个模型jar包做反编译处理，然后获取其中的模型文件，拿出来放到一个目录中，然后通过在配置文件配置后，在代码中用到功能时动态添加。")]),a._v(" "),n("p",[a._v("用到的jar包主要是下面几个，把它放到lib目录下。\n"),n("img",{attrs:{src:"/images/java/corenlp-jars.png",alt:""}})]),a._v(" "),n("p",[a._v("基本代码如下：\n"),n("img",{attrs:{src:"/images/java/corenlp0.png",alt:""}})]),a._v(" "),n("p",[a._v("只测试基本的分词功能，其他更多的功能例子可以在官网上获得。")]),a._v(" "),n("h3",{attrs:{id:"_2-引入词组分词扩展"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-引入词组分词扩展"}},[a._v("#")]),a._v(" 2. 引入词组分词扩展")]),a._v(" "),n("p",[a._v("这么权威的大学做的NLP项目，居然没有天然支持词组分词。需要引入一个第三方的MutilWord(MWEs)，而这个第三方扩展也就是引入一个Java的词组分词能力的项目-jMWE（"),n("a",{attrs:{href:"http://projects.csail.mit.edu/jmwe/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://projects.csail.mit.edu/jmwe/"),n("OutboundLink")],1),a._v("）。不管怎样先试一下吧，看看到底怎么用，好不好用。")]),a._v(" "),n("p",[a._v("可以参考项目：\n"),n("a",{attrs:{href:"https://github.com/toliwa/CoreNLP",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/toliwa/CoreNLP"),n("OutboundLink")],1)]),a._v(" "),n("p",[a._v("这个扩展是拿CoreNLP项目来添加mutil-word的，而我们只需要将其中的src中的JMWEAnnotator.java文件提取处理即可，"),n("code",[a._v("/src/edu/stanford/nlp/pipeline/")]),a._v("下面。因为CoreNLP本身也支持自定义添加annotator注释器。")]),a._v(" "),n("p",[a._v("工程lib中引入一个新的包："),n("code",[a._v("edu.mit.jmwe_1.0.2.jar")])]),a._v(" "),n("p",[a._v("将提取出来的JMWEAnnotator.java文件放到新建的package中待用。")]),a._v(" "),n("p",[a._v("JMWEAnnotator中实现了Annotator接口，所以实现其中必要的方法即可：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(" //主要逻辑\n @Override\n public void annotate(Annotation annotation);\n @Override\n public Set<Class<? extends CoreAnnotation>> requirementsSatisfied();\n //需要的依赖\n @Override\n public Set<Class<? extends CoreAnnotation>> requires() ;\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br")])]),n("p",[a._v("当然还需要词库文件，这个jMWE是使用data格式的词库文件：\n"),n("code",[a._v("mweindex_wordnet3.0_semcor1.6.data")]),a._v("\n在上面可以添加自定义的词组。")]),a._v(" "),n("p",[a._v("把这个词典文件放到任意目录下，在使用这个词组分词功能时，添加如下的配置代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('Properties props = new Properties();\nprops.setProperty("annotators", "tokenize, ssplit, pos, lemma, jmwe");\nprops.setProperty("customAnnotatorClass.jmwe", "edu.stanford.nlp.pipeline.JMWEAnnotator");\nprops.setProperty("customAnnotatorClass.jmwe.verbose", "false");\nprops.setProperty("customAnnotatorClass.jmwe.underscoreReplacement", "-");\nprops.setProperty("customAnnotatorClass.jmwe.indexData", index);//词库文件路径\nprops.setProperty("customAnnotatorClass.jmwe.detector", "CompositeConsecutiveProperNouns");\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br")])]),n("p",[a._v("在设置属性时annotators添加jmwe和配置索引(词库)的路径。")]),a._v(" "),n("p",[a._v("主要的使用逻辑代码：")]),a._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('java List<CoreMap> sentences = doc.get(SentencesAnnotation.class);\n  for (CoreMap sentence: sentences) {\n      System.out.println("Sentence: "+sentence);\n      //loop over all discovered jMWE token and perform some action\n      for (IMWE<IToken> token: sentence.get(JMWEAnnotation.class)) {\n        System.out.println("IMWE<IToken>: "+token+", \n        token.isInflected(): "+token.isInflected()+", \n        token.getForm(): "+token.getForm());\n   }\n}  \n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br")])]),n("p",[a._v("然后就可以添加自定义英文词组来对英文句子词组分词了。")]),a._v(" "),n("h2",{attrs:{id:"_03-opennlp-apache开源项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03-opennlp-apache开源项目"}},[a._v("#")]),a._v(" 03 OpenNLP-Apache开源项目")]),a._v(" "),n("p",[n("img",{attrs:{src:"/images/java/opennlp-pic.png",alt:""}})]),a._v(" "),n("p",[a._v("Apache OpenNLP是一款基于Apache开源协议的自然语言处理工具。它提供了一些如标记化，句子分割，词性标记，命名实体提取，分块，解析等功能模块。其实与CoreNLP的项目结构类似，也是由许多的组件组成，通过这些组件构成NLP这一整个库，每个组件通过加载不同的模型来完成各自的自然语言处理任务。跟CoreNLP一样，也通过某个组件来构建一个管道，去使用这些NLP的注释器，如检测器、分词器、词性标注器等。")]),a._v(" "),n("p",[a._v("项目地址："),n("a",{attrs:{href:"http://opennlp.apache.org",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://opennlp.apache.org"),n("OutboundLink")],1),a._v("。\n官网有一些已经训练好的模型，可以直接拿来使用："),n("a",{attrs:{href:"http://opennlp.sourceforge.net/models-1.5/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://opennlp.sourceforge.net/models-1.5/"),n("OutboundLink")],1),a._v("。")]),a._v(" "),n("p",[a._v("然后根据官方的文档进行学习和使用：\n"),n("a",{attrs:{href:"http://opennlp.apache.org/docs/1.9.2/manual/opennlp.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://opennlp.apache.org/docs/1.9.2/manual/opennlp.html"),n("OutboundLink")],1)]),a._v(" "),n("h3",{attrs:{id:"_1-基本使用-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本使用-2"}},[a._v("#")]),a._v(" 1.基本使用")]),a._v(" "),n("p",[a._v("首先下载项目中的相关文件，获取其中的jar包文件，引入到Java工程中。这里测试主要是拷贝：opennlp-tools-1.9.2.jar 即可。")]),a._v(" "),n("p",[a._v("然后编写分词测试代码：\n"),n("img",{attrs:{src:"/images/java/opennlp.png",alt:""}})]),a._v(" "),n("p",[a._v("OpenNLP的基本就是这样，没有研究太多，一些现有模型不太满足的，可能还需要进行模型训练，这部分还不是涉及太多，后续有闲时间再看吧。")]),a._v(" "),n("h2",{attrs:{id:"最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[a._v("#")]),a._v(" 最后")]),a._v(" "),n("p",[a._v("总的来说，中文语言处理一般用HanLP比较多吧，另外还听说过有个庖丁分词器、IK分词器都可以了解一下。英文的也有很多，但Java实现的不多，Python的多，Java实现的现在看来主要是CoreNLP和OpenNLP了。")])])}),[],!1,null,null,null);t.default=s.exports}}]);