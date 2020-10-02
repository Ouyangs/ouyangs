/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","380096edfb451604aad3aef7049cad85"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","227b18ab6d8afd117ee2e93841405c3f"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","47b63df4ac962a48c4948d054b6311f7"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2f03e241f7d834173839fdc0a945f5b0"],["/PGP/index.html","c8cb00b97f4041c6a6a21e9d7ec01340"],["/about/index.html","3b4b54d32ede22113bceba6a9b99b9d8"],["/applescript-jiao-ben-liang-ge-ban/index.html","d94569c871dc10fa3eaa2b804b92bf5f"],["/archives/2014/07/index.html","3398839ecbe301b7b264c03932f8e005"],["/archives/2014/08/index.html","cf31f8e64b2e97dccdfc8626c03d2cf6"],["/archives/2014/09/index.html","641a50fe1ed05c87ca02907c17548d34"],["/archives/2014/10/index.html","df91ce8c6eac1cdb2fffe5e6346535b9"],["/archives/2014/index.html","324ce5863f9600454cdcc76e8195bc3a"],["/archives/2014/page/2/index.html","e246eaa9ed8f55ee26d56517287776dd"],["/archives/2015/01/index.html","5939074026e3d77f2902241111f922e7"],["/archives/2015/07/index.html","06dd7c52d3dbe96d0dfb8394e0da2537"],["/archives/2015/10/index.html","f0a6d9f01c6e2bdf779fd4cb43cea992"],["/archives/2015/12/index.html","578efc586da4ff40da7a081c67a1e08e"],["/archives/2015/index.html","8f62f27ecd90206de8e61551a489247c"],["/archives/2016/04/index.html","08f3bb8f629d3f2a50bdcc38a05685d6"],["/archives/2016/05/index.html","6c31ab4923e3a6965d9a05f9f81810ae"],["/archives/2016/index.html","d78b755ce823091f4b6873c95a329769"],["/archives/2017/01/index.html","c75490eb9c0f1e4aec10f4012fe98074"],["/archives/2017/02/index.html","cc39afeb8d2551a640083926dbc69442"],["/archives/2017/03/index.html","c9934a87e3e48ec1b2517e250547bb2f"],["/archives/2017/05/index.html","747f208d3f4a86e913c7d541a94482b3"],["/archives/2017/07/index.html","1cd1d1eee6f8857c2d4fe9d954acc278"],["/archives/2017/08/index.html","cc216c73b6a700ee2ad5ebba7408c2e7"],["/archives/2017/10/index.html","39129e22238954673c67e2f5870b02d2"],["/archives/2017/index.html","899cc3d44273f3ee9adb7f991232c2d3"],["/archives/2017/page/2/index.html","5e574bb5262c1a5d6d2e7b8aa6deb983"],["/archives/2018/01/index.html","4b1705a31fe6819bb0085cb24a6151d4"],["/archives/2018/04/index.html","b0f802bc9bf68f07f3e0ed4b14a61480"],["/archives/2018/05/index.html","586d133e4606be320b48559c9fc49e61"],["/archives/2018/06/index.html","dfb2b3a1c6f988d58f5cefaf8e10abaf"],["/archives/2018/07/index.html","8de0d2f84cbc6130f74affed07b0493b"],["/archives/2018/08/index.html","9f780b27659216de9661225aec707a7e"],["/archives/2018/09/index.html","f145c1b5f4f7ed4edfa4896d7faff78c"],["/archives/2018/10/index.html","7f3d5ef050bc53e17c93590eafa6a37d"],["/archives/2018/11/index.html","ff4c862e14bb6040bd98926716cc2920"],["/archives/2018/12/index.html","a6cac8b498b451adbc30b7b5ca633ab6"],["/archives/2018/index.html","90e55c5a41e824700b04df99a1641b54"],["/archives/2018/page/2/index.html","89a806b31873f5adfbdc2e492fd74c0c"],["/archives/2018/page/3/index.html","adce141143724be94bd6a94f6abfdeaf"],["/archives/2019/03/index.html","f6a646742d027fbc8f2fb95a1a30654d"],["/archives/2019/04/index.html","571afb3283d1c43ce6536a0bc6d74f03"],["/archives/2019/05/index.html","1a1002e77e4c66b5ce74c8b354122e04"],["/archives/2019/index.html","47bb069bc939366472213b253cf15cf2"],["/archives/2020/02/index.html","58b0828d75ccbf989d261293d9e87b2c"],["/archives/2020/03/index.html","63ca26cb9e67d53d53edf31ec6c975d6"],["/archives/2020/05/index.html","fac54c5181cbb749a7f970c49b4fde76"],["/archives/2020/06/index.html","f83d5f3a239d5a8602117015a7939364"],["/archives/2020/09/index.html","5a1b04b4f4784d3883824eec4a781915"],["/archives/2020/10/index.html","f02a1ecf404862267117fa1c0b42a174"],["/archives/2020/index.html","c8267c406a1140677e010d13f4d3b314"],["/archives/2020/page/2/index.html","e9435179bc1948e22d2b296c4180388b"],["/archives/index.html","faa55c08e43e717b31c614684d534e24"],["/archives/page/2/index.html","a58fe6f15cba8cab6e2162095717c9c4"],["/archives/page/3/index.html","4bd330939c3a3c6b552fa25bb26f9eea"],["/archives/page/4/index.html","4bfc9459ac836529cef1c63c69c98e73"],["/archives/page/5/index.html","9137b3095ba8363db46ecf52820eb95f"],["/archives/page/6/index.html","9ae1f543816edcf83c0a4f40f6a27ff0"],["/archives/page/7/index.html","b3581d54ec81da470b5382e7fc6e2eab"],["/archives/page/8/index.html","4e1f98279295b3c207247d5c82c3f5e5"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","1bc794b9b2dbc7ac68f3b69df3d2ad73"],["/bao-guan-qin-zhan/index.html","50b7a0822cb10beb2c7b00ec5b7ce476"],["/bao-li-yu-qu-cai-qiang-jie/index.html","077da1b4f6fd60890ccf70a1cdc0ae9b"],["/bei-dai-li-ren-sang/index.html","d7cd4ca7a1ef04c0e8f849da976a0ba6"],["/books/index.html","309a404f69f76bfdd981a9144211646f"],["/categories/Blog/index.html","e356e0b4b249f5f043ae65f44c76341a"],["/categories/Blog/page/2/index.html","8dc15166ba2c690d9baee11de4a88b20"],["/categories/Blog/page/3/index.html","d2b89eb0de80f1ab14f81062c64ebe28"],["/categories/Blog/page/4/index.html","729a3bc642a0b9ad9f1bc095a4322037"],["/categories/Blog/page/5/index.html","45a2ac33c0c8b2a406d5d1fb46c0cbef"],["/categories/index.html","04f22e00408f8184639ec819afc7bd98"],["/categories/法学/index.html","8185959c2a9f537e5c422e876563939a"],["/categories/法学/page/2/index.html","564e0e1d6a206f513162c8e001753267"],["/categories/法学/page/3/index.html","d2c428e160cde1a419cb4ce34bdfc637"],["/categories/精彩分享/index.html","1edcee795f2ab810ce3b97ed46e7d5ec"],["/cclisence/index.html","885fd2034e0c7e09befda7e7983c9cda"],["/cetrain-issues-iv-for-company-law/index.html","503ffe0bde000ad94d3e500393c6a404"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","17b190e70d254404d5d721f3f3a25c1d"],["/cs-hubei-2017/index.html","ceebe69d1cf89307df8f7a456a442bff"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","27e600aed7f2ccc672c414661fca1ab1"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","fbed461bf369aaeab6b5fedae4333d55"],["/due-pin-workflow/index.html","b945ecb2426d81de9b275069bfae1e73"],["/duo-ci-zha-pian-shu-e/index.html","d1bbbd7eed3e77f62dd5587bad4114fd"],["/expert/index.html","6deecbee7221dbc4d3fc31e1a5cdac91"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","f3c61f817d7c80cbfdd6fdec01df72a2"],["/google3756ddc34336b7b9.html","dc883f3b2de3e3166fee949f286e825a"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","1e5712d3150f3c21e69e6f69da81a3ac"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","ef980413ed9e81fe24005adb9355ee99"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","dd85c24a636a4e71c1147a0a868b897a"],["/hustlaw13/index.html","e46a1681c5b45bf7cc7b54245a785143"],["/hustlaw14/index.html","37a8a1076ac4b381d34bfa0dfbb29ab0"],["/hustlaw15/index.html","e178b5320d76ba95a162994cc6cca999"],["/hustlaw16/index.html","59d43cc59bf838afee3544633de11e65"],["/icloud-terms/index.html","79e7abb9546b1371558d6c5e5ef4916c"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","2c34f7d27e382bfcc8a9abd7507bca36"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","444950d32bbe6bc73ca99ddc0f0a08a2"],["/jdsnk/index.html","a5d9ed195b07b58fec0fb549c903b26d"],["/jian-qiao-fen-xi/index.html","423151d4d987c0d93c76c205dbc8f798"],["/jianguoyun-keepass/index.html","e8aae42907316b626500e693e217b01d"],["/jin-qian-bu-neng-mai-shi-me/index.html","bd66c5ac90fb428cd5c618571365fbe4"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","6e0621873060a7cd6cbfd1b3f74da023"],["/latex-times-new-roman/index.html","c5694e2a4047aa6aac02037e15be5e77"],["/latex-yu-lun-wen-pai-ban/index.html","f0155f1c5dbc267d1ed090d887ddfacc"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","9c87ca4f35ca0a6c6930740ef883e875"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","c49b1db7c8e1f4e221fd608d65f0acfd"],["/luan-dan-20181116/index.html","1cfb8209df150d26b7b0233f450774a2"],["/luan-dan-20200217/index.html","eb723e7a27d616705ad6d05a1e967f60"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","e267a6550581ab0a1c62a7eae813763f"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","8c12de1f38ff45ec3a09bb48bac491a8"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","3a3b22546a368015a62a3d6c05c70429"],["/movies/index.html","9ced52d8dbe7b4174cca66ae3ce11da3"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","39570d6064d1d25b9f490c02675356e2"],["/node14-bao-cuo/index.html","1ab34b321342e72f412eac65ba4a4d1e"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","04efee80be74d7569bb3a937cbbfdc89"],["/opoo-zhe-teng/index.html","3ba406c6535009d50317d41ea2a5a253"],["/others-00s/index.html","cdb324e36d0dfd882b8e887a427a22df"],["/page/2/index.html","35fafd0271ad5660e0b8eb3245246de2"],["/page/3/index.html","1bdbfd73740a40cef1f415f7a2df468a"],["/page/4/index.html","5e1eb4881e52fc348388d56d46f17035"],["/page/5/index.html","69b6cfcc990895d939c3606adf9b2384"],["/page/6/index.html","a0532b77ec3e80c40942586511950fb7"],["/page/7/index.html","c63fb7f6c4afff8387601c3a835b207f"],["/pan-gu-zhi-bai/index.html","49058ebf64fe26e01e4d371da306ef05"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","004c3be3077b391d6fd59b69b1252a16"],["/posner-homosexual/index.html","5b9d42e4f37b73073c7c7f20b1d351af"],["/qpdf-shi-yong-bi-ji/index.html","79c7cbd6af0ee7dce907e9d2f8ac3e64"],["/qxpj/index.html","7910225a1696f8e8896b70435447137f"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","3f26e15c55fb29cf1cec9603120937e1"],["/shuang-pin-vs-quan-pin/index.html","b771d4afda20112eb47b355b35e4ebd4"],["/shuo-shuo-xiao-fei-quan/index.html","babf1f28ed7aca1fa32c8ab17eafa6d1"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","031ef67438718ba6b1c0e7c96a66507d"],["/software-reverse-engineering/index.html","8d9bc73c7ca63822fbb9d17eb06dbc89"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","6a1d2d005477d0608efb9e5b782daede"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","755eb6751809148b9d99bcb2eddae2da"],["/sw-register.js","4fdbb888ca59a42e3c1f5120b3aed63a"],["/tags/2017/index.html","1ef06e0513ce7de7762605805b264de0"],["/tags/APP/index.html","4c6e020dc2482002ece4762242d52b35"],["/tags/Apple/index.html","557363e0c821b800637d411bd4774b73"],["/tags/AppleScript/index.html","8dab27277b7c85a0e111de1708088fda"],["/tags/Due/index.html","e29ae39e81dc11e9df109276d807eb54"],["/tags/HUST/index.html","2d3964083f30dbba54ab361ca398c725"],["/tags/Hexo/index.html","a5fe616bfbf6ab84c156b3ae1acee31d"],["/tags/Homebrew/index.html","bfd91f2dc61421007076d1b636200102"],["/tags/KeePass/index.html","c5a00197700e3de70ecf3ca621192c10"],["/tags/LaTeX/index.html","3c9294dc1b6ad9dc3c84283eb8c05bbb"],["/tags/Namesilo/index.html","45a833f9f874abf1c837b8363b0ca60e"],["/tags/OpooPress/index.html","d764e729bd60d1c2b8916dd6cdd56cc0"],["/tags/PDF/index.html","9108d80db5cf03858c9f4f07c499a496"],["/tags/Posner/index.html","955c5c15e04c572eaf4e1d723c19e918"],["/tags/Python/index.html","3ae6ad23ec948d07f4b8733f3a85b80b"],["/tags/Rime/index.html","0a895f7c84e5de96138f15848894307d"],["/tags/Tampermonkey/index.html","193d425132f39150072c0ec5729b56a7"],["/tags/ToolMan/index.html","7c1cebcf0940c56e01173ef5d94e90bd"],["/tags/Typecho/index.html","65eb31cb955967ee296a2b6edf6547cf"],["/tags/Workflow/index.html","e67fe8d782578b3226c4a09f58e8d5b9"],["/tags/cc协议/index.html","c955fcb864d147e9352494212022dd40"],["/tags/iCloud/index.html","c7f49056089d8dc557e5d03291c67dfe"],["/tags/iOS/index.html","9a2176828f23f9c99e2d9c1b6aa62b6a"],["/tags/index-1.html","1edfc50de68261d6f21a3a9fc8c601f2"],["/tags/index.html","1edfc50de68261d6f21a3a9fc8c601f2"],["/tags/logo/index.html","b014ac1b5359187b9d823cf9b4bbee50"],["/tags/macOS/index.html","8cd1722b12f3f719bb211baaa23b8716"],["/tags/vpsmate/index.html","7da41da2694b259822c3e5ab2eeb6567"],["/tags/zsh/index.html","45ea0f4dffff6e7ea02086d1c60033b5"],["/tags/乱弹/index.html","dd300824738d77fa78ba6fe1dd4b4572"],["/tags/二倍工资/index.html","7ce60337c97f0aee7b46acf5ffd05dd0"],["/tags/二维码/index.html","e39baa230175aed0f66bcb17e992c3ff"],["/tags/云盘/index.html","359751337e3065a6abc222d51cd28d6c"],["/tags/交通事故/index.html","f33abe19d479e9a0597a9322729e22bf"],["/tags/产假/index.html","9ecd46ad9195dc9fcbab8b3386d36ae6"],["/tags/人身损害赔偿/index.html","169eeda515a5b1a62c966abeab35bb82"],["/tags/代理权/index.html","485edcb3bd6c0a067048d78223b4230f"],["/tags/优先受偿权/index.html","c74ea4c27fb55576eb3932ea9c9b03d0"],["/tags/作品/index.html","44e6dee63d284bb225ec778db611257b"],["/tags/侵占罪/index.html","bb5bfa28fcfeaad5fafea5e4f3413bbd"],["/tags/儿童权利/index.html","2cfe5bc5d11009c95bf6477f222d8ea0"],["/tags/公司法/index.html","2742b4cdd07b1496e29cb0af707ca131"],["/tags/共同财产/index.html","7cb08b261aad3852053b07d4aa8bb3f4"],["/tags/刑法/index.html","92e1964542b0b7b1b864e5d3f0f60ba0"],["/tags/劳动关系/index.html","527c42d33afd96f1b4253228d025d02c"],["/tags/劳动合同法/index.html","7f65611c551265ab87e9a3d2584f6e30"],["/tags/劳动法/index.html","37a9de4f643ff21ec82488224c113005"],["/tags/华中科技大学/index.html","940f0d3b42a9e6570a7f21bf2f2db063"],["/tags/华中科技大学法学院/index.html","0c898af35caac6420c1091ae5f6f9029"],["/tags/危险犯/index.html","3312dcec9b4626b858f478050deca728"],["/tags/反向工程/index.html","4f9e4221ddb4012200be19cf9a128d10"],["/tags/发行权/index.html","1307f47cae2e7cbd657eb779b1a71992"],["/tags/司法解释/index.html","dcfec4e1c7420a1535364d3fb6121cc2"],["/tags/司法鉴定/index.html","44bd8ca38915f6fbbc2109b7f544fa4b"],["/tags/合同主要义务/index.html","2d7fc1d75920de5338926c3954a23d8b"],["/tags/合同法/index.html","0ad08aa2e09fa6b996daf3aa214e7546"],["/tags/合同附随义务/index.html","6defdc27707870cdb9478216a5f00d1d"],["/tags/合理使用/index.html","a12d28f5abb5ed83f3cccc54ee5abf2e"],["/tags/坚果云/index.html","39800b4abb87cb1c1b90f61c166cc547"],["/tags/域名/index.html","83eaad6cb7902207ad7dc7865e872ea2"],["/tags/字体/index.html","28e60459ab8fe95909f3227691845cd5"],["/tags/实害犯/index.html","ed9c09e0e745fc8391c532e0e9dfca3f"],["/tags/密码管理/index.html","6e1c944ff1ab07b4eb5d8327f8a045b3"],["/tags/工资/index.html","f1dded877d89f96a3d27b718cee01aab"],["/tags/待履行合同解除权/index.html","17740cc36f37d30e18208d1fc4db1551"],["/tags/律师收费/index.html","2d0a8b8f46d490d2540a9767bd1a049d"],["/tags/思想表达二分法/index.html","7c8a3eee09cb7b8ed813270e695037cd"],["/tags/思维导图/index.html","846cda2d3e42dd9e900c1e79608532ac"],["/tags/成本收益/index.html","65be65e6008895d864739e4d3761cbd4"],["/tags/成长/index.html","44a7b92e0ac1326759bef5876c4ac4b3"],["/tags/技术措施/index.html","88f556c5ee863809510f663778029ca3"],["/tags/抢劫罪/index.html","1bf4918e3ac192623f89947495c13c9b"],["/tags/抵销权/index.html","1603a235680139944d261f3e8289a44b"],["/tags/排版/index.html","dfc30dd89bd2cdd1b075f53958f48d5d"],["/tags/插件/index.html","1dd68a4b743a44ddb48b33fa2e4ec35b"],["/tags/搬瓦工/index.html","bc5f648d687d8cc9f8c78f023136b5fd"],["/tags/故意伤害罪/index.html","828eb9607da4289bc864add4ff622cec"],["/tags/效率工具/index.html","fb3929507e59dea4ecfb06a24b070e4c"],["/tags/教育/index.html","bb7f01404272a529a43b8262fcc4e6ba"],["/tags/断舍离/index.html","b306b7b9afc712ed03df70b9e912c185"],["/tags/无固定期限劳动合同/index.html","315fe35385bd56130d1ed9e4f846c31a"],["/tags/最低工资/index.html","8baae21e191bee6a73ca9b97731aae00"],["/tags/最高院/index.html","b145a3a37e60f83d1031ad58d4b444a4"],["/tags/机械键盘/index.html","62b49ea33ffdc26de7d725cefbb244b8"],["/tags/武汉市/index.html","fb1f15a3cc78190ba53e2cdcc14f8d1e"],["/tags/民事行为能力/index.html","e2d34d6635412dc5e4d872d6356acbf5"],["/tags/民法/index.html","66feba0dc9c91a230768d7188ed707cb"],["/tags/汉字/index.html","1e0fae02d352d33574e3b09069e901f8"],["/tags/法学/index.html","f043857057d94f46c0ccd9689f0330ab"],["/tags/法定许可/index.html","26903c7928b0101725643b5343f9b871"],["/tags/法律/index.html","26d81adc80483575604c73ea6a7a862b"],["/tags/法律援助/index.html","a4834898530b86168c33fb09104df4c9"],["/tags/法律法规/index.html","e28e849cae3ce73a4fe1b4dcc928c90a"],["/tags/法律经济学/index.html","296ba2529d168a0ab84fbfd3b2b512cf"],["/tags/消费者/index.html","8822640eadb778828de0eb6bb21b9708"],["/tags/湖北省/index.html","4ba4759bcaa49c52d73eb33c7938a827"],["/tags/熟人社会/index.html","f088bbcbefff478e0ef7336db752b4dd"],["/tags/物权法/index.html","2c6bebb68baf9cfe4c8050870ff4a8e6"],["/tags/用工之日/index.html","3a4ac5a781d03fa25b503180d6cfe568"],["/tags/电影/index.html","a7890f9e82dc29c9984c41ed0d1a2c0a"],["/tags/男女平等/index.html","e22b9245f0f02fd7e8eb5351355f943e"],["/tags/知乎/index.html","117537b6e88824705302e32cf07b3bd8"],["/tags/知识产权/index.html","ae17bb335e58c31975ef46777ab6417a"],["/tags/知识产权法/index.html","aceaefaa18349481561957bc713d06c1"],["/tags/破产法/index.html","9ae0ecaf91209dfa69df1c223b6e83b4"],["/tags/破产管理人/index.html","496592794fe0e33419ffd19c5e5e0b77"],["/tags/社会责任/index.html","4c356eb783c61ee0570330db968ed26b"],["/tags/社会问题/index.html","15853d68f2cbd73a9bdec6e926a4630c"],["/tags/神经科学/index.html","900536dd695a89926f99b78efe881da4"],["/tags/经济学/index.html","782e1b97c8856e58ba6de45a218ed025"],["/tags/结果犯/index.html","1aa56addda24e180413dd9d4eb343727"],["/tags/缺席判决/index.html","e326b08f0271300f336b9853f92a2610"],["/tags/考研真题/index.html","a349f79c58684d935e162629bc37954b"],["/tags/著作权/index.html","b50821d9720dc3fd55d43a4a038c81df"],["/tags/著作权法/index.html","5dc519c003b4c029e423175510edc22a"],["/tags/行为犯/index.html","c84414b7b60542f131c2362672883532"],["/tags/行政不作为/index.html","d5bd96fe94e32923710690c48514a379"],["/tags/行政救济/index.html","4e6bc932d4f45917ebbcc6c78f2e6d31"],["/tags/行政法/index.html","f2f898e7d2c4b88bf88ee3e449492394"],["/tags/装饰装修补偿/index.html","ca521d8d266bd204fe5875becb83b795"],["/tags/观后感/index.html","865e552ba51edc69111a85b54b69b8de"],["/tags/观念交付/index.html","901bd7b0ef41b4f72d7b1166ff951218"],["/tags/计算机软件/index.html","30770644c048e096e80546833fd55e05"],["/tags/认知科学/index.html","1e0b3a4b9c2bde742bec79908c397e53"],["/tags/论文/index.html","f0863bac3306a92b4c93b98e8e13cead"],["/tags/诈骗罪/index.html","7da902b97f3aa1b22394215453a04f70"],["/tags/读书笔记/index.html","9439291760bf06242f9e74eeb0033192"],["/tags/赔偿标准/index.html","84344a978d20613db78a325d189cf970"],["/tags/输入法/index.html","96e24fc15f6512518f04822145f3f0d5"],["/tags/违约责任/index.html","14dc2905bebf39b3045e16e3b74571c6"],["/tags/违约金/index.html","f4d7d3ce1e879e45f3aef088510f56a5"],["/tags/释明权/index.html","275fc39589fc77f596c00ae10efc9d9c"],["/tags/隐私/index.html","d70781aa6b0e1cf18afc809f7cb57715"],["/tai-er-gu-shang/index.html","94bee22642ddb4729556c113d9978fdd"],["/timeline/index.html","a04a28406d0f8c6a4ed95987bef6313c"],["/vcard-yu-er-wei-ma-ming-pian/index.html","06a11e5542683ffbbac90e8dbfadf103"],["/webfont-yu-zhe-zuo-quan/index.html","f1c4a0ecad9c7e048ec49bb79a201799"],["/wei-ji-hou-ban-quan/index.html","25d9b1343a4d0665fcbfcc6ce5262ed5"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","9ceb8b14f8393fb842a329a4c71bd21d"],["/weixianfan/index.html","392b61b3a38c9da9276e3166af99dcb1"],["/wo-de-macos-he-ios-she-zhi/index.html","1c90ed48400c944b0cb9c7330162ef78"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","db2a65e47391eff645b61722dc9e0e5e"],["/work-rules-mindmap/index.html","3146064b35f2445a0350f9948e52509c"],["/wu-han-chan-jia-shi-duo-jiu/index.html","a2978ca01bfd10bfb9ffdeff0a6196a1"],["/xzlfbzw/index.html","83baeb526e3da111006b15ac1667471d"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","076b5fcd601801bb5165a9c1d8d6bb78"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","a6d394925ac6e41a128d0ecd7cc77411"],["/yu-ming-zhuan-yi/index.html","4b88310cf430a51803607b05c1a931a0"],["/zhetengb/index.html","e45d3cb95f895e4795b175f6f8a690f0"],["/zzq/index.html","0ceeff46d8078334cfece6d87b695e9f"]];
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
