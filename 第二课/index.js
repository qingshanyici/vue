window.onload = function(){
    new Vue({
        el: "#table",
        data: {
            popShow: false,
            obj: {
                title: '',
                user: '',
                data: '',
            },
            list: [
                {title: '1', user: 'a', data: '2020-07-21', id: 1},
                {title: '1', user: 'a', data: '2020-07-21', id: 20},
                {title: '1', user: 'a', data: '2020-07-21', id: 100},
            ],
            editObj: {}
        },
        methods: {
            add: function(){
                let {title, user, data} = this.obj
                if(!title || !user || !data) alert("请输入合理的值")
                //扩展运算符获取最大值
                var _id = Math.max(...this.list.map((item, index)=>item.id) + 1)
                this.list.push({title:title, user:user, data:data, id: _id}) 
            },
            del: function(index){
                this.list.splice(index, 1);
            },
            edit: function(item){ //编辑
                console.log("编辑-->>", item)
                this.popShow = true
                this.editObj = {title: item.title, user: item.user, data: item.user, id: item.id}
            },
            update: function(){ 
                console.log("updata-->>",this.editObj)
                for(var i = 0; i < this.list.length; i++){
                    // if (this.list[i].user == this.editObj.user)
                    //如果当前编辑的发布人与list的某一项发布人相同，就覆盖掉原来的list[i]
                    //这种做法，重命名的会导致两个都被改掉，同时，如果修改发布人，不会覆盖
                    if (this.list[i].id == this.editObj.id){ 
                        this.list[i] = this.editObj
                        this.popShow = false
                    }
                }
             }
        }
    })
}