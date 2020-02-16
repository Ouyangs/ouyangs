/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","bf52456ab91985914f8817883c3675bc"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","9afe1faae337260013d8c166e0bf0662"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","5ef3531dcc3eb3a48e4cfba67d7e17e7"],["/PGP/index.html","442d7853b23c7aba2593de89da4dd47f"],["/about/index.html","90f55c22282979bcb4a4cb6a7f7326d2"],["/applescript-jiao-ben-liang-ge-ban/index.html","66316da5ad7696f856223461fad676cb"],["/archives/2014/07/index.html","d2adba65a19f45b5edca49f018187af5"],["/archives/2014/08/index.html","33be481344337df250629acde547af24"],["/archives/2014/09/index.html","0a12030afbed3646acc7010b174e8813"],["/archives/2014/10/index.html","b30be8e6310d11219d884dd4cb1cb7b2"],["/archives/2014/index.html","befae10f336486124f8f43a02d168190"],["/archives/2014/page/2/index.html","2072258c80f2811eeb8b7d2869c6cced"],["/archives/2015/01/index.html","77123feebb58541126c75ce8b2f27e81"],["/archives/2015/07/index.html","a30bba0d9b6def917fb5a221e311d9ec"],["/archives/2015/10/index.html","8910de848fcfaa7e8bf57286f1cd5f02"],["/archives/2015/12/index.html","eed2e326fd73a29e7e6c9cf06ebc5ade"],["/archives/2015/index.html","052baf5b44e86d16582fd220cb262119"],["/archives/2016/04/index.html","9688d1ae73ba13b1d97fcee476df4760"],["/archives/2016/05/index.html","b8fa281c486939849fe2456fd9e3e407"],["/archives/2016/index.html","e815071a223173f71727264c2e368823"],["/archives/2017/01/index.html","ff6108edb15dcece09d9648406da70f6"],["/archives/2017/02/index.html","166606a188e290dd080b7508909e653d"],["/archives/2017/03/index.html","fa0d061bf276e2332d5fabcaa329cb81"],["/archives/2017/05/index.html","e3a6ee195c756a0e0d9b7e49f853dc70"],["/archives/2017/07/index.html","c40eb9724fc8352111ab6dff35e88f49"],["/archives/2017/08/index.html","3116a83dacd55f4e3217f491a105f374"],["/archives/2017/10/index.html","a8135447c5aefaff8c6c35aa7dc6cfcf"],["/archives/2017/index.html","ab074c6fdc319d2eb47652de915c3636"],["/archives/2017/page/2/index.html","9da3dc1156435f25e1ce52cf24e800de"],["/archives/2018/01/index.html","6ccacc1094af8e72b541e9e6ac1f9af8"],["/archives/2018/04/index.html","2cabf42f2350a3622f7c0337842bdbf2"],["/archives/2018/05/index.html","780d33d3bdff719b505ab23f31238635"],["/archives/2018/06/index.html","b55452a8e9c5927709f0acf51cd8affa"],["/archives/2018/07/index.html","8b68aa15df2e3c8c72c2050a5aa44443"],["/archives/2018/08/index.html","cedca651cf759b2d293a995458474535"],["/archives/2018/09/index.html","03e21469021adb4ea568c02bf89a5dee"],["/archives/2018/10/index.html","0c30d63880e03a6d86f5d9713a466396"],["/archives/2018/11/index.html","6222860634bd92c255c6a296964fbea5"],["/archives/2018/12/index.html","51059e88e1b879bf463753b25a277b96"],["/archives/2018/index.html","40c4ad62e1a251e3ae326189a08f0f59"],["/archives/2018/page/2/index.html","78a75f9507e0eff393bc4a2ad401d562"],["/archives/2018/page/3/index.html","be0318fb995239f9cf034e3e992f5cd1"],["/archives/2019/03/index.html","7266e854b81cb92c8510fdeab63428f9"],["/archives/2019/04/index.html","fb30b8ab544885cee927f5d1017dd5b5"],["/archives/2019/05/index.html","eac159c76574ce7705cc196ab424a7d6"],["/archives/2019/index.html","7b926cb36f598ae20ff4666ca240fdba"],["/archives/2020/02/index.html","3e8847f37687cd3ff2de76c8d316dcf3"],["/archives/2020/index.html","d99fabfdc8643e19471acebeeb83ea80"],["/archives/index.html","d77f05ec72b841969d3a9d5b82051bcb"],["/archives/page/2/index.html","05ee4756179ab64844e420e48cae10ae"],["/archives/page/3/index.html","3b8101a814898a8e465a69316b2e36e0"],["/archives/page/4/index.html","25f79191cc33ea73d7c75541af3d4eda"],["/archives/page/5/index.html","1c7e5e8ddd6902313de00759d1feb45f"],["/archives/page/6/index.html","b105c924eeafc74c3d8709e4777bdf39"],["/archives/page/7/index.html","0110bd2b0674e223cb87e99b51c3b40f"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","051effb2555ae09ab3859c02e4d4d7cf"],["/bao-guan-qin-zhan/index.html","97d5ddbf85c6ea4ef278763be0053b46"],["/bao-li-yu-qu-cai-qiang-jie/index.html","7fe5ff89beceddf81afafdd85d54a069"],["/bei-dai-li-ren-sang/index.html","1f704dfeafee11e0062e4e8a1b71e331"],["/books/index.html","44fe00f653f01acfb97055c23363e989"],["/categories/Blog/index.html","fdd95ed18a24d53e05d051f724ce5247"],["/categories/Blog/page/2/index.html","c0370813f6a3ea5ecd5d969dbd6e5188"],["/categories/Blog/page/3/index.html","6d7b8b8360869df067320c1c9c493321"],["/categories/Blog/page/4/index.html","6569e77e823219ae139b2cdfc33fec47"],["/categories/index.html","989cf053f6a0cbeeba3df9c0e15bfae5"],["/categories/法学/index.html","4152c79600c29ed3700ba6c5f4823291"],["/categories/法学/page/2/index.html","7e74a633f89cd18ea45d8ef10d016af5"],["/categories/法学/page/3/index.html","eb97c69bdfb5526a85fd4c1583f727ed"],["/categories/精彩分享/index.html","be40c091a670800aca7703d88a357cdc"],["/cclisence/index.html","2d05fba9a2ea530f826a9c67d996c7ee"],["/cetrain-issues-iv-for-company-law/index.html","ceee66a2166f9b7d1c3037dcba0bf968"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","843ff20ed9791678b57737ba98b99d5c"],["/cs-hubei-2017/index.html","cd25e21a235ac601038863f68bfa11d1"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","33baefa11eb1e567644774bb2c6cd089"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","7503a7b2077dac4798d49c7055ce088c"],["/due-pin-workflow/index.html","47b2aad4af65c8b6bd73c7f1b473e698"],["/duo-ci-zha-pian-shu-e/index.html","0c5cad961f119d390e2d9d0b659c2ccf"],["/expert/index.html","242abf0843b4e343a89c1b7e519d3e1d"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","aa3f7ca26d66afeb4ee66cba8d74fe7d"],["/google3756ddc34336b7b9.html","d6c6c1989d5fb8888ede63b5a7a57215"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","24c23867dde1c0e8f7fc21110a7c748e"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","af1c86ebb3332befc8be36aa16c313eb"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","99eb38a928b50bc6aa864858f7528543"],["/hustlaw13/index.html","1fbd2f9e3aa99017f7dba8f7c72c9551"],["/hustlaw14/index.html","cc6f8f70a4f96a95f5b8b5003b2e678f"],["/hustlaw15/index.html","91d44bd4efd17c3d2c2eaee6b44a1c0e"],["/hustlaw16/index.html","f7d0f6c650e5d7ae3a4f4620edb50059"],["/icloud-terms/index.html","7ea416d421d7e762becbd561896ce638"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","d9a2ec2bb183c53b14b942bf85476011"],["/index.html","58b464436c4c34711cf31f8e1fb99514"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","731248a56dac71a3f8d6c6eb80b17464"],["/jdsnk/index.html","0c271ba567b5a2a8358a056ddbb42e3f"],["/jian-qiao-fen-xi/index.html","b754ad25c5500c704486f731f2046e3d"],["/jianguoyun-keepass/index.html","b3274a450b97e73af920153c03d7cc14"],["/jin-qian-bu-neng-mai-shi-me/index.html","f94705703f14b5fc17d09190a2a05283"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","552693dfb692a47eb6af14cb00445f75"],["/latex-times-new-roman/index.html","dd4e1a15b383902ec8f072f6f2be2e47"],["/latex-yu-lun-wen-pai-ban/index.html","4ce65c6f555f7bc2083b63b8f276ba5a"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","eba54188f69807867affa0e82f941cb1"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","dae10cbb0bcca45969db6fb149146bf2"],["/luan-dan-20181116/index.html","bec434390ada9fb461665da3cc8d4166"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","657adc504eb62d7c5c1eacca87885f07"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","1394f38c7bef41a0a53e33abc7f12267"],["/medias/avatar.png","02ba2f45a3cd7124f84d85885c387c9b"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/movies/index.html","c8569e4c5abc3a731764690726bf21ec"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","331a56889890822066c010614ed6b12d"],["/opoo-zhe-teng/index.html","3ef95f8ff2c07919f91509ec643f3239"],["/others-00s/index.html","e47f5a2518d4cfd4c23378b077786d3f"],["/page/2/index.html","d39486734b21883ccc9c9d88bf5b55f2"],["/page/3/index.html","f4a9aac30200a3f38e01561439c4c4b5"],["/page/4/index.html","2f54044968c8fc05fd1a261ba3fbfdf5"],["/page/5/index.html","a587c1c7d9c13bd1b051b8038bc573a8"],["/page/6/index.html","8ad8191ea8f45bf57c1dda4b6d59598f"],["/pan-gu-zhi-bai/index.html","af1fa79149e60298650dc1ee39cea0d3"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","1d4857a5b210cd9fbcf7b237a321715b"],["/posner-homosexual/index.html","454e59f7e5b2f91a867c6e0656b81721"],["/qxpj/index.html","533f15dcb7e2c25104715d0cc0b2632c"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","00de458249820e13ccf5774e3c0ca3cd"],["/shuang-pin-vs-quan-pin/index.html","d12b8c050aee1cb2eb3e49906fbacfad"],["/software-reverse-engineering/index.html","fbba56af8ab27b7ee75fab49bf55f597"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","fa12fe301b4b2d651738a8bae46fe96a"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","7ac5cda9cfd5e0a5af6ad2485357a5b2"],["/sw-register.js","714dd28b5c034f122324ef32fda7431f"],["/tags/2017/index.html","16f1d7abee0a141f2b98eaa7d06b4e98"],["/tags/APP/index.html","ba41fe006c43f3d2a1b8c0af743276f6"],["/tags/Apple/index.html","33c48a9d8d3ea17e116c829720f2f7ff"],["/tags/AppleScript/index.html","20bef4999c2ce7f345e29da39d63d2fa"],["/tags/Due/index.html","e30067cce9017cc3070a7a88ffbf81e4"],["/tags/HUST/index.html","55498aad7faad722c22b6d54c3becbf8"],["/tags/Homebrew/index.html","a046f588e1dc080b7cc0b8863b546907"],["/tags/KeePass/index.html","538e099614c776247ba6f2edd94b3622"],["/tags/LaTeX/index.html","1ac1a65a9d4cd18cbb6db1c4aa1b2034"],["/tags/Namesilo/index.html","994dc60394adaf86d5d7a86ee863a2b7"],["/tags/OpooPress/index.html","c5a0e31b09b365f14691e303a165b868"],["/tags/PDF/index.html","3d200308134e78fec0807bd33b5c054f"],["/tags/Posner/index.html","101b196f5cbc2a70c243b1e5f1dc08f9"],["/tags/Python/index.html","b8912c615177a49d9711336a86446325"],["/tags/Rime/index.html","fb3bc0a5b4c86e7f2b496ac64e438683"],["/tags/Tampermonkey/index.html","af1b6a7f5c7b431518927a1fff500ec0"],["/tags/Typecho/index.html","efb5882afa39d7eeb5d9a779fb5c3544"],["/tags/Workflow/index.html","d72a898a26e518b69175d3279ff27ec1"],["/tags/cc协议/index.html","3813aeb234d01601b69c230850273fbe"],["/tags/iCloud/index.html","87cc0f4523d6970f7c78bb92ed4bae07"],["/tags/iOS/index.html","d662db4be2ef90db6823637c07e1961d"],["/tags/index-1.html","b1ff4bb98e142b3a0921227d613decb6"],["/tags/index.html","b1ff4bb98e142b3a0921227d613decb6"],["/tags/logo/index.html","335046befebe0d483aa38c09543e942d"],["/tags/macOS/index.html","34ce5e23e5332a98373431194af0ad56"],["/tags/vpsmate/index.html","143d2556d890501dd60115a4ac4ac697"],["/tags/乱弹/index.html","96c3644681e3692bafb74e9401253129"],["/tags/二倍工资/index.html","1245b758ffb4a1d9d5ade34e55d76488"],["/tags/二维码/index.html","46f910fad70ebba55bd389e6b395db38"],["/tags/云盘/index.html","479b353dfd3025eb3ab32217b749ca35"],["/tags/交通事故/index.html","dc7506b5a58104f440164d3d6c3695ff"],["/tags/产假/index.html","5b742431f25dbb854cd16520c01312dc"],["/tags/人身损害赔偿/index.html","6cabf6c5b5ca845bb5b7b9ec8094e1f5"],["/tags/代理权/index.html","afcfdf7a1a391c6934b77758ec3dd877"],["/tags/优先受偿权/index.html","e41f207cbd86fa7483553c483e2555f3"],["/tags/作品/index.html","2dde3a64b6269d26f35ac444826f763b"],["/tags/侵占罪/index.html","d5285e6c46cf070105d0e3e0f549a2a3"],["/tags/儿童权利/index.html","ea1597fe0af565d72ba156dd60d86f5d"],["/tags/公司法/index.html","4d6948fb8afe408a46833ff06aa36821"],["/tags/共同财产/index.html","a63db5008f2cc7b6045e697d6b795c51"],["/tags/刑法/index.html","de1e47e312a417ef70e613ab299cd522"],["/tags/劳动关系/index.html","4a30be9c1dbdb4eec73647470b032ad7"],["/tags/劳动合同法/index.html","f96b203890e9d5004124228b4002fc11"],["/tags/劳动法/index.html","367a179e5764712df63ad800f6f30caf"],["/tags/华中科技大学/index.html","b5bfdddb036d1c6f29d6b6d50a7c35b8"],["/tags/华中科技大学法学院/index.html","28bea30dc908a92cf12c2529eae67727"],["/tags/危险犯/index.html","e23c79ea0be927091f7f05d2a855172f"],["/tags/反向工程/index.html","425d850137e708eba070ff9fb843eb15"],["/tags/发行权/index.html","a625035e92ae72291d0787a36b984520"],["/tags/司法解释/index.html","e0ca546515bd3d60496f46fef8d4fcff"],["/tags/司法鉴定/index.html","dba342308e4657e5318666d0790dbedd"],["/tags/合同主要义务/index.html","54918271ee0e871421bb936172cd7f9b"],["/tags/合同法/index.html","0cfa948873b24a6d12b8e32dbba5cc57"],["/tags/合同附随义务/index.html","de49613e95ce9248c869508a8f1cf962"],["/tags/合理使用/index.html","47036625fe52906b89172d464849ae90"],["/tags/坚果云/index.html","61dd23b2677c8aa0120cc22b72e1312e"],["/tags/域名/index.html","8b1579246e01faa99f4948dfb76db386"],["/tags/字体/index.html","d93d3d897b831e30080f59d70599ba03"],["/tags/实害犯/index.html","2f682527dc8320673ba101a3e8cbb0f4"],["/tags/密码管理/index.html","56833337cf351e414edd3eb4710209d6"],["/tags/工资/index.html","6b2851960b40d40d438e8ea76f37726b"],["/tags/待履行合同解除权/index.html","b6e1a1c0fe26030e5c127c5c268369dd"],["/tags/律师收费/index.html","90ce0c2ef8fc383a60e0fd0d66532267"],["/tags/思想表达二分法/index.html","e8f40d35cac6f6173304fb837808be73"],["/tags/思维导图/index.html","97bd91177254e548f880e99eafd4026c"],["/tags/成本收益/index.html","7020a9f3c89cbd2e38e98a1f9271cad0"],["/tags/成长/index.html","8d115b8f0447c85ecc311e98b8e4a7ae"],["/tags/技术措施/index.html","4bde6dfe707c37929a1cf66b4fc79a96"],["/tags/抢劫罪/index.html","fc7db521969d25836fff9b27b3be650c"],["/tags/抵销权/index.html","8d616392d4446972efa3a1bc913b6f25"],["/tags/排版/index.html","6441a7fc226e2ae8f44a9dc95e6363bb"],["/tags/插件/index.html","37f022d40ddef6655ce5eb2ba083d853"],["/tags/搬瓦工/index.html","07c2ae65ee5d51e038b9059997623301"],["/tags/故意伤害罪/index.html","2e095f8c4bf2669ca5cd888d7eae5eaa"],["/tags/效率工具/index.html","715253ca3b9f776b8e36f30450391766"],["/tags/教育/index.html","a191caae2f6f0bb4931463a8d517da5a"],["/tags/无固定期限劳动合同/index.html","0003432a1795a430a96213a5a1ac26e0"],["/tags/最低工资/index.html","68264f27c4d53abe79280412b18867bc"],["/tags/最高院/index.html","b45c02cfac871ac44f292c93cfda0b3d"],["/tags/机械键盘/index.html","9f591568b3736b5ca573253e84e699eb"],["/tags/武汉市/index.html","5cdf5ab1f340c87582dc54bbe46b2841"],["/tags/民事行为能力/index.html","c83266696d960156d62412d8417d4070"],["/tags/民法/index.html","e3b850a104af46dcefb58e900cbcca3d"],["/tags/汉字/index.html","c9e557ddebd9353a66a2b97c34c20969"],["/tags/法学/index.html","9dc56d45bca86e611e98cda33af0c9f6"],["/tags/法定许可/index.html","594308e129e17f378778195ac0391d3a"],["/tags/法律/index.html","4c07731f0b204df610d6493d687fbc4b"],["/tags/法律援助/index.html","f91b12b94b1df9c4e8c4bf581f2685a6"],["/tags/法律法规/index.html","96c2b0e33b45ade331d4a43d22375413"],["/tags/法律经济学/index.html","261028fa8e6113a60e05a9d30472456d"],["/tags/消费者/index.html","08e7c8eadb3b1e8030747e50de4c5c32"],["/tags/湖北省/index.html","597aba82030ae0885ab1fadd27cd6e13"],["/tags/熟人社会/index.html","26d94b53d2bd4d84b36b035a1b214cc2"],["/tags/物权法/index.html","d4a1683ded64efacbfe9e5ff76c7fd8c"],["/tags/用工之日/index.html","d50ca8593af254564dc438620cf75575"],["/tags/电影/index.html","e547fcbcda133db2c3329b966129d3d4"],["/tags/男女平等/index.html","c250b8be2f9cd85c5e99206c25c01d55"],["/tags/知乎/index.html","da9c25132b06ede568c9636e8926caac"],["/tags/知识产权/index.html","2a95d5943a188a2bcc10c511357376fe"],["/tags/知识产权法/index.html","d0ed019c86ad3f5e298cba8ec78d6b1c"],["/tags/破产法/index.html","5a5f9b555559ceb759d201b08c51b214"],["/tags/破产管理人/index.html","6ddc5a64fb999a71ebd1193a2f1921d2"],["/tags/社会责任/index.html","efe80b22c63891a6178f725e1cf04395"],["/tags/社会问题/index.html","17e6f73e83014d57605d899e2238abe3"],["/tags/经济学/index.html","1acff288ed9280f40285a130bd80d9dd"],["/tags/结果犯/index.html","65e252bdb0655144c066b145a8ac86f6"],["/tags/缺席判决/index.html","e55af0d2e0e1213ccdf99dae8437051d"],["/tags/考研真题/index.html","a05efbccd79f560165207406b49d5fb7"],["/tags/著作权/index.html","e334c445f33ac7e2ca882a1ad35adeb8"],["/tags/著作权法/index.html","625fb9adda6b626d56e9322573d83e8a"],["/tags/行为犯/index.html","7e905a2f5ec6208d84fd63ffe794659c"],["/tags/行政不作为/index.html","a0ff6d4c8b397efedc631c51e2beb2ab"],["/tags/行政救济/index.html","0ce17674c317ff815ec057c496720996"],["/tags/行政法/index.html","5f9ddb29325941a13d9c2caefa71d657"],["/tags/装饰装修补偿/index.html","eeeac5ce825a7d43c6746fc35775523e"],["/tags/观后感/index.html","f5731875c0d8c0fc02dfba351cd44335"],["/tags/观念交付/index.html","affa043956c27064049165363236a46f"],["/tags/计算机软件/index.html","ec205fa8466981174af810c07582dfb9"],["/tags/认知科学/index.html","4a47add5b039d0266001a55f3a0d282e"],["/tags/论文/index.html","dde66ff2bbc1d04ce127e7e34213b224"],["/tags/诈骗罪/index.html","06bfec5dba36f330df2fd1d01d6976ff"],["/tags/读书笔记/index.html","e306f812fcc79da6613858ea93f8938d"],["/tags/赔偿标准/index.html","fb57a6e72e333ca68a37c27cedb4fb5c"],["/tags/输入法/index.html","e2f83a6a2230dc42bab4d8adbf47e1d2"],["/tags/违约责任/index.html","fac2bcf3db5ea4dcb73f6a35f047c0d8"],["/tags/违约金/index.html","f9cf39a81b582fc56d7ad028e0884522"],["/tags/释明权/index.html","00eac32f2b06dc4601aa1e8604cafbb8"],["/tags/隐私/index.html","b2475fce63705e52af2776cebc52f017"],["/tai-er-gu-shang/index.html","5fb6dc8abb51d63489edb93b415e9054"],["/timeline/index.html","47a58890eb27ef21c223f128840063e6"],["/vcard-yu-er-wei-ma-ming-pian/index.html","2b4540802044ad043d645da34042bec6"],["/webfont-yu-zhe-zuo-quan/index.html","07abfd07ff3d16fa3af3e341229f7ae0"],["/wei-ji-hou-ban-quan/index.html","48e4d3e218db048e1bfa4bce1eec0a0d"],["/weixianfan/index.html","ae53a3230103f44aacbc0115bbe447c7"],["/wo-de-macos-he-ios-she-zhi/index.html","9503aa761db50fb92dbfccfb564fd8e2"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","e1766fbcfc3500ddbd29533c2619a783"],["/work-rules-mindmap/index.html","7d19d1b07eae8e72cedd90b11e630923"],["/wu-han-chan-jia-shi-duo-jiu/index.html","672a8758c9b8afea7c9741d2aa85420e"],["/xzlfbzw/index.html","2312b40c7d566a7c6a9ab30425cfee75"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","61ab55699721d652945b1665d6f02e5a"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","c7ea20c6776edd21568eabad9a3b0add"],["/yu-ming-zhuan-yi/index.html","1e05da0c74f48b601432ba49dae9372a"],["/zhetengb/index.html","bde6f99140781fcd6f713c9564ea6500"],["/zzq/index.html","00f1eeeac8fb3e56a902fa611d621f97"]];
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
