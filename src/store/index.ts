import { state } from './modules/states';
import home from './modules/home';
import {  IHomeState } from '../typings/home';
import { createStore } from 'vuex';

export interface IGlobalState {
  home: IHomeState
}

const store = createStore<IGlobalState>({
  mutations: {},
  actions: {},
  modules: {
    home
  },
});

export default store
