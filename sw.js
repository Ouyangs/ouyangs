/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","b1e75ff98423bea549ebfa61109a04fa"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2a307f659c16b22fe0a3db17223a13b3"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","03b7c381d72b002ca056519809424193"],["/PGP/index.html","f4e09056b07f6b69375cb27fb2f28599"],["/about/index.html","344d37d63ade0d269c5835239dd55dbb"],["/applescript-jiao-ben-liang-ge-ban/index.html","8a2abcea4961379310f719777b537ef7"],["/archives/2014/07/index.html","63c155fe2fb632deedd0ab196bbfe756"],["/archives/2014/08/index.html","54008e6d1c9bcaf13da6bd3823cb218d"],["/archives/2014/09/index.html","dd53d1d4aef7ef7aa041ba16f75c3c76"],["/archives/2014/10/index.html","85780778d896336794247d0ea3312647"],["/archives/2014/index.html","4f3fbc4b8d40accf71758afa794a66d8"],["/archives/2014/page/2/index.html","b454bf4b59914bfdb6ff6e9b72efd704"],["/archives/2015/01/index.html","2797fc529448aadb358a5b34b53ef1d1"],["/archives/2015/07/index.html","511420263e7bdd61e24a6ed30e238f48"],["/archives/2015/10/index.html","60b95101119d6d4658c6a880702cbcef"],["/archives/2015/12/index.html","9418e63faa00fe7cbc4302418ef8c35c"],["/archives/2015/index.html","3e6f8561c067ade1d91bbf29244697bd"],["/archives/2016/04/index.html","f0956d14b5f2175de2ab41668f98f02a"],["/archives/2016/05/index.html","ea55713c590906a1d16f3067a22e100a"],["/archives/2016/index.html","ee129ef74a4e7e382748c15388e48ca6"],["/archives/2017/01/index.html","25e1aeaadf727d5a50ae05c57ce459ab"],["/archives/2017/02/index.html","428fcc278f0a7fa81e5cd39fe78b92f9"],["/archives/2017/03/index.html","4b1c379fedde0db8984a8db66f977160"],["/archives/2017/05/index.html","db932bb3aeb00a507dd33adafaf6c612"],["/archives/2017/07/index.html","6b333dee6b9f5a43ca733d4f8626ef85"],["/archives/2017/08/index.html","ee2bb9887be881896d3fe66326d6df92"],["/archives/2017/10/index.html","fd90c12fffcd4039b0d81246131b0d57"],["/archives/2017/index.html","5bd30126430d15ce33ac0d57f1eda182"],["/archives/2017/page/2/index.html","9cdb8a3d75c679eff22ad7056cd4655d"],["/archives/2018/01/index.html","adbdd119d7459450b6c97aac7ec6c100"],["/archives/2018/04/index.html","6cb742112346540c4f3e3f1ea7ba82e3"],["/archives/2018/05/index.html","762ed7a29de5172fba431eb1c6ffdef8"],["/archives/2018/06/index.html","b3f7ef7f04732a2709d9eee41b3372b6"],["/archives/2018/07/index.html","f7e2ff76a9136951c332da10982b4c1e"],["/archives/2018/08/index.html","eca2404d82487fb8a404671a3412f40a"],["/archives/2018/09/index.html","564625e1e3e7d962c3d9fe10f46ec8f5"],["/archives/2018/10/index.html","32ee8440df9ba3ba0bc1e06e6d18bd48"],["/archives/2018/11/index.html","67018253c430e5facde017e43cb71070"],["/archives/2018/12/index.html","b7f10c8dd5165ea79882840533852a00"],["/archives/2018/index.html","8e44c9d05c92ddea13cb08e4212ff43f"],["/archives/2018/page/2/index.html","e7be8597bdd85e7cb573b62273ae5f6a"],["/archives/2018/page/3/index.html","bfcbc7077f4a0a361cc3fd0401115cb7"],["/archives/2019/03/index.html","78e27c8e6796eb96a0f4576c33fdf566"],["/archives/2019/04/index.html","d7039189aee1519a678544e8461a2cb9"],["/archives/2019/05/index.html","02ff770d4cf8cb4523e581f81ddea31e"],["/archives/2019/index.html","b8a69d028e5354a78d794661d072bf1d"],["/archives/2020/02/index.html","2b8d3b77e45af94de643e41e593e6ec5"],["/archives/2020/index.html","5e387fbdbfd44edfa7f1c78716da4da2"],["/archives/index.html","7e6d75838f5f832956d1a0cf2371b42e"],["/archives/page/2/index.html","ffd9858de4078d9ba7ad643a05b37d07"],["/archives/page/3/index.html","be0a08e2100534dfb89c7c0ecda8a20c"],["/archives/page/4/index.html","9fadb1aeb423c7b2202153d5fa599d7f"],["/archives/page/5/index.html","df91256d0ec2687d206129af96928d06"],["/archives/page/6/index.html","0cffef5c32a2a59c18a6e80d372ef8c1"],["/archives/page/7/index.html","df279c833fed42913564bd14ded4a448"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","4db766ff530de9aa5c4e8983066c611d"],["/bao-guan-qin-zhan/index.html","c55c839ce212e79200c4264adc317573"],["/bao-li-yu-qu-cai-qiang-jie/index.html","600c3a3b09923b7883f138b3a2ded22c"],["/bei-dai-li-ren-sang/index.html","cd1a48ac92d531a07941811091e3a82c"],["/books/index.html","4d4a6e2f2c930b7bd305ed702095657a"],["/categories/Blog/index.html","b7a0584a7bc33bfd349c7fcd96c70aea"],["/categories/Blog/page/2/index.html","c976e3db2b504100dd10e9b22974f1a8"],["/categories/Blog/page/3/index.html","7213167bf3aa036f406cb9de0ea153a5"],["/categories/Blog/page/4/index.html","8568a95325f21c9a26a7285f8d22a835"],["/categories/index.html","1c5a9b43cbd4474b8bdede27ce293564"],["/categories/法学/index.html","dfccbf3f0ae5e4a7897cf91a03902912"],["/categories/法学/page/2/index.html","a514fe087411d27fc764797c27b5216b"],["/categories/法学/page/3/index.html","d395336f42a00dc2fdd5d51eb9ec4328"],["/categories/精彩分享/index.html","a1d41b43c5e89384fc00f543a5e3660d"],["/cclisence/index.html","042362005178e6226943a66ccb21e6fb"],["/cetrain-issues-iv-for-company-law/index.html","9144d0dbc92d8e54732fab656840123b"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","ba1c2243f40013b206cc73fd1ddc2d4b"],["/cs-hubei-2017/index.html","41c41751c684ba55d379916c69edbed7"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","b7320fc482e6cf04f85ffbd78d10eabf"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","5e63857a2ac6663c0e6d50a78df7cc72"],["/due-pin-workflow/index.html","6eaaaaba3e6b47d479c74baea9f21cce"],["/duo-ci-zha-pian-shu-e/index.html","3b329be533ee03303388fa7ae5e1dd1d"],["/expert/index.html","1176dc8c381e9a50f5aa247c9fa64a5e"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","6e258106a7452181fba778cb56528aae"],["/google3756ddc34336b7b9.html","d709753761c103c4f9ff19a0ef44248a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","0654e08231c92b2ef00c8beb2ed68ae9"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","5417e8b7cc253f029ea5830726716cd5"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","a6064c7b1477ee5e8966851e98f2c4d9"],["/hustlaw13/index.html","71c61c77b31c114467ee8fcd0ff92688"],["/hustlaw14/index.html","f020d285f63ec39aa33294d612664088"],["/hustlaw15/index.html","c98731b5040a73b11d2bd4bb37f76cee"],["/hustlaw16/index.html","3dacd693ccffb5f279f2491ba8405d9a"],["/icloud-terms/index.html","c769aea486de54e0e9fbf30c2df78692"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/index.html","53c506e4aeb5e48ad639a25fbd17298c"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","5e729fa71ee270bb6e98e491d9938615"],["/jdsnk/index.html","b8abefb67efefda88d8b226e8a1be3c0"],["/jian-qiao-fen-xi/index.html","59131c505e9b68c0d8cbd8eaf5fa2447"],["/jianguoyun-keepass/index.html","f5aa995d22ea2619aa1582b8a8f157ae"],["/jin-qian-bu-neng-mai-shi-me/index.html","9d1bcf4f6f0ccb99bb4e8673191b7014"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","d2a431b4d32564ea96e3ff5098abdf2b"],["/latex-times-new-roman/index.html","a67847d81aa231d15f5a1f5c555aea21"],["/latex-yu-lun-wen-pai-ban/index.html","e015795c449eb964a8ea4286b495f555"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","1c3824599be1e455a3f64f5e2eafd03a"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","3cebdf79df33e375dcbb1f18d62d46cc"],["/luan-dan-20181116/index.html","1f4cde0d7bc1accfbcb9dfdb80aa0290"],["/luan-dan-20200217/index.html","6bca53ac3ab3d18e48745572e2dd0295"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","53ba1692793547f119850608356f0437"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","f0370ac6bc9f3cac5e1e3cf036689fb6"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","35f7c414082d17604c984d6e7382570d"],["/movies/index.html","c56d6d9bd4384d16ab44f83aa1c7c67b"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","47991604ee2ad79b86b7665eb2abb05b"],["/opoo-zhe-teng/index.html","7625668b3ea5ca9e61f33c914bd64f5c"],["/others-00s/index.html","1a79075a247729a1f059528e44ae7e9c"],["/page/2/index.html","6c0dae8a769d39ebaad85a4d58490acc"],["/page/3/index.html","428cb575e4809e11baa633f54e30c2f7"],["/page/4/index.html","f9f15e9026f14c78696a14e58e4df210"],["/page/5/index.html","3e36824659e4c44af011867c053ab9b8"],["/page/6/index.html","c6d3fdd2b5862e07248772bbd65cad70"],["/pan-gu-zhi-bai/index.html","cd08bfea7f401f4515d7c9882e360eb1"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","26b7f290ee307990761e267cb1134703"],["/posner-homosexual/index.html","0a3a2f2cdd1e81725384285a8dc62f0b"],["/qxpj/index.html","5c2d926a74b855f323cd9132ccbe6b14"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","d73dc0ac414437b4aca80e81fe6ee3e9"],["/shuang-pin-vs-quan-pin/index.html","15e4c64c46aa36b96349aad66a438e0d"],["/software-reverse-engineering/index.html","4aa3bda006a4a5b006283fb1432acb5a"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","02128772a80231589369e9eb71e99398"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","12ed0ff33e0a7834c8a3cbd08305be46"],["/sw-register.js","1a6589fb00851bd5dfe3c9e52e7eb423"],["/tags/2017/index.html","9135470e020c7e26f63bb843ecbabcfd"],["/tags/APP/index.html","e035779bb64d0a2c17e3538e19d03167"],["/tags/Apple/index.html","e4739fa4df57923767d828b3125c806d"],["/tags/AppleScript/index.html","410b0e312fae6ffb07cad36827dbe63a"],["/tags/Due/index.html","c48dce2cf12e378aac7acc0aebf4f58b"],["/tags/HUST/index.html","0612e647bcc0502bc97dcea966d31dc9"],["/tags/Homebrew/index.html","1db8a296cb4f3f6573a37e108a12ff6d"],["/tags/KeePass/index.html","c4fbd3c588474c6009701411c754d1c7"],["/tags/LaTeX/index.html","b9407e432fb0a29819bc35c131efb477"],["/tags/Namesilo/index.html","42b71ab0efcc976aeecb16a25b58b8cb"],["/tags/OpooPress/index.html","77b07b566d3c4107b787b2bf2f0b7632"],["/tags/PDF/index.html","700aac5f30e49f1aeb1e5ea109bd8c33"],["/tags/Posner/index.html","46c44d6a82abb28c212b6e0c8723a06f"],["/tags/Python/index.html","b3655a223fc33c37bf321e038d61dd31"],["/tags/Rime/index.html","048a2670bdf31ccd12f00aefd0bee723"],["/tags/Tampermonkey/index.html","fb65ccc647737fc3f5f8531594ba7f5a"],["/tags/Typecho/index.html","4064084bf679d5fb09fba8ecde98c6cd"],["/tags/Workflow/index.html","7b1dda936e91c5eb166aea8474e4218e"],["/tags/cc协议/index.html","eb37467a37ae75485381ad87a89a3f9e"],["/tags/iCloud/index.html","1c51c30bbc90b829c9d7a17cfb9b364d"],["/tags/iOS/index.html","82a23987b10db84b7430c9cff47fd175"],["/tags/index-1.html","d753f51756504766a851925174e6ede3"],["/tags/index.html","d753f51756504766a851925174e6ede3"],["/tags/logo/index.html","f0fe2fda1f351ba657736a9968a0f06e"],["/tags/macOS/index.html","bc716e82e236da14bb16a35e3ea48bbc"],["/tags/vpsmate/index.html","51be84c23e5e4b661d6901acda7d0bdd"],["/tags/乱弹/index.html","5363f06559380865313367d0132e0a09"],["/tags/二倍工资/index.html","58d591ce3189cb9a535977759fdefe32"],["/tags/二维码/index.html","0e9d8b1b89b9fea3beb882db7a074daf"],["/tags/云盘/index.html","9330164639fb8bd9df5c35fc20bd8f5f"],["/tags/交通事故/index.html","556727c028b2c6b676d1ed1442c016e2"],["/tags/产假/index.html","972e57adf50a9dde29d01fc8879e0ac4"],["/tags/人身损害赔偿/index.html","48af22d047f201f1f1bfd527ec283896"],["/tags/代理权/index.html","69117858e4ac80523ab4fb0eb6b66213"],["/tags/优先受偿权/index.html","1bf268705ead74bcfb08c43cf54405fd"],["/tags/作品/index.html","b1084cec70b1b488d8ab00fd1e063542"],["/tags/侵占罪/index.html","245303e4d6107a34aa2c87d8fd376ec7"],["/tags/儿童权利/index.html","82f32383da6afc5ebf2320a0e93ef127"],["/tags/公司法/index.html","b07c6ca38937dba3aee3b1d0de66bdb9"],["/tags/共同财产/index.html","28acafccfeaaa85877a1e3eb531f01df"],["/tags/刑法/index.html","cb0a851c849cdfc9eaeb9baac429236d"],["/tags/劳动关系/index.html","4829e96ad03a20129b480f73f334ab0c"],["/tags/劳动合同法/index.html","dccf572580f234e9fcc80a07edeb9660"],["/tags/劳动法/index.html","7be4f97eae02c38724bfc01b9bba4c10"],["/tags/华中科技大学/index.html","d551b3f573cc6de9aeddae65307b9022"],["/tags/华中科技大学法学院/index.html","7d9539eba7aa9fc39cc1bdefcd3d324f"],["/tags/危险犯/index.html","1a5163a8768241cc466d6e105213482a"],["/tags/反向工程/index.html","37815d279ac26a1e7fe5b0fdb27dcf0c"],["/tags/发行权/index.html","83a479dd13eab74b257ee59a286884d9"],["/tags/司法解释/index.html","78405f8d63e9ff6b8e3fcd25f31d41c6"],["/tags/司法鉴定/index.html","1d4e5bc3eac7fad09c91d795eefdac0f"],["/tags/合同主要义务/index.html","7e02e96f59ce7573d0d3670444a4f4ed"],["/tags/合同法/index.html","898a49c21598201db1f7173e16f4dd4e"],["/tags/合同附随义务/index.html","61ee55ff46ac5835634cf634ee23185c"],["/tags/合理使用/index.html","027b9a79d3f6c8a909e373ee7ea4f3c5"],["/tags/坚果云/index.html","088e1896169795917110f4c49e9ff776"],["/tags/域名/index.html","22fdc637ad5f2a3b3f7813d534a8a92e"],["/tags/字体/index.html","6a29a73e8e4adf313d9e8a873895177a"],["/tags/实害犯/index.html","13e08c6be46c8bcb9f239cabce06f28f"],["/tags/密码管理/index.html","4277b9600ffbb2c1814987e2ab110711"],["/tags/工资/index.html","5b7259a768412f370d80bd740c20b964"],["/tags/待履行合同解除权/index.html","ed745f2ba0ea25563263f5eb79ea00ce"],["/tags/律师收费/index.html","0fe45f37fdc330c832fd139505184fc4"],["/tags/思想表达二分法/index.html","b657aac741252e64876729ab75c280f8"],["/tags/思维导图/index.html","db9c0bd03e84c45578abe100a2cd6bcb"],["/tags/成本收益/index.html","c2dc81b9b3d73da4758efbd251cfe2de"],["/tags/成长/index.html","5a34d306ddfcc7379590129cbd866537"],["/tags/技术措施/index.html","27a9e5612693de374bdd07a15ffe607d"],["/tags/抢劫罪/index.html","b3cc04ba2e2e2cac985e620579e150b9"],["/tags/抵销权/index.html","02f24877acfbaef6d79b8cd6bb9e1ffc"],["/tags/排版/index.html","209f3f077f01fe1e016e144926a16b2b"],["/tags/插件/index.html","eaee22e40cd18adec3b4dadb3b87b46f"],["/tags/搬瓦工/index.html","8d1aa700403cff4f57959d61888c98d6"],["/tags/故意伤害罪/index.html","271b53b840fb365418fc6c155986632f"],["/tags/效率工具/index.html","fe53a1fb1d3f657fdbb736eaeb056793"],["/tags/教育/index.html","24e781f830ab7a7d7fd13a4b6aca9cc2"],["/tags/断舍离/index.html","6d9640173589cc50bfb947dc72b0a08b"],["/tags/无固定期限劳动合同/index.html","29d92a15b15ff21a6ab5670fc80624e0"],["/tags/最低工资/index.html","83b31a31aa8384e6d06392001f52d022"],["/tags/最高院/index.html","7a25932e914fe2657681668cae39cc16"],["/tags/机械键盘/index.html","9512ffabf5dcc9ad86093cc32f868b09"],["/tags/武汉市/index.html","3e8fbf4b08d3712b6c035330609394c5"],["/tags/民事行为能力/index.html","0e5d55a7cc41a842cef48bd7e65defdb"],["/tags/民法/index.html","9d09c33e6a7598d2e0c02342222a3958"],["/tags/汉字/index.html","c01153e9ce4dde3f6607f302b6b98866"],["/tags/法学/index.html","d0ff5c54cfc644681f72af5c7b0d337a"],["/tags/法定许可/index.html","32fe71f313918a05de7498ac46c7a107"],["/tags/法律/index.html","6e920f1c347dd02d722caed4caf899b5"],["/tags/法律援助/index.html","3b5f610dfaa81bec41d52bb233c541db"],["/tags/法律法规/index.html","31c9e8a41e043cd99af77a0437dfcec5"],["/tags/法律经济学/index.html","f68f8d95c9b8be4ab85934194d0ea937"],["/tags/消费者/index.html","9b6ada5d10b5f4d5870cdc3a4a1d3a05"],["/tags/湖北省/index.html","3d33027b708ff02e93cef22194d6f630"],["/tags/熟人社会/index.html","f2ed9c7442fcf8e7a4684839e3ce05fd"],["/tags/物权法/index.html","dc590a95c3b283af795c57837476124b"],["/tags/用工之日/index.html","6d090123a4db8011e0c22e894ed8afbc"],["/tags/电影/index.html","a31df3b3c6e081022a869c126e759708"],["/tags/男女平等/index.html","b2fbf3532ecce6950c71d63c74c2fa04"],["/tags/知乎/index.html","c8d6d5d8154ca5e04c81f461ba66b98a"],["/tags/知识产权/index.html","afe4238c2d364a7116db99db5db3d98a"],["/tags/知识产权法/index.html","5ae2dc697a6c0ce3fce18e339c58ee8f"],["/tags/破产法/index.html","9d897380211b9632eeda2f6413ac2b2d"],["/tags/破产管理人/index.html","b924faf3a09c3c4f665e5375e4f64249"],["/tags/社会责任/index.html","d78e12541a914077e22735883269a24e"],["/tags/社会问题/index.html","8c3708c239f678d9db5a66a637491d3c"],["/tags/经济学/index.html","904d0ce73e37a93aa415557c790b6b23"],["/tags/结果犯/index.html","4164ae73799acfd82fd7bfcbf4f7b330"],["/tags/缺席判决/index.html","fb01db9c198ea11614cb1b3fb551c591"],["/tags/考研真题/index.html","eda087bf527735299ebe6e575dbbb6b3"],["/tags/著作权/index.html","4efd33959c4576add8343309c5e622dc"],["/tags/著作权法/index.html","4ddcc8efdeb4a2ed548153359dfaf26b"],["/tags/行为犯/index.html","c16c8603ddcc7f0f9ae0754949bf026e"],["/tags/行政不作为/index.html","137d109f7b29aa9e5f2d2e70786f3236"],["/tags/行政救济/index.html","1fc5a40e76db64085be4b3a5ab1daa83"],["/tags/行政法/index.html","dbd82feda4dc235f9583c9d4902c4621"],["/tags/装饰装修补偿/index.html","1164fbf77c574fb20f8549bea366e64c"],["/tags/观后感/index.html","35b7de38a029a9f0f1cc7201d7da6fa2"],["/tags/观念交付/index.html","ccd3fea1083a89573e88a6ce2839d706"],["/tags/计算机软件/index.html","a5c12754066ecfc65a9af7021aea20cb"],["/tags/认知科学/index.html","5a167da935c296dbfba2246c4ea0a1f2"],["/tags/论文/index.html","c5d9fb28c4f468f75fdc6cb6f1e27881"],["/tags/诈骗罪/index.html","ce832f540d738f338a1504faad61b947"],["/tags/读书笔记/index.html","d37f69043f2e8c3bb6b4eeae6e720d22"],["/tags/赔偿标准/index.html","4d3659bd356b8186ecd80060f7493141"],["/tags/输入法/index.html","1ac41657df6d352b650ae81d382a835d"],["/tags/违约责任/index.html","ddc2a0eb4885aa3cd0fb61fd6a433d8c"],["/tags/违约金/index.html","d85969960759957484159e91b4e3280f"],["/tags/释明权/index.html","91babe0bf160e93570d19d164825ab7a"],["/tags/隐私/index.html","e347164a2675d7872e0fd487876f65d7"],["/tai-er-gu-shang/index.html","b1178c7996cf83373f20e01e212e2aed"],["/timeline/index.html","d550ff2672026a4a60453620cd32805b"],["/vcard-yu-er-wei-ma-ming-pian/index.html","2bcb9d887ea28d910b74ebe29a1d18fb"],["/webfont-yu-zhe-zuo-quan/index.html","a005ceef435837debec8a829f2655ae1"],["/wei-ji-hou-ban-quan/index.html","e16034b93ea9207ea593ede799b200bc"],["/weixianfan/index.html","7d9e17d6e152c7de90639bb02bec3688"],["/wo-de-macos-he-ios-she-zhi/index.html","db5d37008e24b4db72fa0b6dd39a74a1"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","41451c234858d7a331d6846306937dbd"],["/work-rules-mindmap/index.html","aa947b87bb3c2a361bfd7548d010d174"],["/wu-han-chan-jia-shi-duo-jiu/index.html","12397e4e1d97ea673ab0c41c0996bc3e"],["/xzlfbzw/index.html","fc556c3ada9044cde4b440e1848336ea"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","599d09370990cacd3b63fc7e21490cb3"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","cef1147f05bfce96a9b45143c3bf9d10"],["/yu-ming-zhuan-yi/index.html","4ccfa44b11dfdee50b8c439f82852521"],["/zhetengb/index.html","bcce09b70b1a00209d8563fe95c02105"],["/zzq/index.html","fd1b0cfd72706175090d18ec197dedb0"]];
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
