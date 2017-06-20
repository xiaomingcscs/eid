cordova.define("bsl.infinitus", function (require, exports, module) {
    /**
     * 旧版通用接口方法对象
     */
    var CordovaExec = cordova.require("cordova/exec");
    var ift_new = {
        descr: "bsl.infinitus",
        tapBar: {
            descr: "bsl.infinitus.tapBar TapBar插件",
            /**
             *  显示 首页tapBar
             *
             *  @param aParams Array 菜单数据
             *
             *  @return {code:int,msg:string,result:{id:string}} id 菜单ID
             */
            showView: function (aParams,sCallback) {
               CordovaExec(sCallback, null,"HomeTapBar", "showView", [aParams]);
            },
               /**
                *  关闭
                *
                */
            dismiss: function () {
               CordovaExec(null, null,"HomeTapBar", "dismiss", []);
            }
               
        },
        notification: {
            descr: "bsl.infinitus.notification 通知插件",
            /**
             * 链接或注册
             *  @param jParams (可选)链接参数 {tryInterval:重连时间间隔,tryCount:重连次数,retryInterval:推送注册时间间隔}
             */
            startNotifyConnect: function (jParams, sCallback, sError) {
                CordovaExec(sCallback, sError, "Socket", "startNotifyConnect", [jParams]);
            },
            /**
             * 重新注册
             */
            reRegisterPush: function (sCallback, sError) {
                CordovaExec(sCallback, sError, "Socket", "ReRegisterPush", []);
            },
            /**
             * 获取等待推送消息
             */
            hasWaitingForShowPushNotification: function (sCallback, sError) {
                CordovaExec(sCallback, sError, "Socket", "hasWaitingForShowPushNotification", []);
            },
            /**
             * 添加推送消息监听
             *  @param sId NSString 唯一标识
             */
            addObserverForNotification: function (sId, sCallback, sError) {
                CordovaExec(sCallback, sError, "Socket", "addObserverForNotification", [sId]);
            },
            /**
             * 移除推送消息监听
             *  @param aIds @[@"id_1",@"id_2"] Array 要移除的监听ID
             */
            removeObserverForNotification: function (aIds, sCallback, sError) {
                CordovaExec(sCallback, sError, "Socket", "removeObserverForNotification", [aIds]);
            },
               /**
                * 删除消息
                *  @param menuCodes Array 要移除menuCode
                */
               deleteNotifications:function(sCallback,menuCodes){
               CordovaExec(sCallback, sCallback, "Socket", "deleteNotifications",[menuCodes]);

               },
               /**
                * 获取消息
                *  @param menuCodes Array 获取menuCode对应的数据
                */
               getNotifications:function(sCallback,menuCodes){
               CordovaExec(sCallback, sCallback, "Socket", "getNotifications",[menuCodes]);
               
               },
               /**
                * 设置消息
                *  @param menuCodes Array 要设置menuCode
                */
               setNotifications:function(sCallback,menuCodes){
               CordovaExec(sCallback, sCallback, "Socket", "setNotifications",[menuCodes]);
               
               }
               
               
        },
        launch: {
            descr: "bsl.infinitus.launch 启动插件",
            /**
             * 打开启动页面
             */
            showLaunchView: function (sCallback, sError) {
                CordovaExec(sCallback, sError, "Launch", "showView", []);
            }
        },
        welcome: {
            descr: "bsl.infinitus.welcome 欢迎页插件",
            /**
             * 打开欢迎界面
             */
            showWelcomeView: function (sCallback, sError) {
                CordovaExec(sCallback, sError, "Welcome", "showView", []);
            }
        },
        login: {
            descr: "bsl.infinitus.login  登陆插件",
            /**
             * 打开登陆界面
             */
            showLoginView: function (sCallback) {
                CordovaExec(sCallback, null,
                    "Login", "showView", []);
            },
            /**
             * 业务密码确认
             * @param iType int 0 : 普通状态（默认）   1：确认订单  2：支付中
             * @param sCallback String 回调函数名 结构function callback(result){} result Json 验证结果  {code:int ,msg:String 描述  }
                            code 0：验证失败 
                                 1:验证成功  
                                 -1：密码输错5次  
                                 2：（确认订单中）验证失败，关闭提示窗，不产生草稿单，不清购物车对应产品，进入忘记登录密码页
                                 3：（支付中）关闭提示窗，保存草稿单，清购物车对应产品，并进入忘记登录密码页
             
             */
            confirmBusinessPwd: function (iType,successCallback) {
                CordovaExec(successCallback, null,
                    "Login", "confirmBusinessPwd", [iType]);
            },
            /**
             * 安全退出
             *@isHiddenAlert BOOL 是否隐藏温馨提示框
             */
            logout: function (isHiddenAlert) {
               CordovaExec(null, null,
                           "Logout", "logout", [isHiddenAlert]);
            },
            /**
             * 用户账号信息失效时，登出该账号
             */
             logoutByUserInvalid: function () {
               CordovaExec(null, null,
                           "Logout", "logoutByUserInvalid", []);
            }
        },
        share: {
            descr: "bsl.infinitus.share 分享插件",
            /* 检查目标客户端是否安装
             * type int 检测的App客户端的类型：
             * 1: QQ
             * 2: 微信
             * 3: 微博
             */
            checkAppInstall: function (type, successCallback) {
                CordovaExec(successCallback, null,
                    "Share", "checkAppInstall", [type]);
            },
            /**
             *  分享到指定平台  参数没有内容时传空字符串
             *  @param 所分享的平台        array 0：全部  1：微信 2：微信朋友圈 3：微信收藏 4：QQ空间 5：QQ好友 6：新浪微博  7：短信
             *  @param 标题        string
             *  @param 内容        string
             *  @param 要分享的链接   string
             *  @param 要分享的图片链接 string
             *  @param 要分享的音乐链接 string
             *  @param 分享类型   int   0:自动适配类型，视传入的参数来决定 1:文本 2:图片 3：网页 4：应用 5：音频 6：视屏 7：文件（仅微信）
             *  @param 要分享的id contentID
             **/
            shareContent: function (shareList, title, msg, url, imgurl, musicurl, shareType, contentID, successCallback) {
                CordovaExec(successCallback, null, "Share", "shareContent", [shareList, title, msg, url, imgurl, musicurl, shareType, contentID]);
            },
/**
             *  直接分享到指定平台  参数没有内容时传空字符串
             *  @param 所分享的平台 int  1：微信 2：微信朋友圈 3：微信收藏 4：QQ空间 5：QQ好友 6：新浪微博  7：短信
             *  @param 标题        string
             *  @param 内容        string
             *  @param 要分享的链接   string
             *  @param 要分享的图片链接 string
             *  @param 要分享的音乐链接 string
             *  @param 分享类型   int   0:自动适配类型，视传入的参数来决定 1:文本 2:图片 3：网页 4：应用 5：音频 6：视屏 7：文件（仅微信）
             *  @param 要分享的id contentID
             **/
            shareDirectContent: function (platform, title, msg, url, imgurl, musicurl, shareType, contentID, successCallback) {
                CordovaExec(successCallback, null, "Share", "shareDirectContent", [platform, title, msg, url, imgurl, musicurl, shareType, contentID]);
            },

        },
        password: {
            descr: "bsl.infinitus.password 密码插件",
            /**
             * 打开获取密码界面
             *  @param iType 0 ：业务密码  1：e帆网密码
             */
            getPassword: function (sCallback, sError, iType) {
                CordovaExec(sCallback, sError, "GetPassword", "showView", [iType]);
            },
            /**
             * 打开修改密码界面
             *  @param type 0：e帆网密码  1：业务密码
             */
            modifyPassword: function (sCallback, sError, iType) {
                CordovaExec(sCallback, sError, "ModifyPassword", "showView", [iType]);
            }
        },
        protocol: {
            descr: "bsl.infinitus.protocol 协议插件",
            /**
             * 打开获取密码界面
             *  @param iType 0 ：业务密码  1：e帆网密码
             */
            showView: function (sCallback, sError, iType) {
                CordovaExec(sCallback, sError, "Protocol", "showView", [iType]);
            }
        },
        QRCode: {
            descr: "bsl.infinitus.scanBarcode 二维码扫描插件",
            /**
             * 进入扫描页面
             * isContinue Boolen 若为true，则扫面完后关闭扫面界面，反正不关闭
             */
            scanBarcode: function (isContinue, successCallback) {
                CordovaExec(successCallback, null,
                    "ScanBarcode", "showView", [isContinue]);
            },
            /**
             * 回传结果给扫描页面
             * msg 在二维码界面toast显示的内容
             */
            sendScanningResults: function (msg) {
                CordovaExec(null, null,
                    "ScanBarcode", "showView", [msg]);
            },
            /**
             *  关闭扫描界面
             */
            closeBarcode: function () {
                CordovaExec(null, null,
                    "ScanBarcode", "closeBarcode", []);
            },
        },
        modeuleCopy: {
            descr: "bsl.infinitus.modeuleCopy 模块复制插件",
            /**
             * 模块复制
             * @param jFileName 格式{key,value} value == 1 强制覆盖 ， value == 0 已存在不覆盖
                        例如: {@"gess":1,@"xiao":0} => 复制gess模块 强制覆盖    xiao模块存在不复制
             */
            start: function (jFileName, sCallback, sError) {
                CordovaExec(sCallback, sError, "ModuleCopy", "start", [jFileName]);
            }
        },
        photo: {
            descr: "bsl.infinitus.ImageHandle 图片管理插件",
            /**
             json格式的参数，以下说明需要
             url: 类型为数组类型的字符串；支持本地路径、网络路径、base64
             urlType:整形，显示图片路径的类型：0：本地路径；1：网络地址；2：base64图片；3：本地路径或网络地址，通过http来前缀判断
             zoom:布尔类型，是否可以缩放
             position:整形，默认显示第几张图片。
             showPositionTip:布尔类型，是否显示图片总数、图片当前页码数的提示文字
             */
            preview: function (imageDic) {
                CordovaExec(null, null, "ImageHandle", "preview", [imageDic]);
            },
            /**
             * "maximumImagesCount":9,//int 类型， 最大能选择的图片数量
             * "defaultSelectList"："",//数组类型Json格式的字符串, 默认选中的图片，第一次传null,第二次如有默认图片，则带上上次sCallback回传的参数。
             * 例如:
             * 第一次：
             * bsl.infinitus.tools.choosePhotos:function(function(paraJson){ }, {"maximumImagesCount" : "2" , "defaultSelectList" : ""});
             * 第二次:回传paraJson 注：paraJson参数可删，但是不能更改内容，否则会导致无法匹配相应的图片。
             * bsl.infinitus.tools.choosePhotos:function(function(data){ }, {"maximumImagesCount" : "2" , "defaultSelectList" : JSON.stringify(paraJson)});
             * 
             * "scale":0.5,//可选 float 比例，0-1
             * "maxPixel": 5,//可选 float 比例, 1~MaxFloat， 图片的像素值，根据该值动态计算像素的缩放比例。
             * "maxSize":100,//可选 float 图片的大小KB,1~MaxFloat, 例如传值100KB，则将图片缩放至100KB左右。
             * 注: scale 和 （maxPixel，maxSize） 冲突，为二选一， 优选选择（maxPixel，maxSize），如果（maxPixel，maxSize）同时有值，将会在处理maxPixel之后处理maxSize。
             * "isThumbSmall":true,//可选 Boolean，true：生成缩略图小图，android为72*72；false:缩略图压缩一定的比例，宽和高的比例和原图一致 不生成缩略图
             * "isBase64Result":false,//可选 Boolean，图片是否返回路径，还是base64编码。
             * "isPersistence":false,//可选  Boolean 图片是否需要持久化。 若为true则将图片保存在Document和SD卡目录,否则保存到tmp
             * "isReturnsImage":false,//可选 boolean 是否只返回图片地址 默认false
             * "isOnOrder":true,//可选 是否显示选中的图片序号 默认true
             * "isReturnsOriginalImage":true // 可选 是否返回原图 默认true
             */
            chooseLocalPhotos: function (sCallback, jsonParam) {
                CordovaExec(sCallback, null,
                    "ImageHandle", "chooseLocalPhotos", [jsonParam]);
            },
            /**
             * 缩放图片
             * @param imgs  json数组：格式：["图片1的本地绝对路径","图片2的本地绝对路径"]
             *
             */
            lookPhoto: function (imgs) {
               CordovaExec(null, null,
                           "ImageHandle", "lookPhoto", [imgs]);
            },
            /**
             *  打开照相机
             *  @return String 图片地址
             */
            takePhoto: function (successCallback) {
               CordovaExec(successCallback, null,
                           "ImageHandle", "takePhoto", []);
            },
            /**
             *  打开照相机
             *  @param thumbScale float 缩略图比率
             *  @param isBase64Result Bool 是否返回Base64字符串
             *  @return String 图片地址 或者 图片的baser64字符串
             */
            takePhotoParam: function (thumbScale, isBase64Result, successCallback) {
               CordovaExec(successCallback, null,
                           "ImageHandle", "takePhoto", [thumbScale, isBase64Result]);
            },
           /**
            *  打开照相机,或相册，选择本地图片
            
            */
           showView:function(successCallback){
               CordovaExec(successCallback, null,
                           "ImageHandle", "showView",[]);
           }
        },
       /**
        * 通讯录对象
        */
        contacts: {
               /**
                * 选择通信录
                * @param sCallback String function callback(sPhoneNumber){}
                sPhoneNumber String 选择的手机号码
                */
               pickContact: function(successCallback) {
                    cordova.exec(successCallback, null,
                            "ContactsPlugin", "pickContact", []);
               },
               
               /**
                * 获取通讯录数据
                * @param successCallback 
                * @page 第几页 (不传则返回全部）
                * @numbers 每页返回多少条数据
                */
               getContacts: function(successCallback,page,numbers) {
                    cordova.exec(successCallback, null,
                            "ContactsPlugin", "getContacts", [page,numbers]);
               }
               
        },
        /**
         * 页面跳转对象
         */
        transfer: {
            gotoBusinessQuery: function (cubeid) { //
                console.log("该插件已停用，无替换方法。");
            },
            /**
             * 返回到上一个HTML页面或返回到上一个视图
             * @param bIsGoView boolean 为真时不调用浏览器返回直接返回到上一个视图 参数可选
             * @param sFun String 返回后调用上个页面的JS 参数可选
             * @param oParam Object 调用函数传的参数 参数可选
             */
            returnBack: function (bIsGoView, oParam, sFun) {
                CordovaExec(null, null,
                    "BSLTransfer", "returnBack", [bIsGoView, sFun, oParam]);
            },
            /**
             *  打开一个视图
             *  合并旧有的openPageWithTitle和openPage方法
             *
             *  @param command  json对象，
             *  {
             *   url：string 类型，HTML页面在线或本地地址
             *   sInitFun：string 类型，打开新页面调用页面的JS 参数可选
             *   oInitParam：object 类型，调用函数传的参数 参数可选
             *   sTitle：string 类型，页面的标题
             *   sFlag:Boolean 类型 打开新页面时是否删除中间webview true删除 false不删
             *   jNavInfo：Json类型，原生用到的参数{'rotation':1,'navigationBar':1,'returnView':1,'gotoneturl':true} ,跟菜单参数设置一致
             *  }
             */
            openWebPage: function (jsonStr) {
                CordovaExec(null, null,
                    "BSLTransfer", "openWebPage", [jsonStr]);
            },
            /**
             *  关闭视图
             */
            closePage: function (sUrl) {
                CordovaExec(null, null,
                    "BSLTransfer", "closePage", [sUrl]);
            },
            /**
             * 用户账号信息失效时，登出该账号
             */
            logoutByUserInvalid: function () {
                //该方法需要移至login
               console.log("该插件已变动，调用方式修改为bsl.infinitus.login.logoutByUserInvalid ");

            },
            /**
             * 返回到首页
             */
            goHome: function (menuCode) {
               CordovaExec(null, null,
                           "BSLTransfer", "goHome", [menuCode]);
            },
            /**
             * 登录接口
             * @param sCallback String function callback(bLogin){} bLogin 布尔类型 是否登录成功
             */
            login: function (successCallback) {
                console.log("login 插件已变动，请调用bsl.infinitus.login.showLoginView方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            /**
             * 跳转到支付页面
             * @param sPayUrl String 支付提交地址
             * @param paySecond int 支付失效时间
             * @param sCallback String function callback(jData){}
             jData JSON对象 支付结果；用户取消支付时对象为null
             */
            openPayPage: function (sPayUrl, paySecond, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTransfer", "openPayPage", [sPayUrl, paySecond]);
            },
            loadSplitWebViewRequest: function (sUrl, successCallback) {
                console.log("loadSplitWebViewRequest该插件已停用，无替换方法。 ");
            },
            openSplitView: function (isShouldOpen, successCallback) {
                console.log("openSplitView该插件已停用，无替换方法。 ");

            },
            reloadLeftRequest: function (sUrl, sFun, oParam, sShouldReload) {
                console.log("reloadLeftRequest该插件已停用，无替换方法。 ");
            },
           /**
             * 选择Tap
             *  @param json
             {
             "selectedIndex": 0,//int，表示Tabbar的索引，从0开始。
             "sFunction":"sfunction",//String ,打开指定Tab后向相应的WebView主动发出该函数。
             "sParam":"sParam" // String  为sfunction的参数值
             }
            */
            selectedTabItem: function (json) {
//                console.log("1.selectedTabItem插件缺失，如需要，请联系开发人员补充 ");
               CordovaExec(null, null,
                           "BSLTransfer", "selectedTabItem", [json]);

            },
            /**
             * 选择通信录
             * @param sCallback String function callback(sPhoneNumber){}
             sPhoneNumber String 选择的手机号码
             */
            pickContact: function (successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTransfer", "pickContact", []);
            }
        },
        /**
         * 通用接口方法对象
         */
        tools: {

            showDataPicker: function (sCallback, json) {
                    CordovaExec(sCallback, null,
                        "BSLTools", "showDataPicker", [json]);
                },
            /**
             * 保存持久化登录信息
             * @param responseHeader String 参数
             */
            saveTGCCookie: function (responseHeader) {
                console.log("saveTGCCookie 该插件目前已停用");
            },
            /**
             * 登陆后键值对
             * @param responseHeader string ["gwHomeSet","elnHomeSet"]参数，空则为所有；出参为字典或map
             */
            getUserInfo: function (funCallback, keys) {
                CordovaExec(funCallback, funCallback,
                    "BSLTools", "getUserInfo", [keys]);
            },
            /**
             * 登陆成功广播和APP激活广播
             * @param funCallback: function(result){}  //result为int，0为未登陆，1为登陆
             */
            addObserverForUserInfo: function (funCallback) {
                CordovaExec(funCallback, funCallback, "BSLTools", "addObserverForUserInfo", []);
            },
            addObserverForCloseWebView: function (funCallback) {
                console.log("addObserverForCloseWebView 该插件目前已停用");
            },
            /**
             * 点击导航栏广播
             * @param funCallback: function(url){}  当前webview的url
             */
            addObserverForNavigationBarClicked: function (funCallback) {
                CordovaExec(funCallback, funCallback, "BSLTools", "addObserverForNavigationBarClicked", []);
            },
            /**
             * 获取当前WebView的MenuCode
             * @param funCallback: function(MenuCode){}  当前webview的MenuCode
             */
            getCurrentMenuCode: function (funCallback) {
            //    console.log("1.getCurrentMenuCode插件缺失，如需要，请联系开发人员补充 ")
                CordovaExec(funCallback, null, "BSLTools", "getCurrentMenuCode", []);
            },
               /**
                * 监听是否退出到后台，或者从后台返回
                * @param funCallback: function(result){}  result int 0 程序从前台都后台 1 程序从后台到前台
                */
            enterBackground: function (funCallback) {
               CordovaExec(funCallback, null, "BSLTools", "enterBackground", []);
               },
            /**
             *  打开文件，
             *   使用场景：
             *   1.需要打开的本地文件，请传入本地文档的路径。目前暂时只支持第三那方打开的方式。
             *   2.需要打开远程文件，则会先搜索本地是否有缓存，根据isNotExist这个参数，当缓存不存在的时候，是否进行下载。
             *   3.远程文件会默认存到tmp目录。
             *   4.版本支持 2.7 and later。
             *
             *  jsonStr包含：
             *  @param isOther     是否必须使用第三方打开, 目前暂时只支持第三那方打开的方式。
             *  @param isNotExist  文件不存在是否提示用户是否下载
             *  @param downloadUrl 该文件的下载地址,
             *  @param localFile   本地的文档路径
             */
            openLocalFile: function (jsonStr) {
                console.log("1.openLocalFile插件缺失，如需要，请联系开发人员补充 ")
                CordovaExec(null, null,
                    "BSLTools", "openLocalFile", [jsonStr]);
            },

            preview: function (imageDic) {
                console.log("该插件已变动，调用方式修改为bsl.infinitus.photo.preview ");
            },
            /*
             url: 类型为数组类型的字符串；支持本地路径、网络路径、base64
             urlType:整形，显示图片路径的类型：0：本地路径；1：网络地址；2：base64图片；3：本地路径或网络地址，通过http来前缀判断
             zoom:布尔类型，是否可以缩放
             position:整形，默认显示第几张图片。
             showPositionTip:布尔类型，是否显示图片总数、图片当前页码数的提示文字
             */
            sendMessage: function (telNumber, text) {
                CordovaExec(null, null,
                    "BSLTools", "sendMessage", [telNumber, text]);
            },
            /**
             * 获取无限极接口统一公共参数
             * @return Array 接口公共参数
             */
            getCommonParam: function (successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "getCommonParam", []);
            },
            /**
             * 设置页面标题
             * @param sTitle String 标题
             */
            setTitle: function (sTitle) {
                CordovaExec(null, null,
                    "BSLTools", "setTitle", [sTitle]);
            },
            /**
             * 显示对话框
             * @param sTitle String 标题
             * @param sMsg String 提示内容
             * @param aBtnTitles Array 按钮数组如: ['确定','取消']
             * @param sCallback String 回调函数名 参数可选
             *      结构function callback(iIndex){} iIndex从0开始
             */
            showDialog: function (sTitle, sMsg, aBtnTitles, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "showDialog", [sTitle, sMsg, aBtnTitles]);
            },
            share2WX: function (title, msg, url, imgurl, musicurl, shareType, contentID, successCallback) {
                console.log("share2WX 插件已变动，请调用bsl.infinitus.share.shareContent方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            checkAppInstall: function (type, successCallback) {
                console.log("checkAppInstall 插件已变动，请调用bsl.infinitus.share.checkAppInstall方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            shareContent: function (shareList, title, msg, url, imgurl, musicurl, shareType, contentID, successCallback) {
                console.log("shareContent 插件已变动，请调用bsl.infinitus.share.shareContent方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            //根据回调名称关闭对话框
            closeDialog: function () {
                CordovaExec(null, null,
                    "BSLTools", "closeDialog", [""]);
            },
               addObserverForSelectedTab:function(successCallback){
               CordovaExec(successCallback, null,
                           "BSLTools", "addObserverForSelectedTab", []);
               },
            /**
             * 显示提示
             * @param sMsg String 提示内容
             * @param iDuration int 显示时长，默认为2秒 参数可选
             */
            showToast: function (sMsg, iDuration) {
                CordovaExec(null, null,
                    "BSLTools", "showToast", [sMsg, iDuration]);
            },
            /**
             * 调整提示y坐标
             * @param yCoord float 调整值 参数可选
             */
            adjustToast: function (yCoord) {
                console.log("该插件已停用，无替换方法。");
            },
            /**
             * 显示加载中进度框
             * @param sMsg String 进度提示内容 参数可选
             */
            showLoading: function (sMsg) {
                CordovaExec(null, null,
                    "BSLTools", "showLoading", [sMsg]);
            },
            /**
             * 关闭加载中进度框
             */
            dismissLoading: function () {
                CordovaExec(null, null,
                    "BSLTools", "dismissLoading", []);
            },
            /**
             * 设置返回动作，默认直接返回；设置动作后由开发者控制返回操作
             * @param sFunName String 点击返回键或返回按钮时调用的JS 参数可选
             */
            setBackAction: function (sFunName) {
                console.log("iOS 无此插件功能 ");
            },
            /**
             * 缩放图片
             * @param imgs  json数组：格式：["图片1的本地绝对路径","图片2的本地绝对路径"]
             *
             */
            lookPhoto: function (imgs) {
                console.log("chooseSysPhoto 插件已变动，请用bsl.infinitus.photo.preview方法,具体请查看iwiki或者bslinfinitus.js文件");
//                CordovaExec(null, null,
//                    "ImageHandle", "lookPhoto", [imgs]);
            },
            /**
             *  选取系统相册图片，可多选
             *  callback内容：图片路径的数组
             */
            chooseSysPhoto: function (successCallback) {
                console.log("chooseSysPhoto 插件已变动，bsl.infinitus.photo.chooseLocalPhotos方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            chooseMorePhotoToH5: function (maxOption, list, successCallback, isThumbSmall) {
                console.log("chooseMorePhotoToH5 插件已变动，bsl.infinitus.photo.chooseLocalPhotos方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            choosePhotos: function (maximumImagesCount, defaultSelectList, scale, isThumbSmall, isBase64Result, sCallback) {
                console.log("3.choosePhotos 插件已变动，请调用bsl.infinitus.photo.chooseLocalPhotos方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            chooseLocalPhotos: function (sCallback, jsonParam) {
                console.log("3.chooseLocalPhotos 插件已变动，请调用bsl.infinitus.photo.chooseLocalPhotos方法,具体请查看iwiki或者bslinfinitus.js文件");
                
            },
            /**
             *  在导航栏右上角增加一个按钮
             *
             *  @param text     导航栏的问题
             *  @param callback 回调方法
             */
            addRightBtn: function (text, successCallback) {
                //console.log("1.addRightBtn插件缺失，如需要，请联系开发人员补充 ")
                CordovaExec(successCallback, null,
                    "BSLTools", "addRightBtn", [text]);
            },
            openSettingsURLString: function () {
                CordovaExec(null, null,
                    "BSLTools", "openSettingsURLString", []);
            },
            /**
             *  选取系统相册，对图片进行缩放，翻转等操作
             *  callback内容：图片路径数组
             */
            chooseCropPhotoToH5: function (successCallback) {
                console.log("chooseCropPhotoToH5 插件已变动，请调用bsl.infinitus.photo.showView方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            /**takePhoto
             *  H5调用原生存储页面和高度
             *  参数：ScrollID
             *  参数：ScrollHeight
             */
            postScrollHeightToTop: function (scrollId, height) {
                CordovaExec(null, null,
                    "BSLTools", "postScrollHeightToTop", [scrollId, height]);
            },
            scanBarcode: function (isContinue, successCallback) {
                console.log("scanBarcode 插件已变动，请调用bsl.infinitus.QRCode.scanBarcode方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            sendScanningResults: function (msg) {
                console.log("sendScanningResults 插件已变动，请调用bsl.infinitus.QRCode.sendScanningResults方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            closeBarcode: function () {
                console.log("closeBarcode 插件已变动，请调用bsl.infinitus.QRCode.closeBarcode方法,具体请查看iwiki或者bslinfinitus.js文件");
            },

            /**
             * 获取客户端请求host：
             * @return json对象：gbss，uim，emcs，root（属性的使用请参考接口文档说明，自带https://前缀）
             */
            getHost: function (successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "getHost", []);
            },
            /**
             * 客户端版本检测
             * @param sCallback String 回调函数名 参数可选 结构function callback(hasUpdate){} hasUpdate boolean类型
             */
            checkVersion: function (successCallback) {
                CordovaExec(successCallback, null,
                    "Update", "showView", []);
            },
            /**
             * 打电话
             * @param sPhoneNumber String 电话号码
             */
            makePhoneCall: function (sPhoneNumber) {
                CordovaExec(null, null,
                    "BSLTools", "makePhoneCall", [sPhoneNumber]);
            },
            /**
             * 安全退出
             *@isHiddenAlert BOOL 是否隐藏温馨提示框
             */
            logout: function (isHiddenAlert) {
                console.log("logout 插件已变动，请调用bsl.infinitus.login.logout方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            /**
             * 日期选择器
             * @param successCallback String 回调函数
             *      result String 选择的日期，格式：YYYY-MM-DD HH:mm:ss
             *      function callback(result);
             * @param iDateType int 选择器类型：0 Date 1 Time 2 DateAndTime
             * @param sSelected String 默认选中的日期，格式：Y-M-D H:m:s
             */
            showDatePicker: function (iDateType, sSelected, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "showDatePicker", [iDateType, sSelected]);
            },

            confirmBusinessPwd: function (successCallback) {
                console.log("confirmBusinessPwd 插件已变动，请调用bsl.infinitus.login.confirmBusinessPwd方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            /**
             * ecb加密
             * @param sOldText String 要加密的内容
             * @return String 加密后内容
             */
            ecbEncrypt: function (sOldText, successCallback) {
                 CordovaExec(successCallback, null,
                    "BSLTools", "ecbEncrypt", [sOldText]);
            },
               /**
                * 开启或关闭当前WebView的返回上一级的手势
                * @param isEnabled Boolean 要加密的内容
                */
               setInteractivePopGestureRecognizer: function (isEnabled) {
               CordovaExec(null, null,
                           "BSLTools", "setInteractivePopGestureRecognizer", [isEnabled]);
               },

            /**
             * 主动旋转屏幕
             * @param rotation 0竖屏（默认），1横屏，2重力感应控制
             */
            rotateScreen: function (rotation) {
                console.log("1.rotateScreen插件缺失，如需要，请联系开发人员补充 ")
                CordovaExec(null, null,
                    "BSLTools", "rotateScreen", [rotation]);
            },
            /**
             * 显示指引页
             * @param sImgName String 图片名不包含图片后缀
             * @param sModuleIdentifier String 模块标识
             * @param callback 图片点击后回调
             */
            addTipsToController: function (sImgName, sModuleIdentifier, callback) {
                console.log("1.addTipsToController插件缺失，如需要，请联系开发人员补充 ")
                CordovaExec(callback, null,
                    "BSLTools", "addTipsToController", [sImgName, sModuleIdentifier]);
            },
            /**
             * 获取主题定义的颜色值
             * @param sColorName String configure.xml文件定义的颜色值key名称
             * @return String 16进制的颜色值 如：#000000
             */
            themeColor: function (sColorName, successCallback) {
               CordovaExec(successCallback, null,
                           "BSLTools", "themeColor", [sColorName]);
            },
            /**
             text	字符串	支付订单中显示的文字
             price	字符串	支付价格，单位是分；"100"代表1元，"1"代表1分钱
             order	字符串	我们服务器上生成的订单号，必须是唯一的，否则只能第一次支付成功
             callback	方法变量	支付回调方法，该方法返回一个整形数据：
             2：支付成功
             1：支付失败
             0：支付取消
             */
            wechatPay: function (type, jsonStr, successCallback) {
                console.log("1.wechatPay 插件缺失，如需要，请联系开发人员补充")
                CordovaExec(successCallback, null,
                    "BSLTools", "wechatPay", [type, jsonStr]);
            },
            /**
             * 调用ipad左边分屏webView页面的js函数
             * @param sFunNames String js函数名
             */
            callPadLeftJS: function (successCallback) {
                console.log("callPadLeftJS插件目前已废弃");
            },
            takePhoto: function (successCallback) {
               console.log("takePhoto 插件已变动，请调用bsl.infinitus.photo.takePhoto方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            takePhotoParam: function (thumbScale, isBase64Result, successCallback) {
               console.log("takePhotoParam 插件已变动，请调用bsl.infinitus.photo.takePhotoParam方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            getLocation: function (successCallback) {
                console.log("1.getLocation 插件缺失，如需要，请联系开发人员补充")
                CordovaExec(successCallback,
                    null,
                    "BSLTools", "getLocation", []);
            },
            uploadFileByByte: function (filePath, uploadPath, tokenUrl, successCallback, paramJson) {
                console.log("uploadFileByByte 插件已变动，请调用bsl.infinitus.network.uploadFileByByte方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            uploadPhoto: function (photoFile, photoType, successCallback) {
                console.log("uploadPhoto 插件已变动，请调用bsl.infinitus.network.uploadPhoto方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            uploadData: function (uploadType, ParamJson, uploadUrl, successCallback) {
                console.log("uploadData 插件已变动，请调用bsl.infinitus.network.uploadData方法,具体请查看iwiki或者bslinfinitus.js文件");
            },
            openAppAndCopyMsg: function (Msg, openType) {
                CordovaExec(null, null,
                    "BSLTools", "openAppAndCopyMsg", [Msg, openType]);
            },
            /**
             *  发起手机系统服务，震动并播放声音
             *
             *  @param json {
             *  @option //标识当前以下参数为可选
             *  "vibrate ": Boolean 是否开启震动,
             *  "vibrateHz": int (建议不要超过10)震动频率,只对Android生效，iOS默认1~2秒，高频率。
             *  "sound": Boolean 是否播放声音,
             *  "soundPath": 声音文件的相对路径, 模块名称/xxx.wav，注意Android和iOS的声音格式不一致。
             *  }
             *
             *  @return
             */
            audioServicesPlay: function (successCallback, json) {
                console.log("1.audioServicesPlay 插件缺失，如需要，请联系开发人员补充")
                CordovaExec(successCallback, null,
                    "BSLTools", "audioServicesPlay", [json]);
           },
           /**
            * 保存网页临时缓存
            * @param key 要保存对象的Key
            * @param value 要保存对象的值
            */
           saveTempCache: function (key, value) {
               console.log("saveTempCache插件，保存临时key value值");
               CordovaExec(null, null,
                           "BSLTools", "saveTempCache", [key, value]);
           },
           /**
            * 读取网页临时缓存
            * @param key 要读取对象的Key
            * @param successCallback 成功回调
            */
           readTempCache: function (key, successCallback) {
               console.log("readTempCache插件，读取临时key值");
               CordovaExec(successCallback, null,
                           "BSLTools", "readTempCache", [key]);
           },
           /**
            * 清除网页临时缓存
            */
           cleanTempCache: function () {
               console.log("cleanTempCache插件，清除网页临时缓存");
               CordovaExec(null, null,
                           "BSLTools", "cleanTempCache", []);
           },
           /**
            * 读取用户设置信息
            * @param key 要读取对象的Key
            * @param successCallback 成功回调
            */
           readMemory: function (key, successCallback) {
               console.log("readMemory插件，读取用户设置信息");
               CordovaExec(successCallback, null,
                           "BSLTools", "readMemory", [key]);
           },
            /**
             * 新的md5签名，首尾放secret。
             *
             * @param params 传给服务器的参数
             * @param secret 分配给您的APP_SECRET
             */
               md5Signature: function (successCallback, params, secret) {
                    console.log("md5Signature插件，md5签名");
                    CordovaExec(successCallback, null,
                           "BSLTools", "md5Signature", [params, secret]);
               },
               /**
                导航栏管理
                    @param json
                    {
                        title : "" //String 导航栏的标题，为nil，则导航栏设为nil，不传则默认
                        hide : true // Boolean  true 将导航栏隐藏， false 显示导航栏。
                
                        rightItems : [{title: '' , hide : true/false, tag : '',delete: false/true}]
                            rightItems  json数组 （扩展类，目前数组对象只支持1个，添加导航栏右按钮，默认的首页按钮不允许被设置。）
                            title  String 设置该Button的title。
                            hide  Boolean 是否显示该Button。
                            tag  Object  Callback的返回标识。
                            delete   Boolean  默认false，是否删除该按钮，根据tag删除。
                
                
                        leftItem : {title '', hide: true/false, tag: '',delete: false/true}
                            leftItem  json 设置导航栏的返回按钮。
                            title  String 设置该Button的title。
                            hide  Boolean 是否显示该Button。
                            tag  Object  Callback的返回标识。
                            delete   Boolean  默认false，是否删除该按钮，如果是返回，则删除Block，不在回调，重置会默认的返回按钮。
                    }

                    @param barClickCallback 点击导航栏的按钮时回调
                */
               handlerNavigationBarItem: function (barClickCallback, json) {
//               console.log("readMemory插件，读取用户设置信息");
                   CordovaExec(barClickCallback, null,
                               "BSLTools", "handlerNavigationBarItem", [json]);
               }
        },
        /**
         * 用户设置信息对象
         */
        userDefault: {
            /**
             * 读取用户设置信息
             * @param sKey String 查询的key名称
             * @return Object 保存的内容
             */
            readValue: function (sKey, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "readUserDefault", [sKey]);
            },
            /**
             * 保存信息到用户设置
             * @param sKey String key名称
             * @param oValue Object 要保存的内容
             * @return boolean 结果
             */
            saveValue: function (sKey, oValue) {
                CordovaExec(null, null,
                    "BSLTools", "saveUserDefault", [sKey, oValue]);
            }
        },
        /**
         * 内存缓存对象
         */
        memory: {
            /**
             * 读取用户设置信息
             * @param sKey String 查询的key名称
             * @return Object 保存的内容
             */
            readValue: function (sKey, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLTools", "readMemory", [sKey]);
            },
            /**
             * 保存信息到用户设置
             * @param sKey String key名称
             * @param oValue Object 要保存的内容
             * @return boolean 结果
             */
            saveValue: function (sKey, oValue) {
                CordovaExec(null, null,
                    "BSLTools", "saveMemory", [sKey, oValue]);
            }
        },
        /**
         * 数据库对象
         */
        database: {
            className: "Database",
            /**
             * 查询数据库内容
             * @param sSql String 查询语句
             * @param aParams Array 使用?占位符时的sql语句参数 参数可选
             * @return Array 查询结果
             */
            querySql: function (sSql, aParams, successCallback) {
                CordovaExec(successCallback, null,
                    "Sqlite", "querySql", [sSql, aParams]);
            },
            /**
             * 增 删 改数据库内容
             * @param sSql String 执行语句
             * @param aParams Array 使用?占位符时的sql语句参数 参数可选
             * @return boolean 执行结果
             */
            execSql: function (sSql, aParams, successCallback) {
                CordovaExec(successCallback, null,
                    "Sqlite", "executeSql", [sSql, aParams]);
            }
        },
        /**
         * 缓存处理对象
         */
        cache: {
            //设置缓存
            setH5Cache: function (keys, value) {
                CordovaExec(null, null,
                    "BSLNHWebCache", "setH5Cache", [keys, value]);
            },
            getH5Cache: function (keys, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLNHWebCache", "getH5Cache", [keys]);
            },
            clearH5Cache: function () {
                CordovaExec(null, null,
                    "BSLNHWebCache", "clearH5Cache", []);
            },
            clean: function () {
                CordovaExec(null, null,
                    "BSLNHWebCache", "clean", []);
            },
            /**
             * 下载图片并缓存到缓存器中
             * @param sImgUrl String 图片地址
             * @param sUserInfo String 需要保存的内容
             * @param sCallback(imgUrl,filePath,sUserInfo);
             */
            cacheImageWithUrl: function (sImgUrl, sUserInfo, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLNHWebCache", "cacheImageWithUrl", [sImgUrl, sUserInfo]);
            }
        },
        /**
         * 网络请求对象
         */
        network: {

            /**
             *  检测网络状态
             *
             *  @param successCallback
             */
            checkNetworkChanging: function (successCallback) {
                CordovaExec(successCallback, function (error) {}, "BSLNetwork", "checkNetworkChanging", []);
            },

            /**
             * get方式请求http接口内容
             * @param sUrl String 请求地址
             * @param jParam JSON 请求参数
             * @param sCallback String 回调函数名
             *      code int 状态码 无网络:-101 地址不合法:-102；其它参照http状态码定义
             *      result 成功时为服务器返回的数据，其它为错误内容
             *      结构function callback(result,code){}
             */
            get: function (sUrl, jParam, successCallback) {
                CordovaExec(successCallback, function (error) {},
                    "BSLNetwork", "get", [sUrl, jParam]);
            },
            /**
             * post方式请求http接口内容
             * @param sUrl String 请求地址
             * @param jParam JSON 请求参数
             * @param sCallback String 回调函数名
             *      code int 状态码 无网络:-101 地址不合法:-102 用户未授权访问通讯录:-304；其它参照http状态码定义
             *      result 成功时为服务器返回的数据，其它为错误内容
             *      结构function callback(result,code){}
             */
            post: function (sUrl, jParam, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLNetwork", "post", [sUrl, jParam]);
            },
            /**
             * get方式请求http接口内容
             * @param sUrl String 请求地址
             * @param jParam JSON 请求参数
             * @param sCallback
             *      String 回调函数名 code int 状态码 无网络:-101 地址不合法:-102；其它参照http状态码定义
             *      result 成功时为服务器返回的数据，其它为错误内容 结构function callback(result,code){}
             * @param bIsCache boolean 参数可选 是否需要缓存
             */
            getForCDN: function (sUrl, jParam, isCND, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLNetwork", "get", [sUrl, jParam]);
            },
            /**
             * post方式请求http接口内容(CDN)
             * @param sUrl String 请求地址
             * @param jParam JSON 请求参数
             * @param sCallback String 回调函数名
             *      code int 状态码 无网络:-101 地址不合法:-102；其它参照http状态码定义
             *      result 成功时为服务器返回的数据，其它为错误内容 结构function callback(code,result){}
             */
            postForCDN: function (sUrl, jParam, isCDN, successCallback) {
                CordovaExec(successCallback, null,
                    "BSLNetwork", "post", [sUrl, jParam]);
            },
            /**
             * 返回当前网络状态
             * @return int 0没有网络，1gprs网络，2wifi网络
             */
            checkNetState: function (successCallback) {
                CordovaExec(successCallback, function (error) {}, "BSLNetwork", "checkNetState", []);
            },
            /**
             * 上传通讯录到服务器
             * command.arguments = []
             * @param sCallback String 回调函数名
             *      code int 状态码 无网络:-101 地址不合法:-102；其它参照http状态码定义
             *      result 成功时为服务器返回的数据，其它为错误内容
             *      结构function callback(code,result){}
             */
            uploadContacts: function (successCallback) {
                console.log("1.uploadContacts 插件缺失，如需要，请联系开发人员补充")
                CordovaExec(successCallback, null,
                    "BSLNetwork", "uploadContacts", []);
            },
            showLastNetworkErrorInfo: function () {
                    console.log("该插件已停用，无替换方法。");
                },
                /**
                 * filePath	Array	Json数组字符串，也就是要传的文件的绝对路径的数组
                 * uploadPath	Array	对应的filePath的key值，使用这个key值到七牛云获取上传的图片。如：http://7xiupk.com2.z0.glb.qiniucdn.com/abc11445494136738?imageMogr2/auto-orient/gravity/Center/crop/800x800
                 * tokenUrl	String	获取七牛的token接口
                 * sCallBack	Function	
                  1.当isMultipleCallBack = false,上传完成回调函数，无参数
                  2. 当isMultipleCallBack == true时
                  {
                  "key": String 该张图片的Key
                  "result" Boolean 该张图片是否上传成功或者失败
                  }
                 * paramJson JSON	
                  {
                  "isShowToast": Boolean 是否显示进度Toast,默认为YES
                  "isMultipleCallBack" Boolean 是否每张图片上传成功就回调该上传成功的信息
                 }
                 */
            uploadFileByByte: function (filePath, uploadPath, tokenUrl, successCallback, paramJson) {
                CordovaExec(successCallback, null,
                    "Upload", "uploadFileByByte", [filePath, uploadPath, tokenUrl, paramJson]);
            },
            /**
             * photoFile 图片本地路径
             * photoType 相应的type 0 或 1
             * sCallBack 回调函数，有一个数组格式的字符串
             */
            uploadPhoto: function (photoFile, photoType, successCallback) {
                CordovaExec(successCallback, null,
                    "Upload", "uploadPhoto", [photoFile, photoType]);
            },
            /**
             *  上传文件
             *  详情查看iwiki文档
             *  https://iwiki.infinitus.com.cn/pages/viewpage.action?pageId=16886923#id-原生提供给HTML5接口（Cordova）-上传文件
             */
            uploadData: function (uploadType, ParamJson, uploadUrl, successCallback) {
                CordovaExec(successCallback, null,
                    "Upload", "uploadData", [uploadType, ParamJson, uploadUrl]);
            },
        },
        /**
         * 百度统计
         */
        baiduTools: {
            /**
             * 记录某页面的跳入
             * @param name String 页面名称
             */
            recordPageStart: function (strName) {
                //baiduTools.recordPageStart(strName);
                CordovaExec(function (data) {
                        //successCallback(data);
                    }, function (error) {
                        //failCallback(error);
                    },
                    "MTJBaidu", "recordPageStart", [strName]);
            },
            /**
             * 记录某页面的跳出
             * @param name String 页面名称
             */
            recordPageEnd: function (strName) {
                //baiduTools.recordPageEnd(strName);
                CordovaExec(function (data) {
                        //successCallback(data);
                    }, function (error) {
                        //failCallback(error);
                    },
                    "MTJBaidu", "recordPageEnd", [strName]);
            },
            /**
             * 记录一次事件点击
             * @param eventId String 为module_name
             * @param eventLabel String 为dealerNo
             */
            recordEventNumber: function (strModuleName, dealerNo) {
                //baiduTools.recordEventNumber(strModuleName);
                CordovaExec(function (data) {
                        //successCallback(data);
                    }, function (error) {
                        //failCallback(error);
                    },
                    "MTJBaidu", "recordEventNumber", [strModuleName, dealerNo]);
            },
            /**
             * 记录一次事件开始
             * @param eventId String 为module_name
             * @param eventLabel String 为dealerNo
             */
            recordEventStart: function (strEventId, dealerNo) {
                //baiduTools.recordEventStart(strEventId);
                CordovaExec(function (data) {
                        //successCallback(data);
                    }, function (error) {
                        //failCallback(error);
                    },
                    "MTJBaidu", "recordEventStart", [strEventId, dealerNo]);
            },
            /**
             * 记录一次事件结束
             * @param eventId String 为module_name
             * @param eventLabel String 为dealerNo
             */
            recordEventEnd: function (strEventId, dealerNo) {
                //baiduTools.recordEventEnd(strEventId);
                CordovaExec(function (data) {
                        //successCallback(data);
                    }, function (error) {
                        //failCallback(error);
                    },
                    "MTJBaidu", "recordEventEnd", [strEventId, dealerNo]);
            }
        },
        /**
         *   本地通知
         */
        lcnotifiction: {
            /**
             BSLUserNotification
             */
            addNotification: function (Param, successCallback, errorCallback) {
                CordovaExec(successCallback, errorCallback,
                    "LocalNotification", "addNotification", [Param]);
            },
            removeAllNotification: function () {
                CordovaExec(function () {}, function () {},
                    "LocalNotification", "removeAllNotification", []);
            },
            removeNotification: function (Param, successCallback, errorCallback) {
                CordovaExec(successCallback, errorCallback,
                    "LocalNotification", "removeNotification", [Param]);
            },
            getNotification: function (successCallback, errorCallback) {
                CordovaExec(successCallback, errorCallback,
                    "LocalNotification", "getNotification", []);
            },
            getNavigationStatus: function (successCallback) {
                CordovaExec(successCallback, function (error) {},
                    "LocalNotification", "getNotificationStatus", []);
            },
        },
        cat: {

            analytics: function (json) {
                CordovaExec(null, null,
                    "BSLCatStatistical", "analytics", [json]);
            },
            crashed: function (json) {
                CordovaExec(null, null,
                    "BSLCatStatistical", "crashed", [json]);
            },
            monitor: function (monitorDetail) {
                CordovaExec(null, null, "BSLCatStatistical", "monitor", [monitorDetail]);
            },
            newAnalytics:function(json){
               CordovaExec(null, null,
                           "BSLCatStatistical", "newAnalytics", [json]);
               
            },
               hashChanged:function(json){
               CordovaExec(null, null,
                           "BSLCatStatistical", "hashChanged", [json]]);
               }
            
        },
        map: {
            descr: "bsl.infinitus.map 百度地图插件",
            /***
             * 地图标记
             * @Param aParam Array  [{lat:double 经度,long:double 纬度 ,name:NString 标题 ,content:NSString 内容,tel:String 电话号码}]
                @Param isShowLocation Bool 是否显示定位 可选参数   默认 false
                @Param selectIndex int  默认显示第几个专卖店
             *
             */
            showMapPoint: function(aParam,isShowLocation,selectIndex,successCallback){
               CordovaExec(successCallback, null,
                           "BaiduMap", "showMapPoint", [aParam,isShowLocation,selectIndex]);
            },
            /**
             * 获取物理地址信息
             * @param lat double 经度
             * @param longitude double 纬度
             */
            getDetailedAddress: function(lat,longitude,successCallback,errorCallback){
                CordovaExec(successCallback, errorCallback,
                           "BaiduMap", "getDetailedAddress", [lat,longitude]);
            },
            /**
             * 物理地址转坐标
             * @param city    string 城市
             * @param address string 详细地址
             */
            getCoordinates: function(city,address,successCallback,errorCallback){
                CordovaExec(successCallback, errorCallback,
                           "BaiduMap", "getCoordinates", [city,address]);
            },
            /**
             * 获取定位位置
             */
            getLocation: function(successCallback,errorCallback){
                CordovaExec(successCallback, errorCallback,
                           "BaiduMap", "getLocation", []);
            },
            /**
             * 一键导航
             * @param sName String 目的地名称
             * @param dLat  double 经度
             * @param dLong double 纬度
             */
            navigation: function(sName,dLat,dLong){
               CordovaExec(null, null,
                           "BaiduMap", "navigation", [sName,dLat,dLong]);
            }
        }
    }
    module.exports = ift_new;
})
