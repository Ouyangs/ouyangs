/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","e86209e42429d9f512d74fd77b91d3e3"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","3e65925b6c9067a3bbdc4f0ff90386f1"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","61fe8899567ddcb8a04b8ec4b287ef12"],["/PGP/index.html","4b955d3f6563873419e23ecd9f3e4fbf"],["/about/index.html","caf99902b72512b7aac3ea0bedcacc17"],["/applescript-jiao-ben-liang-ge-ban/index.html","479a9974b5483f35b8196828060f15e8"],["/archives/2014/07/index.html","e423002563c7adbe2fdc59f06639f353"],["/archives/2014/08/index.html","d430004ba048a843cf9ed56bdb3bd93b"],["/archives/2014/09/index.html","79b6fe1528ddb274da7f613435d47a4f"],["/archives/2014/10/index.html","a8a5696fb7c83c08801c3edfbea8b8f7"],["/archives/2014/index.html","6c93d470b0e859633ffd1a90d6f25f54"],["/archives/2014/page/2/index.html","2802eaadd96ec0b56a7fecd215ee7c70"],["/archives/2015/01/index.html","7928b34adf78448a0e1be8a0370c6261"],["/archives/2015/07/index.html","da59738eb23b5e754388cce9fc37b644"],["/archives/2015/10/index.html","2784f1da676b4ca50f6563afc4b96905"],["/archives/2015/12/index.html","cf367180f05a7801e489d450fa073798"],["/archives/2015/index.html","c6713a4105d6bb2028dac26141c3604c"],["/archives/2016/04/index.html","7c8641192093ee1005d78d05619728ba"],["/archives/2016/05/index.html","a030227e9a341a13f11290104291f8b0"],["/archives/2016/index.html","212f736849e51a7b240f20ae721ae46f"],["/archives/2017/01/index.html","a04c18a6cce5a1c910f74740214bca9d"],["/archives/2017/02/index.html","becda924322306121902ef6a9f4498f9"],["/archives/2017/03/index.html","bf0e9a6f620d76273d41b46a4976183f"],["/archives/2017/05/index.html","a8a0bda296a63d8eacd83cde1bd51e1c"],["/archives/2017/07/index.html","a3c8e31945b14cf29cfa96ccced25c3f"],["/archives/2017/08/index.html","4aceccbbb808048f791ee63903535a38"],["/archives/2017/10/index.html","5dd9151be22ae43dd11462a38891fcea"],["/archives/2017/index.html","d522890f85d431996f8a294ea19c280a"],["/archives/2017/page/2/index.html","fe4b576a550bf4f0da54814f267b6626"],["/archives/2018/01/index.html","296a085ca8796b72f04b97d03cf91105"],["/archives/2018/04/index.html","51313a5d9d8da0368aa7617d97406b55"],["/archives/2018/05/index.html","56474b6d9e160daf8f1e03ec5d6e36b9"],["/archives/2018/06/index.html","6ddd224d78c354dd04196302d1cd8511"],["/archives/2018/07/index.html","37aa4d984ddbc43ad91cb9727fb03775"],["/archives/2018/08/index.html","f494141d16998a00cb84d6037e2f5c4c"],["/archives/2018/09/index.html","a176a32548171fbf8073df128307e93f"],["/archives/2018/10/index.html","2c163c09264a9ba1ce4f4508308a4fc2"],["/archives/2018/11/index.html","11947e15fc187cecf4c7ca7869df478d"],["/archives/2018/12/index.html","8cc859af61acd7f731e11c4264fbddc6"],["/archives/2018/index.html","760fe0d921ff87a21b4726a462cda255"],["/archives/2018/page/2/index.html","e21681f7784aa126dd68644977f2bc4c"],["/archives/2018/page/3/index.html","ef20b0ebca40df8ffb12308e076db969"],["/archives/2019/03/index.html","f5f0012e2114a918a909154d6be2864f"],["/archives/2019/04/index.html","f4df91db03d131f9f81004fb13989907"],["/archives/2019/05/index.html","f4be2c34c925e6919d59664648a7a4b3"],["/archives/2019/index.html","eb69b37964e7f637444a96ff67d425be"],["/archives/2020/02/index.html","44837eacb05c722c53e815d4bd5844ba"],["/archives/2020/index.html","fd031477a4ee66c9e72087fd7d9031b1"],["/archives/index.html","43f8bf7451455e544ba0b3672a9d850b"],["/archives/page/2/index.html","9988ae86d44d05ee2c81111a9e2f9ef9"],["/archives/page/3/index.html","31b12cee2114f58dec06ca591d301346"],["/archives/page/4/index.html","58c3587e41a1244ccd707aee892951da"],["/archives/page/5/index.html","efdc02edb7649b7318d35251b38d305b"],["/archives/page/6/index.html","e7a4cd59ad206a1c2616deeabd823599"],["/archives/page/7/index.html","a1a9810d8a817ef5e07abac3cb1749a0"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","35dde8e00f0e789cbe33c2307a1ababd"],["/bao-guan-qin-zhan/index.html","42b7e9b6303dcd81e7239f556a1a781d"],["/bao-li-yu-qu-cai-qiang-jie/index.html","5d180064e18c25df963209da41a0afd0"],["/bei-dai-li-ren-sang/index.html","592305e5a2b0c7a6ba0bba9903a293f9"],["/books/index.html","5cf09f8e2b2cbfcc399e7ad1f2d59939"],["/categories/Blog/index.html","06a43c534a1b5b98df8b941c4ca43bc3"],["/categories/Blog/page/2/index.html","3d67c7a82fc32b9bc4b76ab4fc840e51"],["/categories/Blog/page/3/index.html","9eecaea9f154179ca3c9a4015123ddc7"],["/categories/Blog/page/4/index.html","37454d6872addaa7d736144a50bea1e2"],["/categories/index.html","a882cb2f90594ec88847a9e72f74045a"],["/categories/法学/index.html","7238ab7e91ec3cab7a6939ed72ba9a44"],["/categories/法学/page/2/index.html","c1acbef2d8b45d8131703a0ed96911e4"],["/categories/法学/page/3/index.html","704f6b1eff3a2ffd0706c8e4ebadb05d"],["/categories/精彩分享/index.html","2adeb7ff4364f8cdcef650bc0c89d79a"],["/cclisence/index.html","fbc0d26f91f0471ea13c643f50137144"],["/cetrain-issues-iv-for-company-law/index.html","2761eb2e37ccc2f880796d233d4ea065"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","97a7a7730ed38b8882eb3306fb16eb49"],["/cs-hubei-2017/index.html","cb34ba6bc7114c648044dc9543b0e2de"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","682471bdd1f9bb78fdcd557d004d7fbe"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","63dbcef7c5a104edd41c5a534cbd0102"],["/due-pin-workflow/index.html","eb4c3dd77c7b4bf4a502a91031230297"],["/duo-ci-zha-pian-shu-e/index.html","b655665c37b4056047682e699db9687d"],["/expert/index.html","bccb46d38beea96ab32cb2315dfcec6f"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","dbef25cbbd5fc238d2f6c66f6892981b"],["/google3756ddc34336b7b9.html","f465918c5a6b4a8bcec002a3c9739237"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","5898d90963d68ae30cf0633d91055b34"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","9171dfdaa6fab13612c203556253145d"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","6c22a30ec74553e07252d08a88f872ff"],["/hustlaw13/index.html","21a7ff2c1d190415130a7bfc2cbdc4ff"],["/hustlaw14/index.html","ba4a8e8ae9a04f0f03f2a346663257c1"],["/hustlaw15/index.html","7ebe7bd9392859eed4b36e19442d19c4"],["/hustlaw16/index.html","f0cb1cb41fe2f5401ae6260c5e0912a8"],["/icloud-terms/index.html","70ba9b193d1afb0fc7728e32fe26d479"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","12743babaadc82e6ea5d55af32739102"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","80c3a4c00a4c7f3ff6fc682222cefb57"],["/jdsnk/index.html","bf82aeeb2da50a1d877f8e2dd1bf3309"],["/jian-qiao-fen-xi/index.html","c365d5ede96653268aef33aaebda20c0"],["/jianguoyun-keepass/index.html","9381d262bb37d539a6925f918a71f2f9"],["/jin-qian-bu-neng-mai-shi-me/index.html","9e92bb7f68b5a1064bfb306f1369aa09"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","0b118378cf4fbf3bdcbac84ed77d4453"],["/latex-times-new-roman/index.html","66cc9e38459bb5c21dd6810a3f41071e"],["/latex-yu-lun-wen-pai-ban/index.html","ba558ed6d490a9bcedd581b05731eddb"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","ba14d245b25efba03647f9237b2dc688"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","d23642cf8c33f7ccad8c036864c7956f"],["/luan-dan-20181116/index.html","45f215a74bdb9f607ed303772b0d0489"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","bab9f68e2f6336d030acd2fc6fa09544"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","5bd74f4d56fa234123379c86bf33a78a"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","3ab984d1fbeca0094913cccb04c072ef"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","cebc8c2311c5d7a6c75a46b7927b2379"],["/opoo-zhe-teng/index.html","b9a0992429a012c36d4516b23a88e307"],["/others-00s/index.html","ce6b3779856a8a888eb9edc23a6286f5"],["/page/2/index.html","80becb11431b0eaf5167a1abe4b807f9"],["/page/3/index.html","228047870cda9d8ec766c5c54115817e"],["/page/4/index.html","a151028f1f3c07155171bd6be4a7f919"],["/page/5/index.html","d18dd1ea893a4fa6d3f7864570cc63bf"],["/page/6/index.html","bca270be030afdc23e07ca63ce17564d"],["/pan-gu-zhi-bai/index.html","a72dc2e285768775cfac3630515c918b"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","d7851f3f9299ada64062c78e070928d4"],["/posner-homosexual/index.html","53bfd9ef9b038de68a2191921b468490"],["/qxpj/index.html","a438e762f6b08d3435933c80d4eddd79"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","96a269452e419acde1a5d498f993a153"],["/shuang-pin-vs-quan-pin/index.html","de5fdc0316ff5e5123083fbf7f9d556e"],["/software-reverse-engineering/index.html","716d298af5cc6e22f128290f0648fcbc"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","82394aeaec8bb18f7f8d8824b62e687a"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","20c43435dee5ab65f74f29e318e09975"],["/sw-register.js","b728fabfa622950e02f46b3c5cea8fb0"],["/tags/2017/index.html","09d35d3a1775263c4294672d7e5aafee"],["/tags/APP/index.html","c73337a0eefdfc8bee4c0cfee80960e8"],["/tags/Apple/index.html","4041eb9d9eee14c64d8838adf83ec86e"],["/tags/AppleScript/index.html","8e57f9c0f6babd91790c7c4410e0cd2b"],["/tags/Due/index.html","b5258eca3c0b33f4193a2f525f98131c"],["/tags/HUST/index.html","436f6dbb939f25f661d49b765d1e3aba"],["/tags/Homebrew/index.html","3f521558d4fee1c45826e049ad19beba"],["/tags/KeePass/index.html","716966e885e7505f9bee0739dba9758b"],["/tags/LaTeX/index.html","902e1225859cb997657bf2b40a188174"],["/tags/Namesilo/index.html","d00abc26a471e0654287df25b99584aa"],["/tags/OpooPress/index.html","5cd6299c8dc9e734d91866aeacf38bff"],["/tags/PDF/index.html","418cc167e5839b394bbe631f649ebb2e"],["/tags/Posner/index.html","fd95e3015e98fc733b382bef787e6ed0"],["/tags/Python/index.html","3bc54e1bf3cc86b083d77b085d5255c8"],["/tags/Rime/index.html","6ec7d6cb2955446ad8821429d006da62"],["/tags/Tampermonkey/index.html","569ec4c785f05052e9e284cd20f58940"],["/tags/Typecho/index.html","5611e8d89c4dbb78da374ea4786d6646"],["/tags/Workflow/index.html","f8d8a29dbdfae46724d32bef685542d0"],["/tags/cc协议/index.html","2e055d4480f55959eb6ad1d530307bb0"],["/tags/iCloud/index.html","6a24c0604c5e923a73882dc7e2aa72ba"],["/tags/iOS/index.html","7f52bb9b591ce5cf6aff2a5de6e3ab92"],["/tags/index-1.html","2ca7a41abd17c5e4f233e0f51be2dd55"],["/tags/index.html","2ca7a41abd17c5e4f233e0f51be2dd55"],["/tags/logo/index.html","5b10b519e3fa7a342488c1c3d5dd5a76"],["/tags/macOS/index.html","b8293689d233ad8c4d52ef9d211eb490"],["/tags/vpsmate/index.html","81109263acc1eedbaf60d476f6424e36"],["/tags/乱弹/index.html","10c4c203c957e3ec20906e7942b9dcc3"],["/tags/二倍工资/index.html","aa740a5c799da1331798b49a17787be6"],["/tags/二维码/index.html","58777cf9f15a5f2e3b12915ab6a1122e"],["/tags/云盘/index.html","f8a4f8b66e3c3f8ec791ec8740caaa4c"],["/tags/交通事故/index.html","589e2cdf1917ee184e6a7bade708a1f5"],["/tags/产假/index.html","eb66bbb51ffcadde87d03c7dc039810e"],["/tags/人身损害赔偿/index.html","db60efd571c4ad68ae5d286d7ea45bc4"],["/tags/代理权/index.html","4110cff2762301e2e733bf5ed55f2f2d"],["/tags/优先受偿权/index.html","97684eb8b658dfb1682de2f5b53b8588"],["/tags/作品/index.html","fb562caba74c54020b8ab87a0b8cb2e9"],["/tags/侵占罪/index.html","88145ee859703f952e6d71824c66d5df"],["/tags/儿童权利/index.html","66cb7710225b8b4ac6b7d9ab46ab9f2c"],["/tags/公司法/index.html","cdb76775fa3ebb86cbe43cb7de99b940"],["/tags/共同财产/index.html","d3096d21b74a72387b98aa9074bfa19e"],["/tags/刑法/index.html","7103499a4cf8a4135e2640cf0a309059"],["/tags/劳动关系/index.html","954980a8a343d12fbe7ba7396099b900"],["/tags/劳动合同法/index.html","d116c71184fa728ccaadf6d024226135"],["/tags/劳动法/index.html","6c512e35aece3ddd5bd7c4eb9e9f0729"],["/tags/华中科技大学/index.html","8432707d3953c8a1c54cae2afe73d573"],["/tags/华中科技大学法学院/index.html","7b88fd8feef46a3969e9c8724526468c"],["/tags/危险犯/index.html","c1dfa375e1114dae931eb65567e65ca0"],["/tags/反向工程/index.html","9dd08ec68d56affeaa42bb89622b32d3"],["/tags/发行权/index.html","18ea50f0fd29af453843f4d84bd44370"],["/tags/司法解释/index.html","c187abd14a993552eba01ff3a3bb4cc3"],["/tags/司法鉴定/index.html","5985f9eec41289e18be2c43ce96896b4"],["/tags/合同主要义务/index.html","2dcf052b1a16f215af4e17497b57a879"],["/tags/合同法/index.html","71ad29444a25ad4886594dfd9da4b3e6"],["/tags/合同附随义务/index.html","23bee6e6ea0e0de7c8c3318327ce8054"],["/tags/合理使用/index.html","f6a015c247ba1c781bbed57e4187d794"],["/tags/坚果云/index.html","3450eb745f409aee6947f1de665da02a"],["/tags/域名/index.html","2a12a8358ed72c7b1966a4b79e1f3bbb"],["/tags/字体/index.html","1715c8a8f1a25b51a367f4a2d65298fa"],["/tags/实害犯/index.html","e9d94234abeb9ae8eed6e6025fb3602d"],["/tags/密码管理/index.html","f9a4ca63575e2726d9d8f93a3665cb83"],["/tags/工资/index.html","6f45ab364a460b07898fd7ec320d8d8a"],["/tags/待履行合同解除权/index.html","6bea5e74b79ea7b4aaab3cbd4aef5423"],["/tags/律师收费/index.html","5e979ab27f2148ecd92b6de462162229"],["/tags/思想表达二分法/index.html","0377e482f0523eec45ca235276a7b33d"],["/tags/思维导图/index.html","0b12a0966652fcefab4dee43c7af67e6"],["/tags/成本收益/index.html","8ec513d963f51bdc105e43bd44572131"],["/tags/成长/index.html","fdfc4c02d592dc3efc34133422ff6ee6"],["/tags/技术措施/index.html","aa965e1f30e4c55ad5a2f55bd85ed077"],["/tags/抢劫罪/index.html","8985885f38306848b9b8038c2407d32f"],["/tags/抵销权/index.html","126c4a6203f73e45debbc79805222f1b"],["/tags/排版/index.html","28856b990e236d1a42c9f9e54a1e530c"],["/tags/插件/index.html","5af62550fb6950298687d56af8e93ec7"],["/tags/搬瓦工/index.html","0de9857bfe0c0bf69776d6073e67d37e"],["/tags/故意伤害罪/index.html","c0c9eb16de447fbcc55ab3b0b067bff9"],["/tags/效率工具/index.html","78113080fdbe577f66223ee06da5824b"],["/tags/教育/index.html","ee62a88de977e22e549bf62710c36752"],["/tags/无固定期限劳动合同/index.html","70f74dc8218e7f50aaf08ce6704ae5c6"],["/tags/最低工资/index.html","1786468e9fb4fd4c2fca575b23cdbe9e"],["/tags/最高院/index.html","104abcf1418385141a4a4f2cf7228b95"],["/tags/机械键盘/index.html","661f0659f682917e824d8134ae75d472"],["/tags/武汉市/index.html","f25d0e56f711bbb52c981b6e1d0e068f"],["/tags/民事行为能力/index.html","561d06431a2e6d9ad137320b12d876c7"],["/tags/民法/index.html","6a11d18eb732d0ad5f6e7c58a4a74050"],["/tags/汉字/index.html","c70e9c62cfe1c0f6eeeef17b48804c71"],["/tags/法学/index.html","9b0b6f3aaa650bc34487049fad9ec380"],["/tags/法定许可/index.html","5b461816a4c8f79298067ff9e753ba56"],["/tags/法律/index.html","4d19d3e71d2539c0e31ab119c3c0ec98"],["/tags/法律援助/index.html","d9b7e608b13cf8095320334f2a286def"],["/tags/法律法规/index.html","5e51f3da40a7a0998dbe9bc890242c8c"],["/tags/法律经济学/index.html","1543a287d6b38a028337f6d995f8c8b1"],["/tags/消费者/index.html","8749c6fda87a7241f9b8c4520f0fd72a"],["/tags/湖北省/index.html","64dd5fadda1d2ee1d29f999d6a09b7ed"],["/tags/熟人社会/index.html","43101da29a4091d9ff8d75b8020657c7"],["/tags/物权法/index.html","c44f1f7be51d6efdad17ffba6257ffd7"],["/tags/用工之日/index.html","4eb8a7adf906821e9ca5683c9449c39f"],["/tags/电影/index.html","f69d3ba170b7be683ca80865f81f43b1"],["/tags/男女平等/index.html","2b031aab17b35265d873f38c7c956554"],["/tags/知乎/index.html","6f9f61de63c6742641f555139364e83d"],["/tags/知识产权/index.html","84f4ecc092c69d4e6e2b33e717cfefe7"],["/tags/知识产权法/index.html","417bfdab3d55d047ab7a1cb582357ae7"],["/tags/破产法/index.html","9ace577de136c6d29e82513771895db3"],["/tags/破产管理人/index.html","1e3988b8de420ccc5ee7d6c7e9079c3e"],["/tags/社会责任/index.html","fe0a6ed558759313d521083bd26d5ea5"],["/tags/社会问题/index.html","89373204032b929e2528af0c43f96e77"],["/tags/经济学/index.html","a8f5772c5a67129a36d94fa47fcb8afc"],["/tags/结果犯/index.html","f78e868c0501f1e497dc30b24ae252c1"],["/tags/缺席判决/index.html","df31b11e4a7abd5fdc0fa5e0ee01a9a2"],["/tags/考研真题/index.html","feade4d1aa0816e59b9c113e0c991bbc"],["/tags/著作权/index.html","dd76a5ccd8654f68c567301b4e2c1c46"],["/tags/著作权法/index.html","203bca459369ed252da88dc6723db949"],["/tags/行为犯/index.html","205594e798cfaba3accee21920f080c6"],["/tags/行政不作为/index.html","da9242b5aaa01771b8a03f298e84e022"],["/tags/行政救济/index.html","61e33da69f55889c14703adab98a1049"],["/tags/行政法/index.html","8ff957f51d1285fa7a481565535d558e"],["/tags/装饰装修补偿/index.html","55f0b75d822aa0a07924b1dfb27d4db9"],["/tags/观后感/index.html","ef1981e71682f0630c1d27b3d24b457a"],["/tags/观念交付/index.html","d770fc8171b4af0ffd734ac138f93528"],["/tags/计算机软件/index.html","4e812ee22955a23b91d3c570420e19e7"],["/tags/认知科学/index.html","d4f270809dd59761ccfdd4219759be6f"],["/tags/论文/index.html","d1922c4ea7de19f16aec4fbe8ab7f6d2"],["/tags/诈骗罪/index.html","4329ee30fc9e16e125913eca7144df63"],["/tags/读书笔记/index.html","01b6a584fc01bd250c7ae74ce0a5bc0a"],["/tags/赔偿标准/index.html","641cac6b1de1cbdc483fd215f391763e"],["/tags/输入法/index.html","71937c2b33c71315dcb3291231f80cd0"],["/tags/违约责任/index.html","a8aa652c2cafbbc865a3c078105e1035"],["/tags/违约金/index.html","cc47f9894ac6e545b87273438b27cf53"],["/tags/释明权/index.html","a3412b59b75e2df26075896df4b29c42"],["/tags/隐私/index.html","11926896b0e1dd8ac683c7f6810959ae"],["/tai-er-gu-shang/index.html","1295433e1943db6d19ee8eb11e6a6ef9"],["/timeline/index.html","efcb4e5aa057540fe2095b9b5f8689bf"],["/vcard-yu-er-wei-ma-ming-pian/index.html","15fef48fd509b14fe6a45489307f4e23"],["/webfont-yu-zhe-zuo-quan/index.html","cba06c8e96651c8681e16aabe80d1b80"],["/wei-ji-hou-ban-quan/index.html","21bab6b683fd49093c7343131df4e232"],["/weixianfan/index.html","a35e90845df6420420eb1995522f7bd2"],["/wo-de-macos-he-ios-she-zhi/index.html","46115c4eaaa04e9c3f85a5026a66abaf"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","e9db657719612e3901c804420560becc"],["/work-rules-mindmap/index.html","a6761673307cc674c754366f08c405b9"],["/wu-han-chan-jia-shi-duo-jiu/index.html","7cb282c5399b1380b8d26cb1eb391da3"],["/xzlfbzw/index.html","fb70a6f046392ef7b57a7a86ccd73f5f"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","1bd1b065fca29de6f1d7095eaa0c3dc0"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","53c28f5ed692054b4294d70b11233474"],["/yu-ming-zhuan-yi/index.html","ac31a1caced52dd08633f817422117da"],["/zhetengb/index.html","10f33bf53bd987c9ab90ec579729a2a3"],["/zzq/index.html","7cdcb3f11d01b72e0d86d720653b6b54"]];
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
