## 导入

1. 点击open按钮，可以在弹出的窗口中选择导入的动画文件，进行导入。

2. 或者直接**拖动文件**到浏览器中。

可以处理的文件格式：json、bin、tex、dyn、zip

<br/>

## 导出

点击export按钮，可以在弹出的导出界面进行选择导出的设置，最后点击Download按钮下载导出的文件。导出界面如下图所示：

<p align="center">
    <img src="../../public/images/tool-export.png"/>
</p>


### Type选项

1. json：导出json格式的动画文件。

2. bin：导出bin格式的动画文件，用于游戏中使用。

3. spine：导出可在spine编辑器中使用的动画文件。

### Anim选项

1. 勾选框表示是否导出该内容。

2. Banks旁边的`ecalculate collision`可重新计算anim的碰撞框数据, 必须勾选对应的Build。

3. `all symbol frames` 和 `Spine Setup Pose`：在导出spine格式的动画文件时使用，见[饥荒动画转Spine](/zh/spine/export-import#饥荒动画转spine)

### Build选项

1. 勾选框表示是否导出该内容。

2. `Atlas`：是否导出tex纹理集，对图片进行改动时需要勾选这个按钮。

3. `spit`：是否导将贴图集切分为单独的图片。

4. `repake`：重新打包tex纹理集。

5. `dyn`：是否导出为dyn格式的动画文件。

6. `Merge Build name`输入框：在勾选了多个Build时，导出时会将多个Build合并为一个，可输入合并后的Build名称。

### zip选项

1. 勾选框表示是否压缩导出文件为zip格式。

2. `File Name`输入框：输入zip文件名。
