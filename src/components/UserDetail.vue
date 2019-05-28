<template>
<table>
<thead>
<tr>
<th>UserID</th>
<th>Dated</th>
</tr>
</thead>
<tbody>
<template v-if="loading">
<spinner></spinner> <!-- here use a loaded you prefer -->
</template>
<template v-else>
<td>{{ result.UserID }}</td>
<td>{{ result.Dated }}</td>
</template>
</tbody>
</table>
</template>

<script>
/* eslint-disable */
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries'

export default {
  name: 'UserDetail',
	data() {
		return {
			loading: false,
			result: {}
		}
	},
	created() {
			this.getBilling()
	},
	methods: {
		async getBilling() {
			let columns = ['UserID', 'Dated']
			const result = await API.graphql(graphqlOperation(queries.getBilling.with(columns), {
				UserID: this.$route.params.user_id,
				BillingID: 'USER-' + this.$route.params.user_id
			}))
			
			this.result = result.data.getBilling
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
