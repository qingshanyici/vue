window.onload = function(){
    new Vue({
        el: "#table",
        data: {
            title: '',
            user: '',
            data: '',
            list: [
                {title: '1', user: 'a', data: '2020-07-21'},
                {title: '1', user: 'a', data: '2020-07-21'},
            ]
        },
        methods: {
            add: function(){
                this.list.push({title: this.title, user: this.user, data: this.data})
            }
        }
    })
}