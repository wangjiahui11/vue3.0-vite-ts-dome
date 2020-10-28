
import { CATEGORY_TYPES, IHomeState, ISlider, ILessons} from '../../typings/home';
import { IGlobalState } from '..'
import { Module } from "vuex";
import { getsliderList,getsLessonsList} from '/@/api/index.ts'
import * as TYPES from "../actions-types.ts";

const state: IHomeState = {
  currentCategory: CATEGORY_TYPES.REACT,
  sliders: [],
  lessons: {
    hasMore: false,
    loading: false,
    limit: 5,
    offset: 1,
    list: []
  }
}
// c第一个参数自己的状态，第二个全局的状态
const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
  // 同步操作执行
  mutations:{
    [TYPES.SET_CATEGORY]:(state, payload: CATEGORY_TYPES) =>{
      state.currentCategory=payload
    },
    [TYPES.GET_SLIDER]: (state, payload: ISlider[]) =>{
        state.sliders=payload
    },
    [TYPES.GET_LESSONS]: (state, payload: ILessons) =>{
        state.lessons=payload
    }
  },
  // 执行mutations 通过commit 放法
  actions:{
   async [TYPES.GET_SLIDER]({commit}){
      let res = await getsliderList()
      commit(TYPES.GET_SLIDER, res.data)
    },
    async [TYPES.GET_LESSONS]({commit}){
      let res = await getsLessonsList({ limit: 10, category: state.currentCategory})
      commit(TYPES.GET_LESSONS, res.data)
    },
  }
}

export default home
