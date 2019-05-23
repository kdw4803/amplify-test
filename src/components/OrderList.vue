<template>
<table>
<thead>
<tr>
<th>UserID</th>
<th>BillingID</th>
<th>Amount</th>
<th>StartDate</th>
<th>EndDate</th>
<th>DeliverDate</th>
<th>ExpectedDate</th>
<th>OrderKinds</th>
<th>OrderStatus</th>
<th>PID</th>
<th>PKGID</th>
<th>PLID</th>
<th>UserIDBuyer</th>
<th>UserIDSeller</th>
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
<td>{{ row.StartDate }}</td>
<td>{{ row.EndDate }}</td>
<td>{{ row.DeliverDate }}</td>
<td>{{ row.ExpectedDate }}</td>
<td>{{ row.OrderKinds }}</td>
<td>{{ row.OrderStatus }}</td>
<td>{{ row.PID }}</td>
<td>{{ row.PKGID }}</td>
<td>{{ row.PLID }}</td>
<td>{{ row.UserIDBuyer }}</td>
<td>{{ row.UserIDSeller }}</td>
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
			const result = await API.graphql(graphqlOperation(queries.listBillings, {
				filter: {
					UserID: {
						eq: this.$route.params.user_id
					},
					BillingID: {
						beginsWith: 'ORDER'
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
