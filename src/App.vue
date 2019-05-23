<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import { components } from 'aws-amplify-vue'
import Amplify from 'aws-amplify'
import awsmobile from './aws-exports'

Amplify.configure(awsmobile)

// const getBilling = async () => {
//   const result = await API.graphql(graphqlOperation(queries.getBilling, { UserID: 23058, BillingID: 'USER-23058' }))
//   console.log(result)
// }

export default {
  name: 'app',
  components: {
    ...components
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
