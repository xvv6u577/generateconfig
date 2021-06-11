每个平台客户端，配置升级教程！
————————————————————————————————————————————————————————————————
Windows v2rayw客户端：

step 1: window 系统时间校准

请确保你的PC已联网

windows 的本地时间和标准时间相差必须在 90s 以内（时区无关），否则客户端运行会有问题。
右键点击右下角的“时间” -> 点击“调整日期时间” -> 把自动设置时间和自动设置时区勾选上即可.

step 2: 下载客户端

下载客户端：
https://w8.undervineyard.com/static/v2rayw.zip

解压v2rayw.zip。打开解压后文件夹，双击运行v2rayw.exe文件。

windows右下角状态栏出现绿色W形状图标。

step 3: 添加配置

右击绿色W形状图标 -> 配置..., 在v2rayw配置面板中，依次填入下面参数：

本地socks5端口：1080
本地http端口：8008

点按“添加”，填入服务器信息->
地址：w8.undervineyard.com:443
用户ID：17875261-af4d-46e7-9c3b-a67730256d10
额外ID: 64
等级：0
加密方式：auto
标签：w8
网络类型：ws

点按“传输设置”->
——————————————————————
WebSocket标签下：
路径：/cas
http头部：（空白）

TLS标签下：
选中"启用传输层加密TLS"
其它选择留空

其它标签保持原配置，不用更改。
——————————————————————

点按“保存”。v2rayw配置面板中，点按保存。

step 4: 设置系统代理

windows系统设置中，搜索“proxy”。

选中“使用代理服务器”
地址：127.0.0.1
端口：8008
选中“请勿将代理服务器用于本地地址”。

step 5: 打开v2rayw

右击绿色W形状图标 -> v2ray内部路由规则 -> 选择“绕过本地和CN地址”

右击绿色W形状图标 -> 选择“手动模式”

右击绿色W形状图标 -> 选择“加载v2ray”

以上设置完成！

打开edge/chrome浏览器，输入baidu.com，测试是否能正常联网；输入www.google.com，测试是否能正常联外网。
（以上内容，遇到问题，请给我发信息，我们可以约时间通过zoom远程控制帮助你安装。）

————————————————————————————————————————————————————————————————
Windows客户端：

step 1: window 系统时间校准

请确保你的PC已联网

windows 的本地时间和标准时间相差必须在 90s 以内（时区无关），否则客户端运行会有问题。
右键点击右下角的“时间” -> 点击“调整日期时间” -> 把自动设置时间和自动设置时区勾选上即可.

step 2: 下载客户端

下载地址： https://w8.undervineyard.com/static/win64.zip

解压后，把文件夹移动到合适的地方，以免误删除。

step 3: 运行

在浏览器中打开下面的URL，选中所有字符串之后，ctrl+c粘贴！
https://w8.undervineyard.com/static/bqgeorge/

打开文件夹，双击v2rayN.exe，运行客户端。如果成功运行，Windows桌面任务栏会有V形的图标。

双击V形图标，依次选择“服务器” -> 从下拉列表中选择"从剪切板导入批量URL"! 导入成功的话，v2rayN会有对话框弹出。
 
step 4: 参数设置

双击V形图标，在对话面板中依次选择“参数设置” -> "一键设置默认自定义路由规则"。

右击V图标，在对话面板中依次选择“Http代理” -> “开启Http代理，并自动配置系统代理（全局模式）”。

双击V形图标，在对话面板中点击选择“重启服务”。

配置已完成！打开 baidu 首页，测试 pc 是否可以连网；打开 google 首页，测试是否蕃茄成功。

——————————————————————————————————
iphone/ipad 手机客户端：

step 1、安装app "shadowrocket"。

设置 -> iTunes Store与 App Store，退出你的Apple ID，用下面的 Apple ID（美区）登入。
apple ID: warley8013@gmail.com pwd:Google@521

打开app store，查找 "shadowrocket" ，安装。

提示：
1、上面提供的apple id已经购买shadowrocket，登陆之后可以直接安装。
2、apple ID 登陆的时候，需要双重认证，给我发信息提示，我会发给你认证数字。

step 2、打开 shadowrocket，主界面左上角打开相机，扫描下面的二维码

QR url：
https://w8.undervineyard.com/static/johnathonbai/qr.png

Step 3：添加url规则文件

打开 shadowrocket, 选择“配置”tab, 点按右上角“+”， 填入下面url

https://w8.undervineyard.com/static/customed.conf

