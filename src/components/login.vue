<template>
    <div class="hello">
        <el-form ref="form" label-width="80px">
        <el-form-item label="账号">
            <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="psd"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="address"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="register">分享</el-button>
            <el-button type="primary" @click="submit">replace</el-button>
            <el-button type="primary" @click="del">删除</el-button>
            <el-button>取消</el-button>
        </el-form-item>
        </el-form>
        <h1>已有账号：</h1>
        <template>
    <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="psd"
            label="密码">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
let self;
export default {
    name: 'HelloWorld',
    data () {
        return {
            name:"",
            psd:"" ,
            address:"广州海珠",
            tableData:[]
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
        del(){
            // this.$http.get('/loginDemo/del',{
            //     params:{
            //         name:self.name,
            //         psd:self.psd
            //     }
            // })
            // .then(function (response) {
            //     console.log(response);
            //     self.forJava=response;
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
        },
        submit(){
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
        Wechat.isInstalled(function (installed) {
            alert("Wechat installed: " + (installed ? "Yes" : "No"));
        }, function (reason) {
            alert("Failed: " + reason);
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
