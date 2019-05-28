<template>
<table>
<thead>
<tr>
<th>UserID</th>
<th>BillingID</th>
<th>Amount</th>
<th>Status</th>
<th></th>
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
<td>{{ row.Status }}</td>
<td></td>
</tr>
<tr>
<td>
{{user_id}}
</td>
<td>
<input type='text' v-model='billing_id'/>
</td>
<td>
<input type='text' v-model='amount'/>
</td>
<td>
<input type='text' v-model='status'/>
</td>
<td>
<button v-on:click='createBilling'>Add</button>
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
import * as mutations from '../graphql/mutations'

export default {
  name: 'RefundList',
	data() {
		return {
			loading: false,
			rows: [],
			billing_id: '',
			amount: '',
			status: '',
			user_id: this.$route.query.user_id
		}
	},
	created() {
			this.listBillings()
	},
	methods: {
		async listBillings() {
			let columns = ['UserID', 'BillingID', 'Amount', 'Status']
			const result = await API.graphql(graphqlOperation(queries.listBillings.with(columns), {
				filter: {
					UserID: {
						eq: this.$route.query.user_id
					},
					BillingID: {
						beginsWith: 'REFUND'
					}
				}
			}))
			
			this.rows = result.data.listBillings.items
    },
		async createBilling(event) {
			const today = new Date();

			const result = await API.graphql(graphqlOperation(mutations.createBilling, {
				input: {
					BillingID: this.billing_id,
					UserID: this.$route.query.user_id,
					Dated: today.toISOString().substring(0, 10),
					Amount: this.amount,
					Status: this.status
				}
			}))
			
			this.rows.push(result.data.createBilling)
			this.billing_id = ''
			this.status = ''
			this.amount = ''
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
