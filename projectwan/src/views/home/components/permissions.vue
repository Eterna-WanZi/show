<template>
    <div>
        <el-table :data="tableDatalast" style="width: 100% ,height=100%" border>
            <el-table-column prop="id" label="ID" width="300" />
            <el-table-column prop="name" label="用户名" width="300" />
            <el-table-column prop="identity" label="身份" />
            <el-table-column label="操作" width="100">
                <template v-slot="scope">
                <el-button type="primary" text @click="dialog = true,add(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
            <template #header>
        <el-input v-model="search" size="small" placeholder="Type to search" />
      </template>
        </el-table>
        <el-drawer ref="drawerRef" v-model="dialog" title="编辑商店信息" :before-close="handleClose" direction="ltr"
            class="demo-drawer">
            <div class="demo-drawer__content">
                <el-form :model="form">
                    <el-form-item label="ID" :label-width="formLabelWidth">
                        <el-input disabled v-model="form.id" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="用户名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="身份" :label-width="formLabelWidth">
                        <el-input v-model="form.identity" autocomplete="off" />
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
    id:string;
    name: string;
    identity: string;
}

const tableData2 = ref<UserData[]>([])

tableData2.value.push(
    {
        id:'1',
        name: '猩芯姐姐',
        identity: '管理员',
    },
    {
        id:'2',
        name: '丸丸公主',
        identity: '普通用户'
    },
    {
        id:'3',
        name: '周琪',
        identity: '普通用户'
    },
    {
        id:'4',
        name: '欲淋',
        identity: '普通用户'
    },
    {
        id:'5',
        name: '浩翔',
        identity: '普通用户'
    },
    {
        id:'6',
        name: '导演',
        identity: '普通用户'
    }
)
if ((sessionStorage.getItem('istableData2')) != '1') {
    sessionStorage.setItem('tableData2', JSON.stringify(tableData2.value));
    sessionStorage.setItem('istableData2', JSON.stringify(1));

}

const add = (row: any) => {
    form.id = row.id
    form.name = row.name
    form.identity = row.identity
}
const tableDatalast: any = JSON.parse(sessionStorage.getItem('tableData2') as string);

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
    identity:''
})



const drawerRef = ref<InstanceType<typeof ElDrawer>>()
const onClick = () => {
    for (let item of tableDatalast) {
                        if (item.id === form.id) {
                            item.name = form.name
                            item.identity = form.identity
                            sessionStorage.setItem('tableData2', JSON.stringify(tableDatalast));
                            window.location.reload();
                        }
                    }
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
                    for (let item of tableDatalast) {
                        if (item.id === form.id) {
                            item.name = form.name
                            item.identity = form.identity
                            sessionStorage.setItem('tableData2', JSON.stringify(tableDatalast));
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