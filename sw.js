/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","b1e75ff98423bea549ebfa61109a04fa"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2a307f659c16b22fe0a3db17223a13b3"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","03b7c381d72b002ca056519809424193"],["/PGP/index.html","f4e09056b07f6b69375cb27fb2f28599"],["/about/index.html","530620d8c7229f02a0362e78ffcde607"],["/applescript-jiao-ben-liang-ge-ban/index.html","8a2abcea4961379310f719777b537ef7"],["/archives/2014/07/index.html","a3694772a5c8323974725057b669e08c"],["/archives/2014/08/index.html","cfd097f45a33adedd9fbc16c912cce8a"],["/archives/2014/09/index.html","2b090355e22f0824acf51fdfdb9dc044"],["/archives/2014/10/index.html","ac92b8c4ede1ac8c3ecf972442dbdebb"],["/archives/2014/index.html","fb6a14b876b3a92122dab02881f33fa3"],["/archives/2014/page/2/index.html","2d6f8c9bcd4cf56b9c4db9fdce6ab261"],["/archives/2015/01/index.html","a57e501a18e742458e183679b4386cd5"],["/archives/2015/07/index.html","c05d9fa1cc0057f3788d41ff89df3c8f"],["/archives/2015/10/index.html","67c0c2ff9d19ab668bd99643f10b99d7"],["/archives/2015/12/index.html","f03cfc3883f9a938637f2e5d7f3de7da"],["/archives/2015/index.html","1e7587bdbbd715c3222aa07c05901aaa"],["/archives/2016/04/index.html","f891e432689fc28e2d40e95eaed63a81"],["/archives/2016/05/index.html","e1ef2440d83052708076c2e5d8286444"],["/archives/2016/index.html","c59dd4d1249e81a03d69a8fdf6169f56"],["/archives/2017/01/index.html","849864db13b001c2a76a280bd6930067"],["/archives/2017/02/index.html","411afa422db194b4ecc30f01f0cb4a60"],["/archives/2017/03/index.html","69839c7839bf570a59c53897cb424486"],["/archives/2017/05/index.html","6f41bd83a3be11d3950c800684edad1f"],["/archives/2017/07/index.html","c27c509a349a5223bf61f10bafd3a58a"],["/archives/2017/08/index.html","5c84c4d26faf6d21526767f7b75d4ac0"],["/archives/2017/10/index.html","cb62815b38e5ee1c533500e8f4372db8"],["/archives/2017/index.html","f49795ef25265ce22579a8eaad766a6b"],["/archives/2017/page/2/index.html","405c62c6143e4f45e45437fbbfbfc0fd"],["/archives/2018/01/index.html","8b09b3e5e58ec8a2e4e03a1e9e7e984f"],["/archives/2018/04/index.html","dc90feac79212ceeb5495625fdb959f0"],["/archives/2018/05/index.html","46cb9c027c39395eb6f69501f3384dea"],["/archives/2018/06/index.html","f1f81ba7d57cde10a2bc48f1155717d9"],["/archives/2018/07/index.html","952d8ade4b641b211f1e2184007e812e"],["/archives/2018/08/index.html","c0091b0ca184e1aadf15652f9e221d40"],["/archives/2018/09/index.html","0160fe9149fa9786f8641ffe75288562"],["/archives/2018/10/index.html","58401151220f1a951ce9c03cef0a224e"],["/archives/2018/11/index.html","edc435e3d064af188310f1639f07ca55"],["/archives/2018/12/index.html","fe08436aadf0a4f5abd334d73f6272a5"],["/archives/2018/index.html","f031ef9afd7b76cfd540b9235d92096b"],["/archives/2018/page/2/index.html","99b1489864d83bf2fef6f8f7519c01fd"],["/archives/2018/page/3/index.html","46a8c461a5c2794af0798db1af08c7cd"],["/archives/2019/03/index.html","460db1bb1ac3a02a0e40b74f796eb9f2"],["/archives/2019/04/index.html","4ee7031f0e98347d556ef5fbed45b45c"],["/archives/2019/05/index.html","722e46ecfc47f602574c379596ee2706"],["/archives/2019/index.html","837c614fde078acf0cbd6ca6d4085ca1"],["/archives/2020/02/index.html","2ce390399838b7bd61aad13f32abadd8"],["/archives/2020/index.html","219779521f8e5819d62273b650221895"],["/archives/index.html","9b24f26803ac1ee20a31db28d0b23c2b"],["/archives/page/2/index.html","d18871f62ba0444ebd66f3dbc11e663c"],["/archives/page/3/index.html","6d7a553ed56af86404d294c85f11da01"],["/archives/page/4/index.html","bdf45e6e98dc52f22edf788a508e9967"],["/archives/page/5/index.html","bfec65329afa330ced3e41db809bcf47"],["/archives/page/6/index.html","7bc1fc45319244ae000967bfc630698d"],["/archives/page/7/index.html","cd4f5eed3a9f25793755526f382dc754"],["/ban-dao-mac/index.html","4db766ff530de9aa5c4e8983066c611d"],["/bao-guan-qin-zhan/index.html","c55c839ce212e79200c4264adc317573"],["/bao-li-yu-qu-cai-qiang-jie/index.html","600c3a3b09923b7883f138b3a2ded22c"],["/bei-dai-li-ren-sang/index.html","cd1a48ac92d531a07941811091e3a82c"],["/categories/Blog/index.html","cf331a434dc61eea5f7ee779498ac37e"],["/categories/Blog/page/2/index.html","16c9ab7c86afe6981a85aac4e8cb48a9"],["/categories/Blog/page/3/index.html","040f1cbbafb8c3657842e8dd9c49491a"],["/categories/Blog/page/4/index.html","b844759ff3cd2263cb2cda64cb6b11d8"],["/categories/index.html","c3cce1c155d547298cc84bedb2d8f601"],["/categories/法学/index.html","8ed110e8705bb524f4815fac3ea78849"],["/categories/法学/page/2/index.html","4ed2df70e710459756053f97ebd240ff"],["/categories/法学/page/3/index.html","32e7fd8c6ae7858790ba678e5ea8b88d"],["/categories/精彩分享/index.html","7fa2e23c50f2205df1432fd2676e6595"],["/cclisence/index.html","042362005178e6226943a66ccb21e6fb"],["/cetrain-issues-iv-for-company-law/index.html","9144d0dbc92d8e54732fab656840123b"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","ba1c2243f40013b206cc73fd1ddc2d4b"],["/cs-hubei-2017/index.html","41c41751c684ba55d379916c69edbed7"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","b7320fc482e6cf04f85ffbd78d10eabf"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","5e63857a2ac6663c0e6d50a78df7cc72"],["/due-pin-workflow/index.html","6eaaaaba3e6b47d479c74baea9f21cce"],["/duo-ci-zha-pian-shu-e/index.html","3b329be533ee03303388fa7ae5e1dd1d"],["/expert/index.html","1176dc8c381e9a50f5aa247c9fa64a5e"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","6e258106a7452181fba778cb56528aae"],["/google3756ddc34336b7b9.html","d709753761c103c4f9ff19a0ef44248a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","0654e08231c92b2ef00c8beb2ed68ae9"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","5417e8b7cc253f029ea5830726716cd5"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","a6064c7b1477ee5e8966851e98f2c4d9"],["/hustlaw13/index.html","71c61c77b31c114467ee8fcd0ff92688"],["/hustlaw14/index.html","f020d285f63ec39aa33294d612664088"],["/hustlaw15/index.html","c98731b5040a73b11d2bd4bb37f76cee"],["/hustlaw16/index.html","3dacd693ccffb5f279f2491ba8405d9a"],["/icloud-terms/index.html","c769aea486de54e0e9fbf30c2df78692"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/index.html","6a7811ff0d5e4c9548af98fcc226734c"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","5e729fa71ee270bb6e98e491d9938615"],["/jdsnk/index.html","b8abefb67efefda88d8b226e8a1be3c0"],["/jian-qiao-fen-xi/index.html","59131c505e9b68c0d8cbd8eaf5fa2447"],["/jianguoyun-keepass/index.html","f5aa995d22ea2619aa1582b8a8f157ae"],["/jin-qian-bu-neng-mai-shi-me/index.html","9d1bcf4f6f0ccb99bb4e8673191b7014"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","d2a431b4d32564ea96e3ff5098abdf2b"],["/latex-times-new-roman/index.html","a67847d81aa231d15f5a1f5c555aea21"],["/latex-yu-lun-wen-pai-ban/index.html","e015795c449eb964a8ea4286b495f555"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","1c3824599be1e455a3f64f5e2eafd03a"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","3cebdf79df33e375dcbb1f18d62d46cc"],["/luan-dan-20181116/index.html","1f4cde0d7bc1accfbcb9dfdb80aa0290"],["/luan-dan-20200217/index.html","e27fc9358f68a2b8c13969071f432f4a"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","53ba1692793547f119850608356f0437"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","f0370ac6bc9f3cac5e1e3cf036689fb6"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","2bf862879f9d1d91ecb85d047a0fb9fa"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","47991604ee2ad79b86b7665eb2abb05b"],["/opoo-zhe-teng/index.html","7625668b3ea5ca9e61f33c914bd64f5c"],["/others-00s/index.html","1a79075a247729a1f059528e44ae7e9c"],["/page/2/index.html","6c0dae8a769d39ebaad85a4d58490acc"],["/page/3/index.html","428cb575e4809e11baa633f54e30c2f7"],["/page/4/index.html","f9f15e9026f14c78696a14e58e4df210"],["/page/5/index.html","3e36824659e4c44af011867c053ab9b8"],["/page/6/index.html","c6d3fdd2b5862e07248772bbd65cad70"],["/pan-gu-zhi-bai/index.html","cd08bfea7f401f4515d7c9882e360eb1"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","26b7f290ee307990761e267cb1134703"],["/posner-homosexual/index.html","0a3a2f2cdd1e81725384285a8dc62f0b"],["/qxpj/index.html","5c2d926a74b855f323cd9132ccbe6b14"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","d73dc0ac414437b4aca80e81fe6ee3e9"],["/shuang-pin-vs-quan-pin/index.html","15e4c64c46aa36b96349aad66a438e0d"],["/software-reverse-engineering/index.html","4aa3bda006a4a5b006283fb1432acb5a"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","02128772a80231589369e9eb71e99398"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","12ed0ff33e0a7834c8a3cbd08305be46"],["/sw-register.js","7cdb3a4860cfd35c19045ee9e581e531"],["/tags/2017/index.html","fd137e0d06c7e18c7c346263ce909703"],["/tags/APP/index.html","b70a2da8bcfbf273e79107e5eeffb225"],["/tags/Apple/index.html","ddaaa5f5017cb174db39e6742005a44f"],["/tags/AppleScript/index.html","5214a54929d45ba46ee47e50af6d0b2c"],["/tags/Due/index.html","b4e3c8ecae4d6ebff2486f1d39c55805"],["/tags/HUST/index.html","e90afef00f28eb48ff94ad19bb96c9bb"],["/tags/Homebrew/index.html","0fac96cd89bba8b759049c60046dc5b7"],["/tags/KeePass/index.html","06d899ae7162cde106201939e617a7ee"],["/tags/LaTeX/index.html","e263b01f10a60e6c4d298cf5977a2fcd"],["/tags/Namesilo/index.html","80653e6ac2aeef89a381d73203c4fde8"],["/tags/OpooPress/index.html","d2873b3a6be15b39a7cf9496c5437829"],["/tags/PDF/index.html","605872c204b03ff5a36227a982188884"],["/tags/Posner/index.html","d568298c6fe3491442ac9a0b2e75bddc"],["/tags/Python/index.html","6204fab349d5fe8e5851dd628f823dbc"],["/tags/Rime/index.html","450fe1261dc7b988b3d6eaaafa055d02"],["/tags/Tampermonkey/index.html","68edc023898a5fb38de3f662cfbb06cc"],["/tags/Typecho/index.html","05c5db8d9e71753e881c14fa0b115e04"],["/tags/Workflow/index.html","8ea72e56b36cf3463a90bd668984c4ea"],["/tags/cc协议/index.html","0a616579a3309ea20b6a6cf44fa935da"],["/tags/iCloud/index.html","1f30d3c4d2f6576045335a81803c8ce0"],["/tags/iOS/index.html","62bf8fc1709fd9111330337d86f59001"],["/tags/index-1.html","468a3b4487e969fd455c891f6493809a"],["/tags/index.html","468a3b4487e969fd455c891f6493809a"],["/tags/logo/index.html","dd49a37ad4a8e6ee6c2f4133cddf9077"],["/tags/macOS/index.html","68fc6f1c5b348af19b82fe45661d057d"],["/tags/vpsmate/index.html","58780879df0c52444e93cca8f8d943d9"],["/tags/乱弹/index.html","53478791b944490e734ec8b5e08c351f"],["/tags/二倍工资/index.html","60fd4ee44512e25c45be715df30d45e6"],["/tags/二维码/index.html","b6e41cdde711a1a3f54a79b0c4d3ba82"],["/tags/云盘/index.html","56e2fe9920ecd95a9ddd5da29fe950ef"],["/tags/交通事故/index.html","f64beb218c90316c4a1ee34860c021c5"],["/tags/产假/index.html","484bc61997fa7a870066d7e5888c1592"],["/tags/人身损害赔偿/index.html","64c69ace7da554850da236166efe6754"],["/tags/代理权/index.html","a5178886238317037fc35734a89e0b74"],["/tags/优先受偿权/index.html","d2fee3f30ac7bdc36622a5593912b4af"],["/tags/作品/index.html","2d319d8e8d04f5a7c3aba8e8296e6c3e"],["/tags/侵占罪/index.html","a25ff26a6d6e67e02b0cf46c6ebe4157"],["/tags/儿童权利/index.html","26a000790c4d9c4a340a8a29255ef672"],["/tags/公司法/index.html","8419ccf54adb600297b0bdd3ac1a12f2"],["/tags/共同财产/index.html","1ed9843f73833240c6728a04e2fe6f8c"],["/tags/刑法/index.html","4c1601a43a7613b11cd118c873080aef"],["/tags/劳动关系/index.html","fefe4663c1d64f64161de1184e5b6dbe"],["/tags/劳动合同法/index.html","5e971bf8a4129aabc9c2104a8ae5323f"],["/tags/劳动法/index.html","915abf8609a50f585ba859b83d066a37"],["/tags/华中科技大学/index.html","4e9e9d6e8cbaa6312645d9f132f80c29"],["/tags/华中科技大学法学院/index.html","4bbf0cb0662a98e3b2206c881caf9e54"],["/tags/危险犯/index.html","4e5d8b7507cbb940261146bb47829729"],["/tags/反向工程/index.html","df2e2cacf5b8a872c2fd4f89a52b9a2a"],["/tags/发行权/index.html","211eeea8793ef101a0b5f4c557435c07"],["/tags/司法解释/index.html","300c13e896c09a4348e2d4e0475c0ed2"],["/tags/司法鉴定/index.html","f81018df3fb8aa55c815787c6ce5229f"],["/tags/合同主要义务/index.html","3d2c050b3dfc7036b450a0893ce8dc1d"],["/tags/合同法/index.html","209f0aa87b2a0506cba2a5a1f553f88c"],["/tags/合同附随义务/index.html","d0aa91008520734c270193410bd87bf4"],["/tags/合理使用/index.html","586de3d1303cfafb9272ac7e55f786c7"],["/tags/坚果云/index.html","bca424d42ea2dd95d3931da21b12dab4"],["/tags/域名/index.html","911010e41ffc185aaf0d9a043f71eab0"],["/tags/字体/index.html","11849a528623c0920109582847e3b161"],["/tags/实害犯/index.html","cc8e3cd0ffe8e2cb4e29b390f7a83fa8"],["/tags/密码管理/index.html","e30358d317132c5742e7660e57a4ee9e"],["/tags/工资/index.html","c5506cebc17cb698a95ed47e014ab472"],["/tags/待履行合同解除权/index.html","31caf3b691e6ef4b6245fbe9d47ad009"],["/tags/律师收费/index.html","148d70a7a743b733ed3be628d5ebefab"],["/tags/思想表达二分法/index.html","98fbeb79698282a96d5473d3d2df5ed2"],["/tags/思维导图/index.html","27b5b27686a643dea4c95996bcb3047a"],["/tags/成本收益/index.html","3f2d584fd66963ba18c085e0c6559037"],["/tags/成长/index.html","4f98d974968509784fb0fc22757a8b67"],["/tags/技术措施/index.html","a18fe026d81b9922796126545cfdd536"],["/tags/抢劫罪/index.html","5e65568258bc6d3f2013a659762afa69"],["/tags/抵销权/index.html","371135cde965e3079067252e172a6a6b"],["/tags/排版/index.html","a96bdf6f4602ba70dab75e1972fa12b9"],["/tags/插件/index.html","e8d7da69d95b88c4479bf4c908b6a602"],["/tags/搬瓦工/index.html","2c428430168701f6d6134055335efc87"],["/tags/故意伤害罪/index.html","ea0bcb22683467dd1bc127462396bdc3"],["/tags/效率工具/index.html","cd07d9175762ee877f0f1921eb29ef3d"],["/tags/教育/index.html","c6d513b015517e31e8b0135d471b66d6"],["/tags/断舍离/index.html","8a1991add7d7e4064609aa814a9480f8"],["/tags/无固定期限劳动合同/index.html","ef0a5d22bcf7f60001d54e482f74ce51"],["/tags/最低工资/index.html","f1b948d0c85d1732a43158c1d5278507"],["/tags/最高院/index.html","77ee9b3d0d942ca8196b8ded0bba8a27"],["/tags/机械键盘/index.html","ab53b4902dca682746194be1309a867e"],["/tags/武汉市/index.html","a799b5a99a7e409af940f4918696dad2"],["/tags/民事行为能力/index.html","1eaa7ce878df1bcda7dda9ebc5a5e33a"],["/tags/民法/index.html","70cea60a65439de4449dddda4332b720"],["/tags/汉字/index.html","cc9c0d102dd5b5a4aa483a1fb8c653be"],["/tags/法学/index.html","97e2f9a15ddbcfa54e0a7de59c838b64"],["/tags/法定许可/index.html","9fcb415333742cbf92b973dc1ac99358"],["/tags/法律/index.html","3a4993ac08c7355c62448c571f3c1663"],["/tags/法律援助/index.html","27ec40305ecc738213b96d2909366459"],["/tags/法律法规/index.html","761937b61c1babd8163c0077c86c81d3"],["/tags/法律经济学/index.html","53db9c449673f7290e11527ef3e58230"],["/tags/消费者/index.html","dba1e0a1d7be7feda605d85af24be645"],["/tags/湖北省/index.html","5f87f5629214942333506581476e6126"],["/tags/熟人社会/index.html","59b9b3269f6babaedeb3a7da80f9bedc"],["/tags/物权法/index.html","ec9c27260e1bdb7f0839d4147bca7069"],["/tags/用工之日/index.html","ab426f679d5acc8f4b0ac5efba506fd3"],["/tags/电影/index.html","283b24a5608d2ddc274cef7da8e9d9dc"],["/tags/男女平等/index.html","eb44556eda245847147082656764f091"],["/tags/知乎/index.html","71d2a97064759b5b4b1ed2677d3997de"],["/tags/知识产权/index.html","1d610e81740d94de5b1b8e86cda609ca"],["/tags/知识产权法/index.html","620da98961a537a4f61ef79fecd146f6"],["/tags/破产法/index.html","75abcdfcc79a1c7ac4c37009838eba31"],["/tags/破产管理人/index.html","81706109077c50f8769107f126cd1096"],["/tags/社会责任/index.html","a2ee722224d0fcfdbf15072940a6ad60"],["/tags/社会问题/index.html","fcbd61753df98129ec3fe860ff92c681"],["/tags/经济学/index.html","b34fed9bb016736a74aa1bb094415314"],["/tags/结果犯/index.html","0181127745ac5aa6a70f9830a72183f2"],["/tags/缺席判决/index.html","ba3bcee152aeafe1ec931e1ff809c84c"],["/tags/考研真题/index.html","c5264aa692ebe2b18156d17ad59b6e63"],["/tags/著作权/index.html","0fecd9c1edd25fa69f99d9e34ef7833c"],["/tags/著作权法/index.html","1e2ca6bb34e5b71c754768e383a7d95f"],["/tags/行为犯/index.html","a83f35ca855966087908eb3917721c3d"],["/tags/行政不作为/index.html","59a95a64811ccc3b7e2271dff55d74d6"],["/tags/行政救济/index.html","421e255924c820be1f0731c1ee7e1748"],["/tags/行政法/index.html","114e4aae7fbbb640ec8b513df290fb81"],["/tags/装饰装修补偿/index.html","2b29c545df098f832ec25e56f7ebc6e6"],["/tags/观后感/index.html","fd3d6d83adab77701fb39d713a1b0862"],["/tags/观念交付/index.html","4065f38489b882fb5d7aa836d26e691e"],["/tags/计算机软件/index.html","7a3a52a4a01a38e154a76c4614d6349b"],["/tags/认知科学/index.html","221a591166548987d9e1bdf9d1a40027"],["/tags/论文/index.html","928411e66ab9b3e8ee032205ffe5d9e1"],["/tags/诈骗罪/index.html","cb1b02160d588917c9a42c9e926ded2b"],["/tags/读书笔记/index.html","5b39318b4ad14461f027c6d9cfb58ac9"],["/tags/赔偿标准/index.html","44996770e5d14d7d121b483d248c4021"],["/tags/输入法/index.html","9e28a3174e9424bd6d2d40d4c0f23f35"],["/tags/违约责任/index.html","5acd25136829474299300cc6cde4e86b"],["/tags/违约金/index.html","cf3b8018f99996453c6ea4c160b04f47"],["/tags/释明权/index.html","0909cae6e3370256c716c9f2591c55a1"],["/tags/隐私/index.html","685b80affbbb09129887d92e5f0fdaf9"],["/tai-er-gu-shang/index.html","b1178c7996cf83373f20e01e212e2aed"],["/timeline/index.html","d550ff2672026a4a60453620cd32805b"],["/vcard-yu-er-wei-ma-ming-pian/index.html","2bcb9d887ea28d910b74ebe29a1d18fb"],["/webfont-yu-zhe-zuo-quan/index.html","a005ceef435837debec8a829f2655ae1"],["/wei-ji-hou-ban-quan/index.html","e16034b93ea9207ea593ede799b200bc"],["/weixianfan/index.html","7d9e17d6e152c7de90639bb02bec3688"],["/wo-de-macos-he-ios-she-zhi/index.html","db5d37008e24b4db72fa0b6dd39a74a1"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","7cb47ad777d8925e9697cfc88e195470"],["/work-rules-mindmap/index.html","aa947b87bb3c2a361bfd7548d010d174"],["/wu-han-chan-jia-shi-duo-jiu/index.html","12397e4e1d97ea673ab0c41c0996bc3e"],["/xzlfbzw/index.html","fc556c3ada9044cde4b440e1848336ea"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","599d09370990cacd3b63fc7e21490cb3"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","cef1147f05bfce96a9b45143c3bf9d10"],["/yu-ming-zhuan-yi/index.html","4ccfa44b11dfdee50b8c439f82852521"],["/zhetengb/index.html","bcce09b70b1a00209d8563fe95c02105"],["/zzq/index.html","fd1b0cfd72706175090d18ec197dedb0"]];
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
