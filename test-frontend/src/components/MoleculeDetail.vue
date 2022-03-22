<template>
    <div class="container">
    <div>
  <table class="table table-striped">
    <thead>
    <tr>
      <th>Keys</th>
      <th>Values</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>ID</td>
      <td>{{ responseData["id"] }}</td>
    </tr>
    <tr>
      <td>Max Phase</td>
      <td>{{ responseData["name"] }}</td>
    </tr>
    <tr>
      <td>Structure</td>
      <td>{{ responseData["structure"] }}</td>
    </tr>
    <tr>
      <td>Inchi Key</td>
      <td>{{ responseData["inchi_key"] }}</td>
    </tr>
    <tr>
      <td>Activity</td>
      <td><router-link :to="'/molecule/' + responseData.id + '/activity/'">View Activities</router-link></td>
    </tr>
    </tbody>
  </table>
    </div>
    </div>

</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "MoleculeDetail",
  data(){
    return {
      responseData:''
    }
  },
  mounted() {
    DataService.get(this.$route.params.id)
        .then(response => {
          this.responseData = response.data;
        })
        .catch(e => {
          console.log(e);
        });
  }
}
</script>
