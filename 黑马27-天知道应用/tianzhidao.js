var baseUrl = "http://wthrcdn.etouch.cn/weather_mini?city="

var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {
        searchWeather: function(){
            var that = this
            axios.get(baseUrl + this.city)
            .then((res)=>{
                console.log("res-->>", res.data.data.forecast)
                that.weatherList = res.data.data.forecast
            }).catch((err)=>{console.log("err-->>", err)})
        }
    }
})