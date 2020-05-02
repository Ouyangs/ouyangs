/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","c90ee93c69945918a7e31bf69fa845fb"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","b091eaa9e9772cf7da86d4555de31d16"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","038aad973d000558adf85491cea248dc"],["/PGP/index.html","c4c71f8862823bb0b3cc65c4112b201b"],["/about/index.html","627f0ebbb62d3efccd03a441c878a0f9"],["/applescript-jiao-ben-liang-ge-ban/index.html","7f0df8d931f3bf93524b94430446e9a5"],["/archives/2014/07/index.html","522d5df03218d959c1768e89f4ef2022"],["/archives/2014/08/index.html","d854e7ba58ca69502b62b74d00ad697b"],["/archives/2014/09/index.html","fae490d1104ab5c862be94876d3aea51"],["/archives/2014/10/index.html","e3a817dd8bf9676508ed3a69ada0d2ac"],["/archives/2014/index.html","9f6bc89c4e4c44f0d05cb8c101f75fee"],["/archives/2014/page/2/index.html","f4a69f0d13215eaa525dc8a08e8fb408"],["/archives/2015/01/index.html","6f284e100c7ed3bd716a08e5126576f1"],["/archives/2015/07/index.html","d3f184bb5997fbf4412fb6d8f2d7436a"],["/archives/2015/10/index.html","c89c03fe0775dce3a7adf7d9bee060b6"],["/archives/2015/12/index.html","14a32feed1393ce255123ab213e383f0"],["/archives/2015/index.html","eba5cffbf022b13eed64456ab689b865"],["/archives/2016/04/index.html","76ced41b7b94e5fdf3e2fe64b25ca787"],["/archives/2016/05/index.html","ca3d2608f8c7c608bffed36f853412f1"],["/archives/2016/index.html","a5fe3b63b006a1260e143aa6fb4d04e6"],["/archives/2017/01/index.html","99425815166e9a1c237f0c60b360d94e"],["/archives/2017/02/index.html","672aae835310b62db89b5bc243a499b3"],["/archives/2017/03/index.html","4fced2bd1795dd8cda52600b11496eed"],["/archives/2017/05/index.html","316d2143256f24f8a524d8f764f23905"],["/archives/2017/07/index.html","227a6f2a46144fe5093ecbb6f89d03e2"],["/archives/2017/08/index.html","c1b98ec73903fbb35597a78f34bbf24a"],["/archives/2017/10/index.html","a52d3761c03fb83f594c10726eef3d7b"],["/archives/2017/index.html","da1490c32c9017b275fdc103ef2d0e66"],["/archives/2017/page/2/index.html","c96955da446758ad4d77a0ca76ea1286"],["/archives/2018/01/index.html","8dc944df85fff6927e8d657237c8d210"],["/archives/2018/04/index.html","a30bae064cbc6f2605068aab095b00ec"],["/archives/2018/05/index.html","a679b4216044f224f2526389afcbf697"],["/archives/2018/06/index.html","12bb3eb1d7b005c8bc8d76eebd40352e"],["/archives/2018/07/index.html","1f1ea9079dfd5f987c6af0e510f2709b"],["/archives/2018/08/index.html","29bd8e6cd5a8e5d15a3b34425d7ccc69"],["/archives/2018/09/index.html","ade754ee7b54463bd3d8cbd4a6b0602b"],["/archives/2018/10/index.html","6f4824f789e0fac19065907cfe996bae"],["/archives/2018/11/index.html","ce7c1f8238b3f42b25416bd2ea2b9b1c"],["/archives/2018/12/index.html","44983c6eb2ba757cfa5e62cfd4a95c83"],["/archives/2018/index.html","ae96f6e27964e5c6236a3e4484df5faf"],["/archives/2018/page/2/index.html","383095478a434f178ad4a5780f42500e"],["/archives/2018/page/3/index.html","9d74f3799c85a442bd317f475f9f4018"],["/archives/2019/03/index.html","077cc713287dd60a38c153ede830923f"],["/archives/2019/04/index.html","390d2eb52e5456625c06968a572f19d2"],["/archives/2019/05/index.html","576d48a7c70452528e541690802869dd"],["/archives/2019/index.html","2de4f0ae90e2ac2d2660a849ae93628a"],["/archives/2020/02/index.html","d0bd9ad953b4d4ce809cf1709692963e"],["/archives/2020/03/index.html","930b458b73e7b652e02114a71ea898a6"],["/archives/2020/05/index.html","d7cb050f8e3c0037b8d8732ebb46b2f4"],["/archives/2020/index.html","3c684072d5e78316ce08e99c36866e1f"],["/archives/index.html","640554c13dda42c66eec6e0dcebfa985"],["/archives/page/2/index.html","cb4e2140eced09b4b23a62bb07b3bd94"],["/archives/page/3/index.html","e25a5283f110f50a5bbdfe8ac89b5c83"],["/archives/page/4/index.html","b53a4755c3f687acdc81f32ee964fc22"],["/archives/page/5/index.html","a3f2894fe8aecfd6b38e7a2b6dc6bb25"],["/archives/page/6/index.html","81e7d5c48389d6f474dba7cb75823f2a"],["/archives/page/7/index.html","d40a420ad00731919b663db5efe3386b"],["/archives/page/8/index.html","3b81e89589befa73d114e3244edb8a63"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","dff36fdfc1cd5994e41fb0b5bfe2f991"],["/bao-guan-qin-zhan/index.html","acfa901c08efa76c1016026dc1841938"],["/bao-li-yu-qu-cai-qiang-jie/index.html","34f77b0f1641f9bd9e6bbb5daab2aca7"],["/bei-dai-li-ren-sang/index.html","9db4f76ebd27a284a637219d2bd8f6f5"],["/books/index.html","825b2993a8d92c270b9fadb388225b98"],["/categories/Blog/index.html","1d2549e720c68613e9fdabc50a562aa9"],["/categories/Blog/page/2/index.html","ed0f724fab3eca169f795e35ee6dcf91"],["/categories/Blog/page/3/index.html","2f2508d2e0fed61cc6e1f1207a4430a5"],["/categories/Blog/page/4/index.html","8a1eb495cc4975deb179b5a6c691c244"],["/categories/index.html","a825121db8c45015606745f54bc57688"],["/categories/法学/index.html","61acd019e31b8b0d09bbe4b45deae25b"],["/categories/法学/page/2/index.html","c1c190c7fc3f4321ef9175625cde9e1d"],["/categories/法学/page/3/index.html","18e8e8842e9cde6ab6461247baa7e7e6"],["/categories/精彩分享/index.html","39f59d32e966ed824881e528c134b356"],["/cclisence/index.html","7faad27a9007a808bbbe42160da8bb21"],["/cetrain-issues-iv-for-company-law/index.html","879d80166618774fdd7c50fb7f01f14e"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","3b83e13b9a989a9a3d1f6b0388cf0423"],["/cs-hubei-2017/index.html","7266508c8038172e03f6a1c6a8988ce7"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","f36b4f8ef86e878c61941f02be1ffbce"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","0e58863d1164a89a6864c60b4d7c4699"],["/due-pin-workflow/index.html","4d6741209ace2a26f6f35933abadf775"],["/duo-ci-zha-pian-shu-e/index.html","0e00b885699cd82eec8d83f3bb03dfc9"],["/expert/index.html","ab591bc5c580a76e1a93817aeaa88b56"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","4bf71ae2ca607b356717edf005c67232"],["/google3756ddc34336b7b9.html","a27b446902db0e112742583a6b2ed5bd"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","0242e87981926a83c0086fdd0357b74e"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","039894d31068c51cf1ea59e93e85dbc9"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","4fbbf7b1f76efe7d271de24435eb1aed"],["/hustlaw13/index.html","0161df410d3f6fb5df552cab0710092b"],["/hustlaw14/index.html","cd7f0a3d3159ffaec4db82efc4292a14"],["/hustlaw15/index.html","41d177fe768bc6cd9b3dd4e1b8a56a97"],["/hustlaw16/index.html","358f5f0a029578363799b62ca2571ed8"],["/icloud-terms/index.html","d582cda20ae9b1bdb75f3693e7d2c806"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","9a9df9e4a7b5d9b291a4cbcc16e21d5e"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","b413916081c730d27fa847dbeb151023"],["/jdsnk/index.html","21909c7f545928b470f30f67eec0d50c"],["/jian-qiao-fen-xi/index.html","2864038072c722e85b9997abc2055452"],["/jianguoyun-keepass/index.html","a3231781fa8b9350f1dabb91c63845b6"],["/jin-qian-bu-neng-mai-shi-me/index.html","cd0287370191d65713b960a3589b1bc2"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","17158104fd1f6a1a7d8d2ad8442eea9d"],["/latex-times-new-roman/index.html","ad14b7e9a2f584a900378e725eecb39e"],["/latex-yu-lun-wen-pai-ban/index.html","e506c7ec06bc73fb97b9884937cd9b0f"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","9a32b258b82bba06edc1ecf782e0c09f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","d5f60453f9a7aacf749eb3b5a848c594"],["/luan-dan-20181116/index.html","6f5964a62e54f5d285b99880f9d3a0dd"],["/luan-dan-20200217/index.html","012e02c371178f2cd7105dbb0f36d62f"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","8232547c96c7a1c21b432405f0be2ac7"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","ce9a7b952a1bafa636eb8b2b75042c47"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","01a03115036a9c461d8fa87faf489ccc"],["/movies/index.html","36f1069b5e9990cd6c10269bfd2c118a"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","e39be3d7cbeb6f720b28aa640be6a9e6"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","5f3f5dccbbfb1ae9fd5804a0caa6d782"],["/opoo-zhe-teng/index.html","e7f4233582004a1fe9f57cd8cb7ae454"],["/others-00s/index.html","09972ba39cc5d330305ad2cdcfa447c3"],["/page/2/index.html","76a43ae0b97e091949fd7ab31087df80"],["/page/3/index.html","77e99f7ad5a70e2a805665eac062645b"],["/page/4/index.html","25d377fc6cccca97273fc448dbe2c0a0"],["/page/5/index.html","63a7bcb1ef42df62f64d14dea484518c"],["/page/6/index.html","f2803fe36d5f3ca202765c8d356ada21"],["/pan-gu-zhi-bai/index.html","dab9a9a914227c1850b1a65eac2e3467"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","41e49ab2a67b7dae2d48d8d5571520b9"],["/posner-homosexual/index.html","e79bf429e6528a7c72e881f531014a92"],["/qxpj/index.html","f0fed0a40860dc937ad0497418a9fc37"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","7476d67069e4f0a4617117e931fb9b8c"],["/shuang-pin-vs-quan-pin/index.html","9471687339b5db34878916011fb8ae6a"],["/shuo-shuo-xiao-fei-quan/index.html","6acf7c0fd4902da2fd44b0f67095e42d"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","4b049230b0d29d21e8a8a6479cacfc3d"],["/software-reverse-engineering/index.html","31d930e58e9ce77caa74513d6a3b1885"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","8f68ae15cf820dd7a86e6ed5562f4631"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","11a7f99a4b466f9ea9482255a468bab7"],["/sw-register.js","3d4d5398be3f535efa405754d56cadd3"],["/tags/2017/index.html","619b98c476546c9fbd0d185d5f9f81b9"],["/tags/APP/index.html","1e4f63b3010041947ba2ffc7be5556ce"],["/tags/Apple/index.html","a0de61db9b6b5350a57c4a0985b15302"],["/tags/AppleScript/index.html","5ac95f9ec4ad82cf13acd801a7232409"],["/tags/Due/index.html","fa79f58c18ea52ebc856d88f3074dba1"],["/tags/HUST/index.html","cac6241aa3b069d359d5eeaf8bbb1ea8"],["/tags/Homebrew/index.html","5006d4afd79a2af7ef5df3cb1a6183c0"],["/tags/KeePass/index.html","fad33afac23d5e903de79209fe206d52"],["/tags/LaTeX/index.html","5281d6d6a98b97ac7d9964a9d2990d03"],["/tags/Namesilo/index.html","fa7cff6401a054809e6ad37a38782faf"],["/tags/OpooPress/index.html","2fd29e3c3adb66d44d2c834dc2ec7714"],["/tags/PDF/index.html","738af5b486aa7e30e0f1a3b56e515618"],["/tags/Posner/index.html","7d6e7af990687bb77a729f6e8dfc197c"],["/tags/Python/index.html","f202c6d297a79c87779018f3db566b33"],["/tags/Rime/index.html","0005eec5ae8bf4837fc500e0f74e9d3c"],["/tags/Tampermonkey/index.html","f300f4af826af5b7ef2b56d164e47c0f"],["/tags/ToolMan/index.html","e08a525bc7b09e48e2d46b5c81ad2d77"],["/tags/Typecho/index.html","08175e2a87804cb66c77a925289d7b3c"],["/tags/Workflow/index.html","402a42d72a48b5c8b341c667c2614e32"],["/tags/cc协议/index.html","c71d5560d0e76b8bcef1643283fd8f04"],["/tags/iCloud/index.html","c7f5d8984f419bb9b5d6bb0ded89e079"],["/tags/iOS/index.html","9f1cf9d597a507dad32bf495d8f9eff8"],["/tags/index-1.html","073706e0bbb7fa13eac3a90bd54b5da5"],["/tags/index.html","073706e0bbb7fa13eac3a90bd54b5da5"],["/tags/logo/index.html","1006f43c34b6dd6e15950bd5422f8c94"],["/tags/macOS/index.html","fead23b1d62c9ada138e5196fb41f7b7"],["/tags/vpsmate/index.html","29f4080b273915f790bc4c140bb7e029"],["/tags/zsh/index.html","d54b074eb352a95a7bd223770c3ca161"],["/tags/乱弹/index.html","e2b4861f814311e0767a5cba8be4ebd5"],["/tags/二倍工资/index.html","c5dc7305becc2d110fadc5d7d83036c3"],["/tags/二维码/index.html","1273824097937590c7419154a4fa88f4"],["/tags/云盘/index.html","33241a5922b149c753898b48f726947f"],["/tags/交通事故/index.html","eac2ef913c59aeaf11e4686753e5e8ac"],["/tags/产假/index.html","d07dfc1075ab708a011f91b0efbe209f"],["/tags/人身损害赔偿/index.html","6e70c1d04a61316ee315e867d9376fdf"],["/tags/代理权/index.html","48f37715431c3c03fd304cf288b9899c"],["/tags/优先受偿权/index.html","ecac6a36c7b4a969f3d8c1bdf5ffdf67"],["/tags/作品/index.html","39b90e7929426f19ba15c7ff03f929fb"],["/tags/侵占罪/index.html","3a6403d08620e3fca9736a178d64b4fb"],["/tags/儿童权利/index.html","099c4e74f3a2f948e518ba54da8bdb53"],["/tags/公司法/index.html","cd11ce200c5bff2beb9639a371cf25b5"],["/tags/共同财产/index.html","c880e56ee29be8f60786e2076a3eb172"],["/tags/刑法/index.html","23eb9d380a94034f446060b5878934c7"],["/tags/劳动关系/index.html","d1eb6c775a0128af78317a3c86a83b5c"],["/tags/劳动合同法/index.html","0f115ace160adaaac6598cdb1a88ee95"],["/tags/劳动法/index.html","5fba43e7c92899c4b1a055f317f0cf6f"],["/tags/华中科技大学/index.html","357589bb6ceb074c7bdc07d4055691a4"],["/tags/华中科技大学法学院/index.html","04d9f5f1a5a1722dda0bf5093f7e1e06"],["/tags/危险犯/index.html","7a72b5bb418d02444bb9b0c55b9d4cef"],["/tags/反向工程/index.html","5ced5db98b43fadaf9e71b4fd6ba08a0"],["/tags/发行权/index.html","a9fceb4394ec3fb96e3481c95e26e720"],["/tags/司法解释/index.html","e64399a9f490265520baf518dbdcc1d4"],["/tags/司法鉴定/index.html","248e5cbcbcef6d765ad5ef3b4fe76726"],["/tags/合同主要义务/index.html","b4da65a3d2980cce8ae948ead6c172de"],["/tags/合同法/index.html","c80347f754da452b22702faf252b209e"],["/tags/合同附随义务/index.html","fcfba91674f1d15f250fab42aa23eab4"],["/tags/合理使用/index.html","e090856236b364e992908033bf1d2f40"],["/tags/坚果云/index.html","eccfd9656b1e331f9e770bf63df00307"],["/tags/域名/index.html","d3ff082ba1100c04fe9d1f763a945262"],["/tags/字体/index.html","7b708608b0b853add737b8c599cee779"],["/tags/实害犯/index.html","0907b9c91fb940334acebb23c11d71d7"],["/tags/密码管理/index.html","5b94f0bedf75aff9393bd35800e805f9"],["/tags/工资/index.html","b0f4c347d014c1283903ab27165408b4"],["/tags/待履行合同解除权/index.html","2a9cfeeb48ee51b97ff569b45f62da94"],["/tags/律师收费/index.html","11e1f6b2c67a5a652f62c50bfb7ff5c0"],["/tags/思想表达二分法/index.html","1aa4ef1821f174dc4e46e64dfd489823"],["/tags/思维导图/index.html","eb835442a373a831ecbc2d06cbf83bc6"],["/tags/成本收益/index.html","5d8ea96cc4bbe8b0c54e6d21a76041df"],["/tags/成长/index.html","c2db57e87eb9ca8369d21abf198f8b1a"],["/tags/技术措施/index.html","d6e8cb160020e07a8e48b2b3c9806727"],["/tags/抢劫罪/index.html","88299eb4e323b97a9f75f70aa5655086"],["/tags/抵销权/index.html","ae1883cb30d13262ebb649de0367fc7c"],["/tags/排版/index.html","606be478cf19a287b23a5a0836759cd3"],["/tags/插件/index.html","423db082afdec0fc84d0e984d31fcf98"],["/tags/搬瓦工/index.html","f5186492b85867d0ac0dcc7ab8077d31"],["/tags/故意伤害罪/index.html","9db2f64eb336b98fb3739086b50762f9"],["/tags/效率工具/index.html","e34bc82a3753babdb86557576a8fc1a9"],["/tags/教育/index.html","d60436da26062f1fc28493a80ac70b25"],["/tags/断舍离/index.html","6d9615d379d7985382a8f71e5acc1aaa"],["/tags/无固定期限劳动合同/index.html","785db6226c05bb76fc1e0d982d485bd3"],["/tags/最低工资/index.html","52368018ce6b850e6d43d0d10e1100d7"],["/tags/最高院/index.html","78281a6a1580a57a31a65a72b4b93295"],["/tags/机械键盘/index.html","eb03fbc50f8b3c101d3ffea3350b07e8"],["/tags/武汉市/index.html","93dc0fdd40ef578baf0d1be6e1a84ebe"],["/tags/民事行为能力/index.html","f8c5f1fa295ce666f5c74619da2fb8a3"],["/tags/民法/index.html","3d7f6b89af08281a11401967a10d1034"],["/tags/汉字/index.html","3898c907f85693ead51e8271ae69236f"],["/tags/法学/index.html","0fa8c89a3f66e6e0b86fdb9dd530091f"],["/tags/法定许可/index.html","4b290486b780211cf24ca695d307619d"],["/tags/法律/index.html","0afff08f6df662303f4ec4738b2dc674"],["/tags/法律援助/index.html","73b8f770d05d5e4f3f22595704de6711"],["/tags/法律法规/index.html","d956762c5eced4cb517ca475b611b064"],["/tags/法律经济学/index.html","316e47c06e073f48dbfac4dc02b0325d"],["/tags/消费者/index.html","c1faad6653061d008cd9577bf88d9fb3"],["/tags/湖北省/index.html","4d1aa42f57a42824cc7f438726ae922f"],["/tags/熟人社会/index.html","cfdb38ba051911306a778a35d80649b2"],["/tags/物权法/index.html","660b8ea6b974943b6bb156095cb0f111"],["/tags/用工之日/index.html","6a899089baca3eadb962b5a5c5636519"],["/tags/电影/index.html","d224a3bfa25f4240689c26f3ae6f5722"],["/tags/男女平等/index.html","b0e910478b6be9d116ed16eadabeacb6"],["/tags/知乎/index.html","c506b6e11370e008dd306e3f71253318"],["/tags/知识产权/index.html","34b0766f5ee64c563d042b90cc664dfa"],["/tags/知识产权法/index.html","9e47084d307ffa1c9cf2f85e955f59e3"],["/tags/破产法/index.html","28058390b54eabb68a06e0a3d649a325"],["/tags/破产管理人/index.html","ec2791b906b3a027d669e6b8fdbbc7f1"],["/tags/社会责任/index.html","7dc9df50f93c7c3dd2ccce59abcc6657"],["/tags/社会问题/index.html","6f1969f65e94fd75900b94eff1032bfd"],["/tags/经济学/index.html","74e98e0415f7ebbf3da6e4529d62570f"],["/tags/结果犯/index.html","0e9ef1c4768189989480c55b9e1e14da"],["/tags/缺席判决/index.html","c4e10704954894b5a76f50028c7e9a3b"],["/tags/考研真题/index.html","b6728d3d4b44cdaf384c837dce6e3290"],["/tags/著作权/index.html","badad21bcdfc60b2f8b34f0136aa1ea8"],["/tags/著作权法/index.html","a4563df921e261b42f6d331c38f0c39d"],["/tags/行为犯/index.html","4026ed61e319bfd6c61d7aac2e26a8a3"],["/tags/行政不作为/index.html","c2ec815653805419b4bed4450bbf2f4d"],["/tags/行政救济/index.html","a0f0476fe73b7d4a8bcd80f6dc03076f"],["/tags/行政法/index.html","5332023549380b2fc969a1e05c679ff3"],["/tags/装饰装修补偿/index.html","2b7c3026d3559f20fa01d5b9088f6301"],["/tags/观后感/index.html","0da219f9a20c4b58be6609a4341501ff"],["/tags/观念交付/index.html","23f177ac72f096369b5403fede9155cb"],["/tags/计算机软件/index.html","5a69d56a65ef6bfc787b811e745f3471"],["/tags/认知科学/index.html","dee5040b532a567ceb59a221b1000563"],["/tags/论文/index.html","ae535fe6b7bd8c6c0d020cca5d084ea8"],["/tags/诈骗罪/index.html","795f9fd2d7460e501fdaa34bc927f72a"],["/tags/读书笔记/index.html","76e6b4c06c029d94e4e72ff307a3ee5c"],["/tags/赔偿标准/index.html","cc2384666c119129d12761c29521689d"],["/tags/输入法/index.html","486e44e9bdedbfb537d128eb3e7c86e0"],["/tags/违约责任/index.html","e6f3efb004bb4eb54219fe0b7673c248"],["/tags/违约金/index.html","59ff60547fc8a01758fafbd49ec7266a"],["/tags/释明权/index.html","df6e45d93a5aca4f6a3d80b8d695665b"],["/tags/隐私/index.html","7b9270d7a8a7faa284b447a8ecfeea14"],["/tai-er-gu-shang/index.html","76b945dcfa512a79394436a81375b859"],["/timeline/index.html","4704e52e5cf56ebfb9f44be65626b296"],["/vcard-yu-er-wei-ma-ming-pian/index.html","ccbbd2bdd0d7dbf404dbed363388869b"],["/webfont-yu-zhe-zuo-quan/index.html","5a4fe91e9be51710b0dd448ee43bea2d"],["/wei-ji-hou-ban-quan/index.html","5be37369a5d3c7f1fc1b030ef4bca6a5"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","152396d6dca1f5de080f906f013eef22"],["/weixianfan/index.html","ada5120f779c0b50fe7b176587ee5207"],["/wo-de-macos-he-ios-she-zhi/index.html","b98139ed8314534cd17228310bb7c53e"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","aabd7f5e363753fbcbe1e559f1fe0b4b"],["/work-rules-mindmap/index.html","a63782daa12cb5911770b654a6434544"],["/wu-han-chan-jia-shi-duo-jiu/index.html","5dd036726ef3869c344bb93bc9d9f71d"],["/xzlfbzw/index.html","b5755a8956190af526472b18235d40d3"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","3085db19e9dcfc1c11749ac067b2e295"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","ccdc439c7aa704c318ac3a8c7725894c"],["/yu-ming-zhuan-yi/index.html","559ec4348f68d7e77b2a3ffe7e2fc7e0"],["/zhetengb/index.html","de5e9cf7be80f4a159931ab14252573c"],["/zzq/index.html","03aba36f4cff2522c0626670816d637d"]];
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
