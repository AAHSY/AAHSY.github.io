/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/08/26/git学习/back.png","82f0f6df555bcc8a392e294b6e77b87b"],["/2022/08/26/git学习/index.html","ec0238e6875d212fb93632e1c5bf8393"],["/2022/09/08/vue适配PC端屏幕自适应/back.png","82f0f6df555bcc8a392e294b6e77b87b"],["/2022/09/08/vue适配PC端屏幕自适应/index.html","dfa111838dcc1b73dcd0122e60be3b8b"],["/2022/09/09/React-Router/index.html","3c9d8594965d3f3b0fc98a18b0513783"],["/2022/09/10/react-hooks-路由/index.html","f8e5df77e40f616cbee3ef38e41b505e"],["/2022/09/11/react-router-dom-路由重定向/index.html","513597a7700aa169004ff8ac1a933142"],["/2022/09/11/react中redux和react-redux使用/index.html","7bd72e56caf780f8acdb6ac28c6565f9"],["/2022/09/13/BetterScroll/index.html","3722238d139dfdc36a5728e8c7b1a7ee"],["/2022/09/13/Rem移动端适配/index.html","03a93c5eb64bedc0f543686c873aa206"],["/2022/09/13/vite中postcss-px-to-viewport的使用/index.html","730ba689129c32e29394fa6837da8d02"],["/2022/09/14/TypeScript学习/index.html","32c5b423feed431e11b35fe3fc6faec3"],["/2022/09/25/Flask上传文件/2.png","14189474b788ef10194ae25d738a08d1"],["/2022/09/25/Flask上传文件/index.html","9dab5b055e5d07770b4aed938fa4da4b"],["/2022/10/02/SpringBoot-跨域/index.html","3cb6a5e73441de312c96a0db4e21a4c0"],["/2022/10/02/axios二次封装/index.html","bbe01c63f75c0010444c868a234506d9"],["/2022/10/02/springboot-md5实现加密解密登录注册/index.html","58423061f0940f64add480c77993e888"],["/2022/10/03/vue3-vite2中使用mock/index.html","d45b2be05bba4df066d780d7aed222ae"],["/2022/10/03/vue3-vite2中使用mock/index.png","6707d3b2d0b11c00f0e4004a0a596211"],["/2022/10/04/Konva-Vue绘画板/1.png","2834b87e2bab7bc0baaddc87947aa209"],["/2022/10/04/Konva-Vue绘画板/index.html","5c673a2e884840ef2b3face6c588f435"],["/2022/10/04/Websocket-io/index.html","84050a25ddc79d56c6996e49428fbbf0"],["/2022/10/04/websocket实现聊天室/index.html","d0bddeb728246fe5bc022b6601e81da2"],["/2022/10/06/ReactHooks总结/image-20221006151738686.png","97bd97b61336c4c7ec96e213fff51bc9"],["/2022/10/06/ReactHooks总结/index.html","1a253227660c8576ccb55d395657e7a4"],["/2022/10/08/vite-TS-打包/index.html","66f797b7286c78505b467211724ff76f"],["/2022/10/08/vite-跨域处理/index.html","4abad701b6ecc861d47ecb91f599b61e"],["/2022/10/12/express总结/index.html","fe9b10152e20dbc7686d3475d9f9334d"],["/2022/10/15/React学习笔记——Hooks中useStore、useDispatch和useSelector的基础介绍和使用-以及两者替代connect/index.html","d058cb64e9c0fbc8ad7277fdcade4d74"],["/2022/10/16/Django基本使用/image-20221016115902060.png","90abc470977b17ccc396a26005e3c4f8"],["/2022/10/16/Django基本使用/image-20221016120013616.png","4a72ad24cf9ffccc044dfed9d9ca1fd3"],["/2022/10/16/Django基本使用/image-20221016120051765.png","0af774aee04b2242ee093cf3b7bc77bd"],["/2022/10/16/Django基本使用/image-20221016120442175.png","94668c4aacd6e1f9b874fdf9c701574b"],["/2022/10/16/Django基本使用/image-20221016120511788.png","745d157a159021a9a70f704ef7959de5"],["/2022/10/16/Django基本使用/image-20221016120513355.png","745d157a159021a9a70f704ef7959de5"],["/2022/10/16/Django基本使用/image-20221016120608872.png","0a14e43beb9cd89e2ab761eb9d78e05c"],["/2022/10/16/Django基本使用/image-20221016120648025.png","a1d6a72734a627295048d715428bd518"],["/2022/10/16/Django基本使用/index.html","2777d0497262b2231f91b1c786995af0"],["/2022/11/19/MybatisPlus配置·1·/index.html","ddcc852d06fb4059ba4c04b69aeebc20"],["/2022/11/19/SpingBoot常用依赖/index.html","9985513ebe9ab3aab736d9903b7be031"],["/2022/11/19/SpringBoot-Aop接口和缓存接口配置/index.html","809cd1cf207c2892cbcc82b1f61d22b9"],["/2022/11/19/SpringBoot-常用工具类/image-20221119095558064.png","5fff5900513a0c8da24c275d9b96cddd"],["/2022/11/19/SpringBoot-常用工具类/image-20221119095704687.png","f93d5c0b57a44c36e8181c1f81e9f67f"],["/2022/11/19/SpringBoot-常用工具类/index.html","9ef7ff8764cb7893e0b476927d284fe2"],["/2022/11/19/SpringBoot了拦截器/index.html","fdc539d3cdf322ba092e54ec212bd441"],["/2022/11/19/SpringBoot统一封装返回类型/index.html","e8fcdafdc6df43113855c993f369da10"],["/2022/11/19/SpringBoot统一错误拦截器/index.html","1cc9c9e65ee930e3e15e5a6bd3597a8a"],["/2022/11/20/SpringBoot后端代码生成器/image-20221120215157858.png","d8e8ca4835afe70463f688e6b53e6013"],["/2022/11/20/SpringBoot后端代码生成器/index.html","a0d2787bf02b90f45c1e9cd0032618c3"],["/2022/12/05/SpringBoot-Aop注解/index.html","cf9c8fe00d70882846d665a901dbc963"],["/2022/12/05/SpringBoot定时任务/index.html","a5bcf269ccdf322858a8efda35e1a0dc"],["/2022/12/05/SpringBoot統一异常处理/index.html","ca24d093277fba0d7f2473e2b890bd3a"],["/2022/12/25/码神之路博客总结/image-20221225202235178.png","fab8e22b04431a8e4f693210edcc6829"],["/2022/12/25/码神之路博客总结/image-20221225202259020.png","ac9d70a2eafb373fff14e8d9318ef833"],["/2022/12/25/码神之路博客总结/image-20221225202703657.png","c00f7aee1536f7e2b1628c53cc19ea05"],["/2022/12/25/码神之路博客总结/image-20221225202804542.png","1b9ec0d217f570e71a4f46f8deccc21d"],["/2022/12/25/码神之路博客总结/image-20221225202843248.png","a8306f0eee7a6d609b411e8d7794e9c5"],["/2022/12/25/码神之路博客总结/image-20221225204254472.png","50d15bf7f735da7ceae27d32a878e52d"],["/2022/12/25/码神之路博客总结/image-20221225204534337.png","6b466d173593a57204ec79fad46a72d8"],["/2022/12/25/码神之路博客总结/image-20221225204609900.png","4258e320440acad1361739531439b0ba"],["/2022/12/25/码神之路博客总结/image-20221225204823415.png","8e302a66595bec5c616038fe780a137e"],["/2022/12/25/码神之路博客总结/image-20221225204825402.png","8e302a66595bec5c616038fe780a137e"],["/2022/12/25/码神之路博客总结/image-20221225210844864-16719737263501.png","c58121b16bd172d125c8325dcee10ba5"],["/2022/12/25/码神之路博客总结/image-20221225210844864.png","c58121b16bd172d125c8325dcee10ba5"],["/2022/12/25/码神之路博客总结/image-20221225211811963.png","00c9a379da9070606d4df4b8bb4dc9c5"],["/2022/12/25/码神之路博客总结/image-20221225211918348.png","4371be6535724ea335cab0a397ba5bf9"],["/2022/12/25/码神之路博客总结/image-20221225211937460.png","9d3d3707839c97245a01ec11ee4fe958"],["/2022/12/25/码神之路博客总结/image-20221225211950182-16719743913003.png","c77be996a8ce8c52305d5b2259a85469"],["/2022/12/25/码神之路博客总结/image-20221225211950182.png","c77be996a8ce8c52305d5b2259a85469"],["/2022/12/25/码神之路博客总结/image-20221225212226550.png","5ac16be5216b81b022bbb7f5761533b0"],["/2022/12/25/码神之路博客总结/image-20221225212241175-16719745618366.png","9bf2c927b98c424f14dc5a1f3e6a2540"],["/2022/12/25/码神之路博客总结/image-20221225212241175.png","9bf2c927b98c424f14dc5a1f3e6a2540"],["/2022/12/25/码神之路博客总结/index.html","e9828d3f0e76988d4640cb7667d88ccd"],["/404.html","76a476f050ec0ce3f1ea19bbdd78f234"],["/archives/2022/08/index.html","820191f4b736fdfd75ae141220b50043"],["/archives/2022/09/index.html","aa822ae8c3d3b4ffaff211db31a6b4ac"],["/archives/2022/10/index.html","1c75fe467deaab41b1f2d432f9687d90"],["/archives/2022/10/page/2/index.html","24d2577875a4a435c022ff4e044101bc"],["/archives/2022/11/index.html","5376b876935691e446a8a3ec36ac920d"],["/archives/2022/12/index.html","3223aca3cafa720b6cc11d6e9cafb4f9"],["/archives/2022/index.html","8b31cb38a973aa5e657a9a58175a8957"],["/archives/2022/page/2/index.html","b7bc28eb3f2631db1c3e6949c3a75e6f"],["/archives/2022/page/3/index.html","04d6597ca0cffe598697e7578b7c016c"],["/archives/2022/page/4/index.html","48de998d0560a4b388a148889ae3cd12"],["/archives/index.html","7a812fdae1877c00422062e2d0456a82"],["/archives/page/2/index.html","4bdaab33fe24f73a26e1e67290f04308"],["/archives/page/3/index.html","b14e6b016937048b5dfb3f279820a80c"],["/archives/page/4/index.html","c9ae04f801c3013dff8ee5f37a29d8f9"],["/categories/Flask/index.html","8c7aefafbeb203a86d3bddf6c858f8c1"],["/categories/Node/index.html","bf2a19f14d840dbddcd331335ef96d7f"],["/categories/Python/index.html","566ef5f1ddbfbb877cc930a12dd66a4b"],["/categories/React/index.html","dad95a5541cc6967cc36445bd7af7b78"],["/categories/SpringBoot/index.html","ca4a6d583ead3f593853e2aecafbbe54"],["/categories/SpringBoot/page/2/index.html","7df6ef8f6879a2e2162cfecdc3dad7c5"],["/categories/Vue/index.html","788a4ef70b7a000130f502a64ae18c2e"],["/categories/WebSocket/index.html","b04cc2dc70ea1941f6a9b62fcba79ece"],["/categories/index.html","ec5ddbf1eb6b2a53e4870d229cbc4f89"],["/categories/封装/index.html","927240ecaf319dc4f9ed053aa50443ce"],["/categories/总结/index.html","de68a9d84bc6ce6aa0534cd4914e4d67"],["/categories/框架/index.html","9841ba276affe995cea5daa62d3b32a8"],["/categories/部署/index.html","456c327505edcbeb10aa1ec1f3aa079e"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/img/10.jpg","1004572919c8817cc824d571396602b4"],["/img/12.jpg","bb2358961731fa2fda5649b8d7511371"],["/img/13.jpg","07ff3ed8a39eff84e9327fa49d87fd8b"],["/img/14.jpg","7cd22555ad1abbe58e110f0745089bf7"],["/img/15.jpg","4d91944844144aeb9824c4558ee74434"],["/img/16.jpg","dc5eda37f0dc2990c81107be154c4b29"],["/img/17.jpg","765f9bbe3f40c53eee23796d39286403"],["/img/18.jpg","9db77f9b3c9a05a9349e8c9e9044d052"],["/img/19.jpg","7f733d7b23bba8e2b95f1769cd736dab"],["/img/2.jpg","3aed9534ba261b938d0145dbc9e4ab22"],["/img/20.jpg","47486941e0c432321ea89aa3efa9deeb"],["/img/21.jpg","0a153f6814517b1b04344bc32bc22221"],["/img/22.jpg","ed4d1942fed718bcced05fd4e5025d27"],["/img/23.jpg","c7fa1820be6ef1c6732505ebf446b85a"],["/img/24.jpg","05ea52adc6250ccde5071d3ea6c795fe"],["/img/25.jpg","734a92119013697bb9bd170bac8fb074"],["/img/26.png","d13a761476bfe1e539efcd0b703f81e9"],["/img/27.jpg","81dbdc8ca31a2f0bcbc4b87d18b2a47d"],["/img/28.png","5bce97b9901c35069fb629a71faecb46"],["/img/29.jpg","ef09520d0d247855863d22afb2439b0e"],["/img/3.png","a71a7908fc6ef92323cd763849b42d79"],["/img/30.jpg","d8e1c695f6f11a6ba6e1d9c465a541c6"],["/img/31.jpg","12f931d5428708feb6a4e28bb9921e26"],["/img/32.jpg","db47363c2ad8ab0225ec737601d17a34"],["/img/33.jpg","a6b80745b0432c293fb3bb406736f97d"],["/img/34.jpg","ffde7ff5e016b8481b8449ddaf9d6ceb"],["/img/35.jpg","79380660d19cf83ada44823d8224f25b"],["/img/36.jpg","21cface9b747f95235a36e661528af12"],["/img/37.jpg","dd1a5646ae2baf54018c75205f62b81e"],["/img/38.png","af4f8d4f18029e32e873b7a2a0da30a8"],["/img/39.jpg","7fe90391e81dbd5eedd7df38036e6a44"],["/img/4.jpg","a1b9acf61d91adb3298f38bcb4fec59b"],["/img/40.png","83944bb9479f0604ad59506f35f6022d"],["/img/41.jpg","4a4df457a1a6fb4700c71497fe2ca213"],["/img/42.png","b1b19a65aa8088837d8ede8f4bd7826c"],["/img/44.jpg","0639ea57614cfdf33bd77e991454fa82"],["/img/45.jpg","b580b2e91d45b2bfdd5cfb82afd05a15"],["/img/5.png","73b8307b2db44c617f4e8515ce67dd39"],["/img/6.jpg","72ce956143db82a67eadd5f479da2ffc"],["/img/7.png","6d6f2052676bdfd4f15d303450e20318"],["/img/8.jpg","d8fa7648483d15e606a22ed4b05ecf9e"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","c41101f1eda4a739e08806ad12066d52"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/fireworks.js","484ce9d6938815a83af6b77e7d6398b5"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/snow.js","3ee8a018bf3ff4eb1257619b7126b60b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/links/index.html","d781fde0f53312f247773a88ab11f20b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b501886e17643e1616d16f39a95cc3c5"],["/page/3/index.html","ccaecd6fdcf571e2eba302a3aa1ecfc4"],["/page/4/index.html","9494ca73810c3a3a49c7ca9a0be4ab5d"],["/sw-register.js","753c3e233324e161fa00ae1d5332ab65"],["/tags/SpringBoot/index.html","e533bb18dcd852e44bf9c011e476c22b"],["/tags/Vue/index.html","972eec089c5873aab013835ca1fe9804"],["/tags/django/index.html","33b976c2c197754ddfda028320c2e24e"],["/tags/express/index.html","8ad4a442bd5513d4dc38d246a0327941"],["/tags/git/index.html","76cfbc5b2466f789321b9fcdb6b4c42e"],["/tags/hooks/index.html","00399d64f45ed08a4ec243c34dea2a15"],["/tags/index.html","93c20709a79bd62580a3e284548b158a"],["/tags/java/index.html","decf7ec25308eb59b2845ae8aaab423a"],["/tags/konva/index.html","3bc9099a3bf70eb8df2b2c584a5f5599"],["/tags/mock/index.html","79a8441830ce0d03687652af392f020d"],["/tags/总结/index.html","62e368981a61f6c13c09748e3ada4065"],["/tags/插件/index.html","42aad5f682346f0880a9fd97952a4ef1"],["/tags/状态管理/index.html","d45b60bb5f208772a020ef137911f621"],["/tags/规范化/index.html","ec701053212a649e2e2886ffbf2baf84"],["/tags/路由/index.html","6f783e0a7978489aecb740432bf44bd6"],["/tags/适配/index.html","7eaedc68bb4a1277617f10959c683722"],["/tags/配置/index.html","921e168f666a36c0deaeb3fa3284d33a"]];
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
