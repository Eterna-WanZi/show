<template>
    <el-table :key="Math.random()" :data="tableDatalast" style="width: 100% ,height=100%" border>
        <el-table-column prop="floor" label="所在楼层" width="300" />
        <el-table-column prop="id" label="商店序号" width="300" />
        <el-table-column prop="name" label="商店名字" width="300" />
        <el-table-column prop="state" label="营业状态" />
        <el-table-column label="操作" width="100" show-overflow-tooltip>
            <template v-slot="scope">
                <el-button type="primary" text @click="dialog = true, add(scope.row)">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-drawer ref="drawerRef" v-model="dialog" title="编辑商店信息" :before-close="handleClose" direction="ltr"
        class="demo-drawer">
        <div class="demo-drawer__content">
            <el-form :model="form">
                <el-form-item label="所在楼层" :label-width="formLabelWidth">
                    <el-input disabled v-model="form.floor" :placeholder="form.floor" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商店序号" :label-width="formLabelWidth">
                    <el-input disabled v-model="form.id" autocomplete="off" />
                </el-form-item>
                <el-form-item label="商店名字" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="营业状态" :label-width="formLabelWidth">
                    <el-input v-model="form.state" autocomplete="off" />
                </el-form-item>
            </el-form>
            <div class="demo-drawer__footer">
                <el-button @click="cancelForm">取消</el-button>
                <el-button type="primary" :loading="loading" @click="onClick">{{
        loading ? '提交中...' : '提交'
                    }}</el-button>
            </div>
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { ElDrawer, ElMessageBox } from 'element-plus';


const add = (row: any) => {
    console.log(row, 'adsfasdfasf');
    form.floor = row.floor
    form.id = row.id
    form.name = row.name
    form.state = row.state
}

const tableData: any = [];
const shopNames = {
    clothes: [
        "优衣库", "ZARA", "H&M", "UNIQLO", "ONLY",
        "Forever 21", "Giordano", "Gap", "MUJI", "森马"
    ],
    restaurant: [
        "肯德基", "麦当劳", "必胜客", "星巴克", "德克士",
        "华莱士", "永和豆浆", "吉野家", "汉堡王", "百果园",
        "鸭血粉丝汤", "粥铺", "烧烤店", "串串香", "炸鸡店",
        "快炒店", "川菜馆", "日本料理", "西餐厅", "甜品店",
        "面包房", "奶茶店", "咖啡厅", "糕点店", "披萨店",
        "冰淇淋店", "水果店", "果汁店", "海鲜店", "牛肉面馆",
        "烤鱼店", "火锅店", "包子铺", "炸酱面馆", "烧腊店",
        "米粉店", "拉面馆", "韩国料理", "泰国菜馆", "越南美食",
        "印度餐厅", "墨西哥餐", "意大利面", "土耳其烤肉",
        "法式餐厅", "地中海美食", "德国猪脚", "阿拉伯餐",
        "巴西烤肉", "南美烧烤", "澳洲牛排", "瑞士火锅",
        "荷兰奶酪", "比利时啤酒", "墨西哥卷饼", "秘鲁鸡肉",
        "阿根廷牛肉"
    ],
    toy: [
        "迪士尼", "LEGO", "小猪佩奇", "哈利波特", "妙妙屋",
        "巴拉巴拉", "玩具反斗城", "木制玩具店", "玩具世界",
        "乐高", "溜冰场", "保龄球馆", "射箭馆", "壁球馆",
        "高尔夫球场", "体育馆", "赛车场", "演艺中心", "博物馆",
        "美术馆", "游泳池", "剧院", "音乐厅", "艺术学院",
        "游泳池", "滑雪场", "攀岩馆", "水上乐园", "托儿所",
        "图书馆", "博物馆", "游乐园", "游泳馆", "溜冰场",
        "健身房", "网球场", "足球场", "篮球场", "排球场",
        "羽毛球馆", "保龄球馆", "射箭场", "壁球馆", "高尔夫球场",
        "橄榄球场", "自行车场", "赛车场", "舞蹈室", "击剑馆",
        "马术场", "舞厅", "迪斯科舞厅", "游戏厅", "竞技场",
        "马戏团", "娱乐城", "购物中心", "超市", "百货商场",
        "特色商街", "淘宝村", "二手市场", "古玩市场", "书店",
        "花市"
    ]
};

let clothesIndex = 0;
let restaurantIndex = 0;
let toyIndex = 0;

for (let i = 1; i <= 58; i++) {
    let shopType;
    if (i <= 10) shopType = 'clothes';
    else if (i <= 48) shopType = 'restaurant';
    else shopType = 'toy';

    let shopName;
    switch (shopType) {
        case 'clothes':
            shopName = shopNames.clothes[clothesIndex++];
            break;
        case 'restaurant':
            shopName = shopNames.restaurant[restaurantIndex++];
            break;
        case 'toy':
            shopName = shopNames.toy[toyIndex++];
            break;
    }

    tableData.push({
        floor: '1',
        id: i.toString(),
        name: shopName,
        type: shopType,
        state: '营业中'
    });
}
if ((sessionStorage.getItem('istableData')) != '1') {
    sessionStorage.setItem('tableData', JSON.stringify(tableData));
    sessionStorage.setItem('istableData', JSON.stringify(1));
    console.log('11111',sessionStorage.getItem('istableData'));

}

const tableDatalast: any = JSON.parse(sessionStorage.getItem('tableData') as string);





const formLabelWidth = '80px'
let timer: any

const dialog = ref(false)
const loading = ref(false)

const form = reactive({
    floor: '',
    id: '',
    name: '',
    state: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})



const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClick = () => {
    for (let item of tableDatalast) {
                        if (item.id === form.id) {
                            item.name = form.name
                            item.state = form.state
                            sessionStorage.setItem('tableData', JSON.stringify(tableDatalast));
                            window.location.reload();
                        }
                    }
    drawerRef.value!.close()

}

const handleClose = (done: any) => {
    if (loading.value) {
        return
    }
    ElMessageBox.confirm('您希望提交此次编辑吗？')
        .then(() => {
            loading.value = true
            timer = setTimeout(() => {
                done()
                // 动画关闭需要一定的时间
                setTimeout(() => {
                    loading.value = false
                    for (let item of tableDatalast) {
                        if (item.id === form.id) {
                            item.name = form.name
                            item.state = form.state
                            sessionStorage.setItem('tableData', JSON.stringify(tableDatalast));
                            window.location.reload();
                        }
                    }

                }, 400)
            }, 2000)
        })
        .catch(() => {
            // catch error
        })
}

const cancelForm = () => {
    loading.value = false
    dialog.value = false
    clearTimeout(timer)
}
// const tableData1:any = JSON.parse(tableData);


onMounted(() => {


})
</script>


<style lang="scss" scoped>
.el-button {
    color: #ffffff;
    background-color: #0646a4;
}

.el-button:hover {
    color: #ffffff;
    background-color: #0646a4;
}

.el-button.is-text:not(.is-disabled):hover {
    color: #ffffff;
    background-color: #0051cbe8;
}

.demo-drawer__footer {
    .el-button {
        border-radius: 9px;
        margin-top: 470px;
        width: 210px;
        height: 50px;
    }
}
</style>