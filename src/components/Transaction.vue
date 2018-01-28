
<template>
<div>
   <v-content>
      <v-container grid-list-md text-xs-center>
           <v-layout row wrap>
             <v-flex xs12>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Search Transaction History</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs12>
               <input style="font-size:2em;width:100%" v-model="query">
             </v-flex>

             <v-flex xs6>
                <v-card dark color="primary">
                   <v-card-text @click="clear" class="px-0">Clear</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="primary">
                   <v-card-text @click="search" class="px-0">Search</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Key</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark color="dark">
                   <v-card-text class="px-0">Amount</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark v-for="person in curr_rows" :key="person.key" color="dark">
                   <v-card-text @click="edit" class="px-0">{{person.key}}</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs6>
                <v-card dark v-for="person in curr_rows" :key="person.amount" color="dark">
                   <v-card-text @click="edit" class="px-0">{{person.amount}}</v-card-text>
                </v-card>
             </v-flex>

             <v-flex xs12>
               <v-card dark color="primary">
                  <v-card-text @click="pay" v-on:click="pay" class="px-0">Pay</v-card-text>
               </v-card>
             </v-flex>
          </v-layout>
        </v-container>
     </v-content>
<bottom-nav />
</div>
</template>



<script>
/* eslint-disable */
export default{
  name: "Transaction",
  data: function () {
    return {
      query: "",
      edit_mode: false,
      dialogue: false,
      curr_rows: [],
      rows: [
              {key: 'Pz99wBnXIagJv160KvEKg', amount: '32.400302'},
              {key: 'JTv0oxiTou027DAxaQuf', amount: '21.56438963'},
              {key: 'ybL6Aptq3Bv4ezPCgOVl', amount: '-43.5439543'},
              {key: 'ybL6Aptq3Bv4ezPCgOVl', amount: '33.5345234'},
              {key: 'XpY7QixAkmy975oGVaOa', amount: '-34.5432523'},
              {key: '91v1Iyi9py7NhZitHKuS', amount: '32.002012'},
            ]
    }
  },
  created: function(){
    this.curr_rows = this.rows
  },
  methods: {
    search: function(){
        this.curr_rows = []
        for (var index in this.rows){
            if (this.rows[index].key.includes(this.query) ||
              this.rows[index].name.toLowerCase().includes(this.query.toLowerCase())){
              this.curr_rows.push(this.rows[index])
            }
        }
        console.log(this.curr_rows)
    },
    clear: function(){
        this.curr_rows = this.rows
        this.query = ""
    },

    edit: function(){
        this.edit_mode = true
    },

    pay: function () {
      this.$router.push('/user/caleb/pay')
    }
  }
}
</script>
