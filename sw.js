/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","432e8063be483cb4e4c3d8b8eb37cb6c"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","c79e7c6f58964668142ad1c512f548d2"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","76cabf1f1da5c876a3c7e02152ba88d3"],["/PGP/index.html","3e27853dde4debc24b0fb77b49aebb35"],["/about/index.html","6f9db90930786e6d44228fc4629a24e7"],["/applescript-jiao-ben-liang-ge-ban/index.html","92bda8c3b8918ac5363ee38a62f92d75"],["/archives/2014/07/index.html","db8e040c9b04523fc09e198e75b3cfb8"],["/archives/2014/08/index.html","cd2e35181200bf6e78b24a40405c16cb"],["/archives/2014/09/index.html","69ad81a9d3d2755b45a7ede7ff2737b5"],["/archives/2014/10/index.html","24a7b533192cd589a09ee9d2b0fd5fd8"],["/archives/2014/index.html","a2e906c04ca4e94498382fa370f9f20d"],["/archives/2014/page/2/index.html","cc5a8d8a80230119b435c45c672f768b"],["/archives/2015/01/index.html","2e56a1c2127e6609b3b6f266b8219537"],["/archives/2015/07/index.html","7e5d903603986c9365c7bfda98f5635d"],["/archives/2015/10/index.html","86d6a21bf235237f5d7101bf78b0ca3d"],["/archives/2015/12/index.html","c79d34411452cf6664ae033b9745ad28"],["/archives/2015/index.html","9a73d7f83abbd9c4a042a0a89e6e3384"],["/archives/2016/04/index.html","21825454cc550504295abcdd971a0116"],["/archives/2016/05/index.html","1ddcb5de9ec0be6c1815f77ca49c1738"],["/archives/2016/index.html","6d5a33816e9932b527df03804f389e73"],["/archives/2017/01/index.html","5d3fa9f52ef2d74edc506ea42fafcaa1"],["/archives/2017/02/index.html","664e00a8a396ec585d46d2333c39ce8c"],["/archives/2017/03/index.html","321c157c08bf73dfc9c57931b2a71c25"],["/archives/2017/05/index.html","69e3658e056a08522c710f6a4e312e86"],["/archives/2017/07/index.html","77f01ba9d16bf698ecbf2b14891927e2"],["/archives/2017/08/index.html","e90a0314407990a57b1657deb33be469"],["/archives/2017/10/index.html","09d874fb599d353d08d99e18da348b42"],["/archives/2017/index.html","52ec63cc240e24b36dbd805b05bf49df"],["/archives/2017/page/2/index.html","4845c3d69cae4a858829b6e78d9ad9cf"],["/archives/2018/01/index.html","af821e1580451edfc8e48e9b5199dd5f"],["/archives/2018/04/index.html","6b66c5a881c5f0c8dd63c6cd5afa228f"],["/archives/2018/05/index.html","00ce56a82d12beacb20024cb54ce8aae"],["/archives/2018/06/index.html","78a2fa42e49a82f0f993fdd5e9bc78ad"],["/archives/2018/07/index.html","71b2cd88647fc268488b83e5c301f66d"],["/archives/2018/08/index.html","fe5fb7d54c37a0d82afee3075ca88532"],["/archives/2018/09/index.html","5e8c0354b14d9b2c7ca9675b596d5eeb"],["/archives/2018/10/index.html","8d07f47096baa3449ec2a1efbe77f2e5"],["/archives/2018/11/index.html","21200685ca9093dbcdce58c94ad0a634"],["/archives/2018/12/index.html","8e53cad85dc8190b8b25a1f47c84466f"],["/archives/2018/index.html","e60a2974841ebbef93a26d0721002b03"],["/archives/2018/page/2/index.html","a31148fb15775a4be1a049568f301ac8"],["/archives/2018/page/3/index.html","d28fb0c393da169e69045aca6f25c2e4"],["/archives/2019/03/index.html","ea96543d127782061fadc218a05ed39e"],["/archives/2019/04/index.html","9ab0567ea44eb1ed4e7cd93000caf79d"],["/archives/2019/05/index.html","1f9aba31bbf1928ff353cbc339ffb052"],["/archives/2019/index.html","ea35f85acb01d2d9e664db8a2c949aa4"],["/archives/2020/02/index.html","03225b97554ce4d1899a303542fadee6"],["/archives/2020/03/index.html","553bf72bd98bf88aa785565ee504bf8a"],["/archives/2020/05/index.html","0b128f8f7617644992c0284c83b0c7ec"],["/archives/2020/06/index.html","8edfc71cc5ba779afc914d261ddfbd70"],["/archives/2020/index.html","be90065edf0f630f0cf5527521d35972"],["/archives/index.html","6dd31ae2c7b2b1c682450517ba00dd7b"],["/archives/page/2/index.html","f77ad46bab7fbe58f1526ccf80717cdb"],["/archives/page/3/index.html","bc9d656f7c484f94c31242d66b58e171"],["/archives/page/4/index.html","b83afa09f6448a30b93515ace45abe9a"],["/archives/page/5/index.html","f775a33a27abeee65cecf5ce8d0873ac"],["/archives/page/6/index.html","4b6b95712c92fbbf038e18c6376907ee"],["/archives/page/7/index.html","92b1839f70ca3dfe543418dcce708bef"],["/archives/page/8/index.html","e952361b67ba8de4f3b8c15a637a604c"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","b753572a92af0501cdf3070e7c9b46bb"],["/bao-guan-qin-zhan/index.html","9abbb7d7fc1aed59af282ee58770c6e0"],["/bao-li-yu-qu-cai-qiang-jie/index.html","bbc0a5512f7d5e6cfdd69dc2ff24df2f"],["/bei-dai-li-ren-sang/index.html","4315f6f067f686206908c671bb918a4d"],["/books/index.html","c4e2f81368ee0156044488db470f1a0d"],["/categories/Blog/index.html","58f6f432bfe8b4fbad69ef10ad23d110"],["/categories/Blog/page/2/index.html","5d977fec4cfd2f40aa21bfcb3907a595"],["/categories/Blog/page/3/index.html","a9766b48823e27fa740bba5dd6ed1fb9"],["/categories/Blog/page/4/index.html","0fe3a7a217a7768b8ddef439a45a7405"],["/categories/Blog/page/5/index.html","fa57c80269c2bae8b498fdd00956fed0"],["/categories/index.html","20a73d6bff26e872ce26a98ae09cccbf"],["/categories/法学/index.html","7ea0758078e086786c5fc348d599ffd6"],["/categories/法学/page/2/index.html","e76be3154ea3209aa366340fa83a39b5"],["/categories/法学/page/3/index.html","46ebe81624681204a333a32f4c89c47b"],["/categories/精彩分享/index.html","6167e3802d3d42629f22216fa00f3f5b"],["/cclisence/index.html","77cf3235651d17054da9ba9ce84ab461"],["/cetrain-issues-iv-for-company-law/index.html","8900a13036dc4d4a961faed317a4aa50"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","daeaae9df9c417edb2a27a145ff97f69"],["/cs-hubei-2017/index.html","b6232db62aa2279751114dac1d76cb42"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","7d35f4aad063f25f4e219cffc63ad455"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","10deb206a68847de48ca3e09d04ecc43"],["/due-pin-workflow/index.html","4fef76062c1bbee83c03878f6c35c50c"],["/duo-ci-zha-pian-shu-e/index.html","109d5d419727508e30efc52e4256f9cb"],["/expert/index.html","591e52a18c7b4101bd452232f9ea320d"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/gang-jing-wu-ge-ban/index.html","fa1e9238f2d6fa1346e657498b3d11cb"],["/google3756ddc34336b7b9.html","4382fe6ee507c32f78231fe33637bfa7"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","0e710fb09298e38ef97c5c5450fc40c8"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","2aff551e2312218c998ee9f6bffabb72"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","3739c96a11446d909a7d2fa3d1cce4a7"],["/hustlaw13/index.html","35420f06f00010ddf8b3fc7cbddb0e26"],["/hustlaw14/index.html","09f9386126749689815d96ac340506f0"],["/hustlaw15/index.html","1e8c37d3a75cb02cff3127ecda5c42c8"],["/hustlaw16/index.html","0918a987cfe7cd19d511236d1bd8ac96"],["/icloud-terms/index.html","eb8d740b0b57b3ff2cda274980bd37ba"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","7c06e85b66b0569e3b8b71e72886c5cc"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","1ba67492b49ae962b694b717a5f0e611"],["/jdsnk/index.html","098aa3e80f2b470aa05bc8093ed55017"],["/jian-qiao-fen-xi/index.html","3642e85970b56060e803648eb29653fc"],["/jianguoyun-keepass/index.html","7da42073c8522f3747cc1ccc085e9254"],["/jin-qian-bu-neng-mai-shi-me/index.html","916efe9d5d29df8574ec8e158adc643a"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","9e08ba865090659ad30b4414b4723258"],["/latex-times-new-roman/index.html","cdacfdb0d5f83c5dd68d6290b982df3b"],["/latex-yu-lun-wen-pai-ban/index.html","13d60115e711a9f99832e1e31363e9bd"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","21bdb98745734dcbc5b4f862e99b239a"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","98090b26f92a2929db4ea16bb8b4ae62"],["/luan-dan-20181116/index.html","293eab9ea6ccff459cddbc029b926593"],["/luan-dan-20200217/index.html","048caef2185d73a74720ab8bf23a8336"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","735bc628497ff7976478bfcbc2c08e9f"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","87ff3246e135b864bb26bd650c1f6c54"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","942de1e1da199c75ac2b832ea1fe2640"],["/movies/index.html","c477b36b2fb2e5cbf4e744b86582ebd7"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","7a70ea3c77abc3c4d1ecbaaea7eebd35"],["/node14-bao-cuo/index.html","c7fbd96d927f12539d3bbfe409c901fe"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","23b2af716814ed5e76ea2701adc728ce"],["/opoo-zhe-teng/index.html","8d6e4215fe40bd57bf8dbc1099bf36fd"],["/others-00s/index.html","a466b7afb9051de6c0444beef0fada47"],["/page/2/index.html","0fd22592f09acb18ed6e4c7b292f9883"],["/page/3/index.html","a356448944f943dfadeaf9958e0df347"],["/page/4/index.html","af65aaf194ca48062788b08b527e4ec3"],["/page/5/index.html","f7b6e2fc7dee4e2637515276bbf6fe81"],["/page/6/index.html","85467ed7bbc62578d8d22abf398233b7"],["/page/7/index.html","fde129cddafec962cb7c0a354c1442d7"],["/pan-gu-zhi-bai/index.html","975e002b7931f99d24cc59f4175f8e2f"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","ea8e5b718c44b3a57e8cb4ff328ac942"],["/posner-homosexual/index.html","b6888c25be14fa25bac4757299b1bdb5"],["/qxpj/index.html","12471fe86b756ccfa29f0ab77f9f9b01"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","52b37393cb19e1048e6964122b6faacb"],["/shuang-pin-vs-quan-pin/index.html","54e5b13d1f0cd5bc23ef21d0269a0683"],["/shuo-shuo-xiao-fei-quan/index.html","2163d3bfca86f06fb2423245fbd23670"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","894edc2631a67bac35fc4c9e3f710170"],["/software-reverse-engineering/index.html","f34a0dab4fd66845dd2d7c71e1963e1a"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","6b2a8bd39c4dbeaab7ee028fc053a6c6"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","2b42be528b5f6a5d36414ccc0d892615"],["/sw-register.js","2c1d998cce550e8ded6323e873eda8fe"],["/tags/2017/index.html","a88bcc90b768a389e71631f087138453"],["/tags/APP/index.html","6dbba85ef6358360e583ee152e268c0e"],["/tags/Apple/index.html","174f3612c81a8f09a07b23434c46e18f"],["/tags/AppleScript/index.html","4a676081ac1211e325b20353f2d9f0dc"],["/tags/Due/index.html","3495672b3ef98639417eb742f198274e"],["/tags/HUST/index.html","70c490ffbf4430e6a830e44bfcc8a071"],["/tags/Hexo/index.html","eeba16c7f9888db0bcecd5158c9f5487"],["/tags/Homebrew/index.html","e269ff55bd8748d38bcbd84879c5d755"],["/tags/KeePass/index.html","6bb7bff1d181c5903b9e60432e14e830"],["/tags/LaTeX/index.html","1231623477e90bf1f0c2f3babf5909fc"],["/tags/Namesilo/index.html","fabba28954bfa4fd2ece4020b76520cd"],["/tags/OpooPress/index.html","d95131c40f3a12df0d2ad4c6ec1253c6"],["/tags/PDF/index.html","9fbc98fc73a8e2987661e5b1a1c5b4f1"],["/tags/Posner/index.html","0e02b18524427301f2bcac8767950243"],["/tags/Python/index.html","f2802bd9dcf43d0c61004fcdd9303810"],["/tags/Rime/index.html","bd478be838b281205760872040d3b246"],["/tags/Tampermonkey/index.html","5af20d845bcf9a6af2549389e607e53a"],["/tags/ToolMan/index.html","a29a54c1bce981ab4c1982f2704daeca"],["/tags/Typecho/index.html","4222caf4d942731946bdc4fb9e977c4d"],["/tags/Workflow/index.html","f2ac1672bd004391a4f77f9639001681"],["/tags/cc协议/index.html","a829e5ce9ba263b8eed336820d7a5ddd"],["/tags/iCloud/index.html","834403d3ea35442b8a4919c80221b65f"],["/tags/iOS/index.html","8c505e69413d324ff8aa03fa6477eaee"],["/tags/index-1.html","46e8faf5ec3c1886de9fe9cdd105cc44"],["/tags/index.html","46e8faf5ec3c1886de9fe9cdd105cc44"],["/tags/logo/index.html","63b80ed079c43289d3a0ae1a0da93716"],["/tags/macOS/index.html","95de04d8e5ef13511cc219259c56e1b4"],["/tags/vpsmate/index.html","43d2b1e83964ade4adc893524444ed44"],["/tags/zsh/index.html","bd0d15454425a6307f925730ac89eecd"],["/tags/乱弹/index.html","90ff728bc7be4894b93c69002bf4825c"],["/tags/二倍工资/index.html","fb48868b0fe3e6f83a15403a43ac8d9e"],["/tags/二维码/index.html","761f0454011cddf6df1e8daf06ef9bb9"],["/tags/云盘/index.html","129643fa67ec92011d76b9a707ba864f"],["/tags/交通事故/index.html","f1d7f373dbd42dd1f1bc33ea2f643ebf"],["/tags/产假/index.html","ec74529265d2a68c87ba50a114202064"],["/tags/人身损害赔偿/index.html","7eb0d7b64d0b258661240aa24abe474f"],["/tags/代理权/index.html","2bd6301737917f34cd93e6e852464b82"],["/tags/优先受偿权/index.html","25dd4a7906cb4af0bb1413ac77f4d4f5"],["/tags/作品/index.html","0b05332ded713e7dd19aafe755529001"],["/tags/侵占罪/index.html","5fa51db1c4ed95818259dd3df4b04e09"],["/tags/儿童权利/index.html","3dc445068ce287b614b9bf5954931611"],["/tags/公司法/index.html","803c228d6887836844afdedb14c4c79a"],["/tags/共同财产/index.html","63e2f1eabc1c4c023cee9b6541782ce5"],["/tags/刑法/index.html","238e1e1abd7cacc000619fceff2fb3fb"],["/tags/劳动关系/index.html","10866909304ca0f1861d8a3a7c56da15"],["/tags/劳动合同法/index.html","8ff3c9407bd03425316a23ca5bbfcdfd"],["/tags/劳动法/index.html","f919c8a72519e324c9477e34edcd7eef"],["/tags/华中科技大学/index.html","edb703c24e8e856d0e963eaf7d19ca77"],["/tags/华中科技大学法学院/index.html","52da9b83538a4ee01f2c5b57f9e4a1fc"],["/tags/危险犯/index.html","7f8dbcabc04f35e99bb7497ea4db6ba0"],["/tags/反向工程/index.html","9531ec326098b3d997e2979c914756fc"],["/tags/发行权/index.html","f16d61e95fc58724f245fcb89b510511"],["/tags/司法解释/index.html","0df28e8c0c705746ef4e39691b1ae006"],["/tags/司法鉴定/index.html","fa9543526474215de6bf2aa6e5ee2e0b"],["/tags/合同主要义务/index.html","dfe8487e41555de1872704687f4cb500"],["/tags/合同法/index.html","3b19f00b003a3b0d438b3bc06616222a"],["/tags/合同附随义务/index.html","5bc7687487f73b9c3a387b0559a5ea9d"],["/tags/合理使用/index.html","b2f192da3fe845ee36d7c2ab503af38e"],["/tags/坚果云/index.html","d050267808328a6f8529b941b66328ed"],["/tags/域名/index.html","6f7f4162d7bcaf3d0a9aad8391fd3087"],["/tags/字体/index.html","43c150233e7e0b36ebd26c64e4ed3066"],["/tags/实害犯/index.html","cb9c6f4ec042d72c2a5d6a19adfcb68e"],["/tags/密码管理/index.html","6d70c7f383a9a3f03867df843b818167"],["/tags/工资/index.html","ed9ee2f3683ed9c34b6bdaca2d139043"],["/tags/待履行合同解除权/index.html","9366a1598dea0a51d9d1ac2b8f8eb1fe"],["/tags/律师收费/index.html","e7472e63e93b706878544eae138723bb"],["/tags/思想表达二分法/index.html","cecd5c32db7fef70c9846f2ac344b8ca"],["/tags/思维导图/index.html","b781947f95e4f66653a6138b7beb3c56"],["/tags/成本收益/index.html","db0f2a4f93131133c77fa0809c874b8c"],["/tags/成长/index.html","831a6461570e08ba91a7e9da7e99b65b"],["/tags/技术措施/index.html","0be7181f32fc2fd5e2f0ac745929dae5"],["/tags/抢劫罪/index.html","474f6e48768f4c74254b97f66fadfc8b"],["/tags/抵销权/index.html","d8c486d9d127a00944aac2f9574b9424"],["/tags/排版/index.html","043b57d67d5abf44b74964303dcbd16b"],["/tags/插件/index.html","2375f18f1c557f789ba9b8ed8a8105b5"],["/tags/搬瓦工/index.html","cd5dc5d130a7a6007ca60934ae28b22d"],["/tags/故意伤害罪/index.html","fdbec7b3352ec1b2085a2063b99aa113"],["/tags/效率工具/index.html","b987e03d3c5040d51183a5e1be414f2f"],["/tags/教育/index.html","39cd0a891ea9d336bd536c41561bfc13"],["/tags/断舍离/index.html","e7c1f04559853e29057e9dd29a853e15"],["/tags/无固定期限劳动合同/index.html","f7fc371d8ff1c8489d4d3e35580426d2"],["/tags/最低工资/index.html","8177b4059ef2a2543692f96e92dc112e"],["/tags/最高院/index.html","6c9b31530d9b5bf7eb46288556a24361"],["/tags/机械键盘/index.html","8c6ae6c96c5c53a8f8b5b6b8e8b05417"],["/tags/武汉市/index.html","f34e54f4e2b3ac53a9f772100c1900d8"],["/tags/民事行为能力/index.html","6dd4ddd148f3bf1abeab832f3d9cf8cc"],["/tags/民法/index.html","c0299ef4176bba3376c9ac6ddc678354"],["/tags/汉字/index.html","f3d4bc18433b4f192bb7ae55211d8414"],["/tags/法学/index.html","91482ae1977c382dc66221e9bc1dc008"],["/tags/法定许可/index.html","fa5868349fdfe81c13e6d461dcb8f153"],["/tags/法律/index.html","4a6175dcf4a3a78026cbd2bfbbcacfef"],["/tags/法律援助/index.html","ff12cbe9d16fca89f9816c572b61ec95"],["/tags/法律法规/index.html","4df6512e0b11fd2a939a67fa0a8cccb6"],["/tags/法律经济学/index.html","d231a45beda36509df044add8038c0ba"],["/tags/消费者/index.html","9fc5fd419f8ad9d442337ac1b2e4ff18"],["/tags/湖北省/index.html","a47842fb36e5ef3dff340dd39342c823"],["/tags/熟人社会/index.html","53734310514629d6b3a957afc3fae053"],["/tags/物权法/index.html","8908c0c4de3055872df2929e87769b4d"],["/tags/用工之日/index.html","1ed1229231b4a5f54af3af5ef572a794"],["/tags/电影/index.html","f314b2ec0b217da2ddd3ee7141e722a8"],["/tags/男女平等/index.html","6044c3789b90fd646331c4f43274467c"],["/tags/知乎/index.html","cd78d6cbfaec90f90420f559200d7cc1"],["/tags/知识产权/index.html","8b43ffb4da3761e143d31823e2811dce"],["/tags/知识产权法/index.html","4e0db95a005ee42636b051278afbd067"],["/tags/破产法/index.html","56ef603789b7ef7f27fbfac9f1ed9423"],["/tags/破产管理人/index.html","a7ce59e7a1fa236b4d79e72d813a4997"],["/tags/社会责任/index.html","fe28e2d731096a49059a7ea5a4f7de5c"],["/tags/社会问题/index.html","a2ed8a8d278f74e9095a118b4861cad1"],["/tags/神经科学/index.html","c05681fc04c9351a5cb8b3aeb72978ce"],["/tags/经济学/index.html","1d1c419f17d135e64870613da2c1ae68"],["/tags/结果犯/index.html","4a357bbf1ba7f81234711d3b70eb821f"],["/tags/缺席判决/index.html","7b3ae780cc0bce28fcab282ac535a405"],["/tags/考研真题/index.html","e41fdf81941d21193146662cb07db5b2"],["/tags/著作权/index.html","e9ae60fa24356c599abbb49bd33c3775"],["/tags/著作权法/index.html","5d5fa1ce0232205ce7ff8bcc171a75b9"],["/tags/行为犯/index.html","d5143517c05ab479e3d32c814ba6653a"],["/tags/行政不作为/index.html","43b4563c20f40b35dd375d797301bbac"],["/tags/行政救济/index.html","840a7710ed325ee9c381f433523b7cd2"],["/tags/行政法/index.html","dd9d7348cc9df7bdfad6db6e4b3655b9"],["/tags/装饰装修补偿/index.html","6472d17034f68a7ff1d889a07b6c7526"],["/tags/观后感/index.html","6bf1495b780e0231e9eb3a2fcf43d85b"],["/tags/观念交付/index.html","4cb3f3626f519e2f0537e1dffab6610b"],["/tags/计算机软件/index.html","514dfd797667ef95aac6d8471fa354d7"],["/tags/认知科学/index.html","f0b289dafecc768cf42f28872111ada7"],["/tags/论文/index.html","6d6e08c209753fc820f7b0e4332fb8d0"],["/tags/诈骗罪/index.html","ec8efda4353196367ba72336234a7692"],["/tags/读书笔记/index.html","0e02ab8cf88258effb8ca298d7ea2222"],["/tags/赔偿标准/index.html","da33bba72bbdf5d62e6aed32a58ea498"],["/tags/输入法/index.html","485ed31a9439f8ca3476fa39c20ed4b6"],["/tags/违约责任/index.html","8ca16b5a6c5d487f7558bb4849f8ca5f"],["/tags/违约金/index.html","3a80617d4f4b903d2481b803fbdb811c"],["/tags/释明权/index.html","26aed2a0fe2bc7012ec21135db817c33"],["/tags/隐私/index.html","536f44598571e2779a8980132ee37c1d"],["/tai-er-gu-shang/index.html","0a2b1b814f11c50fab0ed70d5418b003"],["/timeline/index.html","94727a2ab324396b4658dd2bca7b35a6"],["/vcard-yu-er-wei-ma-ming-pian/index.html","62cc2021c61bc0dd8391fbea91219081"],["/webfont-yu-zhe-zuo-quan/index.html","2411d6fb53c51a3a16b957d7f3a04bf6"],["/wei-ji-hou-ban-quan/index.html","75a8b7cd60b4a36b5bce5971d0ad97d1"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","1ae96dfeef809c8ad2b777543f94f206"],["/weixianfan/index.html","b35ad4d7e4d0b3b13b2ce8d6a892c9da"],["/wo-de-macos-he-ios-she-zhi/index.html","0542bcce4f50763daed1cf5186fad196"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","855cace63823076a10c7a22cb6df82ea"],["/work-rules-mindmap/index.html","351e8fc698723d3ca2716e9468e942e3"],["/wu-han-chan-jia-shi-duo-jiu/index.html","44e916d24e48d3a9ef45ac0bbe7129cc"],["/xzlfbzw/index.html","fca97e289d42896d931412c968a11a8b"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","fa0b4b9f5a0cec7375af97b9dffcf3c5"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","e955a3428196b7372aa6a15dae21717e"],["/yu-ming-zhuan-yi/index.html","dfd3d0b834e23792e819b680f4dcda55"],["/zhetengb/index.html","422666563b5395dc37bcc9f03db36831"],["/zzq/index.html","46c1e4d8d3e10c898f949532ff5d4d2e"]];
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
