/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","612459bd77b907166461d53b97380433"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","cf2aef47a8449ae29a5244e7b3d448b9"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","cf6dc26c0bcf52954ee007b27f7c4667"],["/PGP/index.html","fd8443075c02aa5fdfb5c38e9966fb1f"],["/about/index.html","0a9dd9a36eaacf28cff8dc503f75fd0b"],["/applescript-jiao-ben-liang-ge-ban/index.html","caef3afe85dbce6a5e110860d807ef50"],["/archives/2014/07/index.html","4a36ac7b1dc35d5bd457d2a974e4b4a6"],["/archives/2014/08/index.html","eca2e0785889032c12281f999f88caf3"],["/archives/2014/09/index.html","44d8a052bf2b5f7cd8ebbc678535d712"],["/archives/2014/10/index.html","e776ebb3aae1c7d198f5c48e378d8208"],["/archives/2014/index.html","d7ac18bce030b4ba499720721187f1cf"],["/archives/2014/page/2/index.html","1b0ebece414aff5d2d3b5d1c61069097"],["/archives/2015/01/index.html","4221abd5b0c86514f0d7e54fb448a2b6"],["/archives/2015/07/index.html","86b3f0b6bfe52e3919fffca85abb8c21"],["/archives/2015/10/index.html","cdb129c303f3bb9e7cf7a326eb88011f"],["/archives/2015/12/index.html","a8e2e7e94c5306988dbb48c1c5b27eb9"],["/archives/2015/index.html","14fd54ee9ad587a60f46798675ae9f9b"],["/archives/2016/04/index.html","5cd4d4b243d480aecfba73c5fb8295f1"],["/archives/2016/05/index.html","9906f9dd75c431977116a291c09de1fa"],["/archives/2016/index.html","82da01ee5432660cdaf652a5d7dc93b0"],["/archives/2017/01/index.html","23eb845c007383555a05e23d33fbf44d"],["/archives/2017/02/index.html","da4d743260d1008ba5482eb98a3e0211"],["/archives/2017/03/index.html","1030bf820fe54aad5776f3a47c39e48c"],["/archives/2017/05/index.html","06c7b82d3e8d7a1dde199165a15118d5"],["/archives/2017/07/index.html","666e5b62fee0ffcb079c91827f894e46"],["/archives/2017/08/index.html","d9aeff746ff50b223bac79b94fe055e6"],["/archives/2017/10/index.html","075caba9a2c766ae312c680880db490a"],["/archives/2017/index.html","3a633d847c40e0209294a4c55be37aa5"],["/archives/2017/page/2/index.html","cf5c6ccdde5803a794d7c2b993207b1f"],["/archives/2018/01/index.html","14ef931d10a9f310864717cbdc6ced94"],["/archives/2018/04/index.html","cb366b691845d337cdad16efb309207e"],["/archives/2018/05/index.html","14ed1e205f3eadfebb37bb8fe9399e94"],["/archives/2018/06/index.html","b2e4bf4ae265059a11641d2a4b873552"],["/archives/2018/07/index.html","a5d972b95f0a86f7f676c1ba840c22bf"],["/archives/2018/08/index.html","81e3ac024f066080129c46e698646a9d"],["/archives/2018/09/index.html","bfa7a73e6c7328f3e0f648368d17be45"],["/archives/2018/10/index.html","ae6d9b1d58619916c1dc1c110b121a68"],["/archives/2018/11/index.html","fb618c61faef4970dd47d5f276a6b34e"],["/archives/2018/12/index.html","98954f4e6b786db3b59f531f54edb8cb"],["/archives/2018/index.html","ea2ea201abb4d7c3d58956b484628f7c"],["/archives/2018/page/2/index.html","7ddfe8e1717a900f23f1e7f2cf872657"],["/archives/2018/page/3/index.html","003c8d06da201558b8b90967516696fa"],["/archives/2019/03/index.html","8661ae031390772d465e061fd864d551"],["/archives/2019/04/index.html","1225041243eef3b90631b01825890487"],["/archives/2019/05/index.html","463f83966078e446b598655c0dbc0193"],["/archives/2019/index.html","e744406c69c555580378c72ecebecaaf"],["/archives/index.html","4dedadad434de003aef27b2c2b3dfe8f"],["/archives/page/2/index.html","4565213ebdd0100c0cb9e2a25ca0badf"],["/archives/page/3/index.html","ce9229e80005ddef1ccc29051c0a8096"],["/archives/page/4/index.html","27993f55c18cbb1eca09a251fb1ff8c6"],["/archives/page/5/index.html","3cd08f9ae4863f9b5e090c918839f7fa"],["/archives/page/6/index.html","70ed4c4a0d08f14982302f9292e3dab3"],["/archives/page/7/index.html","ffccf43bae0c5c2ceb0eb3c8ca81e499"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","c57f3431766efe9afebefcbca4f457fa"],["/bao-guan-qin-zhan/index.html","154615652ca07c51140f2584117267a4"],["/bao-li-yu-qu-cai-qiang-jie/index.html","17a583cfe734d24b27c4b7108c33f8db"],["/bei-dai-li-ren-sang/index.html","24b3204e45a1a9915a9334e9b8f042c8"],["/books/index.html","68855d3e18bb4aa27b3a6d22f68a3bbf"],["/categories/Blog/index.html","b8a0e518e2b2800fbaf61600cd6a4e6c"],["/categories/Blog/page/2/index.html","2628bd9ba95b0d77de406a1ae11d96bd"],["/categories/Blog/page/3/index.html","061e5bae999afc2294a95f63ddf3841e"],["/categories/Blog/page/4/index.html","6c0fbd7c1f8b4c3461b19cc6ad681774"],["/categories/index.html","4e62ac1980b42f155adb575b32f303de"],["/categories/法学/index.html","fe628f6bd8a3eda648a34dd4d61b1e35"],["/categories/法学/page/2/index.html","715307513fc6f22bd8c15b6bfeab9e8e"],["/categories/法学/page/3/index.html","1e2a2e471300f657db4db21a1ea1fb4c"],["/categories/精彩分享/index.html","05250e95a693ae162c436e5696822b03"],["/cclisence/index.html","0c485b13ffba691aa46a74270382e936"],["/cetrain-issues-iv-for-company-law/index.html","d4d5c3a7cfb9bea58cb8bb6d0d075792"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","1d68606116058dd391a5144ad1d2915c"],["/cs-hubei-2017/index.html","f43f6e195f768ab7558d899ab43d7bc5"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","6368f0897eda613c684e469defe97532"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","92087a04134c7e450ac5dbe903897bc2"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","c4d06256beda447385dc04a232ac3b13"],["/due-pin-workflow/index.html","023021b82fdc44dcc0ac141f016754b7"],["/duo-ci-zha-pian-shu-e/index.html","1807139481c085af54d62be987e0cb8f"],["/expert/index.html","5373fc482b69d5b520ac47d9d426655e"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","34d28d2f7bbbfac98a6cd7a2bbf1119d"],["/google3756ddc34336b7b9.html","7736241ec30c4a1beffe1a005b03e1db"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","ae4ddafd48024f9ff9a9b06d10989fe5"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","5062f575db32de75a3e42ba6ff022019"],["/hustlaw13/index.html","5dac272cf03f76c81677204ea4581337"],["/hustlaw14/index.html","46a02419a6b45b14651c907da0b84543"],["/hustlaw15/index.html","139004cb4e2ef3e270de6119748470c1"],["/hustlaw16/index.html","ea8f853ea16912defef14642e3efd109"],["/icloud-terms/index.html","a5d23795ae4502884a4bce938ba72c31"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","59c7caca44b6c63d7152cd97374e400f"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","e2bbaabb5f5be4ff60481427ba202b55"],["/jdsnk/index.html","dd2c7f3b01d54e14566604e6ecba4dff"],["/jian-qiao-fen-xi/index.html","2ec1a576186ca44eb2d9a172897791c7"],["/jianguoyun-keepass/index.html","83c11c736f991f5fa9b64078c08a3a73"],["/jin-qian-bu-neng-mai-shi-me/index.html","75d1418432bf106f362ab63c41a65db1"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","3fe34c2bbf6cb72bf5078c12f486e53f"],["/latex-yu-lun-wen-pai-ban/index.html","81def5c1dc6b64a938615b30b642ac04"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","e5005cbcd8a829a1f29d16b7991abd54"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","e4cafa7ddab6c8fb15eb796263076748"],["/luan-dan-20181116/index.html","943afe9b8c638a149a546b2c1a361fef"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","a7051ea56812766916ff851f711d04a4"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","07a83670c530039d62e7565088c5fd26"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","226aae25cd52908f48a3eb82d0448a64"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","f23e490422814817dab50b14fe02e0dd"],["/opoo-zhe-teng/index.html","4f8d0b5070d143e8598b3329f0cab4e0"],["/others-00s/index.html","13a9cad9654553a591438d218d1a76e2"],["/page/2/index.html","1b3b2bea50fec2c8ff16fbb7abe58227"],["/page/3/index.html","92f983291d4e0bcdfb8933a0476a4443"],["/page/4/index.html","cf5a210a077171dc1533e3cd9c39d792"],["/page/5/index.html","c4ddd7dc410d8e4bbd7acc3e2d24ee19"],["/page/6/index.html","0b9745a9181b7986c344955896249770"],["/pan-gu-zhi-bai/index.html","c674fbc4560f7542663166ba33948f6d"],["/posner-homosexual/index.html","1737942f7eaea75da46a05363716df21"],["/qxpj/index.html","7a6b3e4fa16eb4408e1e769747c6c3fb"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","78e2b5ebd6396ef281f211c19aeea7c3"],["/shuang-pin-vs-quan-pin/index.html","f098ccada37dbfb5afd4147c30494431"],["/software-reverse-engineering/index.html","fde45efa0d3cae9c31e5f6c996fac484"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","710ee20a33432452b4a494bc9f2c4f17"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","733a554e2f6479cc51ae2bca65a998c9"],["/sw-register.js","2f218545b28632bbda7678fb32ca1059"],["/tags/2017/index.html","6ae65d6a1a1943ced2515c2675ad1069"],["/tags/APP/index.html","218645467ac9a287bbca4c4c506af650"],["/tags/Apple/index.html","a2a41844a854796bbe4993c43cb11489"],["/tags/AppleScript/index.html","c543b3cee322da15587791b72e4dcafb"],["/tags/Due/index.html","1a8341fc08dcccdbe9e157100b8b2364"],["/tags/HUST/index.html","cc4bc70b1686b34c6628312251b551a2"],["/tags/Homebrew/index.html","4f1ba750524b321099ce63b12248f778"],["/tags/KeePass/index.html","aa5eaeab179968906364070e3e252599"],["/tags/LaTeX/index.html","d0d11fd0030f751dd4440ba44d785e3b"],["/tags/Namesilo/index.html","463c19f0e00491d65894954f2991e1ed"],["/tags/OpooPress/index.html","b076c07bc9b7ff646abf6b5a231507b4"],["/tags/PDF/index.html","717108f2e8726f1d80cd48dda7b9504c"],["/tags/Posner/index.html","a49d350a7b676c3db8c3f788f2bee467"],["/tags/Python/index.html","6418b54e3e648a2cbe4b391341e802be"],["/tags/Rime/index.html","67d92d1ade409be59fcf840a2fde7c1c"],["/tags/Typecho/index.html","bc10a3c1b4af1b6e06a12a00f226dd31"],["/tags/Workflow/index.html","8ecf08b96dc53fdad642f19dffa0fbb9"],["/tags/cc协议/index.html","47c90f7e1dc64d420ae962f3eaf64ecc"],["/tags/iCloud/index.html","48a2635905f4b7ecd0b2b53dc7bb9dab"],["/tags/iOS/index.html","aca5f4141ee4115abc85c338e89aedec"],["/tags/index-1.html","8b036e105ad5a50be7f23df149bace62"],["/tags/index.html","8b036e105ad5a50be7f23df149bace62"],["/tags/logo/index.html","774adc15f8bbdb2e6166f6b2dd722ba3"],["/tags/macOS/index.html","a7a5a717d9bd709287a8b8e89ed34bbd"],["/tags/vpsmate/index.html","0a0c82fdc5790dfd9a5e03b77f73253d"],["/tags/乱弹/index.html","0c0ccf2c51318665b70ca386169c8924"],["/tags/二倍工资/index.html","3ac8eee23f530623c0cba36adfd3b8c3"],["/tags/二维码/index.html","c4c12ae26228f5ce7dbcab80eeb28568"],["/tags/云盘/index.html","183121db806edc66629556e4b17be8b9"],["/tags/交通事故/index.html","e8e5e84518f166de8133aa60b852970e"],["/tags/产假/index.html","50a9f58c9a136c1adeab71687301eee6"],["/tags/人身损害赔偿/index.html","d87b8f665763d954cf1e0e439a20eed9"],["/tags/代理权/index.html","67eaaf2724a5798d9e534131fe6618f1"],["/tags/优先受偿权/index.html","7967cd3d75014a7be991656c0a21091c"],["/tags/作品/index.html","30b1c69057c15ca20e8e07ad1e72eb24"],["/tags/侵占罪/index.html","6098d6ba7a98b27a0455c8926af47f62"],["/tags/儿童权利/index.html","85c72b4b025611fc29621725873b2ad8"],["/tags/公司法/index.html","80966ed4b773a1d9a80d04135e6a85e1"],["/tags/共同财产/index.html","e48f2a8f08d72c5253ee7b3369ecec22"],["/tags/刑法/index.html","71c792cac016851a900f3661a54234fe"],["/tags/劳动关系/index.html","b1204fc3a12f1af2fae00488a4ddb982"],["/tags/劳动合同法/index.html","27e633f92bce730ef8f93e5b024edec4"],["/tags/劳动法/index.html","189fda5b5cb83eefafbfaf3921889bcd"],["/tags/华中科技大学/index.html","030c4b824cdc714e5f8ecfb74d918fb0"],["/tags/华中科技大学法学院/index.html","52e80d3349c51af35d97617ca1abb083"],["/tags/危险犯/index.html","35cd1a6d9b90ea9aa12e0986aa1ed1b2"],["/tags/反向工程/index.html","44b184a0c2a9f4c312bcfb315c45cd75"],["/tags/发行权/index.html","ff94b9841a4893431f5704b44c1dc427"],["/tags/司法解释/index.html","533bd7a6103e108fc37a22daf145ec3a"],["/tags/司法鉴定/index.html","5762c7cc62b84220af34d2605fd9683b"],["/tags/合同主要义务/index.html","5afe88bb917d33a4b75e1b01e545e28c"],["/tags/合同法/index.html","7b12a5cad30c197cf7fe465692b48ae2"],["/tags/合同附随义务/index.html","ad62fef0367b1ee305440d9d014ab955"],["/tags/合理使用/index.html","b7d8160feb6fd6c1bf0c66a802833f36"],["/tags/坚果云/index.html","a109d0f649502152b451450a56273aa4"],["/tags/域名/index.html","23b484b00891f4a9b388488c91a6090b"],["/tags/实害犯/index.html","746ee077152fd2dc828e6619150906c4"],["/tags/密码管理/index.html","9af977e32bebd743c0edc1c9a3c23282"],["/tags/工资/index.html","5e32f66c8359ef6f34bbee65a158da4f"],["/tags/待履行合同解除权/index.html","3d3d7ad28066ec2b7051cab5507cfb17"],["/tags/律师收费/index.html","49700c6dc46cd731f74f3fa31085271a"],["/tags/思想表达二分法/index.html","8d05a2017be7028a997dde5a268dca11"],["/tags/思维导图/index.html","bd4ece299f20527ab0849c7c613e61d3"],["/tags/成本收益/index.html","25001b89383db67b2a0afc86ca88a315"],["/tags/成长/index.html","e8081340b64640220ace6a0b8d4cb2a0"],["/tags/技术措施/index.html","e19e809ed78ff22d2fbc4503928ae666"],["/tags/抢劫罪/index.html","38556b3659c4dfd15179255c9a30216e"],["/tags/抵销权/index.html","b66e7c8211e97fe09f68a3c7bd9079e1"],["/tags/排版/index.html","f8a56377a859676a3c034b2c9b68a1e9"],["/tags/插件/index.html","13d30e8b5918ec95a6205b66bb392f1e"],["/tags/搬瓦工/index.html","45cade5bd09caaa37433717550dce950"],["/tags/故意伤害罪/index.html","6d5ac79437e0dc281d2196e9d8bee2ac"],["/tags/效率工具/index.html","14a1586454426c898b151584a27f85c6"],["/tags/教育/index.html","eb1b8f54bff3fbe3ba929f0cc9fc9f8e"],["/tags/无固定期限劳动合同/index.html","61210c02d1f24e1683d4e5107f24bd8c"],["/tags/最低工资/index.html","5ae4f60661981276be3981b285fbbc7b"],["/tags/最高院/index.html","fafb3c7872fdbe90c0695cc2c61bf910"],["/tags/武汉市/index.html","daf7c00cc6c4e5c9c95c3f189fecdff4"],["/tags/民事行为能力/index.html","568295bb31847a5335178f41550f8827"],["/tags/民法/index.html","1cee64e165d193e765630941bba72980"],["/tags/汉字/index.html","d333d2db52ce231a04825f9238c645ec"],["/tags/法学/index.html","57b3a5550c386a9a306d1521bb8d7023"],["/tags/法定许可/index.html","a7eeda7c68d6c0236892677ed06ba962"],["/tags/法律/index.html","d9743e9bf1556d0c52aa0b956a7d1707"],["/tags/法律援助/index.html","660e4192c7c996ef17b883fc9130c7ac"],["/tags/法律经济学/index.html","3550d6c33cf367a019ee6ba5bfd6d4a5"],["/tags/消费者/index.html","5f1897d3c400bc66edbc13075a6c5228"],["/tags/湖北省/index.html","f220c116b74638cbbb79d42157359281"],["/tags/熟人社会/index.html","585856961ef797e3a12bce38f65efacc"],["/tags/物权法/index.html","4998f850b32d9e840cb2166a48c5b465"],["/tags/用工之日/index.html","43969fd97f9c285e95c6c19c6f48ae46"],["/tags/电影/index.html","b88377adf2ea6037fb0dafca62989481"],["/tags/男女平等/index.html","31488f72e1c70b98e9e92263cfe58530"],["/tags/知乎/index.html","0a938787a167d09d25440a17f0732998"],["/tags/知识产权/index.html","b56b52afb3f47d09ca82e663d58b1304"],["/tags/知识产权法/index.html","e446ee3a085ae985cf02120a2815734f"],["/tags/破产法/index.html","d74153ea68533565f933398ab25d41b8"],["/tags/破产管理人/index.html","7da155a58eea519df462011924207f23"],["/tags/社会责任/index.html","45ed4b4afa595eb281ecf9f05851e8d0"],["/tags/社会问题/index.html","157404ef9c88d12b7c278f9825a72826"],["/tags/经济学/index.html","525bb9b2ce2a5499921601d4a4d513eb"],["/tags/结果犯/index.html","52fb884b8115fe0c2c52aec47e4de6d6"],["/tags/缺席判决/index.html","b9b6e852bbfbd8c0903d5333e966b20a"],["/tags/考研真题/index.html","f533828d169225bb87421aecb1de2730"],["/tags/著作权/index.html","d787be072a2f998999f2e5443b4bfa06"],["/tags/著作权法/index.html","ed0e2a1cc4e264c0fba69b6d514b7904"],["/tags/行为犯/index.html","2c69d2b54b86d324a62cc29b8684e3b5"],["/tags/行政不作为/index.html","3b9874edeba429d60ea43f6156c07deb"],["/tags/行政救济/index.html","93ec2e8c8e34e9489bd61e389cdcdfae"],["/tags/行政法/index.html","c9c5f95d6c11bf7fdbe230c61617ff06"],["/tags/装饰装修补偿/index.html","e964b40d136921f9a7054e6e06beddb6"],["/tags/观后感/index.html","9eedc83faa5303f5d3efa0dbb835fa6b"],["/tags/观念交付/index.html","e1a644d13b1aa4902909b11806c4437e"],["/tags/计算机软件/index.html","09bce3a2007dfff93fb9acdbf28eac3c"],["/tags/认知科学/index.html","d3ebe7c999edff711c72bfc3f1a11922"],["/tags/论文/index.html","b7d091cd6ede6a6cc44b2897ab40f77b"],["/tags/诈骗罪/index.html","2625367ea59ad2d33bf593a40625a578"],["/tags/读书笔记/index.html","79e2f2588c4d1cd35f8bf6229f2db9ae"],["/tags/赔偿标准/index.html","9ef50cd691a59b0af8adbd304479adc4"],["/tags/输入法/index.html","13e5706994a12aa6885cebe034fb9913"],["/tags/违约责任/index.html","d4ada7fd269c4b9bda361eaca3a64cd4"],["/tags/违约金/index.html","62af2d79ca916f4567b01f41f05034f3"],["/tags/释明权/index.html","7560e3ef426b865c46ed3fc80dcb1915"],["/tags/隐私/index.html","f4ed186728a30b1663e76b61f739a7fe"],["/tai-er-gu-shang/index.html","eb4c8b05fd3e4ea92d0b3fe0d2ea9d20"],["/timeline/index.html","025a960b7921b0ce1ba1f34f8688d300"],["/vcard-yu-er-wei-ma-ming-pian/index.html","efa566026fb1feda85206baa8dfabcca"],["/webfont-yu-zhe-zuo-quan/index.html","6f51d3c4e3228daf268518c01e8045ca"],["/wei-ji-hou-ban-quan/index.html","701ceb40bc77218fe3a6e598b045cf09"],["/weixianfan/index.html","dbd37dc1a28d7d67a5e6c8439c3c38e9"],["/wo-de-macos-he-ios-she-zhi/index.html","a318bd088d31100359b0255d9dbb61d3"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","3ee7547158f4a01a0232ddb7f6efb332"],["/work-rules-mindmap/index.html","55f46e9ae67b0954e612fe64faca7c6b"],["/wu-han-chan-jia-shi-duo-jiu/index.html","91367d7ae041fc1a3c09caa4e7e26ca5"],["/xzlfbzw/index.html","3590789d3efee135952f9703b9af5e40"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","f7b12ea7b6400f5fc73ceadadb143f7c"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","6ecad1058285d400edcf29a548cdd09a"],["/yu-ming-zhuan-yi/index.html","6e1010eeb22bc6b741245072ad2ac827"],["/zhetengb/index.html","b9f0936e0ed4f503b0c6ae5bc898d93b"],["/zzq/index.html","9cfff6f4b2508fe66f9687fba7445c79"]];
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
