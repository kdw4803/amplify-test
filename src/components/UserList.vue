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
<td>{{ row.UserID }}</td>
<td>{{ row.Dated }}</td>
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
			const result = await API.graphql(graphqlOperation(queries.listBillings, {
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
