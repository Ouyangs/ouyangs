/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","7fb6702c36ea13cdcc7adc714adc9b03"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","a7ad9b51993946c1e19d3adbd54b103a"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","5ebe8a89d55bb50be5c391a2bce31e73"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","2ab18aae1e3c95ad4df6bc624cd344b1"],["/PGP/index.html","793634cbd93261c8000da87be6bc263a"],["/about/index.html","32b3c8f11a9800c3027463ba91eb6aa2"],["/applescript-jiao-ben-liang-ge-ban/index.html","27085f1b6294f1c361f8c5616ce991d1"],["/archives/2014/07/index.html","cd58e8c3e46789eb47dc83853eb5ce95"],["/archives/2014/08/index.html","44dbb1884b294d14f35e98bc067fe1d7"],["/archives/2014/09/index.html","fefed0c1fce3cbdd69c63f45b284fe94"],["/archives/2014/10/index.html","95603340edb26f9f33ddeef47ba7bb08"],["/archives/2014/index.html","7883ffdf0c1a321838bedea655c93d32"],["/archives/2014/page/2/index.html","1d806f916d0c3f7376fe340e6e4ca5d4"],["/archives/2015/01/index.html","f63ae54d3022bd4dcbcfc33d125ecfbd"],["/archives/2015/07/index.html","74fad408bd81ef880992c43cf80058cf"],["/archives/2015/10/index.html","1025c131f100763aa9c90bcc358fa0ac"],["/archives/2015/12/index.html","d03acb5bc6590af11774986a71dc4197"],["/archives/2015/index.html","ccd6f1bc6464357750968582c7a45b73"],["/archives/2016/04/index.html","882055d35100f1f537f8c6210e882ce0"],["/archives/2016/05/index.html","26b2b5d2e704133b13b15626210a9013"],["/archives/2016/index.html","2a38bf89c9c00480f25b0ab67368e30e"],["/archives/2017/01/index.html","70619ec2ac3cdab062de11987e68cf9c"],["/archives/2017/02/index.html","aeab8d802484d953765186ce25b85bf4"],["/archives/2017/03/index.html","73fa442f2bcc7ac23446d9573f297c83"],["/archives/2017/05/index.html","f9dcd3d7434818194dbb3364d18f44f3"],["/archives/2017/07/index.html","d739ac98456d9399d5b046c12533ab8c"],["/archives/2017/08/index.html","76f7d3d40ea918b2cd64774a3ce35523"],["/archives/2017/10/index.html","9967ad42c409a5a8c900621d0dc92c5a"],["/archives/2017/index.html","e2225b64a3c341d7b3df65748deaa601"],["/archives/2017/page/2/index.html","cd8e6e27dbf6edeb26696c3588c0b835"],["/archives/2018/01/index.html","32990b9247a1845d6f30e6e2e93cec96"],["/archives/2018/04/index.html","86341e94345d650ac8952434483767d6"],["/archives/2018/05/index.html","9bde4a275255ba3acb3a1243197dc598"],["/archives/2018/06/index.html","cbe64b5930c4f465eb0cb0422edeb7c8"],["/archives/2018/07/index.html","cf2957e056505b55f56b0885ebe9531d"],["/archives/2018/08/index.html","eb0b1e55fe4935aecbb0c204a4eb5a45"],["/archives/2018/09/index.html","74442542eb4b5a3ce1b776acbb938c5f"],["/archives/2018/10/index.html","44e81a065e5acfd4abdc05cbefaa918d"],["/archives/2018/11/index.html","b397805055e50f6ecc8951bd33c097ba"],["/archives/2018/12/index.html","d10f5936eb567d46168e70612a0d8c1d"],["/archives/2018/index.html","64922cab354edc4215473b78440cfad1"],["/archives/2018/page/2/index.html","d5c0f17968c14ef3bebc8eadb00116ad"],["/archives/2018/page/3/index.html","a65641d867cb681e93d592e26c1933aa"],["/archives/2019/03/index.html","601457ff296618a498a62d5d03387b68"],["/archives/2019/04/index.html","c0d8f5409f933cb8c605cde5d46bb44d"],["/archives/2019/05/index.html","d816f8b7b980477f3dd9e6993e6bddf3"],["/archives/2019/index.html","8dd36d0bfa37cfaf1c73eb2689e40422"],["/archives/2020/02/index.html","809151b021b4bb9bf593dc23ed573a6e"],["/archives/2020/03/index.html","afaa248db0ad2914a765440f1af6fecf"],["/archives/2020/05/index.html","030fffca14a8215d38bd5ed55f9aa693"],["/archives/2020/06/index.html","08868832a161b557240b18abd2905c7c"],["/archives/2020/09/index.html","022627f9d1e1c7c22dd37e3c29968ccf"],["/archives/2020/10/index.html","360c08782c9f94a01f46b104e518ed01"],["/archives/2020/index.html","64f78c4bd33c32f798263b6ffcd9590a"],["/archives/2020/page/2/index.html","fcece80a80b2ddbb5a35989c0334b5da"],["/archives/2021/02/index.html","fde33ac6f0a57c3e1c362eb3dafbb244"],["/archives/2021/index.html","3ad53e7d56a30e93ae46802037525d6e"],["/archives/index.html","bcd1b8e2729439c242b613596ce20a66"],["/archives/page/2/index.html","13f856063b878c9f8b26b50d6831250a"],["/archives/page/3/index.html","2c6aeea9f304d2a316dda2b181312c20"],["/archives/page/4/index.html","e0cfc6859b9b72126dcc29869ebfb9b1"],["/archives/page/5/index.html","19f303afdb2af000f53bcad8b66c1568"],["/archives/page/6/index.html","2d04163fbcc2136fdd221fb2b75f91f2"],["/archives/page/7/index.html","c8fcd24b869f90ed429ef25c27842251"],["/archives/page/8/index.html","f059535f102be5c195175a1f19efadc7"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","9f5efb8f45fa5180864912258634d479"],["/bao-guan-qin-zhan/index.html","0e2ba23fe111b0711723b70c8bca5f3b"],["/bao-li-yu-qu-cai-qiang-jie/index.html","37f7f060c6e298dc5de593ea973015df"],["/bei-dai-li-ren-sang/index.html","ab89e1a403cc628a6745e1b7867bc9b7"],["/books/index.html","b3398b5bade1641f747b87844d1e3463"],["/categories/Blog/index.html","15f7b38b81ebb7e3d265dcdbff5ac1d0"],["/categories/Blog/page/2/index.html","819fe413545215704278b0a7dfa56d0c"],["/categories/Blog/page/3/index.html","9422646d02d9d8a7d5b016ce3040a1bb"],["/categories/Blog/page/4/index.html","1dcf1c828814eb73a022a293e4841e48"],["/categories/Blog/page/5/index.html","be3ba61c8dc30e2bdceac56f71951969"],["/categories/index.html","f7310281b1963a0427473252097c7806"],["/categories/法学/index.html","aaa497d6c39fd4a315e28978bee89921"],["/categories/法学/page/2/index.html","42ad42eac1d3ed4b1696f805c715f015"],["/categories/法学/page/3/index.html","b163c8c35167ff8be41e3861f0377e68"],["/categories/精彩分享/index.html","ed7ed3012163ceca62165406e2e6008b"],["/cclisence/index.html","2fa7117413841cb1599d755f8a9e81f3"],["/cetrain-issues-iv-for-company-law/index.html","c7b4e4cdecdc24ae08e7eb9e42ccdd4b"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","a57507d3c1e12fd19f7bd6d3cb00babe"],["/cs-hubei-2017/index.html","1025b3db84f2f1613dfff50b059bb89a"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","f5c181ee9e8664e05576cb9e9c557a44"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","4c067dc7e9baf5378a2cff085122cdeb"],["/due-pin-workflow/index.html","af642129fd8b0c049e5cb8d5e8c3c2ce"],["/duo-ci-zha-pian-shu-e/index.html","f93a82b5bb9f3afa4362e80ab7a02f5d"],["/expert/index.html","d41974f7eb4a306d6940a0103acba439"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","48bb2f1d44873a8f3fc4747c5f4f7788"],["/gang-jing-wu-ge-ban/index.html","53b3753fa1cdead58a625f2008fcf13e"],["/google3756ddc34336b7b9.html","b988e1becda777f9daa17660e62bddb6"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","896d8ebf300effc94e0e7720180ec856"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","c21bcaacf7b0c139f5654480d17e0485"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","c8fde26a7c5e2a8bbdf818f8100bb4af"],["/hustlaw13/index.html","d00f55cc39e8840d2f7fcbcd360800c7"],["/hustlaw14/index.html","ebef935a67be6120134e65b64aeb894f"],["/hustlaw15/index.html","f4764f0bbb3161c19e72896b54983614"],["/hustlaw16/index.html","081e74f514c5da70719d3144f1330e34"],["/icloud-terms/index.html","8de5d827ea436cbff3dd867a284e6c71"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","7087974fa569ae6af5b0e6e8ba432798"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","ef82533712b21f23a65010ea22e28b7b"],["/jdsnk/index.html","22235091bd818c6d0873ce1ca0e6fa55"],["/jian-qiao-fen-xi/index.html","eed192acf0d3ee7c6bf9ff0a0e1e9312"],["/jianguoyun-keepass/index.html","0fb2700fc54d3439eed793d7d410167d"],["/jin-qian-bu-neng-mai-shi-me/index.html","4a9dece3e3e368cf1de4e2f8adcac56b"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","2389fd3a68d78850328e66c4ec34b708"],["/latex-times-new-roman/index.html","21d921b136d06b27078ed29c38302931"],["/latex-yu-lun-wen-pai-ban/index.html","8df6cabbd53f8f2e746e229b941e7016"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","bfa38135e38008c445f2c411a2b9c2e3"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","2595e734526e5425c3fceb4276de67f8"],["/luan-dan-20181116/index.html","561fd18c0587c5a8e3f8ad24cf148a93"],["/luan-dan-20200217/index.html","c24d62eacde678640942fb3e7d489b0b"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","6f423796375f5fed06e0403e41a88abf"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","3da2e6eec8d8dabb80eff9d5f4a00ebf"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","86e9d06609ae6287e382d29192407980"],["/movies/index.html","c688ff15c7859a5f5d28c52467dd2387"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","4b410e3b923d7ea64aa0bec11095c7fe"],["/node14-bao-cuo/index.html","3e6d6f8d713451e92e9f5624b09b3446"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","6f81778d5111bc95fdfe51c12099e08e"],["/opoo-zhe-teng/index.html","4a27bdbb677def5fe24f22291fdfa287"],["/others-00s/index.html","e0b634b23097d2da41d93b852b31d4c3"],["/page/2/index.html","5743a083868da00783c4b737d144c715"],["/page/3/index.html","2fa42f01635cc2d4f7766283a2bfbafb"],["/page/4/index.html","566f238ba7b5d15f44ee94a55cc9a5c7"],["/page/5/index.html","b1fb8d5e983ae79c3d5780afa6bf8e7d"],["/page/6/index.html","bc9e6ceddccdc3b7fd21d9d75eb9c80f"],["/page/7/index.html","47b3014ae89a506056537cfbf9d4384e"],["/pan-gu-zhi-bai/index.html","edca01a725997ccd1325b8cba309ed1f"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","2c2d84749d5c45df8a4ac4f389569395"],["/posner-homosexual/index.html","fc6f92b5d6bb011f006f0124c1df781b"],["/qpdf-shi-yong-bi-ji/index.html","6ac846f02fe908f77fc10f237ca22944"],["/qxpj/index.html","f0e4e4cf88a42351ab307dc9c3b73d55"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","16bfa9af10f9c800d4a0f7b77ec5e0cc"],["/shuang-pin-vs-quan-pin/index.html","065320f2abd2e04b35c9d09d180f9479"],["/shuo-shuo-xiao-fei-quan/index.html","154c08ac0607405331dc8497151e7756"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","859fd9abc86012aaa83c5b08498ec052"],["/software-reverse-engineering/index.html","424d727dc86add81cbae2fa01aae8895"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","c130836d43273cd44d61198fb8fa8dd9"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","30f00958244afe9f08de98f8cd7c8baa"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","ed03d3cd8772d7109dbb8aa64d82d165"],["/sw-register.js","2fa090424cf8b9302234189bad17e7ce"],["/tags/2017/index.html","c9c4d9b0c4b2ef0a11c48ff3cdaff3b1"],["/tags/APP/index.html","fd7fbde9d0f7204658426aa7711f03ed"],["/tags/Apple/index.html","b74a3b59549f01f3d0f6be5e56d8b711"],["/tags/AppleScript/index.html","5346d9b8d4162334c6fcea4384ad961f"],["/tags/Due/index.html","753990a12199ec1eb3dc475f4e613fd6"],["/tags/HTML/index.html","e301dd9245718324ec1b1ee6d390f3e4"],["/tags/HUST/index.html","63a8406e4534a3e51a9777f759f58b0f"],["/tags/Hexo/index.html","d4ef38c599c8d163e27c5f54b0c746fb"],["/tags/Homebrew/index.html","5e5dd9ac90233920fcdd3a47ac08d138"],["/tags/KeePass/index.html","dc107920eb9f364f52e632d30075b822"],["/tags/LaTeX/index.html","fcd138f8dac9407b5110bbaa04f61316"],["/tags/Namesilo/index.html","365406f74e3f512503969030c73f94d3"],["/tags/OpooPress/index.html","9d3c15d6b1f871d6c8fc71851e6fdb75"],["/tags/PDF/index.html","a1a030331af6bd171560a0074c8c7729"],["/tags/Posner/index.html","af27864722e5d0eaf73f4188622aa61c"],["/tags/Python/index.html","a97b973ef3f7354ec7009eaea5a8445e"],["/tags/Rime/index.html","4298514163b0140731a8a71ca7ab18a2"],["/tags/Tampermonkey/index.html","a53ea3cbf1016c5883f9a2be2aac7b38"],["/tags/ToolMan/index.html","b381cc413897e0465b0e5c1c6202eea5"],["/tags/Typecho/index.html","dfc59e5d0bf9a2be63755a9f00af577a"],["/tags/Workflow/index.html","97f11de6a7d3ffecffd3070cc739bef4"],["/tags/cc协议/index.html","7188ee87479a72dee76e5ef834daa70c"],["/tags/iCloud/index.html","fb2a117ce0e3ade3aee6f3f297f5b0cf"],["/tags/iOS/index.html","d83df602e852670fbf1da02a9f0cc5b9"],["/tags/index-1.html","3b127a9d7080369fb618d9147d651cd0"],["/tags/index.html","3b127a9d7080369fb618d9147d651cd0"],["/tags/logo/index.html","a3e93a3035e15c07f340dd1b7999f7fd"],["/tags/macOS/index.html","90f8fdc67aa3822b307ede4fe909564a"],["/tags/vpsmate/index.html","16b315482780e4072174f434157c940e"],["/tags/zsh/index.html","8a9c84e5ca3a2aeaca3d3a29765cf1c7"],["/tags/乱弹/index.html","bc0aef8a9d12f4221318cc34270270c0"],["/tags/二倍工资/index.html","1523758a7701c1a6c588e8ec5fa228ec"],["/tags/二维码/index.html","78e486a8e9339e013bb2976cfecae413"],["/tags/云盘/index.html","c2eca2239394fb902ed46a4b5faf175e"],["/tags/交通事故/index.html","61dd93f38a95166f79f982f8474a82b7"],["/tags/产假/index.html","66aa66acf57e86049bf354c4642240c2"],["/tags/人身损害赔偿/index.html","21a59f9e070d7b47bd00793fadd24d52"],["/tags/代理权/index.html","62a15f204a914a5eb2c4eead31f32f7e"],["/tags/优先受偿权/index.html","5009c42c705233c5ac51a8eb22b9d4ac"],["/tags/作品/index.html","130a6f7423621deb86cedb9df60afb5d"],["/tags/侵占罪/index.html","8d63b0050e8a8f78127054f8eae58bc3"],["/tags/儿童权利/index.html","1af5eb43c1ab43648b6cec6a298a3641"],["/tags/公众号/index.html","08ecfd76d9727839451bb247c235f4e8"],["/tags/公司法/index.html","86b2d90167a5706acbf89d38b233d58a"],["/tags/共同财产/index.html","e0c454608ea56bb2ffc32bf971d83ab1"],["/tags/刑法/index.html","a8eb62061d39e4e1f956d7e22dda4fc4"],["/tags/劳动关系/index.html","501b0ed56d3fd6e71d80824746d534c1"],["/tags/劳动合同法/index.html","3182bae6c99f9f818ffee9563b21a0dc"],["/tags/劳动法/index.html","2ba398d507c3bd0fb274e527115ca3d3"],["/tags/华中科技大学/index.html","03ce86079a0568acf3e3337d36f23a57"],["/tags/华中科技大学法学院/index.html","26e5186f19bb0150805854aaaf062a32"],["/tags/危险犯/index.html","6a143350fb6d72e8917795a98b6f9513"],["/tags/反向工程/index.html","df4ce4b7c36c5cbba93963e5d81c23d6"],["/tags/发行权/index.html","e1f47ee78905ce6861840a29ae63fa83"],["/tags/司法解释/index.html","b787462b03cbb5fdcd719bb610f6e0d6"],["/tags/司法鉴定/index.html","99810bbf1224d6b279023ac9708b9fff"],["/tags/合同主要义务/index.html","09ae383e152d46660531ede6fd8699b3"],["/tags/合同法/index.html","f88f598111a96738281a7a3b97b4d242"],["/tags/合同附随义务/index.html","4645dee3bcd80fcc191f051f50588623"],["/tags/合理使用/index.html","56686bb5b1effc471c046f5de9df677b"],["/tags/坚果云/index.html","543035754f21277bc98b39a6f87e8896"],["/tags/域名/index.html","34f1def64d92938c5844f4cf52df7bbf"],["/tags/字体/index.html","06403cf71e3f992b6d5ad999212cb236"],["/tags/实害犯/index.html","5620873d08fc4ddd33940b35f195976b"],["/tags/密码管理/index.html","3eb0825a230d4189b4c966b868caf43b"],["/tags/工资/index.html","edd15729b6d57827cf488641a9a2668a"],["/tags/待履行合同解除权/index.html","3d6647c3322099314e379095d1723ac8"],["/tags/律师收费/index.html","352badd1704381e78e011f32a8faf4dc"],["/tags/思想表达二分法/index.html","e5ef88e4cf13e0eded7ade89f6462049"],["/tags/思维导图/index.html","0fd62986ce8cf9b26f3ba5d574ef5240"],["/tags/成本收益/index.html","1be532ea611f206265d619ba3b0cc876"],["/tags/成长/index.html","5d1b3c6b973d4ec8d04fdcbbabac8690"],["/tags/技术措施/index.html","b8b55f04cb77cd4f5c20fd347c4336bf"],["/tags/抢劫罪/index.html","073f95da4e50a35fbf559c92e46ac30a"],["/tags/抵销权/index.html","6926f5d63a1e1da45789878c3fd865ce"],["/tags/排版/index.html","115a827959a8e2f3d2f9e1ba171f7c2a"],["/tags/插件/index.html","c7973a3f9b4d06b3a2ca13c60c511a6f"],["/tags/搬瓦工/index.html","403478cf79e1f1ba4bc47615da5c87a4"],["/tags/故意伤害罪/index.html","ffee9d5adbdf9288e5e80fb3103976ac"],["/tags/效率工具/index.html","ca772197cdd20487b56164a55e8807a6"],["/tags/教育/index.html","7764bf080538ba921923343d2d30c91b"],["/tags/断舍离/index.html","679fd0febdd194db5b88fb14100dda7e"],["/tags/无固定期限劳动合同/index.html","a2a1ea66580e9ce2a2d5624345d2b188"],["/tags/最低工资/index.html","aa852e1e19b58385f129211787425881"],["/tags/最高院/index.html","084c42027dfffe82015bb14ecc9dafcd"],["/tags/机械键盘/index.html","0fdcc457ed460a734d22eda45865bc3f"],["/tags/武汉市/index.html","edd91eb6b3f034a1d0158221f7ffbf9e"],["/tags/民事行为能力/index.html","04ca1c26eea216af3f3cc0f03ebaa712"],["/tags/民法/index.html","01e80824132cb581f07f2becb61aaa36"],["/tags/汉字/index.html","080b77869202f351fa874b59eabe1edc"],["/tags/法学/index.html","52f6a36c54099345c1d5d0aa5210d117"],["/tags/法定许可/index.html","fd31260d0864826ecaa9593edcab9d90"],["/tags/法律/index.html","2d5f4cbacc595fe166b2b727d10a7ade"],["/tags/法律援助/index.html","8838dfb7b632b495df8884021f15f81c"],["/tags/法律法规/index.html","45ccc90bb42ca74933b8713696ff685f"],["/tags/法律经济学/index.html","c1f648783fb3bb6761f0e26db2d77c9a"],["/tags/消费者/index.html","a3397baa184a01cb08dc69eb1f08f872"],["/tags/湖北省/index.html","ddbf5866c5ecec4d86f2d6d82b31a5d2"],["/tags/熟人社会/index.html","988972684eeeabc0319018decf49d176"],["/tags/物权法/index.html","6cc385b5c41f569106d0284badb6fca0"],["/tags/用工之日/index.html","fe1a3c1f2e24eb1e27c9611997f7c10d"],["/tags/电影/index.html","2a84219dd3193e532b418d574debd5b6"],["/tags/男女平等/index.html","b36ac43ed07feabda8481f22874ba1a6"],["/tags/知乎/index.html","c9844c791a09ef21c9f02860b7bf42bc"],["/tags/知识产权/index.html","48db7d5dd3ef349cf889c551c21142d9"],["/tags/知识产权法/index.html","7aee0d0cf7a39e9c6b56ea7391766ed0"],["/tags/破产法/index.html","1ab517c117914c512b4c8705112f80ba"],["/tags/破产管理人/index.html","4ff9f205d36ca0138b1d855732b0cc47"],["/tags/碎碎念/index.html","70e0eafc6da97fb1b665564b46500430"],["/tags/社会责任/index.html","83cdb52cccaf4965c8d900acbec69931"],["/tags/社会问题/index.html","5b1e37db39755bf5e32d5e5bbd619d78"],["/tags/神经科学/index.html","676d6419c8654664e9649d171357fca3"],["/tags/经济学/index.html","3d6fc77fdf8dfa54871a8bde86aa74bf"],["/tags/结果犯/index.html","93d158998cdc2ace4d9d8f74c0d48abe"],["/tags/缺席判决/index.html","990586a6614740875b109641c890f766"],["/tags/考研真题/index.html","69285a4c98159adb1b5e8f76ca9a71dc"],["/tags/著作权/index.html","18d39e544dedcb54d8891925fac8aad6"],["/tags/著作权法/index.html","1be2b82d744e78290101656db57a61f6"],["/tags/行为犯/index.html","f46a4d46fe18c782d5bfd9655a2b1440"],["/tags/行政不作为/index.html","fb6147aaf13f2c2401ec69cf648de0fd"],["/tags/行政救济/index.html","d7b8f2e480865dc7ef4cb52fb978622e"],["/tags/行政法/index.html","3e62efea7632a12cf9da110fd328bce7"],["/tags/装饰装修补偿/index.html","e46490404de5e27ec22c61338a78ac24"],["/tags/观后感/index.html","827527fa42e493ff442152cd6d38aefe"],["/tags/观念交付/index.html","01a128efcd4f44738446eb778f207acf"],["/tags/计算机软件/index.html","80d911e14bdde02f37b328429a4a0492"],["/tags/认知科学/index.html","5775f984cc529f658b5ce18abd7d9830"],["/tags/论文/index.html","72f26a44b2ff532162e5e6639be76835"],["/tags/诈骗罪/index.html","ed7c493a598c0e9f14d8d2fbea1d50cf"],["/tags/读书笔记/index.html","17f5da03cc6abbfc17126493f752de40"],["/tags/赔偿标准/index.html","db32670abd4037022645f0ed7926350b"],["/tags/输入法/index.html","d542fc68a07b3861d4ad2800fc903275"],["/tags/违约责任/index.html","273e12d858ae4154a57d9eb19a2fc9fb"],["/tags/违约金/index.html","aaf014b16e8f296c608e388999d4fefe"],["/tags/释明权/index.html","130c739dc0072af1f9a705511290aeb0"],["/tags/隐私/index.html","0565d6799ee928048e8f7329ce757cec"],["/tai-er-gu-shang/index.html","7d3b562d85c7b09d369eaa3242085d0a"],["/timeline/index.html","9690b6bb14ee2d24adba2d672cd1be38"],["/vcard-yu-er-wei-ma-ming-pian/index.html","3247ffe092dd24ff4dd3d198cb4c9555"],["/webfont-yu-zhe-zuo-quan/index.html","25454d5813b84092b2e3d5da10100165"],["/wei-ji-hou-ban-quan/index.html","ba300efb70728b205b92ec9196897e40"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","2d91f0a7f8ab2353a037e56dabf9a61f"],["/wei-shou-xie-html-pai-ban-gong-zhong-hao-wen-zhang-de-ji-dian-bi-ji/index.html","517cdddf59c8b49d430b140c313b79ee"],["/weixianfan/index.html","265e2f551398c3a1588c33ffe862b848"],["/wo-de-macos-he-ios-she-zhi/index.html","dccada15ec942dd5e4237737cd4786bb"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","1b93a6e4c51bf289af9396d726f5a1ae"],["/work-rules-mindmap/index.html","f78201ed369a055a785e22675e72f7a8"],["/wu-han-chan-jia-shi-duo-jiu/index.html","b6ab24dcefb0e074435eaa8f784556cf"],["/xzlfbzw/index.html","80e88b4921cfb3aeeec7a21a7169d0f4"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","6d60acdcb2a5f5f1df8e9c6eac7b4883"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","e13a673f61e5e6121c69fb9bf3848c62"],["/yu-ming-zhuan-yi/index.html","81521d9c01faba583c74b478cf3800d6"],["/zhetengb/index.html","0bed835f7200646a83fa538584b2e9ff"],["/zzq/index.html","cc46f71911b64df5fcfa294d4dc66140"]];
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
