/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","3be83d241ea4c8c3a72342414670ef38"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","03af79622abb62295a866dc1d869eea9"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","02223d86d8603a55d40d9bf07ff8a921"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","e7c39d8c2cb89aebd5133fece7043cab"],["/PGP/index.html","79c75a067d2ac315effb8a4c963eccc1"],["/about/index.html","b334dfb29fc4037e87a4295773b5b760"],["/applescript-jiao-ben-liang-ge-ban/index.html","9704d3cc84d4c2b6b2eebbc57284e041"],["/archives/2014/07/index.html","04840c73bc941e50a5d8d6800978f156"],["/archives/2014/08/index.html","afdcc24e73530e05eb373c6c05c6b136"],["/archives/2014/09/index.html","27cf570b61181d52d59eac8fcfbc998d"],["/archives/2014/10/index.html","2b391cc4fccac84131c26bcf3fb395b5"],["/archives/2014/index.html","91ee8bd31d230f7821d2a3f06d478323"],["/archives/2014/page/2/index.html","4b3ddf95c18e39da71fba3fc73f4efec"],["/archives/2015/01/index.html","2a026b4d500769a0d8ef6102e4c8ceb6"],["/archives/2015/07/index.html","3ea1e8e0dfe6287169c9e6484f327c9a"],["/archives/2015/10/index.html","2c710337f51c4440420129aa91a61169"],["/archives/2015/12/index.html","61e5558b0ecdea07bc9d8a2691d576cc"],["/archives/2015/index.html","c9bfc53ae1d966009ab5bcd7b953740f"],["/archives/2016/04/index.html","b687af7681321b5758c2289a7f39f6ff"],["/archives/2016/05/index.html","115a1aa7d3450eac6402cf955fe71834"],["/archives/2016/index.html","09f4c987afe96cfb6f8f21a0e2608b4a"],["/archives/2017/01/index.html","2cc22cb187eae53f687ff598dd17f7b1"],["/archives/2017/02/index.html","cccc80ebef5ed2dd4dd8d8a1e4c50c20"],["/archives/2017/03/index.html","b6d8bc5b6386a72b12adf428aa5d0d5e"],["/archives/2017/05/index.html","1e8a81a0390212cf51320a4e44b830ee"],["/archives/2017/07/index.html","7b35e5fa2623c66935e20594688e34a5"],["/archives/2017/08/index.html","a4d2dfbd93e39dd71cd77bc485bad65b"],["/archives/2017/10/index.html","9f9bbc3e9b97fd79be2af0f0c906b3bd"],["/archives/2017/index.html","bdff139d4864623f92de20ea942429d9"],["/archives/2017/page/2/index.html","7bc98b2cd7f777e0fb237c4000665d75"],["/archives/2018/01/index.html","41dba4e9a6ba476c6d9d2c2d5fe1966f"],["/archives/2018/04/index.html","99c1dffb3b6a9858332f50b405e36e3c"],["/archives/2018/05/index.html","f1672e85c264a3f83cee30bea917a4d9"],["/archives/2018/06/index.html","06b23895ef01cadcbb2a0d9ae5b860af"],["/archives/2018/07/index.html","e9b093fce85d10d861ddeef0ce0547b3"],["/archives/2018/08/index.html","6dfdf66a871fb5599ece32070afa9b7e"],["/archives/2018/09/index.html","49527ff4bbdd83332762e40c6f5c317b"],["/archives/2018/10/index.html","da2e10c8097dfe308735ede663a49bf6"],["/archives/2018/11/index.html","26a88ed6958467303878a20a5aa50e02"],["/archives/2018/12/index.html","2eeb1b469872e326e90e663b4cce6d5a"],["/archives/2018/index.html","81172e1e8cfb17009e930ae1699f1bb9"],["/archives/2018/page/2/index.html","30ba4555d86100776be33290db026fe4"],["/archives/2018/page/3/index.html","034853118c8f8a2cfb6bd05c1d5c01ae"],["/archives/2019/03/index.html","888ad62f43c4169ae4096fb2bb313a1f"],["/archives/2019/04/index.html","f8b5595c36b0c5e7c453656253ecb9f2"],["/archives/2019/05/index.html","976f94a94dc833bf10118821d70c0902"],["/archives/2019/index.html","7b8e164f372586e763cce9fbe2b76397"],["/archives/2020/02/index.html","8fa691696ff5e8c8e5a093ec4427348d"],["/archives/2020/03/index.html","4766452c509fd29ee41c97b0ca3f091b"],["/archives/2020/05/index.html","c4ee17b07f4f7da88f01b6affb923d65"],["/archives/2020/06/index.html","94c3c5c8e793b4a661729466c28c16e9"],["/archives/2020/09/index.html","19235d62f71f6477b80aecc5d7f3edad"],["/archives/2020/10/index.html","df885d98d31fd7f86f846d4f6501d45c"],["/archives/2020/index.html","2e9f6ba0d9c8573892c2566779c60569"],["/archives/2020/page/2/index.html","9941f3c278a926615a746ebe0456859b"],["/archives/2021/02/index.html","abab0a35ba3526979dcf170dcd3c1d0a"],["/archives/2021/index.html","f4d465369c567a434223fbc2d5946b2d"],["/archives/index.html","eea8cbd867266ad165e3ce11a44e1e93"],["/archives/page/2/index.html","ed389d4b6cfce230760f0e97be5d4214"],["/archives/page/3/index.html","fe01c9093ec48550a40ff8db8f87ab59"],["/archives/page/4/index.html","f224b1b4ce14b4c1c73079009726746a"],["/archives/page/5/index.html","3f808428a07b9ed8560cbb2163bf5f31"],["/archives/page/6/index.html","641b39aad3ef88c69c7405e42ee81b0a"],["/archives/page/7/index.html","5b2aebf3d77d3e7d5950c16a526b8be9"],["/archives/page/8/index.html","0a12c8a069d57ea066500548e7adb18f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","83c2dca62ae130ab48c592d7ae4364ee"],["/bao-guan-qin-zhan/index.html","2e33cb0dcc25bc01c2820e6856e7e178"],["/bao-li-yu-qu-cai-qiang-jie/index.html","82733620d9e690abd0b9d50220740f89"],["/bei-dai-li-ren-sang/index.html","adf8faaa6559ebcc5093211e7324c4a0"],["/books/index.html","d960d3ca607818ff7b3eb1460d0a1a0b"],["/categories/Blog/index.html","3fb62cc86e1fe2ccd148d2ce73219632"],["/categories/Blog/page/2/index.html","e493421e1161ec64fffd95568347dfca"],["/categories/Blog/page/3/index.html","951962b155d7b7b0e5c699d021fe0c2c"],["/categories/Blog/page/4/index.html","5e26b599122f56e3fd81a3482cfe4085"],["/categories/Blog/page/5/index.html","e5054514b4c8bcb88b13d42672ec7354"],["/categories/index.html","583f392fd5cb01ff22cf876db09cc229"],["/categories/法学/index.html","703c2f3300cf852ab9475642eab55918"],["/categories/法学/page/2/index.html","aa773946a964292db7c868d6f56ed7da"],["/categories/法学/page/3/index.html","82bd9471fc11c306de4a25818fec7d74"],["/categories/精彩分享/index.html","d081f11cfaafe5fd1a9fa165648a0515"],["/cclisence/index.html","86035b88108a4f6470dea27502c285e7"],["/cetrain-issues-iv-for-company-law/index.html","d9604cedd5c0c89dfd54499692a11b7d"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","6029303d19257044c03bfd54ce94edc6"],["/cs-hubei-2017/index.html","12ef0f124d082ba5930b03095312a784"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","8166fa9039ba6a6c06b856d9993f4506"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","192c1ab850ef51ee2a8426ad8a952ee2"],["/due-pin-workflow/index.html","5c6b85b457b06f1b5eb71f84e057eefc"],["/duo-ci-zha-pian-shu-e/index.html","c0626df5e02f6f4e61759751bce102c5"],["/expert/index.html","f7646a38700c83925dabd92f491c40b6"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","1da908ae7b2e326b3a1a9564ca3ff5d0"],["/gang-jing-wu-ge-ban/index.html","4b2521d34d45c6b12758257f66aa3533"],["/google3756ddc34336b7b9.html","a5ca6c26385fc15e70e8726d533239ad"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","99d63ce55cbd83a7a3e646e8aec8f1b7"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","f34e1488ab9c241461501b3840f3c4ce"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","f6a352dd0f8c5e97f2f4efdc88b44f64"],["/hustlaw13/index.html","732c2546d5b15e82166b0b5e885b847e"],["/hustlaw14/index.html","3d2debebe87b91e34ae18708691c25da"],["/hustlaw15/index.html","048504c188188bf8172f5ae9e65b1b21"],["/hustlaw16/index.html","b34c72fe682f869c6173cbf20bff0a09"],["/icloud-terms/index.html","ccebc77ba58a9e26da030568190f246f"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","989434792f56c60f7f28756d12a8035b"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","ac23ae448d63dcfd305b03ee58f22b28"],["/jdsnk/index.html","125b0c66950adb01c1af3b8bd303ced2"],["/jian-qiao-fen-xi/index.html","4b3e35407e43302c899fe0e77833fce8"],["/jianguoyun-keepass/index.html","e3f84067ed508209330305188fa4327c"],["/jin-qian-bu-neng-mai-shi-me/index.html","80f6b851aa320f03bc44a9dbd9882992"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","94c1ef984b75c33a189d782f4a5b60f2"],["/latex-times-new-roman/index.html","daca57adda796ae533a88b7aabb61626"],["/latex-yu-lun-wen-pai-ban/index.html","af124b864aa4ac5ec627db29cf244e06"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","9bf236ac9921aa76f42e1cd9322f757f"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","ca622957154f554f00b7f10fa6425195"],["/luan-dan-20181116/index.html","5958d0b16c8e782ecdb69c9c7f2ab3ae"],["/luan-dan-20200217/index.html","05b7af7c8d344bb46e788b5b0da9f805"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","815f0c25871dbab2aafdbf586b6e6915"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","d578ebc0d37de8567084ee56139df9d2"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","ddc51e74af1033d19967422e5785565a"],["/movies/index.html","3debfe6d61e8d5712ed59099e8d928c4"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","addda23233eeb7985f4b89a5048ed8bd"],["/node14-bao-cuo/index.html","7720d80900d0bee2aeabdcea0573e704"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","ab6f1ba373fef53b2e9357a2edd37e0f"],["/opoo-zhe-teng/index.html","ebf04747aad02acc9f417e4a39ca5eeb"],["/others-00s/index.html","884458df25c995e8a543cb357a5c6b3b"],["/page/2/index.html","17524c32698a874b074d2fa6782f63b0"],["/page/3/index.html","f5df3d15948ac434b606cbccc7d75832"],["/page/4/index.html","9246722fac30ee5da88aca8a3a3c6807"],["/page/5/index.html","dac0714a454f37b9ea51a3e371fbef92"],["/page/6/index.html","cf33c364db7eadea5080abf496d31a2b"],["/page/7/index.html","830117d78e1702ae2d5c61810c263d45"],["/pan-gu-zhi-bai/index.html","d12e184284af408fa34212e99340da8f"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","0f53b208501fa02e5ddedb5de984b179"],["/posner-homosexual/index.html","d92d7a2f410489c535ef2240c1d08fde"],["/qpdf-shi-yong-bi-ji/index.html","0845881e2658f833b838d3a408695d1c"],["/qxpj/index.html","caa7139009c0d6e6087d1e622c0409c9"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","2b19a3fae5fa262336d09c8c5d085759"],["/shuang-pin-vs-quan-pin/index.html","bb28842ab64a5e0e07e5d5c1f963f928"],["/shuo-shuo-xiao-fei-quan/index.html","1129ee74cb662e0b5b39adfc6a4e2f1d"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","0f173345880bec52548010e7f51b3bfe"],["/software-reverse-engineering/index.html","351ae6cec3845b567be77f73fcf86182"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","ce1ca4321bc39decfa26cf54ad7bb967"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","f0e13928c7642d3bae1282f1d0848968"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","5c52e18a7b030db3406b92c25c68a431"],["/sw-register.js","cb2854b71f53b4295c9ff2d8e45741de"],["/tags/2017/index.html","9591d294973c96f4fa4059af73673fe1"],["/tags/APP/index.html","67f15095f062b1a91dda566c197eb32c"],["/tags/Apple/index.html","7b2c14ceb0ceb997d441d84942de206d"],["/tags/AppleScript/index.html","fe9299907b0b087ae541c8e676e68e87"],["/tags/Due/index.html","c4230a7253a1ece2fd11c4f12991fcca"],["/tags/HUST/index.html","64dafe446ea5117f11f882bfc1051b95"],["/tags/Hexo/index.html","9dec4e79ff3f2a4c1b8a8c4421c8c5a9"],["/tags/Homebrew/index.html","c6755e548e279bf309e8edef006d6e94"],["/tags/KeePass/index.html","89b7cb75148ecf328c9cc39df145ec78"],["/tags/LaTeX/index.html","00014be55c7fcf1b54300dfa5b19b76b"],["/tags/Namesilo/index.html","05be59d05f8c26e0ef776a0d77ba522e"],["/tags/OpooPress/index.html","33d2d3e8e111578a4d7d82855dbd9bd6"],["/tags/PDF/index.html","4377dbcd1416074a2c965bc79bada4d4"],["/tags/Posner/index.html","e8a327b9ab2912f7e71be927a29d01c1"],["/tags/Python/index.html","0546a4cadcee34b13d9dfd96833c260f"],["/tags/Rime/index.html","8f511761a3a4fd7aa07f9d2589e4ea01"],["/tags/Tampermonkey/index.html","2e5b2895be49cbd921b0e1c0421f6f57"],["/tags/ToolMan/index.html","dddc93c7a48668def0564437814bfffc"],["/tags/Typecho/index.html","dda1dd319ace9618643e0fa4c3dc69ef"],["/tags/Workflow/index.html","d85d071a8fb19a8d5b20bb8cd063a6f6"],["/tags/cc协议/index.html","57b5b304cf241cce5abea4831affc2c5"],["/tags/iCloud/index.html","f1350c794a3d9374e11d4b6fe6af2ba1"],["/tags/iOS/index.html","a289b3fe0f95730c83aedd97511d3fd5"],["/tags/index-1.html","7690959e4c5c66c98f9f82ed66358f71"],["/tags/index.html","7690959e4c5c66c98f9f82ed66358f71"],["/tags/logo/index.html","8fb4eeef4473366cd58468ac971b3bc8"],["/tags/macOS/index.html","cba29a0f7e3fe728c4a179850309fcba"],["/tags/vpsmate/index.html","d8e07a49ea8c78607f3991ead3323c7c"],["/tags/zsh/index.html","a5c375a0faaa6a6b50fbf691a7b5f590"],["/tags/乱弹/index.html","6a9d54c9f7d751e4e48430c7db5465b2"],["/tags/二倍工资/index.html","7f1baa3127c25fc694d4e411c55f14c6"],["/tags/二维码/index.html","1b6a842054ba3dc6de1babee6efaf65b"],["/tags/云盘/index.html","40126575607b90a9e29521bf4bcf6e65"],["/tags/交通事故/index.html","854b77ea472f0405aaac56d0346a77ea"],["/tags/产假/index.html","9096de42040d832d45560f168f87ce13"],["/tags/人身损害赔偿/index.html","2f4ee10a73183db728218382ca5d7393"],["/tags/代理权/index.html","20208fc2f1472b7fdb14d6dd089710c7"],["/tags/优先受偿权/index.html","17c5d1f15a0841f4071e5e1d19e9b5ee"],["/tags/作品/index.html","9992d6b928b8aa03008afae82575bd8b"],["/tags/侵占罪/index.html","8b91f110fe0e8f91f04561be02ac7d33"],["/tags/儿童权利/index.html","7967b81be2692acd81e41194727c8a78"],["/tags/公司法/index.html","b308fe240c4b058a8292d47645702475"],["/tags/共同财产/index.html","41c52018ce3bd02c6f15e726515dff9f"],["/tags/刑法/index.html","a4f9c767a9054996cea3494bb3d45a4e"],["/tags/劳动关系/index.html","17cf5f000ef00ff9d8d0b35734a94b7b"],["/tags/劳动合同法/index.html","c6f1be13f31103a9d58e369b73b741c4"],["/tags/劳动法/index.html","3f9429a2fa1b20cc03ab392a84d34a2e"],["/tags/华中科技大学/index.html","02508c5f22eeee63559977a45f55d7f1"],["/tags/华中科技大学法学院/index.html","0322024089be0f6d91dabd96fb2018bc"],["/tags/危险犯/index.html","33b3afd6b095436f4620fee8b316585a"],["/tags/反向工程/index.html","ac391e918c67b425c09b62e7abe1ec07"],["/tags/发行权/index.html","484d41aa6b8e638ca69078c333be4ff2"],["/tags/司法解释/index.html","0d82a6a21ffdd814c7e42e206f1d3db2"],["/tags/司法鉴定/index.html","39444e23968e707b483272e42e365b95"],["/tags/合同主要义务/index.html","d31640eb81ff58a42b2c15d388f664bf"],["/tags/合同法/index.html","13c63fe93673aab5fb12d6199442a956"],["/tags/合同附随义务/index.html","4090874132afb89ba4d15773f7e791c3"],["/tags/合理使用/index.html","bc1cd2ac981d489da95f9e87f7e318e4"],["/tags/坚果云/index.html","e885fef89d2097f174a1dfec374aea3f"],["/tags/域名/index.html","f2a1a13cbcbb4a3124e3c33fd41cd014"],["/tags/字体/index.html","448777927386aebfb4b88c0a6803053c"],["/tags/实害犯/index.html","6fdd56ee614063f8519aa6d3bba25c97"],["/tags/密码管理/index.html","d8f14a6408ad07f930e19a766b343011"],["/tags/工资/index.html","3a0790bf125ba76e3bc8c0d49e9b622d"],["/tags/待履行合同解除权/index.html","03cf8c7b7bfbb62fbb9842c6d53580ab"],["/tags/律师收费/index.html","746aa779bd7523010212a57ff915ac64"],["/tags/思想表达二分法/index.html","4a00f7af9fd4b4a7bd1c28afae5b90cd"],["/tags/思维导图/index.html","e68fe0322538e263b545caa0c17530a4"],["/tags/成本收益/index.html","b605f099e58f0863e8bd3a1299138a73"],["/tags/成长/index.html","458a8bc5375f0ce0253ac9a5c1572092"],["/tags/技术措施/index.html","5b8081fb47c89c633522fa1ab1ec4b34"],["/tags/抢劫罪/index.html","da3fb86fd677fdc9d674346e0ec6b58a"],["/tags/抵销权/index.html","32df85d7b50ce9db5f52d708b091be87"],["/tags/排版/index.html","7157a4c8196802887272db93c1a853a4"],["/tags/插件/index.html","2022edf528f01b0691a6090b20499b16"],["/tags/搬瓦工/index.html","6eaa1bae512cdc3b6239acf1f3a42f06"],["/tags/故意伤害罪/index.html","158d7468cf83473572f86bfef44b4a56"],["/tags/效率工具/index.html","38e166192065ca87a8698c00f85cf12d"],["/tags/教育/index.html","b5555e6b59755286083d589f4d08aae4"],["/tags/断舍离/index.html","7d4aa4d7044dbc23f9bdb3080ddd4fe2"],["/tags/无固定期限劳动合同/index.html","d78a3768f68d810f179c5b5f995a4d36"],["/tags/最低工资/index.html","fd0682fb91b978c960ceaad46264d6ea"],["/tags/最高院/index.html","48ac25ec6ba13c6a0f8ea9aaf292cf83"],["/tags/机械键盘/index.html","f49cd875862c734a976688faeace6d08"],["/tags/武汉市/index.html","2915cc2e944ccf0628ad20cad3402bad"],["/tags/民事行为能力/index.html","2705be97366779f746c87fb58c9e30df"],["/tags/民法/index.html","d568462fd810a8e8409fa4cacb61adcf"],["/tags/汉字/index.html","f74c39bf4fc3460d92c5898ec06e1178"],["/tags/法学/index.html","34a3a6bc95e96454e848e238fb774d67"],["/tags/法定许可/index.html","9e353383a5992b727e8e123c46668f16"],["/tags/法律/index.html","5a1c6f830e8a28b6624beb1544683535"],["/tags/法律援助/index.html","b1aaad0de7585017cd5377939e36b388"],["/tags/法律法规/index.html","33973d2f16da401dbca31768466155d4"],["/tags/法律经济学/index.html","fe61228a2bb865b8cfe6d56133db53a2"],["/tags/消费者/index.html","a73567d01bac69ec2acf2451f1ffec45"],["/tags/湖北省/index.html","9d9cc4487a8690cff18462470e89bf78"],["/tags/熟人社会/index.html","d1b3e6ab9c43e8c25b40e598c8de1c60"],["/tags/物权法/index.html","ad1e577cf8d99e5be07eb520db1121b0"],["/tags/用工之日/index.html","63dc73ddc0945997b83f6a0a119c28d3"],["/tags/电影/index.html","530e58a6d49fc6d88649a111054f4db2"],["/tags/男女平等/index.html","e0b62cc749b4a86ed4624214ea0a04f6"],["/tags/知乎/index.html","e0c3abc908a47c77fb9edee2e12e3f99"],["/tags/知识产权/index.html","7484f0fb19f20e643e4ef4055dbb47af"],["/tags/知识产权法/index.html","d8d3992bc6dda8a210dc06a6310443af"],["/tags/破产法/index.html","0c844ec909b7b3f640b734a23cea7aed"],["/tags/破产管理人/index.html","262ea45fc8747a3aaab5e61ce7a8c0d1"],["/tags/碎碎念/index.html","b203ef271b2fb09ba5f46a967160104d"],["/tags/社会责任/index.html","878285053936fb9c09d192e4c23cedb1"],["/tags/社会问题/index.html","fccc7f4408a9d036935cf179b723e450"],["/tags/神经科学/index.html","fefca7504c718e88bd241d95b823ca8c"],["/tags/经济学/index.html","b40f01ed26ab6951a3af59d20a0cbc57"],["/tags/结果犯/index.html","2cc574fd8acc4098419c157a1fd761c9"],["/tags/缺席判决/index.html","1f41fd399d0479ce72bde7f24411cd81"],["/tags/考研真题/index.html","ee01f3121feb0f160cd18df3967ba654"],["/tags/著作权/index.html","ef5640b85d669d17591ee39cdcce139c"],["/tags/著作权法/index.html","a83d99864e8ad2d83fc5b9e3c1c3a498"],["/tags/行为犯/index.html","8cb4377ccf3b3327689578f3c33e27c7"],["/tags/行政不作为/index.html","f067042b68ae33b73191eb472810815f"],["/tags/行政救济/index.html","6a3aa1cbbf0a081c1167e8b80db3557e"],["/tags/行政法/index.html","5143d9526dac2159b4ed819549a36275"],["/tags/装饰装修补偿/index.html","37f665c76b9b5f73d7c9af951b25cb41"],["/tags/观后感/index.html","3719d58dc217581724ebc84576f13c46"],["/tags/观念交付/index.html","ce389d8d02bace74fc109a2acdbe01ad"],["/tags/计算机软件/index.html","3d86a642605ca83ddf229b94c5d2bf25"],["/tags/认知科学/index.html","a1c9b302743e1cab9c9e82ab6cc0f1ae"],["/tags/论文/index.html","4ad50497d0f359c23411c4ad3b87d1ff"],["/tags/诈骗罪/index.html","3988d6a9d60ae0469bf0c3424ee07ba8"],["/tags/读书笔记/index.html","1399fe265c26821978a57b807e4c9323"],["/tags/赔偿标准/index.html","ab8e707173d92d34b31c446f7b2097f5"],["/tags/输入法/index.html","1c1157f4aab01531be9cadb4a0613adb"],["/tags/违约责任/index.html","f64a7dc3db94ee3ba215a691339d942c"],["/tags/违约金/index.html","13d8c56c2a2eaf2de6b2889fc8969e31"],["/tags/释明权/index.html","d04392e2ea9cb1394ebb828006e7b74f"],["/tags/隐私/index.html","f6d3583f0cacc8a8e9b79f6bc0d96088"],["/tai-er-gu-shang/index.html","327df9bd8215810b97fb89cb92ad9746"],["/timeline/index.html","5eaba8e2f12b63178a6fbf85bf3934fa"],["/vcard-yu-er-wei-ma-ming-pian/index.html","ffcb288e81990b343c500f4709293bf4"],["/webfont-yu-zhe-zuo-quan/index.html","e770bc5bcc9bf95f47bd0b6958d3c598"],["/wei-ji-hou-ban-quan/index.html","679460af6b89bbe35673c5ba6e496b27"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","ed1f5a912eaa0a2f7afd948c867ba80b"],["/weixianfan/index.html","4336cab420ccf30430e230f195e96f98"],["/wo-de-macos-he-ios-she-zhi/index.html","32e2f94a09e6d50d521e6c8ea97b008d"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","2e577e798bc71bf88b9f09845b795321"],["/work-rules-mindmap/index.html","10ff91e5e74cbf2643f9024b3abe8d50"],["/wu-han-chan-jia-shi-duo-jiu/index.html","584b3a35648192db44226c1d46c3a176"],["/xzlfbzw/index.html","97a64b2293c667bff743068284451ccf"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","1a2a3883e249e80ffbda764de997f1e3"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","9efd6d0b160956cbdf4ac5d44983c2f2"],["/yu-ming-zhuan-yi/index.html","942a5e550db73f9adf7d3a92cef4a51b"],["/zhetengb/index.html","606147522f2cea3567ec3b97944ed814"],["/zzq/index.html","2621f323edc4a3f84066b60579b7fcc2"]];
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
