window.onload = function(){
    new Vue({
        el: "#myapp",
        data: {
            cur: 0,
            imgList: [
                {id: 1, src: '../程序员1.jpg'},
                {id: 2, src: '../程序员2.jpg'},
                {id: 3, src: '../程序员3.jpg'}
            ],
        },
        mounted(){
            this.autoplay();
        },
        methods: {
            autoplay(){
                //顶部banner轮播效果
                setInterval(()=>{
                    this.play()
                }, 2000)
            },
            play(){
                if (this.cur == this.imgList.length -1){
                    this.cur = 0
                } else {
                    this.cur ++ 
                }
            }
        }
    })
}