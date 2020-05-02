/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","75628fb1ddf50aa4fd17d78fcde579df"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","ef726a6e78e0f39a18efa97ddb72aafe"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","8c68677a5612c424f8c51836a78202db"],["/PGP/index.html","dc3082ba5150a412915306ae1b92e536"],["/about/index.html","441c399843209faed3983af4debaedf9"],["/applescript-jiao-ben-liang-ge-ban/index.html","a51295c19b3c2bcc628d9427d6d844dc"],["/archives/2014/07/index.html","5b51fea90c6a026592d0c3fb28305913"],["/archives/2014/08/index.html","6dc657669c8dcdb47b977fe78fbd34dc"],["/archives/2014/09/index.html","6a7334de5219447ced080ebaaf7d0a75"],["/archives/2014/10/index.html","9f06471bd8bb09c190215f0796335fee"],["/archives/2014/index.html","b73e4ec36f17d8a60bcb45ce2b2cf2fb"],["/archives/2014/page/2/index.html","f502dac3b6d3124018c7d6cb0e81c10e"],["/archives/2015/01/index.html","b2380483d5a1381a50e7fbcb5208edde"],["/archives/2015/07/index.html","e489256efa27f8bc2a872ca5ec1d7f23"],["/archives/2015/10/index.html","3e59a9269b9d00ae89caed6337016b80"],["/archives/2015/12/index.html","1c0b7c0f635497cc686f43a919655e7e"],["/archives/2015/index.html","6ec8a052ffe4c28d88c89972e0d7c092"],["/archives/2016/04/index.html","dac3184063e7ded5edbf13049bc798e2"],["/archives/2016/05/index.html","ec958cfac191b973ba7d714ee72ea31b"],["/archives/2016/index.html","df043527a2d9f93bc3442fae0db7fb35"],["/archives/2017/01/index.html","b82f05e26f8920e36dfb219f3aa1c940"],["/archives/2017/02/index.html","c15fc54953e9a9e56455a8ca49e9a3f4"],["/archives/2017/03/index.html","8c1514a68da56c9ce782c8bf3340c355"],["/archives/2017/05/index.html","0553cb0077e71acdb663b4a81a28816d"],["/archives/2017/07/index.html","c794bbb735a8cfab7bcdab59634de366"],["/archives/2017/08/index.html","12c37fde3c507872a2ec091e641d4040"],["/archives/2017/10/index.html","93b2c420d9d20e03737716f1bec7cf64"],["/archives/2017/index.html","8a3f4d90b7d565005badc0eb3552a6a3"],["/archives/2017/page/2/index.html","57cdf245319837a91b52ad89994b162b"],["/archives/2018/01/index.html","9452e1727fba1d26aed26687201cf828"],["/archives/2018/04/index.html","3adb8aa1044c0eeca10cf5bd3e1299c7"],["/archives/2018/05/index.html","85867758617e874971f5932a35774d6c"],["/archives/2018/06/index.html","e4a16e85b75b124cddd1bb42370872f6"],["/archives/2018/07/index.html","2cb0b62d2582e42c36c90becf2dfd9f0"],["/archives/2018/08/index.html","1456cf254fb52faa3bbb1f9d18669b39"],["/archives/2018/09/index.html","488d59283c2c88cc6bfc6c070184b40d"],["/archives/2018/10/index.html","6836466a67d74d40ce420b743cee2ef8"],["/archives/2018/11/index.html","8924612c69e240f4f91d34188b850b4e"],["/archives/2018/12/index.html","808014ba454d5d3fc731b889118f7aec"],["/archives/2018/index.html","15fa031e98535c9aff78f6c679bb9d45"],["/archives/2018/page/2/index.html","379dd0fa62a92659e269379549417d12"],["/archives/2018/page/3/index.html","d722d8fad8e610d40581c4ee53d3d2ee"],["/archives/2019/03/index.html","6272542f20cb934842f46f5b3e6dc941"],["/archives/2019/04/index.html","b27245dd09b2b9946689b8cf2c91632c"],["/archives/2019/05/index.html","8c545cb1d65a67035ccb22f7e30e9bbe"],["/archives/2019/index.html","fdc3f88b7fb4e9b5b952248e1fe99f75"],["/archives/2020/02/index.html","31b0e0c03d08c565d29f88c091689df3"],["/archives/2020/03/index.html","7e08004653e44c309e5a9b3a28dfb585"],["/archives/2020/05/index.html","3335e8381b8292383ffbc1876302b10b"],["/archives/2020/index.html","19288a3bf05cc1dd28fb86a0a4e426fc"],["/archives/index.html","b8e60670ffd669a4442bd2bd29bd4cf8"],["/archives/page/2/index.html","17c566db38e5ea82a8a62e5ccf6076a1"],["/archives/page/3/index.html","c0028f6c46fc5557a3ea1496429f3062"],["/archives/page/4/index.html","9502986b9087119c676c3c3659c82a8a"],["/archives/page/5/index.html","34f6e8bb75aa6cce43bd58d749612655"],["/archives/page/6/index.html","a9884426946b477d6ae5ac266e8045d4"],["/archives/page/7/index.html","dca55a6b9fd9d99f08c9c12c04f46bc1"],["/archives/page/8/index.html","6b6f4ce1e851631194fc91fd65311dd7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","2db2eaa3e1152db35c31c8b5e597c91f"],["/bao-guan-qin-zhan/index.html","b4ccfb524a7c02cd99ef600fee9a58c0"],["/bao-li-yu-qu-cai-qiang-jie/index.html","588ea5db2d1d98728485b281edd90c51"],["/bei-dai-li-ren-sang/index.html","226bdd2ccadb93bcc381fa23d525daf7"],["/books/index.html","7a5dd9de9cfdf0818244b9087920563d"],["/categories/Blog/index.html","a0ac5fa565f801fb410d356e489b9ba9"],["/categories/Blog/page/2/index.html","caaf73a308c157100bf35f804b603478"],["/categories/Blog/page/3/index.html","1b332c7a78cd24bc57b9b8c8f9ba49ac"],["/categories/Blog/page/4/index.html","4a972a351fbf4bb906e61d823289ae44"],["/categories/index.html","db1a84ff618ac89f56ce5ed36b29d21c"],["/categories/法学/index.html","595f77edf6da7c291b67355dcdd06ae8"],["/categories/法学/page/2/index.html","40e2965d4c323dd3c931224200ae638c"],["/categories/法学/page/3/index.html","ddaed01649a29b13c6a5c3c6c269a3b4"],["/categories/精彩分享/index.html","ee6c5b5dab68f430e29c3e3d69406d7d"],["/cclisence/index.html","8062514517947f769050cbb062ca14eb"],["/cetrain-issues-iv-for-company-law/index.html","a547c6cb2269b3f944e7132da0ad676f"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","76780b44552df5cc5ad26ccc91adc99b"],["/cs-hubei-2017/index.html","0829125680a5e4ea9e0e43615e081c64"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","9242f695dc58e1244bf9095c22bc4040"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","fac637f762d1af31d13e8312b7b6b1a8"],["/due-pin-workflow/index.html","a06496116c2facb4d49b340c0fec6fe0"],["/duo-ci-zha-pian-shu-e/index.html","d6a9f1e3fb757c21b8336f3421f20cc7"],["/expert/index.html","1215bc81201a0a7928dd4120e97c0f0c"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","811c9f6a377f084aa24e5ee50ea6c8d7"],["/google3756ddc34336b7b9.html","de253bdbffc17f796f467606f52ed60b"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","cd2ece21b3513a5a29f1de460250f60c"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","562f96e74ac67378fb6c7cf0c4b008fd"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","f87397c61d98aec2bfc77f739987fbc6"],["/hustlaw13/index.html","c1b46b9513b57e07cab6447a9b9bc776"],["/hustlaw14/index.html","f0a178d7cf3aae354282427384ef5a4a"],["/hustlaw15/index.html","11751174cc4fe29531611ad56220dced"],["/hustlaw16/index.html","dbbf057f64f598cfd8780c8f2e871323"],["/icloud-terms/index.html","53610c7030667fe5d60289d47a5b9a4f"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","b4f8f0431c110f891cc461552dfc41be"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","1be275bd8ae092d3e30ca615590f471c"],["/jdsnk/index.html","b3487ed2b1b6fc499f5a4e46f1793b13"],["/jian-qiao-fen-xi/index.html","bbbabcf026cdab24d77b53602d73d46f"],["/jianguoyun-keepass/index.html","a562807882c6eaf9cd2f6b6b110530c3"],["/jin-qian-bu-neng-mai-shi-me/index.html","4650bde0ed73beac66c2933a412361f8"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","bf2f37f22f3f3d804ddea9c113bc9df4"],["/latex-times-new-roman/index.html","5be2f6e69fb9e6e1e67ee2dc739c93a9"],["/latex-yu-lun-wen-pai-ban/index.html","11a646536c58a8cbb5d8858b7793d143"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","29f8c8aa654a4b6cfe85e33afa13eaaf"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","ab79730392314fe612fd1b076cd98e38"],["/luan-dan-20181116/index.html","15ac913945cfff8d52dbe1c6919dfc5c"],["/luan-dan-20200217/index.html","d19e79083ba99ed6460fbbd25d357d1c"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","d827b0ef95c8f54fbcb76c32eff6b17a"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","d5a26558e1b707ec5ea178822641ea09"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","836c808ad0498e27827ad5a767a96c03"],["/movies/index.html","5b9259d31746b66058fdfeca6f68c2df"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","0b9e0eb790c63cc6cc926c01facaa411"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","fa51f2ad62667f4ca873c8b9241d9349"],["/opoo-zhe-teng/index.html","88fb27f6c1a1ff4c2da13dd6b22ec551"],["/others-00s/index.html","05571fcd63aa061b2a9974404cbe8f71"],["/page/2/index.html","4188c7307c009364d4ae49b508312655"],["/page/3/index.html","0b08905a852e37b39b3ef88a44740a2c"],["/page/4/index.html","9a5a3041c79f7a1ee2435d3d4a39f138"],["/page/5/index.html","30d57365ddbcb5da939907828019a7d4"],["/page/6/index.html","585cd8bb4edb0fb7d66b854b9c0e9866"],["/pan-gu-zhi-bai/index.html","dce0df3065f1280a879fa5f85be087b7"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","efd97d6425471f0bd2ca18b35c6c2ee9"],["/posner-homosexual/index.html","b31921986374a863752c2b08340e03b8"],["/qxpj/index.html","68c593003e3fe18d05f2bdadd5f6b5e5"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","d56d62a3106c1b11a3aae643f9a4dbb0"],["/shuang-pin-vs-quan-pin/index.html","50d596ed817a12ee7754d011c6c2b4fd"],["/shuo-shuo-xiao-fei-quan/index.html","ecc69e1a7ca8aa6d17adee1e3d63e246"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","1cf6ef27bd51deaff87c4aed52994a7e"],["/software-reverse-engineering/index.html","f9a824038d1f179281b9cc36f8cf20fc"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","f1bb4f20ad9d4dd2e366a39434cf0b45"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","b195aa0d092e4f61eae7e02e97ca0aec"],["/sw-register.js","590ff91d8c95b988ab72f40b8e0c8927"],["/tags/2017/index.html","c80f307f23aacb56cade8d94189f5e75"],["/tags/APP/index.html","0531c0fb277ae82eda53371e83729bec"],["/tags/Apple/index.html","4ba377518d209eff3423dc55af2ba00d"],["/tags/AppleScript/index.html","85f72c2c4cd6de19d5f952819d345626"],["/tags/Due/index.html","05d49d19ccab2030a916756158f7fa42"],["/tags/HUST/index.html","e5e4bc350db5e466619dd8cc192b9841"],["/tags/Homebrew/index.html","441a93cb9c61da998e65cf37171f52e8"],["/tags/KeePass/index.html","8de1d35e493a10e60d05b9cd34cf6123"],["/tags/LaTeX/index.html","b43d9a3b2a4c6f0df9b9a1c80ec06fb3"],["/tags/Namesilo/index.html","2f6b3b79d1338748b5e5d7bf6708b5d8"],["/tags/OpooPress/index.html","c7c81a0ef4b4aeac10df0b0c94618a3b"],["/tags/PDF/index.html","4409be4e95b74d5a95a1c0ef775fbb9c"],["/tags/Posner/index.html","c1a3d831fc93c9066428e802022c3f98"],["/tags/Python/index.html","7bac00563e035ed98bd6daed61a695a2"],["/tags/Rime/index.html","65b88ee6cb16d35af2874eb326f7338a"],["/tags/Tampermonkey/index.html","32d510c99cafe89f756d54d5be0e9d38"],["/tags/ToolMan/index.html","5643f251610e662e56a245eef3a4366c"],["/tags/Typecho/index.html","fe48a634da56ca79cbe85c4b3dce3a9a"],["/tags/Workflow/index.html","2cd0bb43e09716aa6d7b5acdd31f8ee4"],["/tags/cc协议/index.html","bc0313541acf3e7ed0e0c155421f4afa"],["/tags/iCloud/index.html","a2f1fb8dd54d47f288631b4bec12521b"],["/tags/iOS/index.html","ec72b81fb35cbe2bd1ab4287daf4d599"],["/tags/index-1.html","e436f2f431a6201c9510698a8537a7b7"],["/tags/index.html","e436f2f431a6201c9510698a8537a7b7"],["/tags/logo/index.html","36361858da3db00c19a8fc87833e21e1"],["/tags/macOS/index.html","a2e11c4f63045d900a7e3f5cfade1e6a"],["/tags/vpsmate/index.html","a5e83fcca6f216a3ce60cba4957a04ea"],["/tags/zsh/index.html","e1c390ab7583e4b40029bae24db1a278"],["/tags/乱弹/index.html","89674a0c1fae57cdbf518032b5a19277"],["/tags/二倍工资/index.html","fa93ef5237b1eb78270f90903daecafd"],["/tags/二维码/index.html","f19786fc01f14acd127a6c73e3451c47"],["/tags/云盘/index.html","78e5358e82b0bc2a08756b7ff604dcdd"],["/tags/交通事故/index.html","754a27af5e27342b293fc1560a748130"],["/tags/产假/index.html","d79975965acb682ce626b2294385ac52"],["/tags/人身损害赔偿/index.html","dd802a1957d0acb0a54fe4af5f858275"],["/tags/代理权/index.html","390bacf3bb5dbae1b388b0634e054f88"],["/tags/优先受偿权/index.html","e5c099f2b6dcaafdf6145a81130ba630"],["/tags/作品/index.html","935c8cc0c3613f59b11e503f1027a23e"],["/tags/侵占罪/index.html","664eb972531bf677b80ee2e160180cb7"],["/tags/儿童权利/index.html","4ff1d3a6e6b791636452379dabc9b31c"],["/tags/公司法/index.html","831cd97da33c2444c30f05eccbbaaf08"],["/tags/共同财产/index.html","193d69da2a83155be792643d97e15429"],["/tags/刑法/index.html","e7dc39ec8d41ebca935f35cb622dc700"],["/tags/劳动关系/index.html","b6d8668495f1cf20e1ed25ad16a6329f"],["/tags/劳动合同法/index.html","c0145f664f1c69ad0581f16fa996e18a"],["/tags/劳动法/index.html","63518cb36c7fd96656bd7e904da7c345"],["/tags/华中科技大学/index.html","a5a998ba7cdac922723183648b053c5b"],["/tags/华中科技大学法学院/index.html","6459195aa0d937643cc6f2f70b30aa73"],["/tags/危险犯/index.html","ed2bb7bdf788dfd809105a3b91219b40"],["/tags/反向工程/index.html","7812f06e34a433baae87a1e7e6754444"],["/tags/发行权/index.html","ebc69e6b2051405cc3eec9bb5657564d"],["/tags/司法解释/index.html","e4f4ce13bd383b56e6f205e015241415"],["/tags/司法鉴定/index.html","4ac6f59dfcc8c2a71e01269a69a75c83"],["/tags/合同主要义务/index.html","c47ee27f269551d4c20571853a3e4e78"],["/tags/合同法/index.html","1b7facea6473fc55f337806e88b841fc"],["/tags/合同附随义务/index.html","c3ee46bf7b8dc40b7da59c8b450f55a0"],["/tags/合理使用/index.html","b665772fd248e66e6e0efe432068ce70"],["/tags/坚果云/index.html","cc2609cdf499e5596b85e6fa7e702051"],["/tags/域名/index.html","21228a879f5dd891249798551e306871"],["/tags/字体/index.html","bdbaa1759bfad125a2927e0e106e1ca8"],["/tags/实害犯/index.html","a3bbb6bb2a2814817d3c49f4fe2cb330"],["/tags/密码管理/index.html","9bca6fdd9fdb1d987a0322923bb10d1a"],["/tags/工资/index.html","7cd0d09bd67200f60e2ff9f282ba6b33"],["/tags/待履行合同解除权/index.html","63cd97f7b108e32277173e5dc268c0cd"],["/tags/律师收费/index.html","d9ccd6dcae84d998970b45e4d8a60d08"],["/tags/思想表达二分法/index.html","22e667978de12b811e44d1ae0e6bc255"],["/tags/思维导图/index.html","671d0c50625bfad6382b52a8a2db87ec"],["/tags/成本收益/index.html","d6dfdc5ca868ec35f4d658996c63ab64"],["/tags/成长/index.html","5f9184ae631e9b1d03772038a4a2c6da"],["/tags/技术措施/index.html","9ba857f02a306f45f90ac1b734b65444"],["/tags/抢劫罪/index.html","c433dea0af1e25b4e79f0c2961554f7d"],["/tags/抵销权/index.html","7d1bf195728b1115860c2b11f5bb5ad2"],["/tags/排版/index.html","6693428b1abe04e7278efa488831e797"],["/tags/插件/index.html","22b4e4dd7ea8d2037944154936ecb25c"],["/tags/搬瓦工/index.html","65c33dae476c26faaada9b1b7b1ef2be"],["/tags/故意伤害罪/index.html","cc6ca45e5fc7539e3f1fa62460b57531"],["/tags/效率工具/index.html","f678b2ad6cecc1ce0e0f2ebc00d32f0e"],["/tags/教育/index.html","0db49ac48ed17e57a77f519a41da3753"],["/tags/断舍离/index.html","69ed3dfa85b250e03f0c82799c5444a6"],["/tags/无固定期限劳动合同/index.html","addf1152db1d72d7d8cfcc15263fe19a"],["/tags/最低工资/index.html","22432e0b7353ccb90ea8e70b9ec33918"],["/tags/最高院/index.html","4080a435936c631aa6ce076e0814b1ac"],["/tags/机械键盘/index.html","074cb5b39c1467eddad20185e793cf53"],["/tags/武汉市/index.html","991fc00ed3985a2b5a4e4bbddad14be0"],["/tags/民事行为能力/index.html","685a7a5a39c7360e1022c9f65fded71b"],["/tags/民法/index.html","f917042bd4e5b55f239c00158216a980"],["/tags/汉字/index.html","1eca5fe0ad80e0b1bdb1e04ed90509ee"],["/tags/法学/index.html","1714878e591e2ff966acaec08e7e217e"],["/tags/法定许可/index.html","4b19a2a9ecef9ef9de49506f4e58019b"],["/tags/法律/index.html","8f1f66978a555a4970fd365ac56de2ae"],["/tags/法律援助/index.html","967a4b7a970f97b8edac5e58f11b853a"],["/tags/法律法规/index.html","72a4624f11bc6667785c3e6ac4c7ca89"],["/tags/法律经济学/index.html","5c35c29255972dbd78cba4fe8fd039db"],["/tags/消费者/index.html","d3cb8539284a7a99b5a2fe39cf685cbd"],["/tags/湖北省/index.html","0e51a3d9c46e936d8a1d6b8cb954996d"],["/tags/熟人社会/index.html","9560923694482051f11baba2ebb0c84f"],["/tags/物权法/index.html","3fa6546fc3e0ba45330d46efcfd4176f"],["/tags/用工之日/index.html","8c448bf692a6f8f7df64b9c65ca7b74d"],["/tags/电影/index.html","178d6659751b4dca8dcef6d9c08aac6e"],["/tags/男女平等/index.html","dbc4df9f5aefb48b6763cd64e108d27b"],["/tags/知乎/index.html","26e1dd093db5c4b7e6b78f37c201eddb"],["/tags/知识产权/index.html","73b8a36a020e7c56d78308b71d067262"],["/tags/知识产权法/index.html","1efa09aabad0069e93d9021c18190c96"],["/tags/破产法/index.html","0db96919fe8ab6e79d819e6a792f53d4"],["/tags/破产管理人/index.html","7c1dd9319d223f09ea340a1698fa841b"],["/tags/社会责任/index.html","c9eec37ea29a225cf0231e84fc8ad46a"],["/tags/社会问题/index.html","c934db0806a29b7215175886ed837709"],["/tags/神经科学/index.html","6adb2088b814ae38402fdf47991e9361"],["/tags/经济学/index.html","7631b3ae79dc6ac07a63418b8aab5772"],["/tags/结果犯/index.html","f5c0b05026c83ccbf2fccbf931ed26a9"],["/tags/缺席判决/index.html","e957baeb467cbc952fa28918e8bdbbae"],["/tags/考研真题/index.html","70edea953dfbcdc43078655c80ece7ae"],["/tags/著作权/index.html","3b6927df10f4dfe525af197410d94b2a"],["/tags/著作权法/index.html","63b59058170f1890edf6e2078ec6fca0"],["/tags/行为犯/index.html","b7e8f21402d54cbd8cea2cce2340f126"],["/tags/行政不作为/index.html","f927fe6fbf7a6e2c8b45f0a4f5bc8a6a"],["/tags/行政救济/index.html","0e463956987034c3319ea07492e884c5"],["/tags/行政法/index.html","b64627cf742e21df8983416bd539c50c"],["/tags/装饰装修补偿/index.html","38e4afa9c06d816d442de854b42575dc"],["/tags/观后感/index.html","0f4cef8cc3ce750a27b0de109bd3d83d"],["/tags/观念交付/index.html","07e75cd4d5222fc281877a318a66df9d"],["/tags/计算机软件/index.html","c3ae1a122669242be91c0ad04e1a78e5"],["/tags/认知科学/index.html","e9de133b163509f19a745061d350f471"],["/tags/论文/index.html","94149e4b3ae85ac2af44c90a635ad85a"],["/tags/诈骗罪/index.html","7e02c5405a1538bdbe8520d550e3b623"],["/tags/读书笔记/index.html","f692bfc0c05da08fefc06fdc8be2c160"],["/tags/赔偿标准/index.html","e8d8462ebb343e09add5dabbf6aa01e8"],["/tags/输入法/index.html","4790678ce66448bed1b7059c13823d7e"],["/tags/违约责任/index.html","d57182d12b52b92fd0eaf0f0420d6fde"],["/tags/违约金/index.html","a20f8713f08981166b53c425bf543a8f"],["/tags/释明权/index.html","edc3240d40ff9d1b8b5431d335be527d"],["/tags/隐私/index.html","c5e627c7d4c664d9a702c12dc1cc8722"],["/tai-er-gu-shang/index.html","7f2b9ad912a1e69afdcba535eb613a26"],["/timeline/index.html","90a4fe0d54ba84d6ee077eec6a7222a9"],["/vcard-yu-er-wei-ma-ming-pian/index.html","ba232a2567e412339cd9c6237addeb11"],["/webfont-yu-zhe-zuo-quan/index.html","c89f9d790209f70253928fe02fb6ec95"],["/wei-ji-hou-ban-quan/index.html","1983d5810251e25ec18e77d3d830d8a1"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","8f4311ded8e8a301d2c0689de6d37197"],["/weixianfan/index.html","348f87e19dc5ad1647d64d71961eeb4b"],["/wo-de-macos-he-ios-she-zhi/index.html","f5c57ea67606b4c6bbaf50e3b2316b62"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","91dc3fcf10fa1916c86c3caeffbca988"],["/work-rules-mindmap/index.html","d911253b58314003251e2a5341fd3d02"],["/wu-han-chan-jia-shi-duo-jiu/index.html","9079b97804b193e565169645e1e98858"],["/xzlfbzw/index.html","bbd83df5f4579f121e6d7c5a3e624c3d"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","2af36d7a95f8e7c6e56e66661c5ab664"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","90b31ddb92ae142918b9cb3d197091ab"],["/yu-ming-zhuan-yi/index.html","ee379c33c9c947a19daaf9368f293392"],["/zhetengb/index.html","a892119515172ac89da0c8cb2ef6747b"],["/zzq/index.html","89715823d805f7e24153819245975767"]];
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
