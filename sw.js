/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","2073de423dec71efbcec41072f34af1e"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","506b80f9d689f10e594078d4d0c603c8"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","4cf7d4a56d2d7ff78beececf30809292"],["/PGP/index.html","4a49cea4302938a70b6d239843ef09c4"],["/about/index.html","f0f33535b199cdcb12e987ecebb063a7"],["/applescript-jiao-ben-liang-ge-ban/index.html","c6c5b689f8251510124ca47d6e89eda1"],["/archives/2014/07/index.html","59b35d51476b00490b14df3d8d89f2a8"],["/archives/2014/08/index.html","9d38f7bf53a48435c93912149b54d81b"],["/archives/2014/09/index.html","6ddbbed745aefc6f4dd3068d4798ae8e"],["/archives/2014/10/index.html","a6de37505622a14834b485a043ccf65d"],["/archives/2014/index.html","8f8d5014d63860a5f0ccbc4987e8e7bd"],["/archives/2014/page/2/index.html","154d0c605aa9eb6e360c8131ead606c9"],["/archives/2015/01/index.html","1d0fdbc799db671ec590af82ef0074ac"],["/archives/2015/07/index.html","9589669f2bdcab2a5fb1f70a36055e75"],["/archives/2015/10/index.html","fac2ec87ddd7b5c0ef530439144995ad"],["/archives/2015/12/index.html","0038d0a52e31a9ced6b2ffbdf4ac9c36"],["/archives/2015/index.html","a9d3f246da7168e30c94387a91e781b6"],["/archives/2016/04/index.html","937957ceb551300929f6c2ae058344ab"],["/archives/2016/05/index.html","3bd500c51bf2a37ef2349723c2aa3003"],["/archives/2016/index.html","8f944c9db772797eda3861592b9e0f15"],["/archives/2017/01/index.html","e75fead82f17d7327a7d3dd43d1b1ba8"],["/archives/2017/02/index.html","5d440ae52cef525390d74e40951e2c9c"],["/archives/2017/03/index.html","be54276043e3c8bedd47b70200de6e66"],["/archives/2017/05/index.html","f4c4a76e8b94d4afe426ec6f59c5a683"],["/archives/2017/07/index.html","3017113e79b8bea315b40e71394fa1e1"],["/archives/2017/08/index.html","20bdee915c945721ddacc4433b2839ae"],["/archives/2017/10/index.html","09c1c592dde4ecd2492781445c10c829"],["/archives/2017/index.html","010d3087f42c47a84012a390f35c7232"],["/archives/2017/page/2/index.html","a8f336688cad8ed2d3b7d032aa8c98f3"],["/archives/2018/01/index.html","4e80b9f6c58e446c4db0fd9e043e58e3"],["/archives/2018/04/index.html","3795a9c300e8b12252014feac70444af"],["/archives/2018/05/index.html","d8f934bc8f73d9811056ea4a910f3723"],["/archives/2018/06/index.html","9570d0027218a789ad7895d14d2eaf3a"],["/archives/2018/07/index.html","4dcd423509dbb69c8421a622ee5d5b31"],["/archives/2018/08/index.html","f46e82e90f3a9ac6a79d004e99622c3a"],["/archives/2018/09/index.html","78ccee2d8bedeefec51b20dbf1cd0334"],["/archives/2018/10/index.html","d676e7137a7234ba375636a278dc9ca4"],["/archives/2018/11/index.html","0a766d08a04952e6aa5f958241e7bf50"],["/archives/2018/12/index.html","71a8cb4ff31dc6f1e525263a125569a4"],["/archives/2018/index.html","d8606f2904cc8ddd5d3ae9d8df0a482b"],["/archives/2018/page/2/index.html","bdc576ec5828e0eb843343fae5d29ab1"],["/archives/2018/page/3/index.html","8ba7536321acd7547a336523656aa594"],["/archives/2019/03/index.html","fcc7e582206b7cf62c5e44dd375f04be"],["/archives/2019/04/index.html","29f581eefe8fbd22325d08c1c01d89db"],["/archives/2019/05/index.html","cc0a23fee1ac33e38828e97122861451"],["/archives/2019/index.html","a70064489f723948416566d731408daa"],["/archives/index.html","8e1598967860ba2c8a9c5623d8def1df"],["/archives/page/2/index.html","788316db322b58a06d1d31db799b6c46"],["/archives/page/3/index.html","886122f04611e51bdc9c9a846248d537"],["/archives/page/4/index.html","2e62e2344dc05d8963b9524885b96a10"],["/archives/page/5/index.html","2baea290d4a1b9e9cc9fd882a2ee9000"],["/archives/page/6/index.html","96c906270dc1d305eb6abedf916efd70"],["/archives/page/7/index.html","ec65dc008ba82efb9da31f09482df3c5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","c052e0aed8ea388cf77a7b694d40b690"],["/bao-guan-qin-zhan/index.html","d34258d31d6d28e5dc1cf401d228cbde"],["/bao-li-yu-qu-cai-qiang-jie/index.html","b9d965f7265f752aa766227b845e02d6"],["/bei-dai-li-ren-sang/index.html","307db54c845e1c3d2951ba5904c6cc73"],["/books/index.html","2c35ed2aaea89af8772397a2fadccecd"],["/categories/Blog/index.html","6754f6afe641a99f4c49e5d4edb497d3"],["/categories/Blog/page/2/index.html","fd573360bf48affd082cb290fb177da7"],["/categories/Blog/page/3/index.html","80a272f7ba873e425244d5f68823fb6e"],["/categories/Blog/page/4/index.html","af7c6a1f93237e87b0b7db82be3cbc8c"],["/categories/index.html","a77557278e3fde60153bb03a9aafa141"],["/categories/法学/index.html","d9936ff2112c313ca18fc15f560858db"],["/categories/法学/page/2/index.html","e2a5233cec11d3a556e83d1333cc4667"],["/categories/法学/page/3/index.html","edaf63b9397d59ff82899a33dd870108"],["/categories/精彩分享/index.html","dd76746e8593f1bff9a067747814583a"],["/cclisence/index.html","f53e22e2d6577e6a7980786df243d751"],["/cetrain-issues-iv-for-company-law/index.html","aacc376bc9bb35b500afecae89cd8310"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","f8fde5620711f05519635ec58a9c31da"],["/cs-hubei-2017/index.html","489eb195eec41a5a420dfdf7904c4039"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","6368f0897eda613c684e469defe97532"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","29ec160c9ed394e2e3babe6382adbc7d"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","f3e00e9bcc6334c5ac4c453242c13a96"],["/due-pin-workflow/index.html","e7f86c3de7bbc89b82ca9057f6f7dd7f"],["/duo-ci-zha-pian-shu-e/index.html","4127d845d9de0cd76568974d5ed8a470"],["/expert/index.html","6e9f243c9ab12cb664abfa55885837e2"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","27cda130081bb4bb99c9473be5954cc4"],["/google3756ddc34336b7b9.html","6c3ab8513fdbe34aa3ded6a03a248f89"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","2f72868368a522e462f4135622d37d27"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","2a0176fb76bc70449b3a3d71404786bf"],["/hustlaw13/index.html","77629bbb6074c154c15eac27f7d42599"],["/hustlaw14/index.html","92276b9c4217be76ee8b2824e70b44f5"],["/hustlaw15/index.html","ab41482748d73dba60d7bca9152e7fbf"],["/hustlaw16/index.html","ec311f3918390838973afa1db6ccdd07"],["/icloud-terms/index.html","7fa5017d4f29c565b62e488f8685eee0"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","62c7717301d7efe386805199e9535db8"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","f01065983e485994a96293d233cd204b"],["/jdsnk/index.html","15727976d02c83ed1bc8b268cda3c336"],["/jian-qiao-fen-xi/index.html","7dc7d658b8cff3a59e00d5dbf4837adf"],["/jianguoyun-keepass/index.html","eeac072d11db47bb8973f3740ea58614"],["/jin-qian-bu-neng-mai-shi-me/index.html","63503065ba47c140a8bc6b93d3608fc0"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","91498c861fe911df535820fd26691b5e"],["/latex-yu-lun-wen-pai-ban/index.html","596013c5334386325c96009c3eb8fb3d"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","bcdd2f01569d82a4aab0c7d6ed3fbe9b"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","64ec3807351388f87b4be784e9a4e292"],["/luan-dan-20181116/index.html","413a53fe3172a3e9378755ea744d76b0"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","5835d56efe19faedffaf5f914d23327c"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","31d2ebc42cfd3828b6e45468b27e851c"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","0679f6da88249d9a2576c510cebc735d"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","29f67b8b70020a9c0825cfd791189ca1"],["/opoo-zhe-teng/index.html","6a2620c22596612af9ac3b4094c5b6ee"],["/others-00s/index.html","f4706f3a03848dc5159e201e354b1709"],["/page/2/index.html","d9b1d1d3aef53bc3df8ad0b573dc10f9"],["/page/3/index.html","7982f88cb948b40742a54d82a44a099b"],["/page/4/index.html","ccbd577fbfc3ec338cd2f46d42a4d683"],["/page/5/index.html","f48695f38d3181417b750f651ada5400"],["/page/6/index.html","a1350fdd43af3fe8a51ea90269a9f4c8"],["/pan-gu-zhi-bai/index.html","a8144127055a1553a809214c7d556db4"],["/posner-homosexual/index.html","7a3df55626159f8ada8144ba7cfbad1f"],["/qxpj/index.html","df8db771c07146c5940abcc156a68fce"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","220cf41f7a7667ac5ff1ad2910b326b2"],["/shuang-pin-vs-quan-pin/index.html","9e0b15343c1355de386c88b7ecdcc27c"],["/software-reverse-engineering/index.html","2e16f0db8e04087aeebc1245d77fb60a"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","9f451c80ff8ca99b1d868a5548dc3132"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","0992d55723084763a87a9dcd4682be01"],["/sw-register.js","29318ee639aae38bc65cf90b2a5d9db9"],["/tags/2017/index.html","657fd3c5c01e99206fea017cfd49a1f2"],["/tags/APP/index.html","946c0ee04ee0d92d3f538c8de5f9d8dc"],["/tags/Apple/index.html","ae4f62db79de8ac27689f928f405b3fa"],["/tags/AppleScript/index.html","c4aea30549f7f4acb3bc7bea8d268e5e"],["/tags/Due/index.html","9e16f0818eabafb41bc5d131af55996d"],["/tags/HUST/index.html","c1879817b2962fdb85bc861efda4a527"],["/tags/Homebrew/index.html","528b8e4e789bc5bb62378b7062aaa46d"],["/tags/KeePass/index.html","864cf64d4ebd6a53303ecc0d08655c2b"],["/tags/LaTeX/index.html","1310deee775b7b108cd4193a9b15adbb"],["/tags/Namesilo/index.html","b5437fb758c33cfeb6299c8b00af18f7"],["/tags/OpooPress/index.html","b8e1af5737055f1bb51821e2cd31e28f"],["/tags/PDF/index.html","16bad163a2668bfcef878a91e6a335d3"],["/tags/Posner/index.html","13e606bf232e79fcc39172767c24743b"],["/tags/Python/index.html","793f9fef82e9d04cb8e76defb8540a45"],["/tags/Rime/index.html","5f127a46b63b3d79e5a5b2a4d2b750bb"],["/tags/Typecho/index.html","b722680b8aba1f5af2f9c9dee7790722"],["/tags/Workflow/index.html","9ada81e745dc8d8337d460c02117a681"],["/tags/cc协议/index.html","d68239a052eecb3d50f580e6c014f389"],["/tags/iCloud/index.html","9bc14ec7e6302edc41f0ac50c80b2f11"],["/tags/iOS/index.html","53b4de039982fe8fbe2cc577c2bf1c51"],["/tags/index-1.html","f4fb224e021ee5ac0b4bbcc08c0831aa"],["/tags/index.html","f4fb224e021ee5ac0b4bbcc08c0831aa"],["/tags/logo/index.html","6993d0d076fcfa2848d3b1c85c921b1f"],["/tags/macOS/index.html","5bc677ffbc7f41b00d1cbb5db3138eb1"],["/tags/vpsmate/index.html","751786dce2f37a4662dc3285632f753e"],["/tags/乱弹/index.html","8b57b26d229bee1dd1b2618614b860da"],["/tags/二倍工资/index.html","44b30f80a8e4b8f0abbf12a3e3c71216"],["/tags/二维码/index.html","9b5028debb481745d540c5160fefd627"],["/tags/云盘/index.html","2dd088073333f478feb40625fb30e306"],["/tags/交通事故/index.html","16d1294217e3cbc3e86abe7dce335bec"],["/tags/产假/index.html","7566f6eedb4da0b287e7191aff7d3ede"],["/tags/人身损害赔偿/index.html","2060a49c4635b7e89a3763f33ae9a8f0"],["/tags/代理权/index.html","6bdfc5ec26bc956333a713dbbcc303cc"],["/tags/优先受偿权/index.html","f61186ca67d643f426fa7847ea721caf"],["/tags/作品/index.html","39ac0e7a3d02712a84ee780ca5f2ee14"],["/tags/侵占罪/index.html","9f4e97ad89f9a10a6e5a6ca1d18cd1e1"],["/tags/儿童权利/index.html","085f83f1f1bf592844f83fe396568261"],["/tags/公司法/index.html","0d9d32159078fd360e3f3e0a70e835b2"],["/tags/共同财产/index.html","6aefb25f072b72f35defcac76cee8763"],["/tags/刑法/index.html","75c34f69cf0a00d4315e1e0ad26dd5b7"],["/tags/劳动关系/index.html","57e1b0a56e808d13333311024560433e"],["/tags/劳动合同法/index.html","650b7929d81dfaf9727d38c3ae9a6bd8"],["/tags/劳动法/index.html","233ee9820f74a8709ef429d1c5f66622"],["/tags/华中科技大学/index.html","81084805805456dc63a14b881fbd5ebf"],["/tags/华中科技大学法学院/index.html","608666f5e10cb8cc73a58de1efde5aa2"],["/tags/危险犯/index.html","e23a8050dfdef272a0d9ee7f80a875b5"],["/tags/反向工程/index.html","98f1e210d116350bc737da5e001bb802"],["/tags/发行权/index.html","5577260e59b08aff9d2cc6913eb2e029"],["/tags/司法解释/index.html","688e3691b10628b5ec044d6f650eba99"],["/tags/司法鉴定/index.html","a2627f359e155c0add2e7ec3f5754af4"],["/tags/合同主要义务/index.html","d5f945c96f22ff8efad8909533e30925"],["/tags/合同法/index.html","757c0b49bd8d3f13e6024538def1c89a"],["/tags/合同附随义务/index.html","828044405cc2166a3d985889b81f647f"],["/tags/合理使用/index.html","48f1d0ebe61a40695072a9f291d4452d"],["/tags/坚果云/index.html","84af1aeeeb5f3d639fbf9ed5b9744a15"],["/tags/域名/index.html","51e5254050ad9ab0e3fd2e48df31ff9d"],["/tags/实害犯/index.html","5fec6570b2a2a2eb1b45a22a74ec6b7f"],["/tags/密码管理/index.html","5f3371a2e0362726a04eacdebceb5f24"],["/tags/工资/index.html","1e85708554b70795f096128b38a774d9"],["/tags/待履行合同解除权/index.html","c20756e2914b09439260f7e26a940d6e"],["/tags/律师收费/index.html","6655f2cae070ec78d0112df308ea3a9a"],["/tags/思想表达二分法/index.html","ab3020ce81ec0158dc19c897053bd95a"],["/tags/思维导图/index.html","3e2da6a6b75a44adbb565a2d635c7fb6"],["/tags/成本收益/index.html","56e556ee5d4b65ec5b6ce35569d5f72f"],["/tags/成长/index.html","6400571be80ca9681a9c89f8cfb1b248"],["/tags/技术措施/index.html","0b054419dcec58139c67acf70a5f70af"],["/tags/抢劫罪/index.html","4595a5c434acfe45538baebfab0dbd6e"],["/tags/抵销权/index.html","697c236f9b7e7d6f4ea8db7fd91835b2"],["/tags/排版/index.html","36ddea5eea9ecc9afd268e6974fd02b2"],["/tags/插件/index.html","c066acb719bcafeca087208373041b64"],["/tags/搬瓦工/index.html","fcbb14e9a3d07f01ac9b90fbe99f1beb"],["/tags/故意伤害罪/index.html","0384b5acfc5582da0f6e10c90c71a863"],["/tags/效率工具/index.html","3c34577d7f3c3e8b2878e636fac1c610"],["/tags/教育/index.html","0c597ff1199bb4b76dc2b54e4d66fa54"],["/tags/无固定期限劳动合同/index.html","36305a1769c1639e4db66d5a30bd320e"],["/tags/最低工资/index.html","cd3b343d19cb2b0094c24139af206ff3"],["/tags/最高院/index.html","62f3b17e1ebb0db3b74483b06e77c7cc"],["/tags/武汉市/index.html","7c8ad24dde58e6310f5225e65fa43588"],["/tags/民事行为能力/index.html","395a02671dae8e55de0579297ec68187"],["/tags/民法/index.html","3231c90911053274c90280d2217905fd"],["/tags/汉字/index.html","2ee94a21c58b9ad3b42097ed442704c2"],["/tags/法学/index.html","df8c04adafa7d031b469256b9cf35d39"],["/tags/法定许可/index.html","0be8b34c581372640db8ad21a79a6e7e"],["/tags/法律/index.html","16e8b8f0017ff15aba45d775e5ef2b85"],["/tags/法律援助/index.html","fe36784bfd7944caa6081c061eeaaf60"],["/tags/法律经济学/index.html","8267c7ccc05fce0e6c1c222e71ae0873"],["/tags/消费者/index.html","31fb45e670dd93c1b94b411e8c470db8"],["/tags/湖北省/index.html","69b073c5da6bd20fbd15f769e1ebdeec"],["/tags/熟人社会/index.html","d23d28f920bf7eed3fd7951c4d8c1401"],["/tags/物权法/index.html","2845c90d49f11d6115694be24fcc2441"],["/tags/用工之日/index.html","63d8348bfb886653899f2de0bbdd686c"],["/tags/电影/index.html","73e1af3a2bd83b3a694acca6fb5d920d"],["/tags/男女平等/index.html","90dcc9497a5ec35af1b107ad3529cd03"],["/tags/知乎/index.html","b3c05252ed311131824f071bfdcaa9eb"],["/tags/知识产权/index.html","baa5e898d1210848135f85626a712f44"],["/tags/知识产权法/index.html","f41e8f1822742f0acb59dc87be3518b3"],["/tags/破产法/index.html","3fad2b3090b8593d3fb8ca31f7ef56df"],["/tags/破产管理人/index.html","ee48a3e0a400dc0a1162bfea616085e3"],["/tags/社会责任/index.html","48601abe3eb94ab17a6320c34edc10d7"],["/tags/社会问题/index.html","6262da1def1373b5a2314593e335a734"],["/tags/经济学/index.html","fea35a991eb9b09c72abc0936f97922e"],["/tags/结果犯/index.html","a148dc91d71aca590ddff39605ffeea4"],["/tags/缺席判决/index.html","48cdc0830a698d2102d82f71b29ac039"],["/tags/考研真题/index.html","a0e14ba18989418922273990f0206e2b"],["/tags/著作权/index.html","b754c315245d32791155b8b0b50f9c13"],["/tags/著作权法/index.html","42ae3486cfc9adb4d196289a8044443b"],["/tags/行为犯/index.html","d745633cd6592e7ca90676699a14ace0"],["/tags/行政不作为/index.html","c30a119b07d92585c21e6d228826a313"],["/tags/行政救济/index.html","96108852a875f3066464981a708c4fb5"],["/tags/行政法/index.html","b83c2b45e07f5ade3128c3f1858cad57"],["/tags/装饰装修补偿/index.html","8b75d889bd3f15e7ef363986fd4df9f0"],["/tags/观后感/index.html","8341c9e8e6732b9e2a1ea125798e3b05"],["/tags/观念交付/index.html","abc923d1f38a66426ff8682d59e9d81e"],["/tags/计算机软件/index.html","6be32b9d2322db224b297a664701a633"],["/tags/认知科学/index.html","5c13dd49f759eae294dd44e6cfa0cae5"],["/tags/论文/index.html","f5af61225bf4cfdd8b28cb538aa4aded"],["/tags/诈骗罪/index.html","eb35c8705cbd66d1add53dd92ddbd03f"],["/tags/读书笔记/index.html","5b86a97a94bed67c63d3bedab3e703af"],["/tags/赔偿标准/index.html","d7e55f48f43fd7fc6ede21cdbf4d5b94"],["/tags/输入法/index.html","bf028de857dee3cdaa03747e43368128"],["/tags/违约责任/index.html","b1893f32001d2a4ebee944dbec6c890e"],["/tags/违约金/index.html","e0dcb00b6a18e7c38de68b67ee5bf6b6"],["/tags/释明权/index.html","74f83a143a089e630e75698f4963851a"],["/tags/隐私/index.html","91a21cd2d6851a72c9be90a0e8205dc3"],["/tai-er-gu-shang/index.html","3eb5381a05177e0f1de605e5804751dc"],["/timeline/index.html","a93ab5ee7a7f7cfd63c89ad514445809"],["/vcard-yu-er-wei-ma-ming-pian/index.html","d9b4b1488c3c4f998dea95218261bc45"],["/webfont-yu-zhe-zuo-quan/index.html","083fcd94aeb1313f6437091793da9072"],["/wei-ji-hou-ban-quan/index.html","f58dade366d8536dbdbdd45067bc23e0"],["/weixianfan/index.html","1882450e94243954b06c718935e99758"],["/wo-de-macos-he-ios-she-zhi/index.html","41d2e65ef1a3fbfc0c5a9c743c1213ba"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","227c8ac6ae36e1b4fdee51fb5bb5b5a2"],["/work-rules-mindmap/index.html","00ab2e9d8b0566e5841c1193adcc7867"],["/wu-han-chan-jia-shi-duo-jiu/index.html","77732b2925a58258442ecffde440b45e"],["/xzlfbzw/index.html","1321b4c6ea507eaa182498477f6ee978"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","f78e2df3293eb35b7811a54928742982"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","152b7b22e3a16bcc96f9aa17490db642"],["/yu-ming-zhuan-yi/index.html","2c7a700dd995c95c0fd658982dd32bfa"],["/zhetengb/index.html","80f0d644f84b92e506f55fbe6e736eb3"],["/zzq/index.html","3a92217d6a3514eae477016e1829a4a4"]];
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
