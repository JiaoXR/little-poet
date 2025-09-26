// 古诗词数据库，包含诗词内容和拼音
const poemsData = [
    {
        id: 1,
        title: "静夜思",
        author: "李白",
        content: [
            {
                line: "床前明月光",
                characters: [
                    { char: "床", pinyin: "chuáng" },
                    { char: "前", pinyin: "qián" },
                    { char: "明", pinyin: "míng" },
                    { char: "月", pinyin: "yuè" },
                    { char: "光", pinyin: "guāng" }
                ]
            },
            {
                line: "疑是地上霜",
                characters: [
                    { char: "疑", pinyin: "yí" },
                    { char: "是", pinyin: "shì" },
                    { char: "地", pinyin: "dì" },
                    { char: "上", pinyin: "shàng" },
                    { char: "霜", pinyin: "shuāng" }
                ]
            },
            {
                line: "举头望明月",
                characters: [
                    { char: "举", pinyin: "jǔ" },
                    { char: "头", pinyin: "tóu" },
                    { char: "望", pinyin: "wàng" },
                    { char: "明", pinyin: "míng" },
                    { char: "月", pinyin: "yuè" }
                ]
            },
            {
                line: "低头思故乡",
                characters: [
                    { char: "低", pinyin: "dī" },
                    { char: "头", pinyin: "tóu" },
                    { char: "思", pinyin: "sī" },
                    { char: "故", pinyin: "gù" },
                    { char: "乡", pinyin: "xiāng" }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "春晓",
        author: "孟浩然",
        content: [
            {
                line: "春眠不觉晓",
                characters: [
                    { char: "春", pinyin: "chūn" },
                    { char: "眠", pinyin: "mián" },
                    { char: "不", pinyin: "bù" },
                    { char: "觉", pinyin: "jué" },
                    { char: "晓", pinyin: "xiǎo" }
                ]
            },
            {
                line: "处处闻啼鸟",
                characters: [
                    { char: "处", pinyin: "chù" },
                    { char: "处", pinyin: "chù" },
                    { char: "闻", pinyin: "wén" },
                    { char: "啼", pinyin: "tí" },
                    { char: "鸟", pinyin: "niǎo" }
                ]
            },
            {
                line: "夜来风雨声",
                characters: [
                    { char: "夜", pinyin: "yè" },
                    { char: "来", pinyin: "lái" },
                    { char: "风", pinyin: "fēng" },
                    { char: "雨", pinyin: "yǔ" },
                    { char: "声", pinyin: "shēng" }
                ]
            },
            {
                line: "花落知多少",
                characters: [
                    { char: "花", pinyin: "huā" },
                    { char: "落", pinyin: "luò" },
                    { char: "知", pinyin: "zhī" },
                    { char: "多", pinyin: "duō" },
                    { char: "少", pinyin: "shǎo" }
                ]
            }
        ]
    },
    {
        id: 3,
        title: "咏鹅",
        author: "骆宾王",
        content: [
            {
                line: "鹅鹅鹅",
                characters: [
                    { char: "鹅", pinyin: "é" },
                    { char: "鹅", pinyin: "é" },
                    { char: "鹅", pinyin: "é" }
                ]
            },
            {
                line: "曲项向天歌",
                characters: [
                    { char: "曲", pinyin: "qū" },
                    { char: "项", pinyin: "xiàng" },
                    { char: "向", pinyin: "xiàng" },
                    { char: "天", pinyin: "tiān" },
                    { char: "歌", pinyin: "gē" }
                ]
            },
            {
                line: "白毛浮绿水",
                characters: [
                    { char: "白", pinyin: "bái" },
                    { char: "毛", pinyin: "máo" },
                    { char: "浮", pinyin: "fú" },
                    { char: "绿", pinyin: "lǜ" },
                    { char: "水", pinyin: "shuǐ" }
                ]
            },
            {
                line: "红掌拨清波",
                characters: [
                    { char: "红", pinyin: "hóng" },
                    { char: "掌", pinyin: "zhǎng" },
                    { char: "拨", pinyin: "bō" },
                    { char: "清", pinyin: "qīng" },
                    { char: "波", pinyin: "bō" }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "登鹳雀楼",
        author: "王之涣",
        content: [
            {
                line: "白日依山尽",
                characters: [
                    { char: "白", pinyin: "bái" },
                    { char: "日", pinyin: "rì" },
                    { char: "依", pinyin: "yī" },
                    { char: "山", pinyin: "shān" },
                    { char: "尽", pinyin: "jìn" }
                ]
            },
            {
                line: "黄河入海流",
                characters: [
                    { char: "黄", pinyin: "huáng" },
                    { char: "河", pinyin: "hé" },
                    { char: "入", pinyin: "rù" },
                    { char: "海", pinyin: "hǎi" },
                    { char: "流", pinyin: "liú" }
                ]
            },
            {
                line: "欲穷千里目",
                characters: [
                    { char: "欲", pinyin: "yù" },
                    { char: "穷", pinyin: "qióng" },
                    { char: "千", pinyin: "qiān" },
                    { char: "里", pinyin: "lǐ" },
                    { char: "目", pinyin: "mù" }
                ]
            },
            {
                line: "更上一层楼",
                characters: [
                    { char: "更", pinyin: "gèng" },
                    { char: "上", pinyin: "shàng" },
                    { char: "一", pinyin: "yī" },
                    { char: "层", pinyin: "céng" },
                    { char: "楼", pinyin: "lóu" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "悯农",
        author: "李绅",
        content: [
            {
                line: "锄禾日当午",
                characters: [
                    { char: "锄", pinyin: "chú" },
                    { char: "禾", pinyin: "hé" },
                    { char: "日", pinyin: "rì" },
                    { char: "当", pinyin: "dāng" },
                    { char: "午", pinyin: "wǔ" }
                ]
            },
            {
                line: "汗滴禾下土",
                characters: [
                    { char: "汗", pinyin: "hàn" },
                    { char: "滴", pinyin: "dī" },
                    { char: "禾", pinyin: "hé" },
                    { char: "下", pinyin: "xià" },
                    { char: "土", pinyin: "tǔ" }
                ]
            },
            {
                line: "谁知盘中餐",
                characters: [
                    { char: "谁", pinyin: "shuí" },
                    { char: "知", pinyin: "zhī" },
                    { char: "盘", pinyin: "pán" },
                    { char: "中", pinyin: "zhōng" },
                    { char: "餐", pinyin: "cān" }
                ]
            },
            {
                line: "粒粒皆辛苦",
                characters: [
                    { char: "粒", pinyin: "lì" },
                    { char: "粒", pinyin: "lì" },
                    { char: "皆", pinyin: "jiē" },
                    { char: "辛", pinyin: "xīn" },
                    { char: "苦", pinyin: "kǔ" }
                ]
            }
        ]
    },
    {
        id: 6,
        title: "草",
        author: "白居易",
        content: [
            {
                line: "离离原上草",
                characters: [
                    { char: "离", pinyin: "lí" },
                    { char: "离", pinyin: "lí" },
                    { char: "原", pinyin: "yuán" },
                    { char: "上", pinyin: "shàng" },
                    { char: "草", pinyin: "cǎo" }
                ]
            },
            {
                line: "一岁一枯荣",
                characters: [
                    { char: "一", pinyin: "yī" },
                    { char: "岁", pinyin: "suì" },
                    { char: "一", pinyin: "yī" },
                    { char: "枯", pinyin: "kū" },
                    { char: "荣", pinyin: "róng" }
                ]
            },
            {
                line: "野火烧不尽",
                characters: [
                    { char: "野", pinyin: "yě" },
                    { char: "火", pinyin: "huǒ" },
                    { char: "烧", pinyin: "shāo" },
                    { char: "不", pinyin: "bù" },
                    { char: "尽", pinyin: "jìn" }
                ]
            },
            {
                line: "春风吹又生",
                characters: [
                    { char: "春", pinyin: "chūn" },
                    { char: "风", pinyin: "fēng" },
                    { char: "吹", pinyin: "chuī" },
                    { char: "又", pinyin: "yòu" },
                    { char: "生", pinyin: "shēng" }
                ]
            }
        ]
    },
    {
        id: 7,
        title: "望庐山瀑布",
        author: "李白",
        content: [
            {
                line: "日照香炉生紫烟",
                characters: [
                    { char: "日", pinyin: "rì" },
                    { char: "照", pinyin: "zhào" },
                    { char: "香", pinyin: "xiāng" },
                    { char: "炉", pinyin: "lú" },
                    { char: "生", pinyin: "shēng" },
                    { char: "紫", pinyin: "zǐ" },
                    { char: "烟", pinyin: "yān" }
                ]
            },
            {
                line: "遥看瀑布挂前川",
                characters: [
                    { char: "遥", pinyin: "yáo" },
                    { char: "看", pinyin: "kàn" },
                    { char: "瀑", pinyin: "pù" },
                    { char: "布", pinyin: "bù" },
                    { char: "挂", pinyin: "guà" },
                    { char: "前", pinyin: "qián" },
                    { char: "川", pinyin: "chuān" }
                ]
            },
            {
                line: "飞流直下三千尺",
                characters: [
                    { char: "飞", pinyin: "fēi" },
                    { char: "流", pinyin: "liú" },
                    { char: "直", pinyin: "zhí" },
                    { char: "下", pinyin: "xià" },
                    { char: "三", pinyin: "sān" },
                    { char: "千", pinyin: "qiān" },
                    { char: "尺", pinyin: "chǐ" }
                ]
            },
            {
                line: "疑是银河落九天",
                characters: [
                    { char: "疑", pinyin: "yí" },
                    { char: "是", pinyin: "shì" },
                    { char: "银", pinyin: "yín" },
                    { char: "河", pinyin: "hé" },
                    { char: "落", pinyin: "luò" },
                    { char: "九", pinyin: "jiǔ" },
                    { char: "天", pinyin: "tiān" }
                ]
            }
        ]
    },
    {
        id: 8,
        title: "早发白帝城",
        author: "李白",
        content: [
            {
                line: "朝辞白帝彩云间",
                characters: [
                    { char: "朝", pinyin: "zhāo" },
                    { char: "辞", pinyin: "cí" },
                    { char: "白", pinyin: "bái" },
                    { char: "帝", pinyin: "dì" },
                    { char: "彩", pinyin: "cǎi" },
                    { char: "云", pinyin: "yún" },
                    { char: "间", pinyin: "jiān" }
                ]
            },
            {
                line: "千里江陵一日还",
                characters: [
                    { char: "千", pinyin: "qiān" },
                    { char: "里", pinyin: "lǐ" },
                    { char: "江", pinyin: "jiāng" },
                    { char: "陵", pinyin: "líng" },
                    { char: "一", pinyin: "yī" },
                    { char: "日", pinyin: "rì" },
                    { char: "还", pinyin: "huán" }
                ]
            },
            {
                line: "两岸猿声啼不住",
                characters: [
                    { char: "两", pinyin: "liǎng" },
                    { char: "岸", pinyin: "àn" },
                    { char: "猿", pinyin: "yuán" },
                    { char: "声", pinyin: "shēng" },
                    { char: "啼", pinyin: "tí" },
                    { char: "不", pinyin: "bù" },
                    { char: "住", pinyin: "zhù" }
                ]
            },
            {
                line: "轻舟已过万重山",
                characters: [
                    { char: "轻", pinyin: "qīng" },
                    { char: "舟", pinyin: "zhōu" },
                    { char: "已", pinyin: "yǐ" },
                    { char: "过", pinyin: "guò" },
                    { char: "万", pinyin: "wàn" },
                    { char: "重", pinyin: "chóng" },
                    { char: "山", pinyin: "shān" }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "江雪",
        author: "柳宗元",
        content: [
            {
                line: "千山鸟飞绝",
                characters: [
                    { char: "千", pinyin: "qiān" },
                    { char: "山", pinyin: "shān" },
                    { char: "鸟", pinyin: "niǎo" },
                    { char: "飞", pinyin: "fēi" },
                    { char: "绝", pinyin: "jué" }
                ]
            },
            {
                line: "万径人踪灭",
                characters: [
                    { char: "万", pinyin: "wàn" },
                    { char: "径", pinyin: "jìng" },
                    { char: "人", pinyin: "rén" },
                    { char: "踪", pinyin: "zōng" },
                    { char: "灭", pinyin: "miè" }
                ]
            },
            {
                line: "孤舟蓑笠翁",
                characters: [
                    { char: "孤", pinyin: "gū" },
                    { char: "舟", pinyin: "zhōu" },
                    { char: "蓑", pinyin: "suō" },
                    { char: "笠", pinyin: "lì" },
                    { char: "翁", pinyin: "wēng" }
                ]
            },
            {
                line: "独钓寒江雪",
                characters: [
                    { char: "独", pinyin: "dú" },
                    { char: "钓", pinyin: "diào" },
                    { char: "寒", pinyin: "hán" },
                    { char: "江", pinyin: "jiāng" },
                    { char: "雪", pinyin: "xuě" }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "风",
        author: "李峤",
        content: [
            {
                line: "解落三秋叶",
                characters: [
                    { char: "解", pinyin: "jiě" },
                    { char: "落", pinyin: "luò" },
                    { char: "三", pinyin: "sān" },
                    { char: "秋", pinyin: "qiū" },
                    { char: "叶", pinyin: "yè" }
                ]
            },
            {
                line: "能开二月花",
                characters: [
                    { char: "能", pinyin: "néng" },
                    { char: "开", pinyin: "kāi" },
                    { char: "二", pinyin: "èr" },
                    { char: "月", pinyin: "yuè" },
                    { char: "花", pinyin: "huā" }
                ]
            },
            {
                line: "过江千尺浪",
                characters: [
                    { char: "过", pinyin: "guò" },
                    { char: "江", pinyin: "jiāng" },
                    { char: "千", pinyin: "qiān" },
                    { char: "尺", pinyin: "chǐ" },
                    { char: "浪", pinyin: "làng" }
                ]
            },
            {
                line: "入竹万竿斜",
                characters: [
                    { char: "入", pinyin: "rù" },
                    { char: "竹", pinyin: "zhú" },
                    { char: "万", pinyin: "wàn" },
                    { char: "竿", pinyin: "gān" },
                    { char: "斜", pinyin: "xié" }
                ]
            }
        ]
    },
    {
        id: 11,
        title: "村居",
        author: "高鼎",
        content: [
            {
                line: "草长莺飞二月天",
                characters: [
                    { char: "草", pinyin: "cǎo" },
                    { char: "长", pinyin: "zhǎng" },
                    { char: "莺", pinyin: "yīng" },
                    { char: "飞", pinyin: "fēi" },
                    { char: "二", pinyin: "èr" },
                    { char: "月", pinyin: "yuè" },
                    { char: "天", pinyin: "tiān" }
                ]
            },
            {
                line: "拂堤杨柳醉春烟",
                characters: [
                    { char: "拂", pinyin: "fú" },
                    { char: "堤", pinyin: "dī" },
                    { char: "杨", pinyin: "yáng" },
                    { char: "柳", pinyin: "liǔ" },
                    { char: "醉", pinyin: "zuì" },
                    { char: "春", pinyin: "chūn" },
                    { char: "烟", pinyin: "yān" }
                ]
            },
            {
                line: "儿童散学归来早",
                characters: [
                    { char: "儿", pinyin: "ér" },
                    { char: "童", pinyin: "tóng" },
                    { char: "散", pinyin: "sàn" },
                    { char: "学", pinyin: "xué" },
                    { char: "归", pinyin: "guī" },
                    { char: "来", pinyin: "lái" },
                    { char: "早", pinyin: "zǎo" }
                ]
            },
            {
                line: "忙趁东风放纸鸢",
                characters: [
                    { char: "忙", pinyin: "máng" },
                    { char: "趁", pinyin: "chèn" },
                    { char: "东", pinyin: "dōng" },
                    { char: "风", pinyin: "fēng" },
                    { char: "放", pinyin: "fàng" },
                    { char: "纸", pinyin: "zhǐ" },
                    { char: "鸢", pinyin: "yuān" }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "小池",
        author: "杨万里",
        content: [
            {
                line: "泉眼无声惜细流",
                characters: [
                    { char: "泉", pinyin: "quán" },
                    { char: "眼", pinyin: "yǎn" },
                    { char: "无", pinyin: "wú" },
                    { char: "声", pinyin: "shēng" },
                    { char: "惜", pinyin: "xī" },
                    { char: "细", pinyin: "xì" },
                    { char: "流", pinyin: "liú" }
                ]
            },
            {
                line: "树阴照水爱晴柔",
                characters: [
                    { char: "树", pinyin: "shù" },
                    { char: "阴", pinyin: "yīn" },
                    { char: "照", pinyin: "zhào" },
                    { char: "水", pinyin: "shuǐ" },
                    { char: "爱", pinyin: "ài" },
                    { char: "晴", pinyin: "qíng" },
                    { char: "柔", pinyin: "róu" }
                ]
            },
            {
                line: "小荷才露尖尖角",
                characters: [
                    { char: "小", pinyin: "xiǎo" },
                    { char: "荷", pinyin: "hé" },
                    { char: "才", pinyin: "cái" },
                    { char: "露", pinyin: "lù" },
                    { char: "尖", pinyin: "jiān" },
                    { char: "尖", pinyin: "jiān" },
                    { char: "角", pinyin: "jiǎo" }
                ]
            },
            {
                line: "早有蜻蜓立上头",
                characters: [
                    { char: "早", pinyin: "zǎo" },
                    { char: "有", pinyin: "yǒu" },
                    { char: "蜻", pinyin: "qīng" },
                    { char: "蜓", pinyin: "tíng" },
                    { char: "立", pinyin: "lì" },
                    { char: "上", pinyin: "shàng" },
                    { char: "头", pinyin: "tóu" }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "赠汪伦",
        author: "李白",
        content: [
            {
                line: "李白乘舟将欲行",
                characters: [
                    { char: "李", pinyin: "lǐ" },
                    { char: "白", pinyin: "bái" },
                    { char: "乘", pinyin: "chéng" },
                    { char: "舟", pinyin: "zhōu" },
                    { char: "将", pinyin: "jiāng" },
                    { char: "欲", pinyin: "yù" },
                    { char: "行", pinyin: "xíng" }
                ]
            },
            {
                line: "忽闻岸上踏歌声",
                characters: [
                    { char: "忽", pinyin: "hū" },
                    { char: "闻", pinyin: "wén" },
                    { char: "岸", pinyin: "àn" },
                    { char: "上", pinyin: "shàng" },
                    { char: "踏", pinyin: "tà" },
                    { char: "歌", pinyin: "gē" },
                    { char: "声", pinyin: "shēng" }
                ]
            },
            {
                line: "桃花潭水深千尺",
                characters: [
                    { char: "桃", pinyin: "táo" },
                    { char: "花", pinyin: "huā" },
                    { char: "潭", pinyin: "tán" },
                    { char: "水", pinyin: "shuǐ" },
                    { char: "深", pinyin: "shēn" },
                    { char: "千", pinyin: "qiān" },
                    { char: "尺", pinyin: "chǐ" }
                ]
            },
            {
                line: "不及汪伦送我情",
                characters: [
                    { char: "不", pinyin: "bù" },
                    { char: "及", pinyin: "jí" },
                    { char: "汪", pinyin: "wāng" },
                    { char: "伦", pinyin: "lún" },
                    { char: "送", pinyin: "sòng" },
                    { char: "我", pinyin: "wǒ" },
                    { char: "情", pinyin: "qíng" }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "黄鹤楼送孟浩然之广陵",
        author: "李白",
        content: [
            {
                line: "故人西辞黄鹤楼",
                characters: [
                    { char: "故", pinyin: "gù" },
                    { char: "人", pinyin: "rén" },
                    { char: "西", pinyin: "xī" },
                    { char: "辞", pinyin: "cí" },
                    { char: "黄", pinyin: "huáng" },
                    { char: "鹤", pinyin: "hè" },
                    { char: "楼", pinyin: "lóu" }
                ]
            },
            {
                line: "烟花三月下扬州",
                characters: [
                    { char: "烟", pinyin: "yān" },
                    { char: "花", pinyin: "huā" },
                    { char: "三", pinyin: "sān" },
                    { char: "月", pinyin: "yuè" },
                    { char: "下", pinyin: "xià" },
                    { char: "扬", pinyin: "yáng" },
                    { char: "州", pinyin: "zhōu" }
                ]
            },
            {
                line: "孤帆远影碧空尽",
                characters: [
                    { char: "孤", pinyin: "gū" },
                    { char: "帆", pinyin: "fān" },
                    { char: "远", pinyin: "yuǎn" },
                    { char: "影", pinyin: "yǐng" },
                    { char: "碧", pinyin: "bì" },
                    { char: "空", pinyin: "kōng" },
                    { char: "尽", pinyin: "jìn" }
                ]
            },
            {
                line: "唯见长江天际流",
                characters: [
                    { char: "唯", pinyin: "wéi" },
                    { char: "见", pinyin: "jiàn" },
                    { char: "长", pinyin: "cháng" },
                    { char: "江", pinyin: "jiāng" },
                    { char: "天", pinyin: "tiān" },
                    { char: "际", pinyin: "jì" },
                    { char: "流", pinyin: "liú" }
                ]
            }
        ]
    },
    {
        id: 15,
        title: "回乡偶书",
        author: "贺知章",
        content: [
            {
                line: "少小离家老大回",
                characters: [
                    { char: "少", pinyin: "shào" },
                    { char: "小", pinyin: "xiǎo" },
                    { char: "离", pinyin: "lí" },
                    { char: "家", pinyin: "jiā" },
                    { char: "老", pinyin: "lǎo" },
                    { char: "大", pinyin: "dà" },
                    { char: "回", pinyin: "huí" }
                ]
            },
            {
                line: "乡音无改鬓毛衰",
                characters: [
                    { char: "乡", pinyin: "xiāng" },
                    { char: "音", pinyin: "yīn" },
                    { char: "无", pinyin: "wú" },
                    { char: "改", pinyin: "gǎi" },
                    { char: "鬓", pinyin: "bìn" },
                    { char: "毛", pinyin: "máo" },
                    { char: "衰", pinyin: "shuāi" }
                ]
            },
            {
                line: "儿童相见不相识",
                characters: [
                    { char: "儿", pinyin: "ér" },
                    { char: "童", pinyin: "tóng" },
                    { char: "相", pinyin: "xiāng" },
                    { char: "见", pinyin: "jiàn" },
                    { char: "不", pinyin: "bù" },
                    { char: "相", pinyin: "xiāng" },
                    { char: "识", pinyin: "shí" }
                ]
            },
            {
                line: "笑问客从何处来",
                characters: [
                    { char: "笑", pinyin: "xiào" },
                    { char: "问", pinyin: "wèn" },
                    { char: "客", pinyin: "kè" },
                    { char: "从", pinyin: "cóng" },
                    { char: "何", pinyin: "hé" },
                    { char: "处", pinyin: "chù" },
                    { char: "来", pinyin: "lái" }
                ]
            }
        ]
    },
    {
        id: 16,
        title: "绝句",
        author: "杜甫",
        content: [
            {
                line: "两个黄鹂鸣翠柳",
                characters: [
                    { char: "两", pinyin: "liǎng" },
                    { char: "个", pinyin: "gè" },
                    { char: "黄", pinyin: "huáng" },
                    { char: "鹂", pinyin: "lí" },
                    { char: "鸣", pinyin: "míng" },
                    { char: "翠", pinyin: "cuì" },
                    { char: "柳", pinyin: "liǔ" }
                ]
            },
            {
                line: "一行白鹭上青天",
                characters: [
                    { char: "一", pinyin: "yī" },
                    { char: "行", pinyin: "háng" },
                    { char: "白", pinyin: "bái" },
                    { char: "鹭", pinyin: "lù" },
                    { char: "上", pinyin: "shàng" },
                    { char: "青", pinyin: "qīng" },
                    { char: "天", pinyin: "tiān" }
                ]
            },
            {
                line: "窗含西岭千秋雪",
                characters: [
                    { char: "窗", pinyin: "chuāng" },
                    { char: "含", pinyin: "hán" },
                    { char: "西", pinyin: "xī" },
                    { char: "岭", pinyin: "lǐng" },
                    { char: "千", pinyin: "qiān" },
                    { char: "秋", pinyin: "qiū" },
                    { char: "雪", pinyin: "xuě" }
                ]
            },
            {
                line: "门泊东吴万里船",
                characters: [
                    { char: "门", pinyin: "mén" },
                    { char: "泊", pinyin: "bó" },
                    { char: "东", pinyin: "dōng" },
                    { char: "吴", pinyin: "wú" },
                    { char: "万", pinyin: "wàn" },
                    { char: "里", pinyin: "lǐ" },
                    { char: "船", pinyin: "chuán" }
                ]
            }
        ]
    },
    {
        id: 17,
        title: "山行",
        author: "杜牧",
        content: [
            {
                line: "远上寒山石径斜",
                characters: [
                    { char: "远", pinyin: "yuǎn" },
                    { char: "上", pinyin: "shàng" },
                    { char: "寒", pinyin: "hán" },
                    { char: "山", pinyin: "shān" },
                    { char: "石", pinyin: "shí" },
                    { char: "径", pinyin: "jìng" },
                    { char: "斜", pinyin: "xié" }
                ]
            },
            {
                line: "白云深处有人家",
                characters: [
                    { char: "白", pinyin: "bái" },
                    { char: "云", pinyin: "yún" },
                    { char: "深", pinyin: "shēn" },
                    { char: "处", pinyin: "chù" },
                    { char: "有", pinyin: "yǒu" },
                    { char: "人", pinyin: "rén" },
                    { char: "家", pinyin: "jiā" }
                ]
            },
            {
                line: "停车坐爱枫林晚",
                characters: [
                    { char: "停", pinyin: "tíng" },
                    { char: "车", pinyin: "chē" },
                    { char: "坐", pinyin: "zuò" },
                    { char: "爱", pinyin: "ài" },
                    { char: "枫", pinyin: "fēng" },
                    { char: "林", pinyin: "lín" },
                    { char: "晚", pinyin: "wǎn" }
                ]
            },
            {
                line: "霜叶红于二月花",
                characters: [
                    { char: "霜", pinyin: "shuāng" },
                    { char: "叶", pinyin: "yè" },
                    { char: "红", pinyin: "hóng" },
                    { char: "于", pinyin: "yú" },
                    { char: "二", pinyin: "èr" },
                    { char: "月", pinyin: "yuè" },
                    { char: "花", pinyin: "huā" }
                ]
            }
        ]
    },
    {
        id: 18,
        title: "枫桥夜泊",
        author: "张继",
        content: [
            {
                line: "月落乌啼霜满天",
                characters: [
                    { char: "月", pinyin: "yuè" },
                    { char: "落", pinyin: "luò" },
                    { char: "乌", pinyin: "wū" },
                    { char: "啼", pinyin: "tí" },
                    { char: "霜", pinyin: "shuāng" },
                    { char: "满", pinyin: "mǎn" },
                    { char: "天", pinyin: "tiān" }
                ]
            },
            {
                line: "江枫渔火对愁眠",
                characters: [
                    { char: "江", pinyin: "jiāng" },
                    { char: "枫", pinyin: "fēng" },
                    { char: "渔", pinyin: "yú" },
                    { char: "火", pinyin: "huǒ" },
                    { char: "对", pinyin: "duì" },
                    { char: "愁", pinyin: "chóu" },
                    { char: "眠", pinyin: "mián" }
                ]
            },
            {
                line: "姑苏城外寒山寺",
                characters: [
                    { char: "姑", pinyin: "gū" },
                    { char: "苏", pinyin: "sū" },
                    { char: "城", pinyin: "chéng" },
                    { char: "外", pinyin: "wài" },
                    { char: "寒", pinyin: "hán" },
                    { char: "山", pinyin: "shān" },
                    { char: "寺", pinyin: "sì" }
                ]
            },
            {
                line: "夜半钟声到客船",
                characters: [
                    { char: "夜", pinyin: "yè" },
                    { char: "半", pinyin: "bàn" },
                    { char: "钟", pinyin: "zhōng" },
                    { char: "声", pinyin: "shēng" },
                    { char: "到", pinyin: "dào" },
                    { char: "客", pinyin: "kè" },
                    { char: "船", pinyin: "chuán" }
                ]
            }
        ]
    },
    {
        id: 19,
        title: "游子吟",
        author: "孟郊",
        content: [
            {
                line: "慈母手中线",
                characters: [
                    { char: "慈", pinyin: "cí" },
                    { char: "母", pinyin: "mǔ" },
                    { char: "手", pinyin: "shǒu" },
                    { char: "中", pinyin: "zhōng" },
                    { char: "线", pinyin: "xiàn" }
                ]
            },
            {
                line: "游子身上衣",
                characters: [
                    { char: "游", pinyin: "yóu" },
                    { char: "子", pinyin: "zǐ" },
                    { char: "身", pinyin: "shēn" },
                    { char: "上", pinyin: "shàng" },
                    { char: "衣", pinyin: "yī" }
                ]
            },
            {
                line: "临行密密缝",
                characters: [
                    { char: "临", pinyin: "lín" },
                    { char: "行", pinyin: "xíng" },
                    { char: "密", pinyin: "mì" },
                    { char: "密", pinyin: "mì" },
                    { char: "缝", pinyin: "féng" }
                ]
            },
            {
                line: "意恐迟迟归",
                characters: [
                    { char: "意", pinyin: "yì" },
                    { char: "恐", pinyin: "kǒng" },
                    { char: "迟", pinyin: "chí" },
                    { char: "迟", pinyin: "chí" },
                    { char: "归", pinyin: "guī" }
                ]
            },
            {
                line: "谁言寸草心",
                characters: [
                    { char: "谁", pinyin: "shuí" },
                    { char: "言", pinyin: "yán" },
                    { char: "寸", pinyin: "cùn" },
                    { char: "草", pinyin: "cǎo" },
                    { char: "心", pinyin: "xīn" }
                ]
            },
            {
                line: "报得三春晖",
                characters: [
                    { char: "报", pinyin: "bào" },
                    { char: "得", pinyin: "dé" },
                    { char: "三", pinyin: "sān" },
                    { char: "春", pinyin: "chūn" },
                    { char: "晖", pinyin: "huī" }
                ]
            }
        ]
    },
    {
        id: 20,
        title: "清明",
        author: "杜牧",
        content: [
            {
                line: "清明时节雨纷纷",
                characters: [
                    { char: "清", pinyin: "qīng" },
                    { char: "明", pinyin: "míng" },
                    { char: "时", pinyin: "shí" },
                    { char: "节", pinyin: "jié" },
                    { char: "雨", pinyin: "yǔ" },
                    { char: "纷", pinyin: "fēn" },
                    { char: "纷", pinyin: "fēn" }
                ]
            },
            {
                line: "路上行人欲断魂",
                characters: [
                    { char: "路", pinyin: "lù" },
                    { char: "上", pinyin: "shàng" },
                    { char: "行", pinyin: "xíng" },
                    { char: "人", pinyin: "rén" },
                    { char: "欲", pinyin: "yù" },
                    { char: "断", pinyin: "duàn" },
                    { char: "魂", pinyin: "hún" }
                ]
            },
            {
                line: "借问酒家何处有",
                characters: [
                    { char: "借", pinyin: "jiè" },
                    { char: "问", pinyin: "wèn" },
                    { char: "酒", pinyin: "jiǔ" },
                    { char: "家", pinyin: "jiā" },
                    { char: "何", pinyin: "hé" },
                    { char: "处", pinyin: "chù" },
                    { char: "有", pinyin: "yǒu" }
                ]
            },
            {
                line: "牧童遥指杏花村",
                characters: [
                    { char: "牧", pinyin: "mù" },
                    { char: "童", pinyin: "tóng" },
                    { char: "遥", pinyin: "yáo" },
                    { char: "指", pinyin: "zhǐ" },
                    { char: "杏", pinyin: "xìng" },
                    { char: "花", pinyin: "huā" },
                    { char: "村", pinyin: "cūn" }
                ]
            }
        ]
    },
    {
        id: 21,
        title: "九月九日忆山东兄弟",
        author: "王维",
        content: [
            {
                line: "独在异乡为异客",
                characters: [
                    { char: "独", pinyin: "dú" },
                    { char: "在", pinyin: "zài" },
                    { char: "异", pinyin: "yì" },
                    { char: "乡", pinyin: "xiāng" },
                    { char: "为", pinyin: "wéi" },
                    { char: "异", pinyin: "yì" },
                    { char: "客", pinyin: "kè" }
                ]
            },
            {
                line: "每逢佳节倍思亲",
                characters: [
                    { char: "每", pinyin: "měi" },
                    { char: "逢", pinyin: "féng" },
                    { char: "佳", pinyin: "jiā" },
                    { char: "节", pinyin: "jié" },
                    { char: "倍", pinyin: "bèi" },
                    { char: "思", pinyin: "sī" },
                    { char: "亲", pinyin: "qīn" }
                ]
            },
            {
                line: "遥知兄弟登高处",
                characters: [
                    { char: "遥", pinyin: "yáo" },
                    { char: "知", pinyin: "zhī" },
                    { char: "兄", pinyin: "xiōng" },
                    { char: "弟", pinyin: "dì" },
                    { char: "登", pinyin: "dēng" },
                    { char: "高", pinyin: "gāo" },
                    { char: "处", pinyin: "chù" }
                ]
            },
            {
                line: "遍插茱萸少一人",
                characters: [
                    { char: "遍", pinyin: "biàn" },
                    { char: "插", pinyin: "chā" },
                    { char: "茱", pinyin: "zhū" },
                    { char: "萸", pinyin: "yú" },
                    { char: "少", pinyin: "shǎo" },
                    { char: "一", pinyin: "yī" },
                    { char: "人", pinyin: "rén" }
                ]
            }
        ]
    },
    {
        id: 22,
        title: "凉州词",
        author: "王翰",
        content: [
            {
                line: "葡萄美酒夜光杯",
                characters: [
                    { char: "葡", pinyin: "pú" },
                    { char: "萄", pinyin: "táo" },
                    { char: "美", pinyin: "měi" },
                    { char: "酒", pinyin: "jiǔ" },
                    { char: "夜", pinyin: "yè" },
                    { char: "光", pinyin: "guāng" },
                    { char: "杯", pinyin: "bēi" }
                ]
            },
            {
                line: "欲饮琵琶马上催",
                characters: [
                    { char: "欲", pinyin: "yù" },
                    { char: "饮", pinyin: "yǐn" },
                    { char: "琵", pinyin: "pí" },
                    { char: "琶", pinyin: "pá" },
                    { char: "马", pinyin: "mǎ" },
                    { char: "上", pinyin: "shàng" },
                    { char: "催", pinyin: "cuī" }
                ]
            },
            {
                line: "醉卧沙场君莫笑",
                characters: [
                    { char: "醉", pinyin: "zuì" },
                    { char: "卧", pinyin: "wò" },
                    { char: "沙", pinyin: "shā" },
                    { char: "场", pinyin: "chǎng" },
                    { char: "君", pinyin: "jūn" },
                    { char: "莫", pinyin: "mò" },
                    { char: "笑", pinyin: "xiào" }
                ]
            },
            {
                line: "古来征战几人回",
                characters: [
                    { char: "古", pinyin: "gǔ" },
                    { char: "来", pinyin: "lái" },
                    { char: "征", pinyin: "zhēng" },
                    { char: "战", pinyin: "zhàn" },
                    { char: "几", pinyin: "jǐ" },
                    { char: "人", pinyin: "rén" },
                    { char: "回", pinyin: "huí" }
                ]
            }
        ]
    },
    {
        id: 23,
        title: "出塞",
        author: "王昌龄",
        content: [
            {
                line: "秦时明月汉时关",
                characters: [
                    { char: "秦", pinyin: "qín" },
                    { char: "时", pinyin: "shí" },
                    { char: "明", pinyin: "míng" },
                    { char: "月", pinyin: "yuè" },
                    { char: "汉", pinyin: "hàn" },
                    { char: "时", pinyin: "shí" },
                    { char: "关", pinyin: "guān" }
                ]
            },
            {
                line: "万里长征人未还",
                characters: [
                    { char: "万", pinyin: "wàn" },
                    { char: "里", pinyin: "lǐ" },
                    { char: "长", pinyin: "cháng" },
                    { char: "征", pinyin: "zhēng" },
                    { char: "人", pinyin: "rén" },
                    { char: "未", pinyin: "wèi" },
                    { char: "还", pinyin: "huán" }
                ]
            },
            {
                line: "但使龙城飞将在",
                characters: [
                    { char: "但", pinyin: "dàn" },
                    { char: "使", pinyin: "shǐ" },
                    { char: "龙", pinyin: "lóng" },
                    { char: "城", pinyin: "chéng" },
                    { char: "飞", pinyin: "fēi" },
                    { char: "将", pinyin: "jiàng" },
                    { char: "在", pinyin: "zài" }
                ]
            },
            {
                line: "不教胡马度阴山",
                characters: [
                    { char: "不", pinyin: "bù" },
                    { char: "教", pinyin: "jiào" },
                    { char: "胡", pinyin: "hú" },
                    { char: "马", pinyin: "mǎ" },
                    { char: "度", pinyin: "dù" },
                    { char: "阴", pinyin: "yīn" },
                    { char: "山", pinyin: "shān" }
                ]
            }
        ]
    },
    {
        id: 24,
        title: "芙蓉楼送辛渐",
        author: "王昌龄",
        content: [
            {
                line: "寒雨连江夜入吴",
                characters: [
                    { char: "寒", pinyin: "hán" },
                    { char: "雨", pinyin: "yǔ" },
                    { char: "连", pinyin: "lián" },
                    { char: "江", pinyin: "jiāng" },
                    { char: "夜", pinyin: "yè" },
                    { char: "入", pinyin: "rù" },
                    { char: "吴", pinyin: "wú" }
                ]
            },
            {
                line: "平明送客楚山孤",
                characters: [
                    { char: "平", pinyin: "píng" },
                    { char: "明", pinyin: "míng" },
                    { char: "送", pinyin: "sòng" },
                    { char: "客", pinyin: "kè" },
                    { char: "楚", pinyin: "chǔ" },
                    { char: "山", pinyin: "shān" },
                    { char: "孤", pinyin: "gū" }
                ]
            },
            {
                line: "洛阳亲友如相问",
                characters: [
                    { char: "洛", pinyin: "luò" },
                    { char: "阳", pinyin: "yáng" },
                    { char: "亲", pinyin: "qīn" },
                    { char: "友", pinyin: "yǒu" },
                    { char: "如", pinyin: "rú" },
                    { char: "相", pinyin: "xiāng" },
                    { char: "问", pinyin: "wèn" }
                ]
            },
            {
                line: "一片冰心在玉壶",
                characters: [
                    { char: "一", pinyin: "yī" },
                    { char: "片", pinyin: "piàn" },
                    { char: "冰", pinyin: "bīng" },
                    { char: "心", pinyin: "xīn" },
                    { char: "在", pinyin: "zài" },
                    { char: "玉", pinyin: "yù" },
                    { char: "壶", pinyin: "hú" }
                ]
            }
        ]
    },
    {
        id: 25,
        title: "竹里馆",
        author: "王维",
        content: [
            {
                line: "独坐幽篁里",
                characters: [
                    { char: "独", pinyin: "dú" },
                    { char: "坐", pinyin: "zuò" },
                    { char: "幽", pinyin: "yōu" },
                    { char: "篁", pinyin: "huáng" },
                    { char: "里", pinyin: "lǐ" }
                ]
            },
            {
                line: "弹琴复长啸",
                characters: [
                    { char: "弹", pinyin: "tán" },
                    { char: "琴", pinyin: "qín" },
                    { char: "复", pinyin: "fù" },
                    { char: "长", pinyin: "cháng" },
                    { char: "啸", pinyin: "xiào" }
                ]
            },
            {
                line: "深林人不知",
                characters: [
                    { char: "深", pinyin: "shēn" },
                    { char: "林", pinyin: "lín" },
                    { char: "人", pinyin: "rén" },
                    { char: "不", pinyin: "bù" },
                    { char: "知", pinyin: "zhī" }
                ]
            },
            {
                line: "明月来相照",
                characters: [
                    { char: "明", pinyin: "míng" },
                    { char: "月", pinyin: "yuè" },
                    { char: "来", pinyin: "lái" },
                    { char: "相", pinyin: "xiāng" },
                    { char: "照", pinyin: "zhào" }
                ]
            }
        ]
    },
    {
        id: 26,
        title: "相思",
        author: "王维",
        content: [
            {
                line: "红豆生南国",
                characters: [
                    { char: "红", pinyin: "hóng" },
                    { char: "豆", pinyin: "dòu" },
                    { char: "生", pinyin: "shēng" },
                    { char: "南", pinyin: "nán" },
                    { char: "国", pinyin: "guó" }
                ]
            },
            {
                line: "春来发几枝",
                characters: [
                    { char: "春", pinyin: "chūn" },
                    { char: "来", pinyin: "lái" },
                    { char: "发", pinyin: "fā" },
                    { char: "几", pinyin: "jǐ" },
                    { char: "枝", pinyin: "zhī" }
                ]
            },
            {
                line: "愿君多采撷",
                characters: [
                    { char: "愿", pinyin: "yuàn" },
                    { char: "君", pinyin: "jūn" },
                    { char: "多", pinyin: "duō" },
                    { char: "采", pinyin: "cǎi" },
                    { char: "撷", pinyin: "xié" }
                ]
            },
            {
                line: "此物最相思",
                characters: [
                    { char: "此", pinyin: "cǐ" },
                    { char: "物", pinyin: "wù" },
                    { char: "最", pinyin: "zuì" },
                    { char: "相", pinyin: "xiāng" },
                    { char: "思", pinyin: "sī" }
                ]
            }
        ]
    },
    {
        id: 27,
        title: "送元二使安西",
        author: "王维",
        content: [
            {
                line: "渭城朝雨浥轻尘",
                characters: [
                    { char: "渭", pinyin: "wèi" },
                    { char: "城", pinyin: "chéng" },
                    { char: "朝", pinyin: "zhāo" },
                    { char: "雨", pinyin: "yǔ" },
                    { char: "浥", pinyin: "yì" },
                    { char: "轻", pinyin: "qīng" },
                    { char: "尘", pinyin: "chén" }
                ]
            },
            {
                line: "客舍青青柳色新",
                characters: [
                    { char: "客", pinyin: "kè" },
                    { char: "舍", pinyin: "shè" },
                    { char: "青", pinyin: "qīng" },
                    { char: "青", pinyin: "qīng" },
                    { char: "柳", pinyin: "liǔ" },
                    { char: "色", pinyin: "sè" },
                    { char: "新", pinyin: "xīn" }
                ]
            },
            {
                line: "劝君更尽一杯酒",
                characters: [
                    { char: "劝", pinyin: "quàn" },
                    { char: "君", pinyin: "jūn" },
                    { char: "更", pinyin: "gèng" },
                    { char: "尽", pinyin: "jìn" },
                    { char: "一", pinyin: "yī" },
                    { char: "杯", pinyin: "bēi" },
                    { char: "酒", pinyin: "jiǔ" }
                ]
            },
            {
                line: "西出阳关无故人",
                characters: [
                    { char: "西", pinyin: "xī" },
                    { char: "出", pinyin: "chū" },
                    { char: "阳", pinyin: "yáng" },
                    { char: "关", pinyin: "guān" },
                    { char: "无", pinyin: "wú" },
                    { char: "故", pinyin: "gù" },
                    { char: "人", pinyin: "rén" }
                ]
            }
        ]
    },
    {
        id: 28,
        title: "鹿柴",
        author: "王维",
        content: [
            {
                line: "空山不见人",
                characters: [
                    { char: "空", pinyin: "kōng" },
                    { char: "山", pinyin: "shān" },
                    { char: "不", pinyin: "bù" },
                    { char: "见", pinyin: "jiàn" },
                    { char: "人", pinyin: "rén" }
                ]
            },
            {
                line: "但闻人语响",
                characters: [
                    { char: "但", pinyin: "dàn" },
                    { char: "闻", pinyin: "wén" },
                    { char: "人", pinyin: "rén" },
                    { char: "语", pinyin: "yǔ" },
                    { char: "响", pinyin: "xiǎng" }
                ]
            },
            {
                line: "返景入深林",
                characters: [
                    { char: "返", pinyin: "fǎn" },
                    { char: "景", pinyin: "jǐng" },
                    { char: "入", pinyin: "rù" },
                    { char: "深", pinyin: "shēn" },
                    { char: "林", pinyin: "lín" }
                ]
            },
            {
                line: "复照青苔上",
                characters: [
                    { char: "复", pinyin: "fù" },
                    { char: "照", pinyin: "zhào" },
                    { char: "青", pinyin: "qīng" },
                    { char: "苔", pinyin: "tái" },
                    { char: "上", pinyin: "shàng" }
                ]
            }
        ]
    },
    {
        id: 29,
        title: "别董大",
        author: "高适",
        content: [
            {
                line: "千里黄云白日曛",
                characters: [
                    { char: "千", pinyin: "qiān" },
                    { char: "里", pinyin: "lǐ" },
                    { char: "黄", pinyin: "huáng" },
                    { char: "云", pinyin: "yún" },
                    { char: "白", pinyin: "bái" },
                    { char: "日", pinyin: "rì" },
                    { char: "曛", pinyin: "xūn" }
                ]
            },
            {
                line: "北风吹雁雪纷纷",
                characters: [
                    { char: "北", pinyin: "běi" },
                    { char: "风", pinyin: "fēng" },
                    { char: "吹", pinyin: "chuī" },
                    { char: "雁", pinyin: "yàn" },
                    { char: "雪", pinyin: "xuě" },
                    { char: "纷", pinyin: "fēn" },
                    { char: "纷", pinyin: "fēn" }
                ]
            },
            {
                line: "莫愁前路无知己",
                characters: [
                    { char: "莫", pinyin: "mò" },
                    { char: "愁", pinyin: "chóu" },
                    { char: "前", pinyin: "qián" },
                    { char: "路", pinyin: "lù" },
                    { char: "无", pinyin: "wú" },
                    { char: "知", pinyin: "zhī" },
                    { char: "己", pinyin: "jǐ" }
                ]
            },
            {
                line: "天下谁人不识君",
                characters: [
                    { char: "天", pinyin: "tiān" },
                    { char: "下", pinyin: "xià" },
                    { char: "谁", pinyin: "shuí" },
                    { char: "人", pinyin: "rén" },
                    { char: "不", pinyin: "bù" },
                    { char: "识", pinyin: "shí" },
                    { char: "君", pinyin: "jūn" }
                ]
            }
        ]
    },
    {
        id: 30,
        title: "逢雪宿芙蓉山主人",
        author: "刘长卿",
        content: [
            {
                line: "日暮苍山远",
                characters: [
                    { char: "日", pinyin: "rì" },
                    { char: "暮", pinyin: "mù" },
                    { char: "苍", pinyin: "cāng" },
                    { char: "山", pinyin: "shān" },
                    { char: "远", pinyin: "yuǎn" }
                ]
            },
            {
                line: "天寒白屋贫",
                characters: [
                    { char: "天", pinyin: "tiān" },
                    { char: "寒", pinyin: "hán" },
                    { char: "白", pinyin: "bái" },
                    { char: "屋", pinyin: "wū" },
                    { char: "贫", pinyin: "pín" }
                ]
            },
            {
                line: "柴门闻犬吠",
                characters: [
                    { char: "柴", pinyin: "chái" },
                    { char: "门", pinyin: "mén" },
                    { char: "闻", pinyin: "wén" },
                    { char: "犬", pinyin: "quǎn" },
                    { char: "吠", pinyin: "fèi" }
                ]
            },
            {
                line: "风雪夜归人",
                characters: [
                    { char: "风", pinyin: "fēng" },
                    { char: "雪", pinyin: "xuě" },
                    { char: "夜", pinyin: "yè" },
                    { char: "归", pinyin: "guī" },
                    { char: "人", pinyin: "rén" }
                ]
            }
        ]
    }
];

// 鼓励性提示语句
const encouragementMessages = [
    "太棒了！继续加油！",
    "你真聪明！",
    "很好，再试一次！",
    "加油，你快成功了！",
    "再想想，你一定能行的！",
    "很接近了，再试试看！",
    "不要紧，慢慢来！"
];

// 成功完成时的祝贺语句
const congratulationMessages = [
    "太棒了！你成功了！",
    "真厉害！完美背诵！",
    "优秀！你是小诗人！",
    "了不起！继续努力！",
    "精彩！你学会了！"
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { poemsData, encouragementMessages, congratulationMessages };
}