/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","c76c58802a1b7cc34aa8eb7809480e58"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","635488f613ae79a78d22ac179063c0a2"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","70c16b6201fb826c9d8a706e62a568fe"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","d10ccb3d9dc229b024befc043f70aa3b"],["/PGP/index.html","414d67feee75a0bed064ca62f4aa169a"],["/about/index.html","b39e116c297cb3f526a45d747e3b902d"],["/applescript-jiao-ben-liang-ge-ban/index.html","0f920900b2bce11df24e80eb80b77748"],["/archives/2014/07/index.html","998e9f2804dfb6d4cf80c752c42d43a8"],["/archives/2014/08/index.html","addeeb9293073a56f0eaa60a93c19061"],["/archives/2014/09/index.html","c28621b5b0ea1236bcbd92e0dd4094e4"],["/archives/2014/10/index.html","973abf083265a14ab186f9b188d5689b"],["/archives/2014/index.html","cbb6be9dc4613a398180940adaf3d93e"],["/archives/2014/page/2/index.html","463d982e5f0f0e5b45ed5d22c8bec76e"],["/archives/2015/01/index.html","99b1ddfb8cee417329f0d0565df0511b"],["/archives/2015/07/index.html","3ec50b63403f498737709096657bd65b"],["/archives/2015/10/index.html","10ee23619aa80213d1cfbfbb5ae16ef8"],["/archives/2015/12/index.html","912ff4cd8e49f6511acba08346b91b40"],["/archives/2015/index.html","572d1a87a9a03d9675515f104e2a43ba"],["/archives/2016/04/index.html","220255d732fbccc14f29585b98190229"],["/archives/2016/05/index.html","3085997732492c74a4edc2d416d9c55b"],["/archives/2016/index.html","25edaaaa68c1242e0de66e388bb31ce4"],["/archives/2017/01/index.html","eca91b02a2ea3a5521e2324f182f73f1"],["/archives/2017/02/index.html","089b9bc77d4ac3e5529c95e0b46ccedd"],["/archives/2017/03/index.html","9bb0002b7850d987e8ec6687397150f2"],["/archives/2017/05/index.html","2f9ff428407fea79fe696f4b59d97808"],["/archives/2017/07/index.html","1c61bb3ec43928e8388a446709316b22"],["/archives/2017/08/index.html","93a50ab8482ba70ffd37d05d2ea8d8bb"],["/archives/2017/10/index.html","8b03f391c2c517bd26a0f85238f66a6c"],["/archives/2017/index.html","4d4de7c1d9d00254f54d873abbaa1633"],["/archives/2017/page/2/index.html","42b512ae82a4aba4e12514c63f4db7f9"],["/archives/2018/01/index.html","6d33bdba4ae07c2a01bdff6686fb07d7"],["/archives/2018/04/index.html","4385b31554fcc1282689e65c32eea612"],["/archives/2018/05/index.html","4b1f9ee17e69bf0865a99a45ad005690"],["/archives/2018/06/index.html","0a840ac751662d4d27b07f2f35bcbaa0"],["/archives/2018/07/index.html","6c5638031e54a8648b30211ed837e78e"],["/archives/2018/08/index.html","db93bd7cb5973c8d36b706178d84e9bb"],["/archives/2018/09/index.html","77ed4e90dc5351e39ac9538f433185f7"],["/archives/2018/10/index.html","f04e3e721a5d3b1116edb9645020051f"],["/archives/2018/11/index.html","c31e941172e6eb600c3578335efc8dc4"],["/archives/2018/12/index.html","04062e8e5462c413d80ec14675d10161"],["/archives/2018/index.html","faa23df0fdbbfd4a5968d38e3c75488b"],["/archives/2018/page/2/index.html","3abf39b82176b55e23d04fc8f8cd9fac"],["/archives/2018/page/3/index.html","b536cb21e98326e53eba8bb72c705f46"],["/archives/2019/03/index.html","f71a917609150c8e13e7ba476475c53d"],["/archives/2019/04/index.html","d7c3906047f9a0a0c6d278618b6c11e8"],["/archives/2019/05/index.html","cab1fa94fe39e75e844832cacd58ee4c"],["/archives/2019/index.html","e88d6faa9996d5f952859a2ee3fbd32d"],["/archives/2020/02/index.html","d36ce41bd34254e1d3c7472dc79ed0d2"],["/archives/2020/03/index.html","6f3338d322a3bb78137731f897ff5ddd"],["/archives/2020/05/index.html","cc03281d8db0b24bd72cbcdce456f984"],["/archives/2020/06/index.html","3fa2c8de81bf713fbb424cf932b5681c"],["/archives/2020/09/index.html","2b4ebaeafc76570a8a90ae34b50e7a57"],["/archives/2020/10/index.html","a66681288d9ddfb4908be888bc064ddc"],["/archives/2020/index.html","b085104b78874f7f203eaa2421086b79"],["/archives/2020/page/2/index.html","551f8b094440311d26aac9d619d091f6"],["/archives/2021/02/index.html","d380f14743a1dbca2dfca6177871c310"],["/archives/2021/index.html","e82b32eb6ad5b1358586e32da6ff849f"],["/archives/index.html","09c9fb3062b879a8e9628f825f4a3af0"],["/archives/page/2/index.html","57bf50528ca05a8365faa6075db8e3b2"],["/archives/page/3/index.html","9e02c2b919b82b92f5eb6bf980f9d103"],["/archives/page/4/index.html","de4bb6b3e46e5500c0394d1c61c06fd4"],["/archives/page/5/index.html","2e6d124245d4fd052d0459678b5f8fda"],["/archives/page/6/index.html","19de2a4f929e21ea3d8d17b20b455b23"],["/archives/page/7/index.html","2e148d2e6a2963be4081e55bbfc73bfc"],["/archives/page/8/index.html","638f2cecd5d7b0fe0c66a9e2a8f5ce01"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","99baf31167c76fe97ee9af2f229fb3d2"],["/bao-guan-qin-zhan/index.html","156dd37186a801c1fc38cedc7ced29a5"],["/bao-li-yu-qu-cai-qiang-jie/index.html","5e26257a157c49ff4591150dc709db70"],["/bei-dai-li-ren-sang/index.html","a7d5537561c953ec6ca7d900fe37eaed"],["/books/index.html","32d38fb8b881c99c53a68081677e024a"],["/categories/Blog/index.html","5647e885814d372eea2032f74fb65816"],["/categories/Blog/page/2/index.html","a3dddc47ca00a8233387c7ba733540d8"],["/categories/Blog/page/3/index.html","79c6502cd9e995b1716a5f832479fb4f"],["/categories/Blog/page/4/index.html","ac5ccec65f5ef2a052f38a47cc9fa7a2"],["/categories/Blog/page/5/index.html","00d691f4177d38fcde72136dc166c6e5"],["/categories/index.html","c6f717e0db75c72764f735aec6f53bd4"],["/categories/法学/index.html","6b236464a69aa0d2fa95296d61bc5e1e"],["/categories/法学/page/2/index.html","bc78d949d6f5fccfe4b5b4093306a0cf"],["/categories/法学/page/3/index.html","61cc486dc829f5f998d8deabbd335e48"],["/categories/精彩分享/index.html","4aa583bfde0d64273bc4d211a35edcc7"],["/cclisence/index.html","8d8d37cb46728f3d1947818406400813"],["/cetrain-issues-iv-for-company-law/index.html","5309910f4841a06360abbc76a2f70c9c"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","52b36c1423cb2e61af248a879ad3c54b"],["/cs-hubei-2017/index.html","391be2512c93514abf89a665496ba941"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","48c5f2c0d995de594a02e0ea05099635"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","0517d75401ebe0981181b356d3d7f12c"],["/due-pin-workflow/index.html","3a91b0aa19d58af282a927162e7f043e"],["/duo-ci-zha-pian-shu-e/index.html","e0834f0b92caf56d355d5a515cb2111a"],["/expert/index.html","6f8207b74107592ba8ad8162af107e39"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","25875614b241ae939a33c4b59d695727"],["/gang-jing-wu-ge-ban/index.html","e8f7ccaf18a2baae6aed6b5f18317643"],["/google3756ddc34336b7b9.html","9312156c629bf06224f867377d591993"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","4b6201527c3cdb06c610ec1125c27ba5"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","523d315cbe8a27fe6898bc65adebf3b6"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","5a76a58460e7096a2d1cc3eee5f2ff5d"],["/hustlaw13/index.html","1e7f3fb030f2e09ad4034162f3bdef9b"],["/hustlaw14/index.html","ee37fee04b3a45f3cbc4161d15b34bea"],["/hustlaw15/index.html","983db024486cbae5bf18791786e77a5e"],["/hustlaw16/index.html","42bbff18e1d5b1e95be01b84dcf2eacc"],["/icloud-terms/index.html","91dfb5c56e081719d10c9f4067c20aa9"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","91a3da4b9076178afbb1feaf86f18185"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","88647ed9792e9fcdaa1e75a2312c48d7"],["/jdsnk/index.html","98448141bc81efa7bbdcc434750f0a9a"],["/jian-qiao-fen-xi/index.html","e82ab825729ce6d41a50ddd7422d99c5"],["/jianguoyun-keepass/index.html","f08b71e8218e95a218d42d6f5910c408"],["/jin-qian-bu-neng-mai-shi-me/index.html","00eb14e525382a46a9a9e73a7f7497b7"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","2bce5c23f9caaae3ac8209f4b2f4bd5c"],["/latex-times-new-roman/index.html","1228276d38dc1234bf4573c9f8b62f7f"],["/latex-yu-lun-wen-pai-ban/index.html","b8c1f290dc8ff55567fd8d546439f062"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","2eb06f216431d426d634df1c9f28ea88"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","3288efc463de4fbf47e69a37530367db"],["/luan-dan-20181116/index.html","9d61257933ef60e8793b9f678ec40447"],["/luan-dan-20200217/index.html","dd54b8a3b6f4cbb44a56c70a21743805"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","0491aaa354bc7f0873cf6b4eb9572911"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","17ce6603163323eb1c73d6eb41f559d0"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","4107dc566447bf5cb7af4669ff57fc30"],["/movies/index.html","7097ffb801d02b0f791a38dd4d8154bc"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","4a0b523298f45af5570cef9b0d10cafe"],["/node14-bao-cuo/index.html","40db3bfaed047454b162519abceee49e"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","7bac15c05f6a33c2337cf2c2ef707ec6"],["/opoo-zhe-teng/index.html","24547e890400deb24cac62e4d5f4ed1c"],["/others-00s/index.html","a33337600b42f3e116b6528674932aa0"],["/page/2/index.html","e7e7b89dd9df3258c0060fe25fd505f3"],["/page/3/index.html","e86bf5361b54f3ccfb755a46ff1ff2fc"],["/page/4/index.html","fb1a4c47259519526c8aae6751e0d3da"],["/page/5/index.html","8505fc8059af8d8c3e153a41f97b7852"],["/page/6/index.html","3a2e6f69f14b7c3bebffe341861a5c8e"],["/page/7/index.html","c2ba66568c32fb7916b6502b0a59939a"],["/pan-gu-zhi-bai/index.html","8bd3c10c60b1e1aba1df7ff6480d9e19"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","0189a8828d754a25726d73a5064813ac"],["/posner-homosexual/index.html","ea61541c0cf112fef861a3fac6690b48"],["/qpdf-shi-yong-bi-ji/index.html","bb634af4d96f19aada3632d408d23159"],["/qxpj/index.html","5be20ea39bc638d6d39471720a5324f2"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","2b60ca07c07e4d3584f5b2e3852998c7"],["/shuang-pin-vs-quan-pin/index.html","12d4e40cc995e82f60dc016cf6f9fae6"],["/shuo-shuo-xiao-fei-quan/index.html","fd0a4cf482892481f9b0a8ddd9a7c5b7"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","14c124f894351a17a66cbcd4f09d75ff"],["/software-reverse-engineering/index.html","ea618039fc8ffd4d3c40824264aaa687"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","eba6651e3609847dee0558e89323d84f"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","dd9e43e3b3ad963f499d52ea6e3a99b6"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","a434184a2f39cb35d4d3dfafa0bf31be"],["/sw-register.js","6b3505b9e48810c2f9c717e861776085"],["/tags/2017/index.html","9094811a5038f707c84968afe090f324"],["/tags/APP/index.html","9b28d030a7843038bc42ce9e9c79367e"],["/tags/Apple/index.html","74179b770e37678b01f55df4e684111b"],["/tags/AppleScript/index.html","4cf35538e19b7f6ff1a06e1266277658"],["/tags/Due/index.html","b8136bda387c1fa1ac3d90a5f8fdcc2e"],["/tags/HTML/index.html","b9925be1ebe85d4fa9b9bf0725696472"],["/tags/HUST/index.html","c49b091697d4c509652b78ccfc871e03"],["/tags/Hexo/index.html","6254c8b5cb0706d1d9cdfeb720fb0a55"],["/tags/Homebrew/index.html","561cd571df0b4fcbd1d57f45c507d0b2"],["/tags/KeePass/index.html","47d15de70d36f31c92eaa5f98384b3e5"],["/tags/LaTeX/index.html","d8b493b531a00b2b63e35cc8242390f8"],["/tags/Namesilo/index.html","a050e32ac3c2ea6aefbb8c059cde2d08"],["/tags/OpooPress/index.html","98a884a3d35011c05bc0ead0dcf9733e"],["/tags/PDF/index.html","eaf600937d4ca78b939c4a015250b3fd"],["/tags/Posner/index.html","6a058fe51721746d89a159325a96cf79"],["/tags/Python/index.html","318bad1798dfcd397be8a6a903fdec9e"],["/tags/Rime/index.html","2e54260511547ed585f4ca207be04e03"],["/tags/Tampermonkey/index.html","39c6afd5e8204bbef7adb91b730c702c"],["/tags/ToolMan/index.html","712195f2d81c84ef74622d5c3d0846b1"],["/tags/Typecho/index.html","26e0d0ea5a301c2e957d7255cf076706"],["/tags/Workflow/index.html","0ac650b98afd73120ace211ea95e931e"],["/tags/cc协议/index.html","4a1062bc6b77876a7f578f4f2bf03b42"],["/tags/iCloud/index.html","760aa09b4f68c17edd74afa8ed9bc877"],["/tags/iOS/index.html","52303e1f8e7976ba0ac816c051188e86"],["/tags/index-1.html","40e651d62988bea3ab2cccec1e2b05a5"],["/tags/index.html","40e651d62988bea3ab2cccec1e2b05a5"],["/tags/logo/index.html","67efeeea95251e9c2653b385a712031d"],["/tags/macOS/index.html","44b31381df338af9fba9b755812c524e"],["/tags/vpsmate/index.html","3dd08b6ab09249b8a017deecabe794df"],["/tags/zsh/index.html","898d322870565a29ba78587d5b016ba1"],["/tags/乱弹/index.html","7a47b1dca3d0a13044f4117c6801a19b"],["/tags/二倍工资/index.html","5d0a145842ad09e9bb7d0cd463f1eb5f"],["/tags/二维码/index.html","4490c92ea6e6c3e95d65efffc1acb742"],["/tags/云盘/index.html","44f0c8c6ae96b76b8cb5a6c0098f1107"],["/tags/交通事故/index.html","e74b64b7e6b53ea7f231aacbdbe5773e"],["/tags/产假/index.html","2c1ba5de237a077f5c631f635c8ccb64"],["/tags/人身损害赔偿/index.html","9315a49fc5d68a8a6d28b976cab08d8f"],["/tags/代理权/index.html","03dbc8346bae5a8ff5199ece6f234156"],["/tags/优先受偿权/index.html","81415cb2f32dc19718023fc09867b91e"],["/tags/作品/index.html","85f4dbaf267692f65dee651e2eb46ad1"],["/tags/侵占罪/index.html","8baf139afbf0f5571e6c0575000f5e53"],["/tags/儿童权利/index.html","9659d4b53e78d5db4ab0a7f0c3653c62"],["/tags/公众号/index.html","f9140ff7b3b63368ccc17f546186eef6"],["/tags/公司法/index.html","dce05ccd2c94c425b718c431ceda6fcf"],["/tags/共同财产/index.html","5b648fa49a67b348fef1b2815374ebd9"],["/tags/刑法/index.html","4b6dded0646c8599837085e6397fd68b"],["/tags/劳动关系/index.html","2696a3e8d7c050797444057edf386808"],["/tags/劳动合同法/index.html","1dcce48772cf27713bf30da80c625bcc"],["/tags/劳动法/index.html","15f289c0be73f483d0c6b3fc61ebca15"],["/tags/华中科技大学/index.html","039cd15cfa62544bea3385ef60ab3ca8"],["/tags/华中科技大学法学院/index.html","cbb82426910403ca8636f4625efc02da"],["/tags/危险犯/index.html","9f003352f425612e691d3399c8f66c85"],["/tags/反向工程/index.html","02ae96981cf9adb3a9d453bab1a8782f"],["/tags/发行权/index.html","28b4a5ae06af7c975f61f9d6b1d2ac6a"],["/tags/司法解释/index.html","cefb09415b81f9c741bdfc05c035f08a"],["/tags/司法鉴定/index.html","8dd5a0d690311bc61fe0606bdcff61f4"],["/tags/合同主要义务/index.html","fb1f25d19e35d981bbfd1428e1c1d9aa"],["/tags/合同法/index.html","52b34401e0094d698abb81ba13092a50"],["/tags/合同附随义务/index.html","23a1889b86b67df8983a4a620277fdbd"],["/tags/合理使用/index.html","2a86e92fe3988781f5fe5d547010edf3"],["/tags/坚果云/index.html","69bde2d5e6c2a1404e8dfbbef716bdfa"],["/tags/域名/index.html","fad4e63f756bb986af3c7ed751a7eb66"],["/tags/字体/index.html","c8e206e0a12e7daaaca91a73691fab1c"],["/tags/实害犯/index.html","2932a12bdf65f6709058da47024e6aa5"],["/tags/密码管理/index.html","37c12184d8a7441c2de54fb0f8b4c072"],["/tags/工资/index.html","069c96fbc2a346b3fcc66e523a94115d"],["/tags/待履行合同解除权/index.html","72ee25a8d7598bf97e32c16c89a0a3ea"],["/tags/律师收费/index.html","26263211dede35c0e094c216eb4082b4"],["/tags/思想表达二分法/index.html","fd7eb099c3d6eb350ef25c3e5e6684fc"],["/tags/思维导图/index.html","dc7050b706c5da0a8fc832d082854b9d"],["/tags/成本收益/index.html","37feaebfc33d31df3b5a4889f327dea6"],["/tags/成长/index.html","32a26152079950f847b496f99ff627bf"],["/tags/技术措施/index.html","7581f5053a02df843362784bcf7e315b"],["/tags/抢劫罪/index.html","6cdb190de753d1cb7c763c881d664549"],["/tags/抵销权/index.html","a1e25fd470048abb1e7691a56e687b05"],["/tags/排版/index.html","1c0ee07fd9ca5aba3bfb41f02be7cbe2"],["/tags/插件/index.html","419c160dbdba5eddd8bf33988f75b9cd"],["/tags/搬瓦工/index.html","1e76131c0f8bbff6049b273de142053a"],["/tags/故意伤害罪/index.html","7abc30aa66c22ac51d5bd509eb1cc8d9"],["/tags/效率工具/index.html","20532f5e5ad73bb5474c8bb9cf275027"],["/tags/教育/index.html","ae896f61ad17cac6559f5fcd57c289dd"],["/tags/断舍离/index.html","bce499bccabd01e62fe6dd0c15c451d3"],["/tags/无固定期限劳动合同/index.html","e0b3c66fa14ab199a4c01fdf620cf22d"],["/tags/最低工资/index.html","7f82f453dbae886417e97689b4e759a2"],["/tags/最高院/index.html","af287b07c7b14c3645bbbf7352fba597"],["/tags/机械键盘/index.html","5771a885827d214a10a01072804bcff5"],["/tags/武汉市/index.html","144fb683137fbf4eb6a6a4736af9baaa"],["/tags/民事行为能力/index.html","2532cbcdba4b43ed3df8a19df5078982"],["/tags/民法/index.html","00a4750e9a2ffbcf6a2149cafae6322c"],["/tags/汉字/index.html","d3a7db67440285d6d0d8f5fccc7341bd"],["/tags/法学/index.html","fc251aca012c02f72341e7f10314468f"],["/tags/法定许可/index.html","b4e58ff74c98d41235f559025b437021"],["/tags/法律/index.html","763e965ff2a74e6cec7addd91b09c78d"],["/tags/法律援助/index.html","85191fc6777b96c23b34e35fff7044f4"],["/tags/法律法规/index.html","178f840360d87684d8f33ff83dc159c4"],["/tags/法律经济学/index.html","4f683e144e4d5e3ed9b01e1afec0d2aa"],["/tags/消费者/index.html","f4ddc9b96698106af37fc7dd9e7d6c37"],["/tags/湖北省/index.html","b6af3e693cfa6e7ec14ab12f7bde7f89"],["/tags/熟人社会/index.html","c312633dc2a70ea51736383e7105561f"],["/tags/物权法/index.html","22e795d1287afc9444ec5b4c38b25772"],["/tags/用工之日/index.html","6fe2a5d3d351bb3724e3fb6e7d663425"],["/tags/电影/index.html","c1c9312fc817af057d7a51792ac5635d"],["/tags/男女平等/index.html","7ecee49ddd3671f6abaeb5649bebae4b"],["/tags/知乎/index.html","6dd48ec93da9cc25387dc1ce0f633023"],["/tags/知识产权/index.html","c6c8699432a3009e4773acb7c31cbb1e"],["/tags/知识产权法/index.html","1cbfde5e29308fbe37a451370d13b997"],["/tags/破产法/index.html","807d5912f1a7538b41f5ce8d65b2f413"],["/tags/破产管理人/index.html","2c42b1e330753c2955aaa366eb7efe46"],["/tags/碎碎念/index.html","ec3c00bdf51bcbc244c359e5163e75e2"],["/tags/社会责任/index.html","0f2c4569c7b2bc68fc5bc594e54c1d0e"],["/tags/社会问题/index.html","c64860515db3b72ea8ec51b9bc9174f6"],["/tags/神经科学/index.html","25356f7648ba912a170cc21c692ebccd"],["/tags/经济学/index.html","85509a3bdf0d89b9106f1f641ead61d6"],["/tags/结果犯/index.html","0ed30f91915e2e237d17fc32e195d87e"],["/tags/缺席判决/index.html","b11ed19ca7bf54ef05bbd4406f02803f"],["/tags/考研真题/index.html","0d232b32c80539a1a21eae49b3a2a802"],["/tags/著作权/index.html","f9d81f5b368006b47023264d069acc40"],["/tags/著作权法/index.html","af8fc007414170cfebb9ac2d17d50ca8"],["/tags/行为犯/index.html","798dfb9a029d5f06227678635bd1ad28"],["/tags/行政不作为/index.html","f2318185938d002e5f685d91e4087395"],["/tags/行政救济/index.html","2f3d5a82b9aa97cfff432925aede636c"],["/tags/行政法/index.html","c2ee704695da687330f29e1a520ae394"],["/tags/装饰装修补偿/index.html","afff7277528ebf0fcb4f6b53533e9a66"],["/tags/观后感/index.html","2a4792bf0a2cd6d2f663366f68f5e337"],["/tags/观念交付/index.html","bacccebea697e53d37b6b00b48eec8cb"],["/tags/计算机软件/index.html","bee7cf3d8b320948519644be4d2bb503"],["/tags/认知科学/index.html","5490df531502aa56289fb8001a2a2dcd"],["/tags/论文/index.html","a2e9b3fe7d07b8aea40ad4cf0a02df82"],["/tags/诈骗罪/index.html","5652692788cd75dcb71ece411bb1888a"],["/tags/读书笔记/index.html","abc61b2c9e09f1abeb18cd6b45f5d3ff"],["/tags/赔偿标准/index.html","5619c4c619c9a403af65afd752c7274e"],["/tags/输入法/index.html","d2c4fd9ff8b1e80a9e38cae2c2bb77b3"],["/tags/违约责任/index.html","c337251411add7d8a4b893837d5c232b"],["/tags/违约金/index.html","0e3d5a292a89a209402378c5c4fb6d08"],["/tags/释明权/index.html","1168841d217b9c9a7fa62ab832212ed8"],["/tags/隐私/index.html","bf41ac659c8c3cc6423b42240bfd33e1"],["/tai-er-gu-shang/index.html","909cf023bf682f44694665894d19f157"],["/timeline/index.html","49675894d62e275cb02ad83fb894305b"],["/vcard-yu-er-wei-ma-ming-pian/index.html","4c6d568f95ffbf2a4dd7901bab970832"],["/webfont-yu-zhe-zuo-quan/index.html","b18bdb784dbb741e356c644ca9d6af33"],["/wei-ji-hou-ban-quan/index.html","c7e4a7b4dfcb5b8b9b3a3fae013adce9"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","d1b8dc6db9b0fe9946d827f7bfd26d40"],["/wei-shou-xie-html-pai-ban-gong-zhong-hao-wen-zhang-de-ji-dian-bi-ji/index.html","88300071fee488f861bef8c7c2750ce7"],["/weixianfan/index.html","5ea83dc1c01b278857ea36899142d732"],["/wo-de-macos-he-ios-she-zhi/index.html","263b8829d353d997a38d40faa24025da"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","4a26672b3ea3ae162f2ebd6ae9e4729e"],["/work-rules-mindmap/index.html","adb374be7293225047d6e1ce94e85f7c"],["/wu-han-chan-jia-shi-duo-jiu/index.html","6318afa5fc8ba8a2b16f99d474553dd1"],["/xzlfbzw/index.html","9aa13bec4b28ca9faccd326c1bf52de7"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","d45bce9c88f02fac3556502282ebe1a4"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","1b4a4a1d2398a1902ea7697b7926aac8"],["/yu-ming-zhuan-yi/index.html","ce1ae2f3af9d78942d0cd89f2fea7f84"],["/zhetengb/index.html","6389a0dc930113ef72cb6b0d42877dda"],["/zzq/index.html","562ef3d17a40fc26a4d4f131554da640"]];
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
