/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","7fb6702c36ea13cdcc7adc714adc9b03"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","a7ad9b51993946c1e19d3adbd54b103a"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","5ebe8a89d55bb50be5c391a2bce31e73"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2ab18aae1e3c95ad4df6bc624cd344b1"],["/PGP/index.html","793634cbd93261c8000da87be6bc263a"],["/about/index.html","6849d94b673e076de4f55f80ea168c3b"],["/applescript-jiao-ben-liang-ge-ban/index.html","27085f1b6294f1c361f8c5616ce991d1"],["/archives/2014/07/index.html","950aeb2e81d403449191feb71ee433ce"],["/archives/2014/08/index.html","74f9f62e5efe40550d1d803930edd92b"],["/archives/2014/09/index.html","9bd2d843f69f8c07113d00088c5d54f3"],["/archives/2014/10/index.html","671919fc45590f624cbb6985e41b33a9"],["/archives/2014/index.html","daec82e710f958b1fa1c1036ecb2f432"],["/archives/2014/page/2/index.html","93840a0600307f4307d5d61f51d7fb64"],["/archives/2015/01/index.html","02f3d22f74f8e4dc6f8d4e593eca99cd"],["/archives/2015/07/index.html","52889f7eae8180912907505f88ee8e5e"],["/archives/2015/10/index.html","77eb33de8bdd8581d11beb16b3c15d22"],["/archives/2015/12/index.html","b9ee0ab9ebf834b30c28070b52d0c7c9"],["/archives/2015/index.html","e4e7dde4474025f6e4f6e1de5a53cfd0"],["/archives/2016/04/index.html","6e146118bc0febce141bc7da73dde710"],["/archives/2016/05/index.html","f402a6d65c810ef9875ad7842d9d3955"],["/archives/2016/index.html","d2eb66399e2d28d330e9b0ed3e94065b"],["/archives/2017/01/index.html","b2d4b40feebe74ac5ba6b592aa97e9e6"],["/archives/2017/02/index.html","0aac171f03af011af6d6e7da1ee5c1ad"],["/archives/2017/03/index.html","2c22ec2b559c73c28c0b550896b619d5"],["/archives/2017/05/index.html","632c647cd7e146c818ad8dab5b93e28e"],["/archives/2017/07/index.html","6d455afd285e9c44946c0a8cbec788af"],["/archives/2017/08/index.html","23a3f04e8183f85ad5b4a9e67b94f4b9"],["/archives/2017/10/index.html","3ff633f2a6bd5b30b0d8c7d882bdb358"],["/archives/2017/index.html","3f5a707dab7366f6a4d4a93bf53bb665"],["/archives/2017/page/2/index.html","625dfe43c6b1ead637ab555430d763db"],["/archives/2018/01/index.html","e31a78ac2bac4ae68f767aa926d87a6f"],["/archives/2018/04/index.html","b44fc27c2e5a6913d8d75a9faaada9ec"],["/archives/2018/05/index.html","585b033717f36559020426a9abd85cf2"],["/archives/2018/06/index.html","42554cd260bbf4cbed6d94525ea7bb25"],["/archives/2018/07/index.html","f79083fe619dc332c8d55b1ab74c3b4d"],["/archives/2018/08/index.html","bff9abc0e86b6850a104adca66a42067"],["/archives/2018/09/index.html","e4dacfbd123700fd21003b424b463951"],["/archives/2018/10/index.html","cbb0006302d3779574adf929ae1f38a9"],["/archives/2018/11/index.html","8a413617159fbcba5621bce0ac192f6a"],["/archives/2018/12/index.html","14a3f42855f7c8d3d0b9de2a0d00d440"],["/archives/2018/index.html","821acd17af24147b4ebcc750f2a3b15b"],["/archives/2018/page/2/index.html","dd520fe97f8efa5d1412993a9be93430"],["/archives/2018/page/3/index.html","78a8814a115e1a57067e1963b6aa15aa"],["/archives/2019/03/index.html","173aa780798f7514f3d7f30a55c184e1"],["/archives/2019/04/index.html","01d5a1ea9ed14df5d7ae9c67227149fb"],["/archives/2019/05/index.html","0aac2c3ba6df6ec7dd244311c56ed9f8"],["/archives/2019/index.html","4958ca386bfc7c57b99f6400bdf93d24"],["/archives/2020/02/index.html","92c62dc49a84df17737d0a325477b70c"],["/archives/2020/03/index.html","f0e570a96e1577969b0d0a9bb0451129"],["/archives/2020/05/index.html","d85ffd0770586cdd66620d9d17f298d5"],["/archives/2020/06/index.html","c8388caecd4acb249a7592ecaf6acc1f"],["/archives/2020/09/index.html","fc57c5b6294eab439491b59800fbf524"],["/archives/2020/10/index.html","209b468862d0d1bff2dd7d14bc6ef0a4"],["/archives/2020/index.html","fe5a1d10dc6f6c60446af38ca8f39792"],["/archives/2020/page/2/index.html","760ba253916acd848feaa33f9463dfe9"],["/archives/2021/02/index.html","fb21ed48f9ad994b08ccc81f324e4ec8"],["/archives/2021/index.html","ee71981a5e463b9dd9ced56062e46a42"],["/archives/index.html","cb4fa5d02db6d0783e85a306290a4ca4"],["/archives/page/2/index.html","14484fec079ac95779aaefff12f5ad50"],["/archives/page/3/index.html","2387633c67bee7276f826f3bc875f317"],["/archives/page/4/index.html","882ae213e12a8d39ca32b9c8540e8f5d"],["/archives/page/5/index.html","665f10c3925a975dbfe7e3b4da11a05b"],["/archives/page/6/index.html","a03bdb466a344ab864a1154b6325a698"],["/archives/page/7/index.html","27d3b90c17fcafcb73f8f434cf8166d9"],["/archives/page/8/index.html","21bc0aa5eed4e419c61bc1d836fc4e94"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","aaca1a1d143e81823822adca3ad9c2eb"],["/bao-guan-qin-zhan/index.html","fa2acb4d347141a38fdfad1f93a545a3"],["/bao-li-yu-qu-cai-qiang-jie/index.html","37f7f060c6e298dc5de593ea973015df"],["/bei-dai-li-ren-sang/index.html","ab89e1a403cc628a6745e1b7867bc9b7"],["/books/index.html","ad8ea2fbe149c9ef047b9764d73164c3"],["/categories/Blog/index.html","15f7b38b81ebb7e3d265dcdbff5ac1d0"],["/categories/Blog/page/2/index.html","819fe413545215704278b0a7dfa56d0c"],["/categories/Blog/page/3/index.html","4050b694c457658d565b206eaebaedfc"],["/categories/Blog/page/4/index.html","1dcf1c828814eb73a022a293e4841e48"],["/categories/Blog/page/5/index.html","be3ba61c8dc30e2bdceac56f71951969"],["/categories/index.html","f7310281b1963a0427473252097c7806"],["/categories/法学/index.html","aaa497d6c39fd4a315e28978bee89921"],["/categories/法学/page/2/index.html","42ad42eac1d3ed4b1696f805c715f015"],["/categories/法学/page/3/index.html","a83b957265c258bb2d44797832be4abc"],["/categories/精彩分享/index.html","ed7ed3012163ceca62165406e2e6008b"],["/cclisence/index.html","2fa7117413841cb1599d755f8a9e81f3"],["/cetrain-issues-iv-for-company-law/index.html","c7b4e4cdecdc24ae08e7eb9e42ccdd4b"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","a57507d3c1e12fd19f7bd6d3cb00babe"],["/cs-hubei-2017/index.html","1025b3db84f2f1613dfff50b059bb89a"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","f5c181ee9e8664e05576cb9e9c557a44"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","4c067dc7e9baf5378a2cff085122cdeb"],["/due-pin-workflow/index.html","af642129fd8b0c049e5cb8d5e8c3c2ce"],["/duo-ci-zha-pian-shu-e/index.html","f93a82b5bb9f3afa4362e80ab7a02f5d"],["/expert/index.html","49f73471db16219a8cce0be2912cd5f6"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","48bb2f1d44873a8f3fc4747c5f4f7788"],["/gang-jing-wu-ge-ban/index.html","53b3753fa1cdead58a625f2008fcf13e"],["/google3756ddc34336b7b9.html","b988e1becda777f9daa17660e62bddb6"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","896d8ebf300effc94e0e7720180ec856"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","c21bcaacf7b0c139f5654480d17e0485"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","c8fde26a7c5e2a8bbdf818f8100bb4af"],["/hustlaw13/index.html","d00f55cc39e8840d2f7fcbcd360800c7"],["/hustlaw14/index.html","ebef935a67be6120134e65b64aeb894f"],["/hustlaw15/index.html","f4764f0bbb3161c19e72896b54983614"],["/hustlaw16/index.html","081e74f514c5da70719d3144f1330e34"],["/icloud-terms/index.html","8de5d827ea436cbff3dd867a284e6c71"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","7087974fa569ae6af5b0e6e8ba432798"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","ef82533712b21f23a65010ea22e28b7b"],["/jdsnk/index.html","22235091bd818c6d0873ce1ca0e6fa55"],["/jian-qiao-fen-xi/index.html","eed192acf0d3ee7c6bf9ff0a0e1e9312"],["/jianguoyun-keepass/index.html","0fb2700fc54d3439eed793d7d410167d"],["/jin-qian-bu-neng-mai-shi-me/index.html","4a9dece3e3e368cf1de4e2f8adcac56b"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","2389fd3a68d78850328e66c4ec34b708"],["/latex-times-new-roman/index.html","21d921b136d06b27078ed29c38302931"],["/latex-yu-lun-wen-pai-ban/index.html","8df6cabbd53f8f2e746e229b941e7016"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","bfa38135e38008c445f2c411a2b9c2e3"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","2595e734526e5425c3fceb4276de67f8"],["/luan-dan-20181116/index.html","561fd18c0587c5a8e3f8ad24cf148a93"],["/luan-dan-20200217/index.html","c24d62eacde678640942fb3e7d489b0b"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","777560752c7dfc998603a2cd67cce816"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","3da2e6eec8d8dabb80eff9d5f4a00ebf"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","86e9d06609ae6287e382d29192407980"],["/movies/index.html","dc09ba781d162f7e88ba7c4d1b088715"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","4b410e3b923d7ea64aa0bec11095c7fe"],["/node14-bao-cuo/index.html","3e6d6f8d713451e92e9f5624b09b3446"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","6f81778d5111bc95fdfe51c12099e08e"],["/opoo-zhe-teng/index.html","4a27bdbb677def5fe24f22291fdfa287"],["/others-00s/index.html","e0b634b23097d2da41d93b852b31d4c3"],["/page/2/index.html","5743a083868da00783c4b737d144c715"],["/page/3/index.html","50420c7ce10f4ef9ae0583bf19aa4651"],["/page/4/index.html","566f238ba7b5d15f44ee94a55cc9a5c7"],["/page/5/index.html","b1fb8d5e983ae79c3d5780afa6bf8e7d"],["/page/6/index.html","bc9e6ceddccdc3b7fd21d9d75eb9c80f"],["/page/7/index.html","cd5dc716b2318caf2e945c9dc366dcbc"],["/pan-gu-zhi-bai/index.html","edca01a725997ccd1325b8cba309ed1f"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","2c2d84749d5c45df8a4ac4f389569395"],["/posner-homosexual/index.html","fc6f92b5d6bb011f006f0124c1df781b"],["/qpdf-shi-yong-bi-ji/index.html","6ac846f02fe908f77fc10f237ca22944"],["/qxpj/index.html","f0e4e4cf88a42351ab307dc9c3b73d55"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","16bfa9af10f9c800d4a0f7b77ec5e0cc"],["/shuang-pin-vs-quan-pin/index.html","065320f2abd2e04b35c9d09d180f9479"],["/shuo-shuo-xiao-fei-quan/index.html","154c08ac0607405331dc8497151e7756"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","859fd9abc86012aaa83c5b08498ec052"],["/software-reverse-engineering/index.html","424d727dc86add81cbae2fa01aae8895"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","c130836d43273cd44d61198fb8fa8dd9"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","30f00958244afe9f08de98f8cd7c8baa"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","ed03d3cd8772d7109dbb8aa64d82d165"],["/sw-register.js","6b1de8f5c69607a604b6ca1a220d4453"],["/tags/2017/index.html","1defb76170d56f2fd04e82fc64af9227"],["/tags/APP/index.html","77bfd2ba6a8d9cb8ed15fc4b98f49d10"],["/tags/Apple/index.html","b722377ab4d3f890a58dc7f3d0c82d12"],["/tags/AppleScript/index.html","cf4b0a86364c63d7568baa9fde448e81"],["/tags/Due/index.html","0d67125a51a4dbb531ccbc837bb1574b"],["/tags/HTML/index.html","7c00e7bb7d4598c8334c780fecfcf287"],["/tags/HUST/index.html","7af4a6846189978719ed8986c07b397f"],["/tags/Hexo/index.html","759cd66aa60f7cae20a322e0115aeaec"],["/tags/Homebrew/index.html","a6caa37abd639e15d1e99b30b2696c75"],["/tags/KeePass/index.html","5c54c1f4aa2fdcc8bf6988cb46b179a9"],["/tags/LaTeX/index.html","ef3f73bde52a22a3e50de5e83ca0f66e"],["/tags/Namesilo/index.html","37cdc21683d6669a7d3aaf6e5c3badb3"],["/tags/OpooPress/index.html","7d71a8e033cfed78998ed7138ab99ed1"],["/tags/PDF/index.html","14c2817d0ea970f4c76d8e0a9e9dc884"],["/tags/Posner/index.html","defa239e734ccead463083f6c68b0824"],["/tags/Python/index.html","05b1a2daedcb9302842e9069260d1005"],["/tags/Rime/index.html","ec23317bddc8de7342b288d6611d49cc"],["/tags/Tampermonkey/index.html","d7c61216f0c8fa392a84f598534a8c59"],["/tags/ToolMan/index.html","2e1cfb63efb61f425473d08080839f5b"],["/tags/Typecho/index.html","628bce50dc839bd848f62c66b0bbac9a"],["/tags/Workflow/index.html","294132a197eccc4445a2e6075de7eebd"],["/tags/cc协议/index.html","fd518f49f8413216c320ab627cb7b99f"],["/tags/iCloud/index.html","7e96493290cab65babdbce77e2e65d8d"],["/tags/iOS/index.html","51cae8845f2ee19168513ae0e3ff8dc1"],["/tags/index-1.html","83a73411ead423bb18e81661cefc871b"],["/tags/index.html","83a73411ead423bb18e81661cefc871b"],["/tags/logo/index.html","579aa43980a4b82909f7e0055d16da39"],["/tags/macOS/index.html","526c63b08f81b7c3ad321b065acb7deb"],["/tags/vpsmate/index.html","d01986fcfa9ebd8043c9c7bc9815894f"],["/tags/zsh/index.html","c5d91d5d9dd9e6f233e624e73c8a0320"],["/tags/乱弹/index.html","aab3adad0fe99a6d5cef1b5cefa955f4"],["/tags/二倍工资/index.html","9c29346ab55144ce73b1298ddacefba9"],["/tags/二维码/index.html","84c131d0d0807d6d6961d775d87d56c4"],["/tags/云盘/index.html","af4d626b3314cc9bb4cf842618924691"],["/tags/交通事故/index.html","ecb0929b7b95cd9ab754dfcf06a4e114"],["/tags/产假/index.html","4eceaab4da3d8f37459664900a2dd48d"],["/tags/人身损害赔偿/index.html","8945542485061b6e65810916f19aea41"],["/tags/代理权/index.html","eaccac3fb8480dfc180e88d6b1ed4f6a"],["/tags/优先受偿权/index.html","b33edd77719f423e751468b245a15fd1"],["/tags/作品/index.html","1bfbcba260d48216cd10950f4a777a17"],["/tags/侵占罪/index.html","989eb135ec82f1e8a403ba447d678ed8"],["/tags/儿童权利/index.html","c74c4e70fb590939248b5a0bbed6a3df"],["/tags/公众号/index.html","3ec742932499e70970d75e28b852739b"],["/tags/公司法/index.html","91ce9bd932d099c4f6ff46996d84590b"],["/tags/共同财产/index.html","c60d3bddf8d37f9f03c43dbbb32ac35f"],["/tags/刑法/index.html","c1434b54392d797024cb106537b48597"],["/tags/劳动关系/index.html","18909402468915802cc2559263b198a6"],["/tags/劳动合同法/index.html","88a6ed7ce403b4a9b3f5ad479565d296"],["/tags/劳动法/index.html","990119431ca6a9e0d3ba2a30b1538758"],["/tags/华中科技大学/index.html","6c2497a9e4d42939a6ade52a90c05631"],["/tags/华中科技大学法学院/index.html","be85e02277e627f98c1f173b4732bc99"],["/tags/危险犯/index.html","7d05a6a128760165b331724c9e74a032"],["/tags/反向工程/index.html","2255c93dc8d614a8cde454dd8419f92e"],["/tags/发行权/index.html","dd68a53feffd467046cf5af1f1b4b5e1"],["/tags/司法解释/index.html","ca60c7de1d7abaaac7723fc954b89d79"],["/tags/司法鉴定/index.html","a0318114f6aa05eb07358b55366ce4f7"],["/tags/合同主要义务/index.html","b98c2bbd17248ffc2192a39f19884beb"],["/tags/合同法/index.html","05e5d9f8c2f977dfd8a5317cca432814"],["/tags/合同附随义务/index.html","32d4df93e39417bd1b55f140e0e5dbba"],["/tags/合理使用/index.html","681cbad264ffddc463f00c2043dc7f3d"],["/tags/坚果云/index.html","417942f2aab389f37fb277a314dda0b1"],["/tags/域名/index.html","c1e1dc5883d5555b152f6d4628981c2f"],["/tags/字体/index.html","fc8e072ff300485653de42b5221620ac"],["/tags/实害犯/index.html","09df2e7eb7ff690bca72d746809b67f9"],["/tags/密码管理/index.html","47578b0098b487b22d20cba6bf059923"],["/tags/工资/index.html","377c0e63b6b4a7c4f15a9c5e55fe739d"],["/tags/待履行合同解除权/index.html","1caf54dd4b0dfabd3d9b796d8519fbbe"],["/tags/律师收费/index.html","c140245950485eefddb52cd6e5f2f2ee"],["/tags/思想表达二分法/index.html","75eed218ff0fe2d6f9b68c243aceb263"],["/tags/思维导图/index.html","9ceec600f021a538f06e1afa45fa5cb3"],["/tags/成本收益/index.html","24db9e816389c7405b2a3b2c25b4161c"],["/tags/成长/index.html","e3b9c7c4c949b982b86591482525f95f"],["/tags/技术措施/index.html","02b3c015b1f3b671f992cedb6470ecb1"],["/tags/抢劫罪/index.html","9bb8e750d232f04489e3f743557af5bb"],["/tags/抵销权/index.html","d0d6b5ff8634243c1b2c890c488f422e"],["/tags/排版/index.html","ab286423e0628352dd027d29f4382bd9"],["/tags/插件/index.html","f206a77604652194c4f62bb74a41f614"],["/tags/搬瓦工/index.html","8f2c90ae3b5fb6d51d72822cb6eb3670"],["/tags/故意伤害罪/index.html","ac9099aa12b46810516dee42f1210d35"],["/tags/效率工具/index.html","ba283afb05a31a1afe86a1438519d2ca"],["/tags/教育/index.html","43966211cf6e581850fbe684874627a1"],["/tags/断舍离/index.html","2229c6ca0155da9ace120c23d22f05a8"],["/tags/无固定期限劳动合同/index.html","cf5f905bc62ff696da9babbaf4a08a3a"],["/tags/最低工资/index.html","b46510a6ec468b16e0903423cc7e95c7"],["/tags/最高院/index.html","876b84409964a93ab33e8ab2050ac971"],["/tags/机械键盘/index.html","0e0d3449fc17764c176d24f70742659e"],["/tags/武汉市/index.html","e2b9c4d6b654e8265550f8263d2bee7f"],["/tags/民事行为能力/index.html","e10e56187dd2ba132dbebb23b5aea93b"],["/tags/民法/index.html","c9f6958bb9505f3a666c79582c9ccaa8"],["/tags/汉字/index.html","dfac7d540c730cea7d5e03ad599da620"],["/tags/法学/index.html","1e066228f5deab0874d6a4db40b78b35"],["/tags/法定许可/index.html","946beb80844d3912a8586d064d688f03"],["/tags/法律/index.html","6634155ad7cf3339fb32bf1af105a38b"],["/tags/法律援助/index.html","f682a27448c020a9e4f70aa44a95bf7c"],["/tags/法律法规/index.html","df25d2bbd22124a4a7d489296722da18"],["/tags/法律经济学/index.html","2b0f2bfe38a355f65ea33bf09645c012"],["/tags/消费者/index.html","b3f656e84823f9880d39c98f98d88112"],["/tags/湖北省/index.html","0dc3605c7f6d7266a264b09a9dc6fc39"],["/tags/熟人社会/index.html","efc5b87c5cf7c621a4e4fa191c7f2b93"],["/tags/物权法/index.html","c2c04b44679869e980f3687d2d2be219"],["/tags/用工之日/index.html","ccbb205b280b858302275f28e7df4b73"],["/tags/电影/index.html","23059f36c2c26932cfbe477aaa7f8987"],["/tags/男女平等/index.html","af3478389f7cac09463e1638d3d0f9d5"],["/tags/知乎/index.html","83e8384bcd5832da052320d6ae2c07e1"],["/tags/知识产权/index.html","f0e1d073f1600a822693e6c3d3a35ef9"],["/tags/知识产权法/index.html","7381425d366ee8ddb54ea22a178528ca"],["/tags/破产法/index.html","a153eba2abf42e1824ba460faea933cb"],["/tags/破产管理人/index.html","b37f256406e6ed6dcc1f739f75e0a71d"],["/tags/碎碎念/index.html","45af1b98a46af42d56e2cb4a9fb5d8ab"],["/tags/社会责任/index.html","af751af9ebc600ac5c28a0fe6d8f47da"],["/tags/社会问题/index.html","d3b73008e653c09bba36dcfae1eac0c0"],["/tags/神经科学/index.html","05205ef5c2fba76adabce1202fe2394b"],["/tags/经济学/index.html","56966cc2922d21dc2c8e281312477e20"],["/tags/结果犯/index.html","52f6a335ca06e289af570ecb02315081"],["/tags/缺席判决/index.html","30f3e9e742d2051a1762ad63b08619a3"],["/tags/考研真题/index.html","5eacb81c6bf6e9a2a49c923c5edaf213"],["/tags/著作权/index.html","cc409e6e583575ff05ead817dd96672a"],["/tags/著作权法/index.html","c67c06e2caa6d447482c415bbed18951"],["/tags/行为犯/index.html","9391fcc1cf69f5cc00f6bd9d6b8e7e50"],["/tags/行政不作为/index.html","4003b1cdbb85aa14e6a9f186d09abe91"],["/tags/行政救济/index.html","bb92c36a4e3e1944f1e70929b0b568f2"],["/tags/行政法/index.html","c5b3e547fd71717171f6e1d42573e222"],["/tags/装饰装修补偿/index.html","bd8955d10f38667b78372db1d614595f"],["/tags/观后感/index.html","ba10cef323e77290a152759ccfb2f2a2"],["/tags/观念交付/index.html","7db7333771b51caeec231b382c7a7d82"],["/tags/计算机软件/index.html","c110f272f5b8966e1e5ccb5a6435f0ff"],["/tags/认知科学/index.html","a51a8b7743ec1af23b26cbc11a12ac3e"],["/tags/论文/index.html","6e1cdba7383c350d97fc0709a46e3aab"],["/tags/诈骗罪/index.html","6573c41b607aa02cdb544bbc876582f0"],["/tags/读书笔记/index.html","e1e3507389dd7dfc7aa01f33fbfbc7d5"],["/tags/赔偿标准/index.html","92177fc5a5f2d7119ec5a32efc5fdc48"],["/tags/输入法/index.html","6f67eb69fb2322bf9ac9628ea53733ed"],["/tags/违约责任/index.html","9b217952ee8454e6133134594a6d6dd8"],["/tags/违约金/index.html","30fb0045eca3816f7a25ef9e15d75657"],["/tags/释明权/index.html","d46766d88d682809bab9bf056ed8d6bd"],["/tags/隐私/index.html","fb039958bad7142b9faedaa45f3df00b"],["/tai-er-gu-shang/index.html","7d3b562d85c7b09d369eaa3242085d0a"],["/timeline/index.html","9690b6bb14ee2d24adba2d672cd1be38"],["/vcard-yu-er-wei-ma-ming-pian/index.html","3247ffe092dd24ff4dd3d198cb4c9555"],["/webfont-yu-zhe-zuo-quan/index.html","25454d5813b84092b2e3d5da10100165"],["/wei-ji-hou-ban-quan/index.html","e7105311b0fb30af87cba770697fe3a8"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","2d91f0a7f8ab2353a037e56dabf9a61f"],["/wei-shou-xie-html-pai-ban-gong-zhong-hao-wen-zhang-de-ji-dian-bi-ji/index.html","7133a55dc5037dd09e55022bf121eae4"],["/weixianfan/index.html","265e2f551398c3a1588c33ffe862b848"],["/wo-de-macos-he-ios-she-zhi/index.html","c25326a5ca9adcea624e0bf016e2d50c"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","1b93a6e4c51bf289af9396d726f5a1ae"],["/work-rules-mindmap/index.html","f78201ed369a055a785e22675e72f7a8"],["/wu-han-chan-jia-shi-duo-jiu/index.html","b6ab24dcefb0e074435eaa8f784556cf"],["/xzlfbzw/index.html","80e88b4921cfb3aeeec7a21a7169d0f4"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","6d60acdcb2a5f5f1df8e9c6eac7b4883"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","e13a673f61e5e6121c69fb9bf3848c62"],["/yu-ming-zhuan-yi/index.html","81521d9c01faba583c74b478cf3800d6"],["/zhetengb/index.html","0bed835f7200646a83fa538584b2e9ff"],["/zzq/index.html","cc46f71911b64df5fcfa294d4dc66140"]];
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
