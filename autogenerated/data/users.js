"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("../models/user"));
var users = [
    new user_1.default(0, "Mike", "password", true, ''),
    new user_1.default(1, "Leha", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/2oh57aD0oSjrv847hVcutBzqQTX96-4lgItMXtTcUu19mWty9vrcIhvDpVF6kk-DWV4unqMmatkM1Y0DUpXwUy6-.jpg?size=100x0&quality=96&crop=66,66,368,368&ava=1"),
    new user_1.default(2, "Egor", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/RBOLRnjbWKM34H6UJfuqGxm9fKuOXnlyQKZjv2do50G0zut16xF1V6LXXii_lAHj-PzcSRgO.jpg?size=100x0&quality=96&crop=5,7,1067,1067&ava=1"),
    new user_1.default(3, "Roman", "password", true, "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/uRptmUr11NuWiJmmn9klurCOcLtW1G_aITyoNy_a_H1j59DaywgR8-KodEkMKYLlET0MNG0v_vdb55EJbrqhAmyd.jpg?size=100x0&quality=96&crop=529,88,1571,1571&ava=1"),
    new user_1.default(4, "Mamochka", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if2/laX1m4-J7EyVDRiAbeeLfv6OlQt9vLPK2oDUq1P88bLM49QTJOFN-HI3a23WoT8WG1T5nQLVbSJ7-xmQ-Lw1jcHH.jpg?size=100x0&quality=96&crop=708,440,733,733&ava=1"),
    new user_1.default(5, "Artem", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/_5fnulVEwgeqRjzP_Y1HT9shJnPspJR2pWMZxP99yLdL__nuvn-tpISqfHJemjbOpVbKzgf3.jpg?size=100x0&quality=96&crop=0,274,806,806&ava=1"),
    new user_1.default(6, "Arnold", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/uD9OTaHXTK2weBWPv0oaRXRUKkenkKIKPYjd3c1MIYa4vK9OjZliUjwDbNkYbrY9AONiDKnC.jpg?size=100x0&quality=96&crop=0,0,2047,2047&ava=1"),
    new user_1.default(7, "Slava", "password", true, "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/ig2/--6WUd6xtK_9Bp6UP2yWv8rf8wUnXQOOtoT4r5VCcnkYIeyX3YebSWyv6vgH7q4c6KX57_u7RZ4Pf6f82SKNDP4S.jpg?size=100x0&quality=96&crop=0,324,1620,1620&ava=1"),
    new user_1.default(8, "Ilya", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/dG5Pepcj9YHGKtZMATcXg-wEiAp4qiM6rdWMiB7TqDeXcyWSpu5lTtfWd1Go9Cx-grRCpEihDxonr5Rlzn4jhfDw.jpg?size=100x0&quality=96&crop=297,260,1154,1154&ava=1"),
    new user_1.default(9, "Vlad", "password", false, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/ig2/VGtWnc0-dvGbbinjCElNoLH6LLX2btgmpK-5X6RCsRXO8-yEvl4CSXibcVr2L5PKPE3F2lAjVtGYRXSpTtFcwUOd.jpg?size=100x0&quality=96&crop=0,313,1620,1620&ava=1"),
    new user_1.default(10, "Timurka", "password", true, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/nrS1p6sS8UD9I-NB2iUGlXi_QIO15Nd94fEHQPB8b_kXUyHMkHM23kmJEnkfeYYDrZzrEocH.jpg?size=100x0&quality=96&crop=224,190,338,338&ava=1"),
    new user_1.default(11, "Angelina", "password", false, "https://sun2.beltelecom-by-minsk.userapi.com/s/v1/if1/6EafUSnjkRA6GGXrfd3OU668wrYn25hKevk2-GUPPLfBdL9xp-ppORmX-hfJRImwA_E462-N.jpg?size=100x0&quality=96&crop=0,0,623,623&ava=1"),
    new user_1.default(12, "Aleksey", "password", false, "https://sun1.beltelecom-by-minsk.userapi.com/s/v1/if1/tDmbaBxIeDmI0NmuAZs7Rcvo7SkwM2d10tSU3MwnuScuBabunRnMDKt_whjPSVzdIHHxhjan.jpg?size=100x0&quality=96&crop=88,26,750,750&ava=1")
];
exports.default = users;
