/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","c3293a1ed4732643a88d5448e69fb702"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","ff348c58ef4b511e352ed08fbaae75f1"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","bd7ea35b544615db34759b951c7578e4"],["/PGP/index.html","0b1549a5b8de49a9cb860966ad514ee0"],["/about/index.html","c723d1e815dc6c22fd7a409dfc4ad692"],["/applescript-jiao-ben-liang-ge-ban/index.html","d0217880e505c21913ba355927939186"],["/archives/2014/07/index.html","d8210f3d54f535f04f6a33d81bffeee2"],["/archives/2014/08/index.html","2d7780756c4923144c74246d44f88d75"],["/archives/2014/09/index.html","86d3a13ca01ba1be93a24a36f6345b01"],["/archives/2014/10/index.html","f701bb2d42fa2cd0789c243d54973a32"],["/archives/2014/index.html","8c8703ca69ddcc2615a99a43925e8cea"],["/archives/2014/page/2/index.html","7d163b31c260738ea413f813c5347e57"],["/archives/2015/01/index.html","88d71fd45659b5f1cbaf14ed597d1782"],["/archives/2015/07/index.html","bb2a278ce7540ffcdf0b9c8a3f9b6fa2"],["/archives/2015/10/index.html","8cf780f668790ec72ff950bbd02607d4"],["/archives/2015/12/index.html","f11411c030261730a1bbe7d9e14a0658"],["/archives/2015/index.html","86b6b61e6f03c19faf25fd3e90798093"],["/archives/2016/04/index.html","617ba2156f17476c3eb5fe51aa939685"],["/archives/2016/05/index.html","34ab30ddcf7f6729ecd35edaf540f44c"],["/archives/2016/index.html","c77a4f362ae90a130af0ae6596a28188"],["/archives/2017/01/index.html","d2b914b6c8f15431e44b9ccb3be5bfdc"],["/archives/2017/02/index.html","34078af08d41c23c9a47c28789f63e23"],["/archives/2017/03/index.html","3dbd039204c46f59bbc3b668c990f769"],["/archives/2017/05/index.html","77364b6288c11487cfc58ba8b7964a88"],["/archives/2017/07/index.html","2d17fb9d0c4b3d9953eb5d551c2035a2"],["/archives/2017/08/index.html","62b8a50a016db707e9046d23f460d79c"],["/archives/2017/10/index.html","92d537645dec2cad3c2cef2ff431bbe7"],["/archives/2017/index.html","09a0fbd1948de9f5406fe1f112097423"],["/archives/2017/page/2/index.html","a3cfb17067dfdeecfb1c0e8f87b375bb"],["/archives/2018/01/index.html","e454ace1e2c59e268a7bc55339235f32"],["/archives/2018/04/index.html","771b0d33af6d8cb751aab6fe7130d8f4"],["/archives/2018/05/index.html","8b40217d7be456017ebb9af294db095c"],["/archives/2018/06/index.html","cb95bb00378cc007abcf70c8005d2b22"],["/archives/2018/07/index.html","febf1684040f2e2c3f7f7f470af98295"],["/archives/2018/08/index.html","59f24b54496736632c00e49eedd36ebb"],["/archives/2018/09/index.html","8dece84304ef5f839314b33b79da48b6"],["/archives/2018/10/index.html","d16cb752e621d5732e18a09da3a62149"],["/archives/2018/11/index.html","4d0280509333065d48b0a34e8b5155f3"],["/archives/2018/12/index.html","39e8dfc866b84c63e74a38d6490fff88"],["/archives/2018/index.html","134e9746c6af6edb0a3643a6d1b00ae4"],["/archives/2018/page/2/index.html","adb5ad15f0a40378711c7b36203f7d57"],["/archives/2018/page/3/index.html","aff341f636d93340f65b141f962b80a0"],["/archives/2019/03/index.html","b415520131fffbf34e7463910d26c1da"],["/archives/2019/04/index.html","7b131a92f9215c437eeb7ba25b741f6a"],["/archives/2019/05/index.html","1ea99ad601a05cc223d51affe071960f"],["/archives/2019/index.html","35c9632e682f9df1089e9926edd395d8"],["/archives/2020/02/index.html","a6065aac067ea2b34a2751b75942695c"],["/archives/2020/index.html","b8d8ad358e9d75e18741f25bf60a9f89"],["/archives/index.html","f846c4a8f92db1eb1d84ecd452901bc3"],["/archives/page/2/index.html","9f62ebb9c9dbc956a406bf082a11daaf"],["/archives/page/3/index.html","6434208d9b8f21c8ae8096d39dd23f16"],["/archives/page/4/index.html","c450a243057ad5252e7bd8fd8fa06c84"],["/archives/page/5/index.html","c9520401fb9734341f831f1d7025b028"],["/archives/page/6/index.html","74a9770ad5d22fad00d5c03d7ca41280"],["/archives/page/7/index.html","682dcd9026ecea063c5b0d3de6724886"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","87f630d7c9d010dcce4e655b3e9ea758"],["/bao-guan-qin-zhan/index.html","15ad74e0fdd0f949249b346a7b841e4d"],["/bao-li-yu-qu-cai-qiang-jie/index.html","f29cb2a0205fb117a7515c14709a6ee7"],["/bei-dai-li-ren-sang/index.html","2a892011586b139250cb9e22bce2c571"],["/books/index.html","376d9be40f0eae7a65151e07925ee8ee"],["/categories/Blog/index.html","312ee85c8a5a9843fced20feca4ad14a"],["/categories/Blog/page/2/index.html","d71b3d03f933e105b45ff7e77c41d086"],["/categories/Blog/page/3/index.html","2557f3668cf83f9585c50ca162763e05"],["/categories/Blog/page/4/index.html","68dcc53f7d8364444fb99ea226661b84"],["/categories/index.html","d2f3cc46fa3831bb9e75cfaecda42d81"],["/categories/法学/index.html","4f0c1fe84b086cf631b821e707cd1244"],["/categories/法学/page/2/index.html","cf3dff33aa0c7fe5d5c2367d8de27ea0"],["/categories/法学/page/3/index.html","2cb8679f1e3c685c9ab034e29f4dc57c"],["/categories/精彩分享/index.html","6a101f5f28899f709beead704a638645"],["/cclisence/index.html","9ca29aa9efac492126492d753a8ca8ba"],["/cetrain-issues-iv-for-company-law/index.html","7cc110f8e8fabd9bbecaf8beba77b4e8"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","494a3a3e532bf7bb73771c6373fb69a9"],["/cs-hubei-2017/index.html","cfab7ec99eb703556055e09c2b44b669"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","552d15d6ddedc09c340ac3d25268a04e"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","632adc4961cc87cfafe9d6fbd033c223"],["/due-pin-workflow/index.html","f3e38c60a0d68ea211644de357542c43"],["/duo-ci-zha-pian-shu-e/index.html","1680fdeedca9151f371c7dd6b9efa0ce"],["/expert/index.html","21264aef4dc4181b185bf1e1834d1b06"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","458139a74780df8b3c91cbc303e9c190"],["/google3756ddc34336b7b9.html","bdeff45111912994ff931ae3b4a91a0a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","92f5fd62c35e9ef93ab2aedbd12382fb"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","c7f5f88bce3010bde134ed56a712c074"],["/hustlaw13/index.html","3da9f8d03e6f02eba79d01a41f0dc783"],["/hustlaw14/index.html","0e276d9fe912132e643f1ea11642f4e4"],["/hustlaw15/index.html","385793eb08bc4c396e75d3ea86eeccba"],["/hustlaw16/index.html","667227c0d1887e726fbc81bdee2f5d4b"],["/icloud-terms/index.html","6026b80b0323c3c06894cce7f1fd5045"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","08dc77397c1f5338ebe287ff25a983e8"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","d5a31e32884a3bf539ad80b2879206fc"],["/jdsnk/index.html","8a823215c7affe63b3d2379c3b14719b"],["/jian-qiao-fen-xi/index.html","e13c6a103436f32dd834bbea59fb4cb9"],["/jianguoyun-keepass/index.html","59e62604718940633e8902a8d9b6991c"],["/jin-qian-bu-neng-mai-shi-me/index.html","5228e58061b0fcaa0dd8f562626a9901"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","2fb79c2e9230f1aefb5499f99fe3ef10"],["/latex-times-new-roman/index.html","bdfebc9554e53689953d5b1b26a239fb"],["/latex-yu-lun-wen-pai-ban/index.html","9a96231d566e1e4ea1ccc29ad4c14f41"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","c1c12b33968dd07a2f6bb8154d235d22"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","c9d3c1e9940abeb8e0bb488128e2c92a"],["/luan-dan-20181116/index.html","4c3ab63eeace9c2255c2391597d1d908"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","8def1cafd680839fb7de7049712dd55c"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","78055f2e48eb4e055ada63ea48a7cba5"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","098d672b359420b33542496f579a8c33"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","47c3fdf2a1ea9e585d9dd55eb62a8a48"],["/opoo-zhe-teng/index.html","01f7358c8fed9bcd5325854e5dd77c15"],["/others-00s/index.html","f706d16b87e7c4f9cd7455de116afb1b"],["/page/2/index.html","fcc30fb866a952259f4e0b165c3592aa"],["/page/3/index.html","c3d3b634b87dcc9fa92519e7c1430670"],["/page/4/index.html","8bded4dcd4b0466355a6fd4591039ca2"],["/page/5/index.html","6b09588e4e799074ed4ab315d143b385"],["/page/6/index.html","90990a85ab50b60cde09dd57dcd33605"],["/pan-gu-zhi-bai/index.html","a9257c58841e5c6ebccebb1c41b76731"],["/posner-homosexual/index.html","29607aa12dd10e6f99807ce0769ba33d"],["/qxpj/index.html","fe524c87f3dac57334073d71aee90b53"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","f8a988ada2af6e2833e942b398918252"],["/shuang-pin-vs-quan-pin/index.html","74289ac04b4e2f473b5773f14768006e"],["/software-reverse-engineering/index.html","8d4a2791f386604726bce586e6a2a445"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","96a4dcdcfb29a86fe5ff466f0e1eec54"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","ca424879824ad31c5e37f24f9a9b9157"],["/sw-register.js","aa3ddeb5d564939b9bd40199aeb442c6"],["/tags/2017/index.html","6f7c4facb5e238ec702b427a283a9851"],["/tags/APP/index.html","5acfa4461d4bce9aa7051134201e7984"],["/tags/Apple/index.html","ea413e4ff770f9c725d39494a7831575"],["/tags/AppleScript/index.html","a9f458afcfb9cd06a48478e54bb866a1"],["/tags/Due/index.html","e289ae7078b47bc4a8a41d2b9686a32c"],["/tags/HUST/index.html","af2e2f923c4e3c671af3f4159a74009e"],["/tags/Homebrew/index.html","ba0d6b80244e6328b822daab477026c1"],["/tags/KeePass/index.html","017c256b449839bd85989fb79b2436f0"],["/tags/LaTeX/index.html","502535441cc3adc8061cb4e803636b56"],["/tags/Namesilo/index.html","7f03f3f50e68420a590a3f773a98d95c"],["/tags/OpooPress/index.html","64dd7740fb90dc744ce32b00a7189288"],["/tags/PDF/index.html","ea3810add26b0b65f72e454ea9280bd9"],["/tags/Posner/index.html","86d4dcc1c44e19bd1efbe31531afdd3b"],["/tags/Python/index.html","d435a28ee2cd66cd5f35279b7ce5a95b"],["/tags/Rime/index.html","f40db85a51c6c9b5fc97878d548efcee"],["/tags/Typecho/index.html","353f5a1b383838121c7d6d4df250d85a"],["/tags/Workflow/index.html","aa975237ef6894cf04b6d5174537af36"],["/tags/cc协议/index.html","a63ad454d1f9c8ff44131e414489c207"],["/tags/iCloud/index.html","3fa64d62ee38de77f8bd78f65d50e99d"],["/tags/iOS/index.html","2c7b337412ded531419894a245457650"],["/tags/index-1.html","a299c12642287dfb5dbc88c724cb5260"],["/tags/index.html","a299c12642287dfb5dbc88c724cb5260"],["/tags/logo/index.html","f8268a1a897502a19f45b8ea2d7412d7"],["/tags/macOS/index.html","d392bbd8d32f68898990e687a627fa25"],["/tags/vpsmate/index.html","3d65fa446545f98ea7c0831eb75129bd"],["/tags/乱弹/index.html","139cc0c2d9b9816eb1521335588546fd"],["/tags/二倍工资/index.html","6cd3b045dba2f87b33124cb498b436fc"],["/tags/二维码/index.html","15125f67d396ff98f56e7b71e9813f37"],["/tags/云盘/index.html","75a0bce00afdb8e7608ed20c24090559"],["/tags/交通事故/index.html","0ef9c2146ac277055e29530801c1b1ff"],["/tags/产假/index.html","9887b8150d3950ef0c441ff3ca51b899"],["/tags/人身损害赔偿/index.html","e2908ea0194e0f96dcd9e95dacaf47c4"],["/tags/代理权/index.html","68a4804bdbd7d6659028f1a307820fa1"],["/tags/优先受偿权/index.html","aa15a063ea4ca9d9dce441e1d6c4dc31"],["/tags/作品/index.html","5cb0dd5d6ff67ab928c4fc0cd5044b5a"],["/tags/侵占罪/index.html","f3a5f0b1de7159ed6ff130dfc1202f6d"],["/tags/儿童权利/index.html","f82e36b04f35ea422a9b06dc1f7a0a4d"],["/tags/公司法/index.html","5fed33617f54b14ce4dd61474a69886f"],["/tags/共同财产/index.html","8f1d0b2d9648e88f6bf8eba12bbcfd2a"],["/tags/刑法/index.html","48fca1b7f212c8705d9d0a3b734f15a8"],["/tags/劳动关系/index.html","7406a2256d04f4bd30f3e56435374b65"],["/tags/劳动合同法/index.html","6bfa54c117034ff9a0f4a6abd9465012"],["/tags/劳动法/index.html","0ba76857b6a05651eff22933bb4b0a90"],["/tags/华中科技大学/index.html","7ba93ea7a2b22d9686e762caab5d7772"],["/tags/华中科技大学法学院/index.html","5defb7f173ad703bd70ffdda82b6577d"],["/tags/危险犯/index.html","52beba2da85d25f6ee7bdfbe57fe7d94"],["/tags/反向工程/index.html","e6ac907102a01d639ddf18b6577f103d"],["/tags/发行权/index.html","8768861dd4d58a52bffe25b39b75ee03"],["/tags/司法解释/index.html","673d18d9f55ba5b640804d217d060d3c"],["/tags/司法鉴定/index.html","2781eaaddae88aa962798c0a0fc46cdd"],["/tags/合同主要义务/index.html","6bef933e6bf14c5fe7267e0293c9f0e4"],["/tags/合同法/index.html","379813c1e1a5bbc8891225c8c5d821f6"],["/tags/合同附随义务/index.html","8165813337a8f4fbefa34faffcce34aa"],["/tags/合理使用/index.html","dd464ebdc7acd95478abf2ada85309be"],["/tags/坚果云/index.html","394120f451ee6ea7ce7e1c09f5c065c7"],["/tags/域名/index.html","a7c2c5f6ba1162e69f3933e4b708eea0"],["/tags/字体/index.html","22dbf9b75d5f6ab5a175f6442dbb3adb"],["/tags/实害犯/index.html","d0d4884ce97a370910c824fa86bdd838"],["/tags/密码管理/index.html","b96e89621afe469fb8b1b259a61390e9"],["/tags/工资/index.html","f796e3589bee0302fc82dcf6fe8488ba"],["/tags/待履行合同解除权/index.html","9cad486201b9ee7f25b6166f159dad64"],["/tags/律师收费/index.html","c6c830f584b11e1165cc541cd0c8ab9f"],["/tags/思想表达二分法/index.html","ec31d406217b0baca572c6dd7a724b20"],["/tags/思维导图/index.html","eba01662c256a87c49bbc0323052ff2a"],["/tags/成本收益/index.html","c6f4a427dfdcc63473fff4c6e4bcfd5a"],["/tags/成长/index.html","47bf642eba3ae576ff95d9390344de4f"],["/tags/技术措施/index.html","9426678f57ae79152186bc090699f457"],["/tags/抢劫罪/index.html","431bf46e0167d8e590f142c92df89911"],["/tags/抵销权/index.html","bfeda2a5b08494bab7b647cfac0fa7dc"],["/tags/排版/index.html","1c309c0b316a00b28b18d69e778c7ea4"],["/tags/插件/index.html","527969c3f4517c51febf428f6b369fae"],["/tags/搬瓦工/index.html","8fbb5ca9b9973edb2824d529e8f13aeb"],["/tags/故意伤害罪/index.html","b24c36cf6c5237ab34e03afca488ec16"],["/tags/效率工具/index.html","31ed1b70dcbe71edd85a16dfffdb5e52"],["/tags/教育/index.html","9e41558bc854ba00c92b98cdc7b591aa"],["/tags/无固定期限劳动合同/index.html","a808a44c9dd29430d808d2659aa18136"],["/tags/最低工资/index.html","6caad833182c9daeedf74e33197c346f"],["/tags/最高院/index.html","b1ad6580bacb28ef39979f2441c3cdff"],["/tags/武汉市/index.html","64cf80788294c553e6a5936e3d9aa9f8"],["/tags/民事行为能力/index.html","3217e1240e7c9d483c8b43ddeb0eef02"],["/tags/民法/index.html","7107e1c129478ea3f8310cb42304eadf"],["/tags/汉字/index.html","eb037f5ea931706c1eee4553a80dd2e3"],["/tags/法学/index.html","8df02d4aae96b78ee0ca582d9c2f5cbe"],["/tags/法定许可/index.html","1700666f922dbad0045d76d90aabe7cc"],["/tags/法律/index.html","27887b303c4c963ba48ed6f41407a1f6"],["/tags/法律援助/index.html","960d75b35f0de69652f4fb6396955eff"],["/tags/法律经济学/index.html","f1aadd4d28e37332763e9c7575312a0c"],["/tags/消费者/index.html","e3d71a930e751a57a6d290437eba1a6a"],["/tags/湖北省/index.html","99f8be56dbe7bc0c9c0c459ed8444f62"],["/tags/熟人社会/index.html","0e4feb2edbb0bd58d63de28b851a9e0a"],["/tags/物权法/index.html","1d92612fb1a11fe34c82ca0e6b3b3e94"],["/tags/用工之日/index.html","71116a306e85af93da99192a30b1f60f"],["/tags/电影/index.html","e3af9582955696163cbb99c1658a0fd7"],["/tags/男女平等/index.html","922d96e7d89da673de22fc8e554d9438"],["/tags/知乎/index.html","cb00d468ae6f79cd35f1c106296d0723"],["/tags/知识产权/index.html","04c16df048f65978716073d2ed72e484"],["/tags/知识产权法/index.html","a34e6f3ac55305b25fdd20a89e651d62"],["/tags/破产法/index.html","379faf38b2f3c8acb42ce99af11993e8"],["/tags/破产管理人/index.html","239e61be604df4a1ffe11bb710f7ac1c"],["/tags/社会责任/index.html","7c0b4bce6bd1081e2a6d9305aeda8654"],["/tags/社会问题/index.html","fe113b6c447e57be858cde8e6a858b36"],["/tags/经济学/index.html","9f5136659abb721cb3e0afe05854e785"],["/tags/结果犯/index.html","6e8aea78e50c069edf96215e7ca88f77"],["/tags/缺席判决/index.html","72f75883d4350544ba6abc89bd48bf97"],["/tags/考研真题/index.html","70787cdbcb2302e22a38bfdeb966ee8c"],["/tags/著作权/index.html","6fbecdebabbf2bc9f24a4138d83ddcaf"],["/tags/著作权法/index.html","8ca0b9a10bdb9a6cf66cef94a9269f15"],["/tags/行为犯/index.html","65628ed177e1228eeacdfd0e524dc899"],["/tags/行政不作为/index.html","d49b6cdc25310cf4a233bee32906fe99"],["/tags/行政救济/index.html","b96d114f649e5a8322182c6de8ddfa5d"],["/tags/行政法/index.html","85e5fc268d5f744c59df412a233ed1f0"],["/tags/装饰装修补偿/index.html","5ca0c757d82bf52668e76aa597550ab8"],["/tags/观后感/index.html","5a68139fc12ab87d3fbecd8cef7be6ab"],["/tags/观念交付/index.html","cc80279c6c516a32371af70dc0b48e37"],["/tags/计算机软件/index.html","4973063874ade338623dfab0bd719e9e"],["/tags/认知科学/index.html","6bd449a5db6429cbf57e8c0e4661cc4a"],["/tags/论文/index.html","418b60b6267e80f47dc6b30a564e988b"],["/tags/诈骗罪/index.html","2a59e22a189a0f3903bd0ae05a23ecfd"],["/tags/读书笔记/index.html","2a9a02d5c7c9958ae241aa9005e8db25"],["/tags/赔偿标准/index.html","9803db173258ecf1aeca3f9212626dcf"],["/tags/输入法/index.html","2099b1a60c97caa6ada72e227cca784b"],["/tags/违约责任/index.html","8f911d7c3f1d2f1270c50e167c1071cf"],["/tags/违约金/index.html","d15a92de13847ec85992cd090dd16320"],["/tags/释明权/index.html","a3d7960d55dff1a1e17426a8e46eca3c"],["/tags/隐私/index.html","230f459a713064671e088e0c675022a4"],["/tai-er-gu-shang/index.html","cebbf3c804bc69547d1f63cbcbd062c4"],["/timeline/index.html","45b4f5efaff2eab2ef90c995cf0c5699"],["/vcard-yu-er-wei-ma-ming-pian/index.html","a56cb23334d660f2e0a1318d8b6e1e5a"],["/webfont-yu-zhe-zuo-quan/index.html","10544eacb90d945091ccfb181c7858b7"],["/wei-ji-hou-ban-quan/index.html","36df537e3d88c4333f9e7d0c09aac06a"],["/weixianfan/index.html","787a149e67a80e8a2cd0ad321c6ca3f2"],["/wo-de-macos-he-ios-she-zhi/index.html","28c458b8557d80692e994a5f011ae57e"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","45b986f9e0a551345771aa2d03aa3ccc"],["/work-rules-mindmap/index.html","40766535b37033a7cc34f05faea34c95"],["/wu-han-chan-jia-shi-duo-jiu/index.html","eed7c921cb3c0fc1b496d31a66f32954"],["/xzlfbzw/index.html","33ddb45e1e4c4170056c6fd18d755817"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","8a042d3a283ed917d5738dd51c95f011"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","ee4098b6a95b80329203c172148f1b69"],["/yu-ming-zhuan-yi/index.html","2c8c8c54a0714d4e383ad9457c0fd295"],["/zhetengb/index.html","a9b70ce2843958e7d82fa6af3ebdcb6f"],["/zzq/index.html","ea27472c9a0c18e5eac7c3a8a9d284cd"]];
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
