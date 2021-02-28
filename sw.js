/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","8bd91a4af502340bbab8d59ce699a434"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","b8259bbf9d702fd4dbb316f2621d296d"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","79d50f8165a84219e2dfe500ad335281"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","58d258f13c76be274af8fcd0d6bb4b8f"],["/PGP/index.html","db46cc33c6e31695247dced049e5c73b"],["/about/index.html","7c640978f7ef53b29735112c1c386081"],["/applescript-jiao-ben-liang-ge-ban/index.html","81995e55c53b823b8ae8aa375b7a00fc"],["/archives/2014/07/index.html","8f0b242a0863faa95b2dba251c62aec6"],["/archives/2014/08/index.html","f693e74839c6d53cb529087d5d99cf35"],["/archives/2014/09/index.html","168c91a42c49b1fc971b6582b27a519b"],["/archives/2014/10/index.html","7c17d7ef4f2051a1711ba6cc04243ad4"],["/archives/2014/index.html","d211e4e6305e34e9f4ef5451e10cc50b"],["/archives/2014/page/2/index.html","cd06d642129c607d4dc63b78cec3847b"],["/archives/2015/01/index.html","68f4036948dc85a7b7314f9dc9cf0055"],["/archives/2015/07/index.html","decf6f55bca05597661f48142280c9cc"],["/archives/2015/10/index.html","16630a8cefc190e9f58f2b89e501378a"],["/archives/2015/12/index.html","4a05fc353e33b7fb7d3cd6cbf3a4a678"],["/archives/2015/index.html","36fca840842f97c53a8b41aa1593a547"],["/archives/2016/04/index.html","2f1f3db906c535720ccefbab8f596253"],["/archives/2016/05/index.html","601b0b8c0ee2848ac0eac20b3eccb895"],["/archives/2016/index.html","72b7248c363e181ffa99caad56e1fa3f"],["/archives/2017/01/index.html","9691b03c0c7fb32540a3e09270dbddd6"],["/archives/2017/02/index.html","edd8feb109be9ee682747192ff3468ef"],["/archives/2017/03/index.html","296493fce32cc24e0631f35b38d2aff5"],["/archives/2017/05/index.html","6e18c061aadb98460e7560c535704821"],["/archives/2017/07/index.html","f02e450495451bac4713854a3b108535"],["/archives/2017/08/index.html","b86aadbdfd787fc192441ed394991b07"],["/archives/2017/10/index.html","e098d8305afd6b72b48043f01df3caf2"],["/archives/2017/index.html","2026afe978659a29074284571bc5d53a"],["/archives/2017/page/2/index.html","787927b5152abb1305a378b4c244d0c1"],["/archives/2018/01/index.html","830a700ca67caf82bd91017ab015a128"],["/archives/2018/04/index.html","b40bec2249b7cdfa69f559c588f2427a"],["/archives/2018/05/index.html","cfa5a86530df357c98f2c03945f9faae"],["/archives/2018/06/index.html","ad91c50fa47b54b8aabc54a5266d9083"],["/archives/2018/07/index.html","299a8c1cd7d0b45af3b0b3c3a9a643f9"],["/archives/2018/08/index.html","42079fad3f15a8321ecf6d6ffb12e542"],["/archives/2018/09/index.html","c2250f62fb173bfa9b53b6e079e5df13"],["/archives/2018/10/index.html","9b9224908ddc8c312e6f72522c630712"],["/archives/2018/11/index.html","8690a68f71fdab55963b62218e19b647"],["/archives/2018/12/index.html","b1324e7cbedd2c8db11f40d3f7bdfd91"],["/archives/2018/index.html","27b8ee6d1c1b2166231f7b6afd9f72be"],["/archives/2018/page/2/index.html","a41b2539cc961c5e2135d1d3ae656c1b"],["/archives/2018/page/3/index.html","17c0bd0b5ff29b55d4efb1a39079c552"],["/archives/2019/03/index.html","3d6ac492d5c4068ba1669f51ea88b41f"],["/archives/2019/04/index.html","e18540bf8edc03c033a71dac054aa884"],["/archives/2019/05/index.html","06b4ce767ac992911536432f8ad66956"],["/archives/2019/index.html","17aec90aba02d39f7afe7e8fa348cb2b"],["/archives/2020/02/index.html","bc47b535175a6564f0d8e142fe00821a"],["/archives/2020/03/index.html","0176334942feaf1983fe41cd9064941a"],["/archives/2020/05/index.html","c546788c5e202374ff2776f6ac1488c1"],["/archives/2020/06/index.html","2fe3ded80c4886af01cd76117bb599e9"],["/archives/2020/09/index.html","c148fefb11c464f1ed997dc49c25d1f7"],["/archives/2020/10/index.html","367dc65c5a556e8c01a39a7ad7a4f193"],["/archives/2020/index.html","75b6025ec329ba070a55a1e215f437d4"],["/archives/2020/page/2/index.html","eccf137ad73e30c48aabf5b21e541c27"],["/archives/2021/02/index.html","eabf4e0548bd98d81b0ad515222041f9"],["/archives/2021/index.html","e68e12a7197b004e5b26a1ca5a3d6df7"],["/archives/index.html","8b637bd8aeea53b7d0b4914ac6db9de8"],["/archives/page/2/index.html","53afe052e5630e73c7590337468b708f"],["/archives/page/3/index.html","1dccfed4460491e913987e585049baeb"],["/archives/page/4/index.html","50e3f9d761ad34321809ff5ac1b8b06d"],["/archives/page/5/index.html","6566c1c4f9f7717786199b00fd330de5"],["/archives/page/6/index.html","1aab50f93b0f4f742a8770c878683fc5"],["/archives/page/7/index.html","a1bfaf4079d10fb1a70cb57ab606e421"],["/archives/page/8/index.html","ca58d74f3c70457bd57d5a135a17191e"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","73ce5c9c5d9b6d238e110541c8e05428"],["/bao-guan-qin-zhan/index.html","457c5039d91f5c97592323d3b3bb9adc"],["/bao-li-yu-qu-cai-qiang-jie/index.html","f8197fe44176b371d515e15d6cd8dd9f"],["/bei-dai-li-ren-sang/index.html","ea064b803fe29ae77601c734b6311447"],["/books/index.html","0d08093cf34262381e7055690e60f164"],["/categories/Blog/index.html","06be3ca34649d8118ff866e2b5a4842d"],["/categories/Blog/page/2/index.html","84f719851cf8685311b3eeaa477fd0b2"],["/categories/Blog/page/3/index.html","f62441474b10b248d88ea9f6cb0d64e8"],["/categories/Blog/page/4/index.html","46aa30042e2560d54ce5986a034488aa"],["/categories/Blog/page/5/index.html","c1e6c252b13a5dcdfd6952be66b3e9a4"],["/categories/index.html","434dc79f6934e95950ae2b042543f17a"],["/categories/法学/index.html","10a6cb7feb0ea79d7ec86bc29388307d"],["/categories/法学/page/2/index.html","1b2d030d4c5f7018c1e1991157a5c36a"],["/categories/法学/page/3/index.html","c1f5eb6baff3ba2f405de3287924a7b8"],["/categories/精彩分享/index.html","24246ab71a290fea00c311b823117781"],["/cclisence/index.html","7946fb8aade905f7fef2667f8a4eb57d"],["/cetrain-issues-iv-for-company-law/index.html","938c35945707b5c871e571dee051f00b"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","1b61215986b60e079afe8551ba4513da"],["/cs-hubei-2017/index.html","6f9fd037d3ff54a9640a6ac9156e1991"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","c3981e6a6c2a3c0255eb38607d533bd7"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","3c712474f801c38aa2db484c4cdad770"],["/due-pin-workflow/index.html","6a4d57b1464177aaed1d0bb9f5bb5384"],["/duo-ci-zha-pian-shu-e/index.html","10a231d6f9b626dc294e6b515dd958af"],["/expert/index.html","b29ae7e8283d0e23efab27281cb37b67"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","5b154a86bd4d8d686117ad32c2d72b9f"],["/gang-jing-wu-ge-ban/index.html","1a231bb86eb85860c0a12bec721774ff"],["/google3756ddc34336b7b9.html","24ec4aa67e726526b0b01dd9b681485b"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","64a822504d89af6865a7d0a797517d5b"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","808a8ae10f8496e616a60def96ef64e6"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","a6d18abc2df2aa153ba32376c02cd44c"],["/hustlaw13/index.html","453e7f0c00f01e2c0d1fd0c44c494a21"],["/hustlaw14/index.html","e7921b6b846a0ab91b36983fe5a169e1"],["/hustlaw15/index.html","6e00cf9c195bc84635529043a8460967"],["/hustlaw16/index.html","4d8418fcef36754e62639aa883d0d0e6"],["/icloud-terms/index.html","019e6466d6d9a9f3ea5be05c85c9aeb6"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","ee89c0bdd396f631ed28274b1a316d8d"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","5d2b6360f6df72e90c7cea621fad3f08"],["/jdsnk/index.html","3b6d682284eeeaec797a7b257bcfb85a"],["/jian-qiao-fen-xi/index.html","8a0817f50519448363a09bd90c936d00"],["/jianguoyun-keepass/index.html","a95078c1e485bb3881c0a7f9d9cdb206"],["/jin-qian-bu-neng-mai-shi-me/index.html","a3896a304e2b8b4b7047cc2d83a9beeb"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","732b9f4f0488f6402b3eabcf8346b8b3"],["/latex-times-new-roman/index.html","6bf14ea092a2d386840e2e7be2579fb4"],["/latex-yu-lun-wen-pai-ban/index.html","f1ca76f3ca96720b8ec4aac1179da31e"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","876013e0e8bfe2b6c95dc818a9861fc9"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","7d30413c36b60c73823b00f0cd818a27"],["/luan-dan-20181116/index.html","72802b0faabf4b28541a48c4724bc3e2"],["/luan-dan-20200217/index.html","9cf9df8df9008a300c59bca25da473f5"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","dff866dca834286bb856c65d064e2543"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","3ce50ba22d425f4bde5a1f2f3d066766"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","632d0976d9ec5f7847d2c72674a94a36"],["/movies/index.html","5e355e2639924209cbbf6727e701cfc2"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","69f0acde5f329e710ad703e27b50ac43"],["/node14-bao-cuo/index.html","78043b5ed56ad1085762a9f72902f6a9"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","f391941976ca96b26f86e6810664c309"],["/opoo-zhe-teng/index.html","b576f95ac055ba6f6e77ee56f98b1c42"],["/others-00s/index.html","c66c7958c9388c61f51acc6ffdbce741"],["/page/2/index.html","32090b1fb3632677439b7e116c4918ec"],["/page/3/index.html","b60116270f9fb9816d9c76f1e5193e28"],["/page/4/index.html","ae872640473e08100a0acb3d60344e23"],["/page/5/index.html","ccce0d24520295eace0b87287903c4c9"],["/page/6/index.html","8ead8ccbbfbbe5b9bd5ff1b0ee40cce8"],["/page/7/index.html","8bcc0ffdead6304113da42a2dca4bd43"],["/pan-gu-zhi-bai/index.html","cf233638481f88cfcd215465b70da718"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","ad5e461bf36882f41af529d3e39ca0c1"],["/posner-homosexual/index.html","b861a48110e6b2025fb188154dbb9893"],["/qpdf-shi-yong-bi-ji/index.html","8f6cc89c66a9a91a2b0671fc613ff4ab"],["/qxpj/index.html","e3c638bc87aa7077eeddae859b076237"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","e3a00777c0e6d9037984fc70f9ffe08a"],["/shuang-pin-vs-quan-pin/index.html","99726363021ad5a2310b4e782c38b76b"],["/shuo-shuo-xiao-fei-quan/index.html","59bcd689650e057056b9908bb39f440c"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","cc458a8910be78337d67d42ba82755f8"],["/software-reverse-engineering/index.html","4eb97b8b9a5e422c63eb1a50bbff9974"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","12f1492de17f279b2e75812b94a0a3be"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","e5168077d6daaf60c6e982925c77b251"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","96ddf023bc72b6016c3239969017dea6"],["/sw-register.js","e1c45d660b37ee3e803f52aecfaa9839"],["/tags/2017/index.html","c9f51ad8dd3907422e9950ea090402a5"],["/tags/APP/index.html","38ea048d583c8cbfeea7d54596cf4b36"],["/tags/Apple/index.html","4de1c7b36b234e05cef45cbb3c2695c1"],["/tags/AppleScript/index.html","0d504b1a7d19e172f82c00a65dc4a11b"],["/tags/Due/index.html","a9e2e95f648e8478d652f5b4f5a9d46b"],["/tags/HUST/index.html","5a75cc5f2d8121b5da76a6356d73ed12"],["/tags/Hexo/index.html","1723e8c1e624f5e59bed19e8f7900216"],["/tags/Homebrew/index.html","5a811f43f4703ba8b4c4b20c9d244609"],["/tags/KeePass/index.html","afe4d2c83f8bfedba53b29197fc7343e"],["/tags/LaTeX/index.html","e8d36fc321fdebe6cd84ea66fda13ea7"],["/tags/Namesilo/index.html","064d66ea04786c267ddcc02e393d94e1"],["/tags/OpooPress/index.html","0311bfdc5b1ff35b6eba6b53a0e65137"],["/tags/PDF/index.html","e04cd87a2da1dad7f944d599d4fe38aa"],["/tags/Posner/index.html","58757b52fb0af98245266a7f345370c7"],["/tags/Python/index.html","7006dc7600a34f4e71deff9c7f52b024"],["/tags/Rime/index.html","95f357aa18ac30e0b40159c47a72a93f"],["/tags/Tampermonkey/index.html","568278f43f3a65a2980708bfad2382b7"],["/tags/ToolMan/index.html","42377b8788714a6c1de5e07d4cb5df2d"],["/tags/Typecho/index.html","367924af90be129e441ce567fe0a6491"],["/tags/Workflow/index.html","7bffdfc43b90bed6b1ace9aea96e310e"],["/tags/cc协议/index.html","5362ab8ccadfae89a405365468420446"],["/tags/iCloud/index.html","669ac169198d5b89562afda240a5330d"],["/tags/iOS/index.html","3d14264d5effe26b8fa497727937bdfa"],["/tags/index-1.html","55c6fd9edd059a196dd6690fa784aebf"],["/tags/index.html","55c6fd9edd059a196dd6690fa784aebf"],["/tags/logo/index.html","ffadd190d973e0546d209cc9faef98e7"],["/tags/macOS/index.html","101b60ff94d2b9ea126902119af70532"],["/tags/vpsmate/index.html","f98f2739832bce7f77b1e332f8ea763e"],["/tags/zsh/index.html","02aca7d7db75432fe455418375d814d5"],["/tags/乱弹/index.html","3eb5f31fd591317c66b4b1b3ede37d10"],["/tags/二倍工资/index.html","5f0c5be62da793d7e75b21734d009403"],["/tags/二维码/index.html","6e18ed4c0b43963c2e325119467e99a6"],["/tags/云盘/index.html","653ff4b9b438d15acc904de7fa637cc6"],["/tags/交通事故/index.html","a82dd2058b512782782e9fd1a42b24b1"],["/tags/产假/index.html","af34c490c3e66916eeb60328c7a01701"],["/tags/人身损害赔偿/index.html","85d4808df090b168ea7329e1a6f7c050"],["/tags/代理权/index.html","48da84d5bc6e9625fbd60377d52fbae8"],["/tags/优先受偿权/index.html","5bce0f3dc297ad80606299da3643830d"],["/tags/作品/index.html","5259d220e0faab843ddc362d5896a2f3"],["/tags/侵占罪/index.html","cfbfd35fb427e18fc17d0411a8631224"],["/tags/儿童权利/index.html","1504497a86767c8bff7d2d0217012836"],["/tags/公司法/index.html","d0f940ffdc28c75b23325f2234921563"],["/tags/共同财产/index.html","9f8fbb2458d5eaf145bf18f99b9a9b8e"],["/tags/刑法/index.html","1a1773a8286c9ecefaf8d5b779c9ab3a"],["/tags/劳动关系/index.html","dc2c87274ea91a2433f154fb90c9f236"],["/tags/劳动合同法/index.html","0e255ec4b95be1576f096cd5dd09edfd"],["/tags/劳动法/index.html","87319c1725aebbaf6bd025bda7f000e8"],["/tags/华中科技大学/index.html","424cc101c5ae66f748e3236107448846"],["/tags/华中科技大学法学院/index.html","e8f4eee73638c1c433f943d818c1d351"],["/tags/危险犯/index.html","7fc810783bb974bac9752e0a5f981b06"],["/tags/反向工程/index.html","9019b8b3768d1a750b7c627f384f420c"],["/tags/发行权/index.html","28c2302d41c8d27e287748128e4b99d2"],["/tags/司法解释/index.html","c0a5ac55c3b4cbd8a2cf139d3b791f55"],["/tags/司法鉴定/index.html","3e7b21045fb5e3fabbc19859fd1d73fc"],["/tags/合同主要义务/index.html","99cd6c72400ac182cbd8b5f519a5a9f7"],["/tags/合同法/index.html","8b1bd0c738c2a3cc147dae31ffe773b8"],["/tags/合同附随义务/index.html","8973894323997dc6b35f2a75ee13b5e1"],["/tags/合理使用/index.html","a4c8c2e9864c94b69b20f9c3d8507e93"],["/tags/坚果云/index.html","4b151369491b81d29ef288a9deffcb04"],["/tags/域名/index.html","7982696197c87d6b711e3efeb3c50794"],["/tags/字体/index.html","8cf4854b3bd6d36edf2c3729141d9982"],["/tags/实害犯/index.html","3e4884960cc25090622bcdfe79ab3a9e"],["/tags/密码管理/index.html","f91cfd63c4b5fc25ddc30571e3e0a43d"],["/tags/工资/index.html","75cb26ee61eaf55e55338846c87efae2"],["/tags/待履行合同解除权/index.html","d5fdd9a29cbb8422349b2cc9111b5380"],["/tags/律师收费/index.html","4c742e11fba853cb75a8e3730eebda52"],["/tags/思想表达二分法/index.html","07cc43927d07187d6ff2e8ef8c9fe167"],["/tags/思维导图/index.html","f8bee5b33e8fda2086b7fec479e6d2e3"],["/tags/成本收益/index.html","e8aacbdb1db849692e5f046680753a7e"],["/tags/成长/index.html","400904f9fc37967c51f17b638d6eed45"],["/tags/技术措施/index.html","3570a4142ee24f910a4c537823c42b5b"],["/tags/抢劫罪/index.html","72cddd772d3f883ac921f46e2a448487"],["/tags/抵销权/index.html","556131d2fc2dec881dc966d4edf1ec4c"],["/tags/排版/index.html","76054d6b285ff84c51de7258902dc0e9"],["/tags/插件/index.html","fcd73236034f519db78c3d37fd01d0bd"],["/tags/搬瓦工/index.html","4a183fe4802e8ea133ccf07e0627a89a"],["/tags/故意伤害罪/index.html","f487548d68988c795ea32f6d2221c5a7"],["/tags/效率工具/index.html","87e394d4446c2c3b2f8f7b6c3395156c"],["/tags/教育/index.html","e18c9d99b61f2d1d5a362f20091bdc44"],["/tags/断舍离/index.html","4746612b75ca8eb49e057546b39b0d18"],["/tags/无固定期限劳动合同/index.html","05e8fb43421e78889ede8ce90eb2492c"],["/tags/最低工资/index.html","ee6400c81961b7e6e939bbe6dbb16253"],["/tags/最高院/index.html","62464ad88be77bcb2475a960e80031a0"],["/tags/机械键盘/index.html","d2e250113667297b4352e050df379f5a"],["/tags/武汉市/index.html","04c653c9eef94bf6edafd939b82b74b1"],["/tags/民事行为能力/index.html","2dc88c984eb6a66c7ae70a9528c35dac"],["/tags/民法/index.html","c65e1710fac79f0560b35d127066f710"],["/tags/汉字/index.html","3a0f0ce2b23a11df7f595c457932788a"],["/tags/法学/index.html","6cffb7687a02e00b17c9c75a4cb72be3"],["/tags/法定许可/index.html","410f44bb50dbc1d9917560fc1ef2c805"],["/tags/法律/index.html","a460e427320cf6d4e16d8bfabdd0af97"],["/tags/法律援助/index.html","2bc5d3f61e851640a3ce83c1ac20842e"],["/tags/法律法规/index.html","90eb30c136d3ab16c413706af5d5b8a7"],["/tags/法律经济学/index.html","ac6414a15a2dcc743f23c7c9d6490ce1"],["/tags/消费者/index.html","667558be14d8c021c5a89a7f0ac92d71"],["/tags/湖北省/index.html","fd32eacc65014be58299e163c34b07b2"],["/tags/熟人社会/index.html","f7b5f664f225b90312e0997c5465d413"],["/tags/物权法/index.html","4983d655cd07973656be5680b0a6d05d"],["/tags/用工之日/index.html","a92f7b38f79c1fb64e3b21cbfd172696"],["/tags/电影/index.html","117f3803cbd67d823d902dd1512fc541"],["/tags/男女平等/index.html","03c298251c7d4804a7a5571de59d383f"],["/tags/知乎/index.html","f70ce4bb4cdd6034867fd3e29401fb28"],["/tags/知识产权/index.html","61b818034bb9c82806bdb5873cfc0885"],["/tags/知识产权法/index.html","3ae5d6ee73b06d16cb39139291b2dd52"],["/tags/破产法/index.html","8efe89ef49f4a4344dfb4a7d5c3435d2"],["/tags/破产管理人/index.html","0f3220b7befc08787d937bcbe68737ba"],["/tags/碎碎念/index.html","7696667c4987f1769e2a0b57a7771692"],["/tags/社会责任/index.html","aeb72965a4ae068a4a4401f9306eb829"],["/tags/社会问题/index.html","8b2da68a77f667b43812087af66f6213"],["/tags/神经科学/index.html","76007b65c521f5cbf99ba7915277000d"],["/tags/经济学/index.html","9cb391cdbee07c90d6a4a5e6d2f46861"],["/tags/结果犯/index.html","53cf9468098b541b8791928148964560"],["/tags/缺席判决/index.html","0c2ffcc090eee2188802f672ee2fd87a"],["/tags/考研真题/index.html","c64db484d19da7a679164858bee19dd9"],["/tags/著作权/index.html","5a0b6f549e68e047c6faedea9a58c51d"],["/tags/著作权法/index.html","f342e3d2236286e383330a5b63bf369e"],["/tags/行为犯/index.html","ab6779d3de40381aef8757b315b3525c"],["/tags/行政不作为/index.html","ea92c46aba374cb17c500a3ab4d1ba7d"],["/tags/行政救济/index.html","de82a2986b636769d8f274e3c6aba599"],["/tags/行政法/index.html","e20af86111209b87fc8785a1b110061a"],["/tags/装饰装修补偿/index.html","f2014218cb984705a55eac8bed93922e"],["/tags/观后感/index.html","3c17aaeeaebf1349922527fcfe7730c6"],["/tags/观念交付/index.html","5a6a5c0439c1fb8ab296f94f4ab4dabb"],["/tags/计算机软件/index.html","dea00489ebc9e3ea798cc69113617e2c"],["/tags/认知科学/index.html","68bf8d1582d4f690b8f1c4c9e9cb3728"],["/tags/论文/index.html","1aadeec0c4daeceb1a109a2c1842021a"],["/tags/诈骗罪/index.html","b9be1016287e16fcfae64d18a2cad507"],["/tags/读书笔记/index.html","41438e17b21f9601b80f020b4c9a4de4"],["/tags/赔偿标准/index.html","234d8ee3c4e39a77702adf4238be4c4b"],["/tags/输入法/index.html","7caeb81c9cce5938663f2cc057f432a4"],["/tags/违约责任/index.html","78da1349786fefeb14880f9156a50f5c"],["/tags/违约金/index.html","98437d55450df182e439331d86d47f81"],["/tags/释明权/index.html","02f71eb6bb23779074361eba89d3f06d"],["/tags/隐私/index.html","5bbffe6078b4328a917f89c6b4c9df13"],["/tai-er-gu-shang/index.html","84876af8e0aaf81167891f7bd526e250"],["/timeline/index.html","93d9122d73e156b7ed52c62cdf12251e"],["/vcard-yu-er-wei-ma-ming-pian/index.html","41d1b901a983a009adc9635108104149"],["/webfont-yu-zhe-zuo-quan/index.html","c290275b4495a93a0d78fdaed35b42a9"],["/wei-ji-hou-ban-quan/index.html","3fd318ee6a6c73a7347610515b21a8e3"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","749072576309b03d96e4dcd7977a127e"],["/weixianfan/index.html","f2c64d93ff5daeb5ee5e7e9677b3651a"],["/wo-de-macos-he-ios-she-zhi/index.html","37924f9747f210617f226adff1612dd9"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","dea2e4079f698ce195a377c24b4d9048"],["/work-rules-mindmap/index.html","59f1dd6f7946650eaf17db61f43c533c"],["/wu-han-chan-jia-shi-duo-jiu/index.html","b9ca7b837f2842d0d5e6e4a1fb9e591c"],["/xzlfbzw/index.html","fec8bb137762011d7842aec9d6028315"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","c6eebec947d1d2cdfd5f5fcf9c4d26b4"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","00afc0d36ba812e8bf86f036122777f7"],["/yu-ming-zhuan-yi/index.html","7f09a6bcccc69b3590ce47ddc202e2cb"],["/zhetengb/index.html","3cbdbec71970c490b98bf12b34eb0fbf"],["/zzq/index.html","8844b29e8367ee53468c8f24752e7aef"]];
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
