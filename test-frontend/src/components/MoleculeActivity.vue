<template>
  <div class="container">
    <div>
      <br>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type</th>
      <th scope="col">Units</th>
      <th scope="col">Value</th>
      <th scope="col">Target Name</th>
      <th scope="col">Target Organism</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="x in responseData" v-bind:key="x.id">
      <th scope="row">{{ x.id }}</th>
      <td>{{ x.type }}</td>
      <td>{{ x.units }}</td>
      <td>{{ x.value }}</td>
      <td>{{ x.target.name }}</td>
      <td>{{ x.target.organism }}</td>
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
  name: "MoleculeActivity",
  data(){
    return {
      responseData:'',
      totalPages: '',
      currentPage: ''
    }
  },
  methods:{
    loadData() {
      DataService.get_activity(this.$route.params.id, this.limit, this.offset)
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
  },
  mounted() {
    this.limit = 10
    this.offset = 0
    this.currentPage = 1;
    this.loadData()
  },
}
</script>

#