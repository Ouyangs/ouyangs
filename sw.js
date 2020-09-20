/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","904f237832b4699be399361deb819fae"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","88e0180bc88d61e3b64fc93d640b9f51"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","961e02cf1068ed51051c047d58d187b7"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","46cd5986aed430d4791dcb3f647ef0d5"],["/PGP/index.html","5880e12521b8bd521e2720e4f9baef4c"],["/about/index.html","1c1ed78b33c184f6b9a628c3506ad5a7"],["/applescript-jiao-ben-liang-ge-ban/index.html","24cecda3e4dad824ac18a6411700c09e"],["/archives/2014/07/index.html","b3500483b7f032f74e8ad192aecc523f"],["/archives/2014/08/index.html","78ca3a05d8a0d5f1fdb9ba90ff9356ee"],["/archives/2014/09/index.html","d7933d94dfa7c02bfee944299034f53b"],["/archives/2014/10/index.html","5eb326c8cfa62645895599ad885f4359"],["/archives/2014/index.html","826ad50d7c2337cb5fd1a3f806937719"],["/archives/2014/page/2/index.html","cf8cbde574ef644ff56d534464a8dcb4"],["/archives/2015/01/index.html","ade4a8b04b7ae30da2dc6afe7b53d01b"],["/archives/2015/07/index.html","4b44fb932eb54e0e6450401cfa2667fa"],["/archives/2015/10/index.html","ed55e232c1ff675fde346d7fbc99b557"],["/archives/2015/12/index.html","515e662254fd6f62affd5e39cdaeceaa"],["/archives/2015/index.html","d5067ce37542e0ae525380ab3d69aac6"],["/archives/2016/04/index.html","4a96dfe1afabb38074f080f5c010e578"],["/archives/2016/05/index.html","33d45a1aa70489d2e6124e86135e0e2b"],["/archives/2016/index.html","b2b14e00f6baffa9acbba4c936e9221f"],["/archives/2017/01/index.html","2ad1a6af582f5aa069aee09724100fb6"],["/archives/2017/02/index.html","04229e473de7b94ae1e0982a1199e247"],["/archives/2017/03/index.html","87b88b2ef5cbd6221b3c4c8ddbb08a8c"],["/archives/2017/05/index.html","5261c5edc4c64644b5ee90f08521c727"],["/archives/2017/07/index.html","804ce8ef88d957b89eaa221bab6e95ef"],["/archives/2017/08/index.html","1604606ee03466775e9acfeda4888f33"],["/archives/2017/10/index.html","114e65c3c0229f7b37b4bea2fb81df2a"],["/archives/2017/index.html","5e31d164175eb7f0d970a46e6ab58288"],["/archives/2017/page/2/index.html","000d70c769faddb6fea1903293ac02c6"],["/archives/2018/01/index.html","ca4f428ea1cfacbc471075f5b639dab4"],["/archives/2018/04/index.html","ed778dc30300821c6ebe534ea530ca4f"],["/archives/2018/05/index.html","159bd0bf80bc02d095dfb893c9dd688f"],["/archives/2018/06/index.html","bf73eefc95887340e91160fa0d9edb8a"],["/archives/2018/07/index.html","ee490fc31d8ed5e0e6fdca4a35705eb8"],["/archives/2018/08/index.html","7b8328b4e8dbc411040adc90a027a22d"],["/archives/2018/09/index.html","93b431cad4c31776547a1c285a8e99b5"],["/archives/2018/10/index.html","1a918a8727705c2e3072c373a35aa9a8"],["/archives/2018/11/index.html","decdae98d4f41bc1b82107e019826555"],["/archives/2018/12/index.html","81cb929dab6fe493d6125e7d16cd8614"],["/archives/2018/index.html","824b9712d7ef491a32092f9dc84d24b3"],["/archives/2018/page/2/index.html","7c9e9ac317abc449e34abd7fc401ab64"],["/archives/2018/page/3/index.html","f6a0b55f708e2dd5ed0004bcf4ec2d3c"],["/archives/2019/03/index.html","a974f9203671cdedf13c8109a61ecfef"],["/archives/2019/04/index.html","7eedf0d46207a856c1be51cc42dd99e8"],["/archives/2019/05/index.html","9c2bf1f4cf75ba75a93153d249576e69"],["/archives/2019/index.html","73b96b0504e7f415b898cae11700c143"],["/archives/2020/02/index.html","ab811507943c614513b0e9d398dbb6b1"],["/archives/2020/03/index.html","9e548291fb98f31525418bab8ea10f9c"],["/archives/2020/05/index.html","a0d8666a3cac242cc55218654195b65c"],["/archives/2020/06/index.html","a378b61a1f399d289119f8f692cfac56"],["/archives/2020/09/index.html","3e28c32cb5510916b98a7f5d3d738f44"],["/archives/2020/index.html","84932947c68dce904867b4c37a5d7708"],["/archives/2020/page/2/index.html","97da85c22f51a21cedb1281593f16705"],["/archives/index.html","68134a156334c76da339e115231972ea"],["/archives/page/2/index.html","127fa6b451627d25bfdc9acfa333d3f1"],["/archives/page/3/index.html","673866a129cc06d54a276b8d5fd75e54"],["/archives/page/4/index.html","15cd48a2d1658f00e70b05d04c1a7d28"],["/archives/page/5/index.html","c569ea857803bb2dbad4fd73cac55927"],["/archives/page/6/index.html","7b308d533e2738528faafc52150640ea"],["/archives/page/7/index.html","a089cf3027b807c914815c18d941d300"],["/archives/page/8/index.html","f8a294dbe653d39e2fdd79a0cd4892bc"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","8259dbfa1a6fd305296293e98d291c26"],["/bao-guan-qin-zhan/index.html","7ff4547db026c4c72a70059db2b206dd"],["/bao-li-yu-qu-cai-qiang-jie/index.html","100dfd7dd87a6761f09fa5095ff97d55"],["/bei-dai-li-ren-sang/index.html","2a8e177184fc519c4f21798bba48699d"],["/books/index.html","732055e90c53a5a20fcc6d898c5c28a0"],["/categories/Blog/index.html","f145edaa29c6a9a063c06881ba994e4c"],["/categories/Blog/page/2/index.html","b67c2493136ad194b3054b35d270c0ba"],["/categories/Blog/page/3/index.html","dc254fad68c6c7cf56043bc6298f2a08"],["/categories/Blog/page/4/index.html","049c25289b02a60144bacc5fa0c26e5c"],["/categories/Blog/page/5/index.html","2d5114fbe31a5f12512bd161fd8764b7"],["/categories/index.html","fbf94461f5cdea9a3805d3185d004d9e"],["/categories/法学/index.html","0cdb2da5437482b9fd44359c855477d6"],["/categories/法学/page/2/index.html","7e3747edcbdd687b043ef60646efa191"],["/categories/法学/page/3/index.html","e313b5db008b7ba48206d72a7a1a225e"],["/categories/精彩分享/index.html","aaa49983f69ce5b69a9848c0ca024859"],["/cclisence/index.html","684e66db85abe158ef11963be384768f"],["/cetrain-issues-iv-for-company-law/index.html","9ccba57db82e5292a6354b066c8320a8"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","a8d82b2c5f7e6b556ad246aee1ffbc1e"],["/cs-hubei-2017/index.html","cc27f65921c0137c3ad847669ad764e6"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","45a034c5215dc0c2256c469b03d5e072"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","56c9d8bd748db7e3614846fbc22ec33c"],["/due-pin-workflow/index.html","76620e2d4859fcb3548c778128f1eb6a"],["/duo-ci-zha-pian-shu-e/index.html","279793b3118242c5985f4bbf625bae50"],["/expert/index.html","bdc98006cc5c4a5090ba464911a04f52"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","744d6171873efc0566e303dd27571fc2"],["/google3756ddc34336b7b9.html","f4e5899a0362d4f01e92013a6606429f"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","6acb8793dcc426f965385f703d150216"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","a46d931c542845aad337263877921890"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","a4e8b0912615b3e14df9776886c8c520"],["/hustlaw13/index.html","9876735f12b20d29f6a3d77a0b4194b2"],["/hustlaw14/index.html","60e8619aabc9f6bedba03a906c3360fe"],["/hustlaw15/index.html","102cbde88a676d68a76a803147028218"],["/hustlaw16/index.html","a9c468ca48869d3afb8f53934a0c4f6f"],["/icloud-terms/index.html","52a344af130df86a4a03fe06eef05c07"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","ae3eaf8f535b85b741713fbc0f956990"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","fc6a5d4bd54c554aab43068a61d47749"],["/jdsnk/index.html","5b0d013866834b0cf5242de8100c8d37"],["/jian-qiao-fen-xi/index.html","009a84fe7dcfefaba1cdbc9b61eda48e"],["/jianguoyun-keepass/index.html","a69d0e7c95d1e8b1f7c3c0bc456f46b9"],["/jin-qian-bu-neng-mai-shi-me/index.html","d72ca43f772817fa7035f8c9a7e783c4"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","b97492ea7eb9f4a9184329e5d3966a60"],["/latex-times-new-roman/index.html","40f281d3d936d5bba3244fd53b71e445"],["/latex-yu-lun-wen-pai-ban/index.html","2e7b610b286cdf42167eed071b72a6b3"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","4781e1946c1bf9f493270d7161eac240"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","d3da5cd93b98df6a5d158ce7829db131"],["/luan-dan-20181116/index.html","3134e2eaeb65fc060f65a47ceb887931"],["/luan-dan-20200217/index.html","91dc588a3d2bf3ea7625b6994f166e70"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","ad4c261ed5d98ca84d1bec5b5f91a0f5"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","6991f4350e0f5bdef868a77a5c997880"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","77e793146612985146068375dcd05008"],["/movies/index.html","30d71387befe453b1c316ff16d827f89"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","169e3bced4ef678ad5edcc0ec3d5485b"],["/node14-bao-cuo/index.html","5025a3c3648e3cc2d89eedcf02c76915"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","6fb538f00d8797708b2efd04d489b78f"],["/opoo-zhe-teng/index.html","feb5a1da685203458368e302807502c6"],["/others-00s/index.html","19d42bdcaefb395b387695782b814fc7"],["/page/2/index.html","56f81a48b786b5b84f3dd81c44b3eee4"],["/page/3/index.html","bf2700ab949caa83f3b61e9fed00d8ab"],["/page/4/index.html","08823857c8162929c93b561995617ad4"],["/page/5/index.html","033c2cddfe239f8094c8417716b33d62"],["/page/6/index.html","522d1065ca9ea90eb90a0a88b79fcc1e"],["/page/7/index.html","9c69f9345ed54af4abcaa83c5b88b006"],["/pan-gu-zhi-bai/index.html","dc3233aac96ff5430d6465eca2660e11"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","fd0493ef71d01bd31f27e7b533be349b"],["/posner-homosexual/index.html","9a402caa469a9a2ce543f85091e9f8e7"],["/qxpj/index.html","0679013bb43e9798564f0a360976de35"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","fa7099109495612937eb23a2e5258b7f"],["/shuang-pin-vs-quan-pin/index.html","9060c8a75c54b679995a02559171d916"],["/shuo-shuo-xiao-fei-quan/index.html","92a5b3aa1e2af5fad47197c04d9e03a7"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","45c3c98ca3c6d75fa5ea3b77781bc53e"],["/software-reverse-engineering/index.html","523387e66694d07cddffcfa5e3723da1"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","4e6f7f8344c671a525442b8e67d8aa8d"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","5fe3dfb01db2809e716ad3a31061babd"],["/sw-register.js","a904a829ee5c10ee28cb9c0a3253f6a3"],["/tags/2017/index.html","a0e4d7ff177ef0826a921c9bf6bd727e"],["/tags/APP/index.html","63fc0957af91d0b7ffbd6dda9a518085"],["/tags/Apple/index.html","d9c3e7c8130c51852737a6d3ca56548d"],["/tags/AppleScript/index.html","fca18bed2f35d34614b9d7360ae9a329"],["/tags/Due/index.html","277c20c29598ae90b0c84ae1650da204"],["/tags/HUST/index.html","5701dceee89dbbd8e7ba7b964a259377"],["/tags/Hexo/index.html","3063cc59b199aa51fac7a47414b15ffe"],["/tags/Homebrew/index.html","8d194d5042fc68cd18934a62c07db14c"],["/tags/KeePass/index.html","82cfaa9e0159138ecadd2e01cea140f9"],["/tags/LaTeX/index.html","27295d3f8273c552c252dc8155e84486"],["/tags/Namesilo/index.html","88187e6cfc589115f910d27072f3a575"],["/tags/OpooPress/index.html","1fb312e9245d0fd45a0ba6112801456e"],["/tags/PDF/index.html","b2a2f43c48e0708ab4923444af207f24"],["/tags/Posner/index.html","6cc5cec919a6e60b53a010ac3bb620c2"],["/tags/Python/index.html","78422549cd699da5c6d017988b3ada06"],["/tags/Rime/index.html","71875d6c339177cfbfe2670b2e3739b4"],["/tags/Tampermonkey/index.html","e637496dc043e78cccb49d328813d609"],["/tags/ToolMan/index.html","dca11e537fa931f8e2aa8590a6f60846"],["/tags/Typecho/index.html","80952fd637e1c2149586eb68f87ebb23"],["/tags/Workflow/index.html","d4d46aeccee5a4a9fa1e3ece4e949304"],["/tags/cc协议/index.html","4e70da23a05d8cf6924400365188e9c4"],["/tags/iCloud/index.html","ce55195acacd6b50b89c825416959f8b"],["/tags/iOS/index.html","05b1d929f77b29ab8749f3e65d93b8af"],["/tags/index-1.html","9d266f73bfd3130a5cb1d76b09ab32ac"],["/tags/index.html","9d266f73bfd3130a5cb1d76b09ab32ac"],["/tags/logo/index.html","cf1f7b47d7285c9971460cd594ababf0"],["/tags/macOS/index.html","5d8efa9835562b5eca4ed2a253d68685"],["/tags/vpsmate/index.html","279395f1ba3ad8cd2e72e052950ccad5"],["/tags/zsh/index.html","025978bfc837bc2007d273c69fe21ef6"],["/tags/乱弹/index.html","83f4752d4b94acffe72723bd71862cbb"],["/tags/二倍工资/index.html","4fe512572d0dcfeab0b8dcdbf0b5e020"],["/tags/二维码/index.html","a1447c4e8f46a7be2792146fd82e1f70"],["/tags/云盘/index.html","fb099c983889953f3fa8c62f429e0806"],["/tags/交通事故/index.html","2ed30b70eba6416252a922024654c5a1"],["/tags/产假/index.html","e9d63f88a507a153fc606f63c72cb567"],["/tags/人身损害赔偿/index.html","0cf5010fa77def35fffa98ab3ea0d17f"],["/tags/代理权/index.html","32eb24d340718c5de77bb3e9d545c25c"],["/tags/优先受偿权/index.html","ce121ec95d6444b3de24b2ad95e34c4b"],["/tags/作品/index.html","4cdbfd3089ccc1f65cf8b252ae3b886c"],["/tags/侵占罪/index.html","ee3e949a02892673932aba6a07ab22d2"],["/tags/儿童权利/index.html","0747dececc6765e234ce2944baeaebe0"],["/tags/公司法/index.html","52411a2ac356c7c93e48ccaf9a908732"],["/tags/共同财产/index.html","632ff8f7634538c3133f97cfd5cd5295"],["/tags/刑法/index.html","bc0a5af3ad88081fa93695f4cf0d3317"],["/tags/劳动关系/index.html","d60567e0ed56c02274c0c32b761089f2"],["/tags/劳动合同法/index.html","314c20663ba90f47f11bc6037a97d0d3"],["/tags/劳动法/index.html","2e5dd02521180cf64fc6947273162b9b"],["/tags/华中科技大学/index.html","1ad86a8d8106a5bad1ad2f81c396880c"],["/tags/华中科技大学法学院/index.html","047d8121d5da8bf9e1b0447141d7f692"],["/tags/危险犯/index.html","1a3fc4e52c0f8cb0b798189337d97a64"],["/tags/反向工程/index.html","a400079aecbc257f88d2de6c34169b09"],["/tags/发行权/index.html","a925af2357cf2dd657f52e4800248711"],["/tags/司法解释/index.html","88f17a92b6e38dd2fc844f7c6db20ec6"],["/tags/司法鉴定/index.html","9abfa633c7864e967c5e27d05f4a9e57"],["/tags/合同主要义务/index.html","3ca59039f84e81f9715318791cbf887d"],["/tags/合同法/index.html","09de42e82fe2323089b98f71bec84d60"],["/tags/合同附随义务/index.html","e27a669290f649855fe2ac3ada41123b"],["/tags/合理使用/index.html","ed8cf2140582aeb11e6ab695cab37616"],["/tags/坚果云/index.html","1a7b07b62b4779f2e95719fe5c700e6c"],["/tags/域名/index.html","d07099d4000a7261c756e37bb91a9af1"],["/tags/字体/index.html","c6508eef8301e3056e3de42501eea7ac"],["/tags/实害犯/index.html","c282ce04cb66ade3efaeb8396e1224d3"],["/tags/密码管理/index.html","317292a152f915b9cb79b9151f1c258c"],["/tags/工资/index.html","50087320c596dbb1ca4f32d4498f02bc"],["/tags/待履行合同解除权/index.html","b76557a48f13fa3344ea2bd96361ffcf"],["/tags/律师收费/index.html","14ad35e3ef5dcf6e4e5396bd1dbf6383"],["/tags/思想表达二分法/index.html","aae3cf3ef8d0b86583308005d468f1e6"],["/tags/思维导图/index.html","4176bcf6ec09f0948de83eac87f05ba3"],["/tags/成本收益/index.html","11e1f48aa0ea6d670bf1fc86c009f43b"],["/tags/成长/index.html","0f31d287de2bbb8dd9fc9ac68281d4d0"],["/tags/技术措施/index.html","be7a08d4e3d085c82c705eac1a309b60"],["/tags/抢劫罪/index.html","45b3a92381a0f6bcadd2e497667c5a9f"],["/tags/抵销权/index.html","b2f9b87260250f3116d42ac3c08d6e26"],["/tags/排版/index.html","c7efadd1b684bfbeeef6fc16526ee9c2"],["/tags/插件/index.html","6f639ec6dd40bd248c640639da4d12d4"],["/tags/搬瓦工/index.html","1d1765500eff110cf920781b51404e48"],["/tags/故意伤害罪/index.html","e840a71da0d9f3852427d809174ee174"],["/tags/效率工具/index.html","ad013da12a2dff744fcfae1a178c627b"],["/tags/教育/index.html","7776b063d603d75dfba1207f57442a2c"],["/tags/断舍离/index.html","ce98f14a8e1048757cb1ce1248fd9977"],["/tags/无固定期限劳动合同/index.html","ce34b612c3d1801a562e16f0234d9925"],["/tags/最低工资/index.html","6c37f665c99ed81b4888285291900890"],["/tags/最高院/index.html","fb9f35f97222e41e40e6b36c76aee812"],["/tags/机械键盘/index.html","a252833fbaeee26885b6fcc80777a1b7"],["/tags/武汉市/index.html","0aef6a82c88bca3fbb4f8f2cbfe28c8a"],["/tags/民事行为能力/index.html","b7792597cc188dfe603475871e873827"],["/tags/民法/index.html","c969d24f49ec062c1cf7586d32f1d03d"],["/tags/汉字/index.html","9bd707ae2b89606eae1b4f9fe653a682"],["/tags/法学/index.html","61e09f1fab0bc78b530a71f3210de6d2"],["/tags/法定许可/index.html","b895ce22af02a5b60b03033dc4e0f06e"],["/tags/法律/index.html","f87b1ac3d47017df940f479925ea4f50"],["/tags/法律援助/index.html","0fb8c5a02c4fde6342a0a6d79c80f548"],["/tags/法律法规/index.html","4b53b64c7edebadb651d4a0651656185"],["/tags/法律经济学/index.html","722c68c307f5be9fe59f3dfbd4c80e57"],["/tags/消费者/index.html","5991757302b3c0cc39f671ae9929fb52"],["/tags/湖北省/index.html","eb3161b21a846a58a5c1c27559fef9d1"],["/tags/熟人社会/index.html","6a62fd63e1e6bb46050982e1143bef60"],["/tags/物权法/index.html","f1c9008cce56009bb61fbc18885798e3"],["/tags/用工之日/index.html","0f6b71df4925084d4a496a9894185c82"],["/tags/电影/index.html","03cf519f869e3c4b57e778dad2302146"],["/tags/男女平等/index.html","048e191fd1cb4db9c3dafae1ad40daa9"],["/tags/知乎/index.html","eda5f45cf567dcfd3013496967d7f01e"],["/tags/知识产权/index.html","fcfa4857a32d61481ae2b648566ba1ad"],["/tags/知识产权法/index.html","2939217457936448f410380c447f94d2"],["/tags/破产法/index.html","9fe2cb0f836cf9949c9936000247f903"],["/tags/破产管理人/index.html","41380b7c7e68d72191e4fe819bc1ec5b"],["/tags/社会责任/index.html","494581439842b45f8b3c28deeaaea4cc"],["/tags/社会问题/index.html","322b017dbf2e9904db37163a04f83323"],["/tags/神经科学/index.html","9cbbcf46a605b5fc825af32d2a0dec42"],["/tags/经济学/index.html","44ab5cdff16416662c8e0dacc6550123"],["/tags/结果犯/index.html","0aa11ae278c9064c408382cde506c231"],["/tags/缺席判决/index.html","f6a24e3822d6bce164c59183125162da"],["/tags/考研真题/index.html","d90da7e63807a9a33bac7f8016973f49"],["/tags/著作权/index.html","9cc84fbbf74d0d70bc769c4b8d62c742"],["/tags/著作权法/index.html","ee4e9d3969ac27028d69d082bc357e25"],["/tags/行为犯/index.html","a977f2aedc5aa99fa3c8c47a1fdca9b8"],["/tags/行政不作为/index.html","090f311f67ffc50bc6326a2a7f36ee51"],["/tags/行政救济/index.html","826669bb5c00046c583945813cbd361c"],["/tags/行政法/index.html","85f8ff5e22a2b4299ca36973891c22d5"],["/tags/装饰装修补偿/index.html","21fd0b51513420220c2da9d40c8b914d"],["/tags/观后感/index.html","290308b7e5b1b90cfd9330dcf3c16261"],["/tags/观念交付/index.html","70a53c231c1f8d780c3a54907aa797b7"],["/tags/计算机软件/index.html","e24bd173681cb8a56ff8474a73a236da"],["/tags/认知科学/index.html","99fdac433191234745b0bc81caffb0c1"],["/tags/论文/index.html","03679cc788dd812b132a956654be8d84"],["/tags/诈骗罪/index.html","f19901da5f8274b43aef6f9180591bfa"],["/tags/读书笔记/index.html","6543f4d295ce639338707c743682575c"],["/tags/赔偿标准/index.html","422700ea42e0c88377e513574046b99b"],["/tags/输入法/index.html","6c00bb48f9c545f13bcf520d404ef2d8"],["/tags/违约责任/index.html","98e47756656868a30f229663d7e28d32"],["/tags/违约金/index.html","d3f91ccb3aa24af64a21a3a6883e31f9"],["/tags/释明权/index.html","6a4e2abe1361c22f81d096e3eb7eba7c"],["/tags/隐私/index.html","4c8616284838193d5268821e79568dce"],["/tai-er-gu-shang/index.html","2369299c9b8b23e45a5c75fd5e041089"],["/timeline/index.html","b473a2b3e89801d1d2bd1a64c7200831"],["/vcard-yu-er-wei-ma-ming-pian/index.html","abb7059271b1af0bfbd3136d84ddb45d"],["/webfont-yu-zhe-zuo-quan/index.html","c86a1db3829342327afbc9836c503a21"],["/wei-ji-hou-ban-quan/index.html","8d306cf4edba11b7cde78fbf001c4a88"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","646b8faad605aa1a5cc2f210eae90c41"],["/weixianfan/index.html","f7a19538eeaceee249a72c7eb96ce06b"],["/wo-de-macos-he-ios-she-zhi/index.html","7b5d39d224c9f4c38d2f524da64f025d"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","b70bf047fa7ce1e19f14f6b91c2011d4"],["/work-rules-mindmap/index.html","28af73bf374e536841ed291ffa04deea"],["/wu-han-chan-jia-shi-duo-jiu/index.html","084eea681b64f6eb54bb4bb59c095051"],["/xzlfbzw/index.html","1a0524853439b52b87c0c1033dda9f8d"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","9e92c23b49a9c9a55968427b1c86a552"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","40cb49a8d40d187030ab8290f289fe01"],["/yu-ming-zhuan-yi/index.html","cd98adbd1e1fdbdfb38a24faf251e45d"],["/zhetengb/index.html","489a26699a1b34e404cd51268f488293"],["/zzq/index.html","990869ee1ff532880f1312c52d5237f9"]];
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
