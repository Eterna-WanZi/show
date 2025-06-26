<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <div id="top">
          <div id="icon">
            <span>商城导购管理系统</span>
          </div>
            <el-dropdown  @command="handleCommand">
          <el-button type="primary">
            管理员<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="1">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        </div>
      
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            :default-active="router.currentRoute.value.name" text-color="#fff" >
            <el-menu-item  index="store" @click="tostore">
              <el-icon><icon-menu /></el-icon>
              <span>商店管理</span>
            </el-menu-item>
            <el-menu-item index="permissions" @click="topermissions">
              <el-icon> <setting /> </el-icon>
              <span>权限设置</span>
            </el-menu-item>
            <el-menu-item index="user" @click="touser">
              <el-icon><icon-menu /></el-icon>
              <span>用户日志</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>


</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import router from '@/router';


//退出登录
const handleCommand = (command: string | number | object) => {
  console.log('adfsfdds');
  
  if(command==='1'){
    router.push({name:"login"})
  }
}


const tostore=()=>{
  router.push({name:'store'})
}
const topermissions=()=>{
  router.push({name:'permissions'})
}
const touser=()=>{
  router.push({name:'user'})
}

</script>



<style lang="scss" scoped>
.el-header {
  padding: 0;

  #top {
    width: 100%;
    height: 60px;
    background: #0646A4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    #icon {
      display: flex;
      flex-direction: row;
      align-items: center;


      img {
        padding: 0 10px 0 20px;
        width: 36px;
        height: 36px;
      }

      span {
        padding-left: 50px;
        width: 300px;
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 33px;
      }
    }


    #PersonalCenter {
      display: flex;
      flex-direction: row;
      align-items: center;

      .label_2 {
        padding-left: 50px;
      }

      .thumbnail_1 {
        padding: 0 28px 0 9px;
      }
    }

  }

  .example-showcase .el-dropdown+.el-dropdown {
    margin-right: 15px;
  }

  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  .el-button{
    margin-right: 40px;
    background-color:#0646A4;
    border-radius: 6px;
  }
  
}

.el-aside {
  height: calc(100vh - 60px);
  background-color: rgb(240, 240, 240);

  .el-menu {
    
    width: 297px;
    height:168px;
    border: 0;
  }
  .el-menu-item{
    font-size: 18px;
    color: #000b1c;
    background-color: #FFFFFF;
    svg{
      padding-top: 5px;
      padding-left: 5px;
      width: 60px;
      height: 60px;
    }
    span{
      padding-left: 50px;
    }
  }
  .el-menu-item:hover {
    color: #0646A4;
    background-color: #e9f0f3;
}
.el-menu-item.is-active {
  color: #ffffff;
  background-color: #4081dde2;
}
}

.el-main {
  height: calc(100vh - 60px);
}
</style>