import{_ as a,J as i,K as e,N as t}from"./framework-ede8edbb.js";const g={},o=t('<h1 id="神经网络模型训练" tabindex="-1"><a class="header-anchor" href="#神经网络模型训练" aria-hidden="true">#</a> 神经网络模型训练</h1><blockquote><p>经过之前 coreML 的介绍，自己训练一个模型</p><p><em>使用 xcodeplayground 训练简单神经网络模型</em></p></blockquote><h2 id="详细" tabindex="-1"><a class="header-anchor" href="#详细" aria-hidden="true">#</a> 详细：</h2><p>去年，苹果(Apple)推出了 Core ML:这是一种快速的方法，可以让你用尽可能少的代码将预先培训好的机器学习模型导入应用程序中!今年，有了 Create ML，苹果给了我们开发人员创建我们自己的机器学习模型直接进入 Xcode 的平台的能力!我们只需要一些数据就行了!目前，Create ML 允许文本、图像和表作为数据。然而，由于这是大多数 ML 应用程序的组成部分，这应该很好地服务于您的目的!我将向您展示如何使用这三种类型的数据创建一个 ML 模型.</p><figure><img src="https://upload-images.jianshu.io/upload_images/3343369-38993f3fc4b87558.jpeg?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>注意：本教程构建在 Xcode 10 和 macOS Mojave 之上。请确保您升级了 Xcode 和 macOS，以便遵循本教程.</strong></p><p>之前的文章介绍过如何使用 ML，今天主要讲一下使用 xocde 的 playground 来训练一个简单神经网络模型，顺便可以熟悉 swift</p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2><p>1.本文想做一个图像分类器的模型，区分简单图像</p><p>2.打开文件夹时，您将注意到另外两个文件夹:训练数据和测试数据。每个文件夹都有苹果和香蕉的混合图片。有大约 20 张苹果图片和 20 张香蕉图片，分别被称为测试数据和 80 张苹果图片和 80 张香蕉图片。我们将在训练数据中使用图像来训练分类器，然后使用测试数据来确定其准确性。</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/sw1Tn6SBESjcjvMyVvu.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3.如果您想构建自己的图像分类器，那么将数据集进行 2-8 分割是很重要的。大约 80%的图像用于训练数据，其余部分用于测试数据。这样，您的分类器就有更多的数据需要训练。在每个文件夹中，将图像放在各自的文件夹中。根据图像的类别标签命名这些文件夹。</p><p>4.新建 playground，注意这里一定要选 macos 而不是 iOS，因为训练模型需要引入的头文件<strong>CreateMLUI</strong>是 macos 的</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/RaJzQO6Nm9Wjuvw3nCh.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>5.接下来，给你的 playground 的起个名字，把他保存起来。</p><p>开始 coding</p><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><p>确保在 Xcode playground 中启用 Live View 特性，您将能够看到可视化界面! 需要引入 CreateMLUI，CreateMLUI 是一个与 CreateML 类似的框架，但它有一个 UI。到目前为止，CreateMLUI 只能用于图像分类. 然后在 playground 中输入以下代码</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/FqBcXuSwRDOxpw8UBTF.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行之后是这个样子的</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/LxHV4JoUeBdaUGfodqb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面向其中拖入训练数据，它会自动开始训练并显示当前进度</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/gWYNXlrru03F8sMYlIR.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>控制台也会显示一些信息</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/TUgR2XH0hovyEuJv7hP.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>训练完成之后我们可以看到上面有三个标签:培训、验证和评估。培训是指 Xcode 成功培训的培训数据的百分比。这应该是 100%</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/9JrqyfzXxNCjuDxSJMO.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>评估是空的因为我们还没有给 xcode 任何测试数据，xcode 会在剩余的 20%上验证分类器，接着拖入测试数据</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/PjupzGNXjHBhQixucpb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当一切都完成后，我们的评估分数应该也是在 100%</p><p>如果你对你的结果满意，剩下的就是保存文件了!单击图像分类器标题旁边的箭头。应该出现一个下拉菜单，显示所有的元数据。将元数据更改为您想要的方式，并将其保存到您想要的位置!</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/9XYJjpWXhZSdRjZWLze.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>他长这个样子</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/8cNWX8eidTARekAmU3J.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来可以打开 CoreML 模型并查看元数据。它有你填的所有东西!恭喜你!您是您自己的图像分类器模型的作者，它非常强大，并且只需要 17 KB!</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/gAS7BWestsJDUJChOch.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="文本分类器模型" tabindex="-1"><a class="header-anchor" href="#文本分类器模型" aria-hidden="true">#</a> 文本分类器模型</h2><p>接下来，我们将使用 Create ML 构建一个垃圾邮件检测器模型。 废话不多说，上代码</p><figure><img src="http://www.demodashi.com/contentImages/image/20190724/Zb3xW53OWSeEt2pw1k7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>首先，我们创建一个名为 data 的常量，它是垃圾邮件的一种 MLDataTable。json 文件。MLDataTable 是一个全新的对象，用于创建一个决定训练或评估 ML 模型的表。我们将数据分为 trainingData 和 testingData。和以前一样，比率是 80-20，种子是 5。种子是指分类器的起点。然后我们用我们的训练数据定义一个叫做 spamClassifier 的 MLTextClassifier，定义数据的值是文本，什么值是标签。</li><li>创建了两个变量，名为 trainingAccuracy 和 validationAccuracy，用于确定分类器的准确程度。在侧窗格中，您可以看到百分比。</li><li>我们还检查评估的执行情况。(请记住，评价是分类器以前没有看到的文本上使用的结果，以及它们的准确性。</li><li>最后，我们为 ML 模型创建一些元数据，如作者、描述和版本。我们使用 write()函数将模型保存到我们选择的位置!在下面的图片中，你会看到我选择了桌面!</li></ul><figure><img src="https://upload-images.jianshu.io/upload_images/3343369-ce98597754508f93.png?imageMogr2/auto-orient/strip|imageView2/2/w/970/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>运行。您可以在控制台中看到迭代，在右边栏中看到精度! 完成所有操作后，将保存核心 ML 模型!您可以查看模型并查看元数据!</p><figure><img src="https://upload-images.jianshu.io/upload_images/3343369-d8deb59d132c958c.png?imageMogr2/auto-orient/strip|imageView2/2/w/1000/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',43),n=[o];function p(c,r){return i(),e("div",null,n)}const s=a(g,[["render",p],["__file","神经网络模型训练.html.vue"]]);export{s as default};
