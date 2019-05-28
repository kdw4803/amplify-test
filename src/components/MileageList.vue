<template>
<table>
<thead>
<tr>
<th>UserID</th>
<th>BillingID</th>
<th>Amount</th>
<th>MileageCode</th>
</tr>
</thead>
<tbody>
<template v-if="loading">
<spinner></spinner> <!-- here use a loaded you prefer -->
</template>
<template v-else>
<tr v-for="row in rows">
<td>{{ row.UserID }}</td>
<td>{{ row.BillingID }}</td>
<td>{{ row.Amount }}</td>
<td>{{ row.MileageCode }}</td>
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
  name: 'OrderList',
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
			let columns = ['UserID', 'BillingID', 'Amount', 'MileageCode']
			const result = await API.graphql(graphqlOperation(queries.listBillings.with(columns), {
				filter: {
					UserID: {
						eq: this.$route.query.user_id
					},
					BillingID: {
						beginsWith: 'MILEAGE'
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
