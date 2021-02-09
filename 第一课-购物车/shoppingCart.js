window.onload = function(){
    new Vue({
        el: "#shopcart",
        data: {
            input: '',
            items: [
                {name: '苹果', price: 9, count: 2, url: '../程序员1.jpg'},
                {name: '梨', price: 49, count: 3, url: '../程序员3.jpg'},
                {name: '草莓', price: 90, count: 1, url: '../程序员2.jpg'}
            ]
        },
        filters: {
            priceFilter: function(data, n){
                return "￥" + data.toFixed(n);
            }
        },
        computed: {
            searchData: function(){
                if (!this.input) return this.items;
                return this.items.filter((item, index)=>{
                    console.log(item.name)
                  return  item.name.indexOf(this.input) !=-1
                    // item.name.includes(this.input)
                })
            },
            totalCount: function(){
                return this.searchData.reduce((total, cur)=>{
                    return total + cur.count
                }, 0)
            },
            totalPrice: function(){
                return this.searchData.reduce((total, cur)=>{
                    return total + cur.price * cur.count
                }, 0)
            }
        },
        methods: {
            add: function (index) {
                console.log("add")
                this.items[index].count ++ 
            },
            del: function (index) {
                console.log("del")
                if (this.items[index].count == 0) return
                this.items[index].count --
            }
        }

    })
}