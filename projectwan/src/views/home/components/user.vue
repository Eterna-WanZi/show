<template>
    <div>
        <el-table :data="tableData" style="width: 100% ,height=100%" border>
            <el-table-column prop="name" label="用户名" width="300" />
            <el-table-column prop="start" label="起点" width="300" />
            <el-table-column prop="end" label="终点" width="300" />
            <el-table-column prop="time" label="时间" />
                      <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
        </el-table>
        <el-drawer ref="drawerRef" v-model="dialog" title="编辑商店信息" :before-close="handleClose" direction="ltr"
            class="demo-drawer">
            <div class="demo-drawer__content">
                <el-form :model="form">
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="form.floor" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="起点" :label-width="formLabelWidth">
                        <el-input v-model="form.id" autocomplete="off" />
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

    </div>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { ElDrawer, ElMessageBox } from 'element-plus';

const search:any=reactive({})

interface UserData {
    name: string;
    start: string;
    end:string;
    time:string;
}

const tableData = ref<UserData[]>([]);


tableData.value.push(
    {
        name: '猩芯姐姐',
        start: '麦当劳',
        end: '肯德基',
        time: '2024.04.11 08:33'
    },
    {
        name: '丸丸公主',
        start: '星巴克',
        end: '汉堡王',
        time: '2024.04.11 09:15'
    },
    {
        name: '周琪',
        start: '麦当劳',
        end: '必胜客',
        time: '2024.04.11 10:02'
    },
    {
        name: '欲淋',
        start: '汉堡王',
        end: '肯德基',
        time: '2024.04.11 10:48'
    },
    {
        name: '浩翔',
        start: '肯德基',
        end: '麦当劳',
        time: '2024.04.11 11:21'
    },
    {
        name: '导演',
        start: '必胜客',
        end: '麦当劳',
        time: '2024.04.11 12:05'
    },
    {
        name: '小芳',
        start: '汉堡王',
        end: '星巴克',
        time: '2024.04.11 13:09'
    },
    {
        name: '小明',
        start: '肯德基',
        end: '必胜客',
        time: '2024.04.11 14:17'
    },
    {
        name: '小红',
        start: '麦当劳',
        end: '星巴克',
        time: '2024.04.11 15:22'
    },
    {
        name: '小强',
        start: '必胜客',
        end: '肯德基',
        time: '2024.04.11 16:30'
    },
    {
        name: '张三',
        start: '星巴克',
        end: '必胜客',
        time: '2024.04.11 17:45'
    },
    {
        name: '李四',
        start: '麦当劳',
        end: '汉堡王',
        time: '2024.04.11 18:58'
    },
    {
        name: '王五',
        start: '必胜客',
        end: '麦当劳',
        time: '2024.04.11 19:36'
    },
    {
        name: '赵六',
        start: '星巴克',
        end: '肯德基',
        time: '2024.04.11 20:42'
    },
    {
        name: '钱七',
        start: '麦当劳',
        end: '必胜客',
        time: '2024.04.11 21:59'
    },
    {
        name: '孙八',
        start: '肯德基',
        end: '麦当劳',
        time: '2024.04.11 22:28'
    },
    {
        name: '周九',
        start: '汉堡王',
        end: '星巴克',
        time: '2024.04.11 23:15'
    },
    {
        name: '吴十',
        start: '麦当劳',
        end: '肯德基',
        time: '2024.04.12 00:05'
    },
    {
        name: '郑十一',
        start: '星巴克',
        end: '汉堡王',
        time: '2024.04.12 01:23'
    },
    {
        name: '黄十二',
        start: '肯德基',
        end: '必胜客',
        time: '2024.04.12 02:34'
    },
    {
        name: '刘十三',
        start: '麦当劳',
        end: '星巴克',
        time: '2024.04.12 03:47'
    },
    {
        name: '陈十四',
        start: '汉堡王',
        end: '麦当劳',
        time: '2024.04.12 04:52'
    },
    {
        name: '范十五',
        start: '必胜客',
        end: '肯德基',
        time: '2024.04.12 05:09'
    },
    {
        name: '林十六',
        start: '星巴克',
        end: '必胜客',
        time: '2024.04.12 06:33'
    },
    {
        name: '冯十七',
        start: '麦当劳',
        end: '肯德基',
        time: '2024.04.12 07:58'
    },
    {
        name: '宋十八',
        start: '肯德基',
        end: '麦当劳',
        time: '2024.04.12 08:37'
    },
    {
        name: '余十九',
        start: '必胜客',
        end: '星巴克',
        time: '2024.04.12 09:44'
    },
    {
        name: '曹二十',
        start: '星巴克',
        end: '肯德基',
        time: '2024.04.12 10:56'
    }
   
)



const formLabelWidth = '80px'
let timer:any

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
  
    drawerRef.value!.close()
}

const handleClose = (done:any) => {
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
}</style>