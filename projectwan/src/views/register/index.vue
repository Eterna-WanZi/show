<template>
    <div id="img">
      <div id="top">
        <div id="icon">
          <span>智能商城导购系统</span>
        </div>
      </div>
      <div id="body">
        <div id="card">
          <div id="content1">
            <span>注册</span>
            <div id="register" @click="toregister">
              <span>登录账号</span>
              <el-icon class="el-icon-arrow-right"></el-icon>
            </div>
          </div>
          <div id="content2">
            <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
              label-width="auto" class="demo-ruleForm">
              <el-form-item label="账号" prop="phone">
                <el-input v-model="ruleForm.phone" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="重复密码" prop="pass">
                <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
  
        </div>
      </div>
  
    </div>
  </template>
  
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import router from '@/router';
  
  const ruleFormRef = ref<FormInstance>()
  
  
  const toregister=()=>{
    router.push({name:'login'})
  }
  
  const validatePass = (rules:any, value: any, callback: any) => {
    if (value.length > 25 || value.length < 8) {
      callback(new Error('请输入8~25个字母或者数字'))
    } else if (!/[A-Z]/i.test(value)) {
      callback(new Error('请输入至少一个字母'))
    } else if (/[^a-zA-Z0-9]/.test(value)) {
      callback(new Error('含有非法字符'))
    }
    else {
      callback()
      rules
    }
  }
  const validatephone = (rules:any,value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入账号~'))
    } else if (!/^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/.test(value)) {
      callback(new Error('请输入正确的账号~'))
    } else {
      callback()
      rules
    }
  }
  
  
  
  const ruleForm = reactive({
    phone: '',
    pass: ''
  })
  
  const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    phone: [{ validator: validatephone, trigger: 'blur' }],
  })
  
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      //验证成功
      if (valid) {
        //允许提交
        console.log('submit!')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
  
  
  </script>
  
  
  <style lang="scss" scoped>
  #img {
    height: 100vh;
    width: 100%;
    background-position: center center;
    background-size: cover;
    background-image: url("../assets/images/登录注册背景.png");
    min-width: 500px;
    min-height: 960px;
  
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
  
    #body {
  
      margin-top: 80px;
      width: 100%;
  
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
  
      #card {
        min-width: 430px;
        min-height: 499px;
        // position: absolute;
        // left: 50%;
        // top: 50%;
        // transform: translate(-50%, -50%);
        margin-top: 20px;
        width: 430px;
        height: 499px;
        background: #FFFFFF;
        box-shadow: 0px 10px 50px 0px rgba(198, 217, 236, 0.25);
        border-radius: 2px;
        border: 1px solid #E9EFF2;
  
        #content1 {
          height: 33px;
          padding: 0 42px;
          margin-top: 40px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
  
          span {
            width: 48px;
            height: 33px;
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #253044;
            line-height: 33px;
          }
  
          #register {
            span {
              width: 56px;
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #8D939D;
              line-height: 20px;
            }
  
            ::v-deep [class*=" el-icon-"],
            [class^=el-icon-] {
              margin-top: 2.5px !important;
              color: #8D939D !important;
            }
          }
  
          #register:hover {
            span {
              color: #0646A4;
            }
  
            ::v-deep [class*=" el-icon-"],
            [class^=el-icon-] {
              color: #0646A4 !important;
            }
          }
        }
  
        #content2 {
          height: 216px;
          padding: 0 42px;
          margin-top: 40px;
  
          ::v-deep .el-input__suffix {
            width: 18px;
            height: 18px;
          }
  
          ::v-deep .el-form-item {
            margin-bottom: 20px;
            margin-top: 40px;
          }
  
          #verificationbox {
            display: flex;
            flex-direction: row;
  
            // //验证码加载样式
            // ::v-deep .el-loading-spinner .circular {
            //   width: 3px;
            //   height: 32px;
            // }
  
            // ::v-deep .el-loading-spinner {
            //   margin-top: -26px;
            // }
  
  
  
          }
  
          ::v-deep .el-input__prefix,
          ::v-deep .el-input__suffix {
            top: 3px !important;
  
          }
  
          ::v-deep .el-input__inner {
            // margin-bottom: 15px;
            // padding-bottom: 15px;
            width: 240px;
            height: 46px;
            // background: #FBFBFB;
            // border-radius: 2px;
            // border: 1px solid #E4E6E8;
  
          }
  
          ::v-deep .el-input__wrapper {
  
            width: 240px;
            height: 46px;
  
  
          }
  
          // ::v-deep .el-input__inner::placeholder {
          //   width: 306px;
          //   height: 20px;
          //   font-size: 14px;
          //   font-family: PingFangSC-Regular, PingFang SC;
          //   font-weight: 400;
          //   color: #8D939D;
          //   line-height: 20px;
          // }
  
          button {
            width: 346px;
            height: 46px;
            background: #0646A4;
            border-radius: 2px;
            border: 0;
            margin-top: 40px;
            margin-bottom: 20px;
  
            span {
              width: 36px;
              height: 22px;
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 22px;
            }
          }
  
          button:hover {
            background: #034dbd;
  
            span {
              color: #FFFFFF;
            }
          }
  
          span {
            width: 70px;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7A7A7A;
            line-height: 20px;
          }
  
          span:hover {
            color: #0646A4;
          }
  
          //验证码框
  
          ::v-deep .el-input__prefix,
          ::v-deep .el-input__suffix {
            // top: 13px !important;
  
            #before {
              width: 70px;
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #E4E6E8;
              line-height: 20px;
            }
  
            span {
              width: 70px;
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #0646A4;
              line-height: 20px;
            }
          }
  
        }
  
        #content3 {
          margin-top: 24px;
          height: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
  
          span {
            width: 84px;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #AEB3BA;
            line-height: 20px;
          }
  
          hr {
            border: 0;
            width: 90px;
            height: 1px;
            background: #E4E6E8;
          }
        }
  
        #content4 {
          width: 430px;
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-top: 16px;
  
          #wechat {
            margin-left: 112px;
            width: 56px;
            display: flex;
            flex-direction: column;
            align-items: center;
  
            img {
              opacity: 0.75;
              margin-left: 3px;
              height: 49px;
              width: 48px;
              margin-bottom: 10px;
            }
  
            span {
              width: 56px;
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #575E6E;
              line-height: 20px;
            }
          }
  
          #wechat:hover {
            img {
              opacity: 1;
            }
  
            span {
              color: #5477ab;
            }
          }
  
          #note {
            margin-left: 90px;
            width: 70px;
            display: flex;
            flex-direction: column;
            align-items: center;
  
            img {
              opacity: 0.8;
              height: 49px;
              width: 48px;
              margin-bottom: 10px;
            }
  
            span {
  
              width: 70px;
              height: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #575E6E;
              line-height: 20px;
            }
          }
  
          #note:hover {
            img {
              opacity: 1;
            }
  
            span {
              color: #5477ab;
            }
          }
        }
      }
    }
  
  }
  </style>