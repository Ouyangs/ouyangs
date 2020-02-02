/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","b31db620c9cc5dc7f2e71c69f2b59a23"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","39436b503facfed9817f5f5597a7577f"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","51b6b0295ef0b505480537edc274bf6d"],["/PGP/index.html","91e1d2e936c504820dd05a6f08203540"],["/about/index.html","982aa00808ea9888add7d2cfa94e5518"],["/applescript-jiao-ben-liang-ge-ban/index.html","470cc59964ac5b46099fe64b5baafd09"],["/archives/2014/07/index.html","465d588559c46b3917bc9e9adab810ba"],["/archives/2014/08/index.html","01765f7d60b0bd18b6aa7a99d6bb52b4"],["/archives/2014/09/index.html","95fd7cf5132a1eacb921f8102eddd9f1"],["/archives/2014/10/index.html","22b9847ff9191f2541dd49a36b865bf8"],["/archives/2014/index.html","cec31b1ec144559824153fdafa2c014c"],["/archives/2014/page/2/index.html","63b8e4bfb1d5f66ad926ed85b717f32c"],["/archives/2015/01/index.html","9b30c304a7ef1f113e786338b81882c2"],["/archives/2015/07/index.html","0410004051e0e4ea1bc56c14446e0098"],["/archives/2015/10/index.html","a606ba192be28f319ac00287d0b85040"],["/archives/2015/12/index.html","e2529e4c1da37bb9fbeea079d7486e26"],["/archives/2015/index.html","5779846958cbb87852df224f728cfb6e"],["/archives/2016/04/index.html","71370312e666010642412ed7bda1a07f"],["/archives/2016/05/index.html","b0b0d282a2e09549104747ac7152524e"],["/archives/2016/index.html","8e6a301409f51b9703c5e4d8aa88c766"],["/archives/2017/01/index.html","cb10d48b7b4ce5230602f0ea3a41883f"],["/archives/2017/02/index.html","df165983aa40fd302f4bcfe482fafda5"],["/archives/2017/03/index.html","1d63df6007b0d699439f7af7408954c1"],["/archives/2017/05/index.html","ee36610ab32b59497d016f51ad3ec4ad"],["/archives/2017/07/index.html","32cd61e4b18bc345b467b0feaa434cd1"],["/archives/2017/08/index.html","13e878913480f99303ff827bb96ae113"],["/archives/2017/10/index.html","859d88d4a3a3cf4c7fc0989d3274f6d1"],["/archives/2017/index.html","e884c72db24c4a8caa8e26405a20e444"],["/archives/2017/page/2/index.html","32779187e48db6a290d0e85637deb8f4"],["/archives/2018/01/index.html","2d4f8ef506fa79c7aa30c00b574504c3"],["/archives/2018/04/index.html","30cc583b13130ee7c1dac887c805bdd3"],["/archives/2018/05/index.html","2791dad6f611b7d0559847cd4d9160df"],["/archives/2018/06/index.html","e30ff77acbb2b65bf07d3a2a1a036908"],["/archives/2018/07/index.html","b1114227407259fc21a55fd895be962e"],["/archives/2018/08/index.html","e3297d650cd0fee58d1f1a173f661886"],["/archives/2018/09/index.html","a2e834b57e781db04492a466f2e6d2e8"],["/archives/2018/10/index.html","70d60bf353e3cc719858e7149ab023a0"],["/archives/2018/11/index.html","fdf33a0df25bcee4c06f0bc987100300"],["/archives/2018/12/index.html","768cb992320e379b990e1ae8a419a06d"],["/archives/2018/index.html","499e89b841b6624d4b19082971274219"],["/archives/2018/page/2/index.html","a21aa4ae271a59f2456e93541fc3c40a"],["/archives/2018/page/3/index.html","ce73f5c44d8f15657b061a66b72ab63f"],["/archives/2019/03/index.html","d991df59dc6c87e1851b8c126e7150e3"],["/archives/2019/04/index.html","8a73688fe3066d7fa85b4794d29704ba"],["/archives/2019/05/index.html","1b029d24708d1c1fd608484664fa5ceb"],["/archives/2019/index.html","1f2ee5a82fde53c95fbf59ceed59502b"],["/archives/2020/02/index.html","1a6b7aefd69bc39c2a76c760a0f97e2e"],["/archives/2020/index.html","a3aba214d7315b7c6030765cfc72a661"],["/archives/index.html","deaca1cc5dd0b3264f91aeafcbed79a4"],["/archives/page/2/index.html","1df376e492d0f8692209c5613c433233"],["/archives/page/3/index.html","5de701bc2f4e1b9c08888bfe0a29cdf5"],["/archives/page/4/index.html","3481230011f61ca1977136ed1a5c773e"],["/archives/page/5/index.html","db61cd131cae0485fdf96cf7a73c47a0"],["/archives/page/6/index.html","89cf26a69c7e9304547b81a38af9357a"],["/archives/page/7/index.html","8d419ad56a5bd662941edd794c7ade55"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","d70289595e7bf3aefdcab6d938806018"],["/bao-guan-qin-zhan/index.html","25470abcb719fc0293ef80a58f2c2a5b"],["/bao-li-yu-qu-cai-qiang-jie/index.html","e57ab2cac231e667876f4ddd39675ce3"],["/bei-dai-li-ren-sang/index.html","75ff01f30a458bc4ec106e4ac142c75f"],["/books/index.html","42e588d1c78c81d20d878b2fb2b50494"],["/categories/Blog/index.html","44a79f369c35b9c655824caee101d095"],["/categories/Blog/page/2/index.html","d4e98b5907d40dde3d7bfe562bfde77e"],["/categories/Blog/page/3/index.html","6ae54af36da88e838ff65721d19be7fa"],["/categories/Blog/page/4/index.html","53fb8a67175e27912f55e4ff5a56edee"],["/categories/index.html","7d8620d50799006ec62abf7aad014af9"],["/categories/法学/index.html","964f7f3da457fe0d63d248f39be36ea6"],["/categories/法学/page/2/index.html","6b815640ca1bcb4872d9977f66ec80e6"],["/categories/法学/page/3/index.html","59623a72c2fdaa3aa2393538415b9449"],["/categories/精彩分享/index.html","5344f6b49279133f6107484133516f14"],["/cclisence/index.html","a0004e4da7fd36d1509592f2e6f5d93d"],["/cetrain-issues-iv-for-company-law/index.html","449142c9790b160d8ea599f6a9b878e6"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","760f41fe93c5b00941841643ae140160"],["/cs-hubei-2017/index.html","7adfa9cc78de4fcea7a8b5c6e7d80b6a"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","6368f0897eda613c684e469defe97532"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","7b240b19f21f9ef5e04bb93b2f6d3ac6"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","eab2b0203aa8012dd4c91907d1874b9f"],["/due-pin-workflow/index.html","b795a09d272265c881121921a5496aef"],["/duo-ci-zha-pian-shu-e/index.html","af824a10d8487a7abecc5d17c973ed80"],["/expert/index.html","2af598199ed7419cba4754d195aa7a7d"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","c49fa5a524ac76a7d9885cf4510755a0"],["/google3756ddc34336b7b9.html","8fc624fc47e5e7fdc062c9f4f4e0c473"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","cf8c7d56066503743db4eed625464ac4"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","6f5da5a6210c261601941d5dedc4a5e0"],["/hustlaw13/index.html","72d0e880d2029df3aab7ef1e754ede94"],["/hustlaw14/index.html","ef15421d923db43c7b522bf1a5ce7419"],["/hustlaw15/index.html","51838149251af13538d552f90693db58"],["/hustlaw16/index.html","32613bff99909440010046e5bd2be906"],["/icloud-terms/index.html","c6d6357d05ae6f173662a6a715cde88f"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","ab1986c55adb92fdc5998e29a69a384b"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","042bb2010b26301bd4d2d3d132dba4cf"],["/jdsnk/index.html","4f766108901bc2935e761b2d47b2df29"],["/jian-qiao-fen-xi/index.html","b52fdd8ca4688a34a761ce407e2dd513"],["/jianguoyun-keepass/index.html","cdff83796c203baedc71257a5cbabc3a"],["/jin-qian-bu-neng-mai-shi-me/index.html","2d34c9c9cc673a8719b705adc05df6e4"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","c79be224861e38cdc51da2aeb523299f"],["/latex-times-new-roman/index.html","e0a7ddaed4b457a4d61e597cc1797aa5"],["/latex-yu-lun-wen-pai-ban/index.html","eee37836363019373e37251e0e83bfed"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","85ba8f2ba8a60bdf2793589c4cc2301a"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","557c35fbed0e2861a6fb56c335ebf961"],["/luan-dan-20181116/index.html","658b219a2392830fb511efa1659c2305"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","339d00328abc4d86facba20a399c21f3"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","866592b84a09bc754475ca86afac97c6"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","338d5d8a1bb35c52f513af85d6579c94"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","6a76339af99f9ddf25b80673be04398d"],["/opoo-zhe-teng/index.html","97cf0447c6c20ef72aed2df0ee2a9ea8"],["/others-00s/index.html","d99c00f7f6eba83f38a53988315f9093"],["/page/2/index.html","e448f62e018ba55b6a209b93888140fe"],["/page/3/index.html","e1437a8e857e10f8a2aeed2d41c75d7b"],["/page/4/index.html","5e1bcf203b17b2ea9e31b8a620830e77"],["/page/5/index.html","171ae8317b58341b742ab053d8832554"],["/page/6/index.html","217942d3fa5cb317107b8b1a1b57323b"],["/pan-gu-zhi-bai/index.html","da765a7b444fadbbb7a3d32d9e671799"],["/posner-homosexual/index.html","4b40e9dbe111365e9368e83788b9f069"],["/qxpj/index.html","2d401eb9a7337affb7908f7019ef8eb7"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","698cb7701ae8a2631fb17b7a0103843b"],["/shuang-pin-vs-quan-pin/index.html","d9547267ad9ab7abc88c789e74220843"],["/software-reverse-engineering/index.html","cfd1dbe731c06770c414554642fcf05b"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","300aa5dd281e1dce4419438aa55d2471"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","0e625e6fac9636dcf559e4b3680ca0eb"],["/sw-register.js","9183b1a3e14585b9afbfbe9ebd0e3a2b"],["/tags/2017/index.html","e8bf404408176f357c7fe888c1e82bf3"],["/tags/APP/index.html","48a79770cc60df1584fe521c3587b03f"],["/tags/Apple/index.html","3b10adf61e025fc95dd652fe41bcd64e"],["/tags/AppleScript/index.html","0a8ceec54e3e47907d0619e3714298cc"],["/tags/Due/index.html","29b4c8746da41bdaf315bf47ecdb4588"],["/tags/HUST/index.html","c8cd3c22f8620139e3b92d3d6e7db1c3"],["/tags/Homebrew/index.html","608e29336e3cfd105ba6a09c782e1ed8"],["/tags/KeePass/index.html","469cbeda107e76e53bd5f40b668b582d"],["/tags/LaTeX/index.html","af2489e836a17d6df0ef00c49aff2e3f"],["/tags/Namesilo/index.html","69741e0f9daea288e858f38752265712"],["/tags/OpooPress/index.html","46c5383097a9fa084e816a2991d6d880"],["/tags/PDF/index.html","6a237db35af4c794ab217477cb1b3456"],["/tags/Posner/index.html","2ed924cf3da497c4743b36accef181e0"],["/tags/Python/index.html","bb0a9a5151e624edc68965dffcfb0f2e"],["/tags/Rime/index.html","efff1b7a94f502cc465c3088af6c666f"],["/tags/Typecho/index.html","658664e21846932bc467c40dee05679e"],["/tags/Workflow/index.html","e41849bd3ae568a979b8310e6fe9a021"],["/tags/cc协议/index.html","e6464ba7f074af27cee9615b7c7519a0"],["/tags/iCloud/index.html","80bf37223d4fefee07e7d5065e8f4aa6"],["/tags/iOS/index.html","a8a2890b511760cb2ad2ae4afda752ea"],["/tags/index-1.html","6a2569ab4742943834ac1fa8a625decf"],["/tags/index.html","6a2569ab4742943834ac1fa8a625decf"],["/tags/logo/index.html","1c71fe7a0877a670e0269fe85801c912"],["/tags/macOS/index.html","1255079b0b042f5694132a16b108261d"],["/tags/vpsmate/index.html","16a73b90c61f515a398ff99f4508a23c"],["/tags/乱弹/index.html","aebfac1d68e62bee89ad5576c9aa7874"],["/tags/二倍工资/index.html","6a53e2e6887c14313406dcc4410ca593"],["/tags/二维码/index.html","e68a6551a7bd1c8ee65def37abe2cf38"],["/tags/云盘/index.html","bf57b7211e99350b26dffa7e1dec7c1e"],["/tags/交通事故/index.html","b14008adb8a5f0684aa4bba582f95421"],["/tags/产假/index.html","7ec33eddc3eb6f6b1bade14d387881b0"],["/tags/人身损害赔偿/index.html","1da5795be09ab4a935dd772bca229d43"],["/tags/代理权/index.html","b320e1575fa12dcdc86fdd3c91b6dfb1"],["/tags/优先受偿权/index.html","ef51fd4b4205773d7b155d264ab4e1d6"],["/tags/作品/index.html","dc7f15eae171e0454938cdfe3f64b628"],["/tags/侵占罪/index.html","9c911b75a5b9b75b78dc5b914ef3fd82"],["/tags/儿童权利/index.html","db1028aefb78cd1d450b6dd208ce109b"],["/tags/公司法/index.html","b720efa1c71107c5138a6ab99a1484ac"],["/tags/共同财产/index.html","638a7d4109b24ca15f066b86880d3c00"],["/tags/刑法/index.html","d36233afb0ea8e88ad267bb6e0baf197"],["/tags/劳动关系/index.html","d55176621231e82092ec0c2a46cc56c1"],["/tags/劳动合同法/index.html","5d83c2395418cb9a62453d0b5d1855ce"],["/tags/劳动法/index.html","2047642799e5f253953a8e2c453f0367"],["/tags/华中科技大学/index.html","523883accc23f4c4b345d036896788e1"],["/tags/华中科技大学法学院/index.html","f731c4f6ace79067f15c8e75a296c949"],["/tags/危险犯/index.html","93873e2d246aa8b658d2fd31a0f7ed3e"],["/tags/反向工程/index.html","0d9d335ac4da300015d209743eed4d27"],["/tags/发行权/index.html","4e545b0b672dab8de933f23b6a4a907f"],["/tags/司法解释/index.html","b8b6cdd12f580d98690d29762309b015"],["/tags/司法鉴定/index.html","015c6aa48d54992f0215e31becbab24d"],["/tags/合同主要义务/index.html","770490bff5e913ab9373d095ae36a428"],["/tags/合同法/index.html","ef8d197da76dceecb08445b142068340"],["/tags/合同附随义务/index.html","ba4e9ad62169088594a28aa9e0aa0cd5"],["/tags/合理使用/index.html","1f9ad8911c59acd6776e288d883f2414"],["/tags/坚果云/index.html","0353996f5f731e4b2cac7770ba2f8167"],["/tags/域名/index.html","c2626adec36c3f1b43cf2f2c4cf8ffc8"],["/tags/字体/index.html","546042e953b18b2d6598f55e0831c8b1"],["/tags/实害犯/index.html","c4c5522de555e06e57fc5a27ab588f29"],["/tags/密码管理/index.html","8015960aac6b6bac280919f893ded196"],["/tags/工资/index.html","8afdd26c6d31ac85da4f262e341a1942"],["/tags/待履行合同解除权/index.html","fdc46af2083bc458fb6b926ba4a51c41"],["/tags/律师收费/index.html","63859298feed084a853e66116d989b59"],["/tags/思想表达二分法/index.html","1a155ade66ca92924e1426765bce1d18"],["/tags/思维导图/index.html","dcc4480805f84c9bc4556169e5cdbfe1"],["/tags/成本收益/index.html","a4bac22bc7b7ebc6734391ff190c0176"],["/tags/成长/index.html","7321301e693b19eb459c4023ec382c28"],["/tags/技术措施/index.html","7da8b32885be14f09c60178a97ff6d54"],["/tags/抢劫罪/index.html","6261703e698889d8c4e437877eb64d8b"],["/tags/抵销权/index.html","192c413f5bb9a2b45e8d1875f08d48ee"],["/tags/排版/index.html","425d971ba0285bdc28e352158edd3e33"],["/tags/插件/index.html","32963d1df7f7eaa06f4f191efcc2c6a1"],["/tags/搬瓦工/index.html","d796110e991da4b72391029b38eaf9bd"],["/tags/故意伤害罪/index.html","bddb2a63c27961758d73271694a5de66"],["/tags/效率工具/index.html","8b9e50a26351e586be048ab44adfe217"],["/tags/教育/index.html","93397b81e3e48874d9cc42ef64ddfcff"],["/tags/无固定期限劳动合同/index.html","fcc3312c507048fd19c241039b97e540"],["/tags/最低工资/index.html","6d8624fd603d46c59699d01fd4990da1"],["/tags/最高院/index.html","f488249b100ffcaa899300edad492065"],["/tags/武汉市/index.html","ce3d9a565f894efbc05e171c1f129fa7"],["/tags/民事行为能力/index.html","aee49f9f45118e0694f6980efbc4772d"],["/tags/民法/index.html","b6ab21f5fc22829ad2207e6127f4dc71"],["/tags/汉字/index.html","e4549ba5c33af6c20ed25f4d40bd9729"],["/tags/法学/index.html","393391b3366504baa1122dc089edda7f"],["/tags/法定许可/index.html","286651b56b8e318733644309f159a568"],["/tags/法律/index.html","a241c3109b557812f316948ec21660c4"],["/tags/法律援助/index.html","e13642f3e55bc6bdc47c97ad9013e6cd"],["/tags/法律经济学/index.html","b835983ab47e4026b3ccdaed73a43cf7"],["/tags/消费者/index.html","8a8e48d8f29d8dcd88daf2159df00d0e"],["/tags/湖北省/index.html","de23cf57319993199716171460982863"],["/tags/熟人社会/index.html","191447be19e02f01075a27db622f4aad"],["/tags/物权法/index.html","ff5e9021061662d8bdeb639e1cbadfe1"],["/tags/用工之日/index.html","03cdb8644c63dd3be5f758691be0bccd"],["/tags/电影/index.html","15c332b54c343fb5eeb8287a66069522"],["/tags/男女平等/index.html","189f16ff5afcce02d5390728d7927635"],["/tags/知乎/index.html","3fd38dbe75a9be286783a406bb02eafe"],["/tags/知识产权/index.html","3b9b56ac9090b51fd4d9e79ec007a962"],["/tags/知识产权法/index.html","a31763f03ce3b7f630a77be296095cb6"],["/tags/破产法/index.html","0f23a13015251d9e9a8bd8f0d858bf81"],["/tags/破产管理人/index.html","5d403336b56fe81c25343e1342cdf712"],["/tags/社会责任/index.html","ea16abe30d33d1b18b6abd5b7ba82771"],["/tags/社会问题/index.html","802d9414c38ed8e37367d2e984932c0c"],["/tags/经济学/index.html","82b596f7866ede9ce1bfa55ddc648c48"],["/tags/结果犯/index.html","52392ca18c3b64b7d8bed0829c2b66cb"],["/tags/缺席判决/index.html","ffae85d8199b2a0c1796c05019e5cb3a"],["/tags/考研真题/index.html","9a05b2f165d9596d6907b0737f61538e"],["/tags/著作权/index.html","bd413bd892439ee607ecef5859bbc4ee"],["/tags/著作权法/index.html","b55b4986ca31378a4b726bd4baee0a75"],["/tags/行为犯/index.html","578d2cdd0a9454cc8d24a67812cff5e1"],["/tags/行政不作为/index.html","64e3a13ad4ca98493c01d275cd6f7b89"],["/tags/行政救济/index.html","6f189c6c71dd5776219e89e4c0e352c5"],["/tags/行政法/index.html","8cca0361b1922a8076295a1f5840dd15"],["/tags/装饰装修补偿/index.html","08a92407ae677e057b275d790a68190d"],["/tags/观后感/index.html","70992118eadb902d0ef9004592bf6811"],["/tags/观念交付/index.html","011530b01d51d4ce11413d7ac1eb37b0"],["/tags/计算机软件/index.html","052585ffe01f6f002ec6392379969fb0"],["/tags/认知科学/index.html","e3556c78b278961804233cd14900f539"],["/tags/论文/index.html","15a145408205da66866a8d1a4d66748e"],["/tags/诈骗罪/index.html","8cfa0bc8fbe49e2fa4225e347165dc0f"],["/tags/读书笔记/index.html","82f82bbcbdfb44009c69ff061bf5504b"],["/tags/赔偿标准/index.html","47f05c5e8d64924dd2a914b0aa05d580"],["/tags/输入法/index.html","09d53edef56f174c2e0a2a6ecfbc8616"],["/tags/违约责任/index.html","42e701691ec1f4b50f4fc33fe5b0638d"],["/tags/违约金/index.html","66aaeb9d4be2e1cb1f621c68bc02107a"],["/tags/释明权/index.html","0ae6012c4ddfa219b93a93ffbdf56137"],["/tags/隐私/index.html","1d711825b6a099fffb7faed4edc73504"],["/tai-er-gu-shang/index.html","88df135c6f2793483588e74ccef5f9e9"],["/timeline/index.html","be90119b0e80a728763919189be8cf50"],["/vcard-yu-er-wei-ma-ming-pian/index.html","e15785abcfe7ffd9958cfacead1dc0e8"],["/webfont-yu-zhe-zuo-quan/index.html","c715fa266f8cbc6ad702fdb54d21018c"],["/wei-ji-hou-ban-quan/index.html","c31587255126f2fee7e8dd4d0a3b2289"],["/weixianfan/index.html","ca9de0ae486190f6c9962f6987166f32"],["/wo-de-macos-he-ios-she-zhi/index.html","7597f576655000e0972b5d90b69c7a83"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","fdb6abe229645891d8ea616a57786d20"],["/work-rules-mindmap/index.html","5f7f8e65794620b978037445db54a345"],["/wu-han-chan-jia-shi-duo-jiu/index.html","f9c6521e79e8b97180255ea301619b25"],["/xzlfbzw/index.html","bb6e91ec80a2036fddf0dadb5db779e7"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","03e9cea9597094d37c42d8c4700cfd2b"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","f1abf9df9b7b740708dfd6d9f3b1afad"],["/yu-ming-zhuan-yi/index.html","e430af48408e9c28b137bed8609c8e72"],["/zhetengb/index.html","f47af2b76c317f56bd251af293bd3902"],["/zzq/index.html","253ea56a81f82f6f66d967d13d06cac4"]];
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
