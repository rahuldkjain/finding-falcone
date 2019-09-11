import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/FindFalcone'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('FindFalcone.vue', () => {
  test('is a Vue instance', () => {
    const router = new VueRouter({
      mode: 'history'
    })
    const wrapper = shallowMount(Component, {
      localVue,
      router
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
