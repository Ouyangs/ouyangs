/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","064e537d5f355095a54cf14d8c1a5e1b"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","81f1a9b62379fd9a0605468c3b3fbf92"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","8994fa1fbfcf36dc5c0d9ce073704b23"],["/PGP/index.html","b244ab563fd1ef5fc81d4325ea8e2118"],["/about/index.html","df30f96ccc8546c7accad0f0237c46d6"],["/applescript-jiao-ben-liang-ge-ban/index.html","c81b54563ba8b0181a5aad829dd91b4e"],["/archives/2014/07/index.html","a35391c8c5bd1a3f3c2eceb3ece033aa"],["/archives/2014/08/index.html","fbc6fb1233670e227fe84ffc54c620eb"],["/archives/2014/09/index.html","145273580e42f70fea2ec16ab980a709"],["/archives/2014/10/index.html","2685a3f8f981fb2c1797ff85eec65041"],["/archives/2014/index.html","d97213f2fc165b8535d399f182a3f523"],["/archives/2014/page/2/index.html","579884edf9058d09a83527599c85081f"],["/archives/2015/01/index.html","dd5a1087a925b6134b1589de2ea92d72"],["/archives/2015/07/index.html","7ede8729672529de5d3e239aeef30a78"],["/archives/2015/10/index.html","3c57f78c476f557f61d552dcf30773c5"],["/archives/2015/12/index.html","18bd003d580513b428e2d4cfac266047"],["/archives/2015/index.html","0d321e2be664a8354f4221b0739441c9"],["/archives/2016/04/index.html","dd809629d8caffe042e7cdac95000665"],["/archives/2016/05/index.html","270022eebba4dd644610bd8dfcc28074"],["/archives/2016/index.html","4b15aa9c145f671f8c03de58214df18d"],["/archives/2017/01/index.html","bfc41a3ab525492fad0cfad2ff853d28"],["/archives/2017/02/index.html","a9af87933ecd40033e33782d3b3bfe77"],["/archives/2017/03/index.html","1a2d4958404d4081eb76b6ea339e219c"],["/archives/2017/05/index.html","6eb1b777307d9f8a778217586c7e0707"],["/archives/2017/07/index.html","ece94b32f8e5b1dc9be8a7843d152673"],["/archives/2017/08/index.html","eb8d078a15e985027802429793686f1b"],["/archives/2017/10/index.html","2c41205b6fadce57b0f451ed03f40e36"],["/archives/2017/index.html","7274e2457644971362a079971ab056ab"],["/archives/2017/page/2/index.html","9c789e0bdd3db31966aa2a220a51ab5c"],["/archives/2018/01/index.html","ef44554053f57f5ad90139a321cc2355"],["/archives/2018/04/index.html","b7645be195d72e5693d41364089c693a"],["/archives/2018/05/index.html","629239fee67538d68e5fdef0f96ca547"],["/archives/2018/06/index.html","648809679e1b1a50de836b82d395c2df"],["/archives/2018/07/index.html","6e4a59c1a423f41e373347dd3cf66e38"],["/archives/2018/08/index.html","920d834050be9afe5a268ef719e05fb0"],["/archives/2018/09/index.html","0b8414213cc7aaf0261a8fb05d09c984"],["/archives/2018/10/index.html","89764c94dfd8bc8ac48fa93a389ddd5e"],["/archives/2018/11/index.html","ddba1c05757e2239a12de750e85c4b42"],["/archives/2018/12/index.html","c79532396033a692b8fa3aef6c035aae"],["/archives/2018/index.html","0d3b1fd47b205ee191a6f7705ae8ffed"],["/archives/2018/page/2/index.html","4a2588690d37c7e69c59c726736db149"],["/archives/2018/page/3/index.html","d7e3345b163b6ad0c366ddfc2f8dd260"],["/archives/2019/03/index.html","b26c8d2a2119cc42b5bd2252b027092f"],["/archives/2019/04/index.html","c27a17e970919b5d04f2b60f63c24b62"],["/archives/2019/05/index.html","7883c5187c4f6d43ea72d454b7bd148e"],["/archives/2019/index.html","2bfff5d353188f71b50b86f90735069a"],["/archives/index.html","8e4061ea1d2de3145e64a83b6988ca9c"],["/archives/page/2/index.html","082d15c03e48ba7d737a5e6d363cf098"],["/archives/page/3/index.html","a395f45634ddfee5c396004ccbeae2a2"],["/archives/page/4/index.html","fb92b0dee3f6cb210d1ac90c140cfa9a"],["/archives/page/5/index.html","042d8637f89f576d4e58220d056c651b"],["/archives/page/6/index.html","9f6627e9fb79e676a0b260979b50f0a3"],["/archives/page/7/index.html","c2b9a15ab143f2a3db57a1b4f59e5ac4"],["/ban-dao-mac/index.html","e4b79bb0e2aeeae01282082fca8bf1a5"],["/bao-guan-qin-zhan/index.html","2eec19cb0a668bf334851f9e06e501de"],["/bao-li-yu-qu-cai-qiang-jie/index.html","dfe9bb6b143931288025d0873503619a"],["/bei-dai-li-ren-sang/index.html","b9eeed68e5bc655e6280b6aa5c5bcbdc"],["/categories/Blog/index.html","50682d2d8e6ac06a32aa587b705e43ac"],["/categories/Blog/page/2/index.html","7c90c510d1d00c9822049109a1a0a0b0"],["/categories/Blog/page/3/index.html","0a783072a86e3bd5cceffb5ff3ffb896"],["/categories/Blog/page/4/index.html","3a01406c2e7ac98d320d2126cf543b6c"],["/categories/index.html","d65a319bbe2adfa27ca61737ac077e68"],["/categories/法学/index.html","52184fc6bf44a851e15cb32a9da6a5c3"],["/categories/法学/page/2/index.html","3a25249888f7f39c8756d398eed6cf6a"],["/categories/法学/page/3/index.html","21b264f7106ae5805d63077be491b102"],["/categories/精彩分享/index.html","ee4209ce2e61c7398c8801571fb21e25"],["/cclisence/index.html","7d511c72c4b6651f8438777a69c58a2d"],["/cetrain-issues-iv-for-company-law/index.html","160eb088dd7ab8c5ec783d5252574946"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","277bb96b99acb1229ffde1274b729de8"],["/cs-hubei-2017/index.html","c9cd54021d5a213ce2c7864dd3cc0e33"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","03dc9e1079a0ff41979b4818b1204f97"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","8d1805f644c96cf78d2ff4da1164030c"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","6a97d129e3f6b8611f348a026996253a"],["/due-pin-workflow/index.html","c8cf48b6010aa57fb917e1175fe83d01"],["/duo-ci-zha-pian-shu-e/index.html","1b87ac2ce47f20ed308a577949c948c4"],["/expert/index.html","3888037bfc65e213662f43e96f256241"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","03bfa9bb454fe013eb6533e28997d369"],["/google3756ddc34336b7b9.html","635b9b30c1a5c89b34e512b400487c9c"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","e1c2d41cfffa668d85a23423ae0cfa1f"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","cfe4a2c4d6d74d37806dd72e9560692e"],["/hustlaw13/index.html","30cc4649095a1504c1b239c236364471"],["/hustlaw14/index.html","4064a9346d23ac758fe936b38f4ba033"],["/hustlaw15/index.html","58737a17089deddf90602306efe2ee5c"],["/hustlaw16/index.html","97f5365360f83ac230287186cdf31386"],["/icloud-terms/index.html","263cedd118b13ebe2e869daa8076ce85"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","a3d922d72e50b5ec44ef140dc6429fff"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","9c1f318d810e546bf6c27efd486404c9"],["/jdsnk/index.html","701a6df522eeb09338e4e6e799c035ea"],["/jian-qiao-fen-xi/index.html","e3ea552a971f80438c670a014ace07ab"],["/jianguoyun-keepass/index.html","53b24869ec9d3c00431c2c1c51171de4"],["/jin-qian-bu-neng-mai-shi-me/index.html","8f24a299c45686a46d879c07a2be66d6"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","97d6a23fba12d9f97d9e1571e4e20d60"],["/latex-yu-lun-wen-pai-ban/index.html","58980833045f2a8d58022d7fb79f212b"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","0083c145c42b9963e86fc09f52504a50"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","a3efaf3154a002d68f81a0a516343bd4"],["/luan-dan-20181116/index.html","84420986bb880ed3593caf50e0dc7242"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","96f0f311740f76c2a4779ed9668fd8d5"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","1a0bf05d982b5e419679da391a253449"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","6143cef391b0684ee99df566d93314d1"],["/opoo-zhe-teng/index.html","6f38d8367c4e6ba4a8fcefbf9cc06737"],["/others-00s/index.html","2752ac61dc77ad4cad65a5738100158c"],["/page/2/index.html","72e0a8eb007edef78a871d2eba786c76"],["/page/3/index.html","4aba04a4f53bc21bd75b469c0a9399c9"],["/page/4/index.html","2b2f91577945efeac2fa663460428608"],["/page/5/index.html","6403c2ff2181b679a041ec769b122954"],["/page/6/index.html","a08e92ed1f4aabff65c7c5879ef4d901"],["/pan-gu-zhi-bai/index.html","5b0bbf035d16d72d9b96d13cfa15be8b"],["/posner-homosexual/index.html","4ebfae1e6eea461bc713e4d55f0831c9"],["/qxpj/index.html","a507133579fa9cc2a770d45345d037d1"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","2e9110e31f801d66ce2834d880935973"],["/shuang-pin-vs-quan-pin/index.html","0a59eb4bd9a80756c23499ff7e573003"],["/software-reverse-engineering/index.html","0532eb3466f4c1a9c8fd6cbdb6fef2bc"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","da4462058b7572bf27e47460162d7631"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","2873a8c72c0215a472b799ded6d2d65a"],["/sw-register.js","5663e2eb1375eb8b5a70b898163aa8e1"],["/tags/2017/index.html","7efccfe52de06bff49e5992be987b1bf"],["/tags/APP/index.html","233acfacb262622440e59113fa9db328"],["/tags/Apple/index.html","17d4cfd527c9a7e4d1f337f18828f872"],["/tags/AppleScript/index.html","d873d1886056579431506949ed6961c7"],["/tags/Due/index.html","45b3057696611e1419276bacc2e6055c"],["/tags/HUST/index.html","af6619c1233c6b8a7be40d396dd2c1d6"],["/tags/Homebrew/index.html","d8f17bb8f47c868449ebf47d8a474130"],["/tags/KeePass/index.html","13133081a3245563ba08d9c4fa4d25e5"],["/tags/LaTeX/index.html","cc6990ace226268ee7c04169f7509ab2"],["/tags/Namesilo/index.html","43ed2b035f70b544ba3da5ba5fe33259"],["/tags/OpooPress/index.html","13d73e8f98dbfe64d6b07c610c69d875"],["/tags/PDF/index.html","5f6c836d6fd43b8b4a23e6570260b694"],["/tags/Posner/index.html","65a5fde16e8878241a724cb01b3e1eac"],["/tags/Python/index.html","6c00f58a334e1d664848f54cb565fbbb"],["/tags/Rime/index.html","0f460f4649e48fd08ee61108899327b8"],["/tags/Typecho/index.html","f1b6675f74ed9f7fd88b8bcfeb490381"],["/tags/Workflow/index.html","ffa05e9bd6a72b75ea62179d58ec4246"],["/tags/cc协议/index.html","cd72fb4c9d8d366e3b2b968804c24163"],["/tags/iCloud/index.html","17b77ad914fba7df0db9390b210189c8"],["/tags/iOS/index.html","51e14babba132d11ed2a0520549aa446"],["/tags/index-1.html","e14d10b099b8bd51344058a7db067ffe"],["/tags/index.html","e14d10b099b8bd51344058a7db067ffe"],["/tags/logo/index.html","a178042d8b2d723f0f99bda1e8b97b92"],["/tags/macOS/index.html","100c240f6b684c62adf78b247c0de250"],["/tags/vpsmate/index.html","b5710b58432c010bade120cf68cc2d0a"],["/tags/乱弹/index.html","569e3876b37582cb5030ce1918872916"],["/tags/二倍工资/index.html","82b7e75decc88f7d5d332e00092056c4"],["/tags/二维码/index.html","8369c6a844da0d604cc4010cc6740f5e"],["/tags/云盘/index.html","6821189425e378f6a0f96e7f0a49ab46"],["/tags/交通事故/index.html","e1694a63764e4517f6d6a1a7f9160777"],["/tags/产假/index.html","4bce37b80ef74d5d46e35dc89b47bae9"],["/tags/人身损害赔偿/index.html","bcc3fa47e03a48c3db1bdd85d8c21ed4"],["/tags/代理权/index.html","478ace035599dc570e8daa681dac9086"],["/tags/优先受偿权/index.html","f8a4592e2dba2092dc45dffee7c0ebd4"],["/tags/作品/index.html","165b3be548c4e6c2fb6ea7e0b6259ba7"],["/tags/侵占罪/index.html","3986cff7aaf7a87ce74634846d43701f"],["/tags/儿童权利/index.html","0e6191cf5fdb60599309b0e92b22678f"],["/tags/公司法/index.html","06391601939be403a9314a307be28dcb"],["/tags/共同财产/index.html","9db330033dbe5206b68a6925996ef89f"],["/tags/刑法/index.html","0755d831a4ae1bed9a7ae2d2a0e767d7"],["/tags/劳动关系/index.html","b86eef922a8c70a7a1761f73388d277d"],["/tags/劳动合同法/index.html","988042c6d98120594782dda5d63bbade"],["/tags/劳动法/index.html","a10fe3b8cebfead8fd24be15b72e89e2"],["/tags/华中科技大学/index.html","e9d2fc675681841f973c44e649a3610b"],["/tags/华中科技大学法学院/index.html","96d421036758f24b2bba6dbd6741b341"],["/tags/危险犯/index.html","087a5bae5c2a845f88695b2570da90d1"],["/tags/反向工程/index.html","f56be7ea40997d40d8dbd1903be71ac7"],["/tags/发行权/index.html","404153c0c2bc006d09f4ac3fb1f2c6ee"],["/tags/司法解释/index.html","af8020aad7330e1dd45765702afe1ba3"],["/tags/司法鉴定/index.html","bea8287ee089762726ec583f3c30fa24"],["/tags/合同主要义务/index.html","01ed45b166635603e4d491a0ee1e80cb"],["/tags/合同法/index.html","970cfc9215db99f3a1fdc885fe12ffc9"],["/tags/合同附随义务/index.html","65da63ea2017ac8ee1f3f6079262a931"],["/tags/合理使用/index.html","27841c768cfb29c1a70478ae76a14492"],["/tags/坚果云/index.html","3f0cc06143cdf3817b3362debb590434"],["/tags/域名/index.html","529807bca0db24ca43c38960c9f35c2e"],["/tags/实害犯/index.html","92838e8ec4c778287d94b0b09c4a0936"],["/tags/密码管理/index.html","45c6f6127f309e7349092d3664cceb0a"],["/tags/工资/index.html","5759ba1587af931bdd6f6a79d6e9ccda"],["/tags/待履行合同解除权/index.html","fc2828557cecee9db8d098af31d68f2d"],["/tags/律师收费/index.html","c91dcde2e0ec4a508e803a3ec3b3e5b0"],["/tags/思想表达二分法/index.html","1a01c4eb4c704420ba60016f67c0c393"],["/tags/思维导图/index.html","0dff2dd1d04d8e2da0a3267ec92feb4f"],["/tags/成本收益/index.html","4a03287a1ff417027f42bc36bbf6c97c"],["/tags/成长/index.html","222cae236e1d4367ce6683da0a5e5b5e"],["/tags/技术措施/index.html","ee1d516fac8438174c3f43e3d60eb0f4"],["/tags/抢劫罪/index.html","e77998b476087431cdb1fca3f656e659"],["/tags/抵销权/index.html","5a563eeb006a10f9772bb6d8f05a8390"],["/tags/排版/index.html","1562ff4b86a46e112134a3f19547c554"],["/tags/插件/index.html","bbfa9c4867f4cfe4e12af99a9b5d0537"],["/tags/搬瓦工/index.html","3dea33031e15cf84bb565e4e97ac2cb1"],["/tags/故意伤害罪/index.html","b0a1c61894bd72811f339def4e78a3bf"],["/tags/效率工具/index.html","54a2be516d5094c19170f3e2097a1151"],["/tags/教育/index.html","5fcc44781eaacc956fd8eb3c30c10133"],["/tags/无固定期限劳动合同/index.html","56ca72d4b5dc39811d500c21074222c1"],["/tags/最低工资/index.html","007248a0fbf01de3b6631dfd00249888"],["/tags/最高院/index.html","1c5d90cf3532a6efba04f81dfc3ea2b8"],["/tags/武汉市/index.html","c40593b6a8dda8ec475a8b2402a03b93"],["/tags/民事行为能力/index.html","4f26b6f2be3a2ff95ab540e29d303317"],["/tags/民法/index.html","3c7facfe2919836a3d84608133628d9a"],["/tags/汉字/index.html","faec81f829cfa0f4e97fd78877e1bc5d"],["/tags/法学/index.html","70330be782c1dc97b84d0a7e9330310a"],["/tags/法定许可/index.html","57d90dcc172ba3cf6a89a3d841be4392"],["/tags/法律/index.html","ed109b8d6d392320c38ce949d3daad99"],["/tags/法律援助/index.html","69c89402edf0059bfd78abc1dca1d838"],["/tags/法律经济学/index.html","9fc23665badbaa49dc9b7c430b8f814f"],["/tags/消费者/index.html","4bc582323386ce5bc1c1beb6324d9f1e"],["/tags/湖北省/index.html","f6f48fc4afb3da9da32ad29535ce14d6"],["/tags/熟人社会/index.html","162b441757d87149a53e39437cfbfbcc"],["/tags/物权法/index.html","2bed73ebc73863b2f6453bc378da9b9d"],["/tags/用工之日/index.html","d9157394461e79057f1aa436861b9cf8"],["/tags/电影/index.html","213a806c8ccfb3faa4d681762fd43707"],["/tags/男女平等/index.html","66cc76bd8a4b61095bdeb779df643f88"],["/tags/知乎/index.html","59ed1748533fb8344db89485f4d3f14f"],["/tags/知识产权/index.html","f89e46d93a3e6ed7d33c2f6f8cb937ba"],["/tags/知识产权法/index.html","451378e244b4edc1a4045e0efd2a5fe3"],["/tags/破产法/index.html","12800b1a69c36a66c65ccd5cf66f2822"],["/tags/破产管理人/index.html","aa24d80a245743f36d1408d6552a0708"],["/tags/社会责任/index.html","9d1a1ce633ec914ed49db341eb856b84"],["/tags/社会问题/index.html","0553441a4e6976d9b16dfd1c5e2845ce"],["/tags/经济学/index.html","111265e1b12d4e5dbfbf914efcd333a4"],["/tags/结果犯/index.html","80701c9f3de49b5fa44df342b9e55953"],["/tags/缺席判决/index.html","c23626581f3815208766f7079d61dec2"],["/tags/考研真题/index.html","125ebc0feafec139ad7896aabea28d81"],["/tags/著作权/index.html","f33b2adaf0d75092b9b753a7a4997438"],["/tags/著作权法/index.html","c56625ee2b6aa1cfb12f334e65173f11"],["/tags/行为犯/index.html","e624bdf8c66f9f79c372f69557d06486"],["/tags/行政不作为/index.html","3464377cd8f881da8adb44b754aeed4f"],["/tags/行政救济/index.html","f9835ee4d6f289d568e1b382f4a436de"],["/tags/行政法/index.html","ab356bc0133937c603300eeabc27e68a"],["/tags/装饰装修补偿/index.html","f272569f136094dafb73d6a4e817e07b"],["/tags/观后感/index.html","77e705fee0eae809b8b042c6bf68d7f5"],["/tags/观念交付/index.html","3f0fd8a15f2c43041f5fc3d882ce3eb9"],["/tags/计算机软件/index.html","81e92767ff75f3afbdf1d5b3f9bb1e6f"],["/tags/认知科学/index.html","43200e87d197fbbf210794173a1b0e15"],["/tags/论文/index.html","97ba8b3b384829ace79d4272df344bbd"],["/tags/诈骗罪/index.html","dae54e5475e92d554ffdaa156b114d86"],["/tags/读书笔记/index.html","e143de3c7674a23e24f3985567da523f"],["/tags/赔偿标准/index.html","183732f9e999dc360ef12ede1027f442"],["/tags/输入法/index.html","e58268fec19f8932a0914a96ad9e39e3"],["/tags/违约责任/index.html","56cfea02b89a8d5129ffb519f55e1b6d"],["/tags/违约金/index.html","d5b11dee646e9f9b44eb864f3dcd6b0e"],["/tags/释明权/index.html","c9992c994924d60c5e5d799b93970f2c"],["/tags/隐私/index.html","fe183ea59a45a856e9c7b944e8bf2ffe"],["/tai-er-gu-shang/index.html","7fafceb47ab382bcc70de70434f84cc3"],["/timeline/index.html","cfd5a8408727d775bd4875735be33c4c"],["/vcard-yu-er-wei-ma-ming-pian/index.html","cd1e4623aa3342dcc1a6e2b6bfd60dee"],["/webfont-yu-zhe-zuo-quan/index.html","1c01568c2130e0741a2ba5b2056f0581"],["/wei-ji-hou-ban-quan/index.html","da376cdc3f5ce2e92951a6a5257b69c9"],["/weixianfan/index.html","e5816532e9201e147812e0f6d9bb371e"],["/wo-de-macos-he-ios-she-zhi/index.html","28ef31fccae2f1cdd3261baa11ea6a1b"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","5d1c6115c458558095746c088af4fe69"],["/work-rules-mindmap/index.html","d327804aa347b73e4bf2eac02f86e429"],["/wu-han-chan-jia-shi-duo-jiu/index.html","27156e6576958121f7c670cf168ca051"],["/xzlfbzw/index.html","7ef531a5c9b4c875d2526e250d98b9bb"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","4941633c17220e4f7375733ec75468ec"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","76be127fe9b9029f68cec4f9819d1188"],["/yu-ming-zhuan-yi/index.html","0b8aaad6df06e49c37d124f61419a5d1"],["/zhetengb/index.html","8ff0886b5a5719971387a868ec8b05ad"],["/zzq/index.html","82e1f104b1ccabe1b84e14cee08d8d08"]];
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
