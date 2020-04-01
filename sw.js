/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","309dc810ed5a9d20f562e7b46c8db9fd"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","c3dfa59eccbbf04b0e5c09ad07daa8c0"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","d6b73f9cd59765209762236e5d6170a0"],["/PGP/index.html","6ae19edc2d0136d0feffa0aec5f54642"],["/about/index.html","46a22932b79e953b7f1774d5e0290ea8"],["/applescript-jiao-ben-liang-ge-ban/index.html","f621a6655245a32200aeccdc1d146ce6"],["/archives/2014/07/index.html","68925ecbc95835aa2ab92383ed4eaa08"],["/archives/2014/08/index.html","bfe9053a9933d8ad60906bb960dca751"],["/archives/2014/09/index.html","402db1db4aa7c85ed8140612d6505060"],["/archives/2014/10/index.html","2a169156f0ef81a55b75774a51c47610"],["/archives/2014/index.html","4d2a2d7a6840347368c79196743fb401"],["/archives/2014/page/2/index.html","d99a7febeb5180e261e5c1fd39c8cfac"],["/archives/2015/01/index.html","fe4aa17a7dd3e995929c7608f0df6e37"],["/archives/2015/07/index.html","c946f332114936706c198883fd91968a"],["/archives/2015/10/index.html","ebeeb6e5b75e40e62b310d12dbb47119"],["/archives/2015/12/index.html","0b13a0ac8c455c7ab9961f94a3823da1"],["/archives/2015/index.html","689720281300b2eb04b602cfa642d80d"],["/archives/2016/04/index.html","faf07ba999555b0b80c0ec512eba80f9"],["/archives/2016/05/index.html","cf03522ffd32e7b8413e949c262fde26"],["/archives/2016/index.html","7e0be3e1d27808d7e160c4abff5fbc4d"],["/archives/2017/01/index.html","21371435bb2f3b13151941073c685891"],["/archives/2017/02/index.html","b7e9b37b33e6f353f398dfef4757bdca"],["/archives/2017/03/index.html","33bc9fa828320584b9f3489d3d87ef50"],["/archives/2017/05/index.html","be6cf697b0d8531045b91453ca15635e"],["/archives/2017/07/index.html","ba777e6a613219bbb07b42fe31a0a892"],["/archives/2017/08/index.html","34635c630981b453778d8c66c48696bb"],["/archives/2017/10/index.html","2288642c613fe63374f27b283ee62b17"],["/archives/2017/index.html","83314a9e6578b2ae9525401fce0358ad"],["/archives/2017/page/2/index.html","809e4cbbdcb8fe8865cdcd5b2c509927"],["/archives/2018/01/index.html","6fc08c8b58956069bb6e939665f34df4"],["/archives/2018/04/index.html","a52dcb1249e7c4c563f1fc1c3f14a52c"],["/archives/2018/05/index.html","e1f4698f5730ed03bac391bf12977fc8"],["/archives/2018/06/index.html","b8a3b18c384084369c763e3410d4927a"],["/archives/2018/07/index.html","5dabffb0b6e9dc8f120532d35ebc3b62"],["/archives/2018/08/index.html","7cf4e3dbd427283225c283d24a1ec6ab"],["/archives/2018/09/index.html","59b89c0b3bafac45f10897323b72c534"],["/archives/2018/10/index.html","24d93fb69904b9137c7ee62012821b8a"],["/archives/2018/11/index.html","036bc703a672fafc19fe3d2b44a3c33a"],["/archives/2018/12/index.html","b5cd84d0f531187397430041a2c6288e"],["/archives/2018/index.html","5910ea81af851850ed15493ccd386fd9"],["/archives/2018/page/2/index.html","40c137a41338f27a1bf4aaa542381f87"],["/archives/2018/page/3/index.html","fdc490979ebbab22b1fceda5a76485ad"],["/archives/2019/03/index.html","feaec0dbd7a49746092c940d7fe20878"],["/archives/2019/04/index.html","4bfcf03fbe5ddd471217b925bedb05a4"],["/archives/2019/05/index.html","f86b8530c5e51360bf6d8d583ecab575"],["/archives/2019/index.html","3e241179d0f4ed0ca44e90abd8624658"],["/archives/2020/02/index.html","60bb839d2503a1aeef0c0bf72f730d75"],["/archives/2020/03/index.html","c3ebf9e6328e0c22af28aeb7e778f5c0"],["/archives/2020/index.html","33077d4724a285d155e3b771e758e859"],["/archives/index.html","5f6db7997db777c934b9835152431eb1"],["/archives/page/2/index.html","324a6b2f72607e5f8daafe6c86e31e08"],["/archives/page/3/index.html","a333bf921257f3a4fae19105abdb6274"],["/archives/page/4/index.html","05ff25d93a9c1b4e5e49d5a1e38d370e"],["/archives/page/5/index.html","b997f84f5aa935df9970dfdc8b0d9358"],["/archives/page/6/index.html","c879173464101de76f248feb38ead4e9"],["/archives/page/7/index.html","82e8e5cb5b07c7dbbb80304e3a6bdc1e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","3e064d1fd3a3de7eddd6ebc0eba112cc"],["/bao-guan-qin-zhan/index.html","40cf1c2d5fd839c42d16f187c92b3509"],["/bao-li-yu-qu-cai-qiang-jie/index.html","64f30b527205e82962d1d8b71687bc55"],["/bei-dai-li-ren-sang/index.html","184cdcbab626584a5068c16ca381b3b4"],["/books/index.html","0dff7b9e034b5d8da42d21a15db6331b"],["/categories/Blog/index.html","ceebc236eb68eed31a3be08f220605f4"],["/categories/Blog/page/2/index.html","b0b9fca9749018463f4ca2af77c06ba3"],["/categories/Blog/page/3/index.html","c7df7c93e84be381e2405406c45a4cbd"],["/categories/Blog/page/4/index.html","3b4a145ee7c71777bf530b4a29a4989b"],["/categories/index.html","9eb105a17f25e38570335ff1fb6f997a"],["/categories/法学/index.html","984e1a72f154810dd87e033f50780a4b"],["/categories/法学/page/2/index.html","58476b87a3ed783a16bb5b95ca2fb419"],["/categories/法学/page/3/index.html","cc8a97fcf6f583efd7e968a1f525bbed"],["/categories/精彩分享/index.html","fc974a3e5937c27213d0af0fc465b8ce"],["/cclisence/index.html","ab0bc8234f3e0590642dcf094056a4ed"],["/cetrain-issues-iv-for-company-law/index.html","4d2821a7705c0691f1dcf9c1605ff1f6"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","3d0e7f80a7d7716a404e03c4a2690d69"],["/cs-hubei-2017/index.html","3f20d99b124ac74720f04656f93d8f59"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","088890cc63bd3a0c3ec7782a9a685b23"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","1987f014dcbee37c7602213ddc7d5567"],["/due-pin-workflow/index.html","81be3086341a01f1dc13ca76082f0f74"],["/duo-ci-zha-pian-shu-e/index.html","dae3a54b1836ea7d5d93a33d350c6196"],["/expert/index.html","ceab5ecf3898726be3f40c5b3ab1818a"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","2d56f3277b177478928b2e992862a76f"],["/google3756ddc34336b7b9.html","47e81494dfcda9d7f0fe617eff26287a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","ac0f39a58b00eaf6bea3b5b59bc58e59"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","2117a332e807541775e0e5f245f3bee6"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","4cc1421e19fdee3fdf958c71dee92580"],["/hustlaw13/index.html","e4e4a168b5ee2a47b71a13a6299b41f7"],["/hustlaw14/index.html","f0b92409fab3e3d0b04b1d270c278425"],["/hustlaw15/index.html","4251d0c8156fd0f51629fa400e0faa71"],["/hustlaw16/index.html","d0d0299fb4b9a3c25e12a979404df92c"],["/icloud-terms/index.html","c52db6f071819c59b067d07c9155fcb0"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","3adaf09f846fe69a71a98336de2c62e6"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","82f31f4cdb11f74b92cd31075a0dc679"],["/jdsnk/index.html","11a440bf9aa83edbfba04dd000d1142c"],["/jian-qiao-fen-xi/index.html","2618c6e99b39330b8ede6cc9e045c844"],["/jianguoyun-keepass/index.html","f25326dbfb468c9ffbafeb638d71b871"],["/jin-qian-bu-neng-mai-shi-me/index.html","33591e533457ccd96782f644dd648ba8"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","3f0bed71b2d53246036a03c308309f71"],["/latex-times-new-roman/index.html","8cab042da61836a39b50c97ca3dc1a2f"],["/latex-yu-lun-wen-pai-ban/index.html","87150d0b3e08bbd1c785a855640316c1"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","078441d76d03a4d311f1620d71eb5839"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","235f32c90c4b59c13dcb345baa2fda7f"],["/luan-dan-20181116/index.html","5468ae824bb36854c0536dd6edde9cb9"],["/luan-dan-20200217/index.html","0b5ebb8d48aa0022104040cc25d6f71b"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","ecf9c51f92841a87b9708109cc792154"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","4f7345195b99f99e8bb0b25334925951"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","1ac0a94c864aa6ff684734910d48c54e"],["/movies/index.html","52df8c9ab4be13a1c96b22370fc7af34"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","24fe24b28a0c194b92edb4d171a6e86e"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","c674a311439cffefdce3f9528184782f"],["/opoo-zhe-teng/index.html","2ed2e4af7a1334c58f7492b648238bbf"],["/others-00s/index.html","bbc311e46f9cd20b3616182afbe40f63"],["/page/2/index.html","512119080b1b8bc295718ce451e7b8d7"],["/page/3/index.html","3a6aec06f67bc3680340aab2f003c334"],["/page/4/index.html","75980cfc82637598a9876683fb9e711f"],["/page/5/index.html","40938576ab2c2a9ba61d71e604901e21"],["/page/6/index.html","9b02736b270a51505b86a1e6e991b94d"],["/pan-gu-zhi-bai/index.html","4d5301f7fb238b375563e0f526a1e673"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","4507334aaa26d52232d9737dede71143"],["/posner-homosexual/index.html","7330e49b55f90cd1e4afd43b84b4f3d3"],["/qxpj/index.html","ecfcd6d413cab0078ea14941cf8f8a9c"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","5a573ac21c86daec1f8476ae03e588be"],["/shuang-pin-vs-quan-pin/index.html","e7a7d0885661731438c909ac75a3683a"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","330b14b48c0dc92f13cb109b5359a04e"],["/software-reverse-engineering/index.html","1903af392b5071793491ce0672173e94"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","06a952da749ffc9be2750d541eb6db61"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","9d30cd26367985c6c96bf9e39c1fffc8"],["/sw-register.js","bb56b88cc9e7f86edbec7ec481348704"],["/tags/2017/index.html","5204ca33d701e371d6ed0558eb236ee0"],["/tags/APP/index.html","0a4a2d400e3f518c955ec78bab7619c0"],["/tags/Apple/index.html","29aa64bd9c83eef2ea53998d74fa4299"],["/tags/AppleScript/index.html","ef38cbc38405bd56cd6a5271a4910857"],["/tags/Due/index.html","04b5db35bb398db1bcf961d94f4bd046"],["/tags/HUST/index.html","950fe3e44185881cfe51d3765975e417"],["/tags/Homebrew/index.html","8bb7ea690c55e32cb6e22cbd03e513b0"],["/tags/KeePass/index.html","43e478ab64beaa2bfe43b0c78250c277"],["/tags/LaTeX/index.html","bf7d550c44b6a7ae362a081f04c4cd8e"],["/tags/Namesilo/index.html","14f4f5933e96586516afa84ecba5edce"],["/tags/OpooPress/index.html","0a31fdd3b5fffa93ae206e46248886aa"],["/tags/PDF/index.html","40a18d00d21da91415ba5b00fab4d43d"],["/tags/Posner/index.html","89c1b07bba7a9af24e7c77933b0d7e69"],["/tags/Python/index.html","fb76ed115f4f1fec78a93ef1dbbf383d"],["/tags/Rime/index.html","114dcc3ec4ecbd56659d28d3a39a085b"],["/tags/Tampermonkey/index.html","dddc4135317e3700b61339d3acd440e8"],["/tags/ToolMan/index.html","b4190d195e5080bb4bbd08fe06435845"],["/tags/Typecho/index.html","ff3565eb72fa127a9af6d1af0f779f6c"],["/tags/Workflow/index.html","faa75653e22f0559c3e338f8adc07bd3"],["/tags/cc协议/index.html","1ed515a7839240981d744e2d685f68a1"],["/tags/iCloud/index.html","dc956fa0115583cadff9887ba22f3bda"],["/tags/iOS/index.html","6d82aff309768eeba7db51d7769aec1b"],["/tags/index-1.html","912ec47b220e4ccfebd02acd5525fafd"],["/tags/index.html","912ec47b220e4ccfebd02acd5525fafd"],["/tags/logo/index.html","e842c5ee34e9f74903511a8b05620250"],["/tags/macOS/index.html","c6c3229fb28943186b44fa9928723945"],["/tags/vpsmate/index.html","d46e394008afa78d6f037c4c4d9efa80"],["/tags/zsh/index.html","a64fd381f57b3ebf0f05a0753a6ae783"],["/tags/乱弹/index.html","a2f4eec374b8165224a81479b05658f4"],["/tags/二倍工资/index.html","1a0532dd2831d8bbafa3273d37e676fd"],["/tags/二维码/index.html","c17469a91de7ce380fa69650a1d60e85"],["/tags/云盘/index.html","79aa98c4b04778f37112adafe7a6b38c"],["/tags/交通事故/index.html","0e10f5876eb98c781b2d323e8a1a0b5b"],["/tags/产假/index.html","019a90f2ce9b79c86875e88f79ac128b"],["/tags/人身损害赔偿/index.html","e7799d2e5786f40ae73fb6eced7183cc"],["/tags/代理权/index.html","ed7b03f4d9cda3c6f2268a2fcce1ab5f"],["/tags/优先受偿权/index.html","94ad1f4ca427753811df3d7d33515b07"],["/tags/作品/index.html","e6a4fecad7fd03105e0ccd22f16bdaf2"],["/tags/侵占罪/index.html","44e24c4c8480f43c3895a72fe10ae02d"],["/tags/儿童权利/index.html","97a8195101521135bde1fb992b8ef3d1"],["/tags/公司法/index.html","b154f983c0536407337544e5decd0249"],["/tags/共同财产/index.html","8842426553420d117b745dbc914eaec4"],["/tags/刑法/index.html","5c3cdec2b24a833ad41eeef19050afea"],["/tags/劳动关系/index.html","2e833a86c0e0ff967981e677d5f84cca"],["/tags/劳动合同法/index.html","53e539fc051c2bf303fc76c0e9850ab4"],["/tags/劳动法/index.html","e29b4e71f7057ac68545ad98a4f1ac87"],["/tags/华中科技大学/index.html","98f7873ed6d02642bf0bc1736ed866dc"],["/tags/华中科技大学法学院/index.html","c304f5bce96ccb676f9b720f5dafd32b"],["/tags/危险犯/index.html","9248fcd8a3cf5c6eb439858ea81a9e19"],["/tags/反向工程/index.html","10235834141b5e3f54625fadf2c45046"],["/tags/发行权/index.html","98e8743ac54174b0fc305c227c04f27f"],["/tags/司法解释/index.html","021d389d5a00a069eaec59472bf0be2f"],["/tags/司法鉴定/index.html","f926a0adaa00a924cf35c4da7fe39f02"],["/tags/合同主要义务/index.html","8dc4da9d0afb6eaf6a5cc6d00a11c7d9"],["/tags/合同法/index.html","07780c552c1a71d442b572cb085fa7cf"],["/tags/合同附随义务/index.html","013c54a0d612133aaeb654220b6b206f"],["/tags/合理使用/index.html","59197b66746fdea9a70b2153eadeca32"],["/tags/坚果云/index.html","8cd8e351349ad50c21e17d2686089bdb"],["/tags/域名/index.html","27b614752e02956903d8e0ff9ec96a4d"],["/tags/字体/index.html","032c8c8e467f9815ec9d79b7666083e5"],["/tags/实害犯/index.html","5756de6f1e09e7cfe021767a72038ff6"],["/tags/密码管理/index.html","ae00d2b3b149b89ee0783f2ee4fc2913"],["/tags/工资/index.html","158c7801f4c3ea150731db3b33d7ae30"],["/tags/待履行合同解除权/index.html","9dd31f21d76de67c061abc216a8038c7"],["/tags/律师收费/index.html","0f177d45dda04e6b3d3161eab20c9c6b"],["/tags/思想表达二分法/index.html","0a42557e0823f4d30ed328779a019f4d"],["/tags/思维导图/index.html","8a14365fe1953f8d7bc6fdd3e96efae3"],["/tags/成本收益/index.html","aef3aea2067efa217a9fba0a251c522a"],["/tags/成长/index.html","7ae663138a6dbd5b1b220e3ca6476ffd"],["/tags/技术措施/index.html","f3d14dfa25241b1cff91b7f66fcebf1e"],["/tags/抢劫罪/index.html","3acfcbb048c81d58f66a2f9c1ffb3bb2"],["/tags/抵销权/index.html","63177224ff6777e641f02cd72daaf668"],["/tags/排版/index.html","45f87f16714d5eb3f540e36d7a118f1a"],["/tags/插件/index.html","2fc45bc29516b25009e4d63f38e84c7c"],["/tags/搬瓦工/index.html","802914f341c8d69f4ae41744d33023ea"],["/tags/故意伤害罪/index.html","e5da343810404b668c159f512c79be69"],["/tags/效率工具/index.html","67b7c7231391373c8edf7bcb968b6381"],["/tags/教育/index.html","ef9e8640354028d9b361accf52b0b387"],["/tags/断舍离/index.html","253331b11b903015ba206f1407380593"],["/tags/无固定期限劳动合同/index.html","6e319db42cd1306b7a642671dd83b3da"],["/tags/最低工资/index.html","f85bff5e14aa6957fb3656f9dbe5dfca"],["/tags/最高院/index.html","145f9df983271a8d64f604234c6fdbbe"],["/tags/机械键盘/index.html","2f3c79f0e2086d0934df9dbf1d535ec7"],["/tags/武汉市/index.html","4039469fcb4365fa1e81f20d9fed47ff"],["/tags/民事行为能力/index.html","c15a8cd9c90da0a1b2487e8f42129421"],["/tags/民法/index.html","8eebd622d2961502b3d3de82bc16b03a"],["/tags/汉字/index.html","5f561951de5cc6992a8e544be5def64d"],["/tags/法学/index.html","895bc7256491a1d421049a7e5f4468a8"],["/tags/法定许可/index.html","d6e01c11a2edc2ba048fe25446232dcf"],["/tags/法律/index.html","03f5b7b6a359ade8688da32272316a1c"],["/tags/法律援助/index.html","558043851125bbed38d0c90ff64ce5cf"],["/tags/法律法规/index.html","cd8fe9520ce2301e1f9f8c0335dc40ca"],["/tags/法律经济学/index.html","d0144e6190b44767751b33632e4b9c82"],["/tags/消费者/index.html","4cd05a21e08a00ba7d80133f6d6d146b"],["/tags/湖北省/index.html","961fa89858aa0e9f20abcc858705e02f"],["/tags/熟人社会/index.html","0896f1330ddb179451c6087b9368bc0e"],["/tags/物权法/index.html","210f6e39d980240a343079652b57d41b"],["/tags/用工之日/index.html","8aac6d51f8138317756a6992278c43b1"],["/tags/电影/index.html","81c2174631df569a25572e59f61d2f3f"],["/tags/男女平等/index.html","c5bf6b11170b3da1c480cc9575be1fbd"],["/tags/知乎/index.html","6af8a06705337b866244a5b312ed950b"],["/tags/知识产权/index.html","08c5edade4a2d0a1dc55bec4a7303677"],["/tags/知识产权法/index.html","5c5e2f6fcfe4e4c51d99bcfcb9cb7700"],["/tags/破产法/index.html","d531ff5325b03ddf3a81d0a161d6fc20"],["/tags/破产管理人/index.html","2664266d2a50819c5f0080389896bf21"],["/tags/社会责任/index.html","32b7bc278191798f5f833380abf93570"],["/tags/社会问题/index.html","794bddf29f559ded117e187fdd45fb99"],["/tags/经济学/index.html","0cc3b10be56db256f219063aa11a125d"],["/tags/结果犯/index.html","aecc8fc802d7bf74099521ab739f1e05"],["/tags/缺席判决/index.html","bea46aa857a4bf696e8ce98188bf1ebe"],["/tags/考研真题/index.html","6388ada6766a49f1a1419d0450d0800f"],["/tags/著作权/index.html","4c0bf008e853f6ca8829f094832ea449"],["/tags/著作权法/index.html","7f708ced4b90c21b558acd0156c27cff"],["/tags/行为犯/index.html","b3c25aceb627ee3b4cc71ee625ace228"],["/tags/行政不作为/index.html","b4965d8784bbc8b471d077361f411a5f"],["/tags/行政救济/index.html","a22b8e73b52487412205fdbbba8b6a31"],["/tags/行政法/index.html","7f6fdf978e1d1cd9efdc0d33f5d9cb27"],["/tags/装饰装修补偿/index.html","8e2fde0863654c2cabafb26108f07cf1"],["/tags/观后感/index.html","fdbe26a6e5cf79351f34ab621f7111ee"],["/tags/观念交付/index.html","bb50a93adb64f323afac0fa6a9495865"],["/tags/计算机软件/index.html","0b663d16e347d571424b134d7d2948a3"],["/tags/认知科学/index.html","b2815689b08b2f058ef086b93c4b1c43"],["/tags/论文/index.html","4221ee06ff4439788b6adff8147454ef"],["/tags/诈骗罪/index.html","bedcbfcae55038e4c08b423d2d289c32"],["/tags/读书笔记/index.html","c13cab6dcdb6ed89078ea56bc19895a1"],["/tags/赔偿标准/index.html","e536936488bec9eefdf0a4f3c7f0b6c3"],["/tags/输入法/index.html","4011c1bba0cbf34c55a1f383ac9f0d4d"],["/tags/违约责任/index.html","076e0fe8d15f744c719b299e3b004677"],["/tags/违约金/index.html","52efda515efa7dc2bd9d0294600e3973"],["/tags/释明权/index.html","48a371c9be6c2b12f5dcedea2daf6e3b"],["/tags/隐私/index.html","114cfed7b58fa12530c326ffaac3906b"],["/tai-er-gu-shang/index.html","e71bb9a7006f2404d55ccf7ca476a56b"],["/timeline/index.html","dbe84cb6fa77fe3d05733243629bea20"],["/vcard-yu-er-wei-ma-ming-pian/index.html","f1dc7538fca4356fdf03ffbbf9529078"],["/webfont-yu-zhe-zuo-quan/index.html","a2b26795909e57267a42635c1a72414a"],["/wei-ji-hou-ban-quan/index.html","03eca330ed9aa073a3df4d214a1e4fbd"],["/weixianfan/index.html","8387830bbb3ba8be276b3476eef60f63"],["/wo-de-macos-he-ios-she-zhi/index.html","df21a90f3cd4e062a1639eaa379cc8fb"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","d4f55817c7d6062dad4558a182e73ce2"],["/work-rules-mindmap/index.html","fc410eda2154b9c1d399d036082d7515"],["/wu-han-chan-jia-shi-duo-jiu/index.html","ee22fe5f70f8e0a7ec6afb1588284342"],["/xzlfbzw/index.html","26463f4be5acd2a6807b7d8f07d71a7b"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","bd95c3f4d918c5f2a51bbb015b96eb09"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","5b609bdd36c6b9126c52690d8d4e0729"],["/yu-ming-zhuan-yi/index.html","359e184219921bbb05b8c68c16ea0db8"],["/zhetengb/index.html","a102eb7caef7c7621b341f3006e6d182"],["/zzq/index.html","5fc201f6d2728ab9d2a12433c3fa9b4d"]];
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
