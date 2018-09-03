<template>
    <div class="appLogin">
        <el-form ref="form">
            <h3>系统登录</h3>
            <el-form-item>
                <el-input v-model="name" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="psd" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" class="rememberPsd">记住密码</el-checkbox>
            <el-form-item>
                <el-button type="primary" class="loginBtn" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
let self;
export default {
    name: 'appLogin',
    data () {
        return {
            name:"",
            psd:"" ,
            checked:false,
        }
    },
    created:function(){
        self=this;
    },
    methods:{
        register(){
            // this.$http.get('/lwfCompanyDemo/save',{
            //         params:{
            //             name:self.name,
            //             address:self.address,
            //             psd:self.psd
            //         }
            //     }).then(function (response) {
            //     console.log(response);
            //     self.forJava=response;
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
            Wechat.share({
                text: "This is just a plain string",
            scene: Wechat.Scene.TIMELINE   // share to Timeline
            }, function () {
                alert("Success");
            }, function (reason) {
                alert("Failed: " + reason);
            });
        },
        login(){
            // this.$http.get('/loginDemo/login',{
            //     params:{
            //         name:self.name,
            //         psd:self.psd
            //     }
            // })
            // .then(function (response) {
            //     console.log(JSON.stringify(response.data));
            //     self.tableData.splice(0);
            //     self.tableData.push(...response.data);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        }
    },
    mounted:function(){

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "./appLogin.less";
</style>
