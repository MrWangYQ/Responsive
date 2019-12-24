<template>
  <div>

  </div>
</template>

<script lang='ts'>
// import Vue from "vue"
// import Component from "vue-class-component"
import { Vue, Component } from 'vue-property-decorator';
import { State, Action, Getter, Mutation, namespace } from 'vuex-class'

const someModule = namespace('test');

@Component
export default class Test extends Vue {
  name:string = 'Simon Zhang'
  @someModule.State(state => state.menulist) menulist: any;
  @someModule.Action('saveMenuListFN') saveMenuListFN: any;

  get MyName():string {
    return `My name is ${this.name}`
  }

  sayHello():void {
    alert(`hello ${this.name}`);
  }



  created() {
    // this.sayHello();
    console.log(this.saveMenuListFN, this.menulist, '32', this.name);
    
  }
}
</script>

<style>

</style>