/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","e83980b3bbe562ce88370549965aae43"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","1440c5248b2ebeb3544b24348541efac"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","be0c4eab8839d95627f0064f6727d5f7"],["/PGP/index.html","b7b3b26b4279946995c8b45c7f1a0819"],["/about/index.html","ea7dbb366ea33520a1ba2c18c4bf2c5a"],["/applescript-jiao-ben-liang-ge-ban/index.html","d28b98f7bc20cec807b999e0cd778660"],["/archives/2014/07/index.html","1a898d7668800e9181821be69846459f"],["/archives/2014/08/index.html","43e2488cc2741a5f93f292c800875703"],["/archives/2014/09/index.html","ec03c18ba711286b7345c531a6c6fc55"],["/archives/2014/10/index.html","15f98623162d62081d59a358ecb3d8ac"],["/archives/2014/index.html","f55c1d723d271d2b8e53781adc5f2ee0"],["/archives/2014/page/2/index.html","66d89afdb52b818a48538a76b90f7ca6"],["/archives/2015/01/index.html","f7ba1727ed146685f60ba0c6f8eecca5"],["/archives/2015/07/index.html","a601b0df81bb9a38f90cb792314f144d"],["/archives/2015/10/index.html","e0718e2cf1197b0f0fb736f336231d98"],["/archives/2015/12/index.html","f3c047abf4fc3fa7fac0fe080155d388"],["/archives/2015/index.html","0efc01c85fe442096c3a06651ce00c75"],["/archives/2016/04/index.html","6dd5b384551ade60e4876aa265c139c4"],["/archives/2016/05/index.html","5e1afe655cf7d6e4f00e137a335f89eb"],["/archives/2016/index.html","3be53523d9405a6d3b2d5d6609c21255"],["/archives/2017/01/index.html","d23b13ad2103acf302ea7d875e8eecc2"],["/archives/2017/02/index.html","fef3cbe32cff21aa6d9fb0ba5223934c"],["/archives/2017/03/index.html","af32aec10f80ad970392be883afbeb18"],["/archives/2017/05/index.html","de5d7e06da65084c875d202160ce880d"],["/archives/2017/07/index.html","a41ce61087165d417f4d978d0f09ccd0"],["/archives/2017/08/index.html","a1c14b34021b8e6ae7c6668d6fcf5c6a"],["/archives/2017/10/index.html","03514cd4589b89126f5b83668946cbfe"],["/archives/2017/index.html","f5120b446403d1415c8ed2443919cf77"],["/archives/2017/page/2/index.html","9bc9024de2ba661890bc8bdf4ba3dedd"],["/archives/2018/01/index.html","c1bb5d628174a36ec80ea8652282813f"],["/archives/2018/04/index.html","1c0657fde7b9d5306761713ec66b9c67"],["/archives/2018/05/index.html","139b8e947447eb6903b6dfebe8244872"],["/archives/2018/06/index.html","ea49e35a27cc446531898522c9eeb515"],["/archives/2018/07/index.html","0a37cb6b13e8c915162eb003b81e733d"],["/archives/2018/08/index.html","adb63d5b99d23ee638a64647bb4212b3"],["/archives/2018/09/index.html","0a3437e067700e0c3e19c8bf5b7961ea"],["/archives/2018/10/index.html","808d63aed1d5a7a8fd92242eebc3065c"],["/archives/2018/11/index.html","d1d4916594d7b988e5aebbb8289dd73f"],["/archives/2018/12/index.html","c4a4a1381c759c8c03872350e8cf6a70"],["/archives/2018/index.html","4f075905cd8fc910b6ff9dcb4c1dc227"],["/archives/2018/page/2/index.html","8685c9af3ee58b13c31fed877614d9a5"],["/archives/2018/page/3/index.html","de1746b4fd7425e7fd7857725dc08aee"],["/archives/2019/03/index.html","982f92e6c9142be418040f922c8fdb80"],["/archives/2019/04/index.html","af16ff2c71ba9ec8567d33c93b6ad931"],["/archives/2019/05/index.html","e6a558c009fb377620fdb4076aa4329d"],["/archives/2019/index.html","b0c8b6a28e033e426728c210d9c1a903"],["/archives/2020/02/index.html","9dd62566f77aa63a8191342a94c8b4a8"],["/archives/2020/index.html","fd61e6b2d96061088da4297ce4685473"],["/archives/index.html","4582ea28ce99e39a794f41d808f79507"],["/archives/page/2/index.html","eabaa40ccd17f553bd3c09111097babc"],["/archives/page/3/index.html","179f52e106a9c7c4bcd81e5749a61aec"],["/archives/page/4/index.html","380099725cd7e627074c520153603e20"],["/archives/page/5/index.html","e8ec63f54b2767bda2799ee1e7fb67a3"],["/archives/page/6/index.html","9b35636aec863336237f24d0f840b00e"],["/archives/page/7/index.html","cb6c68160cad8132d414f41a4e7726a8"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","74b35971850b238c2093fcfcfb5efdcf"],["/bao-guan-qin-zhan/index.html","2dba2980f323a60a3c2f20e748ea2af8"],["/bao-li-yu-qu-cai-qiang-jie/index.html","506ca7d75f23c0935655825d687a69ca"],["/bei-dai-li-ren-sang/index.html","cbd4a225c2e75215b9dcd0fce3a4eebc"],["/books/index.html","f1056712832c632d7c3066ce81c4d224"],["/categories/Blog/index.html","6e77610343bd21e04b066bd892f1cd14"],["/categories/Blog/page/2/index.html","94a21763465828d030bb39d54690f8fc"],["/categories/Blog/page/3/index.html","562c906de5cc568ee68aa4acc6333c1a"],["/categories/Blog/page/4/index.html","8e5298bc3e5e49a1233f24fb62a639de"],["/categories/index.html","6f27f09c1af9adb61478ba4ce5e71889"],["/categories/法学/index.html","5ad01bf11e41b62efebd31eefd8530b3"],["/categories/法学/page/2/index.html","96464d89cc7db47ae9afd1390c5c4b7e"],["/categories/法学/page/3/index.html","e9dfcd5c01e42a8a6aaf058c179abac4"],["/categories/精彩分享/index.html","10580dc180213ae1687ed0487d205922"],["/cclisence/index.html","fd5beed755e6da95cfbf05f8532b1f3a"],["/cetrain-issues-iv-for-company-law/index.html","60cfabc34dfc36c616a5e1894c55b49f"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","d0e7163e531feecf969c020602ca4653"],["/cs-hubei-2017/index.html","eefc645cd90ebfaaf6f8ffd1041ad5c9"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","2dce5d960c347c0ed88b5c9f21668f10"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","af4f41790d3f7dfa6eee4b442b0a0cea"],["/due-pin-workflow/index.html","fee4c540c99f587c341bf31bac29be43"],["/duo-ci-zha-pian-shu-e/index.html","e64d86aaab1d16aefae28391ea316cc9"],["/expert/index.html","a663e45f20941567cdabab50868a44cf"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","93de8462cbf91564693b4e22c080e7e1"],["/google3756ddc34336b7b9.html","d594f0429ae431484bb2a11fdad1eab8"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","975358afab847de4e3efb1823766bc2b"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","10793b138fe335c5a91890ec18846e94"],["/hustlaw13/index.html","4042d226ab237952dbc0941f012dcf25"],["/hustlaw14/index.html","77fc80265f9d9d1f28bf303e29cc6bef"],["/hustlaw15/index.html","5ca8650825b3f4325691da746f177dd8"],["/hustlaw16/index.html","7cd98059891fb1f6b4ae0e4985bde002"],["/icloud-terms/index.html","a912127be07e546c8f738c1bd041b26c"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","3de2b3ee4b4082e9a70cb46ec35c9ee2"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","d4eb325477404a3b96a7305cca5e43ca"],["/jdsnk/index.html","b988831a17a70af725ae5332d2eb3376"],["/jian-qiao-fen-xi/index.html","58758c9719fb3ceb1130417c880c0ca4"],["/jianguoyun-keepass/index.html","d57d2c5c8d3133612cc182b57b8383ad"],["/jin-qian-bu-neng-mai-shi-me/index.html","5af2e37e039a4e6a2dc84530d30830ca"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","0ac097c09b09e21cc0866bc796959fb2"],["/latex-times-new-roman/index.html","f682e489fb83214cc1ae446c86528106"],["/latex-yu-lun-wen-pai-ban/index.html","39956e9b0777b6c24358d73669e28cdb"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","a2cc3b4f6ec265bc20f13a76be8cdbe9"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","50a30d309c67979432073c52580c8e3e"],["/luan-dan-20181116/index.html","abfa49cc1eaac4507d318e75829e741f"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","35d927e8120d952d628d59c40d3c19e0"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","833bb5bfe5d957e7f718d233dbdfe0b4"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","c505c5753da5f184e7ec1215dec7f59f"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","078c85eee84db4183fdc7add1b02677f"],["/opoo-zhe-teng/index.html","eccfe7674cc88ae20adb7d2d0b6ae3ae"],["/others-00s/index.html","dce109e1092beb13b60642cecc989cd5"],["/page/2/index.html","ec3b6478d05922461c71dca480a75636"],["/page/3/index.html","8d5a727793bf685dcffea80b8e1b8f31"],["/page/4/index.html","cb056e80fc10cf46b40f868cbe12ed01"],["/page/5/index.html","fbf6dffef6d0f32f1aecbc5d932e82e0"],["/page/6/index.html","77c2b962f41b2babb93790b38984508f"],["/pan-gu-zhi-bai/index.html","0545e94a1010544e42a0609e671ba4f7"],["/posner-homosexual/index.html","74abebf57c4e3ddfe273ddcb11da44ea"],["/qxpj/index.html","c647ac7ffc330a0367ad88f798d7669f"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","86cab4ab08fe9e1786ee79461243587b"],["/shuang-pin-vs-quan-pin/index.html","6caff7b323b7b90369645d80b5a1b8b4"],["/software-reverse-engineering/index.html","f9a4a9b288c443280a24d8bcdf3378c6"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","affb9dc00c7955f3d535bbcf7bec327d"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","48eede625f9490bd9f6b2f429b1d49b9"],["/sw-register.js","809b2315b9fcfe22a44679601bf8f77a"],["/tags/2017/index.html","25b5e7e665c66f3d3c157a0fb6555562"],["/tags/APP/index.html","b8d0bb1701a08b541cd1a754ed1a9a50"],["/tags/Apple/index.html","d5467cbc3cf094eb53a291dec12e3975"],["/tags/AppleScript/index.html","2acab8f15ea93b8adefab1ccc4bd5a8c"],["/tags/Due/index.html","bc76f8e47c212dd97227d62f3ee20c4c"],["/tags/HUST/index.html","356b779b814b164590eead8b6e21c975"],["/tags/Homebrew/index.html","79b0bed36a791e98ab45cf749b8865cb"],["/tags/KeePass/index.html","642ea3135272979de2e4c64588769cd4"],["/tags/LaTeX/index.html","1b767ec940baa2c35c8cbda472c79646"],["/tags/Namesilo/index.html","32fc1dff54e10dfee77776527d008d1f"],["/tags/OpooPress/index.html","53323bc8047bc62e11e05af6354e76ed"],["/tags/PDF/index.html","2d6de5572c98372b740d63afc2da4a8a"],["/tags/Posner/index.html","442e4213b4dbd5051a10723560d7a252"],["/tags/Python/index.html","4b3e16dcfd01647c6f271d0dac16fd80"],["/tags/Rime/index.html","9a66907232a179683d2eb8174d7846fa"],["/tags/Typecho/index.html","c480932f71a06b03c38c3dee03985bb8"],["/tags/Workflow/index.html","9ac76cac044e55b2a6fd9e0f9cd0a9b1"],["/tags/cc协议/index.html","bd95cdbee20c3467f911cc079eb93c5e"],["/tags/iCloud/index.html","c21496fd8105880cfd80f40c823ddcdf"],["/tags/iOS/index.html","95c32bfa14f09b988e5ef42c569d8af2"],["/tags/index-1.html","fe66e1a10a69398c6bd597981e6ebbb0"],["/tags/index.html","fe66e1a10a69398c6bd597981e6ebbb0"],["/tags/logo/index.html","f1ec8e69d71b56b865e989269cf65bf3"],["/tags/macOS/index.html","c3995883349de080c94584ffe685e152"],["/tags/vpsmate/index.html","1702fb2c07a2e87f4e85ed0f0169dc1e"],["/tags/乱弹/index.html","282e6fd325370865d19cd2a11a950f33"],["/tags/二倍工资/index.html","8fed4e8e9f2f7959ff6deb757946344e"],["/tags/二维码/index.html","b5d5c5d8281a8f8a259af3bbd74a8bff"],["/tags/云盘/index.html","e7157e8eccf6faa3cec495dc1164447d"],["/tags/交通事故/index.html","438752324ef39e5ea8296fc4ef6d3435"],["/tags/产假/index.html","18786304f113c3768ca9afc7c805ab2a"],["/tags/人身损害赔偿/index.html","378a137a1cca27cf4ce2725742253c17"],["/tags/代理权/index.html","b4552bd7d1ed62bf4ab921c8b60d36c5"],["/tags/优先受偿权/index.html","29dd6904cbc0389be99749a6658d348c"],["/tags/作品/index.html","2c6242ffcc5f7b1ef194e1f26d5e1d04"],["/tags/侵占罪/index.html","572a2f0252058be0ff7e9cd2488201bf"],["/tags/儿童权利/index.html","a82689dc7164f364fbe076128da495e8"],["/tags/公司法/index.html","24e9b99cb3e9b39bc0ca314cccd37afd"],["/tags/共同财产/index.html","df149aa1cf9b865d7e29919421032a46"],["/tags/刑法/index.html","b71efa1a119851412ad337498d85fe36"],["/tags/劳动关系/index.html","92e59aa6e5dc945866224c9b8e6a7dd0"],["/tags/劳动合同法/index.html","45f516c16bfa7a568c43734b9912c050"],["/tags/劳动法/index.html","3e79364223f80dabf494618a063680c0"],["/tags/华中科技大学/index.html","3b58404a0f406981032052944328ce0d"],["/tags/华中科技大学法学院/index.html","1044be312f3c3c005c89d3e0d7eac0d0"],["/tags/危险犯/index.html","adadbccee572c0e3b3d30e1b7a08c812"],["/tags/反向工程/index.html","49737b7691fc9de8dd7b9abab5ddc0fd"],["/tags/发行权/index.html","ca96d31359e4af5c30c5bfd9021256b6"],["/tags/司法解释/index.html","be586375080f0e9b91f0f8aaae467e5e"],["/tags/司法鉴定/index.html","af83d7145585b0c577e8ca9a3f835c7c"],["/tags/合同主要义务/index.html","62dc55b182936cd1f6614f54169b66af"],["/tags/合同法/index.html","d085b3346d84a8bfe2bea66ee3b1333d"],["/tags/合同附随义务/index.html","9996b4e2b7b2d82f5a749d0a955dbf7a"],["/tags/合理使用/index.html","0678744c2b5a040f95ff98235ec22c5f"],["/tags/坚果云/index.html","756ad53e41e72c1c4d385d136509529f"],["/tags/域名/index.html","8218f302ca689aa922d2c24b3646dbf9"],["/tags/字体/index.html","0331216af9e9cbecaad355a1e2bde936"],["/tags/实害犯/index.html","ba39e8de306ad46fe95a3dbb25f24de0"],["/tags/密码管理/index.html","b681335f7c2975f0da6a97854f56172d"],["/tags/工资/index.html","9614f2dfd74a7b3ea5608cc505b52917"],["/tags/待履行合同解除权/index.html","15c7b40d8d86e23b7ef2dcfbc306962b"],["/tags/律师收费/index.html","e27fb599e03e18832a6f61b137ccacde"],["/tags/思想表达二分法/index.html","577927c83b4b3023742cff4db262bc25"],["/tags/思维导图/index.html","d072e43ff5e4e4625372ae9e28dfde40"],["/tags/成本收益/index.html","14e12e9257cb91c7a9d94f25df0e3000"],["/tags/成长/index.html","9e50640dee34362883f2ffaafa0521a0"],["/tags/技术措施/index.html","cdd321dafdc851aa17d91f66c489d452"],["/tags/抢劫罪/index.html","3e9ff1a3effce6f4a520f3192873bf62"],["/tags/抵销权/index.html","523585ccba6de69ff9b8d60735a79501"],["/tags/排版/index.html","bb6ac333d106240b0eed1d4b552572a8"],["/tags/插件/index.html","8c3df8b8f4c0d84d745ecfda9a4b596f"],["/tags/搬瓦工/index.html","234637f5b1244e5211c108007306eb71"],["/tags/故意伤害罪/index.html","6e02a08f2355545b00b17dca1408c8d9"],["/tags/效率工具/index.html","d73fdd9b782f9cf43a48e9ef54f349d5"],["/tags/教育/index.html","bf061dd7226638df0ff00131ffdbcf4f"],["/tags/无固定期限劳动合同/index.html","ae7c5db90e24d95a5cbad2a89272cad8"],["/tags/最低工资/index.html","39b8a5aecffd8daad1b98f014156af4e"],["/tags/最高院/index.html","d4d2ba12583f80ab8727fa3c88739268"],["/tags/武汉市/index.html","e743e3ead4d464a2d78c7e6e8493ce9b"],["/tags/民事行为能力/index.html","ad0e2fe662f53614ddebff9af2d3eb97"],["/tags/民法/index.html","615fa96a0f303e9f2a0c5fc14162fece"],["/tags/汉字/index.html","fe02a5c64dd05a40b2e4363f5bf4a6be"],["/tags/法学/index.html","c64a2373ea812f4f7afffff53ad15c5b"],["/tags/法定许可/index.html","9ef24646ebcc5914abae0dbadbad86c8"],["/tags/法律/index.html","4184685165e442b4cf240b0845df54d9"],["/tags/法律援助/index.html","6efadd9d8e9245b876d5cfef3db7baa5"],["/tags/法律经济学/index.html","406c5daffe5359bdc603f3f69caaf9fd"],["/tags/消费者/index.html","032b331f4bf7342006630ddddb2a7476"],["/tags/湖北省/index.html","7d8ee7b888a87677e2ea7bd6f093de64"],["/tags/熟人社会/index.html","53d331572beb8fb930f8ef4d8923af58"],["/tags/物权法/index.html","7675e0881151260cec46b041caf4e921"],["/tags/用工之日/index.html","9d56cbd3e34cb9ead76329a6c99a0236"],["/tags/电影/index.html","bec4df07d5b4bab37111482cf7ffa8b2"],["/tags/男女平等/index.html","0a6962bd2e0c654274817e320c5a634f"],["/tags/知乎/index.html","c54f61265da710c4e9383b5e5bc14bdd"],["/tags/知识产权/index.html","ef275690155ee51ea88e9d59bb3dc1e4"],["/tags/知识产权法/index.html","e78a92e125b17a38ab617602440d245a"],["/tags/破产法/index.html","6af4a824e1cc5168d8535b5c4b66e028"],["/tags/破产管理人/index.html","60428d0e7cd897aa876612d41b7a8e39"],["/tags/社会责任/index.html","1fb8a4a142739344b10470d084d6759a"],["/tags/社会问题/index.html","238f0906944c9830b093ee5a4b5262d6"],["/tags/经济学/index.html","ecb0b1b98e703fc78fbf5d61a9ef5d9e"],["/tags/结果犯/index.html","38002912cee0a2b22e75853a7b09b5f6"],["/tags/缺席判决/index.html","bec6bfbb423a9d618e59e3cbdc4f8592"],["/tags/考研真题/index.html","2643e441e1ec0eb4e71c28361e0abda3"],["/tags/著作权/index.html","bc7bc54daedc369b67aa3df239eeaf92"],["/tags/著作权法/index.html","9d4279440a1d101342d57c057b55db7f"],["/tags/行为犯/index.html","82cf0e98bc780799f6642e1a12e3b3c7"],["/tags/行政不作为/index.html","50adc7c0767bc6fdb4cb709a8e780ac0"],["/tags/行政救济/index.html","9c31e7d9c5810e6266ee2db6c17b6a19"],["/tags/行政法/index.html","1a3252ea77ce22b9cf8834f8d94bd1bf"],["/tags/装饰装修补偿/index.html","f57acfff0f7e2acfe5953c0a6d79477a"],["/tags/观后感/index.html","b6eee701736d75fd4ba9dc52f72d4dba"],["/tags/观念交付/index.html","686c4fb10fd434252d1b804828eba38f"],["/tags/计算机软件/index.html","c800ea80a039f35770cfbaf1afc08c29"],["/tags/认知科学/index.html","ad7d0107ecf1cfba2f7ce228a81ec1e4"],["/tags/论文/index.html","59c4a54751784230fd5f2f1bcab48bf7"],["/tags/诈骗罪/index.html","c22ac593d8a6244d8cfa8bea3a52c77b"],["/tags/读书笔记/index.html","6ee428bf9b6df6b83f9100e3ecba68bd"],["/tags/赔偿标准/index.html","ce948448b98f880a74c4ef40cd45df9a"],["/tags/输入法/index.html","8e3a56faf1c3e41148849c0b19a45a3d"],["/tags/违约责任/index.html","fd18bc6b5b2f439de9217466c6ab0dcd"],["/tags/违约金/index.html","4c29c0c9593c678b1325c73587e350dc"],["/tags/释明权/index.html","b6f18c7e863ee7d22a8b3f702b0d2da7"],["/tags/隐私/index.html","1d3f852e7ea25de471cd25b73763cf7e"],["/tai-er-gu-shang/index.html","45c548399564b9d44f2e905d61aaa183"],["/timeline/index.html","f29c1fab5b89c3336de5eb2d8c261036"],["/vcard-yu-er-wei-ma-ming-pian/index.html","03819997725ea871b09c901105559949"],["/webfont-yu-zhe-zuo-quan/index.html","bf0a42a06a2ec1493b7673efc718ea74"],["/wei-ji-hou-ban-quan/index.html","5b18d631e0b29af7b50593882c8d69a4"],["/weixianfan/index.html","d2097bbde4fad8514037c474730644a5"],["/wo-de-macos-he-ios-she-zhi/index.html","05cfe309a64210bb5e96699c037befd1"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","db23615ce127f1bd2e4fd6f4f1c880ce"],["/work-rules-mindmap/index.html","365972c15144018ca4d6a55e9ce50d13"],["/wu-han-chan-jia-shi-duo-jiu/index.html","6714846ab5f45cce579e075755a965bb"],["/xzlfbzw/index.html","64d5ff19b1c2b7d1902962fad2f60a9e"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","bd70636036434375a327fe9f3fc5ca10"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","00e691e28eb86999c50762b93e60c302"],["/yu-ming-zhuan-yi/index.html","505e8f187cd95d10776dd984eb23e4a9"],["/zhetengb/index.html","256e7a64252282bb149e2ccdca9e20ce"],["/zzq/index.html","d4cf5c04ad25eea3ed195c88925fb6d6"]];
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
