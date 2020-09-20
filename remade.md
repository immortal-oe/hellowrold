<!--
 * @Author: your name
 * @Date: 2020-09-11 23:07:39
 * @LastEditTime: 2020-09-19 23:26:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /youhello/remade.md
-->
# 一. 引用ts

1. https://www.dazhuanlan.com/2019/10/16/5da5f99b169cd/


yarn add --dev typescript react-native-typescript-transformer @types/react @types/react-native

yarn add --dev global @types/redux 


# 1. Unable to find a matching configuration of project :react-native-code-push: None of the consumable configurations have attributes.

查看 TODO

 # 2. The number of method references in a .dex file cannot exceed 64K.

defaultConfig {
    multiDexEnabled true     //解决DEX单行溢出
}

# 3. Error: Activity class {com.hello_im/com.hello_im.MainActivity} does not exist.

在run运行的时候，把app卸载了，出现了上述错误
因为 adb 里还保存着 com.hello_im 

adb uninstall com.com.hell

# 4 MacOS Sierra下运行react-native start出现Error watching file for changes: EMFILE问题解决

1、卸载所有已安装的watchman：brew uninstall --force watchman

2、删除watchman相关文件：rm -rf /usr/local/var/run/watchman/

3、重新安装watchman：brew install watchman



# react-native启动时红屏报错：Unable to load script.Make sure you're either running a metro server or that ....

# 如果  android/app/src/ 下debug目录没有 

从其他项目 复制一个debug 目录和文件，
把 ReactNativeFlipper.java 的第一行改完本项目的包明 com.xxx

否则如下试试

1、 项目中在android/app/src/main/创建文件夹  assets

 2、项目中执行命令

react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 
　*注意：查看自己项目是否有 index.android.js这个文件，如果有回车执行命令即可，否则会会报错，找不到这个index.android.js文件；把index.android.js改为index.js

　执行这句命令后会在新建的assets文件夹下生成一个index.android.bundle文件


npm run android


#  [CodePush] Error in getting binary resources modified time

apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"




# RSKImageCropper 2.3.0 (was 2.2.3 and source changed to `https://cdn.cocoapods.org/` from `trunk`)

等很久

CocoaPods 1.8将CDN切换为默认的spec repo源是trunk源，podfile文件中一定要指定master源。
但我们更改源之后还不能使用，可能与我们的网络有一定关系，下面是我的解决方案。

新版的 CocoaPods 不允许用pod repo add直接添加master库了，但是依然可以：

1. cd ~/.cocoapods/repos 
2. pod repo remove master
3. git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master

最后进入自己的工程，在自己工程的podFile第一行加上：

4. source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
完事之后记得remove trunk ，执行下面的命令
pod repo remove trunk

下载完 去掉  4.