step 4: 设置运行模式
打开App主界面，"全局路由"选择"配置"。
打开"未连接"右边单选框，若标题栏出现“VPN”字样，说明 App 已经在运行。
此时，shadowrocket 接管手机的网络连接，手机中App已处于可番茄状态。

——————————————————————————————————————————————
Mac os x 系统客户端：

Step 1：安装 V2ray 客户端

客户端下载： https://w8.undervineyard.com/static/mac.zip
配置Url：https://w8.undervineyard.com/static/xiaohe/

解压之后，把 v2rayx 直接移动到/Application 文件夹。以后，通过四指捏合调出 launchpad，可以找到程序直接打开。桌面标题栏出现钻石形状的图标，说明 v2ray 已运行。

依次打开，Configure... -> Advanced... -> V2ray Core -> 点按open... , 把解压文件中余下的四个文件，移动到新打开的文件夹中。

在新打开的文件夹中，分别点按v2ray、v2ctl两个文件，确保其已授权可以在你的mac上运行（点按之后，查看 系统偏好 -> 安全&隐私 -> 基本 有没有提示，如果有的话，同意其运行）。

step 2:添加配置参数（两部分）

依次打开，Configure... -> Import... -> Import from other links... -> 浏览器中打开上面的配置url，每次一行，粘贴到输入框，点按OK。
添加成功之后，配置对话框左侧vmess servers中有新的项目产生。

step 3: 运行 v2ray 客户端

点击App图标，选中 load core，运行客户端。
点击App图标，选择 Server... -> w8-hk-gcp 或 rm-la-twitter 二选一
点击App图标，选择 Routing Rule -> bypasscn_private_apple。
再次点击App图标，点击"Authorize_v2rayx_conf..."，输入密码，授权 app 可以代理 PC 的网络流量。

此时 safari/chrome/firefox 已经打开 Google 了。

————————————————————————————————————
Android 手机客户端：

step 1: 安装v2rayNG客户端

下载地址：https://w8.undervineyard.com/v2rayNG_1.2.6.apk

step 2: 填入配置参数

打开软件，进入主界面。点右上角“+” -> 手动输入[vmess]

别名：w8-hk
地址：w8.undervineyard.com
端口：443
用户id: 5abefa73-c61d-4b2f-9345-9775568627d8
额外ID: 64
加密方式：auto
传输协议：ws （或者websocket）
伪装类型：none
伪装域名：(留空)
path: /cas
底层传输安全：tls

点界面右上角的勾保存配置。

step 3: 回到主界面，点右下角的v2rayNG图标，启动程序。如果出现网络连接请求，点击确定。安装完成！

————————————————————————————————————
chrome/firefox 如何安装 switchyomega 插件

chrome 地址栏中打开下面的 URL：
https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif

firefox 地址栏打开这一个：
https://addons.mozilla.org/en-US/firefox/addon/switchyomega/

授权安装 switchyomega 插件。完成安装之后，浏览器地址栏右端会出现圆形的图标。
点击图标，选择“options”。
依次选择“import/export” -> restore from online -> 填写"https://w8.undervineyard.com/OmegaOptions.20200217.bak" -> 提示导入成功后，点击“Apply changes”
回到浏览器，再次点击 switchyomega 插件图标，选择“auto switch”。

配置完成了。你的浏览器中浏览网页，它会自动判断，被 block 的 site 会走代理，其它的会像往常一样直连。有问题的话，可以在 signal 中发来！

————————————————————————————————————
iphone/ipad 手机客户端：

step 1、安装app "shadowrocket"。

设置 -> iTunes Store与 App Store，退出你的Apple ID，用下面的 Apple ID（美区）登入。
apple ID: warley8013@gmail.com pwd:Google@521

打开app store，查找 "shadowrocket" ，安装。

提示：
1、上面提供的apple id已经购买shadowrocket，登陆之后可以直接安装。
2、apple ID 登陆的时候，需要双重认证，给我发信息提示，我会发给你认证数字。

step 2、点按shadowrocket右上角“+” -> 类型选择“Subscribe” -> 

url：https://w8.undervineyard.com/static/21clsj/ip/
备注：uvp

-> 点按右上角“完成”。

Step 3：设置运行模式
回到主界面，向右滑动新添加的选项uvp，点按“更新”。项目下方会出现2个列表，选中其中一个后，左边会现黄色圆点。
回到主界面，"全局路由"选择"配置"。
打开"未连接"右边单选框，若标题栏出现“VPN”字样，说明 App 已经在运行。
此时，shadowrocket 接管手机的网络连接，手机中App已处于可番茄状态。
