/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","b0e5aa40b5798453c49ec38fe2efe1ea"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","c62fec0367af05fedefaedb8805697ed"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","1d2effb40389224eb9e192d82c465c3b"],["/PGP/index.html","5cb87155fa6cb6c8c6088122df963a43"],["/about/index.html","77fc8b427bd44ed2f1de2bd11525fd66"],["/applescript-jiao-ben-liang-ge-ban/index.html","82df81f3dd73e64d92a3c345bb6b26c6"],["/archives/2014/07/index.html","d5e50d6be332fffd7e2e4a98411d9dd8"],["/archives/2014/08/index.html","e7cfdacb26796d771758bdd9b7eb9f45"],["/archives/2014/09/index.html","c9ef16c616389b332e7a21f59d5a2ad6"],["/archives/2014/10/index.html","669f4bb76cfe64f48285bbb2f541924d"],["/archives/2014/index.html","bb4aa707bb952599be440b3536d1c079"],["/archives/2014/page/2/index.html","3803632adb9b11123adb79b44849aa42"],["/archives/2015/01/index.html","0bafcafe7f1004901b9a02919dad98e1"],["/archives/2015/07/index.html","9921b82ebab79038b19d7354df5a614e"],["/archives/2015/10/index.html","055bb80e8d4468c2e729e6d6255115ab"],["/archives/2015/12/index.html","5b5d45839fca4313a811e9adc378455e"],["/archives/2015/index.html","62beef136c67f7695eec06f3488a0ca5"],["/archives/2016/04/index.html","929f07129e9ab7431c9afd8de59b2a93"],["/archives/2016/05/index.html","9a82d409cd89fbd82e8c71c92218589d"],["/archives/2016/index.html","bb876eed9f69495e96dc21d027ee5159"],["/archives/2017/01/index.html","3bdee57a5c42ce5366bbb687ec967c1b"],["/archives/2017/02/index.html","01e3489bf6e738b411b948597b17acb3"],["/archives/2017/03/index.html","5742d3c88ec366c3951b6cb0773b28fb"],["/archives/2017/05/index.html","65a9af017d4bb67687ed478f35840e55"],["/archives/2017/07/index.html","8c89256e254a34350f3ce2c48428e24f"],["/archives/2017/08/index.html","104d184663f990465ee81bf834967a4b"],["/archives/2017/10/index.html","777bd7eb04d7f8818cabd9d267fc92f0"],["/archives/2017/index.html","0432a0c923860fa1b517283af8cb795a"],["/archives/2017/page/2/index.html","145ad71919e6b74c7022d0a57aa71d54"],["/archives/2018/01/index.html","9ea39b5e91539f7a562b762c58edddbe"],["/archives/2018/04/index.html","12e4851dddd9dc33e0b52de67a2304db"],["/archives/2018/05/index.html","6d3cda08f833185016765d022fa9e6bc"],["/archives/2018/06/index.html","f4d80117f3ebdebc96759321d893222e"],["/archives/2018/07/index.html","329f3db9f9e6a1eba6a8fd352f756d58"],["/archives/2018/08/index.html","eb12e4976422f9a93c4614b2c3eeae0e"],["/archives/2018/09/index.html","10a46d5d7084e7145fa131cd6ca94377"],["/archives/2018/10/index.html","3cef1321847c160d706db15b455d930a"],["/archives/2018/11/index.html","c8b4b07089bd11c065e1b102e5348dfb"],["/archives/2018/12/index.html","d7bc2e56909cf0203deb2c3c16aede7d"],["/archives/2018/index.html","307134e1b0b054aaab970fc206e3647f"],["/archives/2018/page/2/index.html","4d68e6b76e1942a43caa07ec84ddca27"],["/archives/2018/page/3/index.html","2b30dfc0e90c5a54d5dfa0b74de66be3"],["/archives/2019/03/index.html","3a012df797ccf73c87a5aa232a8a21b8"],["/archives/2019/04/index.html","c7108f14683a8b803ff6eda16a5c1e3e"],["/archives/2019/05/index.html","03e5c6c322e4706b738fe86ba32dc194"],["/archives/2019/index.html","6f7244592b35f7381580ef6cd839a571"],["/archives/2020/02/index.html","7952c38e494176571b97c9deaf9c1841"],["/archives/2020/index.html","f63e79c748cf4195d5bd535aa5069801"],["/archives/index.html","87e4dd1b70c978e6e9d815efa07c6d25"],["/archives/page/2/index.html","59d0551d264fbd303d79d6b197d12dc4"],["/archives/page/3/index.html","012572e71d683d6f37554d798da7b560"],["/archives/page/4/index.html","a5f8e6049d4a493464cd7dea9a07e7e8"],["/archives/page/5/index.html","852e92674f06cf763da09fa00947494a"],["/archives/page/6/index.html","9f3c9bc54fb86c97b91d141cfb8bf353"],["/archives/page/7/index.html","9cf8c05402c02028311e9fa73666f237"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","03200b5ca3bf618d3e6154971968d1a9"],["/bao-guan-qin-zhan/index.html","dfdca12f7834dcc992494baad762a6c4"],["/bao-li-yu-qu-cai-qiang-jie/index.html","7d874b2b5dfab2f2fcd07c3e0df93bb2"],["/bei-dai-li-ren-sang/index.html","06cf0af08a0a7ae38b248307ccee9235"],["/books/index.html","00e97a5de65259468894a21f91a49de4"],["/categories/Blog/index.html","a18d7e1f6bf5a804ea34cf883be239c3"],["/categories/Blog/page/2/index.html","97cd5f1fb0ea3d16bdf78a0c0bbcfd6b"],["/categories/Blog/page/3/index.html","da347c0ee92d2934fa8de54e642609c8"],["/categories/Blog/page/4/index.html","9c75c3a87e4deedfad483fda3652e121"],["/categories/index.html","dc2ea3bd6851f117d7ec112a763fd319"],["/categories/法学/index.html","2a82c826d661da24be2d6173873875b2"],["/categories/法学/page/2/index.html","9bcfb3d10a5db697c5425ed2c83aaf23"],["/categories/法学/page/3/index.html","f6c93a653d061ef79cc6166a27260694"],["/categories/精彩分享/index.html","db6277f9fd939dbc8bef969a023af990"],["/cclisence/index.html","915f1c3047044fb46792dd9baffa5087"],["/cetrain-issues-iv-for-company-law/index.html","67133cb1de254f9847e7dca976436091"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","3d4d3d7b6b7afd738b60d4147f879ca0"],["/cs-hubei-2017/index.html","87fefa5b587776807ac2eef02fe0501b"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","86dac40b9f0c9794c019fcc806e14d38"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","f5338ec6f6718f44df0ae4139910a824"],["/due-pin-workflow/index.html","ae3a04f361bb71273696bea5b7288a03"],["/duo-ci-zha-pian-shu-e/index.html","b33b0b1c80fd7784e5259b861da2e387"],["/expert/index.html","73e7953ccf6c3558c82e318499047b85"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","4840bc580de5248ad324b5811f3d8891"],["/google3756ddc34336b7b9.html","49f69d99c0b2607b3560428c08474652"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","04ff1f9991178c35f60881d54a8bfc6b"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","368484f2f6d9f728a1dfdccf6c48fdd1"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","17ec5e8e1ec614851e6674d603be3401"],["/hustlaw13/index.html","bd461c1beaae64507908ee57445aa22c"],["/hustlaw14/index.html","828880b8ba19da746bf0224f697202bf"],["/hustlaw15/index.html","858c8ab0196163a098228aa047542c2e"],["/hustlaw16/index.html","65109c2e125a01460eea095c14b7ccc8"],["/icloud-terms/index.html","7630c45489241ab458b5efc1e087cd99"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","d7917673147b35acc379552c6dbff85d"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","621629d5a289f63d3931a8efad6ff723"],["/jdsnk/index.html","f26de8d65d13be5db382cbb25bf1c389"],["/jian-qiao-fen-xi/index.html","0f1957116201db38209602e5489894a2"],["/jianguoyun-keepass/index.html","c2b02676f10250bdd68633477961442d"],["/jin-qian-bu-neng-mai-shi-me/index.html","1debfc57846d0bc9a61d11437d3b86d0"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","89c709a0a787244d5e5ef78cc40cc63b"],["/latex-times-new-roman/index.html","6afa9c224a1e1a8c3a7ca675c79c2a8f"],["/latex-yu-lun-wen-pai-ban/index.html","548102e768a56baea8014273852a558a"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","0ccf2c5b827deef67298df23d0e62d0c"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","06bff61f8c954ce835fb985984327691"],["/luan-dan-20181116/index.html","f9c57d43566623e256d649976954c4de"],["/luan-dan-20200217/index.html","9692c664e3479dd3c61b145f1ff33371"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","c7558d436ef70d6d0d038671af1d37d5"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","e655d2e75bb5d18e9017e95c12e6e97d"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","1dc2c7781ad50246ce8d86ca9c550e52"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","ea50a58d06f28505f2ee377aa0e73a94"],["/opoo-zhe-teng/index.html","19ae3e4a612a801961365d169008b275"],["/others-00s/index.html","4eea8f9d1c764a1f2361ab8d3a052ff6"],["/page/2/index.html","d4071c4cb54171261ac48135df56004e"],["/page/3/index.html","03a3c58b46a59393621a618355f9b0ba"],["/page/4/index.html","7bc543d74d5642503d6ca5d9430d74c9"],["/page/5/index.html","c25e67c8282db19f9bd90d535cbdf1a5"],["/page/6/index.html","31c60b7ab0fac6ee52214d39a72d95b7"],["/pan-gu-zhi-bai/index.html","1cd78c048e2f8bc8234473ab51db6e45"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","8a2626e71a8655cb75e874d5d8bea8f5"],["/posner-homosexual/index.html","1e63390aa520c2c4e5c7b25765bf915d"],["/qxpj/index.html","8e13690c310756f937b297c0623db996"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","0a0ed02a16327aed886a40cecd41c53e"],["/shuang-pin-vs-quan-pin/index.html","fc55c605d8fe19f976a1b6e354a2178e"],["/software-reverse-engineering/index.html","bb4be846a7301b1e88e04f3eafa1035e"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","df83a75d306470aabd9144c4629fdeed"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","c03bff4e61c95fbb06a3e203c3a34c7d"],["/sw-register.js","a5b3a3d6186f46a2ef0cc2b687ddedff"],["/tags/2017/index.html","5d19268886bba1f1daa25921efd4b751"],["/tags/APP/index.html","430f20793dd23da44729efdd5de1dd59"],["/tags/Apple/index.html","d8b48f5f23d74a0554c5c995e5516f6f"],["/tags/AppleScript/index.html","a4ee2984af3dc34f9ca35974147dc094"],["/tags/Due/index.html","2a572c1b16f7dccc24505b41a2872327"],["/tags/HUST/index.html","ae3e35f7ac049f0ffd9fa13783c15d23"],["/tags/Homebrew/index.html","938f8841aa98de646e0ac6c282dbea02"],["/tags/KeePass/index.html","615d6c89b46f8f651cee7a48712ea60c"],["/tags/LaTeX/index.html","f0fd367db2075f646f88675379fc90ba"],["/tags/Namesilo/index.html","8d1f596036cc07cdd78fd633dcade0ca"],["/tags/OpooPress/index.html","e6a124aa07f1827b2f4fb00297b362c7"],["/tags/PDF/index.html","5158b86c01ac41324d077c00c3d98e95"],["/tags/Posner/index.html","3e765057aae4d2577db4ff44a45acb59"],["/tags/Python/index.html","2a14dcd89fce684bea23aa7ecea9c927"],["/tags/Rime/index.html","840a57dc218166d16cf5ffce9381778f"],["/tags/Tampermonkey/index.html","778c7f1245302291797e758ddcaf0a6c"],["/tags/Typecho/index.html","e265a0927b56d4cd65adc63d2070c0a9"],["/tags/Workflow/index.html","6eb27c2e288e36abbe2798502a5498bf"],["/tags/cc协议/index.html","a897bff19ceb4da81be2f4014014e2b2"],["/tags/iCloud/index.html","f54600d3458fdb343fece65d930aff27"],["/tags/iOS/index.html","fbfa5cb24a2a405e675d0f043249cf7a"],["/tags/index-1.html","bd6777120e8c909229f92941c751e84f"],["/tags/index.html","bd6777120e8c909229f92941c751e84f"],["/tags/logo/index.html","82c8de32f68f57c5d69657604ece9fa2"],["/tags/macOS/index.html","7d9d671c803e2baaf6b3c633e5287283"],["/tags/vpsmate/index.html","f2ccacb206bcf7ad53188f8e8bd12cc9"],["/tags/乱弹/index.html","1170b9e74f5fa300e545fc45959c9b61"],["/tags/二倍工资/index.html","28e8527f735e9483ba60f9f09c2a7fb6"],["/tags/二维码/index.html","8475c26a9e86f5df00b720fdfa4fb1b6"],["/tags/云盘/index.html","0d4aec1e3cfa75bf80daa848fc9a5a8d"],["/tags/交通事故/index.html","5f88e7cef6c01b24957072b3c6290f9a"],["/tags/产假/index.html","c5277d93d5cecfc8eb28d76fb400d41e"],["/tags/人身损害赔偿/index.html","243c2db00ab03a00a6ee93a563fdaf9e"],["/tags/代理权/index.html","5997bab1def2d4d2692a87e21db4d0cc"],["/tags/优先受偿权/index.html","e03d2cdbe2a82a44cc0a00a490d03917"],["/tags/作品/index.html","f294a5b4caa1eb1d64b49669d43b6e3e"],["/tags/侵占罪/index.html","f1c9576bb8c05007a9600739ce77b89b"],["/tags/儿童权利/index.html","5541c42758ab0b56e6b4ca2f9f7bc043"],["/tags/公司法/index.html","094a1ff04b1fca262dda79f8560fcf95"],["/tags/共同财产/index.html","0b95bab1988c8f73fb24d39e3f36a5b9"],["/tags/刑法/index.html","21d12b4a14643df5533f02e258283bc3"],["/tags/劳动关系/index.html","6ea2ca867562bc2f93b2a1c67a96dc3e"],["/tags/劳动合同法/index.html","ebb52112c13732a056c982c43f3e3367"],["/tags/劳动法/index.html","a5abe8ef512984008c58270adbfe273a"],["/tags/华中科技大学/index.html","4a58fcf48a2a07abc9cac5d7bbdc3380"],["/tags/华中科技大学法学院/index.html","91a798d2917ef28e51522a8ccef338aa"],["/tags/危险犯/index.html","ac3a131cc70274d45fba622d30ddedbd"],["/tags/反向工程/index.html","4e92e76f9c67d711cbf0a6697ca7cdf7"],["/tags/发行权/index.html","bb9c49496e153be995b8f96bee3e02b5"],["/tags/司法解释/index.html","d82091174ac3c8a19be78d112216b097"],["/tags/司法鉴定/index.html","bc7a206d361762733c6852839a918ab2"],["/tags/合同主要义务/index.html","1ad408bb02a6da810a256ca915ce3b58"],["/tags/合同法/index.html","b9010b60277d83331b0f239aa548beed"],["/tags/合同附随义务/index.html","78b3cce8a78a15746f8aed3199cf24a7"],["/tags/合理使用/index.html","319edd10710d9664f4d47f3dc494c6d7"],["/tags/坚果云/index.html","a3206d5dcdd9430f695f2262e67fbcd3"],["/tags/域名/index.html","eda9585570756b34603db0640a981762"],["/tags/字体/index.html","e48d45fad4b55400917229fad3ab78d3"],["/tags/实害犯/index.html","9e9b5aff84b8115fa280bd7985f51012"],["/tags/密码管理/index.html","6f8b532a2df0c55d7628085b408cd340"],["/tags/工资/index.html","118f4add070e1b69bb807a71f36610fb"],["/tags/待履行合同解除权/index.html","883457496eff3bdf57ad1745500ec90d"],["/tags/律师收费/index.html","5aef840fcaf3ff50fa7351e39121056e"],["/tags/思想表达二分法/index.html","74cd005406f144fec3ed42045ede0a00"],["/tags/思维导图/index.html","559145ba89da21c0c7242ee51b2e4696"],["/tags/成本收益/index.html","218d19bae462876f235316a20edbb5eb"],["/tags/成长/index.html","48ba7f0efefac1e30c7f5293d3cbce03"],["/tags/技术措施/index.html","642772a8cc6752f3b34ced692f5b55e7"],["/tags/抢劫罪/index.html","ef8d9e9266abcf4c49ee32e5e77ff8b0"],["/tags/抵销权/index.html","9c159ca52bc85ad353962b1d0b830651"],["/tags/排版/index.html","08544e9bdd49c58313c750d1f9d6704c"],["/tags/插件/index.html","6f44b1091e1e81ee5b5af06eb1aab1c8"],["/tags/搬瓦工/index.html","454961178e97491705a640f92e96380e"],["/tags/故意伤害罪/index.html","21472034df13e367bd70efd3fbc9fa53"],["/tags/效率工具/index.html","febfbabadd215cde1ecc0960f0b02a43"],["/tags/教育/index.html","774ea8e937aa4fd371551b053a3caaa8"],["/tags/断舍离/index.html","b7eaa4ee472ec74c899df5862f827ef7"],["/tags/无固定期限劳动合同/index.html","74096bd3ac47b3aacc52233edc840a4a"],["/tags/最低工资/index.html","164404415c9ca4f32e256575c405650b"],["/tags/最高院/index.html","fa088d58e45b06d15b58721aa9b3618e"],["/tags/机械键盘/index.html","a8a4c359e7abc9feb2463e919b8635f2"],["/tags/武汉市/index.html","2cb2ef78db5d51d00acdf85a9591e661"],["/tags/民事行为能力/index.html","64c171305fbc33ec67ccbfdd5bcc307a"],["/tags/民法/index.html","60710e7fa744db282a6b91287f2daf47"],["/tags/汉字/index.html","0ce2c3ca6dd4f9a69e2a160af9371bc1"],["/tags/法学/index.html","90c0dfe23240b7537c49eb0add13a447"],["/tags/法定许可/index.html","e35d726805c6c9f7199c1a993ce85530"],["/tags/法律/index.html","5c151b7bd60b6ddabc715f00a2b06569"],["/tags/法律援助/index.html","106c17e105785059bcec92d5c16a0012"],["/tags/法律法规/index.html","f61bca97d310b175a2ad2e2890d6c3b6"],["/tags/法律经济学/index.html","eb460d2245c8a4cfff3d8a0e163d9a2e"],["/tags/消费者/index.html","172f216156a6aca60497ac81532c0976"],["/tags/湖北省/index.html","5250abf41f869f03508901e35cf2f4ef"],["/tags/熟人社会/index.html","b90d8915602e3f09d0a5be8cbdf7773d"],["/tags/物权法/index.html","9558f3b7c5e18f3aaedd94693770a676"],["/tags/用工之日/index.html","f51f3bb50c2dd6f508afffb2522bc381"],["/tags/电影/index.html","fbd06df133068d152e2c920aff78882c"],["/tags/男女平等/index.html","3f62b0a86394e464d1265601a37f56da"],["/tags/知乎/index.html","d642f9031446326c8b5b4ad97ad35f96"],["/tags/知识产权/index.html","14e8a1b3b43ac7fd32bfa5a6ad4345bf"],["/tags/知识产权法/index.html","4f491585beb99c5917f29e3286e92fd0"],["/tags/破产法/index.html","5fb1547b1624813385950f64a04d7999"],["/tags/破产管理人/index.html","0650be3f97df5c4802a67d67007f45fc"],["/tags/社会责任/index.html","826744fde604f18aad0d7098b67a7e8f"],["/tags/社会问题/index.html","8e3e97b445794720197fa097f379d75e"],["/tags/经济学/index.html","324abaf5e5c90ed1e3688c6b0e4bab36"],["/tags/结果犯/index.html","296eb48d501849f2a92b70231eaad6e5"],["/tags/缺席判决/index.html","81e9a84f3b542baa6af95807ab6ea8d1"],["/tags/考研真题/index.html","d26a78aa646667d1ead1029d059fe854"],["/tags/著作权/index.html","7cd84a0aeef53d64f4300b30911ae853"],["/tags/著作权法/index.html","0e6e019a785c380f5f61148f1eed5c1b"],["/tags/行为犯/index.html","61aee7075a5410e6210158066f6b0126"],["/tags/行政不作为/index.html","0069d00d37b8cbda98bac4e0d9ffbca9"],["/tags/行政救济/index.html","b238b52a9598824b023e9a02c6997e89"],["/tags/行政法/index.html","63806a5a70162157a715daf890942ced"],["/tags/装饰装修补偿/index.html","0f4999c4e4cb684ec6d754102c471e38"],["/tags/观后感/index.html","73ca1a3968f75c86378600a3f8b1748b"],["/tags/观念交付/index.html","844620b445210a11bfc78f9768683d76"],["/tags/计算机软件/index.html","ad7e46ff7dfb3d7b51acc413e9b57967"],["/tags/认知科学/index.html","4a87de9d37219b4720d72483385d16e0"],["/tags/论文/index.html","871760fc0503f2c53849a1ed5c6ee340"],["/tags/诈骗罪/index.html","dee08171eb6fab511323ffd94b13020a"],["/tags/读书笔记/index.html","fb8059a0a70903f610eb3f38ec672b2b"],["/tags/赔偿标准/index.html","bfb6bac3fba36d6d43f612dcdce62f39"],["/tags/输入法/index.html","e1f7acd9017b581bb1691eb5f92b9354"],["/tags/违约责任/index.html","880adc230ce6756e5f8f7f68df8e6753"],["/tags/违约金/index.html","9fa7c382b01a32ebe71c3f871e0631da"],["/tags/释明权/index.html","d0a3121e104eedb76de42e465379c684"],["/tags/隐私/index.html","19218c1963b91ab249511d24727ec505"],["/tai-er-gu-shang/index.html","6783d9da04ddf4941d46359b54a79fc8"],["/timeline/index.html","1af9ee178f9226bc4fcbc5320d13ccc4"],["/vcard-yu-er-wei-ma-ming-pian/index.html","0401e009c77f070b1b22e269dae313b6"],["/webfont-yu-zhe-zuo-quan/index.html","23262418ae5e1cd97eb53e2f65aa754b"],["/wei-ji-hou-ban-quan/index.html","9be40eff56e5131eb6f088722ce2612b"],["/weixianfan/index.html","6bea314afde49612f314af75155addc5"],["/wo-de-macos-he-ios-she-zhi/index.html","b69521b3aa2cde2f7b2c08655e704d6a"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","52bb15aea1cd198b8dddb4b82f7278fc"],["/work-rules-mindmap/index.html","3b950c280fbf98326364952d3cbb8254"],["/wu-han-chan-jia-shi-duo-jiu/index.html","1245700207fb6238697f922216ff56f0"],["/xzlfbzw/index.html","5bc3c5aeb78b0b253e2b459d3a7bd1a2"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","d0abdb624c2053de183b53829516801a"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","ed7595f932639cc19ee68072598a7574"],["/yu-ming-zhuan-yi/index.html","bdd42fd08535ee6298ab5cf7af318a93"],["/zhetengb/index.html","569c115e6d07ceb2edd7e5d2abc5e38d"],["/zzq/index.html","b473b19aba6710796754f032c6c04918"]];
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
