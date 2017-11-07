<template>
<div>
  <h3>Enregistrement billet vendu</h3>
  <form-wizard @on-complete="newTicket">
    <tab-content title="Info client">
       WIP
    </tab-content>
    <tab-content title="Billet Allé">
      <div class="form-inline">
        <div class="form-group">
          <label class="col-2 col-form-label">Départ: </label>
          <div class="col-4">
            <input class="form-control" type="text" v-model="start">
          </div>
        </div>
        <div class="form-group">
          <label class="col-5 col-form-label">Date de départ: </label>
          <div class="col-4">
            <input class="form-control" type="date" v-model="startDate">
          </div>
        </div> 
        <div class="form-group">
          <label class="col-5 col-form-label">Prix: </label>
          <div class="col-4">
            <input class="form-control" type="text" v-model="price">
          </div>
        </div>      
      </div>
      <br>

      <div class="form-inline">
        <div class="form-group">
          <label>Arrivée : </label>
          <div class="col-2">
            <input class="form-control" type="text" v-model="end">
          </div>
        </div>
        <div class="form-group">
          <label for="role" class="col-5 col-form-label">Catégorie</label>
          <div class="col-4">
            <select class="form-control" v-model="category">
              <option disabled value="">Choisir une catégories</option>
              <option>Classe économique </option>
              <option>Premium économique</option>
              <option>Classe affaires</option>
              <option>Première classe</option>
            </select>
          </div>
        </div>  
        <div class="form-group">
          <label class="col-7 col-form-label">Client: </label>
          <div class="col-4">
            <input class="form-control" type="text" v-model="client">
          </div>
        </div>          
      </div>
    
    </tab-content>

    <tab-content title="Billet retour">
      <div class="form-inline">
        <div class="form-group">
          <label class="col-2 col-form-label">Départ: </label>
          <div class="col-4">
            <input class="form-control" type="text" v-model="returnStart">
          </div>
        </div>
        <div class="form-group">
          <label class="col-5 col-form-label">Date de départ: </label>
          <div class="col-4">
            <input class="form-control" type="date" v-model="returnStartDate">
          </div>
        </div> 
        <div class="form-group">
          <label class="col-5 col-form-label">Prix: </label>
          <div class="col-4">
            <input class="form-control" type="text" v-model="returnPrice">
          </div>
        </div>      
      </div>
      <br>

      <div class="form-inline">
      <div class="form-group">
        <label>Arrivée : </label>
        <div class="col-2">
          <input class="form-control" type="text" v-model="returnEnd">
        </div>
      </div>
      <div class="form-group">
      <label for="role" class="col-5 col-form-label">Catégorie</label>
        <div class="col-4">
          <select class="form-control" v-model="returnCategory">
          <option disabled value="">Choisir une catégories</option>
          <option>Classe économique </option>
            <option>Premium économique</option>
            <option>Classe affaires</option>
            <option>Première classe</option>
          </select>
        </div>
      </div>  
    </div>     
   </tab-content>
</form-wizard>
</div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import {
  newTicket,
  getSingleUser,
  editUserTotalTicket,
  editUserBusiness,
  checkUser
} from "@/api/auth";
export default {
  components: {
    FormWizard,
    TabContent
  },

  data() {
    return {
      user: null,
      start: "",
      startDate: "",
      end: "",
      endDate: "",
      price: "",
      date: "",
      category: "",
      client: "",
      returnStart: "",
      returnStartDate: "",
      returnEnd: "",
      returnEndDate: "",
      returnPrice: "",
      returnCategory: "",
      seller: this.$root.user._id,
      totalTicket: 1
    };
  },

  created() {
    checkUser(this.$root);
    if (!this.$root.user) this.$router.push("/404");
    getSingleUser(this.$root.user._id).then(user => {
      this.user = user;
    });
  },

  methods: {
    newTicket() {
      newTicket({
        start: this.start,
        startDate: this.startDate,
        end: this.end,
        endStart: this.endStart,
        price: this.price,
        date: this.date,
        category: this.category,
        client: this.client,
        returnStart: this.returnStart,
        returnStartDate: this.returnStartDate,
        returnEnd: this.returnEnd,
        returnEndDate: this.returnEndDate,
        returnPrice: this.returnPrice,
        returnCategory: this.returnCategory,
        seller: this.seller
      });
      editUserBusiness(this.$root.user._id, {
        totalBusiness: this.price
      });

      editUserTotalTicket(this.$root.user._id, {
        totalTicket: this.totalTicket
      }).then(() => {
        this.$router.push("/tickets");
      });
    }
  }
};
</script>

<style>

</style>
<style scoped>
.div-center,
h2 {
  margin-left: 15%;
}
</style>