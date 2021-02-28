/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/021/index.html","f40aac36f9bca7aa58a63e04e8b58d62"],["/2018-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","9d85b74486e6f70b416777e7a882426c"],["/2019-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","fec51c376f4b4c91fb05daa53f7dedd0"],["/2020-nian-du-hu-bei-sheng-dao-lu-jiao-tong-shi-gu-sun-hai-pei-chang-biao-zhun/index.html","b01093dd13b0fbfe7232b8635690b19e"],["/PGP/index.html","0476ba9f052baa62b292b98e8de1236c"],["/about/index.html","d7d4442753a7c57165ea83742ef1d48a"],["/applescript-jiao-ben-liang-ge-ban/index.html","70dda7980345d76b2a2ec0a06f9dbc30"],["/archives/2014/07/index.html","071386e3b21b06174624d44abc487d7b"],["/archives/2014/08/index.html","22140dc85b749b357c238079304c1ef6"],["/archives/2014/09/index.html","37267d519bdbe2ce0f934469f7c186c1"],["/archives/2014/10/index.html","d81657649fc5092439341cc00195f4cf"],["/archives/2014/index.html","b781a3d82207c91bd66eae1421972ecd"],["/archives/2014/page/2/index.html","af2ba5437669cf8d09023c60a5672355"],["/archives/2015/01/index.html","7d7d5899c57ac60ce10a68c4d21480d5"],["/archives/2015/07/index.html","e1c0f0c7232d8ac210475a93e557c0cb"],["/archives/2015/10/index.html","6c84b161b8263a42407b5c89d2b24cab"],["/archives/2015/12/index.html","e65c5e05785cfcae6391cc72cff9e2ab"],["/archives/2015/index.html","c7fcea3474e96d3fb1ee05e43e667d27"],["/archives/2016/04/index.html","16cbe96d0fbbed0fac7538c9f81da1a7"],["/archives/2016/05/index.html","a55f9c9e3a78a38682fc02ad025775fd"],["/archives/2016/index.html","da2a4fdaf63ae32d035ca2327afdf594"],["/archives/2017/01/index.html","449002c6dc45448f7838c323bd268977"],["/archives/2017/02/index.html","f6f5a4c6e43a7f38e9410ffb1644898a"],["/archives/2017/03/index.html","4c09fdf00611783ba3ea3ce1dc297d73"],["/archives/2017/05/index.html","d788eefe9e4ceb91a2ac18c949619c41"],["/archives/2017/07/index.html","05a3bb1891c9657a51c70d0c75fb43d6"],["/archives/2017/08/index.html","9b354852bb8db01a00036f2cb2e455a9"],["/archives/2017/10/index.html","21860cf53e2eaae20f2cb82aa9011459"],["/archives/2017/index.html","351bd917404d2a222e06c8750e786f80"],["/archives/2017/page/2/index.html","ed510265d8ce186ddd59b2e1699ef0ae"],["/archives/2018/01/index.html","c07dc96f7b20f572933327c3d5ac1428"],["/archives/2018/04/index.html","efcfc5780f0989b3e82029b4d55817ef"],["/archives/2018/05/index.html","7370f7015bf8f73731021e1eef55c04e"],["/archives/2018/06/index.html","f2f29d00b969acb10c6c10e10de24b14"],["/archives/2018/07/index.html","caadb40d2ce96577ae7a01b0b934d42a"],["/archives/2018/08/index.html","388cdf27434ab9f15331193099b50435"],["/archives/2018/09/index.html","fccd25bf59c47df94001665a5f59a9f7"],["/archives/2018/10/index.html","715f564efe35343fe5fa080178380903"],["/archives/2018/11/index.html","b8d4ab03d1877a6ddbe1516d96262c0e"],["/archives/2018/12/index.html","ec30a734ce360796bff9cdb843f52768"],["/archives/2018/index.html","df4df9beedc0404d089b3dea16a3edbe"],["/archives/2018/page/2/index.html","14f206ac6127f728bca75c70ecf7febc"],["/archives/2018/page/3/index.html","7e3d9cde60b6600ea0a6144ba27f502a"],["/archives/2019/03/index.html","8e8659446f09483210af171096661aeb"],["/archives/2019/04/index.html","a408a117b209a4c1c6cd57c8348307d1"],["/archives/2019/05/index.html","171d448e5839ed47749051bf56163f3a"],["/archives/2019/index.html","2110f704ac0207cbabcf70661b6be75b"],["/archives/2020/02/index.html","5fd6eef33db24700a89993ac31a7db12"],["/archives/2020/03/index.html","27747b783c2425d255e637d9b167dcc9"],["/archives/2020/05/index.html","621ae1d6bc056b9a2b3945a099c26705"],["/archives/2020/06/index.html","22e5eb88933c982af921c35333510995"],["/archives/2020/09/index.html","bb26f457807817d12bff4c58da3faffb"],["/archives/2020/10/index.html","0ed38b4af6cdbbee9646d52e9c76874b"],["/archives/2020/index.html","bc919dd8a0b3ba6d1d904a9a9677fe02"],["/archives/2020/page/2/index.html","23819fda611858cdc2b7860d2dd7464a"],["/archives/2021/02/index.html","4dca2ecc74797074a40033632858cae7"],["/archives/2021/index.html","001170aa5db5b25d2dad9f221dd76fb2"],["/archives/index.html","01d27320b355ecf4f7f26ecefd3062a8"],["/archives/page/2/index.html","6ce23aee5b6515f833a23afb54fc2a61"],["/archives/page/3/index.html","cd65b69d908b4ee738f1296c4191030e"],["/archives/page/4/index.html","eff42c46219de988efeac663d5ba98bd"],["/archives/page/5/index.html","9c9f0f6ae3138f4710a78af7afea77e6"],["/archives/page/6/index.html","1781365c684f5de2f245317d3ad9bb15"],["/archives/page/7/index.html","aee493020acd98dcc3a74d1f9c533dfa"],["/archives/page/8/index.html","7221dc5aa24641e2af1c3be8b03610f0"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/ban-dao-mac/index.html","342feefc029a04850707c83511399a7b"],["/bao-guan-qin-zhan/index.html","204cd8c7f260473e9e2e313aee836824"],["/bao-li-yu-qu-cai-qiang-jie/index.html","65bff0280d9ce74904abdfefd2d3ba38"],["/bei-dai-li-ren-sang/index.html","d871370bb2932725b237b8ccfec12b06"],["/books/index.html","5b45a7f3b70bf9bdd9d6e17879c4e59f"],["/categories/Blog/index.html","3e0cd60a8597d1e5bf960c3cae9a3e2f"],["/categories/Blog/page/2/index.html","1c9912070361ebba3000405893ad3081"],["/categories/Blog/page/3/index.html","46eb8da9ae6d9a9f122fe1df2671c7d5"],["/categories/Blog/page/4/index.html","54263812bbebde59eb54550f5783b115"],["/categories/Blog/page/5/index.html","1ff57da8891f7bb97f2dbcbb5af01fdd"],["/categories/index.html","a34a74c868fe4f009660f9bf9967375d"],["/categories/法学/index.html","1961762f1f4bbd561ec84c189951fc30"],["/categories/法学/page/2/index.html","857d0d72a62ff99c304d08e80f227a05"],["/categories/法学/page/3/index.html","6cf0743aea4bdd156beafc9b6a37a593"],["/categories/精彩分享/index.html","19efce6f4a3f9c9bdd2a0bd073dab1ba"],["/cclisence/index.html","1fbb90dfaf5eb88cf45a4e2ff59f7af6"],["/cetrain-issues-iv-for-company-law/index.html","370580134a9475a16e1817d5a02a5b9a"],["/chen-zhao-tampermonkey-hui-gui-de-jiao-ben-pan-dian/index.html","b745be7f8460f1f51191c9b66dae6979"],["/cs-hubei-2017/index.html","aa6a295e800c9e7a3b57396b1fa5557d"],["/css/gitment.css","3de9684ac35ef6eee6b44c9a1f6bfcfb"],["/css/matery.css","ba7a432543feb2a723365ec8db4017c9"],["/css/my-gitalk.css","1d7957ce48d081440707ef6a7c3565ea"],["/css/my.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/prism-tomorrow.css","93bb1f846906ab54d3e4d1131e0887ff"],["/da-xiong-de-jin-yin-dao/index.html","98e57241db54b1ee2154fa29bcc0b355"],["/di-san-ci-qian-ding-lao-dong-he-tong-yu-er-bei-gong-zi/index.html","5dd3ce1bc04ecfb3a2ed52513e737263"],["/due-pin-workflow/index.html","869191b305cbe873ccc872f1b423927a"],["/duo-ci-zha-pian-shu-e/index.html","95ddb2487e001a5e76ba20e201765f60"],["/expert/index.html","020fb73a6219f279a623de3ef62dc5bb"],["/favicon.png","894e38300d0cbe6134bfafc8aae1ee2c"],["/flash-de-xie-zai/index.html","ba1428d8b3d62bb104ed9f652e072bfd"],["/gang-jing-wu-ge-ban/index.html","e76ea91b0da9db03068c921066e5d1f8"],["/google3756ddc34336b7b9.html","12050065c80477943307112f6e7b1ed3"],["/homebrew-chi-xian-an-zhuang-fang-shi-bian-geng/index.html","8a2e174853202ec0c24803be8b0a5ba8"],["/hu-bei-gao-yuan-min-er-ting-tong-zhi/index.html","247e880fe7499be631892bbde4c2e895"],["/hu-bei-sheng-fen-qu-yu-zui-di-gong-zi-biao-zhun/index.html","49906576ee035afdb460c136213c4717"],["/hustlaw13/index.html","3a2799daa7bc94b766d495d02bee541b"],["/hustlaw14/index.html","4fe45b40fa692065887a1d8f4c38e302"],["/hustlaw15/index.html","d1b66a09ba71235dcbed0c80abfc81c7"],["/hustlaw16/index.html","d73eb581a085b3a9748dedfb28fac88a"],["/icloud-terms/index.html","f4cf1ea7faa0c2c01f55c16eff515312"],["/images/2017/01-products-price.png","fa4c3067143b824406168b907c6be6c2"],["/images/2017/02price-for-professional.png","c04a550e15359c28fd38845fe99f44f3"],["/images/2017/03price-for-Advanced.png","fa07cab90f6a982bd301c5fafbc5c32c"],["/images/2017/04Products-and -Pricing-of-business.jpg","1b777f6348536d1592ddaf76fc0b5f12"],["/images/2017/05Account.png","599bf1f93de5649dd2235c8c3a06ed7b"],["/images/2017/06My-sync-floders.png","c858f287dd18ca828dd049c726904186"],["/images/2017/07share-permissions-1.png","901086f8092c6ad6d624061259b98a01"],["/images/2017/07share-permissions-2-jpg.jpg","469f7f8d5743d58d4097424d08786cf3"],["/images/2017/10input-keywords-for-KeePass.png","af2fc4186747d88a3467c61384dcffab"],["/images/2017/11new-config.png","89eea1214eaca94533fa3762b511b866"],["/images/2017/12new-key.png","46a20d59e86d1e2eb694962a4409b61a"],["/images/2017/13new-name.png","f502897725606592ebd1fe23e18cf6a0"],["/images/2017/15new-setting.png","4c64c65797233df486fd87faf30a30db"],["/images/2017/1new-recoder.png","074383cfa8322c51386e3c1d9999a637"],["/images/2017/1new-window.png","6aa46dc065d1a76e030b9ac53d41a44b"],["/images/2017/2017-10-02-15069484434583.jpg","052b5f68a1fd9df185bc6d1fde288b7d"],["/images/2017/2017-10-02-15069491096928.jpg","f7656c31b4789f05c004f23a76140dc8"],["/images/2017/2017-10-05-15071708806898.jpg","03d25e06943e9adc9082db15d2211b34"],["/images/2017/2017-10-05-15071717327929.jpg","1b0a818bd985c0378216134c907618b5"],["/images/2017/2017-10-05-15071738511614.jpg","b12ff851567da8b5448dc215be5da689"],["/images/2017/2017-10-18-WebFont示意图-1.png","e63821dfc99d06969221ee29bb00144f"],["/images/2017/2017-10-18-WebFont示意图-2.png","75c6edbaddea417146dac95da207f8c7"],["/images/2017/2017-10-18-WebFont示意图-3.png","d85f6c09a958317705fc2bae4ad472c5"],["/images/2017/2017-lawbook.jpg","576690f18fa0822a70c6bc9130c9cb83"],["/images/2017/2018-01-04-15149718662241.jpg","018749195423cfc5e62083e6c7043a55"],["/images/2017/2018-01-26-iCloudNotice.jpg","75157cbf1a65aa1f636e3ae31c1107e1"],["/images/2017/2new-codemaker.png","4388e7fa959415758118ab8acd2677e4"],["/images/2017/2new-rightclick.png","e947fba4501f5f0fa9af7b2260e18c8e"],["/images/2017/3new-code-maker.png","8b36fb241321c633cfc0710843e302e1"],["/images/2017/3new-download-favicons.png","e5fe7dfc8c69b305a8ebee97782ff6b2"],["/images/2017/4new-code-maker-preview.png","1c9f97678e8fe3e61e63566da3c09ff2"],["/images/2017/4new-favicon.png","1e8eb8d31889faf2f42480412810dac9"],["/images/2017/5new-expired.png","5fe25419327238a7be154b687752a806"],["/images/2017/CS-hubei-2017.jpg","c7f4fde15e7bfd4fc2a57f099811bb2e"],["/images/2017/Due.png","dd49f90a81d8f7c748462c7135ccb167"],["/images/2017/HOME.png","f1b868917caba0a522c9d5fec8ac5f66"],["/images/2017/apple-touch-icon.png","64e9b8915f6cf84cb0212d7f8bcc95f2"],["/images/2017/baoxiangongsi.jpg","b3b45a1de959a3de443a56712d92d25c"],["/images/2017/cc-logo.png","7561c677ba00df7b50fc6ca73eb53cc9"],["/images/2017/icann-huizhi.png","a410eea1e526f7268df2c5ca6923ebf8"],["/images/2017/ifttt.png","90e8454cd0fb8d9f6f48b7b8aed0d406"],["/images/2017/lawcases.jpg","3fb0f193f94f2336dcb891b5053f2c43"],["/images/2017/mac-wm.png","938a9994016048b5d7b973e3f00db05f"],["/images/2017/news.jpg","a21e763e2aa3e2bb0e533c3eba58ac2f"],["/images/2017/resend-1.png","264ea0d961309899abde7869d34d14f8"],["/images/2017/resend-2.png","bf300931ae88f42f7279c2ad15bcbf2f"],["/images/2017/resend-3.png","aff0474387b7af379db74bc631d5734b"],["/images/2017/resend-4.png","84f11126c0ec6317bf5ce1beecb1ba8b"],["/images/2017/resend-5.png","20d6026a4d2121654a53ff1b20658e1b"],["/images/2017/reverse-engineering.jpg","8901cb1a5e699dc47752d03c3c709859"],["/images/2017/today-widget.png","6f4216e493fb3321fa90f5a45bdf768a"],["/images/2017/wei-ji-hou-ban-quan.jpg","7f321de0f55258d6362e94fe51cde1cd"],["/images/2017/work-rules-mindmap.png","f917fce8005f7a69d4eb4e7300b5baa1"],["/images/2017/workflow.png","9365bfde46f90d39696311c4cf19c5c0"],["/images/2017/writer.png","b3d8f827394dcfeefa10b1e934fdbdeb"],["/images/2017/wyjtzq.jpg","0707f0f28d097fc59477f2a829e9a70e"],["/images/2017/xinyidai-zhuanyi.png","f820a1ef00fb9a8bc3f1fb17eab3d62d"],["/images/2017/yinxiang.png","8988c0cbb581aa480e4d6b51f9abb2b9"],["/images/2018/ca-logo.png","158ca0bf37e064db44ad3b8f2ce222af"],["/images/2018/sample-networks.jpg","6b2ac3f8091586c1fd183caf455e54d6"],["/images/2018/smallcaps-1.jpg","454102f314919daffd2ad87f34ec94a1"],["/images/2018/smallcaps-2.jpg","5140fff44fd9f4cc02942e03520b0621"],["/images/2018/smallcaps-3.jpg","81cd375183bd292baff4bbc1d38cab1f"],["/images/2018/smallcaps-4.jpg","ed32e8bfce23659fdbf2d164f8598ec9"],["/images/2019/cs-hubei-2019.png","67cca1aeac43c7fb903f21f7b38b6e52"],["/images/2019/googlenms.jpg","1b5adffd13a85bbef960970f3e8f0845"],["/images/2019/min-wages.jpg","2f3a404b3faaf684a34014d5ad0eb535"],["/images/2020/cs1-hubei-2020.png","e07492e0281a5ab9245cb5c09569573a"],["/images/2020/cs2-hubei-2020.png","9dc0026c30d9bfd4301b4f23bde812d2"],["/images/2020/downie-1.png","22b21ca19accc51d26dee9df0d7848c9"],["/images/2020/downie-2.png","05831aa91f6aac7d79f3dfc72c573b42"],["/images/2020/downie-3.png","ada85be2e51b423aa11fedf1aa4b56bb"],["/images/2020/downie-4.png","0105e6913ee141c1d3bfbaac81dca25e"],["/images/2020/downie-5.png","8412618167845564359c1a898a0fbdc9"],["/images/2020/downie-6.png","2e6e539367fad79f8e6d8c0083f1538c"],["/images/2020/downie-dl.png","0c44ec3da3f33772d165af8e411a1ce1"],["/images/2020/min-wages.png","693d1ac582913b65da8d19e032a74200"],["/images/2020/mz-newloan.gif","63033712407236bc71b02ed19c38b695"],["/images/2020/mz-support.png","353b475c7292d74ba360b3a40aa9b7f4"],["/images/2020/t&t-zhihu.png","8df50a9f5e1f005234378a27f26d27fe"],["/images/2020/zsh-commit.png","e2ca5f92a05fe49e469812b284f10b83"],["/images/2020/zsh-done.png","7271d939634eaf3dc4564192eb10cd21"],["/images/2020/zsh-fail.png","ce1ae9603911a718a8e4288e99d00c56"],["/images/2020/zsh-status.png","e8e87574dd270348d64b3a9d9f3a6b35"],["/images/2020/zsh-upgrade.png","85bdb17abb003d733c2fbf22ca9fb9f4"],["/index.html","840fa65cd8fe1242818e52f89bc4cd21"],["/iphone-xryu-xiao-xing-da-xie-zi-mu/index.html","1fad87f3e2d03d5aa26b07b6cd0650d1"],["/jdsnk/index.html","1c94c47fd281600a165c0cd817da5b04"],["/jian-qiao-fen-xi/index.html","0d2611a94125af0372594b2b6eca0de2"],["/jianguoyun-keepass/index.html","fd18e422ca8512870b8b39596079fb30"],["/jin-qian-bu-neng-mai-shi-me/index.html","a185f36392d1b73c0130c2253b97b9da"],["/js/matery.js","a3c660818c984156551bc6a37db08d66"],["/js/search.js","d53799e782ec2bacd74fd571f3617e66"],["/lao-dong-zhe-wei-yue-jin/index.html","9e5c26188584d299a54ed5126d55ffb8"],["/latex-times-new-roman/index.html","da8ee49e74697567c75bf3186ada64ee"],["/latex-yu-lun-wen-pai-ban/index.html","5d452b7f4a5b8bcc075fc9d153bfbaff"],["/leng-dong-pei-tai-de-fa-lu-di-wei/index.html","37472a7b9367b2fd445e04d6bd84ee33"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","fb1fcc9be071dec9f9bac128ecd93ed4"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/libs/awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/libs/awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/libs/awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/libs/awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/libs/awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","32667d961d733374e5cf7a219cfe9f20"],["/libs/gitalk/gitalk.min.js","16431f977a70ca8611c50490710c74fb"],["/libs/gitment/gitment-default.css","a40267e37b1072c9494b11edf3eea907"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","c7b402dc7f1fd823488d80ea0d7a219d"],["/libs/jquery/jquery-2.2.0.min.js","6fc159d00dc3cea4153c038739683f93"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","dc34cc9c99e935cd9c88c036e34103f5"],["/libs/lightGallery/img/vimeo-play.png","dfe7764b4fe444c3880736ac6131f5b4"],["/libs/lightGallery/img/youtube-play.png","e6f0c233c87ddefab049c991c61e2d69"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a92418e949c3e3c117f8b0157dacd4b"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","eb5d36236b96681900e300ab19c620b6"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","d393979593e7cca4b4c78a6909f49ece"],["/libs/share/js/social-share.min.js","8f31100e8dba552f6105f08e42e3ac7a"],["/libs/tocbot/tocbot.css","60097449be5093b2b110a7546bce1247"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","5acefb6db60d08031497f9c2586399d1"],["/libs/valine/av-min.js","efe0dadd662922c8e1b2c9bb2a9fd03a"],["/llfxdmw/index.html","c13bf245b42078f2cab83416d0d429a6"],["/luan-dan-20181116/index.html","c63b3c39daaff12d0a30c4220a2975b3"],["/luan-dan-20200217/index.html","9d3af35c2fa715ad68a76f03485ea64d"],["/mackup-bei-fen-chu-cuo-de-lin-shi-jie-jue-ban-fa/index.html","0b2f5f49a9ed46a993e4262fcabd4afe"],["/macos-geng-xin-hou-homebrew-bao-cuo-chu-li-fang-an/index.html","0b1d1e0a0a0a503fcef829035a0e30f0"],["/medias/avatar.png","3f45057beb149dc0b82f0c670aad668c"],["/medias/banner/0.jpg","da6025a58f44f223092eb31a7f373980"],["/medias/banner/1.jpg","4374dc90673ef441392acc9c037e181d"],["/medias/banner/2.jpg","563799d31140f80969a393013b2bb674"],["/medias/banner/3.jpg","3b819d37344dd82943f82f9f8bf176d5"],["/medias/banner/4.jpg","385950b3612c177e49c56c272a981e75"],["/medias/banner/5.jpg","91cc26b9fbdeeeeac6395a56325983a7"],["/medias/banner/6.jpg","69d4cb29ab8e066ce01ae9a4b39191d0"],["/medias/banner/7.jpg","e20a319c729116db4293e71ff87ec3a6"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","76c9e032df848c34180ced7e73efbd06"],["/medias/featureimages/1.jpg","c7376c6a8ba3ad20061be50ebd67d17b"],["/medias/featureimages/10.jpg","c045ee21dee9da11be52570db3a10a7d"],["/medias/featureimages/11.jpg","9fb757d29ae1c799724f14952bfc13a2"],["/medias/featureimages/12.jpg","f5a35dc5cec28beeaafe02a80da67892"],["/medias/featureimages/13.jpg","4b93aa92ec2b5fd50dcf46c2fc23e101"],["/medias/featureimages/14.jpg","4c9837c35fa70aabdaef91d027b7becf"],["/medias/featureimages/15.jpg","51b23231716e2bd4b5c958fd4f821f80"],["/medias/featureimages/16.jpg","1149f8410be8224f62ad6d552c2c5514"],["/medias/featureimages/17.jpg","8b3f4648be6f6479f4ee16090e9f8fad"],["/medias/featureimages/18.jpg","e54a82f72827778f6d7e18dff9c1621c"],["/medias/featureimages/19.jpg","ccbc60683602d439e8e2a9a2563fdf92"],["/medias/featureimages/2.jpg","ff02ca78b12ca582398c8e6f7ff350f0"],["/medias/featureimages/20.jpg","52ef7204ccabfc4d25ff020fba7e0ad6"],["/medias/featureimages/21.jpg","f8578d4ef0135dcb92f5e59b0ef1dc7e"],["/medias/featureimages/22.jpg","88abf3e2a6a9952db3bf0e42ceb755b6"],["/medias/featureimages/23.jpg","fbd36993e576569948bc69f4756a8eb2"],["/medias/featureimages/3.jpg","8af8b1e4ccbea8d0acdcc0f82cd14f06"],["/medias/featureimages/4.jpg","5d2a8acac940edd071a52a8bbe96f314"],["/medias/featureimages/5.jpg","9eadd0901e23e6deec6f69cee6fa8294"],["/medias/featureimages/6.jpg","4a3f878bb06184de69f58803a33e9db3"],["/medias/featureimages/7.jpg","5863baa0af840200838c6b7a0bcdecf8"],["/medias/featureimages/8.jpg","a0324f8a77c06b4c721c00d489f44169"],["/medias/featureimages/9.jpg","266a60a32e6d5cddebbb5c6a30417b6d"],["/medias/logo-mage.png","0d4736349027a68b845c4ddd6f3e190c"],["/medias/logo.png","8c79eff24472674532c6331ea69da8b7"],["/medias/reward/afdian.png","0a1fcd6cd33230b2ce311896a18f295e"],["/medias/reward/alipay.jpg","5c405374e9bf78b0e24b1140112c0b9f"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/medias/upyun_logo.svg","0895a1d05ab8bc4849337c5a7f4edda0"],["/moneywiz-zhong-xin-jian-dai-kuan-zhang-hu-fu-kuan-ji-hua-shan-shuo-de-chu-li/index.html","b97aab89c4e7fd0cc472105effd7eb2e"],["/movies/index.html","e08e520bd46866bc4820eec33dffbbb5"],["/na-ge-ke-ai-de-lao-tou-zi-zou-liao/index.html","99fc1fb5b7d3d68b06b2a4048f484445"],["/node14-bao-cuo/index.html","96b035eceeece9c66ceb4c0fcbc05377"],["/oh-my-zsh-sheng-ji-shi-bai-de-jie-jue-fang-fa/index.html","b8d1d73bcfd6750f8d302ca3e8d8df0f"],["/opoo-zhe-teng/index.html","8a49704225d18626791d330d6145f8a6"],["/others-00s/index.html","e3ff4f50b3ae74ede60fc0c574af8979"],["/page/2/index.html","accc2526db1f60c4ba399d95e4319be2"],["/page/3/index.html","0fb8c1301fd152279e65f9518f559f60"],["/page/4/index.html","192339cc447fad7a14ad8d20774cb022"],["/page/5/index.html","fed07f00b2b3be0c806940bb97eb5c99"],["/page/6/index.html","1cc3a2860246ff1bf506cf8e462ecf03"],["/page/7/index.html","cfd2be9da718bb3bfb798759d32318b5"],["/pan-gu-zhi-bai/index.html","10404fff0404b28c87d6f5444f2b5544"],["/poker-jian-pan-zi-ding-yi-bei-wang/index.html","8bf62c1470bfcb1ab3fc1271a7caa266"],["/posner-homosexual/index.html","4a32b2100649c321a711e4def2e1ebe2"],["/qpdf-shi-yong-bi-ji/index.html","e2be46955b8fa31dfab6fc0a149c031f"],["/qxpj/index.html","4583a8238ba955c5e86fd7410eb30f53"],["/sheng-si-fa-ting-guan-yu-lu-shi-fu-wu-he-ji-ceng-fa-lu-fu-wu-shou-fei-bu-zai-shi-xing-zheng-fu-ding-jie-de-tong-zhi/index.html","4fe844792d054df9ef6ab27dae0de278"],["/shuang-pin-vs-quan-pin/index.html","f5b9e1a28b1559d5791ef4de8b522071"],["/shuo-shuo-xiao-fei-quan/index.html","907d9cf9a1aa3c6ae8268db6bf0cf442"],["/si-di-guan-yu-xin-guan-fei-yan-yi-qing-qi-jian-sheng-huo-fei-fa-fang-biao-zhun-de-shu-li/index.html","f5cc8674350a20078dae4ab0787db07f"],["/software-reverse-engineering/index.html","a7a9b53a6df1ee0d4e062f9776f2694f"],["/sui-sui-nian-zhi-he-yi-wei-jia/index.html","a58a28ba6f13d0d2872344e8c4b94d9a"],["/sui-sui-nian-zhi-ni-hao-li-huan-ying/index.html","4b76d3264094595b92b4b7bcf38cb715"],["/sui-sui-nian-zhi-wo-men-yu-e-de-ju-chi/index.html","a560fb1f6fea94f93d0f2884f043038f"],["/sw-register.js","015f5291a8e0eb6862a79136c7c73913"],["/tags/2017/index.html","f8e1cef958919dc8a06bc49dc8a969fd"],["/tags/APP/index.html","0e64c3d930620c500005d011ed24397c"],["/tags/Apple/index.html","9daa228281bf5c10328c70bf5f4db208"],["/tags/AppleScript/index.html","e070db90b08976626f30f96084469b9c"],["/tags/Due/index.html","08dc086a5120b1aed53b490d49768d64"],["/tags/HTML/index.html","5e09f8cda19a16c1326c3b22e8736b71"],["/tags/HUST/index.html","7f06f9d1b65d2b083fef2f2765c249db"],["/tags/Hexo/index.html","b2e4fd75176befa2d7926bed8bdd8ddc"],["/tags/Homebrew/index.html","a007e221d4aef43b40288033ddb8068a"],["/tags/KeePass/index.html","d6516c4bb046d42c17b2d8c3b4cd169e"],["/tags/LaTeX/index.html","96a415e48c2b4295f69ec403ffa12bfb"],["/tags/Namesilo/index.html","813b01bd8af6591854f2658dd0167167"],["/tags/OpooPress/index.html","e775cc97e6bdc28582f2fa3f13e7a0e0"],["/tags/PDF/index.html","23a75b580551e6d96b132c57e47228a3"],["/tags/Posner/index.html","c75eabdc23eba1bf802f7b68d347ce87"],["/tags/Python/index.html","a01ac0a526768af35ebf2858caeb149f"],["/tags/Rime/index.html","52190a6ef47620e3d32d2455369967a1"],["/tags/Tampermonkey/index.html","5ac371e893ec3cb471ff446ff03ef40a"],["/tags/ToolMan/index.html","cc05030960159b833c0572b15e5d4976"],["/tags/Typecho/index.html","e3c6f8b89b2d005085172db537be4db8"],["/tags/Workflow/index.html","7005ae0e98320fafc0d96871446f4d79"],["/tags/cc协议/index.html","0e9d6da016fe7bc482094c11fa8ee8f2"],["/tags/iCloud/index.html","9b84e0b6f775623113f79c89f9115a6a"],["/tags/iOS/index.html","62e3414656d8afe1f3841f664dd56c54"],["/tags/index-1.html","6db7c1e6201f64192ae674cfdc621386"],["/tags/index.html","6db7c1e6201f64192ae674cfdc621386"],["/tags/logo/index.html","1567e707328b3c7b142c76329299ae67"],["/tags/macOS/index.html","811299800470a21ce08a36c1691110ab"],["/tags/vpsmate/index.html","903649aeaf0a095282c7db676de506c4"],["/tags/zsh/index.html","e8034134fc1d716b5f190777074fef1c"],["/tags/乱弹/index.html","fc8c805d263fd575a811af0001a9530c"],["/tags/二倍工资/index.html","614b10d6ff477eed9ed641225e061a53"],["/tags/二维码/index.html","be9590fd44b1eccd6730745d4e8ea288"],["/tags/云盘/index.html","0bb19f3e8808236c9201ebdb5a902014"],["/tags/交通事故/index.html","02d63e90b970619cfddce7888f58b5a6"],["/tags/产假/index.html","91e46243b3dfd0018cd34797246c81f5"],["/tags/人身损害赔偿/index.html","24f6d77b970925b4f00901fa06bed470"],["/tags/代理权/index.html","959030c6a1c9a36fceb39225d7a1f6d3"],["/tags/优先受偿权/index.html","9d65b86ceb7d2220704a000b6b0b2491"],["/tags/作品/index.html","ce05724a1f84992035d249c1f03fb019"],["/tags/侵占罪/index.html","fefb3a5702e27c9a839923166899dfdb"],["/tags/儿童权利/index.html","04d547aaab1528d80573131dc471e85b"],["/tags/公众号/index.html","f1b7da962541afab6d899f0514b04e35"],["/tags/公司法/index.html","c549c0e64394dda17915e1815252ca8c"],["/tags/共同财产/index.html","e1b9cdab0ed5a5451b13ff5092525844"],["/tags/刑法/index.html","a0cd34f2f07c1c8e0baefde9b6fb3932"],["/tags/劳动关系/index.html","130e616664ad3ecbd01b3dbe5a26f0af"],["/tags/劳动合同法/index.html","b6e414e893763dcfe91097fbb7c76e66"],["/tags/劳动法/index.html","b6caa9480a94435e09a20da829919b5d"],["/tags/华中科技大学/index.html","cd7bc16f87c26b77baeb23a779b55f8d"],["/tags/华中科技大学法学院/index.html","779816826718ed5be90cbb3b3135d042"],["/tags/危险犯/index.html","6ed5829590c3c195b55d2a7f05e389dd"],["/tags/反向工程/index.html","b946092d8142f78807e0663f2d5995a7"],["/tags/发行权/index.html","42f667664beb6cba659705ac477d0609"],["/tags/司法解释/index.html","cb5a92ad7eb7f693519c15854b2a4638"],["/tags/司法鉴定/index.html","a5094dbf42e895b20a5809efad430013"],["/tags/合同主要义务/index.html","194701a66b2941d6f2f4848d955968c8"],["/tags/合同法/index.html","87c102ebd8b1863968a7fa0e98321250"],["/tags/合同附随义务/index.html","eb10c4c23e3f89dc69c11375afa70742"],["/tags/合理使用/index.html","d123dfaa91a96368e0663217e00253dc"],["/tags/坚果云/index.html","b3658bb9acc27e6829907af83213437c"],["/tags/域名/index.html","76d7e8f35a0e1061e7ae84cbfd57071e"],["/tags/字体/index.html","2684f0d25bb8c39f88a25d07aa6041df"],["/tags/实害犯/index.html","ba04db0260617b3c45dd84d85ca6a793"],["/tags/密码管理/index.html","1ee2a8323cc442eb239f84607ff99e4b"],["/tags/工资/index.html","a1c59ce068fce8acc299e1522d094085"],["/tags/待履行合同解除权/index.html","5e4eacfff77bc8dc0a444bc90731106c"],["/tags/律师收费/index.html","b860f36070ef8457b66cbbddc4ba4de7"],["/tags/思想表达二分法/index.html","f8a76ec552daabd182163ba9ce92b319"],["/tags/思维导图/index.html","af2201a2ebb17bcd1ab0bbaf2037f298"],["/tags/成本收益/index.html","295538c35b0c9507d2c14826138b06b4"],["/tags/成长/index.html","b1cddab0e379461ce41eeb3e0aa11664"],["/tags/技术措施/index.html","58bd1df26bf69e720ac7a0e89e36a80d"],["/tags/抢劫罪/index.html","d4da58d29b18402025a004cf5d5c5186"],["/tags/抵销权/index.html","f22f7aad0608d38b8896d632c5c3a136"],["/tags/排版/index.html","e58efca39e3a434e10acd37629920e5b"],["/tags/插件/index.html","c0e4bdceb7cada63c4f85d741958f5d6"],["/tags/搬瓦工/index.html","6d3aac6b77e3b115e31b2a3a9b2a6ae2"],["/tags/故意伤害罪/index.html","983640293c28eea07a689c36e267ad45"],["/tags/效率工具/index.html","a1331914da4d65e7dc5ad39e4f6a441a"],["/tags/教育/index.html","04b795c0211e5a78ef4071ea8fc6c194"],["/tags/断舍离/index.html","1e0ffbbaeb770db43b1d06c70013d3cd"],["/tags/无固定期限劳动合同/index.html","f3b93d50bcf3299e182015a15149b689"],["/tags/最低工资/index.html","b4ee3ea92e2e540346f6707ed6ee5b01"],["/tags/最高院/index.html","4d07186672544371ca84ec0059d9955d"],["/tags/机械键盘/index.html","94cfad1a198c1037a364276c3364cde9"],["/tags/武汉市/index.html","c464062cfe120c29b90892d7d31e6a1b"],["/tags/民事行为能力/index.html","8cc6b525075c1dc86d6c808196003aef"],["/tags/民法/index.html","26e5f34aa8e30737709c503c4d961839"],["/tags/汉字/index.html","4aa0eac5b86fd0e34411d3088a5f7d0a"],["/tags/法学/index.html","8b16007bb628e2e35304faefe8fc1159"],["/tags/法定许可/index.html","5c213331f545b7d965da574a71b5dc64"],["/tags/法律/index.html","d6fc2d911794a0a79bdebb7bfe43be70"],["/tags/法律援助/index.html","7710a4ea1cd3bba5bca0119ec5d0848d"],["/tags/法律法规/index.html","c48002cd94bc0489c8667ab8e9664387"],["/tags/法律经济学/index.html","8f1cda2d0b3beb9953fc7c4efc8c7426"],["/tags/消费者/index.html","ed6313ff67e0cbaf92bb85fe8234de92"],["/tags/湖北省/index.html","d6563b6b69ec61778eb026919c0ee3b3"],["/tags/熟人社会/index.html","ec959fd5470baacfe4c218df89828858"],["/tags/物权法/index.html","5347b91eeb2b23942a86dcb9eb36475f"],["/tags/用工之日/index.html","6e742ec2472cb759ec6345a36fa384d0"],["/tags/电影/index.html","d659a92cac32f8e59414ce8b33e6b80c"],["/tags/男女平等/index.html","60ab059a546ef1923289d37eaec6fce1"],["/tags/知乎/index.html","221b86005d049240ac5a4e02197ddc6e"],["/tags/知识产权/index.html","b1cf9d5d7e0ebcb55a59ba5d3a9fdd30"],["/tags/知识产权法/index.html","19385143078e40c3a72e8200b8d653d9"],["/tags/破产法/index.html","2e735a42cfcb8cd706f83d0318a1c6fb"],["/tags/破产管理人/index.html","bce408a748fc20c9bd3eb73a1a9fe11f"],["/tags/碎碎念/index.html","482c7217fd4e79bd1e4f99456fdbc149"],["/tags/社会责任/index.html","702f995334806fe15840ecaa842baf2b"],["/tags/社会问题/index.html","7685497c8541ab08d9b185417ce80c07"],["/tags/神经科学/index.html","61f3662f08a6b4819bc64c9a24240a55"],["/tags/经济学/index.html","28b8ed57d9cdb3ff3d9755b092fb683b"],["/tags/结果犯/index.html","e0e4e688fa1c7d21652a2f74da20e0f4"],["/tags/缺席判决/index.html","145eb4f2fb4e9df6809863ae00f43a71"],["/tags/考研真题/index.html","55c3ba39b7aab5a8799bec4ddb44412d"],["/tags/著作权/index.html","6eb1744d3a615822c72f91b6c2f2f7cd"],["/tags/著作权法/index.html","52a276604bacc2fc62531e9a4af9236d"],["/tags/行为犯/index.html","bad20d5b47db719f70bbc9d637373a76"],["/tags/行政不作为/index.html","878ec58959b00d0140423e76f060d51f"],["/tags/行政救济/index.html","449d140ec2b928396d252fb2132a11f7"],["/tags/行政法/index.html","b33041c624495900b71e3bf57883a79b"],["/tags/装饰装修补偿/index.html","d79121e2ddd23caf21d29501c5e23dfe"],["/tags/观后感/index.html","361b9ac4295b6b329c7e7dbfd40de1a1"],["/tags/观念交付/index.html","f5715e08de726e99036d0347858ea2d8"],["/tags/计算机软件/index.html","afdb941cab21d8805fe18f9957a8771d"],["/tags/认知科学/index.html","d5a66316584bfa77aa5e0e8a5d748380"],["/tags/论文/index.html","aa4c25d430b78e7bd1fc178cc4a3ad6b"],["/tags/诈骗罪/index.html","93ee0092bc4f6213d33c5f881b743000"],["/tags/读书笔记/index.html","920b03c09ef270d1871e41be6f06b284"],["/tags/赔偿标准/index.html","971eeae1843f31d7c0a124f3065aea01"],["/tags/输入法/index.html","018b52503277a6d742f8ccf9118f57b9"],["/tags/违约责任/index.html","4d112b8a891ce4fc68283788dbfdbe81"],["/tags/违约金/index.html","67d318fdbc1e2f8c0eda000248eb36aa"],["/tags/释明权/index.html","3d138717a10b4c90bf4461202f56be5a"],["/tags/隐私/index.html","d666e44c768f5b9c5ddbc0441ea5880c"],["/tai-er-gu-shang/index.html","26b53be3da49ef91b1e3e2bc3fc6f2e0"],["/timeline/index.html","47a6f510765564e733f2bbf6120747fa"],["/vcard-yu-er-wei-ma-ming-pian/index.html","6dadf7ff949bf7db28370e7ed871762a"],["/webfont-yu-zhe-zuo-quan/index.html","0a9e081f1e0cc3b20548d719242baad6"],["/wei-ji-hou-ban-quan/index.html","303eaf2ab292becb22e6b435fa12c98a"],["/wei-shi-me-ni-jiu-bu-xi-huan-fa-guan-yu-wo-de-peng-you-quan-liao-ni/index.html","07065be0b3e6307055784eec84d192f0"],["/wei-shou-xie-html-pai-ban-gong-zhong-hao-wen-zhang-de-ji-dian-bi-ji/index.html","f2423235509a53f3425a9be8a22ffd4c"],["/weixianfan/index.html","371cf65ef50275fb129d4befb2d27d61"],["/wo-de-macos-he-ios-she-zhi/index.html","11e609b00e244a1fa37195325a46c1c6"],["/wo-zai-yong-de-an-zhuo-app-201904/index.html","9750030a262f51f79fc4190808812d45"],["/work-rules-mindmap/index.html","4242c77c28ed87de8e0760b7c9a0a30f"],["/wu-han-chan-jia-shi-duo-jiu/index.html","363c247c8fd0762c8666b4fa3d60b1ed"],["/xzlfbzw/index.html","3664c72b16054aaa32497c82bf4235de"],["/yi-yu-fu-quan-bu-fang-zu-de-wei-dao-qi-fang-wu-zu-ren-he-tong-bu-ying-jie-chu/index.html","f3c8b1622f8263436ba9a544de24baee"],["/yin-xing-neng-fou-jiu-po-chan-zhai-wu-ren-de-cun-kuan-xing-shi-di-xiao-quan/index.html","4b678915c38bb1888231667cb96220f3"],["/yu-ming-zhuan-yi/index.html","863163569eff2152c317a31ef6c6b38a"],["/zhetengb/index.html","1d383ab963ed5574ec8d4a9db473cc8c"],["/zzq/index.html","4d88b9cc52ff854b6018fd106c3b1d5c"]];
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
