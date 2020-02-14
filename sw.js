/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","be0943b53351cd1f33226ee4fe350166"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2eac6768545091eb4415b656b69d69d2"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","873a3d8ac2a7d031f2533d9b210d745e"],["/PGP/index.html","c6792a1577e32959707fd653c91c0648"],["/about/index.html","70b995b7f28f90eef445b7a9915b0639"],["/applescript-jiao-ben-liang-ge-ban/index.html","8fb4e570612726fad2289e112f6f32f4"],["/archives/2014/07/index.html","599808a22ed75c00aebf8de6888b264d"],["/archives/2014/08/index.html","331758c3760d2bc6ee1da6fb91b53eea"],["/archives/2014/09/index.html","8d1d74fa2d22a7075e9036da7e2d612d"],["/archives/2014/10/index.html","e72ede66077ae4fa8e13434b038f27aa"],["/archives/2014/index.html","5cc37643bc171b2c585ad8819439f339"],["/archives/2014/page/2/index.html","6e4562bdd56319ca427752f1b6b1f73f"],["/archives/2015/01/index.html","14923c744487b3f07c3251f670d3f94a"],["/archives/2015/07/index.html","36bc37b42f3479a8bf78737526c876dd"],["/archives/2015/10/index.html","37d87a8dea5e5a772b480b0f688401e5"],["/archives/2015/12/index.html","9b674e30751f1179da136edbca2331c7"],["/archives/2015/index.html","0348c28e24de81b69ab85f5146d2803a"],["/archives/2016/04/index.html","ad7b449358bf1880929e6f65a23bdd98"],["/archives/2016/05/index.html","720e341e18ef4917f3b9c3bcee3e0ec4"],["/archives/2016/index.html","75d7ddb0eb276ff1597ad49f1beccc92"],["/archives/2017/01/index.html","c2361031221878a89ce744d2b949e970"],["/archives/2017/02/index.html","734cff6630715eb210d4810e448eeecc"],["/archives/2017/03/index.html","c81bef45094af74bdd0704bcb5049148"],["/archives/2017/05/index.html","a61a090386672dcde8aff0554a6deaec"],["/archives/2017/07/index.html","c0d62ff44e1c245cf380a13260239dbb"],["/archives/2017/08/index.html","b34d0e9d53ce5b9819b7bcc9b33dbf56"],["/archives/2017/10/index.html","22e0ff200cb59cb971aae2d9b60f4e37"],["/archives/2017/index.html","58864a05f0bb26a83db1a9fd7b8069c3"],["/archives/2017/page/2/index.html","febeb841ccebb480d13b7063dac1b884"],["/archives/2018/01/index.html","5234f4f9a6949fa0c5a075992aae69dd"],["/archives/2018/04/index.html","cfd520ab2113ccae79087b374e04f995"],["/archives/2018/05/index.html","40b73d3d0b2c09b4e38328be5c029eb4"],["/archives/2018/06/index.html","1954b738b62dc6a57eeba87447d9112c"],["/archives/2018/07/index.html","dd9365f5ee6cfc48a9d6fca72f174300"],["/archives/2018/08/index.html","30019ac3a5d662a60b6f40521f7785fe"],["/archives/2018/09/index.html","f6f26278da766e42cba0e9b65ed101b3"],["/archives/2018/10/index.html","fef3d300eb3e4f3172eeab25a1a78135"],["/archives/2018/11/index.html","1902fee8af7218f5cd096cb047fc8c88"],["/archives/2018/12/index.html","4ac3d24b4ea2b3fd7e4e997eb2f79b01"],["/archives/2018/index.html","a872c8268baaf27c6501c369559bdf0f"],["/archives/2018/page/2/index.html","d94b949238d00a626fa7f4b1f23d0a3c"],["/archives/2018/page/3/index.html","bd4a152f3c5b4aa19ff6c25633c7d468"],["/archives/2019/03/index.html","78d74a8d65e91302e1cec5561a4dd35b"],["/archives/2019/04/index.html","704be8f7f7d47f5f4fd9358a69d57f08"],["/archives/2019/05/index.html","d9d4263c655fa65f98332e847b517d09"],["/archives/2019/index.html","357f1685fac06913d2e1b3bce3a4292e"],["/archives/2020/02/index.html","8ff1afc0330dced80c1e51e8cf7f2cb5"],["/archives/2020/index.html","0dcc907d59b553409b0472b1cb1408c1"],["/archives/index.html","8285d13a9a44923bb13e7ef84e933adb"],["/archives/page/2/index.html","efcffb3ca16bef37e92cedeb45a90951"],["/archives/page/3/index.html","a2157cded65ddf33eb9269f639ad30e0"],["/archives/page/4/index.html","3614dac8ab9a130e4640a44aedeed294"],["/archives/page/5/index.html","9840dea3d2b4447c273ccadf912aaa20"],["/archives/page/6/index.html","cb45f992960bb6ec1d27dc9d7916c854"],["/archives/page/7/index.html","42cbea7bc80fcbed841a38b281d3791c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","435cc926d806c50ad1868bc637e9b710"],["/bao-guan-qin-zhan/index.html","8d8fd573fda9b92641cf89d9fb5a90f1"],["/bao-li-yu-qu-cai-qiang-jie/index.html","066f56f0237016be273eee72ad9f7c60"],["/bei-dai-li-ren-sang/index.html","b9b23a320f200812eb1de1c865a9fc9e"],["/books/index.html","146626d924f24cea8fa3cdb10878c706"],["/categories/Blog/index.html","ef6c1903338476c6b5fca64d4ea777c8"],["/categories/Blog/page/2/index.html","e7607b3ecf1b632b062899c48beaaa6c"],["/categories/Blog/page/3/index.html","30738969412b45bea9f77d212487d6f8"],["/categories/Blog/page/4/index.html","fc7d0dfddffe321fa6611bce678b8ff8"],["/categories/index.html","92751643d301e2faae2d5c03b75d0e18"],["/categories/法学/index.html","2433642d445d36018c17bf159a5645b1"],["/categories/法学/page/2/index.html","83acf5a5899cc4fddd603837b11db50a"],["/categories/法学/page/3/index.html","56b66fecb648f17882201be7b06c7045"],["/categories/精彩分享/index.html","c10226653b9a7077d2a012553dcfcd91"],["/cclisence/index.html","770a75aa534aeba83023f828f8e1ec48"],["/cetrain-issues-iv-for-company-law/index.html","a95b9620b78bc04453b9f853d08592e4"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","49fb3f74882ca102409c6bbb8909c409"],["/cs-hubei-2017/index.html","c9f422741bd4addb9cccd4f1ac9238ec"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","1856cca0de4a8afadc1bccc98b4b92d6"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","23dd497d7446fa9b4b17cbca0000a366"],["/due-pin-workflow/index.html","6810d998d98c5f4099cd307423a3487c"],["/duo-ci-zha-pian-shu-e/index.html","eb9064206bdaf98d86bdf25b20b73129"],["/expert/index.html","4f3f0de05c4ff422adcb25041c3d8259"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","098a9ec60c01e4e2745a4946a12a5ca6"],["/google3756ddc34336b7b9.html","05120b73172d40512ecc961242f0d3df"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","c9da5081390145f6f349a0d0c8ceb27b"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","d5c7a6067480f5c6ffa9fbc51a4ede9c"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","d5071a1deac470e1c532f9b9ba68dc2d"],["/hustlaw13/index.html","87537e9808c743a347a095f9c0ef8ca3"],["/hustlaw14/index.html","85fd5d18ec339cb39a4091911982715c"],["/hustlaw15/index.html","d1e254a123a3cd1567d5345d8fa54d64"],["/hustlaw16/index.html","ca895872f4346839e1caa1c4665d77e4"],["/icloud-terms/index.html","d4183063414ee00b1dac59f3c812baad"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","de149cc09625ded384e2f8595eb92e85"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","5d6f3a7829f7fa4f49455df6f081d4a4"],["/jdsnk/index.html","503ff5d41b8d4667f79dd87aad908cf7"],["/jian-qiao-fen-xi/index.html","98a058cc020a093ac8255c8711f6285e"],["/jianguoyun-keepass/index.html","176d602d4e391533f6a46a5f8da2f27b"],["/jin-qian-bu-neng-mai-shi-me/index.html","b7c5c30485ecbbf99da56e80062d6620"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","64ead0e28703694a71ce4f13129d866f"],["/latex-times-new-roman/index.html","d9cd99bd5ed61464af606bc72934abe4"],["/latex-yu-lun-wen-pai-ban/index.html","89d47a9ba9091663064d3c1e914c271e"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","ca7e7cc78143f1d0f7e5201daaac1f1b"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","44ff33f752ccd5916afaf9bdd9607a65"],["/luan-dan-20181116/index.html","838820644a7cb674923bacd36eff7553"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","5aa7501a346268d25e2cf0d43a789624"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","921fab478c533cf6ddf636ee6531f3a3"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","54a86cb0066c8235d0187281f74f536b"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","a233c918783e83aa244cfbd7573ae38f"],["/opoo-zhe-teng/index.html","2cb6a5e82137bb7a43e17118d2ae4e42"],["/others-00s/index.html","10c96f243067b7eb22bd58d4a20818ce"],["/page/2/index.html","f24ff4fed552388469ef9a8427fec6cd"],["/page/3/index.html","ee115eda32aea3465b2e880a040d1e00"],["/page/4/index.html","f13fa6bdb4f88158830e76ae89a0cb6f"],["/page/5/index.html","3318c20f1d878e0be71eab3926b12cda"],["/page/6/index.html","27ae59f8f11ff92a1af5e8a50a9e3b5e"],["/pan-gu-zhi-bai/index.html","fef64ecf6638d8f650c9a9217ba68669"],["/posner-homosexual/index.html","f030b171b50bc06b620cbf9551157a55"],["/qxpj/index.html","736f09b30353198f78fe7efc47d5a447"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","cb23063240a799390805cc571a835e90"],["/shuang-pin-vs-quan-pin/index.html","519676a45ad9e566584bc6eca8a5eaa3"],["/software-reverse-engineering/index.html","bc549d0ce48ce5318ae62512b74e24b1"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","1d47303a0b11540c983bbc0080fab997"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","a80a794de9052419cb3360f6e746e8a3"],["/sw-register.js","5aa94e5cc401b46315a4bd8d0f9a02a7"],["/tags/2017/index.html","80497624321b50496bd4ddfc0702aaec"],["/tags/APP/index.html","6e8848302a29e5f3208b0af2fbbc4063"],["/tags/Apple/index.html","7e66e308151e299424d92a5621c4b0f4"],["/tags/AppleScript/index.html","0c74a5901eff32579694cc48e6b76f59"],["/tags/Due/index.html","8e5768093017dbe7188a7165bc28e5e6"],["/tags/HUST/index.html","55d0ff87f8c71d8e0b67c6e8fa0423b2"],["/tags/Homebrew/index.html","c8f8e283a3a3a9aa5e5c3bd72161f02a"],["/tags/KeePass/index.html","6d35acaf9044cc52935b0745d7717c76"],["/tags/LaTeX/index.html","e118789eca0514a4e0902216c713a5ae"],["/tags/Namesilo/index.html","e1c220ab11680416474a1e261d21f4e4"],["/tags/OpooPress/index.html","1c4a277ff40d20bc22d0bc97d967c820"],["/tags/PDF/index.html","a36409c7686393ef22bf096572dbeb70"],["/tags/Posner/index.html","2392fdfa2b2610084b30579e8e77e129"],["/tags/Python/index.html","fee0e845d8a7066995bb0ae5db276f74"],["/tags/Rime/index.html","32ab46db18154b438234223137ed843a"],["/tags/Typecho/index.html","08cae7a52fe22f40ff76b9a7a94fc7b6"],["/tags/Workflow/index.html","486600349f881a481349dfd16334e8e1"],["/tags/cc协议/index.html","0eb3baeef1ada147cf4f38f8255affc5"],["/tags/iCloud/index.html","26ab3e274831db9c34ccc55671c3e01c"],["/tags/iOS/index.html","eec82cf84a0de07c005bbbe771da65c6"],["/tags/index-1.html","2acb9edbeb4e94bdb360dd2fc05a8025"],["/tags/index.html","2acb9edbeb4e94bdb360dd2fc05a8025"],["/tags/logo/index.html","174fa340fded04b8e87341a597542a24"],["/tags/macOS/index.html","63f049bfbf569e5972f5939c82ee25cf"],["/tags/vpsmate/index.html","4545286f3bcfaf2bcd63c863e87b54fa"],["/tags/乱弹/index.html","a649c47e68581f8b0e7e01e1aa001392"],["/tags/二倍工资/index.html","e3bbb99e69f645f7c1e53e224c7d3614"],["/tags/二维码/index.html","f6cf9e36fe2964b51b42c0215ec3f4f4"],["/tags/云盘/index.html","1c6168c335dbb08020cf76892b6e0301"],["/tags/交通事故/index.html","acd7dec650f57c05840bbf9f61f1080b"],["/tags/产假/index.html","951c5db4bb512ac79c6810e3d0cf9a71"],["/tags/人身损害赔偿/index.html","f613e8d512e93c2cba018e979fe448b3"],["/tags/代理权/index.html","ef228cf6da526559030db8111bd7df56"],["/tags/优先受偿权/index.html","ca8656922b04803cce381dd7ddc05bd8"],["/tags/作品/index.html","942f2bbca99c586f881439e77cf232aa"],["/tags/侵占罪/index.html","b425fd99a3a1ebf032710eab1170c86b"],["/tags/儿童权利/index.html","2b5076a91b4921b9cb1fe65ceeedb130"],["/tags/公司法/index.html","509f08375dbeb38557ecdd94b348a4dd"],["/tags/共同财产/index.html","9e7a7efa83b6d26b25da0a3f0ef5f1e6"],["/tags/刑法/index.html","80ed20c60033cddc15cc5b4dceaee21a"],["/tags/劳动关系/index.html","b8a8ecd1142b02a0a821704744ffffcb"],["/tags/劳动合同法/index.html","52a0dd68e18bbea98e0dc76cec70f389"],["/tags/劳动法/index.html","3706c644dde99b56d508db6f2361cabf"],["/tags/华中科技大学/index.html","9fcf9c235e1a7618de2680ceb7d19b16"],["/tags/华中科技大学法学院/index.html","c21358c31a8d3149766f6a74417e2dd1"],["/tags/危险犯/index.html","937902636f774f86d1e237dfc628fd85"],["/tags/反向工程/index.html","8ebd325532e368a18ff63aa27d2989f8"],["/tags/发行权/index.html","b24d02b86aa6dfd6ae95305dca925ee3"],["/tags/司法解释/index.html","d140de064ccc5da74807ddf5d7789f57"],["/tags/司法鉴定/index.html","d20364fa29687196d99a7db433b93965"],["/tags/合同主要义务/index.html","a851689a36c2c0d750de14e958961f58"],["/tags/合同法/index.html","5d712ce543b93d7e8ca76de3b6f8f160"],["/tags/合同附随义务/index.html","277b4fc296544c105dc1b2208cd104f3"],["/tags/合理使用/index.html","a82aa6cf97877da92155612eebeae3ad"],["/tags/坚果云/index.html","e8d1c9c99e28db06b1dc40e4983ddc21"],["/tags/域名/index.html","af085a126884cbe1549738df96822683"],["/tags/字体/index.html","67837f377ccc6a0832b914c8df0e4829"],["/tags/实害犯/index.html","c4dc2664041940cdcd31526d37dc7609"],["/tags/密码管理/index.html","1f5d9826bdf89ee82ba9fe5aca05693e"],["/tags/工资/index.html","fb8ec7e8804cbd7114a6b4dbdebff57e"],["/tags/待履行合同解除权/index.html","d30754fa9710401f36581bc856af4e42"],["/tags/律师收费/index.html","7399ff3525e8187625dabe646984204a"],["/tags/思想表达二分法/index.html","7f60d3fb83488fb6e49206edff9ac716"],["/tags/思维导图/index.html","2ced436f9bb3e2867f8e36dd09c5676d"],["/tags/成本收益/index.html","ef26f235f2a500eaa4bd4f0078cb87c7"],["/tags/成长/index.html","29ece9ae2a372617921892b0464fe375"],["/tags/技术措施/index.html","3d31ee2babc0d2af0a9879e427c335c3"],["/tags/抢劫罪/index.html","b6f3afb891ba0f681aacb7092e0e0ca9"],["/tags/抵销权/index.html","7d5c69362e7ed2f1541e3cfb40600731"],["/tags/排版/index.html","5cc06a1b1a88ca0f016b1e58818ccbd1"],["/tags/插件/index.html","51a4d2c91001e49319fdb3bcc6b13e1c"],["/tags/搬瓦工/index.html","e9a9225e58aea836b99a1497f426f255"],["/tags/故意伤害罪/index.html","d5e55f84ca37f20e342dc8a2bf6c2aa9"],["/tags/效率工具/index.html","c9860bb355d8682f402eee34f50094c0"],["/tags/教育/index.html","efc47f023801354567ecca51b9c15e45"],["/tags/无固定期限劳动合同/index.html","f51879e64cf873ae14658039d1fab5dc"],["/tags/最低工资/index.html","578212a734b204e96da1d5881d74234f"],["/tags/最高院/index.html","fd9933f9f85fd2b1f5a750b126a85339"],["/tags/武汉市/index.html","e69a8ef9674c0e2b1742fbc1e278bb6c"],["/tags/民事行为能力/index.html","4ac890944f3b00d431d46dfcf17764b4"],["/tags/民法/index.html","2856650547ec608511c3f606d614bf53"],["/tags/汉字/index.html","fee94a69dd69f853c1828a29a1e4120a"],["/tags/法学/index.html","7dac61681e69d8a7c2e538868109147c"],["/tags/法定许可/index.html","1bbd6e07125a76203d7fba3767292c9f"],["/tags/法律/index.html","2a4b1a1cfcef9333ba2f1d4e3415dc31"],["/tags/法律援助/index.html","2d962ed866d86435f9a254e0fb20dabe"],["/tags/法律法规/index.html","b2e009c51af3abcb4e4357a42045c4d9"],["/tags/法律经济学/index.html","bd29e85111025aacb401516a94de2a36"],["/tags/消费者/index.html","47029c2056443621b84bdaec69e54f7c"],["/tags/湖北省/index.html","e2f487b2951238fa3c821518af948b63"],["/tags/熟人社会/index.html","a8fc2072724a373eafd3600048cab26e"],["/tags/物权法/index.html","6f005f661a4a52a8c3ee8bcc68d79fdf"],["/tags/用工之日/index.html","dcdea4518d48b9ebbd9a80358ec22fd3"],["/tags/电影/index.html","559200f10dd15d17c1a6d40e01c3d51d"],["/tags/男女平等/index.html","61766486225d4112f71b87ea85ae02d7"],["/tags/知乎/index.html","20abd6092847f4ed0a49e363761ee102"],["/tags/知识产权/index.html","d11e5735f79c36c097ad01f456e34918"],["/tags/知识产权法/index.html","1d891e6257e6ca8edf128f06aacaffa6"],["/tags/破产法/index.html","f5b8fb650117ded5b18148ec185d481c"],["/tags/破产管理人/index.html","006c8ce69817806b152598346e89eb1f"],["/tags/社会责任/index.html","d97ba32fb891464dd5fe033b5cb806bc"],["/tags/社会问题/index.html","4b22e92f85c4574cea464fce031fd9f2"],["/tags/经济学/index.html","dd6e548695ace4048e3c8e4a5f97b119"],["/tags/结果犯/index.html","86274ee3638efd72c55aa9a4efc3e973"],["/tags/缺席判决/index.html","34eba58d7ee3d4bd43c102befcdb28ee"],["/tags/考研真题/index.html","14d763f1c00fcf92e490ba98bd3c45a7"],["/tags/著作权/index.html","de1ecaddc4be3a60fc364b52d69d4e1a"],["/tags/著作权法/index.html","3b8dffef367feea8d0afe332b22770b3"],["/tags/行为犯/index.html","8c4248d5021f01c6032f59aec5efc995"],["/tags/行政不作为/index.html","2a465ec87b3506ccc34a365b34f1d406"],["/tags/行政救济/index.html","941ff5f06d8ae82c59f2aad718c83076"],["/tags/行政法/index.html","b8f2719d154434d6a91c1bf1fb0bff98"],["/tags/装饰装修补偿/index.html","8f2af14705b1161360358ad289c0dbac"],["/tags/观后感/index.html","6395c760ec8be9b2462f0e67a02c620f"],["/tags/观念交付/index.html","95d8f367c86391cf6e1bf30640afa5df"],["/tags/计算机软件/index.html","13c830daafafc227b634462318dc7f83"],["/tags/认知科学/index.html","8d4dae703d630666aae90d78ec35240e"],["/tags/论文/index.html","cc6dc520d1a24eb2a5f9286f919e008c"],["/tags/诈骗罪/index.html","7ff0398e266d05fc88772131f6828ae9"],["/tags/读书笔记/index.html","a8e7f7a237156cfa92b2ece4007ebc76"],["/tags/赔偿标准/index.html","f8b2f0890b70e9a647af656e470794ba"],["/tags/输入法/index.html","13c3528e9418cbc2fd79b775760e4640"],["/tags/违约责任/index.html","2b7864b48257f70707c0982ef45ad4a0"],["/tags/违约金/index.html","aae59ec80f4cd24cb8cf49c51dd6a994"],["/tags/释明权/index.html","29116b0e523fda45d2bb1a0f805a3f4c"],["/tags/隐私/index.html","3fe61c93e26d77de74cbb27741fffa5e"],["/tai-er-gu-shang/index.html","9e1f649badca0e37d505482828ae56e7"],["/timeline/index.html","b50bdc6231ab492676a87f357066846b"],["/vcard-yu-er-wei-ma-ming-pian/index.html","4fb3a4d8adc361116a27408836303097"],["/webfont-yu-zhe-zuo-quan/index.html","4a9ec514e9be5558ee5444a27b8dd3c6"],["/wei-ji-hou-ban-quan/index.html","dbc6702693656e71c85320cbcc3c4d54"],["/weixianfan/index.html","9d161458981119ca1820aac9c18f2bda"],["/wo-de-macos-he-ios-she-zhi/index.html","33e023ec0803735108fc20a111b38b65"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","5af476c4febe604559faaaa3afbc675e"],["/work-rules-mindmap/index.html","b1d8f388fbfc0457fe79aab89b80864d"],["/wu-han-chan-jia-shi-duo-jiu/index.html","fa80670566bb4c3477be33eb5732be9c"],["/xzlfbzw/index.html","7fd94e3b68fefae3df75da81106a5f7c"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","dfe977b3b35b13182d4445b4666f5697"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","2ad7a88b3e89d511d3f869eb1692179b"],["/yu-ming-zhuan-yi/index.html","2e4db04eb24a6d535b94e087fdfb18c1"],["/zhetengb/index.html","dc2485ac97e8e0ce7ecf69b475eb6164"],["/zzq/index.html","591fdfbee277417a1e973de505d02c27"]];
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
