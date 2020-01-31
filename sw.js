/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","5303ec5108fe16d7f413624b4dbb55bd"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","5321e98ac1b53b2638016ca3ca7f9fee"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","78e53f7f7d2efdd6df7d305879e75878"],["/PGP/index.html","d0f8748b88cba4f63776d952bf7e9acf"],["/about/index.html","f1f5bd5c15291524998e9a25b52b8a68"],["/applescript-jiao-ben-liang-ge-ban/index.html","3a6500646f7f475ff0cfb5b72005c727"],["/archives/2014/07/index.html","c2a0f1f02b338967439c82ccc9374b97"],["/archives/2014/08/index.html","f5da31e5819697f9bb4657632db87f06"],["/archives/2014/09/index.html","bd6a2f40387caf37b6bbd8f253157174"],["/archives/2014/10/index.html","c02ae56032d56209436783f73009c7e8"],["/archives/2014/index.html","13b4208cc6591ead2f61379750359d01"],["/archives/2014/page/2/index.html","ed5e4f34300e74bcef5ee47d959a9a36"],["/archives/2015/01/index.html","38aea528bbfa8683dfc0e9ca9e8ddd52"],["/archives/2015/07/index.html","64f44a4c14eb2db4de4bba2edd6d03fb"],["/archives/2015/10/index.html","6c3c4beb409befa0b7fcdf0aebf4c923"],["/archives/2015/12/index.html","d664a7e43c0cbaa317788e5f09d1c853"],["/archives/2015/index.html","ec3ac1970494c500df3bdc07bc8ff81e"],["/archives/2016/04/index.html","d6ff2099db7c597c4a91090cf36712e7"],["/archives/2016/05/index.html","888207df7c055123bd3e92eae76c0bbd"],["/archives/2016/index.html","c83ff7493d3f6adda59f715482385bc4"],["/archives/2017/01/index.html","d200b85f6e16a9ce96b238e9d3790a48"],["/archives/2017/02/index.html","80042bf85b235128981e598f8cafe334"],["/archives/2017/03/index.html","ad53c98a807dd3e6ad61e225461e2567"],["/archives/2017/05/index.html","0d8df58aeef3d8cd5e2ae487d69fed9b"],["/archives/2017/07/index.html","f05280321b129bcd087b0b9317aafdb0"],["/archives/2017/08/index.html","2b214d36110bd177e5e619edeb0dab56"],["/archives/2017/10/index.html","1a117e59b108a9056df80f6708c951e0"],["/archives/2017/index.html","7172431b836b0aa8c286673ee7bd731a"],["/archives/2017/page/2/index.html","3180d23e489d9dd672072bcc576feb7d"],["/archives/2018/01/index.html","50b08b46a92d82ac62e311f6cafb9511"],["/archives/2018/04/index.html","6e85ed22c4ea34d361677bf42ebb9b6d"],["/archives/2018/05/index.html","cb974762cf64c6235cd2b2bceeb1f659"],["/archives/2018/06/index.html","18feb10249cd2cd623795db04eebdac5"],["/archives/2018/07/index.html","15c103ae5fdd74ef3383150606d5e6f8"],["/archives/2018/08/index.html","76216ad232ba497947169811f84b3b62"],["/archives/2018/09/index.html","ea8d764a7011c29e24eb4b11b0f04db5"],["/archives/2018/10/index.html","802c728f37b08e8747fd4dbeb7a97d57"],["/archives/2018/11/index.html","c951582bcf448e412d77a2fd3055518c"],["/archives/2018/12/index.html","add01d9af209ec663989a88ff4a85851"],["/archives/2018/index.html","8c43687613d8bcb2f301899d87aa6643"],["/archives/2018/page/2/index.html","81a756761372f6770b889bd82420ba4c"],["/archives/2018/page/3/index.html","2e8c404aa9d857752a97416e96bcc6c5"],["/archives/2019/03/index.html","e6e5a62f36af2806f63d8ac700cebd41"],["/archives/2019/04/index.html","05c66d189f5fae9b4f0fea991b775d30"],["/archives/2019/05/index.html","abbf5808dc7f5a1e276ef48db4131952"],["/archives/2019/index.html","cabf1e36e2d1f712beb4a7cbfaaf4461"],["/archives/index.html","c2729cea4313ba40e78f203b7e013f3c"],["/archives/page/2/index.html","ab3f82c4a639c82ed6eb6d635e8d1429"],["/archives/page/3/index.html","d26675088686e99075800f37483b85e1"],["/archives/page/4/index.html","b09871bc227a371ea64f076c33b58ef0"],["/archives/page/5/index.html","97b0d3bb937936443b2219115748580a"],["/archives/page/6/index.html","a11aa0a5557baa6c348397e495cb3eec"],["/archives/page/7/index.html","54db996b41f23c431a26fa52ee021d15"],["/ban-dao-mac/index.html","60d95f6dc386a5d64f82a05b37473d65"],["/bao-guan-qin-zhan/index.html","df02e5d99f906312ff745da8ad02f826"],["/bao-li-yu-qu-cai-qiang-jie/index.html","e0bd55532440aa191ac5cf560d0e608e"],["/bei-dai-li-ren-sang/index.html","ecd5ed378c20c8117c1aa05b74add0e9"],["/categories/Blog/index.html","877de8952f16dbfd24d99378028e86f6"],["/categories/Blog/page/2/index.html","eb6f811e9094e03b2e19aad8dfd36dd0"],["/categories/Blog/page/3/index.html","995cb04159db08be1c75463f3bd8c392"],["/categories/Blog/page/4/index.html","a916fcdf5d7235d21385be5ef7b6a59b"],["/categories/index.html","3fb9ed9af8b337c0811579ad57a3b816"],["/categories/法学/index.html","45663bc1f8a84fffdc3808438b636fe7"],["/categories/法学/page/2/index.html","368babc28dd91c0c14edb0559fa92bab"],["/categories/法学/page/3/index.html","c23bf0908491b5b94adc7ab05a67fdbf"],["/categories/精彩分享/index.html","8d4c26108fbaef7dee5e57a5c18c7297"],["/cclisence/index.html","38b4b704189423efd5071093a020c398"],["/cetrain-issues-iv-for-company-law/index.html","9e73419555bcfca55e6abc11fd5275aa"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","d1a533f993e5e44e7e997f73dc96053f"],["/cs-hubei-2017/index.html","08dacc0fe8e556f32f289f9932ebc7ec"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","6368f0897eda613c684e469defe97532"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","ce577d486c1835f1eb3f7962b76bc74d"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","27596a0003b00f015dfb1cc725154aa7"],["/due-pin-workflow/index.html","cebb051fe9add16c1d30298b01d81cad"],["/duo-ci-zha-pian-shu-e/index.html","eae661e50059f0c67fa2813f390ee2e4"],["/expert/index.html","656fd03098c21c839e52d3f39e239599"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","88df9d5a48f98ad81ccf10a24bb84cc0"],["/google3756ddc34336b7b9.html","b0abf87da94bf401580fea801a561f9e"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","84bf91677a665340d3ee1da219724d64"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","612c8a6796c1a2012348c0e2df1dd8e9"],["/hustlaw13/index.html","0afa7e4e9e7c13cbd27c97d68a4395d4"],["/hustlaw14/index.html","34c1dc0e7c508fded528104821196394"],["/hustlaw15/index.html","31c154c645468a0e94851d3ddfc33515"],["/hustlaw16/index.html","88a2feb5d05528f329edcc846aac91e2"],["/icloud-terms/index.html","9a5f774d466e81e9c6e0a57b0e4dda92"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","acdb992dd8970348331a1c1cb7997497"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","f41f4bb7df6dc8c0fa7c072371fee3ac"],["/jdsnk/index.html","ece388feed6dc224b3bdefad2e811a2d"],["/jian-qiao-fen-xi/index.html","14b718bf23acc2d2b4373b8c404180f0"],["/jianguoyun-keepass/index.html","2d9a98ff77d3d4fab46a1c38f47da57e"],["/jin-qian-bu-neng-mai-shi-me/index.html","84aef9bf8c18b2af6f84e9dffd320418"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","276080e6221cca142d55439327a75b11"],["/latex-yu-lun-wen-pai-ban/index.html","c6a73f3b0a3b7aae9173ad1a45d54cf2"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","d833dde3c356258a7a12bb179c974eb8"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","dee29b27c68627b728513c11a6cfa02d"],["/luan-dan-20181116/index.html","9ce46acc971dadb4cfc6840a91aa2bdd"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","c3916662f61f414f4cb07e97c6098c91"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","26da77757117d6cfa3ea19bff9e3cc07"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","218fe9942e4089fb4fd3c8fd8b7801f7"],["/opoo-zhe-teng/index.html","bc16fafda185a7c7b883ca8022eab446"],["/others-00s/index.html","dadc4b19aa8f196e013510a6109762e4"],["/page/2/index.html","ae03443de745517719c0fd3700637518"],["/page/3/index.html","390b885bb4d735dbd80eeed5ddc360ae"],["/page/4/index.html","2dec03c7c16d28de0df8f0b0ede81480"],["/page/5/index.html","ef051403fb1ece11c05665567de905ee"],["/page/6/index.html","c1258e31405c3c721f850bdebb657377"],["/pan-gu-zhi-bai/index.html","2070b84cdc0e50fe8dd6c366e0dbd784"],["/posner-homosexual/index.html","e969f96a07697091a0c8a070fcb94d47"],["/qxpj/index.html","45a013cd46a0e57e7e653153fb35059c"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","6f7e088506201a72bfdf59b2916b0c70"],["/shuang-pin-vs-quan-pin/index.html","8d9282f11920a48fa065f1faeacddda4"],["/software-reverse-engineering/index.html","acc283bd3660f0e14dcb23682bdf074b"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","8ee32b8ef8e0079bcccd67fded793bf9"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","8f776b4111e19d25cbb43041f8e51bd9"],["/sw-register.js","629a58d0119965401eb4a8918cd1cc11"],["/tags/2017/index.html","55d07cac1c786fae653eddc0a09afb3b"],["/tags/APP/index.html","be7f5b48593ecc14974760dc5211fd36"],["/tags/Apple/index.html","4e226e82487f494f1dba41856b0fabb8"],["/tags/AppleScript/index.html","9403246b1af4884be201a272c10521dd"],["/tags/Due/index.html","d3bab13d9bdf5136f9ddc82b8c4d28c8"],["/tags/HUST/index.html","6ee5c6cc6f1877cc4d511121a2e3fbc9"],["/tags/Homebrew/index.html","4618cbd9d01c0d0f0bf2927a14a81148"],["/tags/KeePass/index.html","c79b6ab97353117b4e85fd975ff92f8d"],["/tags/LaTeX/index.html","bbb810cbe6fd34a7bb97f9c696b56095"],["/tags/Namesilo/index.html","f1fe433e01623b281452f37580cd750b"],["/tags/OpooPress/index.html","e4821aeb8ba5fcf153184df747311142"],["/tags/PDF/index.html","1f1525fb1eca83f51933ab9cbc61020f"],["/tags/Posner/index.html","62e994464bc4a756f5d869d7f0012bfb"],["/tags/Python/index.html","e30b3ce4d1bc2d95533f95381af74b39"],["/tags/Rime/index.html","8346ce083aefa2e067cb4a2fcf48463e"],["/tags/Typecho/index.html","ccf90d3bf4562a4a018b8e961ba3b71a"],["/tags/Workflow/index.html","86e16b0e56865827bcfbc9cad81c5d26"],["/tags/cc协议/index.html","ccef6d783af5797c044a9c06f58d99c8"],["/tags/iCloud/index.html","954fc19a9728130b2d7f503475fc4159"],["/tags/iOS/index.html","318453b1d57c3a03b2de028d71d42b69"],["/tags/index-1.html","629b697524e624a6dd71839406293e08"],["/tags/index.html","629b697524e624a6dd71839406293e08"],["/tags/logo/index.html","2ddfea63f40a2c4902e0b915174c1b54"],["/tags/macOS/index.html","35ac319d0f32c916a0a240d71b1950dd"],["/tags/vpsmate/index.html","2df2cf71fda7c9045d7d7779f431878a"],["/tags/乱弹/index.html","42aeaa734d0e09a543380166f318e44d"],["/tags/二倍工资/index.html","77181b469a60a1169881e0d7cdd26e79"],["/tags/二维码/index.html","018b0f25b33761c0a1843d826a185197"],["/tags/云盘/index.html","a6ea12e4656c412c2bf71f3a1a8e3675"],["/tags/交通事故/index.html","68d187514cb45093b3dd305723cd679e"],["/tags/产假/index.html","3a95ff6ab79695e1634446e31d72f680"],["/tags/人身损害赔偿/index.html","2ebf503662110761e21b7b4d83b5bb50"],["/tags/代理权/index.html","d4da09d90cf2bacf3dbfe116ae42a1df"],["/tags/优先受偿权/index.html","676696881371278635b97577501b0bce"],["/tags/作品/index.html","b79465aa0017f4c81c6e48f4db39c9da"],["/tags/侵占罪/index.html","a15cdc8333ac2d612ce739c4086a1c0a"],["/tags/儿童权利/index.html","2d44f8e1703d65ec0cd43d51b5f097ea"],["/tags/公司法/index.html","f883827598167fcc2db9b6ce3f00119f"],["/tags/共同财产/index.html","ed1b695eaba672e25539ea7214cc6ce2"],["/tags/刑法/index.html","f8e8bcd74bd2252aa9863ff0c25cdd68"],["/tags/劳动关系/index.html","68f78cf58888bdebae284a5e42b3a8e4"],["/tags/劳动合同法/index.html","2dd18a72d7517ca93153d24e936b5de0"],["/tags/劳动法/index.html","029d55718b4936ae631bc44a7c326956"],["/tags/华中科技大学/index.html","0e38a47d12e8ef6016991a00d50e2df7"],["/tags/华中科技大学法学院/index.html","8c08de3313409ee30b2eb0cdb6e57647"],["/tags/危险犯/index.html","c5d8f4f0908cc309682a9e761989168b"],["/tags/反向工程/index.html","83672d2f510d5deeb3dfeb89160e284c"],["/tags/发行权/index.html","a535d306c4bafe2b2c9bd0f7d7f31bef"],["/tags/司法解释/index.html","7b66d1997ed47f6f7d36320d73751f7e"],["/tags/司法鉴定/index.html","46fadaf4fa58d1bd91969958bea213b6"],["/tags/合同主要义务/index.html","c83e5fc9385fcbf806d7e876534a2af4"],["/tags/合同法/index.html","2339b1c07c6764a203c6377e490f1e01"],["/tags/合同附随义务/index.html","c452f31f66d7462f3c0d4454475e7d5c"],["/tags/合理使用/index.html","def5d4625963fcbda8342f610fc52a5b"],["/tags/坚果云/index.html","1f298c4353e143949805da0b8461a2a2"],["/tags/域名/index.html","9e202396a2bd9eb035b13628d2c06b22"],["/tags/实害犯/index.html","bd342a24ccac764dfd575d6974991538"],["/tags/密码管理/index.html","5729eb93e9b4c9f9598e85283b1c6896"],["/tags/工资/index.html","70ce2139686de78e9bf4348830ae5df9"],["/tags/待履行合同解除权/index.html","88c8322cc1c497a5a2d61d403a30c28b"],["/tags/律师收费/index.html","3ddc44d13c422d3d0f27a0be0b0ee51e"],["/tags/思想表达二分法/index.html","6306da9b4d47cce12b987b07741218b9"],["/tags/思维导图/index.html","5bcf039a2506913438cfeeaa6e2d38c9"],["/tags/成本收益/index.html","89a9349872160ce4e43a7fefba0996ef"],["/tags/成长/index.html","454b03a910895afbd30bc40be58bb8ac"],["/tags/技术措施/index.html","08189c4d647cdf0be4b9730d13a4bfa0"],["/tags/抢劫罪/index.html","d6f83615beca7aa4c0b2fafc00b71909"],["/tags/抵销权/index.html","dd736ea641ac3ac04683d9a1a691901d"],["/tags/排版/index.html","bb267ec88398fcc832b7969385fe98a6"],["/tags/插件/index.html","f6af3352edfd37f26258282e4c52f558"],["/tags/搬瓦工/index.html","6572d9fc49f765738b5c00db98ede4ab"],["/tags/故意伤害罪/index.html","9c0b034407a896a35d49159c0cba0264"],["/tags/效率工具/index.html","c968cc17726ffce9b91d71e91b0629ee"],["/tags/教育/index.html","0ffd07a007017239aae8637fa3d54e43"],["/tags/无固定期限劳动合同/index.html","3f5d429a7094e534a5f4ee77f315dadd"],["/tags/最低工资/index.html","2efeaca60c7bfb27483637b599e8bb67"],["/tags/最高院/index.html","e08741e6e4ceb4845ef33cf33ebf70b2"],["/tags/武汉市/index.html","19c2faf8e04e07c29caa8c4d7b0341d5"],["/tags/民事行为能力/index.html","c04678a0acfeef99a1d93d551e26bb34"],["/tags/民法/index.html","613099348eed80deba96149d51d2052c"],["/tags/汉字/index.html","84067c2dbad77499a2ee9b7486d8d270"],["/tags/法学/index.html","3d9511d14e1b182d0b354ccded3c47f1"],["/tags/法定许可/index.html","3934dbb9da4ae72223443e1683b259aa"],["/tags/法律/index.html","2ca417b074fe735a6799beaf64b17b5e"],["/tags/法律援助/index.html","1450ced530abbb7a55ada50d0960f2ed"],["/tags/法律经济学/index.html","5565280ac1aab6bb7176f62886966784"],["/tags/消费者/index.html","adf5f9892c99894c9aa15746b0e89d9f"],["/tags/湖北省/index.html","68912821c3906c0bad0a5a70419c4326"],["/tags/熟人社会/index.html","21ef36da9deb7ecdd3e679534fbf9770"],["/tags/物权法/index.html","008c8ccd5b7d718f3babfcc061be2aa5"],["/tags/用工之日/index.html","f48c18b58f89e688f392be7b4dcdbbd7"],["/tags/电影/index.html","795f506f7c944db7fa361a781ee45c09"],["/tags/男女平等/index.html","b1d79ce5a725ec2371377dc113be2176"],["/tags/知乎/index.html","45c87fcbf474a2fadf4c44ac4a0140aa"],["/tags/知识产权/index.html","b08db9bd3d80a9738b62b2a55ba7d0ff"],["/tags/知识产权法/index.html","de81871e469b05c34340eba322259c22"],["/tags/破产法/index.html","eb3f4270ffd413670ac7c603f0cc19f1"],["/tags/破产管理人/index.html","e4792e57cfba59bb65071bd992e016c1"],["/tags/社会责任/index.html","614029bd2df274df1f7036e8ef067da9"],["/tags/社会问题/index.html","0810ad72abccdc9fd67a4d9708b979cc"],["/tags/经济学/index.html","2a155076fbc98e5c9a6d2b5e0265cce5"],["/tags/结果犯/index.html","f5af3b5f601b9ff86bdf9015b56e3996"],["/tags/缺席判决/index.html","d59635202edf602431a8fc53b29be9c4"],["/tags/考研真题/index.html","8d342534fc0370ebcde4f514bd51bb72"],["/tags/著作权/index.html","776fbbcd0391e374118e09ed482c7734"],["/tags/著作权法/index.html","d1d418e6d666db908ec3cec315a66c06"],["/tags/行为犯/index.html","e4906b8be25029e4942e38937f1a8638"],["/tags/行政不作为/index.html","2a7f397e68883a044412c9ce39803b23"],["/tags/行政救济/index.html","3a2dfa8dc635116747f6616056a95dfe"],["/tags/行政法/index.html","02d522ccb16506a48a5061ef683be0bb"],["/tags/装饰装修补偿/index.html","885781c5f6a975e24c7117a4d250cc0f"],["/tags/观后感/index.html","0f71f58a2b47cac85f9e17cf16007146"],["/tags/观念交付/index.html","11279eac5b074a97f6ff6e81fb198b92"],["/tags/计算机软件/index.html","243856a736e9a6495dd8873a70ff1340"],["/tags/认知科学/index.html","9ea34e4ec91a59162f43de261ca29d01"],["/tags/论文/index.html","1fee3ff99b285d03c5539bb931b2daca"],["/tags/诈骗罪/index.html","c1f515eaaf178e44e3a479eea97126fb"],["/tags/读书笔记/index.html","5a87846023b4cb1ab83e15068e3e3a87"],["/tags/赔偿标准/index.html","2954e28f306907773a2c67819ce4c507"],["/tags/输入法/index.html","12b69725d3ce507e823322bbbfa48c41"],["/tags/违约责任/index.html","d001ffcceecc21d8eb50d0cb8a322dcf"],["/tags/违约金/index.html","0636ee51f481748a9f38f5fd52aeb761"],["/tags/释明权/index.html","79e4417d3d40632e45de46366c16dbce"],["/tags/隐私/index.html","5c8db3ad907c01af23d5a9d151294413"],["/tai-er-gu-shang/index.html","895c687739279a3edca56e95b900193b"],["/timeline/index.html","8eade98a67aadda74b2ae0e4a001b3e0"],["/vcard-yu-er-wei-ma-ming-pian/index.html","ac04005174e184e6f5098c1781e9bd3a"],["/webfont-yu-zhe-zuo-quan/index.html","2b17e306409197d2799d7e19a6cbcf7c"],["/wei-ji-hou-ban-quan/index.html","685c63b6bf5a20c8ed73c327d34273cd"],["/weixianfan/index.html","2cd107d9e975bc19855fb0d3fa329dc2"],["/wo-de-macos-he-ios-she-zhi/index.html","1ba8fdf10912fabf0535d2aa135c0241"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","2626a74074bee6852301883a49c5b5b2"],["/work-rules-mindmap/index.html","3745e0da5b4fc852a7988b0b07385580"],["/wu-han-chan-jia-shi-duo-jiu/index.html","fd07462a5f2ebbb360b7b2092371db64"],["/xzlfbzw/index.html","711b2f78399eb3c746db64f30d8bf6dd"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","01f53c0f02655c8d1c761225eee2c0a8"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","cb405990aafe0f17c4df4602c861267b"],["/yu-ming-zhuan-yi/index.html","bfc03370ecd829d1eb85149ac934602c"],["/zhetengb/index.html","c0dfb838f00044066adc3329f80c9ac6"],["/zzq/index.html","596aa86ce4fa366108357de891e348c3"]];
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
