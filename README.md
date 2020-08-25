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


# error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' o
