/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/26/git学习/back.png","82f0f6df555bcc8a392e294b6e77b87b"],["/2022/08/26/git学习/index.html","e3017ae57769791fa0563a9cf7f0e044"],["/2022/09/08/vue适配PC端屏幕自适应/back.png","82f0f6df555bcc8a392e294b6e77b87b"],["/2022/09/08/vue适配PC端屏幕自适应/index.html","b8dc39eef4a99cf3fdea8a57e2a9556c"],["/2022/09/09/React-Router/index.html","15623213df98e1c0d8178560180135ff"],["/2022/09/10/react-hooks-路由/index.html","4bd3918cedbfa08aae6de401b33ae1a8"],["/2022/09/11/react-router-dom-路由重定向/index.html","86fc1dd2f498b260e177b24eaaf2739d"],["/2022/09/11/react中redux和react-redux使用/index.html","d8c92f7dc5a8d1581d1f8aeaccddd23c"],["/2022/09/13/BetterScroll/index.html","e7f429e428001f1a66dd6b0a2a3ac10b"],["/2022/09/13/Rem移动端适配/index.html","e7c103dcd0d9cf312f713f94280a9211"],["/2022/09/13/vite中postcss-px-to-viewport的使用/index.html","62b0142c823f01fcfe510794cbc19c57"],["/2022/09/14/TypeScript学习/index.html","49bd05e0f991b144a5a85851a48b5e6f"],["/2022/09/25/Flask上传文件/2.png","14189474b788ef10194ae25d738a08d1"],["/2022/09/25/Flask上传文件/index.html","6038c0020e2ab4da6ef44748ad9379e5"],["/2022/10/02/SpringBoot-跨域/index.html","75ef1805a105d7a5b1d5cb72e224ec6b"],["/2022/10/02/axios二次封装/index.html","5fb875719e847e301bdcd1ababfc5887"],["/2022/10/02/springboot-md5实现加密解密登录注册/index.html","0a5ab423379484189d7b47d0db4cb242"],["/2022/10/03/vue3-vite2中使用mock/index.html","0778688feafda1d906036b1796b339e2"],["/2022/10/03/vue3-vite2中使用mock/index.png","6707d3b2d0b11c00f0e4004a0a596211"],["/2022/10/04/Konva-Vue绘画板/1.png","2834b87e2bab7bc0baaddc87947aa209"],["/2022/10/04/Konva-Vue绘画板/index.html","951c51a7e11a2e1da45e2ac7210a1365"],["/2022/10/04/Websocket-io/index.html","b82a652b52dcbb4f13560c3f169830ef"],["/2022/10/04/websocket实现聊天室/index.html","38b0fa8856a0fbcc74878337a87ed98c"],["/2022/10/06/ReactHooks总结/image-20221006151738686.png","97bd97b61336c4c7ec96e213fff51bc9"],["/2022/10/06/ReactHooks总结/index.html","0b29134da2792b52dc5f6e322c3ffbba"],["/2022/10/08/vite-TS-打包/index.html","c96228b3b152e573ebd1304bcc8d6097"],["/2022/10/08/vite-跨域处理/index.html","44f82099999bf9cfc84b00a36d6ce795"],["/2022/10/12/express总结/index.html","7f80d2708aa1fb41d710112d9a4b75bc"],["/2022/10/15/React学习笔记——Hooks中useStore、useDispatch和useSelector的基础介绍和使用-以及两者替代connect/index.html","b435580439afe914c658efb8ad40b760"],["/2022/10/16/Django基本使用/image-20221016115902060.png","90abc470977b17ccc396a26005e3c4f8"],["/2022/10/16/Django基本使用/image-20221016120013616.png","4a72ad24cf9ffccc044dfed9d9ca1fd3"],["/2022/10/16/Django基本使用/image-20221016120051765.png","0af774aee04b2242ee093cf3b7bc77bd"],["/2022/10/16/Django基本使用/image-20221016120442175.png","94668c4aacd6e1f9b874fdf9c701574b"],["/2022/10/16/Django基本使用/image-20221016120511788.png","745d157a159021a9a70f704ef7959de5"],["/2022/10/16/Django基本使用/image-20221016120513355.png","745d157a159021a9a70f704ef7959de5"],["/2022/10/16/Django基本使用/image-20221016120608872.png","0a14e43beb9cd89e2ab761eb9d78e05c"],["/2022/10/16/Django基本使用/image-20221016120648025.png","a1d6a72734a627295048d715428bd518"],["/2022/10/16/Django基本使用/index.html","e1aaf6e5d7e7a95fa28f0068c5a78f64"],["/2022/11/19/MybatisPlus配置·1·/index.html","67d8c24cb3cee073ef5f197adab8c7d1"],["/2022/11/19/SpingBoot常用依赖/index.html","a4614f241428915b6605490a3c3e581b"],["/2022/11/19/SpringBoot-Aop接口和缓存接口配置/index.html","fbc70cbb00492305f971e270bf2db74a"],["/2022/11/19/SpringBoot-常用工具类/image-20221119095558064.png","5fff5900513a0c8da24c275d9b96cddd"],["/2022/11/19/SpringBoot-常用工具类/image-20221119095704687.png","f93d5c0b57a44c36e8181c1f81e9f67f"],["/2022/11/19/SpringBoot-常用工具类/index.html","97e2df1b33f786c2176849fb2965d6f6"],["/2022/11/19/SpringBoot了拦截器/index.html","5f5f8b68187e07b38adf0329a1024c34"],["/2022/11/19/SpringBoot统一封装返回类型/index.html","f0e9fe5ba1c1c54a0629d25d5eea09e0"],["/2022/11/19/SpringBoot统一错误拦截器/index.html","0e6665eb6ac08ab3f74829719171ced3"],["/2022/11/20/SpringBoot后端代码生成器/image-20221120215157858.png","d8e8ca4835afe70463f688e6b53e6013"],["/2022/11/20/SpringBoot后端代码生成器/index.html","f83e3f024faa33012cfd1174cf1d21cd"],["/2022/12/05/SpringBoot-Aop注解/index.html","ae04a6b2eae0430d1010017a7f9b34fb"],["/2022/12/05/SpringBoot定时任务/index.html","61d544857301bf0cb67861705af06161"],["/2022/12/05/SpringBoot統一异常处理/index.html","360469846c5fc7e35809601474966bea"],["/2022/12/25/码神之路博客总结/image-20221225202235178.png","fab8e22b04431a8e4f693210edcc6829"],["/2022/12/25/码神之路博客总结/image-20221225202259020.png","ac9d70a2eafb373fff14e8d9318ef833"],["/2022/12/25/码神之路博客总结/image-20221225202703657.png","c00f7aee1536f7e2b1628c53cc19ea05"],["/2022/12/25/码神之路博客总结/image-20221225202804542.png","1b9ec0d217f570e71a4f46f8deccc21d"],["/2022/12/25/码神之路博客总结/image-20221225202843248.png","a8306f0eee7a6d609b411e8d7794e9c5"],["/2022/12/25/码神之路博客总结/image-20221225204254472.png","50d15bf7f735da7ceae27d32a878e52d"],["/2022/12/25/码神之路博客总结/image-20221225204534337.png","6b466d173593a57204ec79fad46a72d8"],["/2022/12/25/码神之路博客总结/image-20221225204609900.png","4258e320440acad1361739531439b0ba"],["/2022/12/25/码神之路博客总结/image-20221225204823415.png","8e302a66595bec5c616038fe780a137e"],["/2022/12/25/码神之路博客总结/image-20221225204825402.png","8e302a66595bec5c616038fe780a137e"],["/2022/12/25/码神之路博客总结/image-20221225210844864-16719737263501.png","c58121b16bd172d125c8325dcee10ba5"],["/2022/12/25/码神之路博客总结/image-20221225210844864.png","c58121b16bd172d125c8325dcee10ba5"],["/2022/12/25/码神之路博客总结/image-20221225211811963.png","00c9a379da9070606d4df4b8bb4dc9c5"],["/2022/12/25/码神之路博客总结/image-20221225211918348.png","4371be6535724ea335cab0a397ba5bf9"],["/2022/12/25/码神之路博客总结/image-20221225211937460.png","9d3d3707839c97245a01ec11ee4fe958"],["/2022/12/25/码神之路博客总结/image-20221225211950182-16719743913003.png","c77be996a8ce8c52305d5b2259a85469"],["/2022/12/25/码神之路博客总结/image-20221225211950182.png","c77be996a8ce8c52305d5b2259a85469"],["/2022/12/25/码神之路博客总结/image-20221225212226550.png","5ac16be5216b81b022bbb7f5761533b0"],["/2022/12/25/码神之路博客总结/image-20221225212241175-16719745618366.png","9bf2c927b98c424f14dc5a1f3e6a2540"],["/2022/12/25/码神之路博客总结/image-20221225212241175.png","9bf2c927b98c424f14dc5a1f3e6a2540"],["/2022/12/25/码神之路博客总结/index.html","0ee6e8035252b1ed3a9aa59a59d4bde1"],["/2023/01/11/SpringCloud-Eureka/image-20230111174036779.png","75d6eed2cf9d4b460861e2b839d1b2ea"],["/2023/01/11/SpringCloud-Eureka/image-20230111174657919.png","31bcb4e25bb5eacc7fb7d84bf0c76c62"],["/2023/01/11/SpringCloud-Eureka/index.html","bcb2e4fe4550e8996e2f9ff73bea1f32"],["/2023/01/12/SpringCloud实用篇01/1525620483637.png","60e5fa18d004190d4dadebfb16b93550"],["/2023/01/12/SpringCloud实用篇01/1525620787090.png","d8822cdf96eb97a548510c7a89d1aced"],["/2023/01/12/SpringCloud实用篇01/1525620835911.png","f36ce91f7b433c380e42ee9c51c870f8"],["/2023/01/12/SpringCloud实用篇01/1525622652849.png","8d1b54b3820717501a81564e1a32514d"],["/2023/01/12/SpringCloud实用篇01/1525622699666.png","08de5bce3975126535d16d63bc30a700"],["/2023/01/12/SpringCloud实用篇01/1525622754316.png","e773db072f2ed8714ba5d21455b0276f"],["/2023/01/12/SpringCloud实用篇01/1544361421671.png","07ef505acc94d07cb077e7547ec44273"],["/2023/01/12/SpringCloud实用篇01/image-20210713202807818.png","7ca2e0e863b757411ee7ba6b2cea5273"],["/2023/01/12/SpringCloud实用篇01/image-20210713203124797.png","ea41782e54c4d547d9f3fd949b4c34f8"],["/2023/01/12/SpringCloud实用篇01/image-20210713203753373.png","bf4a4b520202b2f3e023c26a62acf682"],["/2023/01/12/SpringCloud实用篇01/image-20210713204155887.png","c2272f446e69ce5a7c93be43e7d57b6d"],["/2023/01/12/SpringCloud实用篇01/image-20210713205003790.png","f2ae905c9aabf8c200f76b7853445d3f"],["/2023/01/12/SpringCloud实用篇01/image-20210713210800950.png","809884ea5b60c21cffc13f9e0f90bfc5"],["/2023/01/12/SpringCloud实用篇01/image-20210713211009593.png","d4fc004ce78ba3019df6249b7bad0ae7"],["/2023/01/12/SpringCloud实用篇01/image-20210713211417049.png","615ba507d1a8f7f5ea07cbe5fe8d5d2c"],["/2023/01/12/SpringCloud实用篇01/image-20210713211550169.png","1d17cdb7935a334d6a72f1113f6cc235"],["/2023/01/12/SpringCloud实用篇01/image-20210713211657319.png","b977bf990040639d895987df0a1f7c79"],["/2023/01/12/SpringCloud实用篇01/image-20210713211814094.png","693cf885b5138391046cf0bfe634ea2e"],["/2023/01/12/SpringCloud实用篇01/image-20210713212336185.png","d099c550c9a638ec0404ea0ebb801355"],["/2023/01/12/SpringCloud实用篇01/image-20210713212349272.png","4da3b23409e80e352f432871208ec43b"],["/2023/01/12/SpringCloud实用篇01/image-20210713212513324.png","8ebc08f6d092830f92f9ebb9e49f9815"],["/2023/01/12/SpringCloud实用篇01/image-20210713212656887.png","605ea50d3cbad574a1a3e7c041d22622"],["/2023/01/12/SpringCloud实用篇01/image-20210713212749575.png","27d167430bfd3e1c78b7f48de94a3115"],["/2023/01/12/SpringCloud实用篇01/image-20210713212901725.png","dccdc0e14c220cc1b46b4d784d3308d8"],["/2023/01/12/SpringCloud实用篇01/image-20210713213146089.png","296f386cd43083b853f94104b6d62fdc"],["/2023/01/12/SpringCloud实用篇01/image-20210713213213075.png","25998742f1321ff82c2f3e35ca999170"],["/2023/01/12/SpringCloud实用篇01/image-20210713213312278.png","e205f616f41a846213854aaeb1121ba6"],["/2023/01/12/SpringCloud实用篇01/image-20210713213959569.png","dd3a189662d124b874064f81c9e8f90b"],["/2023/01/12/SpringCloud实用篇01/image-20210713214404481.png","0c321504e488413c230470633c4e157a"],["/2023/01/12/SpringCloud实用篇01/image-20210713214925388.png","76b879c962eeda801c8e85fe46a5518d"],["/2023/01/12/SpringCloud实用篇01/image-20210713220104956.png","1367a471ec4017e407fd3382fee9ad54"],["/2023/01/12/SpringCloud实用篇01/image-20210713220509769.png","580d97e306210b29ce8c52f9be9e7a7b"],["/2023/01/12/SpringCloud实用篇01/image-20210713220605881.png","438bd7fc59c11f80a925770477871bc2"],["/2023/01/12/SpringCloud实用篇01/image-20210713220736408.png","87d187781880cc66f8eeb79af7ecb5eb"],["/2023/01/12/SpringCloud实用篇01/image-20210713220857396.png","9e2ff925d5eb1036e0dfae5f844e39b5"],["/2023/01/12/SpringCloud实用篇01/image-20210713221339022.png","3f28c642189ae135932cc9284e02dae8"],["/2023/01/12/SpringCloud实用篇01/image-20210713222157190.png","1c6f2cf6191c4c3e0a8b1c747eaa53c5"],["/2023/01/12/SpringCloud实用篇01/image-20210713222656562.png","51b65dd2583be46a28056af7d27e14e9"],["/2023/01/12/SpringCloud实用篇01/image-20210713222757702.png","525d9646504a3ed1d72c9720f9611f60"],["/2023/01/12/SpringCloud实用篇01/image-20210713222841951.png","4df1ed18533eb36a85753a8a7763ea87"],["/2023/01/12/SpringCloud实用篇01/image-20210713223041491.png","5994e7d1db84bebe7edd5326626a65a4"],["/2023/01/12/SpringCloud实用篇01/image-20210713223150650.png","f4e4b411de55a95bb2e1d7199a1bc849"],["/2023/01/12/SpringCloud实用篇01/image-20210713224049419.png","8f5661e906c480937e25feed11411678"],["/2023/01/12/SpringCloud实用篇01/image-20210713224245731.png","e51bc0b3a7a29a50aa453e07a04bd292"],["/2023/01/12/SpringCloud实用篇01/image-20210713224517686.png","0c7051d4632110e44b3f21afedfd819d"],["/2023/01/12/SpringCloud实用篇01/image-20210713224724673.png","a3414a08e662c83aba2e11d6f4e563bb"],["/2023/01/12/SpringCloud实用篇01/image-20210713225653000.png","4c64b5c63cacf639ee7d79576371cd9c"],["/2023/01/12/SpringCloud实用篇01/image-20210713230444308.png","142c8955b97e7053eec2d3ede6329d71"],["/2023/01/12/SpringCloud实用篇01/image-20210713231439607.png","eafb858e8e3360da0fbdbf221ffe50bd"],["/2023/01/12/SpringCloud实用篇01/image-20210713232522531.png","0c1c87e77cd81da681af07dacf6b0ba6"],["/2023/01/12/SpringCloud实用篇01/image-20210713232658928.png","9f26138fc9f1b0ebe07e266f127daca4"],["/2023/01/12/SpringCloud实用篇01/image-20210713232916215.png","f7fa2928eabe747c0e22e0d78b343e4e"],["/2023/01/12/SpringCloud实用篇01/image-20210713233528982.png","26978d78a000230a0eab9c17d4ca5818"],["/2023/01/12/SpringCloud实用篇01/image-20210713233727923.png","74a4c70a8eb07d3e84ea8d2eed634ac5"],["/2023/01/12/SpringCloud实用篇01/image-20210713235133225.png","4dd758c0cdf1e193b46659bb2677d132"],["/2023/01/12/SpringCloud实用篇01/image-20210713235235219.png","18b215fae44e6fe298f1116348b6da9f"],["/2023/01/12/SpringCloud实用篇01/image-20210714000101516.png","382dff096d300d81fa23757dc3b3fcf5"],["/2023/01/12/SpringCloud实用篇01/image-20210714000414781.png","158a77ed26af446e3803ee1d0ace1f6a"],["/2023/01/12/SpringCloud实用篇01/image-20210714000440143.png","696641e943c4366d5591acdf9e12389c"],["/2023/01/12/SpringCloud实用篇01/image-20210714000505928.png","9506994416bd8c7bd5a466267b660504"],["/2023/01/12/SpringCloud实用篇01/image-20210714000522913.png","42c42c38550f0921467f67250a66ed99"],["/2023/01/12/SpringCloud实用篇01/image-20210714000830703.png","e601f03b1d24f9c591ebf189104d2da4"],["/2023/01/12/SpringCloud实用篇01/image-20210714000837140.png","e7783d8d4ed7a7c436deac510d69381e"],["/2023/01/12/SpringCloud实用篇01/image-20210714000941256.png","1252aee00d7dd2e1924b90546a2612ea"],["/2023/01/12/SpringCloud实用篇01/image-20210714001728017.png","98fc233f44d67f00ec368970b45356c3"],["/2023/01/12/SpringCloud实用篇01/index.html","b5a30bd1059a3b3649a44859e9e89b45"],["/2023/01/12/SpringCloud实用篇02/L0iFYNF.png","d6c296709fed71f8af8eef822487c889"],["/2023/01/12/SpringCloud实用篇02/image-20210714164426792.png","6e4bc3743cc1d8d549da6ffbf0bbcde0"],["/2023/01/12/SpringCloud实用篇02/image-20210714164742924.png","43e7d6fa160e7ebefd727c7e33c29676"],["/2023/01/12/SpringCloud实用篇02/image-20210714164856664.png","360edf9533b2fec57d970d7369504abf"],["/2023/01/12/SpringCloud实用篇02/image-20210714170337448.png","574f91865c5407d6788e7894a17fcb18"],["/2023/01/12/SpringCloud实用篇02/image-20210714170449612.png","0d5e8b72569da777f70d39a9c705d692"],["/2023/01/12/SpringCloud实用篇02/image-20210714170845901.png","2a9764b8882ea454b8637dc7b23dfd87"],["/2023/01/12/SpringCloud实用篇02/image-20210714171036335.png","ec771a4870135d99594891b790b0706a"],["/2023/01/12/SpringCloud实用篇02/image-20210714171316124.png","62969639d5219f1b0da8beede914e48a"],["/2023/01/12/SpringCloud实用篇02/image-20210714173233650.png","1057886436ea2e6b15420c810370417c"],["/2023/01/12/SpringCloud实用篇02/image-20210714173324231.png","da988ef9e1cdc45e8ea08ecde026fa00"],["/2023/01/12/SpringCloud实用篇02/image-20210714173519963.png","cd0a1f6b185ceb9239869b305bf6010a"],["/2023/01/12/SpringCloud实用篇02/image-20210714173538538.png","8280418fe28996ba5d4029845c85cb4c"],["/2023/01/12/SpringCloud实用篇02/image-20210714173721309.png","3f0e0ccf4379e855541b321e8e1db931"],["/2023/01/12/SpringCloud实用篇02/image-20210714174313344.png","033fe92fc5b1fc67825c947722c47d03"],["/2023/01/12/SpringCloud实用篇02/image-20210714174424818.png","4f1d4f0bf94f7d98c7b174762023b513"],["/2023/01/12/SpringCloud实用篇02/image-20210714174623557.png","1543af65c65f306a13969a2c7fefa6f2"],["/2023/01/12/SpringCloud实用篇02/image-20210714174728042.png","d90869e538e1ed86aed121f296c03176"],["/2023/01/12/SpringCloud实用篇02/image-20210714174814204.png","d4ec81a21f07f876032e0629bc726305"],["/2023/01/12/SpringCloud实用篇02/image-20210714174918088.png","772548971c0d5c81b7993dcc4311d3c9"],["/2023/01/12/SpringCloud实用篇02/image-20210714175102524.png","7c5ca7c24d8b74ca359ce7f50dda9f0a"],["/2023/01/12/SpringCloud实用篇02/image-20210714175415087.png","27e12a1f7a9b04bc0c82a4728d881b2d"],["/2023/01/12/SpringCloud实用篇02/image-20210714185925910.png","33c55a31817bd17bc308e7a949ca4c66"],["/2023/01/12/SpringCloud实用篇02/image-20210714190041542.png","393b679cd8818ab05fd416809f9e5177"],["/2023/01/12/SpringCloud实用篇02/image-20210714190528450.png","075138c86116234c4b8890a656329054"],["/2023/01/12/SpringCloud实用篇02/image-20210714190542730.png","8a53d397ea368df40e0b78ae6adece85"],["/2023/01/12/SpringCloud实用篇02/image-20210714190640857.png","c3f5fd4be77ab0d3eeb8b3ba3577a950"],["/2023/01/12/SpringCloud实用篇02/image-20210714204557771.png","a97c37e8c357a0bb50e9bdc73aeeb1eb"],["/2023/01/12/SpringCloud实用篇02/image-20210714204656214.png","1a343762c291ec0c8a5c94042c4bf3ac"],["/2023/01/12/SpringCloud实用篇02/image-20210714205221970.png","a4932f25e59965e4b7ed9c84413f644b"],["/2023/01/12/SpringCloud实用篇02/image-20210714205623048.png","a49cf7ff395ea89725c421d58941d0a2"],["/2023/01/12/SpringCloud实用篇02/image-20210714210131152.png","fce6de5bc9c10f679ef78283a2e6446c"],["/2023/01/12/SpringCloud实用篇02/image-20210714210919458.png","6fdcb6fbacff22d98cf418eb3f14e73a"],["/2023/01/12/SpringCloud实用篇02/image-20210714211742956.png","2215d0743167eaf533a06ff41a05ee83"],["/2023/01/12/SpringCloud实用篇02/image-20210714211908341.png","dfd85df54183394d9dd8ea0cf789e0f1"],["/2023/01/12/SpringCloud实用篇02/image-20210714212312871.png","da01f48967f5e7f08c68ceacb2fd633d"],["/2023/01/12/SpringCloud实用篇02/image-20210714214041796.png","ea01023731c2868907f3fe83d09e41ac"],["/2023/01/12/SpringCloud实用篇02/image-20210714214228409.png","00e508d3dc1e6764557c7ed9c545ad82"],["/2023/01/12/SpringCloud实用篇02/image-20210714215713563.png","4f72bacc3398d2baad5514401f2c5d3f"],["/2023/01/12/SpringCloud实用篇02/image-20210714215832675.png","8483597d5caa5ea046181f2c11ebeb3a"],["/2023/01/12/SpringCloud实用篇02/index.html","9a68de2660a0d04a889b7ecff5e2b744"],["/404.html","585474d5bca524f45ffeab4ec507016b"],["/archives/2022/08/index.html","c1d6c8d776507e8cdf4d46cae36c4ca0"],["/archives/2022/09/index.html","3ba0db4cfacb19866f0d05b8ea41208e"],["/archives/2022/10/index.html","97d95f84c9485fa175a15f217b779158"],["/archives/2022/10/page/2/index.html","2c46aa2b662c04c082232282ce298c85"],["/archives/2022/11/index.html","953945263d8d9a6f91b83ef3a6f358eb"],["/archives/2022/12/index.html","56bff00181e08491e1aeb97d8effc213"],["/archives/2022/index.html","67f9a2242901b299921f3d33417d87f3"],["/archives/2022/page/2/index.html","7a47aae9f69b8c1606128dbd3451a143"],["/archives/2022/page/3/index.html","0dbfc53d90c6bbdb759ed59f7c3312c9"],["/archives/2022/page/4/index.html","d4263c9a831b569ba5346bd12a2c9c83"],["/archives/2023/01/index.html","e5400bead5ff2564f8ce3fe0fc968a11"],["/archives/2023/index.html","e54d9a5b8509b86120d33d9ad2c5b5d6"],["/archives/index.html","8a3ae495006977c3bcb61cded9e925a4"],["/archives/page/2/index.html","935ac7cdea23bc59954d7653c14a5c53"],["/archives/page/3/index.html","643f89b07fda8dbeb4bdd48a6a8a78cd"],["/archives/page/4/index.html","da7862a10495cd13356277dcc2c60f5c"],["/categories/Flask/index.html","6dd597766f3a0fc31b0f5715b541d225"],["/categories/Node/index.html","cdcdf35e0026103d2eb782983212e0cf"],["/categories/Python/index.html","37bbba23b95e0caf2d49146b0faa08a1"],["/categories/React/index.html","5bab5493920cd6797e0d12846c2fb6d7"],["/categories/SpringBoot/index.html","3935887abf9d49c3330390acdff9605c"],["/categories/SpringBoot/page/2/index.html","6191359a016463676538d5ea82220645"],["/categories/SpringCloud/index.html","2302c775fdd117efc489d81e7a5c33e3"],["/categories/Vue/index.html","f7da13ab1887bf138f2ddfe4d0ced8be"],["/categories/WebSocket/index.html","8c3e9e1522e6b3efd45e3071f0da7a38"],["/categories/index.html","811da2c20b46bc69ee85b37e8488d568"],["/categories/封装/index.html","cb1dc46e33f7ad3fb7079b5d6ecf2407"],["/categories/总结/index.html","d889bc71dcd4c63e46f89af06e835dd7"],["/categories/框架/index.html","402e426066f909b36b1a7e39ab63f798"],["/categories/部署/index.html","be4f4e6157c1a60e5f04279e26cc57a1"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/img/10.jpg","1004572919c8817cc824d571396602b4"],["/img/12.jpg","bb2358961731fa2fda5649b8d7511371"],["/img/13.jpg","07ff3ed8a39eff84e9327fa49d87fd8b"],["/img/14.jpg","7cd22555ad1abbe58e110f0745089bf7"],["/img/15.jpg","4d91944844144aeb9824c4558ee74434"],["/img/16.jpg","dc5eda37f0dc2990c81107be154c4b29"],["/img/17.jpg","765f9bbe3f40c53eee23796d39286403"],["/img/18.jpg","9db77f9b3c9a05a9349e8c9e9044d052"],["/img/19.jpg","7f733d7b23bba8e2b95f1769cd736dab"],["/img/2.jpg","3aed9534ba261b938d0145dbc9e4ab22"],["/img/20.jpg","47486941e0c432321ea89aa3efa9deeb"],["/img/21.jpg","0a153f6814517b1b04344bc32bc22221"],["/img/22.jpg","ed4d1942fed718bcced05fd4e5025d27"],["/img/23.jpg","c7fa1820be6ef1c6732505ebf446b85a"],["/img/24.jpg","05ea52adc6250ccde5071d3ea6c795fe"],["/img/25.jpg","734a92119013697bb9bd170bac8fb074"],["/img/26.png","d13a761476bfe1e539efcd0b703f81e9"],["/img/27.jpg","81dbdc8ca31a2f0bcbc4b87d18b2a47d"],["/img/28.png","5bce97b9901c35069fb629a71faecb46"],["/img/29.jpg","ef09520d0d247855863d22afb2439b0e"],["/img/3.png","a71a7908fc6ef92323cd763849b42d79"],["/img/30.jpg","d8e1c695f6f11a6ba6e1d9c465a541c6"],["/img/31.jpg","12f931d5428708feb6a4e28bb9921e26"],["/img/32.jpg","db47363c2ad8ab0225ec737601d17a34"],["/img/33.jpg","a6b80745b0432c293fb3bb406736f97d"],["/img/34.jpg","ffde7ff5e016b8481b8449ddaf9d6ceb"],["/img/35.jpg","79380660d19cf83ada44823d8224f25b"],["/img/36.jpg","21cface9b747f95235a36e661528af12"],["/img/37.jpg","dd1a5646ae2baf54018c75205f62b81e"],["/img/38.png","af4f8d4f18029e32e873b7a2a0da30a8"],["/img/39.jpg","7fe90391e81dbd5eedd7df38036e6a44"],["/img/4.jpg","a1b9acf61d91adb3298f38bcb4fec59b"],["/img/40.png","83944bb9479f0604ad59506f35f6022d"],["/img/41.jpg","4a4df457a1a6fb4700c71497fe2ca213"],["/img/42.png","b1b19a65aa8088837d8ede8f4bd7826c"],["/img/44.jpg","0639ea57614cfdf33bd77e991454fa82"],["/img/45.jpg","b580b2e91d45b2bfdd5cfb82afd05a15"],["/img/5.png","73b8307b2db44c617f4e8515ce67dd39"],["/img/6.jpg","72ce956143db82a67eadd5f479da2ffc"],["/img/7.png","6d6f2052676bdfd4f15d303450e20318"],["/img/8.jpg","d8fa7648483d15e606a22ed4b05ecf9e"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","6d14038010d0a5c877f86bab2ac3fe60"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/fireworks.js","484ce9d6938815a83af6b77e7d6398b5"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/snow.js","3ee8a018bf3ff4eb1257619b7126b60b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","8e1991ac0c86e0a6f466304d275ecef7"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d274e6ad67734e3ba5e9b1551d76fc52"],["/page/3/index.html","edf0e8ae19024da80cb1ba9ff7d1cadf"],["/page/4/index.html","c86582885b9041d87d9fca83599fdcd4"],["/sw-register.js","6c248bc68635f6642b925e9b93bd4cc1"],["/tags/SpringBoot/index.html","a4324e15429508a188286ffd3579d472"],["/tags/Vue/index.html","22efe328009c7d9bbd760db18353b254"],["/tags/django/index.html","9f2652e09a79bdb630f44b9fcc81b8fa"],["/tags/express/index.html","e481ddd375fcb2e452deb2b3690903f8"],["/tags/git/index.html","9ea12d4819a587d112bbbdc08528c400"],["/tags/hooks/index.html","ed43c6cbfe697b1194bbc639b511ddba"],["/tags/index.html","e1cf69e810648d72a1f3f716b40648ae"],["/tags/java/index.html","ea28f1c03917d6000f0101dbd32b9aa9"],["/tags/konva/index.html","6bfcbfd200337c58859ed353ad279099"],["/tags/mock/index.html","456959a1016b9101afffcf81983c8d57"],["/tags/总结/index.html","b387255318a7f39cad8e93c90f8fe9bf"],["/tags/插件/index.html","e06b1475a96c187ae5e205b044f7e608"],["/tags/状态管理/index.html","c82652c161bf41edc567a2d75570088f"],["/tags/规范化/index.html","e25ff8dbc79baf4869c0c632b9e69c08"],["/tags/路由/index.html","ed711883b6adf12638490cd344d98adf"],["/tags/适配/index.html","2edc84ee040a6c3bbacbfb6de9574c49"],["/tags/配置/index.html","8e946084be91e738a7790125ba165361"]];
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









/* eslint-enable */
