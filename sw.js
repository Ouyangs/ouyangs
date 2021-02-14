/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","c995a474facbca189891a3b879868c02"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","e74fcdd909c2ec1467614db69818d688"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","5ec851484317dfbd80dc7e60ac4fe167"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","ebc43fea7a70ffc35a25928910ab9caf"],["/PGP/index.html","712328fcc73c1c6aa4beb4abda3b60cc"],["/about/index.html","2783f12409e8c4c9754a2b88c1038e8c"],["/applescript-jiao-ben-liang-ge-ban/index.html","835640044b00b804e519dbeca7e59215"],["/archives/2014/07/index.html","d10d20d90b53c86e82f8edf186ca05fa"],["/archives/2014/08/index.html","bfcc3981e11a6be05959fcaff0329ac4"],["/archives/2014/09/index.html","3aaab276cd3bdf317498efff41d1675b"],["/archives/2014/10/index.html","7fb10730517a895542a21fd922cd7136"],["/archives/2014/index.html","037224cfe1b2010fe5193ddcb6975293"],["/archives/2014/page/2/index.html","92b39f55a1d811b1f3030f5376b7d60f"],["/archives/2015/01/index.html","5fc819a59dad9bb66de59e3c156b2a74"],["/archives/2015/07/index.html","c34c1494ae2603365a5141e013e9ac8f"],["/archives/2015/10/index.html","b36427bff9980e5a9ff93fa5471f0883"],["/archives/2015/12/index.html","96f14abfbc48af12cbe889c4c5e859d1"],["/archives/2015/index.html","396c924505b779c246de41e338b8d995"],["/archives/2016/04/index.html","144878680a35f7d56641d0f7f07d0180"],["/archives/2016/05/index.html","925adb2af3ab2db101aa3a51d79bc9ab"],["/archives/2016/index.html","1672503bc68402b57d1ebfde584d5872"],["/archives/2017/01/index.html","7d1375c41af2891ea2662e9ebacdc47c"],["/archives/2017/02/index.html","c1cd154e9bc11a277507a8084de22103"],["/archives/2017/03/index.html","347872325042eaabd9fb53626ecbccf9"],["/archives/2017/05/index.html","c202919510a18e990043bdd9ab890e40"],["/archives/2017/07/index.html","f0d187d225536fda0db4b5af5ee67256"],["/archives/2017/08/index.html","dd5733e7135085f48438ef07abd752f9"],["/archives/2017/10/index.html","669b84b2721f0251ca9df2c7b9278f92"],["/archives/2017/index.html","4abe4a70eb0003093573486af8c21be1"],["/archives/2017/page/2/index.html","427165d6a7e72497019d65295f5d0820"],["/archives/2018/01/index.html","8fda25a6011af8c41f8c8227db853277"],["/archives/2018/04/index.html","8f056cdc561bb8507b18d1fb007fc66f"],["/archives/2018/05/index.html","91b13fa96d72c54e0ad2f8c61cae95a3"],["/archives/2018/06/index.html","3b20054f754935089cb6ce7faf7883b9"],["/archives/2018/07/index.html","2f64fdf15fe85625effa8eccf42d3fbf"],["/archives/2018/08/index.html","26810a78ec1cc42ff84eacafcb56ace4"],["/archives/2018/09/index.html","f68a5a2a55af01e020c1212ed9e615e4"],["/archives/2018/10/index.html","decff6b2213355d54f751d8d72d2e9fc"],["/archives/2018/11/index.html","72cfb53615fe53962568523d1daeb133"],["/archives/2018/12/index.html","5a2438036823c9f602fcd3a0aeb3b0c2"],["/archives/2018/index.html","da7ead8c290f0bc1579b676fce6203c8"],["/archives/2018/page/2/index.html","d5dff1fa014c4ddd2f904d806e18c636"],["/archives/2018/page/3/index.html","49d7ca563feae5fc6db0e6d4e9308076"],["/archives/2019/03/index.html","9cadcba546d34f2e4e5930d58baa47ab"],["/archives/2019/04/index.html","4daa255f641d565ef6e3969505e433f6"],["/archives/2019/05/index.html","aeb5f7c05ae5b15afa5e8fe64559e17b"],["/archives/2019/index.html","075a2a249204017640d80f7a112f39e2"],["/archives/2020/02/index.html","1175b1955d52fda5babd078638bc49d8"],["/archives/2020/03/index.html","05317e1bee622101dec4404d61cf88bd"],["/archives/2020/05/index.html","e67ee9071c36ead43a81c7fb9e5f0888"],["/archives/2020/06/index.html","9725a9876225e888ce2dc2787006a068"],["/archives/2020/09/index.html","acb7c8c1435e5c897757d1fe32ff9f35"],["/archives/2020/10/index.html","707b423d1e377fa8aab0ec33ceb89b5e"],["/archives/2020/index.html","790e52eeeecf08dbe7c695f23acfccc9"],["/archives/2020/page/2/index.html","d7b699d3eac063d3263fc7196e0d239e"],["/archives/2021/02/index.html","b9ae6d013899ece72c40bb98e6901187"],["/archives/2021/index.html","bba94a776f3852007678a9128ec1c18a"],["/archives/index.html","7f3de6e946a8804847c7e47c8ba00bfd"],["/archives/page/2/index.html","4e7924a35ff943790c6e9fb847bf3745"],["/archives/page/3/index.html","3eac2e1ee98b1171bca622aaae200729"],["/archives/page/4/index.html","403d18afc956724e3dcba2bc263d036e"],["/archives/page/5/index.html","d521e11216be9ec04d93dbc0f35b17f6"],["/archives/page/6/index.html","92587e530d74963c64103e99f79b9546"],["/archives/page/7/index.html","4ce1daaac48f13f2374a0b5af82c7fe1"],["/archives/page/8/index.html","800d6b287fde6ba4172df38d5f72dc92"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","d47d72435296e0f8944208423909d196"],["/bao-guan-qin-zhan/index.html","7f8b3739c870cc5d9bffc9ed04e0c810"],["/bao-li-yu-qu-cai-qiang-jie/index.html","c59b28d2cec7376cd691e39f9fccfbb8"],["/bei-dai-li-ren-sang/index.html","1e70a0df7b6457b7fa5bf617b5b81e11"],["/books/index.html","88a12e0b187fe816d126cca8e5bde469"],["/categories/Blog/index.html","9f25930131d854ea2850829fd861a5a4"],["/categories/Blog/page/2/index.html","ab8c8d706e2d6b5be4a636b0defc4033"],["/categories/Blog/page/3/index.html","d4859db559414da94ded1ecba42ae2cf"],["/categories/Blog/page/4/index.html","0ea29d8ed266421969405b83ebd5742c"],["/categories/Blog/page/5/index.html","bccdd00895589215b5a6cd09321b3af0"],["/categories/index.html","74529e417373c8501eae2a7dc47472b9"],["/categories/法学/index.html","dcfa0749c995314622591ecd82b5d0ce"],["/categories/法学/page/2/index.html","2b7ef47cc8d426ddb71c99a79906a98b"],["/categories/法学/page/3/index.html","ea47d2260a5aa17a1895d5ae6658618a"],["/categories/精彩分享/index.html","b9be302ab5dc51e80293a0c262216be4"],["/cclisence/index.html","c62dff539077d281453aeb969af2fb4f"],["/cetrain-issues-iv-for-company-law/index.html","9ba83f1109620f0208009e49c924cf7e"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","0f14c2b2df276534427fec0b621f8352"],["/cs-hubei-2017/index.html","4160010737ea0b287e3c972bf70e81d1"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","9b61d677ec2e8631b8f1f0ac594ca4de"],["/css/my-gitalk.css","9dcacf40fff747aeb9276efe538c8126"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/prism-tomorrow.css","f46d7519e3b65a6912814727b47a57ff"],["/da-xiong-de-jin-yin-dao/index.html","db19b115aef20f4de0f70194deae69f7"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","c38437ff5119b941dc3fc5435ada0749"],["/due-pin-workflow/index.html","2c53b9093e16eb951ad44ed4bee5a91d"],["/duo-ci-zha-pian-shu-e/index.html","41b48af2f21604f06929f606cdee866a"],["/expert/index.html","3e5e87000d6ed9854652b3548d01e878"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","a258e991700b5f8735fb09d5e337a2aa"],["/gang-jing-wu-ge-ban/index.html","d4990ae54615910d723bdb1a8b2cded6"],["/google3756ddc34336b7b9.html","81eabed85a06ff64375ffb0099e33aee"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","6ee4c2337afdea339c9e6569b10931bd"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","ffdba60601b28b672635ec674a34d1b3"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","4b2f338e2d613b7cda755d6101287969"],["/hustlaw13/index.html","bb02380e85ea254c447ccff546bae524"],["/hustlaw14/index.html","7bfa8fa0c24e737c3a00e1afaaf9c902"],["/hustlaw15/index.html","7903b16c6e1021207e4c0e4fb7729c66"],["/hustlaw16/index.html","5d4b56b04284bd0094dfea5d447ed261"],["/icloud-terms/index.html","baca298b78ee3e6b97fe41cf2c14bd41"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","826cf1a1c63488a4e662c42e8cf38442"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","1caa9223402ab8f573d4699c7b82d3a6"],["/jdsnk/index.html","e6cf0c01381da3a5fa9edd289689e0e6"],["/jian-qiao-fen-xi/index.html","a82b1faa2b528403c0c0fcd8c240273a"],["/jianguoyun-keepass/index.html","3cfc3736d2a4ecc69cd22504a0f12683"],["/jin-qian-bu-neng-mai-shi-me/index.html","04b287e20924d3251c150292b4d04ef4"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","7a2de3d64e60f3cda82ccfef0990e648"],["/latex-times-new-roman/index.html","305e6517322d8c46f67f2a27c3aa663b"],["/latex-yu-lun-wen-pai-ban/index.html","a3a0b56b235a0cf2e45256f26a2ddef3"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","5359b52f73ec9878d9439d6f15ee17fd"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","746fd738f0de06361f18427a90964350"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","e137eda72b02fba8d1663d12e9c6d92b"],["/luan-dan-20181116/index.html","c1397f3553c78429640b7b512de2c245"],["/luan-dan-20200217/index.html","0502412cefd043659295d7713bac0073"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","ed4b8667855672677172a75b5f32b1de"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","ce29fb58b0c61fec623468d6455e0041"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","6c4e6c33dd3e77486fc6f1213b99d147"],["/movies/index.html","e449fcb5fc8b8c663f838bdbc2dc7c0d"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","e1ed5162d5459df04ba3a977e7365c19"],["/node14-bao-cuo/index.html","b4633c27f53668678cd2ba09c06c6222"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","8c56fe1b9037569abab4b37feae358ee"],["/opoo-zhe-teng/index.html","4fd8c08e4512649d259727e63112ebf5"],["/others-00s/index.html","269112f1f8cb168b95bd16a643abe5a2"],["/page/2/index.html","a00e70b0d959bfee97d55d54709b693a"],["/page/3/index.html","b7b413f5685bae41678900408bc3b40c"],["/page/4/index.html","3934edcaad8488336ee668718dbf1414"],["/page/5/index.html","d6648227194a45b590f9c6bc57f3ddb4"],["/page/6/index.html","5bebc4297eb1bd6a2c423ef4cde9f52f"],["/page/7/index.html","1b8a5ac40c4925712e4c67cfc5d96736"],["/pan-gu-zhi-bai/index.html","fb9693ff5115ec0d407e646980c4f309"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","d4edf52f72f2f20959ad13a3463f82dd"],["/posner-homosexual/index.html","ef4ecd067c92fb44450ce2eb4c5cda09"],["/qpdf-shi-yong-bi-ji/index.html","ed6bdc96f8ed6a96a468e9e9fde9e4b3"],["/qxpj/index.html","27e14bbf6e0818daaa93c72b05251d16"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","92a741cea9a65de405ede6cfd53dadd6"],["/shuang-pin-vs-quan-pin/index.html","ba5e9c1b95b9c6d50316f545e02a65d8"],["/shuo-shuo-xiao-fei-quan/index.html","c6765bc91304104923d887831bbe4467"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","f4eba0ccbfdff0d71ae18d35e93ae5f5"],["/software-reverse-engineering/index.html","3bfd5678a787d4c6eb059fddbc9ec6b3"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","948e50a3631774d4b5efc7e5d3333107"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","2469f241d25ca79ab45ef26b8ce3d308"],["/sw-register.js","48031336ca2a56a460118b282cd30cfa"],["/tags/2017/index.html","36d3d23b26e591c92926eddf00b7360f"],["/tags/APP/index.html","67f2a66b197827146040401d22d0ce65"],["/tags/Apple/index.html","f5e39c2aef80f0482a0e8c2107177c42"],["/tags/AppleScript/index.html","655fb10f118d78e1fc9b396eb72807ca"],["/tags/Due/index.html","ea7b219c227d1596b23697a07a473697"],["/tags/HUST/index.html","24972378b25ce41fa6bb674cd5bc9af2"],["/tags/Hexo/index.html","15aa0f197af2f9ffa793d874afbe3826"],["/tags/Homebrew/index.html","d2cf35f1b163846c561ebf491e40dd6e"],["/tags/KeePass/index.html","1bdd7291f0c4abf9b70b27b7df4c7eee"],["/tags/LaTeX/index.html","eab529ac400b126e28585f158751f31e"],["/tags/Namesilo/index.html","40e3c0fd25126c45ff3263719088d254"],["/tags/OpooPress/index.html","0f74dc7c6a1b99c6349771fff276e864"],["/tags/PDF/index.html","dd0030f96c71d594ff29cc47537d92b4"],["/tags/Posner/index.html","c83b838d46fd493af4df0af023454ac4"],["/tags/Python/index.html","8cf3aa5402ee1902ec8f6f62529dcabf"],["/tags/Rime/index.html","dada920d163f3a5c2c33f4724deb861d"],["/tags/Tampermonkey/index.html","6f10f241a3bda3235855e55f9cd5a92d"],["/tags/ToolMan/index.html","d66021df9e752cc3a54cbd8d2baef6b2"],["/tags/Typecho/index.html","85af6f500c1837ab60749b82bde5fe31"],["/tags/Workflow/index.html","0cbecd99b1b580eea99c777e711413be"],["/tags/cc协议/index.html","7046dcd07207c08159c7610aa1b0d22e"],["/tags/iCloud/index.html","c452f329d93ffeaa9b8d40ab382d7dd7"],["/tags/iOS/index.html","6c7e0f4397cb86b870fb3e7eec6962b6"],["/tags/index-1.html","67cb03bf57c1e8db8cf1784328c0d880"],["/tags/index.html","67cb03bf57c1e8db8cf1784328c0d880"],["/tags/logo/index.html","f714371ebcc260805193b365e206785f"],["/tags/macOS/index.html","3ceb4cb02a897584c3437feb0042f060"],["/tags/vpsmate/index.html","7c88a2d30f27b1cbf6939ec784da2b01"],["/tags/zsh/index.html","20123e826d5584462e795e0e6cccde32"],["/tags/乱弹/index.html","f4481541ab92de895e1dacf9db0f30ac"],["/tags/二倍工资/index.html","8afdaf59ae3038b0328087179a2b30e4"],["/tags/二维码/index.html","07ad24ca43525e17bd0e4d1f3d36fc38"],["/tags/云盘/index.html","200e4c40ffabec38eb5edc4d824206cf"],["/tags/交通事故/index.html","6a86491af3df9742570ee947ff138f30"],["/tags/产假/index.html","f2e83143408da66fdbc9b14484db3d09"],["/tags/人身损害赔偿/index.html","da541e468744a34590be0cdfce11db57"],["/tags/代理权/index.html","7084f1dac623fe13a3a1ab5299ee7112"],["/tags/优先受偿权/index.html","71ff7ad64a50c0f8388b694a3f485edf"],["/tags/作品/index.html","a8174cb247905dd8c5cf446b52293736"],["/tags/侵占罪/index.html","b0fe1cb32f2380be1dcb8833016a65b5"],["/tags/儿童权利/index.html","6527a6d94f811c7ba0be3a03fd2c26fa"],["/tags/公司法/index.html","a9e9d5acad0497bb9b475f279c89bd8c"],["/tags/共同财产/index.html","33d393b9bbf1e921e685e92a3e343edc"],["/tags/刑法/index.html","264125b4a8341aab9abcfedc8e5d19d1"],["/tags/劳动关系/index.html","023777fc88e25156c2e7d5921fc26cff"],["/tags/劳动合同法/index.html","00d8c681052a2ea303a74403b25e7a23"],["/tags/劳动法/index.html","494854df521869adfbef5ee72cf27b88"],["/tags/华中科技大学/index.html","2a37eec21c72757f416a256d270d345d"],["/tags/华中科技大学法学院/index.html","ffa131a8a559254aa0680de0eb8e5466"],["/tags/危险犯/index.html","d47e5432f5f0c3902ffe2842daf9e2e2"],["/tags/反向工程/index.html","e8e2eb56c45993274f6df32a776363db"],["/tags/发行权/index.html","c340f3aa5684e717fee6fc8c245640b4"],["/tags/司法解释/index.html","804acfc98468247a5e1b86fbb0a394e7"],["/tags/司法鉴定/index.html","48584dc7cfa96ffede8c3f5d2037354f"],["/tags/合同主要义务/index.html","bdb44cab15061ed435702f43584eb8ca"],["/tags/合同法/index.html","148875f576e135bbbdeddf3bd473bcd2"],["/tags/合同附随义务/index.html","9bb1073e9ec6da66ff07ff270272b1bf"],["/tags/合理使用/index.html","b848bd20f42d4c0ffe233c2f2ca0e736"],["/tags/坚果云/index.html","8bef4e569a3c5094490790cde7e2e8e3"],["/tags/域名/index.html","47086444f58e75272ef09be9c28d5f74"],["/tags/字体/index.html","ceb28c022f377a37ac20914356c6b2ed"],["/tags/实害犯/index.html","633207efc696e2094f220384cf77b7c6"],["/tags/密码管理/index.html","bd8ca5357697c7fe9c64aef1f62e2734"],["/tags/工资/index.html","f014fa219e03cd41a54be606036d9fcc"],["/tags/待履行合同解除权/index.html","40de95d897e1e7b567678e8118f5dc7b"],["/tags/律师收费/index.html","9d9997771d50fe4a46da419471af93ec"],["/tags/思想表达二分法/index.html","1a2226e160f5ff17a352a2a329de4195"],["/tags/思维导图/index.html","24d912277282536444bb7efd778733ec"],["/tags/成本收益/index.html","a72419e90c2574b087163292c98bc75c"],["/tags/成长/index.html","c1e2c0b8187f437c4199b3eab5905c30"],["/tags/技术措施/index.html","ae37a5b22f9824d61977ef031a1191fd"],["/tags/抢劫罪/index.html","8bbebf46d21e183b127992d5c81ab1a4"],["/tags/抵销权/index.html","f3154313483e651e5f28374dbe43cdeb"],["/tags/排版/index.html","51ea511362474b92af0b2a5ae1104127"],["/tags/插件/index.html","fc5662c9ae270f7bb871e8a19c9bb203"],["/tags/搬瓦工/index.html","b36123251e0903ca840744fba7b37193"],["/tags/故意伤害罪/index.html","eb9b797a29af5ba68b4da29c05bf64c8"],["/tags/效率工具/index.html","437baefb41d6f6d83af10cb6136020b2"],["/tags/教育/index.html","4456348624437c362b8ddf8aaaa07d2b"],["/tags/断舍离/index.html","4ae708f017f5e94a400cad314e7d4dab"],["/tags/无固定期限劳动合同/index.html","09a01be0e76b6effbfbef1cf83a3ce0b"],["/tags/最低工资/index.html","8c7b5978b0a4268d43b47bd4dbd26f07"],["/tags/最高院/index.html","ed955c0c87d59d1b12e9e9dccd81f23f"],["/tags/机械键盘/index.html","5c1aca6ce60a2cdda220f7f0dc669956"],["/tags/武汉市/index.html","67b19cbba7d65a86ef4cb7d804f47256"],["/tags/民事行为能力/index.html","d7e59a9ee909d3019ca478264c041586"],["/tags/民法/index.html","bc3705b3992166cbdd4513928bddee2a"],["/tags/汉字/index.html","b2b262024da3a0e038bbbb2454f1688d"],["/tags/法学/index.html","3e4607aaa1f7335689b619c27e3eb642"],["/tags/法定许可/index.html","b78beedea894f9c72ddebe1d8d55ad1c"],["/tags/法律/index.html","d348c465b73ea87102a58bc326c6ca4f"],["/tags/法律援助/index.html","7d5feedd7ccd0fff86006e9eeba3d2f4"],["/tags/法律法规/index.html","a893faa3bd3158cd411f11693b560a55"],["/tags/法律经济学/index.html","f4e0cde8cd236b3b3a7fe88d0da53c33"],["/tags/消费者/index.html","d7f655e2a76d0e7ca1d45e435d10b873"],["/tags/湖北省/index.html","bc82069928e92a009dd41ff2368eebc1"],["/tags/熟人社会/index.html","a54856b9db91ef7ce03d97977d7f726e"],["/tags/物权法/index.html","c64e426ec857b170b338b46910cf5fa4"],["/tags/用工之日/index.html","2a16d257885e66c26fdc1555712c2ea6"],["/tags/电影/index.html","1597cca12f42e5ff035bd02990529234"],["/tags/男女平等/index.html","61e75e1c36aec2521c1a2331ecd86556"],["/tags/知乎/index.html","5c48888bcdc5bd6513984bf031308a23"],["/tags/知识产权/index.html","16a96c99f436145a2d83184b4cd8ac6b"],["/tags/知识产权法/index.html","5eea81742d49450b6136562d3d8e10a7"],["/tags/破产法/index.html","c002b8c4b9098c754ded7be026cf2c9b"],["/tags/破产管理人/index.html","9058c3617265ea9f2bbf0cd21be9024e"],["/tags/社会责任/index.html","04db50ed1b6212471712ba38bda0c14d"],["/tags/社会问题/index.html","92b9a9adb46ccb2d603251197898ad03"],["/tags/神经科学/index.html","cc4e01832773677a1e5d76c12ab22877"],["/tags/经济学/index.html","4f86c2de91a7f334a43fef40c41571ca"],["/tags/结果犯/index.html","7caeab1e06e0672a668da6937fe47d04"],["/tags/缺席判决/index.html","ae57fd59661efe4e1ac1070b9925e760"],["/tags/考研真题/index.html","b7f4503df1b45ccf41fe6a9d5ee6821f"],["/tags/著作权/index.html","a45a3d399c58a85a9c762100a26951b8"],["/tags/著作权法/index.html","0f8a702577de3f4c83c27c5125e8241e"],["/tags/行为犯/index.html","6c331d4ee34fb1b37dea71786c61c767"],["/tags/行政不作为/index.html","b8dfa99a50e2d5e5afadf86804bdf3a7"],["/tags/行政救济/index.html","6606615342a3d06eb4cda57a3a52697c"],["/tags/行政法/index.html","41652a7d97b524f29e515984e2da27bd"],["/tags/装饰装修补偿/index.html","c7fda6be0be3943cddeaf3c02f33923b"],["/tags/观后感/index.html","6aa853acbc9d8ac7f8d3b41f0071dfd1"],["/tags/观念交付/index.html","9aff2d3b5e568a910f22518b8c439c9e"],["/tags/计算机软件/index.html","b41877a5c430cc06cd1b1caf54349d17"],["/tags/认知科学/index.html","1de9f88c2dc8a8f9e365974e6378e051"],["/tags/论文/index.html","25c2b357e92d9e91f0076b00818022aa"],["/tags/诈骗罪/index.html","3c227678c10aaae9b80d2bb2578bce7c"],["/tags/读书笔记/index.html","96c1b6a0dbfcd50f99843c5b2ddfafa4"],["/tags/赔偿标准/index.html","5c45a6d7e956a46de52382bd71357414"],["/tags/输入法/index.html","0519513d643fb0432700f87637faf455"],["/tags/违约责任/index.html","412bc31187852e6c00dbed3e7448b129"],["/tags/违约金/index.html","5a85254c4bd22349b11e79a6ed9db0c7"],["/tags/释明权/index.html","7444ed592ce89f28b5c0d9e705f20222"],["/tags/隐私/index.html","8a8ea5829f9c17bc28c2f77297971b04"],["/tai-er-gu-shang/index.html","276e61fa67c88b9cb436b944d008db18"],["/timeline/index.html","87ae63a1562f5f474082eb102180ba18"],["/vcard-yu-er-wei-ma-ming-pian/index.html","03001913642c364994ff1062e460e01a"],["/webfont-yu-zhe-zuo-quan/index.html","5292f525d3ca5e8823e9110a84a3acd5"],["/wei-ji-hou-ban-quan/index.html","ece0e6d002f3233e549c9fa064799b44"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","e8f4519e331e8aa0a4ea17ce9f10b79a"],["/weixianfan/index.html","2f49722aef1dd028228806ac59e14637"],["/wo-de-macos-he-ios-she-zhi/index.html","00868fe4351f31d0f97be1da37b14e59"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","8ecc010eab719021c5b478313a6ff883"],["/work-rules-mindmap/index.html","857c82338ffe8a2e345ee0adc74d8d60"],["/wu-han-chan-jia-shi-duo-jiu/index.html","6dce184d5db2c57c58498c7f6a6de0c5"],["/xzlfbzw/index.html","f37526bdeeda4d3b06c8c5de0a6dbbf4"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","626e68fbecf4072c34c15e0cf2dabf42"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","20f10708d70784b60154fc5a3993ec0e"],["/yu-ming-zhuan-yi/index.html","7da0086c81e23e997fdae625e5844b9a"],["/zhetengb/index.html","3690b71e97c3c22f9903908c4e364083"],["/zzq/index.html","e93b302c17325bfbf5e442c9cd4d5b3c"]];
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
