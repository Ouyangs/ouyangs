/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","309dc810ed5a9d20f562e7b46c8db9fd"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","c3dfa59eccbbf04b0e5c09ad07daa8c0"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","d6b73f9cd59765209762236e5d6170a0"],["/PGP/index.html","6ae19edc2d0136d0feffa0aec5f54642"],["/about/index.html","71a6e924c6f7475a6fdb801e4cf3b1ac"],["/applescript-jiao-ben-liang-ge-ban/index.html","f621a6655245a32200aeccdc1d146ce6"],["/archives/2014/07/index.html","d1008d3a4e7f742c6afeff3a8ddcaa26"],["/archives/2014/08/index.html","9193c5467a500a9b829b7555ec216d65"],["/archives/2014/09/index.html","ff37cc3344ffd91a7794d5ffec4ca310"],["/archives/2014/10/index.html","93048c26407b07a38403dbd1534eb5d9"],["/archives/2014/index.html","25de21e2cc800fbc55652834c2b36cc9"],["/archives/2014/page/2/index.html","da832bae76c37fa810dec0c2ab0ed2a1"],["/archives/2015/01/index.html","b3e7594fb4a320b8fb64af8feb2a638a"],["/archives/2015/07/index.html","4427ae392e08b726c3f7093c3787a59a"],["/archives/2015/10/index.html","b52eff7b8298f8f77e4a082aa216b14d"],["/archives/2015/12/index.html","4b8ef6c403fbfbf1de0555291fb08d6d"],["/archives/2015/index.html","502813f603f8fbf12355e86a7d88d38f"],["/archives/2016/04/index.html","5f9c003989fda47fd8d7570388fefc57"],["/archives/2016/05/index.html","924b1bc02b5de18ad061d6440dad789f"],["/archives/2016/index.html","766b13a0c547ef2c6efe04362a55e539"],["/archives/2017/01/index.html","b23006e462d71524ddb14eb2a50ce43c"],["/archives/2017/02/index.html","c869bd3467c9dd35f325ba3420bff6b7"],["/archives/2017/03/index.html","54019c0416b312b16ae8c4c6c8d81b79"],["/archives/2017/05/index.html","6113b535dd02d78216d8a4a66fa58296"],["/archives/2017/07/index.html","9dd582fc98aa778992098b7f238e49c1"],["/archives/2017/08/index.html","1e42db721ce93891ca2d11c3f3b7e67f"],["/archives/2017/10/index.html","26f88b0034d48d4c564b991b781a10f2"],["/archives/2017/index.html","62fe6bbc292ae6d6652229b5423cdd35"],["/archives/2017/page/2/index.html","87b0140429bd3798f66965906422e031"],["/archives/2018/01/index.html","744ea25972f24ef22e3af6e1069ce7b5"],["/archives/2018/04/index.html","5e003e4b0914366393de689d5f477f54"],["/archives/2018/05/index.html","0c5bea49a1f4e817e8b3cdc6f68d63e1"],["/archives/2018/06/index.html","5dfa183aca39a5b26837874550bcfa6c"],["/archives/2018/07/index.html","78aca1ef1143dcd4fac7ade67fb07e77"],["/archives/2018/08/index.html","16868c9be41e1a4e7ba96742e24632d4"],["/archives/2018/09/index.html","b169d3024f3344d8e94d03b44a7ef194"],["/archives/2018/10/index.html","986f12944aa69032941f3d60b531447d"],["/archives/2018/11/index.html","d500409ee3cc286f5666326957753f91"],["/archives/2018/12/index.html","b968ed2aa6726575b744dc6f13a5439b"],["/archives/2018/index.html","e8e291b83ca821ee268d49f5bd41942c"],["/archives/2018/page/2/index.html","78242a82442606cb825859a9103a2a83"],["/archives/2018/page/3/index.html","d67c97f137768b83aa9ebbd1762cf3b1"],["/archives/2019/03/index.html","1ca3d9aebcc2d9eecf03c380de99a568"],["/archives/2019/04/index.html","6b54c29879162fc5d6e1940c24bdf79f"],["/archives/2019/05/index.html","37d17c07f86ed63c349098270221c95c"],["/archives/2019/index.html","10373779c828c7389f7358eb5bf4e26d"],["/archives/2020/02/index.html","44047621fddec3c2a9b7e55d0481c8b1"],["/archives/2020/03/index.html","568805360881bd6fabc01e12c2b140c4"],["/archives/2020/index.html","a3507e65d36cc1d136b1e205f0f590dc"],["/archives/index.html","3b1f73374cd1e11218f89d02ec34468c"],["/archives/page/2/index.html","5ab42dde89b4059bebd797436d9aa5c4"],["/archives/page/3/index.html","66c48d454fb481b48fb235ed208ef633"],["/archives/page/4/index.html","f82b787f929c0df21d67abb75344fa9a"],["/archives/page/5/index.html","2085219955fdf8b02b190215ede5d75f"],["/archives/page/6/index.html","c3a9dd640cd9b97afeb26c12065c539a"],["/archives/page/7/index.html","f1832d22fde6ee02d8be99f4da8c0a2b"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","3e064d1fd3a3de7eddd6ebc0eba112cc"],["/bao-guan-qin-zhan/index.html","40cf1c2d5fd839c42d16f187c92b3509"],["/bao-li-yu-qu-cai-qiang-jie/index.html","64f30b527205e82962d1d8b71687bc55"],["/bei-dai-li-ren-sang/index.html","184cdcbab626584a5068c16ca381b3b4"],["/books/index.html","2081872308f1821cbff0fe7deb6180a1"],["/categories/Blog/index.html","ceebc236eb68eed31a3be08f220605f4"],["/categories/Blog/page/2/index.html","0dae19be02664bf49609c23398c23d5e"],["/categories/Blog/page/3/index.html","843955cabf1ffc400cb5d290609d16b0"],["/categories/Blog/page/4/index.html","3b4a145ee7c71777bf530b4a29a4989b"],["/categories/index.html","9eb105a17f25e38570335ff1fb6f997a"],["/categories/法学/index.html","984e1a72f154810dd87e033f50780a4b"],["/categories/法学/page/2/index.html","58476b87a3ed783a16bb5b95ca2fb419"],["/categories/法学/page/3/index.html","cc8a97fcf6f583efd7e968a1f525bbed"],["/categories/精彩分享/index.html","fc974a3e5937c27213d0af0fc465b8ce"],["/cclisence/index.html","ab0bc8234f3e0590642dcf094056a4ed"],["/cetrain-issues-iv-for-company-law/index.html","c0b25b645e4ca45dd0f63b9ca2a30407"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","3d0e7f80a7d7716a404e03c4a2690d69"],["/cs-hubei-2017/index.html","3f20d99b124ac74720f04656f93d8f59"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","088890cc63bd3a0c3ec7782a9a685b23"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","1987f014dcbee37c7602213ddc7d5567"],["/due-pin-workflow/index.html","81be3086341a01f1dc13ca76082f0f74"],["/duo-ci-zha-pian-shu-e/index.html","dae3a54b1836ea7d5d93a33d350c6196"],["/expert/index.html","e80a8912d697726831e339a740c1b295"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","2d56f3277b177478928b2e992862a76f"],["/google3756ddc34336b7b9.html","47e81494dfcda9d7f0fe617eff26287a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","ac0f39a58b00eaf6bea3b5b59bc58e59"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","2117a332e807541775e0e5f245f3bee6"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","4cc1421e19fdee3fdf958c71dee92580"],["/hustlaw13/index.html","e4e4a168b5ee2a47b71a13a6299b41f7"],["/hustlaw14/index.html","f0b92409fab3e3d0b04b1d270c278425"],["/hustlaw15/index.html","4251d0c8156fd0f51629fa400e0faa71"],["/hustlaw16/index.html","d0d0299fb4b9a3c25e12a979404df92c"],["/icloud-terms/index.html","c52db6f071819c59b067d07c9155fcb0"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","3adaf09f846fe69a71a98336de2c62e6"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","82f31f4cdb11f74b92cd31075a0dc679"],["/jdsnk/index.html","11a440bf9aa83edbfba04dd000d1142c"],["/jian-qiao-fen-xi/index.html","2618c6e99b39330b8ede6cc9e045c844"],["/jianguoyun-keepass/index.html","f25326dbfb468c9ffbafeb638d71b871"],["/jin-qian-bu-neng-mai-shi-me/index.html","df2c979f25da53ebed49d6a127a292f6"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","3f0bed71b2d53246036a03c308309f71"],["/latex-times-new-roman/index.html","8cab042da61836a39b50c97ca3dc1a2f"],["/latex-yu-lun-wen-pai-ban/index.html","87150d0b3e08bbd1c785a855640316c1"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","078441d76d03a4d311f1620d71eb5839"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","235f32c90c4b59c13dcb345baa2fda7f"],["/luan-dan-20181116/index.html","5468ae824bb36854c0536dd6edde9cb9"],["/luan-dan-20200217/index.html","0b5ebb8d48aa0022104040cc25d6f71b"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","e1004a6c2ee8a902f2a75597b6b31103"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","4f7345195b99f99e8bb0b25334925951"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","1ac0a94c864aa6ff684734910d48c54e"],["/movies/index.html","dad00e9b0ecf2ef340454876576d6ec3"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","24fe24b28a0c194b92edb4d171a6e86e"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","c674a311439cffefdce3f9528184782f"],["/opoo-zhe-teng/index.html","2ed2e4af7a1334c58f7492b648238bbf"],["/others-00s/index.html","6fd41b7c0cd0e2de0881dd5b852927af"],["/page/2/index.html","512119080b1b8bc295718ce451e7b8d7"],["/page/3/index.html","10e2200387a29fc8de448750f2b76427"],["/page/4/index.html","a409384f266e0be40f0a6638b0d2df6f"],["/page/5/index.html","40938576ab2c2a9ba61d71e604901e21"],["/page/6/index.html","9b02736b270a51505b86a1e6e991b94d"],["/pan-gu-zhi-bai/index.html","4d5301f7fb238b375563e0f526a1e673"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","4507334aaa26d52232d9737dede71143"],["/posner-homosexual/index.html","7330e49b55f90cd1e4afd43b84b4f3d3"],["/qxpj/index.html","ecfcd6d413cab0078ea14941cf8f8a9c"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","5a573ac21c86daec1f8476ae03e588be"],["/shuang-pin-vs-quan-pin/index.html","db701248187025710c067e19f56a6fa0"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","330b14b48c0dc92f13cb109b5359a04e"],["/software-reverse-engineering/index.html","1903af392b5071793491ce0672173e94"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","06a952da749ffc9be2750d541eb6db61"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","9d30cd26367985c6c96bf9e39c1fffc8"],["/sw-register.js","e2b9c1f5e5dbd49636ec701b2455993f"],["/tags/2017/index.html","4dfbdf68db1d0039ba4dd2c9dba55181"],["/tags/APP/index.html","2677bdeffbf28615e8867a568968abdb"],["/tags/Apple/index.html","b35570d9357a7a01545a2c4d81f93a4b"],["/tags/AppleScript/index.html","5a8f3f207503c72f2dd66f8e92d9e34d"],["/tags/Due/index.html","ca71e80b1b9cbaf34bad0dc5efb697cb"],["/tags/HUST/index.html","cf541a6257e01ce0aa725a1c7241a35c"],["/tags/Homebrew/index.html","5b6d1c4c21a4b7b08eb5b162c1b53f72"],["/tags/KeePass/index.html","09e566d7a45bf6890fe21851c47edca1"],["/tags/LaTeX/index.html","af3a864ef2ed0ae0781901cece9e7e56"],["/tags/Namesilo/index.html","889ae56b70e4eee41cbcafc31429914c"],["/tags/OpooPress/index.html","6792295af5c68c15eacf779b966cc845"],["/tags/PDF/index.html","1dfddef5baa166e4b4edcfc432cc919d"],["/tags/Posner/index.html","410750591d8e1e4d84835287a78a618e"],["/tags/Python/index.html","86527358bf59afb593652569b81580c4"],["/tags/Rime/index.html","b184e96e69bc1603c612766dbc28fd41"],["/tags/Tampermonkey/index.html","44c09de22c66fb7fb5feca5acf9bd267"],["/tags/ToolMan/index.html","bcccdf52d8243cca1622c52926e3f77f"],["/tags/Typecho/index.html","146abf816979227adfe144efef505311"],["/tags/Workflow/index.html","d8db3aabdddf8a2b2e08394968cb7eb6"],["/tags/cc协议/index.html","4cd4f381e23c09ae70f9a5ec603b54d6"],["/tags/iCloud/index.html","db03845bd712bdff9d5b5f37d2da3f34"],["/tags/iOS/index.html","d6a5e9c60466e282d4e69868131fa47b"],["/tags/index-1.html","892f7e1bfab1f135f6f742d4bef34c20"],["/tags/index.html","892f7e1bfab1f135f6f742d4bef34c20"],["/tags/logo/index.html","aa9edd422260f06c189e14e60b54dbdc"],["/tags/macOS/index.html","12be4e43b8ee6de0bc08fa7ba3624efa"],["/tags/vpsmate/index.html","dca2b26043898e3df02288c5c05bb5c7"],["/tags/zsh/index.html","503454ce36d69b4117307ed53ea9282c"],["/tags/乱弹/index.html","ccbbbc3f41228452317787ce6e72b508"],["/tags/二倍工资/index.html","dc313d2eed3b3f9d9bcf44d14e4a715a"],["/tags/二维码/index.html","c7c4a0c6d86ad31a2b5240ab36c140d0"],["/tags/云盘/index.html","9040767fdaded7370f7de7be2fd68cc3"],["/tags/交通事故/index.html","b1eba504953ca2d3f85fadeba89a1dd0"],["/tags/产假/index.html","93d9a50f36a178f9a348609fcc6d1ce7"],["/tags/人身损害赔偿/index.html","8bd067ea08ddd7fd9567ec10f605ed9d"],["/tags/代理权/index.html","7d06749b1a5b2e6402955854f4ff66ab"],["/tags/优先受偿权/index.html","9310c820feb027d2361f3f4185c5af14"],["/tags/作品/index.html","392776463fff8b6e60d2602617e9da26"],["/tags/侵占罪/index.html","c677abb3efb1b89ed97d6f9107388284"],["/tags/儿童权利/index.html","6fbea7a64fa9e3e2093c95091e7a7f35"],["/tags/公司法/index.html","058e0df6fef7a661288e95d65e5f79f7"],["/tags/共同财产/index.html","5dfe4cfdc23c0d6f89d31377fc7df383"],["/tags/刑法/index.html","6282bfa3773db68a0cbb1fd5faddff47"],["/tags/劳动关系/index.html","6cbada749af4b2cff2d935d67a259495"],["/tags/劳动合同法/index.html","fba31add3492cb092811dc5c79493546"],["/tags/劳动法/index.html","8c9e53ee915a19ae16db1b5dec32c8df"],["/tags/华中科技大学/index.html","7a4a27dcc5b50d00503b2ea85b4cd6be"],["/tags/华中科技大学法学院/index.html","8340431d91e40c4819ce269a89eb5a32"],["/tags/危险犯/index.html","00de808237e21e92023e2b1b14bb024c"],["/tags/反向工程/index.html","0219a5cd3819698912dc3b5707518e16"],["/tags/发行权/index.html","58cd94cea7953c483915c75cbc65de65"],["/tags/司法解释/index.html","f88809d15f09a5544d55906b83ef7815"],["/tags/司法鉴定/index.html","4c27ab9c32134f8a02648ce955137bdf"],["/tags/合同主要义务/index.html","cc32e96fd0aabb3895693aa80b13b555"],["/tags/合同法/index.html","a055eaf776b786ecdc3f4a9773049110"],["/tags/合同附随义务/index.html","c92edf74356c1f94d70996efb94e7c9e"],["/tags/合理使用/index.html","9ac8eeb82db9af39d3f9240b78b2e3a5"],["/tags/坚果云/index.html","e7bbeff1654a20ca198b18ed0f39ed10"],["/tags/域名/index.html","4b42f29d141fae18e70ca55cb129dc7f"],["/tags/字体/index.html","5540267671f189c25904fe2963c16425"],["/tags/实害犯/index.html","13cc412e9044d916a1f733cc4da3b5fb"],["/tags/密码管理/index.html","dceae85951ce2ad66da8c8ef144dd057"],["/tags/工资/index.html","dec073cc4d658f914c4acdbe8bf61aa8"],["/tags/待履行合同解除权/index.html","74a608afb9d33383e260c68e39d673c7"],["/tags/律师收费/index.html","b11de7a03eb5738a4b8f4ee354f95231"],["/tags/思想表达二分法/index.html","97cd6008ef08e78272cfeadb78898bcc"],["/tags/思维导图/index.html","b75f1a5f1e33e9e74a98a425b5fef396"],["/tags/成本收益/index.html","8e3f3d72512c0a11ed614e8d03c9bbe5"],["/tags/成长/index.html","83a3abf489735539681b31e483a548e9"],["/tags/技术措施/index.html","23839baf12f55b04ac5f11786f36da7a"],["/tags/抢劫罪/index.html","4dbc5659fe5f407627924855a433bce1"],["/tags/抵销权/index.html","1b71add70122c4d478985bb0ca16e7e2"],["/tags/排版/index.html","fc6dff8b394213f1ca93b44c2aee21ab"],["/tags/插件/index.html","81ee0450e82903579759f09170f1338e"],["/tags/搬瓦工/index.html","6a86eb85b5a03a437794d9bbd3cc11ac"],["/tags/故意伤害罪/index.html","13c71bfb4bb8cee86598db5116f3d06d"],["/tags/效率工具/index.html","8c406b26de3b8b70735d9e84ff454713"],["/tags/教育/index.html","4fc1c1c3f0eecf6de15caf6e22fc4d20"],["/tags/断舍离/index.html","e555254a86e3cc9729a9f335ab65879b"],["/tags/无固定期限劳动合同/index.html","f763a912b83438c77785813138751a83"],["/tags/最低工资/index.html","2a1dd099002b1886e21910905369ff33"],["/tags/最高院/index.html","7be5c244e5b5fbdc8acdc0155f82843f"],["/tags/机械键盘/index.html","4f17bd37d90a993ed9d4fb511989d09d"],["/tags/武汉市/index.html","3a8ba0394076a9ab9f5bad36968c0948"],["/tags/民事行为能力/index.html","77803348ca03b6e87f6f2e644655ae22"],["/tags/民法/index.html","4e216a630206b40efd8e93dea1fb988b"],["/tags/汉字/index.html","49da7a2d58ce8be5b52fd4d915ba4df8"],["/tags/法学/index.html","f76ca5dbfa0ef895cc5b125962a1d3a5"],["/tags/法定许可/index.html","ef1a9be729ec5cdc8fb25d3f6cab84aa"],["/tags/法律/index.html","0b61fd64f7c807307a93b18e3deaa83a"],["/tags/法律援助/index.html","c72ac30579d36663575bd0c8132cc7df"],["/tags/法律法规/index.html","b28c7d5128ef03580cbfb305dbc09045"],["/tags/法律经济学/index.html","a58ca02f13a63eec886f69d3e1827022"],["/tags/消费者/index.html","c854d791577cb79ec338913168b0c3f8"],["/tags/湖北省/index.html","0da21cf05c90fa6d72ccb073c6793fbf"],["/tags/熟人社会/index.html","88436d3f8f12e67723f14a4a77105fcc"],["/tags/物权法/index.html","021ba0442b37b5e2517f4ed88e96a441"],["/tags/用工之日/index.html","34b729be5185fc7c2041c36f346644e5"],["/tags/电影/index.html","ca9928dd00bd4f5586bbe593b6202ab5"],["/tags/男女平等/index.html","dec44d775c42eaf8c98c3a1cc1303973"],["/tags/知乎/index.html","a8b9d38d4fb7d0e313ed6344666d2054"],["/tags/知识产权/index.html","99b325cfc5e6e95903639d8256345417"],["/tags/知识产权法/index.html","9677130bc066dacfc6be829179b9bddd"],["/tags/破产法/index.html","ff3499b92d7c01d063518e6046412f3a"],["/tags/破产管理人/index.html","970bb5478770f42e7bb67a3fefa3fc4f"],["/tags/社会责任/index.html","e76cc5ea36578ce8367e9067988bd927"],["/tags/社会问题/index.html","c97eb53df076a45079765cef31e75ada"],["/tags/经济学/index.html","1bfbc4fbb39fc26441f98ee9a8dcb143"],["/tags/结果犯/index.html","36f22a0d389eef2fbb031eb7c12705c1"],["/tags/缺席判决/index.html","c4248917e246a396249c333678eae672"],["/tags/考研真题/index.html","8b2f284775c44920002fed91f8159906"],["/tags/著作权/index.html","7839b7efc5a00b9f5c0c4a8597b9d0dc"],["/tags/著作权法/index.html","d4c4d3a3c6c794742e1d8d54d4e148d0"],["/tags/行为犯/index.html","288136a175e5a6664a42a504f94bf76b"],["/tags/行政不作为/index.html","87215309adf98871b4164afa5a4e43af"],["/tags/行政救济/index.html","f38e8e2dc6e25b30ddc5eb6ff0f699c5"],["/tags/行政法/index.html","f96184f04fe8f93374c1c4a7a74a0168"],["/tags/装饰装修补偿/index.html","315e0119c5b02c33942d4bd430abae8c"],["/tags/观后感/index.html","ba80ad9d7dd43c450ec875dc6dfe693b"],["/tags/观念交付/index.html","251b88b581295ac6df8845b85ba33eef"],["/tags/计算机软件/index.html","a1c998d2c4266ff1d7da8894bdfc2926"],["/tags/认知科学/index.html","d5513ffe83731eecf64cbaff9796b65c"],["/tags/论文/index.html","8625014a136767d361dd766327945517"],["/tags/诈骗罪/index.html","f409fca90387a8155822d113316c32ed"],["/tags/读书笔记/index.html","108663d0aa29631b6cbbfc2eb38a4c7a"],["/tags/赔偿标准/index.html","f7bd576cd82f40deafde41becf120c90"],["/tags/输入法/index.html","148367037f132daf2a56e90279f8ee0d"],["/tags/违约责任/index.html","88c9678d2c8627cbcf5611f8cebe4769"],["/tags/违约金/index.html","e4c6ff490259feca0a97dc91ed097be0"],["/tags/释明权/index.html","91a8d75485264f51ede1ced6eee0c008"],["/tags/隐私/index.html","53d1dd642fbc11b0282c68617b3f84d3"],["/tai-er-gu-shang/index.html","e71bb9a7006f2404d55ccf7ca476a56b"],["/timeline/index.html","dbe84cb6fa77fe3d05733243629bea20"],["/vcard-yu-er-wei-ma-ming-pian/index.html","f1dc7538fca4356fdf03ffbbf9529078"],["/webfont-yu-zhe-zuo-quan/index.html","a2b26795909e57267a42635c1a72414a"],["/wei-ji-hou-ban-quan/index.html","03eca330ed9aa073a3df4d214a1e4fbd"],["/weixianfan/index.html","8387830bbb3ba8be276b3476eef60f63"],["/wo-de-macos-he-ios-she-zhi/index.html","d4b73dffe908d835191c33b7eeb797d1"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","d4f55817c7d6062dad4558a182e73ce2"],["/work-rules-mindmap/index.html","fc410eda2154b9c1d399d036082d7515"],["/wu-han-chan-jia-shi-duo-jiu/index.html","ee22fe5f70f8e0a7ec6afb1588284342"],["/xzlfbzw/index.html","26463f4be5acd2a6807b7d8f07d71a7b"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","bd95c3f4d918c5f2a51bbb015b96eb09"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","5b609bdd36c6b9126c52690d8d4e0729"],["/yu-ming-zhuan-yi/index.html","359e184219921bbb05b8c68c16ea0db8"],["/zhetengb/index.html","a102eb7caef7c7621b341f3006e6d182"],["/zzq/index.html","5fc201f6d2728ab9d2a12433c3fa9b4d"]];
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
