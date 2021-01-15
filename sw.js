/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","380096edfb451604aad3aef7049cad85"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","227b18ab6d8afd117ee2e93841405c3f"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","47b63df4ac962a48c4948d054b6311f7"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","39ac085699e379fbbc2d2a22b08c7187"],["/PGP/index.html","c8cb00b97f4041c6a6a21e9d7ec01340"],["/about/index.html","d3c5ab154c8817a67686c02c326ea105"],["/applescript-jiao-ben-liang-ge-ban/index.html","d94569c871dc10fa3eaa2b804b92bf5f"],["/archives/2014/07/index.html","736355332b3c36604bb8b6ca3af0bfe4"],["/archives/2014/08/index.html","de8a8c97f583fe9743f78d350be384a0"],["/archives/2014/09/index.html","23e48285263818ebb23b821c98f59cb5"],["/archives/2014/10/index.html","86d19bcaea6d9e60d18a4aa680b41d56"],["/archives/2014/index.html","80c12c2ac6e7d8dce85679204d17c87b"],["/archives/2014/page/2/index.html","71cae82ff9abd698482b984e165cd37a"],["/archives/2015/01/index.html","e45f7fa907b215f0f8bdf5cfbe503134"],["/archives/2015/07/index.html","602b611c30eca3a1bab9310ee6834c8d"],["/archives/2015/10/index.html","e5da804fa36eb80c9a38e86ce28b6fa6"],["/archives/2015/12/index.html","804eb6e71ccecc9f626641c7e94af4d3"],["/archives/2015/index.html","e526f762deb79f4429e9b99963ee28ed"],["/archives/2016/04/index.html","2ed38ce2b662aecd50f0a0764a1a22e7"],["/archives/2016/05/index.html","1b375405f00aa187fd4f06e4199b8294"],["/archives/2016/index.html","5cb50b9842f2fe618c5cb3b83e39fd86"],["/archives/2017/01/index.html","63accd2ad315435b0da3293b85bc904f"],["/archives/2017/02/index.html","cdc695283a77faf920e1c383c2346a6c"],["/archives/2017/03/index.html","dec346175511cd2f6a2a31a349b88095"],["/archives/2017/05/index.html","5c828ae1a411c394d0daf4813e815197"],["/archives/2017/07/index.html","68d1efe56cfc47b542928c1c5f9203f3"],["/archives/2017/08/index.html","ebad94ef0f0f6c167aaec8558b7ba3ae"],["/archives/2017/10/index.html","09751bcc8da6e2d9a72b420d9686e23e"],["/archives/2017/index.html","4ad35c5540c23a733cfeb62e7631be63"],["/archives/2017/page/2/index.html","e365870276dbf1ddc83ce38ee3edf212"],["/archives/2018/01/index.html","bf4c95864a792bdbf6a5b0400cb9a286"],["/archives/2018/04/index.html","8c64e9625f4ac7e58648e89069931feb"],["/archives/2018/05/index.html","6de9e529a6dffdc0a3b50f5553d14b3a"],["/archives/2018/06/index.html","0b6c98cf4f508a3bbefb0b3b3bfca122"],["/archives/2018/07/index.html","34185eb1cf5a1e1fc308be1033f7e441"],["/archives/2018/08/index.html","e14a56aa0579c0c7a58cab146d86c662"],["/archives/2018/09/index.html","994fafad049bd1aba1d51f21522ea2f4"],["/archives/2018/10/index.html","96d2504fdac1c8a60bc0755634fe81e4"],["/archives/2018/11/index.html","d3658a735120661d66c185834b6d7d3a"],["/archives/2018/12/index.html","c76ff17f4c9f018e3a035eef6312d965"],["/archives/2018/index.html","f84ab665de7954dca15113889689e43d"],["/archives/2018/page/2/index.html","7a3b2d3eb1445d20a6bba0dd5dc9ac85"],["/archives/2018/page/3/index.html","8cdb9407432ca84835c7300ac6361e95"],["/archives/2019/03/index.html","189f5615ad8a4e7b8c0569cd65504a01"],["/archives/2019/04/index.html","90f88406324c23ee2eaef572b08a0e61"],["/archives/2019/05/index.html","eddf1ccf9aa5b46adb05bf3bc3ff9f3f"],["/archives/2019/index.html","cb8606effae19c947c7cbb575c2d516c"],["/archives/2020/02/index.html","8e0e4c915c76322a15b658d93cb0b5cb"],["/archives/2020/03/index.html","9ae6358e7c4e549ab5dc38bd5b1e2424"],["/archives/2020/05/index.html","21eab1ca47690a826cee016bdbecd223"],["/archives/2020/06/index.html","0859dee61757ddd1cdc61a6144e5eb8b"],["/archives/2020/09/index.html","3128d692f2cd8ed357f32a6d04dfbd71"],["/archives/2020/10/index.html","b27a4e86bd690ec61f1042c86115d1f6"],["/archives/2020/index.html","e5e244a9bb4ecc9b6c6d75a2bdd90374"],["/archives/2020/page/2/index.html","6f311db1625c5633887e68550a4a6c81"],["/archives/index.html","f25a9b6c85946ee08bfc1e2993d13a11"],["/archives/page/2/index.html","216a18f94498faf69c669669a3547f1e"],["/archives/page/3/index.html","8d540541d7a0f968114c2a6a7e3b716d"],["/archives/page/4/index.html","bf2fdc635b54a63c84da095af7ee9fe3"],["/archives/page/5/index.html","0bd4a2cc40f966247cd52a1a2a049785"],["/archives/page/6/index.html","8159feb9bfa8ca8addafcb80cb01e466"],["/archives/page/7/index.html","3027de8052536037b162f0a20a585bdb"],["/archives/page/8/index.html","55f3783a4f6c4e87676356aa33c1a0fe"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","1bc794b9b2dbc7ac68f3b69df3d2ad73"],["/bao-guan-qin-zhan/index.html","50b7a0822cb10beb2c7b00ec5b7ce476"],["/bao-li-yu-qu-cai-qiang-jie/index.html","077da1b4f6fd60890ccf70a1cdc0ae9b"],["/bei-dai-li-ren-sang/index.html","d7cd4ca7a1ef04c0e8f849da976a0ba6"],["/books/index.html","1e063bd8c10a9c92035ec1670ef8f1b4"],["/categories/Blog/index.html","cf9ab95df43b3203a5fb1bb621249294"],["/categories/Blog/page/2/index.html","068a65231e9a30884e75726fdb561262"],["/categories/Blog/page/3/index.html","155ff78fb95b72f7dc444d92baa914dc"],["/categories/Blog/page/4/index.html","729a3bc642a0b9ad9f1bc095a4322037"],["/categories/Blog/page/5/index.html","45a2ac33c0c8b2a406d5d1fb46c0cbef"],["/categories/index.html","04f22e00408f8184639ec819afc7bd98"],["/categories/法学/index.html","8185959c2a9f537e5c422e876563939a"],["/categories/法学/page/2/index.html","564e0e1d6a206f513162c8e001753267"],["/categories/法学/page/3/index.html","d2c428e160cde1a419cb4ce34bdfc637"],["/categories/精彩分享/index.html","1edcee795f2ab810ce3b97ed46e7d5ec"],["/cclisence/index.html","885fd2034e0c7e09befda7e7983c9cda"],["/cetrain-issues-iv-for-company-law/index.html","a1c4d8e8211731851cf72d360ec2ec8f"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","17b190e70d254404d5d721f3f3a25c1d"],["/cs-hubei-2017/index.html","ceebe69d1cf89307df8f7a456a442bff"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","27e600aed7f2ccc672c414661fca1ab1"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","fbed461bf369aaeab6b5fedae4333d55"],["/due-pin-workflow/index.html","b945ecb2426d81de9b275069bfae1e73"],["/duo-ci-zha-pian-shu-e/index.html","d1bbbd7eed3e77f62dd5587bad4114fd"],["/expert/index.html","6deecbee7221dbc4d3fc31e1a5cdac91"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","f3c61f817d7c80cbfdd6fdec01df72a2"],["/google3756ddc34336b7b9.html","dc883f3b2de3e3166fee949f286e825a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","1e5712d3150f3c21e69e6f69da81a3ac"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","ef980413ed9e81fe24005adb9355ee99"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","dd85c24a636a4e71c1147a0a868b897a"],["/hustlaw13/index.html","e46a1681c5b45bf7cc7b54245a785143"],["/hustlaw14/index.html","37a8a1076ac4b381d34bfa0dfbb29ab0"],["/hustlaw15/index.html","e178b5320d76ba95a162994cc6cca999"],["/hustlaw16/index.html","59d43cc59bf838afee3544633de11e65"],["/icloud-terms/index.html","79e7abb9546b1371558d6c5e5ef4916c"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","fdf8d0133b695b53ef62bc4ed6a0444e"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","444950d32bbe6bc73ca99ddc0f0a08a2"],["/jdsnk/index.html","a5d9ed195b07b58fec0fb549c903b26d"],["/jian-qiao-fen-xi/index.html","423151d4d987c0d93c76c205dbc8f798"],["/jianguoyun-keepass/index.html","e8aae42907316b626500e693e217b01d"],["/jin-qian-bu-neng-mai-shi-me/index.html","3b6c75877358c50518cd9d26cf262d60"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","6e0621873060a7cd6cbfd1b3f74da023"],["/latex-times-new-roman/index.html","c5694e2a4047aa6aac02037e15be5e77"],["/latex-yu-lun-wen-pai-ban/index.html","f0155f1c5dbc267d1ed090d887ddfacc"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","9c87ca4f35ca0a6c6930740ef883e875"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","c49b1db7c8e1f4e221fd608d65f0acfd"],["/luan-dan-20181116/index.html","1cfb8209df150d26b7b0233f450774a2"],["/luan-dan-20200217/index.html","eb723e7a27d616705ad6d05a1e967f60"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","3877d90f98dedf7c618a2162c6cd9902"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","8c12de1f38ff45ec3a09bb48bac491a8"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","3a3b22546a368015a62a3d6c05c70429"],["/movies/index.html","20727d83ce2a0d3fa56f74a433ff460a"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","39570d6064d1d25b9f490c02675356e2"],["/node14-bao-cuo/index.html","1ab34b321342e72f412eac65ba4a4d1e"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","04efee80be74d7569bb3a937cbbfdc89"],["/opoo-zhe-teng/index.html","3ba406c6535009d50317d41ea2a5a253"],["/others-00s/index.html","18cb75238cee60405bec2ad0ec76612a"],["/page/2/index.html","35fafd0271ad5660e0b8eb3245246de2"],["/page/3/index.html","b5051987963ddbfc6f43797c6ff3a59f"],["/page/4/index.html","cb5ea9d2cc1e478f6d64311f9d7952a0"],["/page/5/index.html","69b6cfcc990895d939c3606adf9b2384"],["/page/6/index.html","a0532b77ec3e80c40942586511950fb7"],["/page/7/index.html","c63fb7f6c4afff8387601c3a835b207f"],["/pan-gu-zhi-bai/index.html","49058ebf64fe26e01e4d371da306ef05"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","004c3be3077b391d6fd59b69b1252a16"],["/posner-homosexual/index.html","5b9d42e4f37b73073c7c7f20b1d351af"],["/qpdf-shi-yong-bi-ji/index.html","cbd1b77c76609c30146ef892b47f8cc8"],["/qxpj/index.html","7910225a1696f8e8896b70435447137f"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","3f26e15c55fb29cf1cec9603120937e1"],["/shuang-pin-vs-quan-pin/index.html","a0eab68b1142a07bf27feaad65faf1bc"],["/shuo-shuo-xiao-fei-quan/index.html","babf1f28ed7aca1fa32c8ab17eafa6d1"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","031ef67438718ba6b1c0e7c96a66507d"],["/software-reverse-engineering/index.html","8d9bc73c7ca63822fbb9d17eb06dbc89"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","6a1d2d005477d0608efb9e5b782daede"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","755eb6751809148b9d99bcb2eddae2da"],["/sw-register.js","562131c184a99ac2d28eda8a139b0c63"],["/tags/2017/index.html","1926f42aff689ff38c31ac8d95368005"],["/tags/APP/index.html","d17fed60845ab20e421833dc02871b4e"],["/tags/Apple/index.html","cd45ba3149d0c6720693d68f5f12b6f5"],["/tags/AppleScript/index.html","5a4507023f5e1707b3b3cdade6fb3d64"],["/tags/Due/index.html","c278511119026713c4a0fd3d94bd5991"],["/tags/HUST/index.html","749592810180ceaa9794f8c9c3295f66"],["/tags/Hexo/index.html","a12a9d5cf8bcbe10c1d64bf936d3a701"],["/tags/Homebrew/index.html","62650a504780e20058ebcfce58b689eb"],["/tags/KeePass/index.html","4fa5f5978066f54725a9bfc6604d2877"],["/tags/LaTeX/index.html","f2d127c55fbbe6208c5bf9fb3d58ebca"],["/tags/Namesilo/index.html","58f88cc3f65291d6dd996447ed8a7a42"],["/tags/OpooPress/index.html","3ec5160ceb7addc4f4a3fbd5ff4b8a7d"],["/tags/PDF/index.html","3583cc9008cc9a8eae44c2b578776d7c"],["/tags/Posner/index.html","14d7bf4f0031a341e260b93f3af58b53"],["/tags/Python/index.html","105bdecd53c57a7bdc10d3876c9e7af1"],["/tags/Rime/index.html","22f123e01cb77c30f5b32b1e954ab8b0"],["/tags/Tampermonkey/index.html","d9b69ebf44337c6b8e4527c871f2629f"],["/tags/ToolMan/index.html","59bdd2d383ecc69889a6a6a0f49521b2"],["/tags/Typecho/index.html","40928b2078daa357b89f4de7c0469426"],["/tags/Workflow/index.html","627931322e56edcd236b592d38a2005e"],["/tags/cc协议/index.html","a1b6f3088b3ad9eb0ccec786baa805a0"],["/tags/iCloud/index.html","71722996f657b7f9f10facba7dfa8497"],["/tags/iOS/index.html","1bf99267857e5e76f6a064257ae62207"],["/tags/index-1.html","49a9ff3d2df63587478da24843d02fa1"],["/tags/index.html","49a9ff3d2df63587478da24843d02fa1"],["/tags/logo/index.html","16c1e2f00b50def7cc1b442af6f1ae0d"],["/tags/macOS/index.html","d1de796ab26c47edde49f4a8111f4e7c"],["/tags/vpsmate/index.html","92bd8e1c89836ca86d5e3ed37479e304"],["/tags/zsh/index.html","9526c0447ad598a7d48f4fc8a5b7771c"],["/tags/乱弹/index.html","8ed4309b81c69d93fced4061b912b8f2"],["/tags/二倍工资/index.html","d4adde095490b26cad0214cb88f3ca5b"],["/tags/二维码/index.html","9744545d098c00f0d23f8ab47420d7f1"],["/tags/云盘/index.html","046577cc2faddfacb5cbe9b85de1f62d"],["/tags/交通事故/index.html","12e77e7a2b0db0574a74767a3173fb0a"],["/tags/产假/index.html","22fe6a6a5f51baebdf86ae074796f90b"],["/tags/人身损害赔偿/index.html","f2d6b4c88714b43b3eecc5cc6d6d1ec1"],["/tags/代理权/index.html","84cc6f857e8a778d27a5c8aeeb8ddafa"],["/tags/优先受偿权/index.html","71496a051e44994dbe3f9ffdece16348"],["/tags/作品/index.html","ff1afa2ebc3d9cc5a0ad83d336edf3cb"],["/tags/侵占罪/index.html","a6ab801920a2c712b76c95a8f3475209"],["/tags/儿童权利/index.html","7a8f8b40fb9fe814088a777321438036"],["/tags/公司法/index.html","d2e9fae3d915908acccc75cb42907e14"],["/tags/共同财产/index.html","ead91ce2c9cd87b4aa77d2bad31dc3e3"],["/tags/刑法/index.html","863bc3db0ccd616c184c7138071c172a"],["/tags/劳动关系/index.html","76511cc5a49d0c863b8bf5d895eb01ad"],["/tags/劳动合同法/index.html","20e676a74c3239e68072ae17c7a3b2b3"],["/tags/劳动法/index.html","e3a710c60d0ed2ae80196fa59183bcc4"],["/tags/华中科技大学/index.html","818f7130014d261debb556394002bfd9"],["/tags/华中科技大学法学院/index.html","73b85f06960f4aa0bd616fad15ce24e7"],["/tags/危险犯/index.html","b1bba4d23fcbacf98339e7a86b45951c"],["/tags/反向工程/index.html","f4a2bad08b49fe6575e900c3e75936cf"],["/tags/发行权/index.html","fcec2629b1d5b74feeb17b15e14cbf00"],["/tags/司法解释/index.html","737e65397577358335394fbdb9c1010b"],["/tags/司法鉴定/index.html","267fad1f0205f06afa2dc054bbf244b6"],["/tags/合同主要义务/index.html","fbf96f9ed2d7d9b0982f1110270978f6"],["/tags/合同法/index.html","6836e762e0daf925be0d05ada4059362"],["/tags/合同附随义务/index.html","09db99b86c752c421912d2244ca6a522"],["/tags/合理使用/index.html","e0e0c6635f5aad1a4ac615a276ca8626"],["/tags/坚果云/index.html","b062bcb3767057604178a0d1973c4435"],["/tags/域名/index.html","5e7ff14ddeed77275073bdcb10d2e89b"],["/tags/字体/index.html","a4941c26b5d0618608762415fad08453"],["/tags/实害犯/index.html","4877370f529394d0d3b53056ef267136"],["/tags/密码管理/index.html","3903c38d16ccd95531aad02ed362fdb2"],["/tags/工资/index.html","c8716c4581089846e8e34aa44c1acb5f"],["/tags/待履行合同解除权/index.html","58599ad173e6da39e792edb34ac88c9e"],["/tags/律师收费/index.html","0309022f3543fc98ac2a2049217c13b7"],["/tags/思想表达二分法/index.html","70d86d8ee0edc287ed3d0c7e23227d2a"],["/tags/思维导图/index.html","1b93b1b1797ea7cda8f5848c7a62afaf"],["/tags/成本收益/index.html","bc53e7af91516bb25ec634190a3148be"],["/tags/成长/index.html","7b00f4f68c1d27198a61f921b6a8accf"],["/tags/技术措施/index.html","6da20fd9c79926333b2abaed28fa91c0"],["/tags/抢劫罪/index.html","57d6a7ff3a5cc36577972ff02357473a"],["/tags/抵销权/index.html","77cb41af5f352159359d695642044815"],["/tags/排版/index.html","a1bf54e53019c75011d900829b5d2eeb"],["/tags/插件/index.html","1b444a711874eccc36756b42da3600c3"],["/tags/搬瓦工/index.html","54b7df1fd3f3ade1d724f93f69a3142c"],["/tags/故意伤害罪/index.html","7e3855860007a9cd2560b584f7f20ce1"],["/tags/效率工具/index.html","36a34014a7267904c8cb48d970a6d47e"],["/tags/教育/index.html","bd2b63dcf59e764bdc0ca82283dcec16"],["/tags/断舍离/index.html","530e69317a175cdf5a6631c3e2e1b4e0"],["/tags/无固定期限劳动合同/index.html","2be7f1eefbf2883fee8c94b1493647a1"],["/tags/最低工资/index.html","eccb6482f96f6de6658ca1db317f5103"],["/tags/最高院/index.html","e70783be8d542341b73c16966d6debc1"],["/tags/机械键盘/index.html","593781614a7eea8ea47b0c11bb390533"],["/tags/武汉市/index.html","d437818c07f7a914c3cc774987edbef4"],["/tags/民事行为能力/index.html","14f368756b47fef50dd45c127dec1d63"],["/tags/民法/index.html","7be7b00d640fe847e7292f4a04162e72"],["/tags/汉字/index.html","e1f299aca746e7b9ce103a69a418da1d"],["/tags/法学/index.html","0645699d34f17478895d837c41529160"],["/tags/法定许可/index.html","36974fcbd3c88430fc1a6009dce9e7c0"],["/tags/法律/index.html","61e466d650e28f8a8fc5c18f74e47fb1"],["/tags/法律援助/index.html","56a0784f5e1de824bb85dba57775bcb1"],["/tags/法律法规/index.html","24aef16defcb767951157c6c3bc9abb5"],["/tags/法律经济学/index.html","61a3fdbf79a02c3658b8c2bc91bbc384"],["/tags/消费者/index.html","b99f22f7be40b65f24a91b715c4bfdd0"],["/tags/湖北省/index.html","a089d11e7d28cd880d786cf5c8d77015"],["/tags/熟人社会/index.html","526454cc0d296e34f202abd55f58e8e2"],["/tags/物权法/index.html","221166c03807238fc6795653df6299ac"],["/tags/用工之日/index.html","0151d78654d41791afd98a97b862a00b"],["/tags/电影/index.html","bb5969bd465a5ad516b6da41fed94fd0"],["/tags/男女平等/index.html","8055ce507799c87b84e6b4c2a2a1eb92"],["/tags/知乎/index.html","97395a3cd6a7edfe0919380ccccc2f61"],["/tags/知识产权/index.html","96e29fd1f50ee4ed1155e9e99b6295de"],["/tags/知识产权法/index.html","9cf0e37beaf297b49dbf097f0b8bd6dd"],["/tags/破产法/index.html","40ae20cae9894f7f2ff5011610bdb717"],["/tags/破产管理人/index.html","f8f41d8183325ea1ce60e843c46b91c9"],["/tags/社会责任/index.html","48be6281cc98cb688280fc1d21df9361"],["/tags/社会问题/index.html","4a51a1b8edce55e611e7fceb35c1699c"],["/tags/神经科学/index.html","ede51644f9a6f527476dc4555f80c0fe"],["/tags/经济学/index.html","cf150fb2f69611e1174b57c8b1c05dce"],["/tags/结果犯/index.html","b570af51c50624f69a773ffd78ed1c62"],["/tags/缺席判决/index.html","1f2c9dd8a4a7f4e8343fbd4104683e4f"],["/tags/考研真题/index.html","dfcd04811d90da3b659489bc7c732259"],["/tags/著作权/index.html","59be7d6f60c1fe0ac10f18d46e182aae"],["/tags/著作权法/index.html","f92bf583672c0c423d2d9c0d181af5fb"],["/tags/行为犯/index.html","ae3320df75b53ca303329ad8db9b5d1a"],["/tags/行政不作为/index.html","fe08990107c8d5d93ee58bb46eafe87b"],["/tags/行政救济/index.html","c059ebff154df0f6d05a9fcfd348fbe0"],["/tags/行政法/index.html","2f727b1dee46ed0bcf8349ff688dcc38"],["/tags/装饰装修补偿/index.html","5084861eff8975306d16e047fdee911d"],["/tags/观后感/index.html","67e9c44c651a5f499fa20961d43721b1"],["/tags/观念交付/index.html","48f86cc89adbc9c353af790c281cb717"],["/tags/计算机软件/index.html","34a1cb1c7e4356c1fd6e293a60a62beb"],["/tags/认知科学/index.html","3df405b131c61d082b0383f19dbcb3d0"],["/tags/论文/index.html","0c9d3800123c3f23568f100f05d0dc2d"],["/tags/诈骗罪/index.html","c6bfb9dbd015d4ab4ac1ac3a16fe375c"],["/tags/读书笔记/index.html","b21aac5c8f263e246570224dadea6916"],["/tags/赔偿标准/index.html","96e15744ee679e4c3cc7ff395f9ce3f7"],["/tags/输入法/index.html","14ef18e41b5c90a0eb5f6faf07936185"],["/tags/违约责任/index.html","975977caea04dd49cb864c4aafabbc3d"],["/tags/违约金/index.html","1c1b5a56bdfefc907f5d8e68bfcf7293"],["/tags/释明权/index.html","4c8423c3c359f8fef482116f8e6e8c78"],["/tags/隐私/index.html","78dac469f8820bb7d0765fe8aec3725b"],["/tai-er-gu-shang/index.html","94bee22642ddb4729556c113d9978fdd"],["/timeline/index.html","a04a28406d0f8c6a4ed95987bef6313c"],["/vcard-yu-er-wei-ma-ming-pian/index.html","06a11e5542683ffbbac90e8dbfadf103"],["/webfont-yu-zhe-zuo-quan/index.html","f1c4a0ecad9c7e048ec49bb79a201799"],["/wei-ji-hou-ban-quan/index.html","25d9b1343a4d0665fcbfcc6ce5262ed5"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","9ceb8b14f8393fb842a329a4c71bd21d"],["/weixianfan/index.html","392b61b3a38c9da9276e3166af99dcb1"],["/wo-de-macos-he-ios-she-zhi/index.html","d12b210f00c9f508ddb7751d5ff52462"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","db2a65e47391eff645b61722dc9e0e5e"],["/work-rules-mindmap/index.html","3146064b35f2445a0350f9948e52509c"],["/wu-han-chan-jia-shi-duo-jiu/index.html","a2978ca01bfd10bfb9ffdeff0a6196a1"],["/xzlfbzw/index.html","83baeb526e3da111006b15ac1667471d"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","076b5fcd601801bb5165a9c1d8d6bb78"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","a6d394925ac6e41a128d0ecd7cc77411"],["/yu-ming-zhuan-yi/index.html","4b88310cf430a51803607b05c1a931a0"],["/zhetengb/index.html","e45d3cb95f895e4795b175f6f8a690f0"],["/zzq/index.html","0ceeff46d8078334cfece6d87b695e9f"]];
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
