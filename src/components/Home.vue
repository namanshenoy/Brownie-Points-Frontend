<template>
  <div class="home" id="home">
    <v-content>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
          </v-flex>
          </br></br>

        </v-layout>
      </v-container>
    </v-content>
    <div class="col-md-12">
      <div>
        <vue-good-table
          :columns="columns"
          :rows="rows"/>
      </div>
    </div>
    <bottom-nav />
   </div>
</template>

<script>
// import TransactionItem from './TransactionItem.vue'
import Vue from 'vue'
import VueGoodTable from 'vue-good-table'
import BottomNav from './BottomNav'

Vue.use(VueGoodTable)

export default {
  name: 'Home',
  components: {
    BottomNav
  },
  props: [
    'username'
  ],
  data () {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
          filterable: true
        },
        {
          label: 'Date',
          field: 'createdAt',
          type: 'string',
          inputFormat: 'YYYYMMDD',
          outputFormat: 'MMM Do YY'
        },
        {
          label: 'USD',
          field: 'score',
          type: 'string',
          html: false
        }
      ],
      rows: [
        {id: 1, name: 'John', age: 20, createdAt: '2011-10-31', score: '$234'},
        {id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: '$3'},
        {id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: '$3343'},
        {id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: '$43'},
        {id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: '$73345'},
        {id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: '$84'},
        {id: 7, name: 'Jane', age: 24, createdAt: '20111031', score: '$20'},
        {id: 8, name: 'Susan', age: 16, createdAt: '2013-10-31', score: '$9324'},
        {id: 9, name: 'Chris', age: 55, createdAt: '2012-10-31', score: '$859'},
        {id: 10, name: 'Dan', age: 40, createdAt: '2011-10-31', score: '$1'},
        {id: 11, name: 'John', age: 20, createdAt: '2011-10-31', score: '$26'},
        {id: 12, name: 'Jane', age: 24, createdAt: '2011-07-31', score: '$323'},
        {id: 13, name: 'Susan', age: 16, createdAt: '2017-02-28', score: '$9343'},
        {id: 14, name: 'Chris', age: 55, createdAt: '2017-06-28', score: '$907'},
        {id: 15, name: 'Dan', age: 40, createdAt: '2011-10-31', score: '$968'},
        {id: 19, name: 'Chris', age: 55, createdAt: '2011-10-31', score: '$23452'},
        {id: 20, name: 'Dan', age: 40, createdAt: '2011-10-31', score: '$1'}
      ]
    }
  },
  methods: {
    auth: function () {
      this.$router.push('/user/' + 'caleb/' + 'pay')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

button {
  padding: 20px;
}

</style>
