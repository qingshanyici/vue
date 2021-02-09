window.onload = function () {
    new Vue({
        el: "#myapp",
        data: {
            input: '',
            message: '',
            question: '',
            answer: 'cannot answer you util you ask question',
            items: [
                { name: '计划1', checked: false },
                { name: '计划2', checked: true },
                { name: '计划3', checked: false },
            ]
        },
        watch: {
            question: function (newQ, oldQ) {
                console.log('question变化了')
                this.answer = 'waiting ...'
                this.getAnswer()
            }
        },
        created: function () {
            this.deGetAnswer = _.debounce(this.getAnswer, 500)
        },
        computed: {
            reverseMsg: function () {
                var msg = this.message.split("").reverse().join("")
                return msg
            }
        },
        methods: {
            getAnswer() {
                if (this.question.indexOf("?") == -1) {
                    this.answer = "question have a mark of '?'"
                } else {
                    this.answer = "waitting answer from api..."
                    var that = this
                    axios.get('https://yesno.wtf/api?question=${this.question}')
                    .then((res) => { that.answer = res.data.answer })
                    .catch((err) => { that.answer = err })
                }
            }
        }
    })
}