/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","a3b1622fb05c3976e8b1ab53c6590534"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","48c05b94f502fa920d30858faa1a0531"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","143180d0da5904746612cd5e9157316a"],["/PGP/index.html","6646b065fac657fd22db4d474f6aab20"],["/about/index.html","fac04f2412a269a301b1dfcf6f4b1d47"],["/applescript-jiao-ben-liang-ge-ban/index.html","2d184867a99a33aa613db846104e9e36"],["/archives/2014/07/index.html","1d591ced7c4bec26240c9658c4c0c158"],["/archives/2014/08/index.html","7da9dc3b9d9605e78faac9272980e5ce"],["/archives/2014/09/index.html","30120ec52af07fe2260f82610ee1a462"],["/archives/2014/10/index.html","66c3f6c6f475b032475135f37c57b338"],["/archives/2014/index.html","71c6c74c7d2a5e5741f6af598d057e40"],["/archives/2014/page/2/index.html","1cebe1aec34357dcb5219bbb097550d0"],["/archives/2015/01/index.html","56bb731b5323a0d99445f13a921d71f5"],["/archives/2015/07/index.html","acc0a66e01c7beb389917b7b23ae8178"],["/archives/2015/10/index.html","ab397993c7476619349bf978630bbac8"],["/archives/2015/12/index.html","2c4c63a2f28684ccc62548af0c3ae030"],["/archives/2015/index.html","e8be1d5863fd9975b2f75efda8bb01b4"],["/archives/2016/04/index.html","7297ada4b4a1aa8a216b32e59808904e"],["/archives/2016/05/index.html","6973dbcef0c47b9371481bef3fce1b97"],["/archives/2016/index.html","af2238000530d29f945d51a74f0a3c85"],["/archives/2017/01/index.html","c81fd4ab0144840d79cc28a2b763b454"],["/archives/2017/02/index.html","24a898a4394218012d3518f1bc04734b"],["/archives/2017/03/index.html","233e871437e28063182b9ca704852561"],["/archives/2017/05/index.html","5131af1b2083b8ff6e8154617ad3d698"],["/archives/2017/07/index.html","dbd7ecc3f114634e775e80f0bc9bc6eb"],["/archives/2017/08/index.html","a79d848a58aeb5765ef39b1fdccca509"],["/archives/2017/10/index.html","61d5e74df662b00b2f9ef1309e0d55cd"],["/archives/2017/index.html","32128c1c9ee259c1c6a54787beb7e07e"],["/archives/2017/page/2/index.html","c519535bc4259e78c787e1215df9aba7"],["/archives/2018/01/index.html","6b88c11ac52d968009de7afa0668a27c"],["/archives/2018/04/index.html","2625fc724104b1ff148f59c72875446a"],["/archives/2018/05/index.html","352a1e34df39038f20958982e5c8f724"],["/archives/2018/06/index.html","0ccf228ad9e80ef41a2649b8729fe742"],["/archives/2018/07/index.html","525c59a558d61b12b64f3e0cea246c74"],["/archives/2018/08/index.html","b5475389d7cbbf3f2f95b81d82c1f48b"],["/archives/2018/09/index.html","332d0af7b5f42e06d1a429c8bb5ff126"],["/archives/2018/10/index.html","1d76fdfad0ca53334bbc76b2fe22f9ea"],["/archives/2018/11/index.html","8fd2af21d7732309ba6385cd20837f3b"],["/archives/2018/12/index.html","1c8cb71d3d7c5a198f35b277d77f41a9"],["/archives/2018/index.html","c9e9a91c29a77249e2cd5cb9cad1ac27"],["/archives/2018/page/2/index.html","4d728babdba415060a079ad87436b2b9"],["/archives/2018/page/3/index.html","850cb7d3d5bc51c1dfa19342997ef3f5"],["/archives/2019/03/index.html","8a99bca50f54e5c1e95f4b32a0e4442a"],["/archives/2019/04/index.html","3b1f8bee707c4e16f1803826640b92a9"],["/archives/2019/05/index.html","cccc8060cae17730824a44477cddb08a"],["/archives/2019/index.html","6a5f9ad1a97a521ccf58c414c9ac11df"],["/archives/2020/02/index.html","a43258e131201fb1bb2891574a656bf6"],["/archives/2020/03/index.html","a3d816b1b14ec9d5b0b2f3859568fca2"],["/archives/2020/index.html","06605ccea52295804f5fe9585ef66f74"],["/archives/index.html","3b552baa5219cb8ff92e3f243195cad1"],["/archives/page/2/index.html","516aa23e397010d2cb4736cbc601644b"],["/archives/page/3/index.html","fce16a468e3c4212ab4759b7aa19aa22"],["/archives/page/4/index.html","724bdb678e701d18fad71077c6b26d16"],["/archives/page/5/index.html","8d34493f5688fd5dda15cfdee1d1b2c9"],["/archives/page/6/index.html","d0c4c3a84310b47fab4663096c2e3a60"],["/archives/page/7/index.html","96fd203163d1133ec19f656cc72eae74"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","139d21a4897725b04dfae66cc7130a27"],["/bao-guan-qin-zhan/index.html","412a087db9c0abded0264b5eb1bc47de"],["/bao-li-yu-qu-cai-qiang-jie/index.html","78e0f9c6f0772ecf5208e31f413c204e"],["/bei-dai-li-ren-sang/index.html","28c3fa2389d81753a2e1307ecc9a5a14"],["/books/index.html","63da7e7f69e7851210cafd878d8d563f"],["/categories/Blog/index.html","3f6479e49e1249ede0ea7b92da10fb13"],["/categories/Blog/page/2/index.html","045c51fd694f2ab04a2a1d196d210fc9"],["/categories/Blog/page/3/index.html","072224e7f375be566b8969fc403bed75"],["/categories/Blog/page/4/index.html","84e44653c6a5d5cfd1d07e53fd3680c3"],["/categories/index.html","9a030349d582b9789f34890ce707bd7a"],["/categories/法学/index.html","98dae26db3afd6e2a5cef62b8408c2f9"],["/categories/法学/page/2/index.html","9dc0df7fd2d4dd696933aa86c2bfa411"],["/categories/法学/page/3/index.html","6fafac53cd989fd3e80acfc911193110"],["/categories/精彩分享/index.html","195762cd09bd14cbc9f3f9b62bb06163"],["/cclisence/index.html","6ed839e11ca6e9255bf4a9fe310a124f"],["/cetrain-issues-iv-for-company-law/index.html","78c73b3733b51f0f190ec2bf30fe4f43"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","529b1bd1acb0e46a8e34437b941be9de"],["/cs-hubei-2017/index.html","6f8975d004e36467bb6d3f8b58d7d109"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","336802e8591cfc49c52f86fc16fcf459"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","c16cffaf8fffbea16781484683a6438a"],["/due-pin-workflow/index.html","d889ac95c289e740cfdcbddf541f5d5c"],["/duo-ci-zha-pian-shu-e/index.html","4129b7b0afe0fa25f6d0244805fd6e88"],["/expert/index.html","c1fbabd9ea52b927c41c6b0000410cf8"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","f7bc84e14d14e5b34aad3a5940d06b8b"],["/google3756ddc34336b7b9.html","55c36a7e6b1a8819f40f31b1764b88b7"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","0c9a121ac35c90c313b78e6800fefab3"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","e2cab9ec8f4c99634b126770c72a354e"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","5ffd179a57da241c033988733b86cac3"],["/hustlaw13/index.html","219f76f13adbf3f9dad53d0c42e41a37"],["/hustlaw14/index.html","fa44c2531a93d56ea3513e9a86dd01e2"],["/hustlaw15/index.html","fafa181d0ad3473e7c58eb40ef6e0c3a"],["/hustlaw16/index.html","181cf3f50ca761a3fbc599a449bd2c92"],["/icloud-terms/index.html","fe7a8a7754e90c4dd487afc90cbbabea"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","1da1f297e4082910500d6ff4a2ecced6"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","ebd7725ce890fa0784017be4bcdb8325"],["/jdsnk/index.html","114e6a787fe849fc66b99cb6c7000f09"],["/jian-qiao-fen-xi/index.html","2bdbebd41c7d8e826b06b36e81d3561f"],["/jianguoyun-keepass/index.html","4232dca5968da6175e7ca065a6254e71"],["/jin-qian-bu-neng-mai-shi-me/index.html","76536a683d5f48cf36130fec4145f03b"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","9bfb4ced295c0b3f99bdb4fb4bf40201"],["/latex-times-new-roman/index.html","8024b45adf5871161d88185f5a88ad74"],["/latex-yu-lun-wen-pai-ban/index.html","3e45fc5593cf0e5f67753ee950e13a7d"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","3c7b745f7845cdd2df97c61236515fe8"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","ee4203e619567da8d94772a6dbe04465"],["/luan-dan-20181116/index.html","b32413ae5fc93bb3e4df7f5123759d8b"],["/luan-dan-20200217/index.html","8469db617cfd7deaae9fe55ddd161f52"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","afe090d510df181db286823de5ce2fb7"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","d8f4f6d380d70f595660a67cbd146494"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","e8cfb22a75b0f39adaeb701522376a4d"],["/movies/index.html","cdf8b3b24a85525185d8cd10cc90f5ae"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","7dcfb996d865d5f6f10c903edfeceba2"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","47bc18d5c75fc529e426e1481045bf2c"],["/opoo-zhe-teng/index.html","455163a78a030b7c1ef482ce38465c18"],["/others-00s/index.html","70d430d68d54a8f38808848d82cdaf9c"],["/page/2/index.html","39dc9ecae6cc15f4873965fe3e2616ba"],["/page/3/index.html","88ed1dd7907fa35e48fab5e729fc3530"],["/page/4/index.html","6f057da5f807a32203e9a17ef131ecde"],["/page/5/index.html","c5f367bee738dad802ce83c7de0fcb61"],["/page/6/index.html","85f243b0d7d558e304bdcbb5189f36a7"],["/pan-gu-zhi-bai/index.html","4b448191f51c31a2b1a9e6ba6939e129"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","4d8c85667b2efa25827705b9a4f70d8b"],["/posner-homosexual/index.html","3cf373a0becf73b18ac2dc6dbd34b37a"],["/qxpj/index.html","265d9cb4d0dc8e9340c96f4291ae34ce"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","c84c6a4c2307910c94f92a65fcf49935"],["/shuang-pin-vs-quan-pin/index.html","c039fb24ad920deabd007d07a118d00f"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","50f5fab5b1ce69228bfac74c4272ff85"],["/software-reverse-engineering/index.html","49904f4cef5ed67e320465aab9be75a0"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","a2924956f04a8cb736512397eb731a11"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","f3b0774eba734772462b22fb9417cfa0"],["/sw-register.js","6137001224c62d409f8358e17091cca4"],["/tags/2017/index.html","2eec86031dbbc8dbad20117da23eef7b"],["/tags/APP/index.html","6e35da88da9f09d1352d9acfe595da40"],["/tags/Apple/index.html","09f2043ed6a77c7ce17d93f1520a1ab2"],["/tags/AppleScript/index.html","13357ef4fe997a405b778179f3cca29a"],["/tags/Due/index.html","3f36127e915a2fec3f6e52bfcc3e2773"],["/tags/HUST/index.html","b38656dae8781813ff412e2a304dbbb0"],["/tags/Homebrew/index.html","a96dcef0090befa03d4ed6f34b932947"],["/tags/KeePass/index.html","b1f09e4ee169f4f012b261672947a5bc"],["/tags/LaTeX/index.html","19d542ccdafd7c8a4779e2d8221c714d"],["/tags/Namesilo/index.html","670cbae2641c9cb143e1455a07d2d5ce"],["/tags/OpooPress/index.html","42f31db146ccb88e979abee6130ec9db"],["/tags/PDF/index.html","1e0c0424b7e10db0296a48c6c77fd753"],["/tags/Posner/index.html","3d9dac12a2f86124e3d0415bfd3c99ec"],["/tags/Python/index.html","1a323fcd3925cf3c8cac39db82d20a92"],["/tags/Rime/index.html","c853838e22295577ee4fc5dc9de4b3d5"],["/tags/Tampermonkey/index.html","76f13bcdcdb10b50a2d3cf75451fb684"],["/tags/ToolMan/index.html","a75db94fa1be14930b5b8305eea971fb"],["/tags/Typecho/index.html","719037de03880e12e3c10f4e6faa73ab"],["/tags/Workflow/index.html","703378e78394defc7e1c4b7dc17419a1"],["/tags/cc协议/index.html","62d265964b16710947365986aceea8d4"],["/tags/iCloud/index.html","bba8374d38408e2901931d00ebbcfef4"],["/tags/iOS/index.html","3c69c64df83fdbb08bdc880b9d91de4f"],["/tags/index-1.html","5215712c9a2efc634b89dd4430a0d507"],["/tags/index.html","5215712c9a2efc634b89dd4430a0d507"],["/tags/logo/index.html","f78f32d5a2cd31f72f9c6b3769e19e23"],["/tags/macOS/index.html","3a24b6a56cb68f01353c4f3a71a107d5"],["/tags/vpsmate/index.html","063a86414d13009ddf648359075de544"],["/tags/zsh/index.html","b42b41958290bca571489d97541bf6eb"],["/tags/乱弹/index.html","530a444bb8ddefa387e3a208beaf0252"],["/tags/二倍工资/index.html","1789ba334f26714d54038524c27c7e88"],["/tags/二维码/index.html","addbcce14152ec61752bf065afe28f9d"],["/tags/云盘/index.html","04cd46fe7cbae93df21d8de5c4d0b6c8"],["/tags/交通事故/index.html","0a540abe22d4c39ad0628744591d504e"],["/tags/产假/index.html","d6fa55962a00a9b8fde700dd99c9bbfd"],["/tags/人身损害赔偿/index.html","c40cf7932448e1a398dae25331cbd886"],["/tags/代理权/index.html","a39bd537f19a072cc16dd641ba1f7633"],["/tags/优先受偿权/index.html","0fa67990bdc03a3dd43139876f4832e9"],["/tags/作品/index.html","81a26054226a9a9d311bb3b11a61a30d"],["/tags/侵占罪/index.html","0d18e7c7c4fe2e3e94082133755bda6d"],["/tags/儿童权利/index.html","f3f3a1369652aa82d9028c89371dc10a"],["/tags/公司法/index.html","2511ca166ea19d85d64070f73871839e"],["/tags/共同财产/index.html","b884a4a1b97fcd33461849b6d55fa854"],["/tags/刑法/index.html","b11be47514072fe673027ca2f6707260"],["/tags/劳动关系/index.html","588ee216c6f32cc6dd1aae1c9321b8e6"],["/tags/劳动合同法/index.html","3c212888ec23f6a2ac419ffcdd054cf2"],["/tags/劳动法/index.html","5c83122ddcfb4d5df8106dd43ed3ff07"],["/tags/华中科技大学/index.html","3902bc9051642e8cf8e335e818eb922c"],["/tags/华中科技大学法学院/index.html","1861522bc1cdd90b3736e84a1c7f4bfd"],["/tags/危险犯/index.html","b5901fb371fea8c39a5963bd97d79d68"],["/tags/反向工程/index.html","0b30ec35697b840cde984fd6ea802628"],["/tags/发行权/index.html","870fabeaed891128f2e81b654d60b57c"],["/tags/司法解释/index.html","ee422c2c5413a46d51c68c4609594891"],["/tags/司法鉴定/index.html","a731500d312365adbd8cbd06ce8f037e"],["/tags/合同主要义务/index.html","35dd68041d2c6f0ccdf660c28f938a3e"],["/tags/合同法/index.html","ae8bc2a34ead09115db4c1ae319cf88b"],["/tags/合同附随义务/index.html","e42828bf27713cd0b8f2701deccb594d"],["/tags/合理使用/index.html","9bdf214fbc49284562943c829900922f"],["/tags/坚果云/index.html","3b83bd24d497ddb8b93d44b5cfea6c1d"],["/tags/域名/index.html","2fb63942f732ffdde6980a6b4002cc25"],["/tags/字体/index.html","0f786788b03feaa668393a5a5158551b"],["/tags/实害犯/index.html","ea43cf46abda350a1c01efc3d2e6d1a6"],["/tags/密码管理/index.html","995a949b9e1aa83e3b041ab4ac343b5c"],["/tags/工资/index.html","2cf83f58619446e7dac897f00d60b92d"],["/tags/待履行合同解除权/index.html","86c23aa89f7c9e639ddc59070023418e"],["/tags/律师收费/index.html","6edc43ba12db63d406be1792881fee33"],["/tags/思想表达二分法/index.html","d79edc31f15bb6ba60d8fc2bc37e542f"],["/tags/思维导图/index.html","ce2804c070f3e90b46e79ddaec4e8e1d"],["/tags/成本收益/index.html","96bcec5b17143f0ee091767001f63a5e"],["/tags/成长/index.html","b75b902cd655132464c03233add36f12"],["/tags/技术措施/index.html","8948d6fa445e0c2d3741665a6cd9eed3"],["/tags/抢劫罪/index.html","86aaba6a956d42f484e43fb69dd0d619"],["/tags/抵销权/index.html","84579e263e88ff33ba09bc5950dcd7a2"],["/tags/排版/index.html","5e4073a6149c97b1b537720a24afc1ff"],["/tags/插件/index.html","2688e6d0e849cfc78a3cc4d25c056f8f"],["/tags/搬瓦工/index.html","b130704380b51661b87c462d1edf4a99"],["/tags/故意伤害罪/index.html","a331083d7fa78a841e54ce6f78d0354a"],["/tags/效率工具/index.html","5a568e81bd2c370849c93bae1979136a"],["/tags/教育/index.html","a4ac1d99184092584436ddd80e2a5eeb"],["/tags/断舍离/index.html","b3fd4ea2e00789cee82a591f605c575c"],["/tags/无固定期限劳动合同/index.html","022ac6148c30b6adb6adc2d0062b75e4"],["/tags/最低工资/index.html","32b49123c387be23d40e9cbcfbcdd295"],["/tags/最高院/index.html","aeff5623519f7c0bfbc01f35879affd0"],["/tags/机械键盘/index.html","89089e507f08fbaff6c267580743e931"],["/tags/武汉市/index.html","05e52f17614c90ae928b1a4fef5ed79f"],["/tags/民事行为能力/index.html","c7981807aee8c8983e7749872b276940"],["/tags/民法/index.html","a43b61a389f829d7d4c0b5698e666cf0"],["/tags/汉字/index.html","71a0e6912f9034bed5a4ed47ab0f86e7"],["/tags/法学/index.html","8781d3f5fc5c0cfa3d9f65440c60d0a6"],["/tags/法定许可/index.html","4f52ffd1af40330cced18ec4cae05d92"],["/tags/法律/index.html","bdc8daa8dfc2f38e15c66b38301f73a6"],["/tags/法律援助/index.html","2030bf28716f7db63cd71c14747de8de"],["/tags/法律法规/index.html","0dd45b8d0593f035e92a1de89f3c97ce"],["/tags/法律经济学/index.html","5465fe519b0dd945e2c0d4f1cf465310"],["/tags/消费者/index.html","b32f5a581e0ee86c2238c1170778efc7"],["/tags/湖北省/index.html","5b40ecf5fa24ee746d4c5de9f754d586"],["/tags/熟人社会/index.html","4ed5e383b15596cee05bd747b1c7f6d3"],["/tags/物权法/index.html","0635341360cb29cec1eb88aa17352564"],["/tags/用工之日/index.html","2bcc1e744fdae754aca7f3d0d63af892"],["/tags/电影/index.html","9a4d01cacb3e157862aa5d5f138ac529"],["/tags/男女平等/index.html","7ad30fa8d35393a9c38da1286a779076"],["/tags/知乎/index.html","5074ee5931362fad2c4143124b04ce6d"],["/tags/知识产权/index.html","77b789b1b273eeb1a1ea9f482e0eb42f"],["/tags/知识产权法/index.html","2cfdada8583c858c5e1be2b63e218f83"],["/tags/破产法/index.html","ac6dbc3536d82f0b22487ed599ecce18"],["/tags/破产管理人/index.html","aa31f138344314c2533f48d093059195"],["/tags/社会责任/index.html","fad2ad4a9f7f5d86449467928d5f79ac"],["/tags/社会问题/index.html","783155c05ac7d5263408771bd2e86f65"],["/tags/经济学/index.html","09e15e9ad0d7363fe8b88ab315e79366"],["/tags/结果犯/index.html","6e7d4051df2624ffbbc7969993a58702"],["/tags/缺席判决/index.html","f3e364768ad61f92d75c536d04803df1"],["/tags/考研真题/index.html","202a32ed02a12ff7d7dd1f6d733531ae"],["/tags/著作权/index.html","3e8732ea50cba1b5d154a1c9fbe0c5ed"],["/tags/著作权法/index.html","7d4ca8af17e711f52fa6676469f41cf7"],["/tags/行为犯/index.html","f65dde899079f528e49f3ffd2b680282"],["/tags/行政不作为/index.html","8ab73b9dbf223359069673d82e83bd2a"],["/tags/行政救济/index.html","9106a1b5caeeaa7518b01300d7c09133"],["/tags/行政法/index.html","ed807b2cf4d17418c7ea8ba6cba2ecc2"],["/tags/装饰装修补偿/index.html","5cf86ee7d8d8b39413b14dd1fba788e9"],["/tags/观后感/index.html","76ff46c9a12ac31db8e0be940d0d96b6"],["/tags/观念交付/index.html","cac6266da7d3a61798f7d280ffec9f14"],["/tags/计算机软件/index.html","85b8ba26e4d04c052f61c792a61423fb"],["/tags/认知科学/index.html","046aa62c42535caebc70856193932262"],["/tags/论文/index.html","4377c3d4ca6be8fb914b8fa466916905"],["/tags/诈骗罪/index.html","4260055b90a2ee8b30b71b4eec3b61cd"],["/tags/读书笔记/index.html","a7b9b15c309454b0cc90eea3aef6ecf1"],["/tags/赔偿标准/index.html","35fb10e5521190fe85d3085120800d57"],["/tags/输入法/index.html","df6d2a0c1ad6333bd776188aa9d91628"],["/tags/违约责任/index.html","8cd503a58cc3fe2401aabfcad6de6f22"],["/tags/违约金/index.html","2c6fe472fc34e54a0f155788d8f84371"],["/tags/释明权/index.html","99c47c86a51f7a3971606b4be059ea29"],["/tags/隐私/index.html","094653f6881a285652cf2dd9d8d5c60f"],["/tai-er-gu-shang/index.html","4dd0ec4531b45770bb5bc1c14a146387"],["/timeline/index.html","4af209e41a11ae42beec9f888b3eea03"],["/vcard-yu-er-wei-ma-ming-pian/index.html","50b397a99a1c03f04d89bb76fd777029"],["/webfont-yu-zhe-zuo-quan/index.html","99d046d17126c43f43104ca15d702e5b"],["/wei-ji-hou-ban-quan/index.html","2e1f3144e5dc2584d798a0ff0179bf2e"],["/weixianfan/index.html","f94d1c5310f24e89e80b6e0734025e2b"],["/wo-de-macos-he-ios-she-zhi/index.html","8565e5733996cbd6733a910dadd32462"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","aa902e04f2785d6ff1bfd2f1c9b9be62"],["/work-rules-mindmap/index.html","c34839cb6d2165a6b8d5935607e2d8d5"],["/wu-han-chan-jia-shi-duo-jiu/index.html","05314a85d536a58a91fe10df621450ce"],["/xzlfbzw/index.html","36e65de818f1aa1743cae6f72e06ba3c"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","57ccb6440f6acb08e879ad6a172b41b7"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","c4f064efaec7049370f939e72bfb0916"],["/yu-ming-zhuan-yi/index.html","1663e5359d33da35f542dd082cc50942"],["/zhetengb/index.html","c780a29e773873efb5c88246940e3d73"],["/zzq/index.html","6c6d17b99e9b9ff8c82b21cf5ae3a72f"]];
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
