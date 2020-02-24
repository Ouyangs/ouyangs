/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","40ec4aa1169e5b341e9187b42bc83fc9"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2504fd97cbdf4160f8e2f6ec265943fc"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","0bb74658a85b464f50249405c4e851af"],["/PGP/index.html","2416dfbd9c4f511c725681ddbf0c3ecf"],["/about/index.html","7e37f141598a740a3dac1f00e19a235c"],["/applescript-jiao-ben-liang-ge-ban/index.html","73ac0eac615b8f0ca4a8d5b1cc92abe5"],["/archives/2014/07/index.html","c31df71a12546a90864a2333c5feed3d"],["/archives/2014/08/index.html","22fbaf92cba3fb87d950b8db616b6651"],["/archives/2014/09/index.html","d1e5665837290ed0ba2cb55d217e048c"],["/archives/2014/10/index.html","e7d4bc49ee0ef2bb49e0c6c22f60fb3c"],["/archives/2014/index.html","8fc21f4673d35f5a29800a569827eedb"],["/archives/2014/page/2/index.html","d6265b0d226c2785159a1557ae7b5929"],["/archives/2015/01/index.html","2be098f480b4594d5abc5e8ef71687f7"],["/archives/2015/07/index.html","9f563e49fe9a3d61c4f8cf199a379ec6"],["/archives/2015/10/index.html","7052835c9865c705b371e095528a94ad"],["/archives/2015/12/index.html","0cb0308d0e38c03862b8c41aa5c52953"],["/archives/2015/index.html","16f162c7fd29526330a34a399b61d7a2"],["/archives/2016/04/index.html","470e5e8042559f2c2228169e24cec275"],["/archives/2016/05/index.html","712e98e3c853098fae7bc72ab3eca5d1"],["/archives/2016/index.html","e668780a8c1c3977911d724046010caa"],["/archives/2017/01/index.html","f8df218c3c805e0f59d0e969949ce852"],["/archives/2017/02/index.html","3883e765d120af58327de10fe88346bf"],["/archives/2017/03/index.html","fc6958fe974f1a5bf8535edbb733370a"],["/archives/2017/05/index.html","d3e38440d9796d493741c32f50799708"],["/archives/2017/07/index.html","f68a816e0cb79018a3bcbb7410bc537d"],["/archives/2017/08/index.html","420b4cfce90f80c784eecb94894b050e"],["/archives/2017/10/index.html","05ec7526d55d8be38021cd1bb5f722ee"],["/archives/2017/index.html","859ed624a5beab268f75b1f9c35c03fa"],["/archives/2017/page/2/index.html","034f9cd7339b6f9a5df750b30f977fc9"],["/archives/2018/01/index.html","38e0f1d3e5301738ceb81694b652e838"],["/archives/2018/04/index.html","392ce860b6b500b3671335792f3a7636"],["/archives/2018/05/index.html","66ed404218904ba5c9a7583c343aaaff"],["/archives/2018/06/index.html","7d98373f75eb7821384053a48ccc87af"],["/archives/2018/07/index.html","40369d3d0749c2793a39638e8554d8eb"],["/archives/2018/08/index.html","98b8bc522392cc6320a006d623696dec"],["/archives/2018/09/index.html","055289a43dc491855190cb93f0115960"],["/archives/2018/10/index.html","9a8722858853cfee1459c14bfa1198f4"],["/archives/2018/11/index.html","9f9b21733bf3fb610e0b16a040824468"],["/archives/2018/12/index.html","41033caa8e05a6b2e74749dfbad4ea56"],["/archives/2018/index.html","f1d2e8ed5eb4f83e6b8bbe57e3cfdc83"],["/archives/2018/page/2/index.html","cbedfba252a5b28910c684c07505d190"],["/archives/2018/page/3/index.html","ab9697700d03b98a5da494337a87e73a"],["/archives/2019/03/index.html","be11845197faccae51e94bcb469fed62"],["/archives/2019/04/index.html","1b48963979e8d7f287c570e3970e8461"],["/archives/2019/05/index.html","a2c5829f974c6c8cb2a442baf969b9b8"],["/archives/2019/index.html","8f6b503f8311b0cb7499bb0fce8ceb5a"],["/archives/2020/02/index.html","5b4d69d576af844485387794d9a4d9b3"],["/archives/2020/index.html","e1f6ff69117e18f496e8dd7c23a29f4c"],["/archives/index.html","0dfe121d57595e7c8175f3fadba1da90"],["/archives/page/2/index.html","d00e0b4349803eda746333106b8ee4b3"],["/archives/page/3/index.html","207636df230fc7df50c79644a605b2f3"],["/archives/page/4/index.html","b3862adb27a39f753d2290673f7ef9e9"],["/archives/page/5/index.html","e73fc065e3ef24503a5279ee94f8d847"],["/archives/page/6/index.html","73b84a14074886969ec630c8ff72a21b"],["/archives/page/7/index.html","63cdea9b3e7e9698c4008dcbf7233ca8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","9acedaed65a7a427fa9a30dc15331622"],["/bao-guan-qin-zhan/index.html","392b4e8d82d38df5979a4230d49beea4"],["/bao-li-yu-qu-cai-qiang-jie/index.html","db4d9cbbfb4549f281d110a1b43fb2bb"],["/bei-dai-li-ren-sang/index.html","7c4e5cfc6fc3e7ceaf7c82393dbf1130"],["/books/index.html","86201047bd3928da8ff1db4f734c5d84"],["/categories/Blog/index.html","0e5c5ad35b9e264fd89669b6f40fdb28"],["/categories/Blog/page/2/index.html","ea2ea75fa06a478ba48b4a8f016039b2"],["/categories/Blog/page/3/index.html","80f9c4965ad221f2bcf88136d589919a"],["/categories/Blog/page/4/index.html","a498a47dcda467ec02af2fa0bf0916c6"],["/categories/index.html","816bf72f6aaaf6c76358d8ce0e777eee"],["/categories/法学/index.html","4d7732591615f952dca6bb34980a1a83"],["/categories/法学/page/2/index.html","07bd3b92b1b944ad4d8382ebafee28d7"],["/categories/法学/page/3/index.html","369d3ac9962a004857bf5e96fb36f070"],["/categories/精彩分享/index.html","55b902f2970377fc32ece5916fa0f3fc"],["/cclisence/index.html","cd2cd79eb2f9403a6555fb4163962267"],["/cetrain-issues-iv-for-company-law/index.html","c02322507159fad0e06d4fcb7ca47fcf"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","f987611d5a651cdeccd2a7530081f1fc"],["/cs-hubei-2017/index.html","bdff13d89f545d9660b30bf378312f74"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","7e966c8d29c8bb264bf9217491c14cb3"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","44ea121b5e9436783660229389644374"],["/due-pin-workflow/index.html","f4fd362b636310f8a3e0792841163aea"],["/duo-ci-zha-pian-shu-e/index.html","3f7eea6a2b6c2c53a4683ad1f777476f"],["/expert/index.html","3542501045f5bba07572d01730e9877a"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","93e64bf8fe0de070f320475e1196df2e"],["/google3756ddc34336b7b9.html","57c8d060bbf36b4d8a6df8cea2b897d3"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","eb46a231f1a67582185b81cd95ef2de6"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","6cff51544c1b4a83825d6c65e2d05b8e"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","00226cc4ddf8c56f5b96dcc831528faa"],["/hustlaw13/index.html","411b01034bf564c779a500a92cb6dcd7"],["/hustlaw14/index.html","69d90c17477b6ad36e67d82edce0a1f4"],["/hustlaw15/index.html","14d7d0c62cea8a4d83a05a9ea9029ee1"],["/hustlaw16/index.html","14f5ae33700a329c8b926c48b106a013"],["/icloud-terms/index.html","5479eecca37d7add9f9fecb38b13a8d6"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/index.html","a63356137321acc3780f0319eedd6f81"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","20d9629345d35778f35f3e1fc924a707"],["/jdsnk/index.html","30199109f551203a7c8857f4e9ffe614"],["/jian-qiao-fen-xi/index.html","17447c1fec41f4073d09f5077c3c34ca"],["/jianguoyun-keepass/index.html","182a1a9f9a7e655092838cac0a9836c5"],["/jin-qian-bu-neng-mai-shi-me/index.html","77a516dd625ddcc8dbec2696c2b5e2d4"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","bc9e223eab568cf23f303df4556e312f"],["/latex-times-new-roman/index.html","df488d9429f5d2fca264b8b94078b18f"],["/latex-yu-lun-wen-pai-ban/index.html","09b4622499e323a50d987b1f8b86bfb1"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","e90764c9ff2120c96813dcfe8cda2a38"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","f13862f319d384b099a7f125ce032776"],["/luan-dan-20181116/index.html","867ab0fb84cb5f9638f811235ed2a378"],["/luan-dan-20200217/index.html","c24b6d7c4787e1ac837cda18f5968dc8"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","b2b69254bd704b7647fd9a31ab1ed7a0"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","05cb59b2ae0fb2f699807febc7a15e09"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","5f87d74dfc69ef03dfe20075faee6ffd"],["/movies/index.html","21c810691646bb0fcf811d56403b0d54"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","17d4e4e4931fce56beaa0892a38ef99f"],["/opoo-zhe-teng/index.html","b9474572b804eda34725c5423808be87"],["/others-00s/index.html","dadea62b488001b7bbceab97898fad6b"],["/page/2/index.html","bb575bd1dd1095b5c0775f439347c7f7"],["/page/3/index.html","a868b7635d45b52ed9c566978f4d79bc"],["/page/4/index.html","01f58b13182d1f55880533e11e5591df"],["/page/5/index.html","d6b3596c1fbb1b09dbb2c50912a95c13"],["/page/6/index.html","978d0fe5042d4a15d36d72a3297bef2b"],["/pan-gu-zhi-bai/index.html","6157c0f7781305e808d0df23554dbe68"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","9781cb708b09bfb42286f379812c9c4e"],["/posner-homosexual/index.html","4783dde4b63551b02e92078ceff6cf99"],["/qxpj/index.html","070943bb8d6cae02ab9da2db921ad8fe"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","1dfa13048a87c11ab0a77f5b28f0a4a4"],["/shuang-pin-vs-quan-pin/index.html","39334ef404452480055c3412b162ea36"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","05ab0eb0ca5f8261219bd082878d6109"],["/software-reverse-engineering/index.html","129373301a4ce3dcb7c9b936d0b76fe4"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","3c527c421daff85622d366d9e7d91587"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","090fb26573b9b252556970da682377b4"],["/sw-register.js","2dec98dc8738f1d2a1655a5b7c790282"],["/tags/2017/index.html","5a0133061fc1c9cf2742133a42afa2ae"],["/tags/APP/index.html","06116d46e34dceded4c5521afefd7a29"],["/tags/Apple/index.html","0186d9f3322ecc8c833298429adb1ebc"],["/tags/AppleScript/index.html","d5cfa8b389497a0b132ee5de99f91dda"],["/tags/Due/index.html","65f5bb59d4bde84566f2f2e40a9de248"],["/tags/HUST/index.html","b940a8ca743bfc97804ea18a08d45876"],["/tags/Homebrew/index.html","e72c5995ac9cf471c0444aca7739fdf2"],["/tags/KeePass/index.html","c34880b452e4e0cc006f1841b8c3167f"],["/tags/LaTeX/index.html","322ed3ba4c5276044c5736ace6629351"],["/tags/Namesilo/index.html","3f7a7176ad108e9283c1839f0bf91568"],["/tags/OpooPress/index.html","22061918bb6ee2a61c82fc8ad1dee4b5"],["/tags/PDF/index.html","cdf52b788b2f65ce60129fe6087a53f0"],["/tags/Posner/index.html","80b7fc22ce771e0a2e0e3c83458b3951"],["/tags/Python/index.html","2a6d33e5378ef6fcf862d3916d98e0b8"],["/tags/Rime/index.html","2b969b23705f50298d3b033376e80c75"],["/tags/Tampermonkey/index.html","65ada48d8f43549666877ade9be19185"],["/tags/Typecho/index.html","995e70dc3d764b06f0d48f79008b2d0c"],["/tags/Workflow/index.html","98db6223109d4ba475b421fc5d16c671"],["/tags/cc协议/index.html","c405e4a0187d5ab10dc7db7e940be34b"],["/tags/iCloud/index.html","352e345bdf60cfa3e473b46481774b48"],["/tags/iOS/index.html","f4ab4aa4a95b1eb9db929808c2ccd1f8"],["/tags/index-1.html","443f3c58ff073b5a26643b5d6b672159"],["/tags/index.html","443f3c58ff073b5a26643b5d6b672159"],["/tags/logo/index.html","96d0da008a56a1beeb5947986f2a9844"],["/tags/macOS/index.html","c6f0f880426d273a4b3f7c1e15ba1da6"],["/tags/vpsmate/index.html","6a7c0a3cfb4bce6aa24d1af2b8737147"],["/tags/乱弹/index.html","70ceaa4b9192b5a65c314ee51dffea7d"],["/tags/二倍工资/index.html","8da7bba3cc3bec8275ca18f0a4622797"],["/tags/二维码/index.html","74e38de1cf49ed828831e7da98b7f4fe"],["/tags/云盘/index.html","6b9b7d339a48e182abce235646d09400"],["/tags/交通事故/index.html","56fe9fa2a5cd696a424b4a365e40609a"],["/tags/产假/index.html","c152ddcb34a0917fe13c475e4a325a90"],["/tags/人身损害赔偿/index.html","1f6d4bcbb65e56a35a6c0247ca6fa3ca"],["/tags/代理权/index.html","a549df7f71510ccef0bc654aeef60d87"],["/tags/优先受偿权/index.html","9a53af8cf1f95470eb96b27357cc2692"],["/tags/作品/index.html","6370681483bd2e6d22f6d79fe6f49d18"],["/tags/侵占罪/index.html","7c394b09439633e699752df1924e2f77"],["/tags/儿童权利/index.html","bde600b176e2b9ddd5199b38e9a20dad"],["/tags/公司法/index.html","ac53fee3abc3f93fcf51b23dcdb65795"],["/tags/共同财产/index.html","0b3265c793d08dc7d34b74554f2cc9f3"],["/tags/刑法/index.html","a75b3bbb1ae8cc71f6780d5c15cbfdbd"],["/tags/劳动关系/index.html","beea568a982500bdebda3ec48d878c62"],["/tags/劳动合同法/index.html","29888193bc6e319d581f3e3085df5cca"],["/tags/劳动法/index.html","e47ca7e8e749917db62d5e8c804181a8"],["/tags/华中科技大学/index.html","4fe556a2e97a97e9925e213462c4611b"],["/tags/华中科技大学法学院/index.html","6cdb1128867480c20de1182df5b513ae"],["/tags/危险犯/index.html","7e164ad0deec86a7f04c786136fad8f9"],["/tags/反向工程/index.html","b335a801bb81e8c7c4f65a3833a18166"],["/tags/发行权/index.html","0edc3a6b43f1d7535c76123de2988b6d"],["/tags/司法解释/index.html","c23d690eeea36e4812814230dae18cf0"],["/tags/司法鉴定/index.html","4c947c7d234c229816777e5adf71b3eb"],["/tags/合同主要义务/index.html","9a9ae1ccafc04acd4a14f8ef4e25a956"],["/tags/合同法/index.html","af9449e2c25b85bf15c88fd3ede90c5b"],["/tags/合同附随义务/index.html","28d0aa2140664130614a0cc9e338ad80"],["/tags/合理使用/index.html","2151cf3c8889fc29e762b034cf9c92a8"],["/tags/坚果云/index.html","89223b7ce6d0b50bf587764ce410db4a"],["/tags/域名/index.html","9f1d80f398bf10925081f2f99cd9467b"],["/tags/字体/index.html","4ceaf78f85ae6bd1ae9ab807d752a282"],["/tags/实害犯/index.html","f64e7875d694c7eda15eb5c45f0dd2b2"],["/tags/密码管理/index.html","a07d01bebf42bf25fd502d998ea1d812"],["/tags/工资/index.html","7f99cd5e8e0a2281709cacc2ffad34f2"],["/tags/待履行合同解除权/index.html","6fa3160170fe656a93a8d19482ef0c8e"],["/tags/律师收费/index.html","9994970facb969fe8497638d644dccf2"],["/tags/思想表达二分法/index.html","4bb0e897d448f91af04b3f5f5ed4a0a6"],["/tags/思维导图/index.html","d3409e1f7586fa8d643c70e6e753a27a"],["/tags/成本收益/index.html","6b7205873518f5f44302155c31bf6866"],["/tags/成长/index.html","b03b6c9c03130e919374fca616fea662"],["/tags/技术措施/index.html","68dc0491786a979d03cec917db708f57"],["/tags/抢劫罪/index.html","cf8ba29921b60111c16ca4b97cee890d"],["/tags/抵销权/index.html","3e046b2a21fac2f7c2a633e388123c0e"],["/tags/排版/index.html","0eec50a946f947e5a7d55d518a28180f"],["/tags/插件/index.html","8965595bda8ce82d61d36ad193f6de7f"],["/tags/搬瓦工/index.html","d8eaee31b80fb2f1b9c442275010fba6"],["/tags/故意伤害罪/index.html","c6053dc2c9db4e6de9a1d41dbf8a42c1"],["/tags/效率工具/index.html","132062d4de56dd89eab5bef5f5fb68a4"],["/tags/教育/index.html","5ca84349fab9356f2689b2fb29309f58"],["/tags/断舍离/index.html","398d5df5c706aadb8bc3c940f3d13bb7"],["/tags/无固定期限劳动合同/index.html","f4d573bb55155ae2b3174cff43e1e40f"],["/tags/最低工资/index.html","00da9feffbf825b41b0e9168a07f1e83"],["/tags/最高院/index.html","959877e7d79af95132aff4e9113ab0b0"],["/tags/机械键盘/index.html","c0f225ad041d7447f7d030fc405d89dd"],["/tags/武汉市/index.html","e1872605fcd05b80256ff95c14dd80a4"],["/tags/民事行为能力/index.html","785457a17703c607a9732a71bacf5417"],["/tags/民法/index.html","05b759afa99a59fe0b6cf588f86ddfc9"],["/tags/汉字/index.html","94cf9916c4704191e3bd09a65f1b9ed1"],["/tags/法学/index.html","548d99af0e47004f7e0b81d8c1a498eb"],["/tags/法定许可/index.html","b0529eb9eee5a3a63afd7eacff59b6e3"],["/tags/法律/index.html","5a57e07ebdb846b593ca6df87c43b5d0"],["/tags/法律援助/index.html","56d2fbf92797ff6e645acda430ba7d7a"],["/tags/法律法规/index.html","503826275c0fb3edef8470bee4729f07"],["/tags/法律经济学/index.html","18ed3960211c2ad071867089db4065df"],["/tags/消费者/index.html","274ca68a18222cc18944f3af33a9983f"],["/tags/湖北省/index.html","7ee2fc73690b2f025f8056522031b38b"],["/tags/熟人社会/index.html","ece597bc6478179b6644a87e64bb9038"],["/tags/物权法/index.html","8c80bd7f2da1ef317c82e81ca0be437f"],["/tags/用工之日/index.html","dac327a55be33bfdea40bbc2b94dcc9e"],["/tags/电影/index.html","d37013ff0248e776c72b8f02067f7aaa"],["/tags/男女平等/index.html","c8c46b68b009b275a4cd00370a307c75"],["/tags/知乎/index.html","251328968a0b1d11f1a706a5eac4af0f"],["/tags/知识产权/index.html","2a422905a1126f9bcba0d79fd998a09c"],["/tags/知识产权法/index.html","a57db7c2b5795a8f3482047d4c92a700"],["/tags/破产法/index.html","6e067a843820a50a170d300584323a94"],["/tags/破产管理人/index.html","065bae82a0e7cc8dee43fd9f0f261e24"],["/tags/社会责任/index.html","37b040335324c7255f6f85a70fbb79f8"],["/tags/社会问题/index.html","065768d35cfc5310dba34cd50f2e506b"],["/tags/经济学/index.html","0d0abe95441f83e2c409620842b8e5cb"],["/tags/结果犯/index.html","a8a6f5e28be180075a3ced026d10a943"],["/tags/缺席判决/index.html","28c8d46283e07062458cca9f03d8f1ec"],["/tags/考研真题/index.html","bcdbbd525b739ddcd43cb0ae04627278"],["/tags/著作权/index.html","fbea1814b4931841ae223f2539c107fc"],["/tags/著作权法/index.html","26cb742f95282a3007655233606f6464"],["/tags/行为犯/index.html","6e677f8c30e51961b5e8f2da03fb8654"],["/tags/行政不作为/index.html","5da3fede9bdc0470a7c9900371c1a4f9"],["/tags/行政救济/index.html","c7abc0a05ab781c2e7375fe6d755a5b5"],["/tags/行政法/index.html","d4ac89086b89d6b986ca33136c2df091"],["/tags/装饰装修补偿/index.html","14b5ed28466623d4530332b19cbf8a63"],["/tags/观后感/index.html","f5c57d21c70f912b97c987fe68792013"],["/tags/观念交付/index.html","2abcfd5e0c84a356da04b04723262f08"],["/tags/计算机软件/index.html","fec418aeb537e9f7c86371e17ae51d4f"],["/tags/认知科学/index.html","db10c176a1afc996ea2cc474c68f0a12"],["/tags/论文/index.html","69b3ea2644d032191900e983ec5812f1"],["/tags/诈骗罪/index.html","1b3c7bb5a9060c8eef58fbe94d040bc2"],["/tags/读书笔记/index.html","c566d65aa955a9135d3a7933da6377da"],["/tags/赔偿标准/index.html","12bd56ffb74196b494e826f9fcd7ae5e"],["/tags/输入法/index.html","5e0519af458a9bc313ef3740f100d1de"],["/tags/违约责任/index.html","138ac0b91613a5a8864d907e5b6aab4f"],["/tags/违约金/index.html","ca753a175e3e8b6f8b5233eb2a903370"],["/tags/释明权/index.html","a130ae6658d9bba94a3ecfe7053ed593"],["/tags/隐私/index.html","0696060b0ae68128ad064b858e879394"],["/tai-er-gu-shang/index.html","91925f8906cc77f6f8e1fcf19156580b"],["/timeline/index.html","79af2a72ab0834bb91d75d25efcf0f94"],["/vcard-yu-er-wei-ma-ming-pian/index.html","c3056213b07ce402423cf0fc866f9ff1"],["/webfont-yu-zhe-zuo-quan/index.html","f848ebc6250277f99744c0c4fc205800"],["/wei-ji-hou-ban-quan/index.html","a518848b28f3ef9fe18f46a268811694"],["/weixianfan/index.html","80cc0bcbb4b7ac9272b67f83107a96c6"],["/wo-de-macos-he-ios-she-zhi/index.html","4117ee0555f785c9071efb5c3571bf41"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","ba035b89485d78356b9ce1da81337eb8"],["/work-rules-mindmap/index.html","ea36026d6d0cb73f25447c3e70b191af"],["/wu-han-chan-jia-shi-duo-jiu/index.html","408bec28d256ad717c9f1a1bcc1d4b96"],["/xzlfbzw/index.html","31787d1051737bd367874e42adfed319"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","2b0aee9a9385d042e756b2de79dcbc1e"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","dd67be269dfbbf627ed336736956477b"],["/yu-ming-zhuan-yi/index.html","f0d93be95edeb416832d964ea4f6cee0"],["/zhetengb/index.html","625fa80bbc2df43aa05750d66433b165"],["/zzq/index.html","fff3ba21a51d99f6073b00ced733a2ef"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});





/* eslint-enable */
