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
<tr v-for="row in rows">
<td>
<a v-bind:href="'/#/users/' + row.UserID">
{{ row.UserID }}
</a>
</td>
<td>{{ row.Dated }}</td>
<td>
<a v-bind:href="'/#/orders?user_id=' + row.UserID">
orders
</a>
</td>
<td>
<a v-bind:href="'/#/mileages?user_id=' + row.UserID">
mileages
</a>
</td>
<td>
<a v-bind:href="'/#/pgs?user_id=' + row.UserID">
pgs
</a>
</td>
<td>
<a v-bind:href="'/#/refunds?user_id=' + row.UserID">
refunds
</a>
</td>
<td>
<a v-bind:href="'/#/profits?user_id=' + row.UserID">
profits
</a>
</td>
</tr>
</template>
</tbody>
</table>
</template>

<script>
/* eslint-disable */
import { API, graphqlOperation } from 'aws-amplify'
import * as queries from '../graphql/queries'

export default {
  name: 'UserList',
	data() {
		return {
			loading: false,
			rows: []
		}
	},
	created() {
			this.listBillings()
	},
	methods: {
		async listBillings() {
			let columns = ['UserID', 'Dated']
			const result = await API.graphql(graphqlOperation(queries.listBillings.with(columns), {
				filter: {
					BillingID: {
						beginsWith: 'USER'
					}
				}
			}))
			
			this.rows = result.data.listBillings.items
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
