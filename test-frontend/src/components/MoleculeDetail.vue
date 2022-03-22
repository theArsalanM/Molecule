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

  <div id="example-output"></div>

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
    window.initRDKitModule()
        .then(function (RDKit){
          window.RDKit = RDKit;
        })
    DataService.get(this.$route.params.id)
        .then(response => {
          this.responseData = response.data;
          const mol = window.RDKit.get_mol(response.data.structure);
          const dest = document.getElementById("example-output");
          const svg = mol.get_svg();
          dest.innerHTML = "<div id='drawing'>" + svg + "</div>";
        })
        .catch(e => {
          console.log(e);
        });
  }
}
</script>
