/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","0996250a9f3e741c41e5c94dfd2165e3"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","4fdfac358b466de62117fe39b32a01b2"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","388eb7f7968d567a0a6e9124019fde69"],["/PGP/index.html","ee8c09146e36cd33feecfb48dce66440"],["/about/index.html","bdf2a38c3fbb0335341a581f384c16d8"],["/applescript-jiao-ben-liang-ge-ban/index.html","929d64d2a24a5ce498ce83004adf544f"],["/archives/2014/07/index.html","ea95358cafb3b8ce3f7a018c4751c037"],["/archives/2014/08/index.html","72a6c4a4cfd52f17428c0ddeefd5d768"],["/archives/2014/09/index.html","d04ece7256a9ae54e035c8d8f3a00f63"],["/archives/2014/10/index.html","59eafd56a913f61d4876124ac64fcac9"],["/archives/2014/index.html","25d21f8619cd275187d27b06b138dfc7"],["/archives/2014/page/2/index.html","2a9ed32de3fdd60740975fd21b324d83"],["/archives/2015/01/index.html","70e79ba4bbe927c99eed47cdaa4d72e5"],["/archives/2015/07/index.html","1f88b5718e0140942454ae041cbbe0b3"],["/archives/2015/10/index.html","ef20f39063895a79751db0971481ee46"],["/archives/2015/12/index.html","24d61ff55ea490bb5550887f97f5ae94"],["/archives/2015/index.html","987811aaaaaec3e185ac3e8c7e5bb173"],["/archives/2016/04/index.html","a389c86f1ec0bb50d16847f85a321d71"],["/archives/2016/05/index.html","c081f97ba2b245c6c6a58c3802407a68"],["/archives/2016/index.html","101c5fe0650818640e622c2215bb7639"],["/archives/2017/01/index.html","0fa59343b808f33f7eed4ee80ec6bf3f"],["/archives/2017/02/index.html","22cbc6ab47191533efac6853647d37ac"],["/archives/2017/03/index.html","e370c24f5826515d8b4b1f1fdd0c6dc2"],["/archives/2017/05/index.html","bf212c59a9ff6c6a9853fc68b20f7e18"],["/archives/2017/07/index.html","d0720b5c0b5676fc56c181900c031b02"],["/archives/2017/08/index.html","553b042f9346fd74f2b4463dfc8c4651"],["/archives/2017/10/index.html","fb1c5532c34d8b5e42000a41b3bcd17a"],["/archives/2017/index.html","db3caa6b15f1b94fb9a43a738a599e84"],["/archives/2017/page/2/index.html","22d2c60626d5bd183c14bbf1984d786b"],["/archives/2018/01/index.html","84ac92d2b932233a6ebbd24fd165c05f"],["/archives/2018/04/index.html","d5cb38c725325f2b4a04e4b3e3ac99ed"],["/archives/2018/05/index.html","c67d2eef06f7522633e8af1f09cf8ff1"],["/archives/2018/06/index.html","5240e0015e8f79aea55481d56e7dac16"],["/archives/2018/07/index.html","7b7516a4501f3dab1521733d9568e96f"],["/archives/2018/08/index.html","54c6ea6db121cbd4f9849088e51f1b15"],["/archives/2018/09/index.html","d4e5d0c8abfc255d2a68b857d4d7d6d1"],["/archives/2018/10/index.html","68e5986213f6ad9f6c1381389d668499"],["/archives/2018/11/index.html","b55fb20fc7c146ef7234da77939fc5e5"],["/archives/2018/12/index.html","0db9b1109a36a6c099917a1554ea5d19"],["/archives/2018/index.html","ce25884bd7c2e1f304f5316b9d840d16"],["/archives/2018/page/2/index.html","3a06fda14dd57296d5abc12c20efdbb4"],["/archives/2018/page/3/index.html","cdfe9f3c95113403403335c03a8e9bef"],["/archives/2019/03/index.html","a119d6e0c3b86c7b312bcea01bca7f91"],["/archives/2019/04/index.html","6fc99a5b423795ba1f75a574c6725d93"],["/archives/2019/05/index.html","7ed61da3b3b29cfe9bdeeffcf5cdf0fb"],["/archives/2019/index.html","4f03bc3f60654c30ed88696dfd1fadaa"],["/archives/2020/02/index.html","261c2d0f2e77992e19a0be4505ec21ff"],["/archives/2020/index.html","be326bc5dc3f83d43761853e65beae09"],["/archives/index.html","65b9133d6a735ad61cfcc0812be1201e"],["/archives/page/2/index.html","50b066111b3091f9aa282c0b28030629"],["/archives/page/3/index.html","70f3217fce1a7464900f81eccdb01b6b"],["/archives/page/4/index.html","8e796ec3c0032bffbd37c7327a5c078f"],["/archives/page/5/index.html","a2abe617b1f47a6bb1536ec3a3477411"],["/archives/page/6/index.html","c380f58a3db4e5280df04fcb62baf4c0"],["/archives/page/7/index.html","d2708d87bfd8981221435b8527f49c41"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","f9b518d347b8babd8869c6a222ec75f2"],["/bao-guan-qin-zhan/index.html","880ed4343ed27c4ca3b4cc41f81ac9e1"],["/bao-li-yu-qu-cai-qiang-jie/index.html","086d33a1a6e2d4874ef2f8c0d3dd0ee3"],["/bei-dai-li-ren-sang/index.html","1864a7868991fb53fce791d5be4755da"],["/books/index.html","390dee85d329b54d2d2ca972c83288f6"],["/categories/Blog/index.html","31abe6fdd6eccbae4f0b97ea55a68ceb"],["/categories/Blog/page/2/index.html","f3a3dcc2683a46006d2ac7cc030361bf"],["/categories/Blog/page/3/index.html","f0af1526705f8901fa58b015509a26b7"],["/categories/Blog/page/4/index.html","2de5322e1a2d7bc48506dec4a3735a68"],["/categories/index.html","b4f6ca694691bcf31db293b12c397cfd"],["/categories/法学/index.html","45e617c80bd0dbc6eba74c9bef575d82"],["/categories/法学/page/2/index.html","dc6128f4bee9f7a24a475d178bb9b73e"],["/categories/法学/page/3/index.html","ef58589645365313c199c048aeb0dc5f"],["/categories/精彩分享/index.html","f0f9ceda644faffb335fc1437aecd43b"],["/cclisence/index.html","14f7a65b5279dbc714832dd92dc38c07"],["/cetrain-issues-iv-for-company-law/index.html","4177de29bb0e02cd14f2989f4f0dd6f6"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","8dc563213833feea24f81bad11f3b74b"],["/cs-hubei-2017/index.html","4745df7498c8ffd5f0ee35f7af62b8a9"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","d3154afed90b8eabfbdf1b382ef57027"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","e186aae978e61bcfe7c647d23b9a0dfb"],["/due-pin-workflow/index.html","258b74b637fb0477e4d3b9d0c50aba5a"],["/duo-ci-zha-pian-shu-e/index.html","72ccf9de171ffd2920acf0e61eedeb74"],["/expert/index.html","2628f412d96d2dd587172886afd6030b"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","bd10cb218f148efbf364f3a7a33220c4"],["/google3756ddc34336b7b9.html","5290997c0e6f9db4c0d72e07a0f32b52"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","ddf23a12a58f448d47e5229e00e81a70"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","b2c290147c54ec0b3d0df15fdba18434"],["/hustlaw13/index.html","fc44855613f0e33c81a2b48075a55f8e"],["/hustlaw14/index.html","40a1598f606c53f7dd7029de26e5da79"],["/hustlaw15/index.html","782347aefef71303f68e2858a7c2ccc8"],["/hustlaw16/index.html","dd0b11d889f64e0309a3c04387504acd"],["/icloud-terms/index.html","2b1172c60e3bae33ed826ba4533afaf9"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","63512ca53d8d95f2114e7e55792b4757"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","e44d30ec1070937e71bda6b4e6964d01"],["/jdsnk/index.html","7682dd79550875559f86e34f69851104"],["/jian-qiao-fen-xi/index.html","ffad95279b1486e6f3cf87c6c76d8f60"],["/jianguoyun-keepass/index.html","4a2f53eb406bfd0d9e3787a6429d3db4"],["/jin-qian-bu-neng-mai-shi-me/index.html","1a648a626f78d129aac9d3ae20214d9e"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","483600e12f5a2df63b3cf5d2926c2f39"],["/latex-times-new-roman/index.html","0fc032143976a5ee7be016f0d30cc923"],["/latex-yu-lun-wen-pai-ban/index.html","9c64032b0c0380f8f88dbdbf7e301acd"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","6a5cdeeb59c578196703bedec4d149b9"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","b5f75d0dde25ad40f9f1c4d54977348a"],["/luan-dan-20181116/index.html","aa0ac0da0a047cb971b12acd3fa5146c"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","fdce818a04f1ad7f91fb2ae1a43d0691"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","275551f6e37409bec80b9b94f6a8a953"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","85389950f964b8ab1f4f6dd12fa01a86"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","d9730b9121aef76446dd5e2c6c9b7263"],["/opoo-zhe-teng/index.html","0b70bdd3a628923f21b8f715a733581e"],["/others-00s/index.html","f63ffd65974275dfe7512b83e316c921"],["/page/2/index.html","95a9eb30b90d8827fd7d402b6ca1da46"],["/page/3/index.html","91ebd940e821ad23cc28a3879b1e9b6f"],["/page/4/index.html","c994f3fd5f53072d0e37bb670ab9e7e4"],["/page/5/index.html","ece8ba3efcb9d38bc1f30c197e2d9327"],["/page/6/index.html","eb81f8f6e19d4bcb459757ba62ba08e0"],["/pan-gu-zhi-bai/index.html","911ea30b6279b2a0e326748b8efb4f15"],["/posner-homosexual/index.html","572d5c317fd4c3f951ae3adc63ca2741"],["/qxpj/index.html","08e27255c5a16bda6abc5ddef79136ca"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","a989159299a706f552875bba5505af82"],["/shuang-pin-vs-quan-pin/index.html","ea6a415baae9536db65974b1ec2e9639"],["/software-reverse-engineering/index.html","a5926581dfb1a6d13bb0155379ca76e2"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","26c8379384bfd24c77fe5c26734d4c47"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","ed75144210c666794263edf1837a5f7d"],["/sw-register.js","f6f6d417b3077644b3c531c97cb3e3a1"],["/tags/2017/index.html","856a62721dc856f9040d9a8233f5d246"],["/tags/APP/index.html","cc852c20a16ecd53f5a60bf2fcbe781e"],["/tags/Apple/index.html","08aed0f611f2d6d89d5e1f4408647195"],["/tags/AppleScript/index.html","b03b16a531bc83cf4218f7a3f8c0c65e"],["/tags/Due/index.html","9a8b6c4d3d1015af5885b0f76761f89d"],["/tags/HUST/index.html","d652375c17c1a8d8dc0e701c1c9c4a99"],["/tags/Homebrew/index.html","d2ed24669d072637711310ef87747d53"],["/tags/KeePass/index.html","deb454828e70b8d6b1703b95a7cc64f9"],["/tags/LaTeX/index.html","1368b10e2fd9a18af73b3f2c71b5996a"],["/tags/Namesilo/index.html","915bec8a780cb95ebb72300c02e2940b"],["/tags/OpooPress/index.html","1f2c996e13dccac32f20d32e9debddd6"],["/tags/PDF/index.html","dd3acc0df5f4e7cb3505e8eadf6d9ab9"],["/tags/Posner/index.html","f3d501e63cd3aa77a893764bb6521ab4"],["/tags/Python/index.html","34685eed08610289f4dc5fdf4b0ff606"],["/tags/Rime/index.html","deb6a459229a858ab32426a7fec2090c"],["/tags/Typecho/index.html","3db54ebcecc5367493783d266ca5b351"],["/tags/Workflow/index.html","541f740f56b4e191173353802d7965b9"],["/tags/cc协议/index.html","bd466e80f9e9ba058a4f63ccb268775a"],["/tags/iCloud/index.html","deaaf25717679f12d906a90ac9bbd028"],["/tags/iOS/index.html","ae0ab1abba9c2db0777e4e40b5116d62"],["/tags/index-1.html","15f0acb726e8abe23bed9cdfd120821a"],["/tags/index.html","15f0acb726e8abe23bed9cdfd120821a"],["/tags/logo/index.html","fee9ddef06482aaaa7dd6f4580f6403d"],["/tags/macOS/index.html","8a7f89e91a970eb7a5462cb47e54133b"],["/tags/vpsmate/index.html","84694647d018220ef7d06cd9b27845b3"],["/tags/乱弹/index.html","085eacb037febde58561ed8eedde47f6"],["/tags/二倍工资/index.html","106ec65c1e644f43362abcf468f74ce8"],["/tags/二维码/index.html","dcd26389178010454b8d87026162b221"],["/tags/云盘/index.html","7d26ad8cd7c19ed868b38a263f08c42c"],["/tags/交通事故/index.html","17860ec6add3f70c8e3e83d99d886001"],["/tags/产假/index.html","87137e61ef5fd613dbfb87d6b7ae770d"],["/tags/人身损害赔偿/index.html","173ed4020367400b3a34a3bfaaf4a454"],["/tags/代理权/index.html","797a129d04304283e52cca634f8a07a4"],["/tags/优先受偿权/index.html","397e39a69260001e6bf2cc48ed333bb5"],["/tags/作品/index.html","26573ff13cb4b8142e0352b3a8e42c3d"],["/tags/侵占罪/index.html","f4a1b319764347be0b57d3f515748074"],["/tags/儿童权利/index.html","e81f20ca1c24e71c93d2ce68b5a772e4"],["/tags/公司法/index.html","e30cc5532c64d3222d6556e29ba87981"],["/tags/共同财产/index.html","8b76437bc2fc7767b37e5e971b9bab4e"],["/tags/刑法/index.html","f6b51dd508f3d3281ed753df64918ad7"],["/tags/劳动关系/index.html","3bc27def22424425c1d5abfc53700089"],["/tags/劳动合同法/index.html","cfd61e3d7010a2130a20091ea0b33858"],["/tags/劳动法/index.html","b653426e6e987214ad150a3496da30c5"],["/tags/华中科技大学/index.html","8d6196eed8faaaafbdf62a8fab70df6a"],["/tags/华中科技大学法学院/index.html","3b01a39461a2aca39c13623565d8d2d9"],["/tags/危险犯/index.html","91bb21b1c5d2f7590f92f7d96a2efec4"],["/tags/反向工程/index.html","c9a70fc49ea947038f78f76cfb535777"],["/tags/发行权/index.html","0002420b08cdadc7d00eb0fac61bb72e"],["/tags/司法解释/index.html","aefc26bd8a3fdef28cab827891ec3d13"],["/tags/司法鉴定/index.html","317cc094dd177a84fdcf14cee51ff269"],["/tags/合同主要义务/index.html","a701bd7e1f812b7f1475cf083a2e6113"],["/tags/合同法/index.html","27ddc64a9973103aae5786ceb83d9593"],["/tags/合同附随义务/index.html","3e77ce29815048dc321badaa82069702"],["/tags/合理使用/index.html","6a7e4e2816c118cbff46ff2d0acd6539"],["/tags/坚果云/index.html","24f8b166714fe835990d5c2845f90165"],["/tags/域名/index.html","cecd8697c72239fbf98db5e206f3f744"],["/tags/字体/index.html","530cd74e34d5e3778523eb5f2ef1d9c6"],["/tags/实害犯/index.html","76bceb174ed10e6a9b1bc32566126b90"],["/tags/密码管理/index.html","f77443d3685541de58c0f0f1b593858d"],["/tags/工资/index.html","1335cf23ea5ec540a17f40a23dc92962"],["/tags/待履行合同解除权/index.html","7338f98caa3e89c2fed291bc087e8102"],["/tags/律师收费/index.html","d43cab56c89a8a1a2fd62879bf73acf7"],["/tags/思想表达二分法/index.html","36a43e376d5798c7cf8f327b47659ee2"],["/tags/思维导图/index.html","111532731fb82e577566f6f2b832171a"],["/tags/成本收益/index.html","c3b22079a0eb5c7ed9b7c79c584354b8"],["/tags/成长/index.html","a3b9b08fe9b7d1bfb0af27326c99fa08"],["/tags/技术措施/index.html","ba353ce3139816deef356e65263dcd6f"],["/tags/抢劫罪/index.html","d578daf88f7f4c654e4c16faca89a44f"],["/tags/抵销权/index.html","55dbcd88e82bf9317bd926c22ed0eb62"],["/tags/排版/index.html","8c376081efef1db110e01f142f59a968"],["/tags/插件/index.html","93372611077ef4decc97cd16691fc7b5"],["/tags/搬瓦工/index.html","ab5b90765019f37af79a96d56c0ff028"],["/tags/故意伤害罪/index.html","53cbb940a1f70ce2fe11d2b71845c8d2"],["/tags/效率工具/index.html","c5fe3afb13f78f47f553c974d699543d"],["/tags/教育/index.html","ca7d7bc531aca791cc18f7ed11fb1dd7"],["/tags/无固定期限劳动合同/index.html","6e1b9ff942cd57d82f025afd66a74584"],["/tags/最低工资/index.html","c12d4725203190da35a38052b9b7888c"],["/tags/最高院/index.html","c8e07b353b2314e27bccd14b9663450e"],["/tags/武汉市/index.html","4c3c666f7007e0cc7165bd4c5561758c"],["/tags/民事行为能力/index.html","ea8d791df83c32b01d45ae97cf8ec9cf"],["/tags/民法/index.html","da9b02cb1f0b7af4dc4409777d4aad6e"],["/tags/汉字/index.html","92eedd2d3d2818ff08ad032097700c92"],["/tags/法学/index.html","ec50655373b10015ff08105e1bed9577"],["/tags/法定许可/index.html","16f4d559c28ba0d7cc74af8bdbb5ebde"],["/tags/法律/index.html","cded19eaa2e1b811db63e68bb90eba74"],["/tags/法律援助/index.html","4f0b3ef35af6ba53a3c23a31bd2e9b9b"],["/tags/法律经济学/index.html","7abc0c5185322808a71d1053ddccd256"],["/tags/消费者/index.html","21cb72ab742974e0d27bff6391a9bd97"],["/tags/湖北省/index.html","dce3364aef90dd448186a9c4bb95ce49"],["/tags/熟人社会/index.html","32d8b709b148f550dd59bc77971b89ae"],["/tags/物权法/index.html","bfd413c710be19f3fa66ea8bb4f3ce7e"],["/tags/用工之日/index.html","43b16415a72984008eeca28b9d505b11"],["/tags/电影/index.html","5a5b85c95d6730de5b69fbaa907741dd"],["/tags/男女平等/index.html","58dc78cd07b6396d62d3b0bc0181c31f"],["/tags/知乎/index.html","35d94db426bb2f6a8944acbf39fdb395"],["/tags/知识产权/index.html","4e89014f8fca00c76e5195d8f402c70d"],["/tags/知识产权法/index.html","47596b571bf720a1fbc103f1258dd9d5"],["/tags/破产法/index.html","0142eb9bb66e6c3aa444999ecb625791"],["/tags/破产管理人/index.html","872fb4f6a5bdcdb3355450287d9d8ebe"],["/tags/社会责任/index.html","d8c0c26981072f9e0a479c939ddb22e0"],["/tags/社会问题/index.html","d7a6e59363982624c84923701c705a81"],["/tags/经济学/index.html","8b6d09c7b8e0513280a7c500bd752ca6"],["/tags/结果犯/index.html","34123f0dea0b4137203f766bf5fa1afe"],["/tags/缺席判决/index.html","45350da9629afbe00964d0bacddc5068"],["/tags/考研真题/index.html","3a52ced7cea446c615be2561cdeff835"],["/tags/著作权/index.html","d07605f160905301808cc39c650b00b7"],["/tags/著作权法/index.html","f6505a55772e45283292f82e9a3e412a"],["/tags/行为犯/index.html","c3de9032ec83fe17b6e3f72a4b561f62"],["/tags/行政不作为/index.html","5423537a7a69a3981428916407f8ccd2"],["/tags/行政救济/index.html","5672d7c6a28a5d7dbc27a20de566dd4c"],["/tags/行政法/index.html","5f9308f3afb3da58b60d11108c3ee081"],["/tags/装饰装修补偿/index.html","e8b0d581f00fa903752ed5f8a31c3cbf"],["/tags/观后感/index.html","15f697f3661cff5ad42ee23e331b1a9c"],["/tags/观念交付/index.html","fa1e7502a7338da1c5c9f25db35ee86d"],["/tags/计算机软件/index.html","2ec4e641a99292f500cca9ad008e4463"],["/tags/认知科学/index.html","cf0173770ba53ac134a3d3acc97e985f"],["/tags/论文/index.html","020feaec9df72fe44790c0b2e759c778"],["/tags/诈骗罪/index.html","8e71b5dffeef8624e42603c70fd57f17"],["/tags/读书笔记/index.html","54e75c4c7dbf68c6cd42f25dddf18a5e"],["/tags/赔偿标准/index.html","1aaeaa42b9286328ddd328944cb8c518"],["/tags/输入法/index.html","1ca6bde53ee4e247a7c16fa1931f5e7b"],["/tags/违约责任/index.html","2e6e37cc57bbc47701bfc8cf3bb00724"],["/tags/违约金/index.html","7b51b964060378d2c17e9dfb57e47094"],["/tags/释明权/index.html","3da73ead8a62cb77283a6e5f1c3014c2"],["/tags/隐私/index.html","dfcdaea9cd0ba9356b6a18407017a0a7"],["/tai-er-gu-shang/index.html","4a7c1fe39705d4f1735ab9b51087c91a"],["/timeline/index.html","8916bccbd57f40a5b059fdf329ce5efd"],["/vcard-yu-er-wei-ma-ming-pian/index.html","622d9fa068aae8b392726ea843b1f5a1"],["/webfont-yu-zhe-zuo-quan/index.html","ec216faf24db32ad7e0761b452522e1a"],["/wei-ji-hou-ban-quan/index.html","8f0bc65905baebc4fa162a2893bbd664"],["/weixianfan/index.html","80c962aef4e9df3bf577903bddd9dcf5"],["/wo-de-macos-he-ios-she-zhi/index.html","c5499d8fb3e67476d623b2ae2839ace0"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","7a7e2070ea22235a25b347446e9b5ac3"],["/work-rules-mindmap/index.html","78d1a3f1a40150fbc57b61c0e1ccb2f5"],["/wu-han-chan-jia-shi-duo-jiu/index.html","34498281658effa29454471060cfee4b"],["/xzlfbzw/index.html","e7a1a0bca68aba3533688e7e8aa26a96"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","b1f53932613d8c622c7c1bc0929a191d"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","471e8e44e5bbd8e0865309091619e5f3"],["/yu-ming-zhuan-yi/index.html","66bc4234d570266b87096cf4deb9f95a"],["/zhetengb/index.html","e7cc139fe85c8d7c94f0cadf48aa412a"],["/zzq/index.html","57f8c55ba1ebbd757a8350c27742a5d4"]];
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
