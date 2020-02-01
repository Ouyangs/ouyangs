/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","6b2b010504918649e8a08600f8fe2a48"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","efec7091aba24c09505bec7fd63922f0"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","9c0ef5f30517990a4d6c6f03b6b773e0"],["/PGP/index.html","73d6f3f68af3cfead224f234d5fcd996"],["/about/index.html","5c7f561476539a21c43fbcabeac1de1f"],["/applescript-jiao-ben-liang-ge-ban/index.html","9704a768ba1de69c73cb31d9371fdfa8"],["/archives/2014/07/index.html","323aaac93a2c5331b15353ee73b80697"],["/archives/2014/08/index.html","daf69ccf3b1e6e727837fa19456e2976"],["/archives/2014/09/index.html","fe121776a034270da4ea8393ca6e4d09"],["/archives/2014/10/index.html","434bee91a9a66ebe4c415a842346235d"],["/archives/2014/index.html","103d3e6d4db5c1469c132ca8363e3f52"],["/archives/2014/page/2/index.html","ce4176ee393946838060096f94ef7269"],["/archives/2015/01/index.html","0a48a694476b2469271d4d11027786c4"],["/archives/2015/07/index.html","514c35d1620f696c288a55b5f00ac206"],["/archives/2015/10/index.html","f3f62bb21370b8f0f2a0756e1e8c99d5"],["/archives/2015/12/index.html","6fb111820dd83bbf9876789ebc11dc7f"],["/archives/2015/index.html","52aa1068586da9b6ce96c9c182353213"],["/archives/2016/04/index.html","d355026785e0559e78163b13e38a27ae"],["/archives/2016/05/index.html","5a5c4b47e2895a234c683b51f2462929"],["/archives/2016/index.html","cf2b60a01b7fd03c86328d15ad06994a"],["/archives/2017/01/index.html","9e35f3c27a3b590a12f7f516ea83b00f"],["/archives/2017/02/index.html","c1a8715dadb6af159dfec7ac584dbc82"],["/archives/2017/03/index.html","b07aaa50ba6e4b7a52a350422873c607"],["/archives/2017/05/index.html","5b4ea1e3c12c9db4a67b57ea7474ede8"],["/archives/2017/07/index.html","c4033e28d672971321272c1e7a39a0b1"],["/archives/2017/08/index.html","233e6bbce7e7e5b682345944910bbe70"],["/archives/2017/10/index.html","9caa5540d1d3296151da9aeb1c71e914"],["/archives/2017/index.html","2efb751544383f4a202aed6917618d6a"],["/archives/2017/page/2/index.html","85b15409479d1a48ffd6ff740dc4c10a"],["/archives/2018/01/index.html","f58b450adc5f501aa66de86a68cbe411"],["/archives/2018/04/index.html","e89bd1e7d79f7a70234dd7752f74705e"],["/archives/2018/05/index.html","967e5490b4c66ec68179dab3be2cbba4"],["/archives/2018/06/index.html","4a64ca2de1a60ed9c66b09a12ff19759"],["/archives/2018/07/index.html","3576799eb6aba6d0854d357e6fbb2180"],["/archives/2018/08/index.html","ae968daa843e84cb840ca670f7f902b1"],["/archives/2018/09/index.html","ecd6ebe436802fa3ddd64eb0d5e9a484"],["/archives/2018/10/index.html","b58e65388346c1ce45e454a4df955fd3"],["/archives/2018/11/index.html","0dc38040827490196b919dd1ecf41a39"],["/archives/2018/12/index.html","5443f59a38c21352dae392b2dd4a3a2e"],["/archives/2018/index.html","e41712c56b0daffbe2c36f4bedd06118"],["/archives/2018/page/2/index.html","b817f0428d9c1d5399764a09e4ae968a"],["/archives/2018/page/3/index.html","a491f91ff2ff4d7a74ef3fd5a3b89d2c"],["/archives/2019/03/index.html","ba57255cdfb31110f12b82b89a06f7d4"],["/archives/2019/04/index.html","210c31dfc022b3e0de79f55359a2ec7b"],["/archives/2019/05/index.html","21e5bac16fcfca99f53f459bc80bd399"],["/archives/2019/index.html","d8e7c46539293f6aab514029d8c71a41"],["/archives/index.html","9372c138b1c46db105db01ea2733ecaf"],["/archives/page/2/index.html","b79e19530d290e797a39545064b833df"],["/archives/page/3/index.html","3abfe4e1b6d65071483fa5ff340dd366"],["/archives/page/4/index.html","95af771e53d569fef8d3ea215b34fb11"],["/archives/page/5/index.html","449a7208b1a1e729513c3fbff83451da"],["/archives/page/6/index.html","6ee8f054cf73e4c3f42a2ea60bc834ba"],["/archives/page/7/index.html","7eb8ed6c86a27d3fd0f1370a96c69e75"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","1679e90746dd3162321704223faaa333"],["/bao-guan-qin-zhan/index.html","4ffeb35c481f75f03cd1b56399f35ed2"],["/bao-li-yu-qu-cai-qiang-jie/index.html","2b85c7d7c804f8065d3bfab2c2540337"],["/bei-dai-li-ren-sang/index.html","ecff23ece3d05d9ee492009e2cc895c1"],["/books/index.html","ba9646a6dd01476719152f74a984ccb9"],["/categories/Blog/index.html","0e3a37b1c5a86bf7ffce8d3ab4be878b"],["/categories/Blog/page/2/index.html","75916f1570444d0d692957d28f45eef9"],["/categories/Blog/page/3/index.html","06432acffedb5cae0e203c857fa07010"],["/categories/Blog/page/4/index.html","5ceeb3ab484525d00321d50c539b27d2"],["/categories/index.html","7694f2d2fb13f9295b64a696b590bd9e"],["/categories/法学/index.html","3c4d50e9c07566f01677659e3e797166"],["/categories/法学/page/2/index.html","dfcf614975a6cd0ba458c8c84e38f6e0"],["/categories/法学/page/3/index.html","0c22547ed56dea8a00551549d634a763"],["/categories/精彩分享/index.html","9674b68c89cc1589136572ce2bacfe9a"],["/cclisence/index.html","a0e1f5939fa78b5f202d1067c598c4f3"],["/cetrain-issues-iv-for-company-law/index.html","7c678e4a6f9882ef3956fee6dc98d851"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","4a9aedfb132995a463036a0c7078d397"],["/cs-hubei-2017/index.html","47f5e5d4610eee601b633526225463d5"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","03dc9e1079a0ff41979b4818b1204f97"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","89bc7a0895be4d90cf21d40fc11ea976"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","9959858c1012249d0735976f71e61105"],["/due-pin-workflow/index.html","fb82df85d47962abe01ffb9979995584"],["/duo-ci-zha-pian-shu-e/index.html","0e299dce0c1cd7c5ee639d88b55fb9b6"],["/expert/index.html","715c05bf7d7b9b8af0897f0e7a75b6c8"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","ebf0a6e8cc1c889fe8182bef8e462f6d"],["/google3756ddc34336b7b9.html","0670ad70060ffb413162ba088fa87e0f"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","e199b9d4a5b702aa813e66ef356cf9b0"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","0f60cab3cbc66aa0e8d21cb0500c0012"],["/hustlaw13/index.html","e1c733f70fd44ba5907028f172558418"],["/hustlaw14/index.html","0ed51947fa21731de0aa74432e6cdb9b"],["/hustlaw15/index.html","d180cb3cf70f01a25e91f56b3755a4e9"],["/hustlaw16/index.html","0e787dff4f93543476e5ab75e23380d0"],["/icloud-terms/index.html","77876283c69e50bf673f0556fea8c035"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","6d0884be8560db0cb2126af4f75f3518"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","9872ffacedd11697d15a946c653e2b98"],["/jdsnk/index.html","c436b649731fc02a2ba12d7c312b55a0"],["/jian-qiao-fen-xi/index.html","6dd5c8d70df69f3e842e6e0ed30d3e3e"],["/jianguoyun-keepass/index.html","c95ef729e4c262f749890e4856440559"],["/jin-qian-bu-neng-mai-shi-me/index.html","b85925830a5fdb94a99ebc7262734deb"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","f744dcd2a82f93eec243090d82ec50c3"],["/latex-yu-lun-wen-pai-ban/index.html","2778d6dab690b0ed7976cd2e08cfbde3"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","4f49750c84e26d102729fc93bcf4b9b9"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","403d720af1d7dee02f238b45b55d4071"],["/luan-dan-20181116/index.html","5b82fd0c94b2ce77764b4fc63938b19e"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","c7eac21f1a1f93c34a08211f76e60691"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","255a4da534bbb7011f2bc58faf0685d1"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","ec9610270108e4c9df807bb8c6836716"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","1ee2941a83d2cfd712ec819c06b89cfa"],["/opoo-zhe-teng/index.html","e3b676ceb3ff99a66be91781df3577ec"],["/others-00s/index.html","15fced3b40cd327203de26e9e38cf04d"],["/page/2/index.html","536e0ca4fdb965ad5bae7a8f5ad5c3a3"],["/page/3/index.html","1904aa4a2f364eb9ac63730d58da1e37"],["/page/4/index.html","6b31d52bcef6cac231f39f75f7ca0a2f"],["/page/5/index.html","2abb9cbbc91d67ccb7ffcb13605bfa84"],["/page/6/index.html","df10873122bcbcf5ea81534d4932c11c"],["/pan-gu-zhi-bai/index.html","5a30fc380a4e064fbc606e77afa47a66"],["/posner-homosexual/index.html","56de23d18fc26e51426ba3705323117a"],["/qxpj/index.html","069b30b9bb3645157cd72c4001ce6255"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","e77d9bcdf7c9c59e8e22c31202081461"],["/shuang-pin-vs-quan-pin/index.html","b7c6293f2f930f60a8b1a36e347c505e"],["/software-reverse-engineering/index.html","09343f4a75f2dfa381631104c55aaf38"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","8b451bc8a2f5f939f2a48051946a63d1"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","25f8d6bef16ec9dd8ddfe3fcda5a1d33"],["/sw-register.js","9222b297b3a92f765fdfb6a973e9eeac"],["/tags/2017/index.html","df9e2ed882c9d8fc87fcaf891cd4106d"],["/tags/APP/index.html","e59d78f6a2e4416aca3ea997c655a2b9"],["/tags/Apple/index.html","7f7ee7f619c7d915fcc355eb7c297763"],["/tags/AppleScript/index.html","980862d612796d1db9ed313959fdca2e"],["/tags/Due/index.html","3ddd2c7b76cb6d8717fc590df3c7650c"],["/tags/HUST/index.html","fd4616acc78c9f6d6304789975d0edbc"],["/tags/Homebrew/index.html","6be8bd7885bbaf6d7e300bfef59f207a"],["/tags/KeePass/index.html","25e913394a12277ab26d67b449df0678"],["/tags/LaTeX/index.html","a7b8b5a8ae2438e6171953846b818899"],["/tags/Namesilo/index.html","e37f0aa19281491474a1c06efbeb6f9e"],["/tags/OpooPress/index.html","fc2b830e0ab62734400bfc1f8d487a04"],["/tags/PDF/index.html","0b464e1d7c12ae649940f92837ad4c4e"],["/tags/Posner/index.html","fc2dc249409361b380045930a0561736"],["/tags/Python/index.html","c5bbe25995e346035798b1c44624de9f"],["/tags/Rime/index.html","40c0a4ecff571b51c8073e9d56c4f4c4"],["/tags/Typecho/index.html","502550a050afe1cdba67ddbafa08e152"],["/tags/Workflow/index.html","8d61c7f4ef330a60abf44edead2f343e"],["/tags/cc协议/index.html","9ce21715ece590a69485d2a89c195aeb"],["/tags/iCloud/index.html","f4b9e581223a69a9d2c8edfadd3f82fc"],["/tags/iOS/index.html","4d07afeadeb757e467e1d656f8a6da2e"],["/tags/index-1.html","a13fa66170eee601be200009f84ffa48"],["/tags/index.html","a13fa66170eee601be200009f84ffa48"],["/tags/logo/index.html","29740e6e147716a517761ed81382d912"],["/tags/macOS/index.html","03e0d414c36fe8313b6452069187b12d"],["/tags/vpsmate/index.html","adb049f4c8746540372c57159c2c845f"],["/tags/乱弹/index.html","7312d928222297af64bbf3039318b0ea"],["/tags/二倍工资/index.html","9bf9227d37c7489f484ad5049ce8ce01"],["/tags/二维码/index.html","ce79cd21b0277efbdbfb713ec8459ed9"],["/tags/云盘/index.html","9b37047e7dfddabf6b1e0af375a8248d"],["/tags/交通事故/index.html","326b02e2353b7fc914d7462babf955dc"],["/tags/产假/index.html","0850ff2eab99871b5b7edc5e58c7220d"],["/tags/人身损害赔偿/index.html","893d3078da487ba60b974c4ecd5d32f6"],["/tags/代理权/index.html","677f8fc88f8b9641d6762084cf114060"],["/tags/优先受偿权/index.html","34990bd476ae29fd6934d3d8a4348cde"],["/tags/作品/index.html","2bd90f5874affa46379316d050c8957e"],["/tags/侵占罪/index.html","5a1d7f8c911bad8ae0e251fdf9661504"],["/tags/儿童权利/index.html","ffb7aee6646382a13066a7d5d6462b4b"],["/tags/公司法/index.html","3b27a602fc1d3a9ffe46efb88f6a7f31"],["/tags/共同财产/index.html","c59c743f1b9fa79a029078586b583d07"],["/tags/刑法/index.html","970645f755becf6ba76630a4dcd33a69"],["/tags/劳动关系/index.html","e44dbc891fe64c2dece34b06a1916a74"],["/tags/劳动合同法/index.html","06db66d192f959ae4e94a44e9a2ec8cb"],["/tags/劳动法/index.html","de0dfcb86dbe5978a1d278efb25620c8"],["/tags/华中科技大学/index.html","9fa2e334a10685cac3cff2ad01ad0b47"],["/tags/华中科技大学法学院/index.html","48915e4efb16aa80b9ec203512091ef1"],["/tags/危险犯/index.html","43ce5482c515474c4d82de14628e18eb"],["/tags/反向工程/index.html","ddcca630bbd0b2393dfb1ebf1b214f5b"],["/tags/发行权/index.html","b6a12cca3f3d8a1980417d67565e853e"],["/tags/司法解释/index.html","18706703aa0d6d3d3c623ae0563bb4d0"],["/tags/司法鉴定/index.html","b4d3a3a23f71a7a9e91f2e821d39842f"],["/tags/合同主要义务/index.html","e260196c662ece68a6bade2f71d6db2d"],["/tags/合同法/index.html","6c0c288d7b324e7f3dc5f9e870c8b8bb"],["/tags/合同附随义务/index.html","8d46ed630772cf317f574d6e879dbf57"],["/tags/合理使用/index.html","7d527bb84aab74d65e4b89881d69be52"],["/tags/坚果云/index.html","2469ae71da4b604e3f457342a9eb069c"],["/tags/域名/index.html","f239082ae5edca3f753d69d5fa48cb93"],["/tags/实害犯/index.html","3444d2b68914a5e75c7fdf46e261d070"],["/tags/密码管理/index.html","45b818b737c6d112daa70ed9e742ea02"],["/tags/工资/index.html","6c5217e0622eb16302832eb3d5eab85d"],["/tags/待履行合同解除权/index.html","a857acebc4fda86599b1f86c192e2bc7"],["/tags/律师收费/index.html","f2c78eaaf1545eb6873aaf71010f0e46"],["/tags/思想表达二分法/index.html","83a5b4ab2bef656aa4ca6f587cb0f4af"],["/tags/思维导图/index.html","c6459557a863a26bb69e585f890a3050"],["/tags/成本收益/index.html","0c8fa98d3c1f0067e00620c7aff77bec"],["/tags/成长/index.html","4d070a1007cc1b696e8b88290de457ad"],["/tags/技术措施/index.html","6096826e61a1930b64d52821319f6878"],["/tags/抢劫罪/index.html","4d3129039c9fa9f4d22bba9488005884"],["/tags/抵销权/index.html","bc1c0e08d07aa4bc2385fa72ffa0c5a1"],["/tags/排版/index.html","1b117e7a6470ca9c3ef958c0f2c3f92a"],["/tags/插件/index.html","ed30888c939a8a7ac977f2aeae8f5029"],["/tags/搬瓦工/index.html","dcc1e1ae744af2cb83ff5cf9bd5de0b6"],["/tags/故意伤害罪/index.html","e6578838a122b569ddbf515325f43036"],["/tags/效率工具/index.html","9464a5f884aafdb0e87b5aca19fe18fa"],["/tags/教育/index.html","d0e1d56b2eb62e46beffddb89b36ab19"],["/tags/无固定期限劳动合同/index.html","d4668967bb95e60931ab08730d3b3f6f"],["/tags/最低工资/index.html","b69e9a51904a9252ab7c47d3427c5b19"],["/tags/最高院/index.html","8d1557c441aa03375108c6b0894145d5"],["/tags/武汉市/index.html","7393a8a928e3853cbbd04b2e563ecba4"],["/tags/民事行为能力/index.html","bf99adc2d62320a49fe037b9b615aa24"],["/tags/民法/index.html","99e78d29b1fad0d0a501c09d63be0d45"],["/tags/汉字/index.html","eedf91d23a9673877bed722e0aea658f"],["/tags/法学/index.html","a94a4613137b7682f589296c7b64fbe0"],["/tags/法定许可/index.html","7f8594bd1e7ffb30ffd61d0805731a65"],["/tags/法律/index.html","fadcaddbe9bf4dee317b25817ceaafd3"],["/tags/法律援助/index.html","3ef2c0f21b6dfa273485c42c895a933d"],["/tags/法律经济学/index.html","0eb822d20f410af4989c738167e0f5f3"],["/tags/消费者/index.html","fd7918c3e60847bcb9dfda901228a7ce"],["/tags/湖北省/index.html","c5042aacb125a674f76fff1124b37429"],["/tags/熟人社会/index.html","ad8bdd07e353acbf6ffab0478741d34e"],["/tags/物权法/index.html","db745495346cd652a655717c375418b3"],["/tags/用工之日/index.html","445a2bdb4a5aa2c8f2db7bb93428d979"],["/tags/电影/index.html","0cf1582d3c1cfb7ea61d347b80ef3890"],["/tags/男女平等/index.html","ddadd96bd26852e3bad0896dbfeecd3f"],["/tags/知乎/index.html","53c370de19a54c318bd9e5501cf20161"],["/tags/知识产权/index.html","9b2bb31c67cc9c3bd68542b9d4e4d3ce"],["/tags/知识产权法/index.html","40bdbec55941fbb81e1345e2d75791db"],["/tags/破产法/index.html","7c8067fa1c7b1d87ea54e9c9d1c26f6e"],["/tags/破产管理人/index.html","c07aea9f5c89cf4072167548fdfad547"],["/tags/社会责任/index.html","cf6bf4e6972b931ce56d6cc19758df1b"],["/tags/社会问题/index.html","f0c81c761eaa8af9217727fb334b3e7f"],["/tags/经济学/index.html","0f43c75a99e62038d582588ecf6d7848"],["/tags/结果犯/index.html","5bc39d395f41ba4b87052c964a61cc27"],["/tags/缺席判决/index.html","c73c46f3943b4e55352e9a405e60b830"],["/tags/考研真题/index.html","bd2df306a18ebf288ee519b00217d3e3"],["/tags/著作权/index.html","9abfd17eb4d6897af05d8b273bf3e575"],["/tags/著作权法/index.html","b6826f8fea0aa935a0d4143b189dbfc8"],["/tags/行为犯/index.html","ff4f60d3ea8b4c9483be6276407cef9d"],["/tags/行政不作为/index.html","309313fe03ccae2d121814a23d49f1c4"],["/tags/行政救济/index.html","43637a453a85bac7ec3c8b3f7ce81988"],["/tags/行政法/index.html","37c449c25ba9d9049dd8b9f83274ec7a"],["/tags/装饰装修补偿/index.html","f376cecc84d0b055ac1f081eda22acd5"],["/tags/观后感/index.html","9e3d9d7d7cd509b3660a8da0f2c2bff7"],["/tags/观念交付/index.html","77003226f1162288bdc60fc88dffe84a"],["/tags/计算机软件/index.html","5666bbc66b885da4b61b4400b3d7378a"],["/tags/认知科学/index.html","926b615dc4185d854dc7e16eacca7628"],["/tags/论文/index.html","0a6edc3d7539b9d938b660f26b9ff1af"],["/tags/诈骗罪/index.html","f1dfb922ea049bdf9edaa0bc5ad1dbfb"],["/tags/读书笔记/index.html","1d08b9c9156f887e980a12291518ad2e"],["/tags/赔偿标准/index.html","af476a54a102a44aad8f2b7874b1795f"],["/tags/输入法/index.html","55b4b8a845fc9ee9c3d56f7b13122697"],["/tags/违约责任/index.html","2f2e4531ff961694fe8e6d61a4d9fa99"],["/tags/违约金/index.html","d26d96ebed81324dab65871a9985577f"],["/tags/释明权/index.html","7b50a333eb652c117cf7e3d0c0f60a33"],["/tags/隐私/index.html","0221a9378fe98f3e9ac8dd492e9ad4eb"],["/tai-er-gu-shang/index.html","095931032779d8d42c4455a3a9e2b8c8"],["/timeline/index.html","cb5f8c1b9712af9476afc1f2596b2f68"],["/vcard-yu-er-wei-ma-ming-pian/index.html","8748fa4bb39e33c028c6468fb5cd30f3"],["/webfont-yu-zhe-zuo-quan/index.html","35552ee851d399d32425252f230afee8"],["/wei-ji-hou-ban-quan/index.html","48fb9fac377e41b62666340b5d04ca2a"],["/weixianfan/index.html","258d83c4f6e375c44b7d2ac157377779"],["/wo-de-macos-he-ios-she-zhi/index.html","03e6b3249754761d173343d52f3534e3"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","563e21426c115bb46df10bf3be6fe224"],["/work-rules-mindmap/index.html","ee79bad5a2e73fa3761ddf7d56593fa2"],["/wu-han-chan-jia-shi-duo-jiu/index.html","0482c6c5b200b6a56921d0a6b3f5d891"],["/xzlfbzw/index.html","174d16f9f6f7537fe8bb0b9f9757011c"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","50bc4bd34283de7784726a8d344ee2fb"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","bca45474d93eb2d13b61abf0b71f3be3"],["/yu-ming-zhuan-yi/index.html","77dca39336fcd88c76a7fbcfabbc5407"],["/zhetengb/index.html","3972f5a1688fabb2525f2ef2cc880053"],["/zzq/index.html","0c82340ae835d053afffd132f4133930"]];
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
