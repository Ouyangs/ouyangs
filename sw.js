/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","695446a3a2e324ebd3b2244f79204470"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","c9a48e87224bfe79d20ba334ba3aa55d"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","1ca230d287e88d067dafb91312436512"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","4b170f43a0ca021a3f48977151f9c0b9"],["/PGP/index.html","85b86b9377ca6dc088052a3f4281fd3d"],["/about/index.html","17f98f8ea64b69c4f44b0fd9dd098034"],["/applescript-jiao-ben-liang-ge-ban/index.html","1dd070e1fe9ac4c414a9a6b42f34a123"],["/archives/2014/07/index.html","3f6eec8dd32be4d48805c9bfee485175"],["/archives/2014/08/index.html","57b135108f81b31ae74e392c7f7ae2d4"],["/archives/2014/09/index.html","baa68661c8da01b0f8a8d168d3dbe455"],["/archives/2014/10/index.html","11b6099f66a9e07f264a3871dfb2eeab"],["/archives/2014/index.html","3284efdd9bd8c206d439b7beb23f84f5"],["/archives/2014/page/2/index.html","5ccbc07864bfb39156483ccbd5246e0f"],["/archives/2015/01/index.html","f04e25a13810b406c615d13df935909a"],["/archives/2015/07/index.html","4562372005abe1f75660c7842b141794"],["/archives/2015/10/index.html","1913387cd445056f0b8e687e3700d9cd"],["/archives/2015/12/index.html","69dfa925e1c47847324523dc3c8f2e8b"],["/archives/2015/index.html","c7032f159b3a98e673da9765832d45d4"],["/archives/2016/04/index.html","5e083e1e81ff2b610a3762a4521faffb"],["/archives/2016/05/index.html","1d2356e60c41084c4963a130b89ad515"],["/archives/2016/index.html","bd49d0929b1d51bb4f85cc7c359f4c95"],["/archives/2017/01/index.html","dd8beeb5ab4a528495d5a9387c61a909"],["/archives/2017/02/index.html","fd272c5795ee1f6a406bb6f258a06e97"],["/archives/2017/03/index.html","54af32413d2c63c48a4e5c19dd1decfc"],["/archives/2017/05/index.html","af4a88aa439ddcd39e292b459f7050df"],["/archives/2017/07/index.html","9fa0665986417ce52ee61e35066bed6c"],["/archives/2017/08/index.html","dc798c10e09323b3babb6b66acbe8bdf"],["/archives/2017/10/index.html","b053549b281b2d2ba45c2371692c5c22"],["/archives/2017/index.html","f8ca0160737c7e4b4518f94a1bfa1e26"],["/archives/2017/page/2/index.html","a3022f9e4d0055b4035c3c7f0c645f70"],["/archives/2018/01/index.html","e06b071836bd77c87adc383338832c84"],["/archives/2018/04/index.html","a2928d1294352b1e686d06036e92989e"],["/archives/2018/05/index.html","5c7850680c1944bead1c3b6e4d68f99c"],["/archives/2018/06/index.html","4c57c0b53dc3e9ae1f52a91dc6c8b593"],["/archives/2018/07/index.html","13841ac5a9940f15d75d424930b1fb57"],["/archives/2018/08/index.html","1816d40a4d1427fff19a8012ad036609"],["/archives/2018/09/index.html","227e61bbd703a3ee0638250740640492"],["/archives/2018/10/index.html","88c052f125641efd001ef2c1d3f4ee27"],["/archives/2018/11/index.html","c4e922d042a2aef7c57eaa005d08c267"],["/archives/2018/12/index.html","ced547da7e1d7780359db797b0c465c4"],["/archives/2018/index.html","389b791cccf84b58694ee1fbd6a0a4b5"],["/archives/2018/page/2/index.html","f3bd010d45616b8b763ff3c76850735b"],["/archives/2018/page/3/index.html","608099b440af21f00464c91e149f93ac"],["/archives/2019/03/index.html","a9d4c4cdbad2060d7b863fe7c89e86e1"],["/archives/2019/04/index.html","86cbe3ea4bee7ce2747a828e1d3f435a"],["/archives/2019/05/index.html","f287a72e436ba9c70b4d44046b6828b2"],["/archives/2019/index.html","6c9c6b5ed4a154a9c5328196d0c7d2a2"],["/archives/2020/02/index.html","6fb7c030e23322ad061d47702ca496e6"],["/archives/2020/03/index.html","298d9aa663eca8b88089444b0e448ae2"],["/archives/2020/05/index.html","2566b931a3036c9c25928c471e8ab214"],["/archives/2020/06/index.html","9cfa442cfe08574235cf7003912adf2b"],["/archives/2020/09/index.html","3639931c0da6175af8872eaf53d15f2c"],["/archives/2020/10/index.html","92ced737cacb77205437db83f8ae23c8"],["/archives/2020/index.html","f5bc842268f915564e536538709af636"],["/archives/2020/page/2/index.html","50e4ad75883df4757324d58a5f8fbff5"],["/archives/2021/02/index.html","7c1a3aae35f02407ab9ea0e4b1bd1055"],["/archives/2021/index.html","f10af54f3cae246a5cd25821f72e14c4"],["/archives/index.html","793de96a2f7600c013fd5707b509ad54"],["/archives/page/2/index.html","148ac1dfa932fc5d3960d7f70a846be1"],["/archives/page/3/index.html","90ec57a7eb6ebfe16aa30ef1e86dee2f"],["/archives/page/4/index.html","2808b855bc54e837aa49cc46bf9fedee"],["/archives/page/5/index.html","e1f21bf663edc7ef9a6eafaa445898d0"],["/archives/page/6/index.html","5bbc637a30682d92cc5a8ae6b5452a28"],["/archives/page/7/index.html","329e801b86b73a7530e52474c1589aea"],["/archives/page/8/index.html","9b10c7051cae574b41a25e8f370fce4c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","29df47af7f252de1926a3727eceb78b0"],["/bao-guan-qin-zhan/index.html","046c72a7b6785661732ace2072a07982"],["/bao-li-yu-qu-cai-qiang-jie/index.html","7706624802baf9face55bac8119e45f7"],["/bei-dai-li-ren-sang/index.html","fe78a2112b0916aa436e605a9c61f515"],["/books/index.html","02b4721370ce4b2b5929a38be9062587"],["/categories/Blog/index.html","2f5d57abec8e8087d30c66577252013a"],["/categories/Blog/page/2/index.html","5eab519f99c60c10d23fc19975751e3d"],["/categories/Blog/page/3/index.html","4ae3705c9e4e6b6f3349203fb239994a"],["/categories/Blog/page/4/index.html","89fd9371ad5ab99aada0cbd580b76c1f"],["/categories/Blog/page/5/index.html","7f86e41c29066de1da9ea521d9e51e39"],["/categories/index.html","7931088acec0384e773259a7ba3cdb25"],["/categories/法学/index.html","3f24b7bead8138a0e9324f4eb7c7a0bf"],["/categories/法学/page/2/index.html","f0b1754cda7acaca43f8e1f146931498"],["/categories/法学/page/3/index.html","261e7da45c7a0432160c30ef27ed0146"],["/categories/精彩分享/index.html","f5aa37e407b0ba23ff857c3ef55a575d"],["/cclisence/index.html","68e578a026fe7c4242da9340ed760658"],["/cetrain-issues-iv-for-company-law/index.html","737fc3abacb5d7049bd8c62dc331f5f1"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","069aa5099dfe333448f380a918ff8712"],["/cs-hubei-2017/index.html","2bd5ddbe2110f140ef37468db84015ca"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","8bf6479ff944e336a19854de7ce13fcb"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","28031a4466dbe27a960262c5e5f6d7fe"],["/due-pin-workflow/index.html","6d76917a42449bd9d9e86305f85bed23"],["/duo-ci-zha-pian-shu-e/index.html","e82f6ebdf615bb7ce9ca5a361c5fba97"],["/expert/index.html","da3c70e07441840f156c9ec533732cab"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","dd9674ec15ea9d712c995154b3e6ce76"],["/gang-jing-wu-ge-ban/index.html","c07c052731f8f5765d483e61a8a39504"],["/google3756ddc34336b7b9.html","5d593971b05701e5f265c0bd8d40a0ba"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","04f94e9a57c052eff7342f3ba749b23c"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","c2ffda1654d3395f22fc8bc062498ef2"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","5826c1aae72a4c98fc7a159608600e72"],["/hustlaw13/index.html","a8aa87dcd9ed753134b8bc2ab67c3599"],["/hustlaw14/index.html","9c583aaed4b71161bc64f17dae85c415"],["/hustlaw15/index.html","5f5b406986fd5183c2a5c1eb1a56e269"],["/hustlaw16/index.html","45b48a260b62f9638fad1e32fa30e16a"],["/icloud-terms/index.html","63c3fb46ec399d114f610426cf16e77d"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","b265cb6bcaef5e118a47fc1e78e8668c"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","8fbf99d6ae6058ec4a85583cfcfdf0e1"],["/jdsnk/index.html","1420f6921d539d676afb50a858c2670d"],["/jian-qiao-fen-xi/index.html","450e0635c001a26c06e016c2f0eac4dc"],["/jianguoyun-keepass/index.html","b9145a0571e3d574b5f641ee90855b43"],["/jin-qian-bu-neng-mai-shi-me/index.html","136817768aa98ca03add220f42fbf959"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","8d9f43cddbd1f31da34f7b320d3ec753"],["/latex-times-new-roman/index.html","7ff4ed81728b8fb3851027d3f5b1d5c8"],["/latex-yu-lun-wen-pai-ban/index.html","b135f2d342350e1154c144fe4ce64294"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","a4649eab9d9c9e8f0f295cf5273a7e13"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","05109eb438a956c991522a0c0e2d331a"],["/luan-dan-20181116/index.html","2d2d1ba85fa1bf1f02d1d51c8fb46efa"],["/luan-dan-20200217/index.html","eee8e903e32c2ce754fbe5a4227a9079"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","c008e1c4d7fd15f7a98b0668ff1894f4"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","b576047c11073e21f8761f6fee7156a9"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","c208ba38faffbd33a3ccf76d4aaa130d"],["/movies/index.html","85e699f328122cc449727315250fffff"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","e83320d220770af5102ea86364e321f8"],["/node14-bao-cuo/index.html","fe0661ae04b5a6a2c39481c0118da310"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","f9d643a3650d8348d167e404a812ab9d"],["/opoo-zhe-teng/index.html","56b11b2194d88cfcfa67413f8450fb4b"],["/others-00s/index.html","96617217589825edf510f94a6e8141b0"],["/page/2/index.html","c9b6c27ee974dd3bc212d8f5b2e4a871"],["/page/3/index.html","7ec214dd89afa47184aec4a3b246364b"],["/page/4/index.html","4ecf8ebba811c39951ff00dcea6df2a4"],["/page/5/index.html","740f9871936482f12f55c3a81e49f199"],["/page/6/index.html","e5c101b4c38985fd566c9b9ad021270f"],["/page/7/index.html","da0805352ebf7009f415053348b330ca"],["/pan-gu-zhi-bai/index.html","d0c67d5b636fce64e14abda1f7fce7d5"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","7c43aae0fb6a9c290b49b7d119cf1067"],["/posner-homosexual/index.html","4f74b2a2fbd75714ddb90fa9503cd812"],["/qpdf-shi-yong-bi-ji/index.html","3d640dc3ce561fd5324b01c272cdf244"],["/qxpj/index.html","31e4e1edee076cf8727fc65037cdb7b0"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","3240e88b06e6cf12fd32f2796de6b772"],["/shuang-pin-vs-quan-pin/index.html","e3e8e03ec7b81a8164534c330d5154a8"],["/shuo-shuo-xiao-fei-quan/index.html","2f36db4fabdadab5c05ee0e01278f94c"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","d4b5fe4d6c4c1812fb18dc6982a13365"],["/software-reverse-engineering/index.html","77e0eb0f1e7142131233fd0379953b2f"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","c4a4732ad743f8d3e220dfd0df12469b"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","0b756815284166756c5f5aa9bc4bacb6"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","f16d95c602ad608c8f01978e73c60814"],["/sw-register.js","0387d15f3e46e9fcdad4ad113b69b9e5"],["/tags/2017/index.html","c4ef03e65162f4628f81cb286d72bb16"],["/tags/APP/index.html","00e415dcb7f544e06f8c44be440d540c"],["/tags/Apple/index.html","9e3bd189ee0276e2a18e9e5947ce59b0"],["/tags/AppleScript/index.html","ff07d2b61c9dba01b55c60f3153b11b9"],["/tags/Due/index.html","2065fb2e8440f5477c674633d5cbe09e"],["/tags/HTML/index.html","5068e19e2832dac1b40b7e7dcf811b5d"],["/tags/HUST/index.html","8e6066331070189d135ce02dd6191e16"],["/tags/Hexo/index.html","6520e355bc1f854758af18911b5644c3"],["/tags/Homebrew/index.html","8789c37cca073e10a12fca510e7e3b40"],["/tags/KeePass/index.html","ac5d9bdc97c7cf802a201a27c306debb"],["/tags/LaTeX/index.html","ae3bdb3ac7dfba2a46e178eae00b35ff"],["/tags/Namesilo/index.html","0d26e2736889244b89e9915fa5e4f696"],["/tags/OpooPress/index.html","916562b4f39554c5a0786e3dd6d9d93f"],["/tags/PDF/index.html","38e883fcb06770a83dad8fca729d099e"],["/tags/Posner/index.html","2f8e8bd45fa330d5146f8e0dc77e00fd"],["/tags/Python/index.html","9193e64b8ffb5a7e6d59c4c9a92f5650"],["/tags/Rime/index.html","82d8f35eeb4a52a4fd6718a3562134fb"],["/tags/Tampermonkey/index.html","398698d55fe2052415c58571fdb89a4d"],["/tags/ToolMan/index.html","cc80eb153d84978a1b35c68793fa9b1f"],["/tags/Typecho/index.html","3b61d4de8b5f5b434f779514dac16dd7"],["/tags/Workflow/index.html","e28930a68f943bd4b83a9f008959be03"],["/tags/cc协议/index.html","76d4f9f611fbd5d22f212cd35ba81930"],["/tags/iCloud/index.html","11f2b7734fb3725b5345abb849ac6bac"],["/tags/iOS/index.html","4097ca2419d8a78addd25f3b96c2de6b"],["/tags/index-1.html","341656c0bb91d2de5632a68d69303c7e"],["/tags/index.html","341656c0bb91d2de5632a68d69303c7e"],["/tags/logo/index.html","3e65bdd409d671d0cfd1621f69ba6224"],["/tags/macOS/index.html","d93bb43667a6e81fa8b26f21e75a4f0f"],["/tags/vpsmate/index.html","1e189a006fe89185c583c5e2209861aa"],["/tags/zsh/index.html","5ec10635128ee43782de5c8342f027e4"],["/tags/乱弹/index.html","9668870e9e667d37930bb1e790e0690a"],["/tags/二倍工资/index.html","9179d5b8c9e225fb1621c18ff1a77a55"],["/tags/二维码/index.html","34319ab6944febadedaf5bdf6c7ecdd8"],["/tags/云盘/index.html","daaa72ad41ae08e75e9eee71a8a7545a"],["/tags/交通事故/index.html","35b11ae95c67cf4018cd4424b2b2f472"],["/tags/产假/index.html","6e68a466f7e046146aada8b219bca423"],["/tags/人身损害赔偿/index.html","5da4e64dfa31a96acbae6ffc2f05cbcc"],["/tags/代理权/index.html","43fd7f015754cbd6da7522b5259a31f4"],["/tags/优先受偿权/index.html","fbe652d8730e042fd6dc1cdbbcc9865b"],["/tags/作品/index.html","2895a92153be424509807931f1232d87"],["/tags/侵占罪/index.html","1b8bde8f07529319da58cef9d67479a0"],["/tags/儿童权利/index.html","a8fd4c2a663c72d6a5317d7cfaac1343"],["/tags/公众号/index.html","ed458498b630132398b30e289e9d7f61"],["/tags/公司法/index.html","a59ebc54e89574521f0492417667bde3"],["/tags/共同财产/index.html","01d0ff5ee49cc8517aff0d4c8bc7be1d"],["/tags/刑法/index.html","4f3473102ffef2ca6b4b98cf56a6f242"],["/tags/劳动关系/index.html","997d4310e3a7d287f71b533d8cbfd724"],["/tags/劳动合同法/index.html","7bf98e771a7dbc6a7cd124506b25310e"],["/tags/劳动法/index.html","d51819681974967e4d7a7f045d7ad935"],["/tags/华中科技大学/index.html","2ea501837d4b5316026294b10e931bc7"],["/tags/华中科技大学法学院/index.html","771894538f8fcaba3769d732f1d9e9bb"],["/tags/危险犯/index.html","c7d710211c8eae2893dd4e3d810c034e"],["/tags/反向工程/index.html","2ef9c16d5af70950ea867c0cb24fa991"],["/tags/发行权/index.html","b867d1f0e96e443dfccd4b52841121fa"],["/tags/司法解释/index.html","ec1de45ba4170f0dbafed1ced030d6ee"],["/tags/司法鉴定/index.html","19fa51b494e748a9debe81312e1d74f5"],["/tags/合同主要义务/index.html","4aaea2ecd32248ccf7085d840df574e7"],["/tags/合同法/index.html","373f98ee222a4ef1f7243ba5ff013511"],["/tags/合同附随义务/index.html","5e6ee9537c5e07e3519b36ed3d7e2592"],["/tags/合理使用/index.html","439fa052ce8737e1ecf9fbea84530d92"],["/tags/坚果云/index.html","1f83952f4437e305fe9eb3b424b36fda"],["/tags/域名/index.html","421c6bba63c514e8fadfd23c97e348f9"],["/tags/字体/index.html","207d2bef4c7dfa2253b021a7b2d01c09"],["/tags/实害犯/index.html","621b4c93d2e259da8d72bdc419dbece8"],["/tags/密码管理/index.html","0917cfeed43ae0e5a528a75125160ca7"],["/tags/工资/index.html","6cc9dfbb7c4ea7a76f9ebe2fe311f2be"],["/tags/待履行合同解除权/index.html","73fa41bf6bb19631b30d065566afebe6"],["/tags/律师收费/index.html","924b1248723d9bc3ec778d64ad14c3c1"],["/tags/思想表达二分法/index.html","89efbcee14ea56a51e2216135df8a2ea"],["/tags/思维导图/index.html","94d2aaf278a4fd1e07d40078dc96a8de"],["/tags/成本收益/index.html","d61a4c246845c8d907deee05db82113b"],["/tags/成长/index.html","5c349db78b27fcd5db3cf78a7f645279"],["/tags/技术措施/index.html","4bac12d401dea328342c1b227e5a2d69"],["/tags/抢劫罪/index.html","4b0170261afc2334ddc5ccecc5770155"],["/tags/抵销权/index.html","761a625a5eb49a56599787e6d1d64fb5"],["/tags/排版/index.html","85eb1885684d1e349093e3c9df6a6a06"],["/tags/插件/index.html","82c517321e72554240fcdc666f49bfff"],["/tags/搬瓦工/index.html","803fe2e3110786763492ae7d0ca22a54"],["/tags/故意伤害罪/index.html","9516feeec70d8baab21847b25ecf0685"],["/tags/效率工具/index.html","3ef953ebe881002459054f931236c4d7"],["/tags/教育/index.html","4203fc7bee315d98c3d69072058b0706"],["/tags/断舍离/index.html","f66f829f13624f07a0b4ddd03702d0a3"],["/tags/无固定期限劳动合同/index.html","fe37cf18e6775091a6911fc90e1212ad"],["/tags/最低工资/index.html","1d9b517174077434267fcff3260a038f"],["/tags/最高院/index.html","d5e4ba76e16c10fcee889d7a8bad1ede"],["/tags/机械键盘/index.html","43152aae8107f41f50c1a60bb4268fec"],["/tags/武汉市/index.html","438a967af530710ab11ffbd0f218e8fd"],["/tags/民事行为能力/index.html","d3e5edac6b5ecdd92d3348c20e208c04"],["/tags/民法/index.html","c9001190c46fd7ad8c8c1e157a2eeeea"],["/tags/汉字/index.html","2b06daaf5be1cce080346a4a16fa17b7"],["/tags/法学/index.html","2f55eab73fc540622cc9d1a2b8fdd722"],["/tags/法定许可/index.html","4d117c9c7623e57c7822d5332f34b1c2"],["/tags/法律/index.html","ce3df5a7d3d8c320fdadf55b9c1a9244"],["/tags/法律援助/index.html","4c65629972e2aa72b3f7848e696944c2"],["/tags/法律法规/index.html","fa81090c7d56fcc89939c2c09b165291"],["/tags/法律经济学/index.html","557cc9a6673c7136ae9d81ba2d38b6b1"],["/tags/消费者/index.html","b82161d15e5e374e0e44ef50a706ffd9"],["/tags/湖北省/index.html","caa6f85af681a87fc18bf1225ae0230c"],["/tags/熟人社会/index.html","075d20cb867a3445e2da41a272e8aef3"],["/tags/物权法/index.html","d5df3155218612088e4b5544025bd648"],["/tags/用工之日/index.html","9a08412a1fd78546a5cd56baea3ccace"],["/tags/电影/index.html","dfca334e92b5f364a056453e6e63dc72"],["/tags/男女平等/index.html","5380723158ff96a46df4cc628652d844"],["/tags/知乎/index.html","e03b64e9ffd7d677cc7f568a4fb77428"],["/tags/知识产权/index.html","0ccdc5b01c3acac8eab7d0c57dfd87f7"],["/tags/知识产权法/index.html","cb87763c93fa5dd1d3d5bb27eb6629f4"],["/tags/破产法/index.html","914f20d99a96f05c74640930b11b8468"],["/tags/破产管理人/index.html","2948be68476b60cba9b7853bb25dcf89"],["/tags/碎碎念/index.html","139c9f6c588af590fb1a31abd1d2dbbb"],["/tags/社会责任/index.html","06085bf4232e47b609d19b7fbe085a71"],["/tags/社会问题/index.html","0d410b6651117dad5fabccce84641e79"],["/tags/神经科学/index.html","2963d1811587c833336e0c8de1f3379a"],["/tags/经济学/index.html","fca3b109aa2a3d66087e86b6ff70129f"],["/tags/结果犯/index.html","d22b0e3b5f0f894a622444f8ce45146e"],["/tags/缺席判决/index.html","4d50e4cc922a2d9c87d4f05591306a86"],["/tags/考研真题/index.html","b9feb6789369fdcd4c0c60aca7853895"],["/tags/著作权/index.html","19d4e91d274625c46570d735a8f30ced"],["/tags/著作权法/index.html","fcbccde341bebc4fe8d3ce1a78672507"],["/tags/行为犯/index.html","0eb5d6645fada8d130fc13112cbb6cce"],["/tags/行政不作为/index.html","cffd3f94b164837e0e394602e82a1078"],["/tags/行政救济/index.html","14f4e625d40000f727cb860f270b82f4"],["/tags/行政法/index.html","6975807d145b87634adf713b2e152466"],["/tags/装饰装修补偿/index.html","26db0ab537c36420058bcd67f5c48c3b"],["/tags/观后感/index.html","39d057a4e590ff4c6596f32a1d5f8115"],["/tags/观念交付/index.html","3a4a7dabeb2a1fb846f199420fd32aaf"],["/tags/计算机软件/index.html","12958014e51ad36d6630da9abe2b4593"],["/tags/认知科学/index.html","2c5881584d643629d03d38d25fb1e38c"],["/tags/论文/index.html","a8f3b1f5e7907be0d61502b75a3596a2"],["/tags/诈骗罪/index.html","722df27391b8d8689b553939302d7dd9"],["/tags/读书笔记/index.html","8a70e2c4c8d076759995ffdef4a233bc"],["/tags/赔偿标准/index.html","e0ea39b57fc74146eb25cd8761c6d5df"],["/tags/输入法/index.html","29ded5bc0646ec7cc1b53694a902356e"],["/tags/违约责任/index.html","4e3753c42b035d3b47d76b74a4fe5d6c"],["/tags/违约金/index.html","0dda9152787e7d9b58ea6a66dbc6fd0f"],["/tags/释明权/index.html","f9f44b6cced8bed0b79e2ba3a9d84aa9"],["/tags/隐私/index.html","158a89de57f793c3ed1987d2b15751a3"],["/tai-er-gu-shang/index.html","52d516182ae9f655c7c74b2dd1623b2b"],["/timeline/index.html","b3a70e8613d64fe19cffcda98777ee50"],["/vcard-yu-er-wei-ma-ming-pian/index.html","27322f8e7a2d4cc4f55e278fe6ed2ae2"],["/webfont-yu-zhe-zuo-quan/index.html","6af9c9b9e0a61c2995ae65ae183bb573"],["/wei-ji-hou-ban-quan/index.html","4dfe4f27fdad5e20bb30b345cb35204e"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","e68f9d00260af95bc3ea1894678930eb"],["/wei-shou-xie-html-pai-ban-gong-zhong-hao-wen-zhang-de-ji-dian-bi-ji/index.html","8e2421c4ba8432a4e1f70bbc77843957"],["/weixianfan/index.html","aa267efd3173e3369efdb70cbf9788c7"],["/wo-de-macos-he-ios-she-zhi/index.html","50356ae6b0178ad9c4af01a473b501e9"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","8ef2039488e2e553483cbb5332312936"],["/work-rules-mindmap/index.html","4b0aa91cfaf34e10f65f585a1102a6c0"],["/wu-han-chan-jia-shi-duo-jiu/index.html","2770d00f3370697a17297f0b419f4f90"],["/xzlfbzw/index.html","eef244563b38ad611935e615b2a178be"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","e55af945185effdf8cf98cd1bccd68d2"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","a212ca023fac45c91418d814c96de219"],["/yu-ming-zhuan-yi/index.html","9d2fa0950a4ac0dd1aa79e73817a71e1"],["/zhetengb/index.html","e261d0cc1054a6376c305b717403479e"],["/zzq/index.html","2d6b29db99bdce82da869e177b526bda"]];
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
