<template>
  <div class="container">
    <div>
  <table class="table table-striped" >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Activity Details</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="x in responseData" v-bind:key="x.id">
      <th scope="row">{{ x.id }}</th>
      <td>{{ x.name }}</td>
      <td>
        <router-link :to="'/molecule/' + x.id">Molecule Details</router-link>
      </td>
      <td>
        <router-link :to="'/molecule/' + x.id + '/activity/'">Activity Details</router-link>
      </td>
    </tr>
  </tbody>
</table>
      <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#" v-bind:class="prevPage" @click="prevPage">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#" v-bind:class="nextPage" @click="nextPage">Next</a></li>
  </ul>
        Page {{ currentPage }} of {{ totalPages }}
</nav>
      </div>
  </div>
</template>


<script>
import DataService from "../services/DataService";

export default {
  name: "MoleculeList",
  data(){
    return {
      responseData:'',
      totalPages: '',
      currentPage: ''
    }
  },
  mounted() {
    this.limit = 10
    this.offset = 0
    this.currentPage = 1;
    this.loadData()
  },
  methods:{
    loadData() {
      DataService.getAll(this.limit, this.offset)
          .then(response => {
            this.responseData = response.data.results;
            this.totalPages = Math.ceil(response.data.count / 10);
          })
          .catch(e => {
            console.log(e);
          });
    },
    nextPage(){
      if (this.currentPage < this.totalPages){
        this.currentPage +=1
        this.offset = this.offset + 10;
        this.loadData(this.limit, this.offset)
      }
      else{
        alert("This is the last page");
      }
    },
    prevPage(){
      if (this.currentPage > 1){
        this.currentPage -=1
        this.offset = this.offset - 10;
        this.loadData(this.limit, this.offset)
      }
      else{
        alert("This is the first page");
      }
    }
  }
}
</script>
