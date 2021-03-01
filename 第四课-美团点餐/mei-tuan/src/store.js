import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabShow: true,
        cominglist: []
    },
    getters: {
        cominglistGetter(state){
            return state.cominglist.filter((item, index)=>{
                return index <= 1
            })
        }
    },
    mutations: {
        HideTabbar(state,value){
            state.tabShow = value
        },
        ShowTabbar(state, value){
            state.tabShow = value
        },
        cominglist(state, value){
            state.cominglist = value
        }
    },
    actions: {
        //即将上映
        getCominglist(store){             
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=7410232',
                headers: {
                  'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
                  'X-Host': 'mall.film-ticket.film.list'
                }
              }).then(res => {
                console.log("cominglist-->>",res.data);
                store.commit('cominglist', res.data.data.films)
              })
        }
    }
})