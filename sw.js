/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","51c324ed559f12311d7faec51607dd6d"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","02efebd8da56c53c06f5cfa96a1d950f"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","bec54f32192eb83f9228fcf24da4591f"],["/PGP/index.html","29dfe4f5137f0b8a2cadffdc0f0646db"],["/about/index.html","0b2150be45a2e6281e12568647f613f2"],["/applescript-jiao-ben-liang-ge-ban/index.html","305b439c48232611f4504f6b6cbf9e7d"],["/archives/2014/07/index.html","c575e31c7d87b74a6a72c8c3557a5d66"],["/archives/2014/08/index.html","3c4fe3c7c3a65c182e259e43f21dab57"],["/archives/2014/09/index.html","dcc883d8aaa4b1e74f2f74ca998893ef"],["/archives/2014/10/index.html","1f8e8562b3dddc7fa48a29d09e544597"],["/archives/2014/index.html","f95ccc97146939304b308af892274ead"],["/archives/2014/page/2/index.html","b283abccce257b7a1c5c733d100e7348"],["/archives/2015/01/index.html","22ebe8071a7dcf675b0e3941150fa7d1"],["/archives/2015/07/index.html","5f6ed22b0cfdc3767163a9d0acf56fcb"],["/archives/2015/10/index.html","c0a81fbe9438ba4c4a2bed6b1a279446"],["/archives/2015/12/index.html","81099ac9fa002f2077b76784067069ea"],["/archives/2015/index.html","6b5a07f754e28ae4b3fd8074039ba49d"],["/archives/2016/04/index.html","7ec4a8ab72d7c1c2d1f8a040cb899030"],["/archives/2016/05/index.html","71604265710a7252a76ee13cec8f9aad"],["/archives/2016/index.html","8997c83d4f81c8009166a1681c25a731"],["/archives/2017/01/index.html","ac0d035c7b835e57ba0d43dbb28d0895"],["/archives/2017/02/index.html","a94c4a0f0c7133548dd20487e3c654ae"],["/archives/2017/03/index.html","bece30f0c3778afb50bc343f043d79b7"],["/archives/2017/05/index.html","1d4536e649b8e4c429d32681d86aedf8"],["/archives/2017/07/index.html","c5f856c5456dc29b268de7e362450c42"],["/archives/2017/08/index.html","2980fde15872f4429fcec5130c648ba5"],["/archives/2017/10/index.html","4276342ebaa6a4adcd9f15e6c4af22cc"],["/archives/2017/index.html","587ae6d69a2ebd65660aa8bd93cf7d54"],["/archives/2017/page/2/index.html","ee224bbd11d324df7515721c3f3ceaca"],["/archives/2018/01/index.html","c518a6337fcdf6be7025fe1215276c22"],["/archives/2018/04/index.html","7beaabc5906460a188d2a0e601e99a8f"],["/archives/2018/05/index.html","8185d9ccf29ab294f9fd445f2e18eb7a"],["/archives/2018/06/index.html","9fe9c444cab28a29c41d16af461f5a7a"],["/archives/2018/07/index.html","7ec46f45847ba206eb92fd913e35bd3b"],["/archives/2018/08/index.html","7aba844679048638bd82c0a4452988b6"],["/archives/2018/09/index.html","f1a242e1ec6846d8122cc743056d7d25"],["/archives/2018/10/index.html","6c83224f02b5a76d11d5ea73d0273b40"],["/archives/2018/11/index.html","2c8cb7e80845f8f4d6fc8f0beaf496ff"],["/archives/2018/12/index.html","2f9cff7822c379a8eb60e04c15631b7f"],["/archives/2018/index.html","9620a9f4042befaecce04ff2af900b08"],["/archives/2018/page/2/index.html","71aac6546aa35ccb0d39184187969ddf"],["/archives/2018/page/3/index.html","7e395fbab0c430a12fd2ea1e75c32d0d"],["/archives/2019/03/index.html","298a5ee3d53df4ec78e4c48f068e57a4"],["/archives/2019/04/index.html","6cc86ec60d5e728e76c2294a97ccb8a5"],["/archives/2019/05/index.html","3cc066e38f4b665be14e32864856d33f"],["/archives/2019/index.html","709969e8b6e927301641dbf595718d6b"],["/archives/2020/02/index.html","29b9b1a19ac83b3506d28c8853817747"],["/archives/2020/03/index.html","4431ecac58c98eabcdb2c9d4a1dffc2d"],["/archives/2020/05/index.html","9484b52673d05ca944064576367394c4"],["/archives/2020/index.html","abd42a4481d2b7c921cb1f2e1e8dcb9c"],["/archives/index.html","45f89a1dfef378abec456cb7bcffe34f"],["/archives/page/2/index.html","a46b7e8c157903931fbae5035afbb512"],["/archives/page/3/index.html","9e99d18270355d12150ce01493464728"],["/archives/page/4/index.html","c8601f109bbe097eb0e829c22ab30f98"],["/archives/page/5/index.html","0c635fadc7560eb3d87b2e8253cc96bb"],["/archives/page/6/index.html","752e6b3d64c41baeff989560af45732c"],["/archives/page/7/index.html","0a8a3106728d4ee1c4280b8fe80d7b58"],["/archives/page/8/index.html","441cec06b5e8f7172a52fc3c9eb27142"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","926e999d6ea5f2d01a3779e520494026"],["/bao-guan-qin-zhan/index.html","397198c657cb7792672b66394d08d281"],["/bao-li-yu-qu-cai-qiang-jie/index.html","072bd6949cc7094ed1f67b7d05163100"],["/bei-dai-li-ren-sang/index.html","b71221f7fafc6dfb906c70fe5413d542"],["/books/index.html","8cf678bec460e023ff79dbfceec46ee7"],["/categories/Blog/index.html","f97ab43cb6beeb0b409dcd39e4a68612"],["/categories/Blog/page/2/index.html","ab49c178c9b5dc74a300a43f49cd2be4"],["/categories/Blog/page/3/index.html","45786d6ddf51a9e7dfa2b2f87b54ec0f"],["/categories/Blog/page/4/index.html","6c0bcf25c2451de5c6ac1d292a9def8e"],["/categories/index.html","698a64a70f59e9fd7addcf151a190a74"],["/categories/法学/index.html","2aaa2c39c0126d897e59c61425e2ac68"],["/categories/法学/page/2/index.html","aa9be0f48e227646be5a5320c5bf1abc"],["/categories/法学/page/3/index.html","8716ca9cd03c740184266a571db48870"],["/categories/精彩分享/index.html","7ee7e1a04bda9b0f1610ea172c088f65"],["/cclisence/index.html","4b9e47b595a1790ef20c23e6ca3f4af8"],["/cetrain-issues-iv-for-company-law/index.html","7a2ee6ee8c3925342b6031c303144fea"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","ad877f7060cc99dd1dd0e3abe606b80d"],["/cs-hubei-2017/index.html","94d6ac5687117d44debd9cbe07f1af0c"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","51deaea71a8908ccfb8dd00f689fff3a"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","ef466647a2fe4bf633ef1a4f5a3bc0a2"],["/due-pin-workflow/index.html","2852d59f3b0ce9f5ccc0d8d78f866a5c"],["/duo-ci-zha-pian-shu-e/index.html","23eb3c899bd3496b51f437e6244e19e7"],["/expert/index.html","fabb3ff60692da142bb511585e5b65ec"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","4a89bcd3ef1f1cbb885d001065428598"],["/google3756ddc34336b7b9.html","8f9dbebcc4d0d26735298666fac872d7"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","d347b74d0d09e402d5ba16d4d85fc393"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","1f7d148a333224ed6ea161b878dbe1d3"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","0890259571cc3e21ed58f5e0cd622f79"],["/hustlaw13/index.html","8a169ebf6237f1acfa08ceed15f63095"],["/hustlaw14/index.html","f7137591571f4aab22fe3ada7f42af65"],["/hustlaw15/index.html","bb1a0046501711026f0cec1e09796065"],["/hustlaw16/index.html","f0ce4cea79aa6360f8888858d7d68502"],["/icloud-terms/index.html","46fadd54ccb23a0397fd671824858bd4"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","160873281a46e01640f8a21e52a27540"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","82796ce410fa5641c3b763e92ac6b429"],["/jdsnk/index.html","614aa02d813d7bd88965c5fe41e7a6b9"],["/jian-qiao-fen-xi/index.html","af17ae51a247d4b3bb5ba99a10ef0565"],["/jianguoyun-keepass/index.html","68954fcddfd86cd0e981a5378ed0b5e1"],["/jin-qian-bu-neng-mai-shi-me/index.html","987344d312b129bcc4c71f2eaac0472e"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","14c897ee83620fc8ff5ad12020179b26"],["/latex-times-new-roman/index.html","51627ea28c0f07aec1b325bbe883b94b"],["/latex-yu-lun-wen-pai-ban/index.html","c8222a05b2707306011779e98d60d2c7"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","02ad3abba700a552e2bfdd712b320ecc"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","ebcd8d93be48f9bb7cac570acfa7336c"],["/luan-dan-20181116/index.html","c9b3cfa501121a9c90a406402704dd90"],["/luan-dan-20200217/index.html","7e78da25f51471f35ad3b78635082a3e"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","cc6af548edb3d8dfcebb19d36708ee11"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","4e94e4d3d89429c50a04955f9a9bad0c"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","6aa927715fa2785e0414c2c95742b4b4"],["/movies/index.html","b2b9e2cd53d0e9c304e866feeec889bb"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","6206313803fc7cc5fa1fa1ee2bfbb93a"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","59538d20010e309a0fed786040d08310"],["/opoo-zhe-teng/index.html","07df17a99a9b19a434424aafb673c96b"],["/others-00s/index.html","e353b1544fd3c0957472c440a8637579"],["/page/2/index.html","95fc3f671764dc46b2ca385b234b2ce7"],["/page/3/index.html","15130918d6e7df19798e9aac6f543ae7"],["/page/4/index.html","7b468bcb4c325c5d1c8ad6594de770d3"],["/page/5/index.html","35b7352f8f6203fb57f7770901d2f7b1"],["/page/6/index.html","aea90f65c2d31ee2e7653c6a2d6f9f88"],["/pan-gu-zhi-bai/index.html","93b94f7f4d1660dcc85b6cc945fedf52"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","23bcb1fec38b67bbe5b8e60c9bc6424b"],["/posner-homosexual/index.html","d5550495421b668d682095622a6d0f9c"],["/qxpj/index.html","9e4791550e939fe5580740bf8ab73b7f"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","2473ebbd7341b8fbe642f373d9aa842d"],["/shuang-pin-vs-quan-pin/index.html","b9c54a290937e0c946080d5baf47485d"],["/shuo-shuo-xiao-fei-quan/index.html","bd84e5e01a71565692e001846e36bfc4"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","a3cd5beb2e70b1049e8afe1f37ada190"],["/software-reverse-engineering/index.html","2fe9de51f6cfc226e51d674fc4759c3b"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","54dc08b56e8e58a237b0994a3566d5f4"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","b9dd55d0be0496bbeb5a9760bdba4062"],["/sw-register.js","72c0da739f00d054302fa5977a1a9540"],["/tags/2017/index.html","f066eff9d27eb729e693926334e75dfe"],["/tags/APP/index.html","5181c05f86d1cf87774d3cc49c5f43df"],["/tags/Apple/index.html","77d787df090d9ec26fc3c669dcf5d795"],["/tags/AppleScript/index.html","7cdb03b483387cff1a8d310e702e1562"],["/tags/Due/index.html","d04024b6dbe598c1e861742d5f3aed6d"],["/tags/HUST/index.html","15beafec5319a4c446bcdab221d77a71"],["/tags/Homebrew/index.html","8f0685aab6b075aff75986c2b2afb4d1"],["/tags/KeePass/index.html","35d4231ba7e4abe00ac4adb4a606e07e"],["/tags/LaTeX/index.html","6658681b0cebaa74db8f4e5daf2ca4a5"],["/tags/Namesilo/index.html","ada7229156a5e3e9c500117bff2fe71d"],["/tags/OpooPress/index.html","e21f65d58b489e105c5e26fb7ddf11d1"],["/tags/PDF/index.html","a40882c4bd810ce73b8c2cd85abfe6e2"],["/tags/Posner/index.html","095c9d85af4a9ad94dfc66c51ccb3709"],["/tags/Python/index.html","d6394bd0eaca9ce1dde26b8cb5e6b108"],["/tags/Rime/index.html","2c430df4db0717ad2c99a4800a290f40"],["/tags/Tampermonkey/index.html","8c72d1cee92dda36fb0f3860608db5f3"],["/tags/ToolMan/index.html","59b607a2ca3f66ad93e717d51043f53a"],["/tags/Typecho/index.html","610ca31c931d3fc5d1fdd47afeb063a8"],["/tags/Workflow/index.html","f5e67c74946f10e3af134744daa9263e"],["/tags/cc协议/index.html","7653dee19081f504dae3d5e157fc5761"],["/tags/iCloud/index.html","0e365ac71085b3ca903fd640c6c2b847"],["/tags/iOS/index.html","d0f70934f54e5488546f42b6b482a24d"],["/tags/index-1.html","9ba16a35fa06a47aefeab2c0527e6ab5"],["/tags/index.html","9ba16a35fa06a47aefeab2c0527e6ab5"],["/tags/logo/index.html","2a8086a9516403932f69ee211f7b2cdc"],["/tags/macOS/index.html","a0a8e9d39e4a19361d73900a9251ffe0"],["/tags/vpsmate/index.html","702a625f2b3052857ce8000880fc3c1e"],["/tags/zsh/index.html","18a39c5f6804b8f2e8c8d742c97175e8"],["/tags/乱弹/index.html","4cf63f8ddfc1f68f23a24069fd4b88f3"],["/tags/二倍工资/index.html","919537c19350956545acbca208545324"],["/tags/二维码/index.html","4c9b105c384bb4e026f870719c262800"],["/tags/云盘/index.html","9711569c75cdfd66561e417c2bf123e6"],["/tags/交通事故/index.html","d6e466b8351fe799f96ed3c9a549f72a"],["/tags/产假/index.html","cbf1d138906fdc87a43825751f5b1a28"],["/tags/人身损害赔偿/index.html","9be5fff3a8526f5c00cf436c3d4a91ca"],["/tags/代理权/index.html","1df084ef962d6e996a6e7bbf6ad5f984"],["/tags/优先受偿权/index.html","4c30cf35b3bea9b57d5e088d4a46e3c4"],["/tags/作品/index.html","477399ab64ea3528f976145bdfe27bb9"],["/tags/侵占罪/index.html","5597a6c368fff1d66f2d713a45d75f74"],["/tags/儿童权利/index.html","5c02fd677ef1bd36235e02056e341c58"],["/tags/公司法/index.html","ec2c2a3ade9af0ea8317a76f253d23b6"],["/tags/共同财产/index.html","654654a5a19594eb5899d4befef77d33"],["/tags/刑法/index.html","7b276ca233868a600133418582814c46"],["/tags/劳动关系/index.html","bda7d4e2aaab34ba1204506dcb3597a6"],["/tags/劳动合同法/index.html","ee3edb46e41df6581211aa7303306170"],["/tags/劳动法/index.html","2c645687fbd008b37daf3475840c166a"],["/tags/华中科技大学/index.html","4b0acf5f4d46c91690cb6ddbafb3793f"],["/tags/华中科技大学法学院/index.html","f7d78ea4d75c9d1fb86681c2ee929f52"],["/tags/危险犯/index.html","3724cef7a25e6fa7d23267e37470f7bb"],["/tags/反向工程/index.html","bd9c50770369603fdb69e8e3b1bbe119"],["/tags/发行权/index.html","86a6405758d18b46a5b228016ddbf73e"],["/tags/司法解释/index.html","70c172d4dea334bd63f47230dba5881f"],["/tags/司法鉴定/index.html","bb585be0356a747a18088691c6b553b6"],["/tags/合同主要义务/index.html","85ed022967d4b006466e9c1e71db2288"],["/tags/合同法/index.html","3fad5834bcd4aeefc81f020a287faf22"],["/tags/合同附随义务/index.html","a04f561ad45fb095efc510d82aa2ab6e"],["/tags/合理使用/index.html","9ddddf479597e1a780d43a7e562e6976"],["/tags/坚果云/index.html","9b9ac32f8f572e623866db0ff2fd3d46"],["/tags/域名/index.html","cd8fd4e52a76eed958f4a3944d110bf8"],["/tags/字体/index.html","2ac25a1d7ff30b531e4a65ec2be05e5f"],["/tags/实害犯/index.html","5334ed74270ca1262587da98bd6828ba"],["/tags/密码管理/index.html","f1a2a4bd900cc521e1a396afe709c332"],["/tags/工资/index.html","075ff51305cdfcfc619d3b0195dd628f"],["/tags/待履行合同解除权/index.html","44714eb1ef2e84b4d865d872f4d33a26"],["/tags/律师收费/index.html","8f67607856eaf4e59b276bde0bcfd208"],["/tags/思想表达二分法/index.html","bfe56bf31e492bad63c5ca1995867150"],["/tags/思维导图/index.html","2ba813b3ba9f48ac9c87c1e75c2f10fb"],["/tags/成本收益/index.html","25d00776a1da6f506f47d6f16c888f6b"],["/tags/成长/index.html","1490e332ba77731978026ddbd6d9210f"],["/tags/技术措施/index.html","ea67e8c9893f49716b23cedcc5ff8b08"],["/tags/抢劫罪/index.html","5e525cd642968504074ae7f8d294c53d"],["/tags/抵销权/index.html","f31d084f9452ed3ec2c911a765a9347f"],["/tags/排版/index.html","d76e525a5ba32baa34353a2b85a347c1"],["/tags/插件/index.html","00c17bfb1d7982d74878a2f249d93f9f"],["/tags/搬瓦工/index.html","d938e69a68f6b5119509f6d7c1425961"],["/tags/故意伤害罪/index.html","45a2557b4113726bb551a75f5d505060"],["/tags/效率工具/index.html","068e9764a9839cabb32ee2a8720bda75"],["/tags/教育/index.html","09e84e23bcbba1e49ce773bdbd00ba27"],["/tags/断舍离/index.html","f559253a99348a5932fbcf0f10c876a8"],["/tags/无固定期限劳动合同/index.html","cad27bfa7bf311e03b39396060394319"],["/tags/最低工资/index.html","1342a6a2a4c938fa6ae82eb61dbc6681"],["/tags/最高院/index.html","8a1b5717acca37cfd00cb145ef965e2f"],["/tags/机械键盘/index.html","1d551b7d69945c7c6d29ce64efa5851c"],["/tags/武汉市/index.html","b060300463745a474a612ddb5b98d6bf"],["/tags/民事行为能力/index.html","2d6f6c63b6b6d7ee38d3e503ebad48ee"],["/tags/民法/index.html","d442cb86b204f2f8a165bedd546ba5fe"],["/tags/汉字/index.html","88a429763ffbea6150d988c2526e9d4d"],["/tags/法学/index.html","bed2062c5e8a243ed0d76c8b5be91b0e"],["/tags/法定许可/index.html","9b12f270f56895dbed32c1bc2e026060"],["/tags/法律/index.html","6014a2326f71632d6b2be807b5bdfd46"],["/tags/法律援助/index.html","5b5961f4f5ff3566708498ee836ae647"],["/tags/法律法规/index.html","ec254ec90d30a7d18f28f6cfa3fc5a73"],["/tags/法律经济学/index.html","b476c8b44fb2856fc17b70c0b9da65b2"],["/tags/消费者/index.html","9d6e519335417129a7e6cccbdebf8ea2"],["/tags/湖北省/index.html","6c4797f75ac630e3ec6d7433761b0a56"],["/tags/熟人社会/index.html","7f5dae3bb720025a7b9fce1c9b11aabe"],["/tags/物权法/index.html","5f783c33e1575c9881c2dd55af388d7c"],["/tags/用工之日/index.html","c9f5511793d810d2b2b8e56fcc83412f"],["/tags/电影/index.html","17c5689dced53d7456c30f58cee0db67"],["/tags/男女平等/index.html","f103fb1c9bc4300b8f09c1830a38cde3"],["/tags/知乎/index.html","2b00013f658ffed746287ff88d497e7e"],["/tags/知识产权/index.html","07cd704b72c33e7eb1307514356e6057"],["/tags/知识产权法/index.html","75646156bbcc840bc52b8e7b220fceec"],["/tags/破产法/index.html","5449cd13fd04b8e905e6bb3a9cb27261"],["/tags/破产管理人/index.html","63ca22fcb27ec4d0d7cb6edafd3af7b3"],["/tags/社会责任/index.html","4da452282d27bc773e843f0ef6f8a257"],["/tags/社会问题/index.html","2ea82e8d80907409a00571ae05e87b90"],["/tags/经济学/index.html","993561feb142e6d2c3396eb588be7a28"],["/tags/结果犯/index.html","a06ab999c787bbe7140e874f3356ad01"],["/tags/缺席判决/index.html","77d9ea328cba0e5b34c9fe56d6ad1197"],["/tags/考研真题/index.html","236d22b2bbc3213199a7ba783ac71db7"],["/tags/著作权/index.html","78100f6a841ce2b36de5ef43918286fb"],["/tags/著作权法/index.html","4002b6f9b6f38de840641ec609c7eb2f"],["/tags/行为犯/index.html","37b0b33bbd597acca7a10406e6f66c48"],["/tags/行政不作为/index.html","e5fa3386593501f1c65bf37a66b21fa3"],["/tags/行政救济/index.html","7a034e44e12d91c35e55ccafba4b2925"],["/tags/行政法/index.html","0c66a957803ef480ff6f60bebc52f457"],["/tags/装饰装修补偿/index.html","b1a7b5bac96f56014fbc85d3d36984da"],["/tags/观后感/index.html","1adf1fb6da5a4eef04c994e874307841"],["/tags/观念交付/index.html","b118accce5cf7caf6a85610a76522eb5"],["/tags/计算机软件/index.html","c7ff32e0c557cc0824939411f8efbf7b"],["/tags/认知科学/index.html","3b3cb39207d3711c454d6dbe3cd3f5af"],["/tags/论文/index.html","5c59a9d74aa469f1b5b4bdec1cb5bfec"],["/tags/诈骗罪/index.html","f2f05a5e911046fac9d11e1bc4ea8ef3"],["/tags/读书笔记/index.html","f3d2b1f8639f9b23d7bb3d0ba1a109b2"],["/tags/赔偿标准/index.html","94fbc787db09fbfb657abd53d9a6a3ec"],["/tags/输入法/index.html","b207e63ae3e0d0b88302d3ae27e9718c"],["/tags/违约责任/index.html","33e889a9672687d13096fd2a2ffb5867"],["/tags/违约金/index.html","76933a6be48da02b12d5fbef89ac27b2"],["/tags/释明权/index.html","3a790f9c1b3a5bd8802d99ea29767e10"],["/tags/隐私/index.html","45ed87c6092f601ff56c636da7a6cb90"],["/tai-er-gu-shang/index.html","2e9a72dd910efee97890997c390af094"],["/timeline/index.html","02fca928101e313116b44d6d11f4bfa7"],["/vcard-yu-er-wei-ma-ming-pian/index.html","62d12e09a6ac33bddc42220e5a966019"],["/webfont-yu-zhe-zuo-quan/index.html","d2520950975d65e0cb7d61af253ff5fd"],["/wei-ji-hou-ban-quan/index.html","bc0b25141b3502ce67d8edab4208e651"],["/weixianfan/index.html","3ffb0e2353b133fe8e705d05bf901643"],["/wo-de-macos-he-ios-she-zhi/index.html","b792494d98afc48cfa81b6749aa16bdf"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","217505a8debbda14817bb9bd62fecec9"],["/work-rules-mindmap/index.html","42c23cfcc3cdfca3d62da9655dbf1006"],["/wu-han-chan-jia-shi-duo-jiu/index.html","bb4f21f9f69bac6df44709a703796d60"],["/xzlfbzw/index.html","e380159c0c2d0c1f98646b1fdc93bfbc"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","68909b93c601748e6c1d89095effffcb"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","e14f54994ca7bc1cf71acb131c241afe"],["/yu-ming-zhuan-yi/index.html","67e07d40d4310a892189130712f631e3"],["/zhetengb/index.html","6ec53388587bccaea7768e59ad2cccc4"],["/zzq/index.html","1e0a63eafdf9e00c876820fa2adfce9c"]];
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
