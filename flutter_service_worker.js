'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "cffce239c0fea1239f5bfeebe5697714",
"index.html": "37a25dfac71073b0849d1477c75de1d4",
"/": "37a25dfac71073b0849d1477c75de1d4",
"main.dart.js": "f0f20b76cc4ed81765190766675ef0ad",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "494b3207bd34a586100f30c80353ec64",
"assets/AssetManifest.json": "8709647784dd3440fb502a911e1fd6b9",
"assets/NOTICES": "87cb54b47849a3360e6207a47444139c",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/module_login/assets/images/ic_eye_close_black.png": "78b680c53498a2b972aa4e4194aa68b6",
"assets/packages/module_login/assets/images/ic_pwd_hide.webp": "27be41e07631620f722fe761a7d5cc07",
"assets/packages/module_login/assets/images/ic_back_white.webp": "3099f5b14ffb66f1beb0b65c2f1c52aa",
"assets/packages/module_login/assets/images/ic_login_close.webp": "5a48a716d3865151b3558ea807c3b8c5",
"assets/packages/module_login/assets/images/ic_eye_open_black.png": "903b0dfc21d5bfe69d47a9b07a6f2d6a",
"assets/packages/module_login/assets/images/ic_tineco_logo.webp": "ab213978e829b64ba8d849a4c96bcc5e",
"assets/packages/module_login/assets/images/ic_login_input_clear.webp": "dead4ae98914176245acf994dd36116b",
"assets/packages/module_login/assets/images/ic_pwd_show.webp": "1bdc450b36759338566acb12a7a20cb7",
"assets/packages/module_login/assets/images/ic_forget_pwd_clear.webp": "56c73da0e77306dfbc803e9b9b64d929",
"assets/packages/module_login/assets/images/bg_login.webp": "66ba8639cc35245f8a828e5e9bde0718",
"assets/packages/module_main/assets/images/ic_mine.webp": "9bb016d42385261a00e251b187081220",
"assets/packages/module_main/assets/images/ic_video_play_placholder.webp": "89d31a5cdae59b822e145e23feed441e",
"assets/packages/module_main/assets/images/ic_mine_white.webp": "b498504f282796fb03ac45a76832a3c9",
"assets/packages/module_main/assets/images/ic_share.webp": "5d0f53c4e35b885cadbae502d248377d",
"assets/packages/module_main/assets/images/ic_dynamic_vip.webp": "e50f752c9eb16dfb0a95554a5b41ec14",
"assets/packages/module_main/assets/images/ic_comment.webp": "b36551925d9b69aea827e2b784016fc7",
"assets/packages/module_main/assets/images/ic_comments_grey.webp": "d868f6a4fbeb7ba9965b3ae21a0c1273",
"assets/packages/module_main/assets/images/ic_message_white.webp": "6f20ea082d3282046b622fcb749394c2",
"assets/packages/module_main/assets/images/ic_like_black.webp": "451c03cb7552d16a82f9da169aeada5e",
"assets/packages/module_main/assets/images/ic_photograph.webp": "1274f7fc194e2a0f726dee6ed0695669",
"assets/packages/module_main/assets/images/ic_indicator_home_tab.webp": "2267f7ee82cb990bcc28457f0022091a",
"assets/packages/module_main/assets/images/ic_home_like_normal.webp": "94fba37e6bc4c1f24775ca0b3f134f8c",
"assets/packages/module_main/assets/images/ic_comment_zan.webp": "6a69d202f3ee18edc1b0eb196d8d9def",
"assets/packages/module_main/assets/images/ic_dynamic_share.webp": "53e0840248be07f12e0a61169661d129",
"assets/packages/module_main/assets/images/ic_video_play.webp": "e8a1e504a4d783a3d46a265b570024c9",
"assets/packages/module_main/assets/images/ic_menu_white.webp": "99f7ec7edcb253f8c5976fca431af49f",
"assets/packages/module_main/assets/images/ic_video_list_play.webp": "2e9e7ecccd19bf59c55dd10c4b777844",
"assets/packages/module_main/assets/images/ic_home_white.webp": "ca239ae37db581682248233cf7df62cd",
"assets/packages/module_main/assets/images/ic_arrow_right_gry.webp": "756d5950ae15041c3a2e5fa35e24c330",
"assets/packages/module_main/assets/images/ic_menu.webp": "85329fabff6a0aa044e50dbeaae97bf8",
"assets/packages/module_main/assets/images/ic_dynamic_video_play.webp": "f38b0491789256b8df35a85b4b322375",
"assets/packages/module_main/assets/images/ic_hot_topic.webp": "9f7c9a5fe7c986eb1ec774ad60132068",
"assets/packages/module_main/assets/images/ic_mall.webp": "42087415de01061b54a10f06809382a5",
"assets/packages/module_main/assets/images/ic_search_black.webp": "e9e33ab1a4391e7faaf44433df9d34de",
"assets/packages/module_main/assets/images/bg_topic_details_tab.webp": "60ddd743503578a867b3138830d3c8ae",
"assets/packages/module_main/assets/images/ic_forward_vlack.webp": "d3bf66179827e88f379088d59e1ca0bf",
"assets/packages/module_main/assets/images/ic_topic_head.webp": "5aa767ee0c04d274106e14cc7829bb90",
"assets/packages/module_main/assets/images/ic_release.webp": "957b8045ddad82f8bee9ded6681fc356",
"assets/packages/module_main/assets/images/ic_comments_black.webp": "810d801da9694bbe7e4b21688332ba5b",
"assets/packages/module_main/assets/images/ic_like_grey.webp": "2d37c32a5af7cbd01c438880335b104f",
"assets/packages/module_main/assets/images/ic_video_not_find.webp": "3be50c69d356d4ad586ea9bc8760f43c",
"assets/packages/module_main/assets/images/ic_mall_white.webp": "daf44f72f9d9c46923ac4a050d6debc2",
"assets/packages/module_main/assets/images/ic_home.webp": "1ae0389cf28f389d6e8e9abd2f731df1",
"assets/packages/module_main/assets/images/ic_message_black.webp": "7ce6ad0f071cd615d2355465ae89c542",
"assets/packages/module_main/assets/images/menu_pagecontrol_selected.webp": "d8c84c31c493ebd8ec8eba0d3612c123",
"assets/packages/module_main/assets/images/ic_search_white.png": "41076eeb60b9fef65fddad9e3b349566",
"assets/packages/module_main/assets/lottie/json_mine.json": "a50d0baa469e7483d4a19ed8efaec13f",
"assets/packages/module_main/assets/lottie/home_flow_like.json": "52f39a880774a92740e4c7c7ce7a9e33",
"assets/packages/module_main/assets/lottie/video_cancel_like.json": "18cc2cf69f1ee5adce874f117c744cbc",
"assets/packages/module_main/assets/lottie/json_home.json": "30f7961190be292130e260e6a3abbad4",
"assets/packages/module_main/assets/lottie/json_store.json": "d48a1b06236c8ca354ec2f7b21497815",
"assets/packages/module_main/assets/lottie/json_menu.json": "9c624e0315dfe648a4ec5b5796e2112a",
"assets/packages/module_main/assets/lottie/video_like.json": "b79e2cbf01091ab61627296c188fcded",
"assets/packages/module_common/assets/images/loading/common_loading.png": "1dbe45a16a81c18ede801e1afb162a29",
"assets/packages/module_common/assets/images/iv_header_default.webp": "7af25fc8d2d75e884e4de25f8e58fbfb",
"assets/packages/module_common/assets/images/bg_content_empty_gry.webp": "5bdd15a8b84f8c852a7ab95648064c68",
"assets/packages/module_common/assets/images/ic_placeholder.webp": "4781114a3fbf488df71d6f7a557ebceb",
"assets/packages/module_common/assets/images/ic_reflash.webp": "b2ef68953005e97fb15ce372ccb255ec",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/module_message/images/rightIcon.png": "01670b2520e32af496061ddd54e0085e",
"assets/packages/module_message/images/follow.png": "da7496814f34c592a548d2b0dd0c7849",
"assets/packages/module_message/images/commentOther.png": "a48a7ac7bf554661221533d612277719",
"assets/packages/module_message/images/expression.webp": "7c4c7efb35e8a60a112fd3a290d04794",
"assets/packages/module_message/images/like.png": "96c8e37b51e60daa93f560eb223e9e6b",
"assets/packages/module_message/images/arrow.webp": "9ddc6cebc0b8829a95ea76a60af938ec",
"assets/packages/module_message/images/null.png": "3f2a8b69a0f5a7f8b58b3ae5269199f3",
"assets/packages/module_message/images/comment.png": "e7af87c93c1305097079ea35a4616eea",
"assets/packages/module_message/images/shixiaowan.jpg": "4b5f047f4f0289c473f790e2d5abfa46",
"assets/packages/module_message/images/header_default.png": "1174c4903e2cb687e1f4628a2411b96f",
"assets/packages/module_message/images/noContent.png": "3ab9fb217604d6b6273e90ad06957f1e",
"assets/packages/module_message/images/message.png": "ec06677049d8dcb84d124f189a2dde10",
"assets/packages/module_menu/assets/images/menu_all_icon.webp": "762ec60dde45bea810e9e13b61d40c45",
"assets/packages/module_menu/assets/images/tc_search_rank_5.png": "add5f2becc8cf168ffb3dfc07130cc99",
"assets/packages/module_menu/assets/images/menu_keyword_search_icon.png": "77b4663daf5e6845d54408fd8bb3c044",
"assets/packages/module_menu/assets/images/tc_menu_detail_score_normal.png": "33746664a9794c1f384fb1b3569ba45c",
"assets/packages/module_menu/assets/images/nutrition_selenium%25E2%2580%258B.png": "5f439f844c80a012f2afe268e270e5be",
"assets/packages/module_menu/assets/images/nutrition_fat.png": "77909b28096cc5d0c6b21aee78b2052f",
"assets/packages/module_menu/assets/images/tc_search_rank_hot_header.png": "b89f5a430df2e5467064b2e41f28d37a",
"assets/packages/module_menu/assets/images/tc_search_rank_4.png": "70b30db6b8b07f5bfbb6a86293564a1f",
"assets/packages/module_menu/assets/images/tc_menu_detail_segement_left.png": "18b8b64a00c1dff39cdc7fde7bd1649e",
"assets/packages/module_menu/assets/images/tc_search_rank_6.png": "949a66f6ce5f3ab6aaa51d35f1a75a0f",
"assets/packages/module_menu/assets/images/tc_category_sort_icon.png": "728a125509876bc349e862511c7e8e16",
"assets/packages/module_menu/assets/images/nutrition_vitaminB12.png": "20ca79170f791372ca483a6570da646c",
"assets/packages/module_menu/assets/images/tc_search_rank_7.png": "70c832e046bf05d06429adb3c64ab0ba",
"assets/packages/module_menu/assets/images/tc_search_rank_3.png": "007e0be92f0246e09267ec278b515a8b",
"assets/packages/module_menu/assets/images/nutrition_cho.png": "5c2014db8f820a5735c33af2c30c0ada",
"assets/packages/module_menu/assets/images/tc_searchnodataicon.png": "5343a2d1270a6421c6917e270255e4a5",
"assets/packages/module_menu/assets/images/setmenu_down.png": "cd77170d4d1dafc7cc606495d241151b",
"assets/packages/module_menu/assets/images/menu_scan.webp": "4ca6eff4db682f793cf4833ce4a91636",
"assets/packages/module_menu/assets/images/nutrition_zinc.png": "e88fb992fd6e65dcefcd4a3df5f870af",
"assets/packages/module_menu/assets/images/tc_search_rank_2.png": "adf6be400c078b8f04f03f3c75654804",
"assets/packages/module_menu/assets/images/tc_menu_detail_basket_icon.png": "475b33cfd9c37f0cf4433c8113c370d6",
"assets/packages/module_menu/assets/images/nutrition_phosphorus.png": "a86646b07a32195517807230fa02c726",
"assets/packages/module_menu/assets/images/nutrition_kalium.png": "25b69e024b8831e4d479bdfb6273f707",
"assets/packages/module_menu/assets/images/tc_menu_detail_segement_right.png": "b601903199b1ef0dafeca732d16001c0",
"assets/packages/module_menu/assets/images/tc_search_deletebtn.png": "e3f834160260a902a45d2f29695e634f",
"assets/packages/module_menu/assets/images/tc_menu_detail_score_icon.png": "a117179112d277c9abcf0421e7de610a",
"assets/packages/module_menu/assets/images/tc_search_rank_1.png": "24e8440b7b84f0a818076e1f68a3c4be",
"assets/packages/module_menu/assets/images/menu_search.webp": "18d6177657256bc385f595a0447cdb37",
"assets/packages/module_menu/assets/images/tc_search_deleteicon.png": "9fb2a8d5e0a426f23393fde245bc4555",
"assets/packages/module_menu/assets/images/tc_menu_detail_collection_selected_icon.png": "76ed96e69d208f4de0e75b133b5b8877",
"assets/packages/module_menu/assets/images/menu_back_icon.webp": "31d418b1a4ed3b57a7748c4c9c7313fe",
"assets/packages/module_menu/assets/images/video_play.png": "8a81ccbcde70ad3e1661c31f2017796e",
"assets/packages/module_menu/assets/images/menu_rank_1.webp": "bdad71adc925cf949301504bf2f7dbf7",
"assets/packages/module_menu/assets/images/tc_home_reco_content_zan_normal_middle.png": "d02347573ea5dbdae4536069c862b458",
"assets/packages/module_menu/assets/images/nutrition_calcium.png": "559947dd2802c0dfe3349990ddb8d460",
"assets/packages/module_menu/assets/images/tc_menu_detail_share_my_icon.png": "c7b2f03d83cf796d3252001a43c19c27",
"assets/packages/module_menu/assets/images/tc_search_rank_10.png": "3d0d9872c88accb0dade353e64b9efe4",
"assets/packages/module_menu/assets/images/tc_search_goodsaddIcon.png": "e3253cf9f5627a2b119342f0f0a66288",
"assets/packages/module_menu/assets/images/setmenu_up.png": "207bbe018b721751f9db4d69d14ce112",
"assets/packages/module_menu/assets/images/nutrition_dietaryFiber.png": "0e90acaf2b8fd16b2fc985888f7cc4ab",
"assets/packages/module_menu/assets/images/nutrition_vitaminB2.png": "cf209fa07e0a9790de6ece9734e3a022",
"assets/packages/module_menu/assets/images/tc_menu_detail_score_half.png": "04dde00d4233cc80661bb653904bc6ff",
"assets/packages/module_menu/assets/images/nutrition_vitaminC.png": "dda4e73b12c5e7afe69b9903c0685915",
"assets/packages/module_menu/assets/images/menu_category_down_icon.webp": "68337e59f3f241a41fd848dd9cc59e54",
"assets/packages/module_menu/assets/images/nutrition_na.png": "036ba59ed1494597dc602d8c05bb378b",
"assets/packages/module_menu/assets/images/tc_menu_detail_collection_icon.png": "9458e37612641d72bddcf27a8e406f28",
"assets/packages/module_menu/assets/images/nutrition_protein.png": "275261454e66d04e6c947bfbfa8ad842",
"assets/packages/module_menu/assets/images/menu_search_back.png": "caed8e20d1dad02e99736d91afb4dcf1",
"assets/packages/module_menu/assets/images/nutrition_vitaminB1.png": "abdebb8873d9f09088d291bb9b72349d",
"assets/packages/module_menu/assets/images/menu_rank_3.webp": "9aca3ba22f6a22ee3da70f5a469756fb",
"assets/packages/module_menu/assets/images/nutrition_vitaminA.png": "884ad6fa635cdfe604c081d5701b5759",
"assets/packages/module_menu/assets/images/nutrition_vitaminE.png": "f11fe9f13b8f5c1019fe216616ac2efa",
"assets/packages/module_menu/assets/images/nutrition_vitaminD.png": "10060e6735726c86d6a69639ca4bde22",
"assets/packages/module_menu/assets/images/menu_rank_2.webp": "30b723a838b3fe185ee114f1fe1ec41e",
"assets/packages/module_menu/assets/images/menu_rank_bottom.webp": "2074b3271373431a0beaefd66fa6db4c",
"assets/packages/module_menu/assets/images/menu_star_yellow.webp": "1d8d2eefe192e1468d34658f92a6f582",
"assets/packages/module_menu/assets/images/nutrition_vitaminB6.png": "5d05467da476d80b714a6fedd7f04d6c",
"assets/packages/module_menu/assets/images/tc_search_Vip_icon.png": "3e857d13b58b8992d6df81b0ae745c1a",
"assets/packages/module_menu/assets/images/menu_menuresult_scrimg.png": "f972362a33e302bf8c59223ee1e6fd76",
"assets/packages/module_menu/assets/images/tc_menu_detail_segement_bg2.png": "f28c1290b8487af903c309c249ed9dba",
"assets/packages/module_menu/assets/images/nutrition_ferrum.png": "5a47d2b2521c15e12520a7bab7be74d3",
"assets/packages/module_menu/assets/images/tc_menu_detail_fire_icon.png": "21263651a43bf0035e551f4191c115a0",
"assets/packages/module_menu/assets/images/tc_search_shoppingcaricon.png": "4c56f2deae555cd5b7d7f90c363370f7",
"assets/packages/module_menu/assets/images/nutrition_folate.png": "ed71c21e5c53e8426d5db940de5e944c",
"assets/packages/module_menu/assets/images/tc_search_rank_9.png": "621b14260a2684fb96eff9d95d56fc5d",
"assets/packages/module_menu/assets/images/tc_search_pushicon.png": "a994afe74548804b92a2d7c6b9448693",
"assets/packages/module_menu/assets/images/tc_menu_detail_plan_icon.png": "658411857275cde4b7420299271a42c5",
"assets/packages/module_menu/assets/images/nutrition_calories.png": "c8b055a4cd4de3bf1b8ec58ccee96a0c",
"assets/packages/module_menu/assets/images/tc_menu_detail_more_arrow.png": "e9381c8547028b10b0f5c01ba34ce3e9",
"assets/packages/module_menu/assets/images/menu_share_icon.webp": "7b24476afaa259962cec76434a707765",
"assets/packages/module_menu/assets/images/tc_search_rank_8.png": "561a487582326b8784f93ba14918de7d",
"assets/packages/module_menu/assets/images/menu_pagecontrol_selected.webp": "d8c84c31c493ebd8ec8eba0d3612c123",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e0e3fea1b57f21bc3c4fa3e913ca6b4d",
"assets/fonts/MaterialIcons-Regular.otf": "29afcf6e41bffedf49009cbe24fd283e",
"assets/assets/images/loading/common_loading.png": "62bbfeaf43d5fea0091d2bdfe9042d19",
"assets/assets/images/launch_image.webp": "8bcd66d64afd715874144796991968b8",
"assets/assets/images/bg_splash.webp": "a7b65d804955f0dfecd346e515773976",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
