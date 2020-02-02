/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","7aec881f3950fc461eb7c74029e212db"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","6fb721c30168f579cbf9b90964589ee5"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","3c83074f5e1bae5f2fe5608f03dc1ed3"],["/PGP/index.html","a8a5ef2525dfaf05d67ce880caa296dc"],["/about/index.html","33884e72fd8b6f25d5fd66e44d0f98b8"],["/applescript-jiao-ben-liang-ge-ban/index.html","0049be4c26f181e505708848e0faa333"],["/archives/2014/07/index.html","fff8816ca6ee14993c53f9790d1675cf"],["/archives/2014/08/index.html","fd148c375c938b5eb4c28d967bb5ae2f"],["/archives/2014/09/index.html","e8195dd5a7cc937942e841a06cb31a81"],["/archives/2014/10/index.html","3104b1255115080babeabe960b7dead6"],["/archives/2014/index.html","0caee9c01ab40ede8ab56cbec6d9e1d5"],["/archives/2014/page/2/index.html","e3d798d24c35563ff5700ce8efd1b79f"],["/archives/2015/01/index.html","ac816473183ce340400aefcbb830b980"],["/archives/2015/07/index.html","6cbc32ed68f1dbe995fabea11402ae93"],["/archives/2015/10/index.html","ecd337b773b4558fa06cd8ecd08c26d7"],["/archives/2015/12/index.html","b37c7c9a27c1d7abdce152a662b898cb"],["/archives/2015/index.html","a5b25313015c541135dc35a0b20635c0"],["/archives/2016/04/index.html","ff5fb1e687374f3f0cc0b22f40e0ff35"],["/archives/2016/05/index.html","2a503c14e7091acbd9dc87fd79a41be6"],["/archives/2016/index.html","7ea13fe48bb29d5886305533eb84cd60"],["/archives/2017/01/index.html","282fc9cb2df963182d7943d1f737015c"],["/archives/2017/02/index.html","4072a6e436373dacec989a888e7b3e02"],["/archives/2017/03/index.html","1fd85caa032623b50f4aa548bfc878c1"],["/archives/2017/05/index.html","92502b886ea1061ce6952a70357a0efd"],["/archives/2017/07/index.html","6bc03a80334e6f651619aa9016262ea4"],["/archives/2017/08/index.html","be9ad9af5c8f51bdd529734f3d52854c"],["/archives/2017/10/index.html","23a465602807dee5c1109789c086d66e"],["/archives/2017/index.html","bc874b434c1aa99b5687eaee66334519"],["/archives/2017/page/2/index.html","ead600f8c1967a31f79c554c6807fb4c"],["/archives/2018/01/index.html","f4c441d1dbad2c06f4d2da2e62f9c2c1"],["/archives/2018/04/index.html","22f021eaa1f913aa52fa5a3410dad0db"],["/archives/2018/05/index.html","7fc870d855cf7cc833cc319e7bc9bc2b"],["/archives/2018/06/index.html","b9b2124e62dc1e98c026c346a93ab4b5"],["/archives/2018/07/index.html","b723a1d1b4560b5d89ed84f05560cabd"],["/archives/2018/08/index.html","006ea62022c7133a5be5a972844faed6"],["/archives/2018/09/index.html","bee6e57e202614dc3a38161e5b15f1dd"],["/archives/2018/10/index.html","fa0c6b6f8dfc62312e5c03fe632e9639"],["/archives/2018/11/index.html","174247c82d26ec5542494018d2d807f7"],["/archives/2018/12/index.html","f9740daeb4f0fd34ee9b6e7a4188002a"],["/archives/2018/index.html","b3e4b2651de59d81368171b80c065c1f"],["/archives/2018/page/2/index.html","28282e6f7567aeaece0682e89cda5cf2"],["/archives/2018/page/3/index.html","6c965fa02c3dd3b32902486c120986f9"],["/archives/2019/03/index.html","bec137f921eade5140bdd78e98d9ffeb"],["/archives/2019/04/index.html","145c7854b1fa64cfbadbc7665059f382"],["/archives/2019/05/index.html","d556d82b7411e4fcfedc879a000b769d"],["/archives/2019/index.html","d0ee72d51f68d4874b52b423e6b42688"],["/archives/2020/02/index.html","7527672aeb9a5471cf30d7750679deb6"],["/archives/2020/index.html","2ccae05e0e29d8257a9eefeb5ed8cf2d"],["/archives/index.html","1b45b763a339e881a81fa09aed5af08a"],["/archives/page/2/index.html","724e0849d9ebc4c7c257d196e8b790d5"],["/archives/page/3/index.html","2ea06e4641acf01b23ab044063bcebe5"],["/archives/page/4/index.html","b7b397235d88218da4d29bb1e8a68ac4"],["/archives/page/5/index.html","29646bc81a2b6c7800c280a088efbe8d"],["/archives/page/6/index.html","c5d8429593f8d36120c904785cc45f66"],["/archives/page/7/index.html","bcce315811e8df135866313bf56e6fcb"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","a95bddf2efe985aa82ba1cb49ef41b7d"],["/bao-guan-qin-zhan/index.html","ff109ea80943530f3ea9f36db2cdc32e"],["/bao-li-yu-qu-cai-qiang-jie/index.html","de49f79d30c788dcd2cb556007ba4d07"],["/bei-dai-li-ren-sang/index.html","13fdb394066ba72983bb77f6ec3a48b8"],["/books/index.html","5fe6fe7982f6500885e53135c31b32d3"],["/categories/Blog/index.html","6d20dbe949595a2bbee1d8bb56123fdb"],["/categories/Blog/page/2/index.html","d610a1aa8b11591e06a1a134b35ae693"],["/categories/Blog/page/3/index.html","a9c1bde0500052bc7cf84227d60641f9"],["/categories/Blog/page/4/index.html","f717318d139bcb925ef779125895a649"],["/categories/index.html","da46675dc2aae708bdd04faab497cb25"],["/categories/法学/index.html","6bda65707c62fa5a9401cadfad1f61f8"],["/categories/法学/page/2/index.html","ecc9d71a26872844f3c1a858964b961f"],["/categories/法学/page/3/index.html","0f791aed6d0a2c6b785dae0dd7736566"],["/categories/精彩分享/index.html","7f36cffcbd1bfc7cd32862662657fe09"],["/cclisence/index.html","91252d5260b230a8ea389c0c48f6a357"],["/cetrain-issues-iv-for-company-law/index.html","11c79728fa8472154d3053cafdf47084"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","39570a8eec9f1dfc907c39b72f4b16ed"],["/cs-hubei-2017/index.html","cdb27c772f336b9bdde23e3ca42669e3"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","6368f0897eda613c684e469defe97532"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","4084e32a0c700adbce8cd38d14351ffc"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","81afea82c238eea6bc0480357706f692"],["/due-pin-workflow/index.html","6776e72082cdad26516cdd0ec1c76199"],["/duo-ci-zha-pian-shu-e/index.html","7774e3560b88c625700fd4e5f07cd437"],["/expert/index.html","d65c33cb0ac8d6bf6338dba52b8cf290"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","1612765b55e1c57c26dd726031b6b1db"],["/google3756ddc34336b7b9.html","1024d1f468f8f19f3a008974c9bd32c9"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","17f6c1aa2a94c89772f9ab2a9fcc438d"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","f7fd7afcc5ff23887b19c55d0ad20d05"],["/hustlaw13/index.html","3d402709ed6576fb804542af090b8fc9"],["/hustlaw14/index.html","e6be0598103d7c49bcca0542dbe9a51c"],["/hustlaw15/index.html","b0e04162d0e2a95795b27bfb5ab0f810"],["/hustlaw16/index.html","b9c3d1e44a447160f2881597b76f3fbe"],["/icloud-terms/index.html","ae72aa9d411fcefd2ab17b0041bae17b"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","e76a0d20c02e51dfb425792ef2a3c9cf"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","1b9f40df92de16be85184a6b0b4b7bfe"],["/jdsnk/index.html","5ea699c60c2f4f8bf4b96e3fe3d6797a"],["/jian-qiao-fen-xi/index.html","ac82b9e7bc4f8e0e91108bdc14546fa9"],["/jianguoyun-keepass/index.html","8c080251bbfc90c45ac7348050bccb8d"],["/jin-qian-bu-neng-mai-shi-me/index.html","786fe9c9ba69d55351a6675a7a5a1641"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","02aa828a800f8f54d821ec7598f3551d"],["/latex-times-new-roman/index.html","e1dbf87f68b380c2c2bb3c61ba0c51fb"],["/latex-yu-lun-wen-pai-ban/index.html","0d3d778580b74d9cf3eb0fa30c6a144f"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","303e23cae600aa591576d1ebec990cce"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","39c86d5bcf1d6844ae04192c86fe1faa"],["/luan-dan-20181116/index.html","6c7f714961b6b101a091ff0751c91711"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","498d0f754a7c43a3efc115a262237cca"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","824c0552142403a6815f0eb649060449"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","232286b82b8bced7c00c479921259603"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","b82f859fb6113a27376431b71b60569d"],["/opoo-zhe-teng/index.html","abc4389c47b23e0e6f19c70829305d62"],["/others-00s/index.html","2094f4c465845983575a0866181d92d5"],["/page/2/index.html","4fa5d757cdf07429126ddf3dc14fd8bc"],["/page/3/index.html","a7211fa200ece0de300e32dcc0756dad"],["/page/4/index.html","b64a2fbfa21ea0ae0654fe7d32aea3bb"],["/page/5/index.html","830c40961b0e4e1f2fd16c04671141ed"],["/page/6/index.html","29a5a04cb10bb2eab1a98da219b0163c"],["/pan-gu-zhi-bai/index.html","6401ca245dc0bd6a929124e0268b4c4e"],["/posner-homosexual/index.html","951e9332c671b01091bfcac2d624a5f7"],["/qxpj/index.html","4e8ce0db399640eab277b260e307b7a6"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","f08cbdd8d366698f6aebcb44fb585f82"],["/shuang-pin-vs-quan-pin/index.html","e52abced521e3ee1f635db6f9e7d5511"],["/software-reverse-engineering/index.html","0b4d1069d364635654cd1510d55b447b"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","f23419d89e1be438f65ff443bec7ed0b"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","4aa7fb181334d40ab1a47829748328ec"],["/sw-register.js","c269b845b39a158860da03b407880659"],["/tags/2017/index.html","c8528e03904cd5897b6e0873714b942f"],["/tags/APP/index.html","dd0ab45a4d8f7366878a31d8408b160c"],["/tags/Apple/index.html","31fccc429209f81fe131be8101414bea"],["/tags/AppleScript/index.html","50b4fe180431f112551c541d3e06c022"],["/tags/Due/index.html","c837b6a8b0c998255c4b5bf3f6c4c5c9"],["/tags/HUST/index.html","caaaaefa615427381f38ef41b318c2a6"],["/tags/Homebrew/index.html","d92db62522e3c8c945b1e91e9685b16d"],["/tags/KeePass/index.html","dec6207e608d4aa979f1a642bf7c4899"],["/tags/LaTeX/index.html","9b276079c8843a113628c9b9cee6738c"],["/tags/Namesilo/index.html","afd5bba3cf2a22c7bcd90b3c0c89a438"],["/tags/OpooPress/index.html","f7826c87bf5c55d9e84c1e77bebe5294"],["/tags/PDF/index.html","7c928f3d0207ae5553134d0091f1f8be"],["/tags/Posner/index.html","e3dcbb6fd179305885356615c0bd925d"],["/tags/Python/index.html","e17f6d1304bf2d69f0e3ce5170f86997"],["/tags/Rime/index.html","22ccddba99682922a7bac82b6c4ffb85"],["/tags/Typecho/index.html","81985d3ea30c8dcd068a2a06405b0474"],["/tags/Workflow/index.html","efd542f184f15f1e08b489a603e4e77a"],["/tags/cc协议/index.html","92acf14f27ec0815f386b47abf0194aa"],["/tags/iCloud/index.html","745b751eb9171094c04a24187aafacd5"],["/tags/iOS/index.html","d34ff2201bc657334b9aa47d94ec0e47"],["/tags/index-1.html","7dfd6ffc54a4141de2deaffb3e9a029c"],["/tags/index.html","7dfd6ffc54a4141de2deaffb3e9a029c"],["/tags/logo/index.html","8dafb44ba4405b70dac62c0b83c990c7"],["/tags/macOS/index.html","242b2266ec4ff9647056c164e9b41224"],["/tags/vpsmate/index.html","5ee89df09ef03c2fcc269b1dea960e14"],["/tags/乱弹/index.html","f61504accec75331aa2ec987c2a513b3"],["/tags/二倍工资/index.html","a948617510c889577912fea02b428df8"],["/tags/二维码/index.html","64154493977f8c34912d1c5166802d95"],["/tags/云盘/index.html","bac7ddd59b27c7b6428b4698fa3bca99"],["/tags/交通事故/index.html","63004c8f9d8d76a21096f346c1d88ebd"],["/tags/产假/index.html","e3f524f26eb1c42c811423bcd34b5a3a"],["/tags/人身损害赔偿/index.html","685564fd2775636c8f8f09421818e7f6"],["/tags/代理权/index.html","91eabe804e301193c006e22619c6eb49"],["/tags/优先受偿权/index.html","1ecd404298f52dbbef564dbdade8ef7f"],["/tags/作品/index.html","38182a914d64378bfa6f81a22994265c"],["/tags/侵占罪/index.html","31744508f19e2b981b9fa35a23d58cb9"],["/tags/儿童权利/index.html","4bb61446a0fe573e97984742cd3c4e36"],["/tags/公司法/index.html","2bdd88e026267e72847f55c47ebd3992"],["/tags/共同财产/index.html","a19da8d26a97ddb176a2f4e825345026"],["/tags/刑法/index.html","129a9367bb85cf1f7ee43cc92a0458e1"],["/tags/劳动关系/index.html","ef980f5787f051b02149df7f6ccf1716"],["/tags/劳动合同法/index.html","e17b1a48e4d87eac59f0a1a11a27b916"],["/tags/劳动法/index.html","f8a914319becf9a2b72433b1a4597c85"],["/tags/华中科技大学/index.html","72f9e5fbccd012cde68caf485f2febb3"],["/tags/华中科技大学法学院/index.html","5e0f0bee64d4839216c58d4f966cd9d6"],["/tags/危险犯/index.html","0d8ae06628dc4107cca73b693d572946"],["/tags/反向工程/index.html","f19deebf2216efc213aa619b4b93da18"],["/tags/发行权/index.html","4845ea39ae56619eb2fe0833c7b8c03a"],["/tags/司法解释/index.html","616fa6b819f39cbf80519c43be06bca8"],["/tags/司法鉴定/index.html","b40c1af31389d3d4b22c568df07f7b61"],["/tags/合同主要义务/index.html","679e71212e3cc9e22f2e7a567e0e9325"],["/tags/合同法/index.html","b1552bee45f79ffd656381776bcd73e8"],["/tags/合同附随义务/index.html","33c9c40c95966e86c2ed8cc8892d4c79"],["/tags/合理使用/index.html","5958abf3278b98b010e563b565f385ca"],["/tags/坚果云/index.html","d4266e801024b53537297b240d245189"],["/tags/域名/index.html","b30af6d3636a663e443d726536954a3d"],["/tags/字体/index.html","b77f8381ad4d90ab8f146f02568fac83"],["/tags/实害犯/index.html","d823afe46aa0953c9450b8825555c063"],["/tags/密码管理/index.html","5823db7d708dbc38a8aa6eef4ea06059"],["/tags/工资/index.html","882e50a32bb012dce825a3a53528d0ca"],["/tags/待履行合同解除权/index.html","1e29d630b5a5bd12b1c41f684ce4123e"],["/tags/律师收费/index.html","a62ba04c276eda0d22933b5691a6401d"],["/tags/思想表达二分法/index.html","4d90df120dd85bd3eb0e836a081a6e28"],["/tags/思维导图/index.html","8a0e80b839d0cdaf1a8f9404dd5c301c"],["/tags/成本收益/index.html","e11eb3381caeba8149a1e4752d95c005"],["/tags/成长/index.html","cfa72ef4f0240abc7b8e58701b04559e"],["/tags/技术措施/index.html","b192b782d7eea8ccac9af61857b85289"],["/tags/抢劫罪/index.html","ffc30bcb905f9b208cf0944bf0b428ba"],["/tags/抵销权/index.html","ca7a348631e93957bb23e79c04e90ec4"],["/tags/排版/index.html","32be040ec869eaa6d5364797b49d4937"],["/tags/插件/index.html","95d002e764fd2da072e48e07def88bb2"],["/tags/搬瓦工/index.html","21fee3a20c270fcd4a7c31bbe1e742d0"],["/tags/故意伤害罪/index.html","ac4c84bd40d19a60411c0495a0d7d70b"],["/tags/效率工具/index.html","7d95331815194bc0e25a5e73c0300349"],["/tags/教育/index.html","5620787c0b3fd28bf0a3aaded6bb1457"],["/tags/无固定期限劳动合同/index.html","86a672d3b329a5817677b98c5dc781c7"],["/tags/最低工资/index.html","8009831ec9937e9d0fc80ef07b2e6faf"],["/tags/最高院/index.html","bb41a571fde38ab7082d72b649b9621f"],["/tags/武汉市/index.html","50c52c1f717ff3cd6547b180aa69a471"],["/tags/民事行为能力/index.html","3ab12e077fd340bb5f1d0fc0601cc65f"],["/tags/民法/index.html","9d6042c29e717bc4c522e474d625f31a"],["/tags/汉字/index.html","8d76b175b823c43d451ef42737fc8b73"],["/tags/法学/index.html","73d616188cdaebca3ea92110dedd3581"],["/tags/法定许可/index.html","b236b901a6ec1dd72806c40b6f8ab173"],["/tags/法律/index.html","36fbd60a2335fd49e024cf041d02045d"],["/tags/法律援助/index.html","4fe5f3c2d99ad3f08bc0a288c20e8c05"],["/tags/法律经济学/index.html","dc6b45ce2b773b45b2ebb7a915133ada"],["/tags/消费者/index.html","e62a6b5aa10675c72a45f04e6af825aa"],["/tags/湖北省/index.html","7fa281e25b87d87d7b656b5009223524"],["/tags/熟人社会/index.html","c5073c01935537e4c99932cb7c92cdb9"],["/tags/物权法/index.html","2ba26e9ccfb267153c3f7062e0e28359"],["/tags/用工之日/index.html","3253ef16b325b9ed4d4766cd80a20b89"],["/tags/电影/index.html","e998a39c51f8dcb32cd87c40a0fc6680"],["/tags/男女平等/index.html","7c6a3864d246cd7f03d9dac2f3b59f5d"],["/tags/知乎/index.html","cf682edcbb38f11c9b2626391d808fa7"],["/tags/知识产权/index.html","819b471bc5b53cddf299047a3fdbe4b9"],["/tags/知识产权法/index.html","ba516fa42eedceadf2f2b642fb4f0ff5"],["/tags/破产法/index.html","e13647c22fe1856c9c8829f869715c87"],["/tags/破产管理人/index.html","3089483c232037b5ff51846f8686e4b6"],["/tags/社会责任/index.html","82aa7504ad7af20a7e4e183abf7ab9bf"],["/tags/社会问题/index.html","358ac1da9d1c53064e37eed30a409c87"],["/tags/经济学/index.html","7049469b3ee653f18c5678622586f9c4"],["/tags/结果犯/index.html","4235cf793cf7bacfef138edb3e4e1b99"],["/tags/缺席判决/index.html","e09833cb186125ebeb334832e8d14f66"],["/tags/考研真题/index.html","cd8598fecca7ecbd129942858cf9be79"],["/tags/著作权/index.html","a388418ab96d74db6e2baee5a9242c20"],["/tags/著作权法/index.html","9b7203368a50bbcd84844363604c0f60"],["/tags/行为犯/index.html","658921f9ad778081c88624b66dbb33a7"],["/tags/行政不作为/index.html","bf7b16cc6cbd6e86d2a76037f5c8ded4"],["/tags/行政救济/index.html","5139992857d432cd2eb1f287bb07a50a"],["/tags/行政法/index.html","16d4530b1ae0b0304b1d284b6c65b160"],["/tags/装饰装修补偿/index.html","b1194d401bc41b2d015df7615dea6db7"],["/tags/观后感/index.html","966b1329661c76c3ffa9d37b4d114801"],["/tags/观念交付/index.html","dce6bc3d5d7d9d5ec91d231d400a141f"],["/tags/计算机软件/index.html","10d3d95d0a51e7eb111c7b9f17a4bdc9"],["/tags/认知科学/index.html","adb84897d7cb3c1543837fdafba819f0"],["/tags/论文/index.html","6fb514ccb6283ac867a4bc14bee6797e"],["/tags/诈骗罪/index.html","bb3f31f4029d72886b4c4614b1775902"],["/tags/读书笔记/index.html","e4621a9bb59e077cebdbd9cb25b98e0a"],["/tags/赔偿标准/index.html","a49372f62521fb110cb785b7674f3ea3"],["/tags/输入法/index.html","1f77117fc5bdc5fb420a317d95dc8f91"],["/tags/违约责任/index.html","710b99176d2d481b62f1720fb3681ea9"],["/tags/违约金/index.html","a39c428f3dea9d8b8f01fb716a334a1d"],["/tags/释明权/index.html","1f4c787a2bb1d157c63ab1de1496856f"],["/tags/隐私/index.html","a40f438fc533ea20cb9189baa0969e6e"],["/tai-er-gu-shang/index.html","aa68f4929e3c034f00ecabba555b59c3"],["/timeline/index.html","2d69a6f163aad1f7dc4f1dda6faf4aa6"],["/vcard-yu-er-wei-ma-ming-pian/index.html","22c85db894f402ebf9df00d380678b9f"],["/webfont-yu-zhe-zuo-quan/index.html","b19169ce3af2516fea570f9ee41658b1"],["/wei-ji-hou-ban-quan/index.html","1149feb8ebdf540174bef74a97e87a6a"],["/weixianfan/index.html","462ec516ede3bf02686be30a53442197"],["/wo-de-macos-he-ios-she-zhi/index.html","a2d1c9bda86c9e500f328a4e85bbf21a"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","4075efb7f47161d06d36d1c6b29ecf22"],["/work-rules-mindmap/index.html","09645558ea29c623bd6d8a2fc302b840"],["/wu-han-chan-jia-shi-duo-jiu/index.html","1da07636f9ae118e26567fe583b6eb0f"],["/xzlfbzw/index.html","7152cf09b530092c0bbe133a22af9024"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","2d5ed1cce90e6547041e21c3994b724f"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","12fa9c77c15978efddc7453e27cc9c48"],["/yu-ming-zhuan-yi/index.html","09ae228c4f74c15ba8e6cf686c549503"],["/zhetengb/index.html","060e922a41f9bc07d4b1e1fa477fa9ef"],["/zzq/index.html","d7d3e173010355e2521a0d6cc8f3892c"]];
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
