<template>
<div>
  <notifications v-if="messageError" group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top right">
  </notifications>
  <form-wizard @on-complete="newTicket" color="black">
    <h3 slot="title">Nouvelle commande</h3>
    <tab-content title="Voyage">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Date de départ* </label>
                <div class="col-7">
                  <input class="form-control" type="date" v-model="dateDeparture">
                </div>  
              </div>
              <div class="form-group">
                <label>Date de retour* </label>
                <div class="col-7">
                  <input class="form-control" type="date" v-model="returnDate">
                </div>
              </div> 
              <div class="form-group">
                <label>Zone géopgraphique* </label>
                <b-form-radio-group v-model="geographicalArea">
                  <b-form-radio value="longHaul">Long courrier</b-form-radio>
                  <b-form-radio value="mediumHaul">Moyen courrier</b-form-radio>
                </b-form-radio-group>
              </div>
              <div class="form-group">
                <label>Pays* </label>
                <div class="col-7">
                  <v-select v-model="country" :options="countries"></v-select>
                </div>
              </div> 
            </div>     
          </div>
        </div>
      </tab-content>
      <tab-content title="Type de vente et Fournnisseurs">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Typologie* </label>
                <div class="col-7">
                  <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
                    <b-dropdown-item>Billeterie</b-dropdown-item>
                    <b-dropdown-item>Tourisme</b-dropdown-item>
                    <b-dropdown-item>Business</b-dropdown-item>
                    <b-dropdown-item>Groupe</b-dropdown-item>
                  </b-dropdown>
                </div>  
              </div>
              <div class="form-group">
                <label>Fournisseurs* </label>
                <div class="col-7">
                  <b-form-checkbox-group stacked v-model="suppliers">
                    <b-form-checkbox value="Asia">Asia</b-form-checkbox>
                    <b-form-checkbox value="Austral Lagons">Austral Lagons</b-form-checkbox>
                    <b-form-checkbox value="Asutralie Tours">Asutralie Tours</b-form-checkbox>
                    <b-form-checkbox value="Beachcomber Tours">Beachcomber Tours</b-form-checkbox>
                    <b-form-checkbox value="Beds On Line">Beds On Line</b-form-checkbox>
                    <b-form-checkbox value="Club Med">Club Med</b-form-checkbox>
                    <b-form-checkbox value="Costa Crosières">Costa Crosières</b-form-checkbox>
                    <b-form-checkbox value="Croisieurope">Croisieurope</b-form-checkbox>
                    <b-form-checkbox value="Divers - Aérien">Divers - Aérien</b-form-checkbox>
                    <b-form-checkbox value="Divers - Croisières, ferry">Divers - Croisières, ferry</b-form-checkbox>
                    <b-form-checkbox value="Divers - Ferroviaire">Divers - Ferroviaire</b-form-checkbox>
                    <b-form-checkbox value="Divers - Hébergements">Divers - Hébergements</b-form-checkbox>
                    <b-form-checkbox value="Divers - Loueurs Auto">Divers - Loueurs Auto</b-form-checkbox>
                    <b-form-checkbox value="Divers - Tours Opérateurs">Divers - Tours Opérateurs</b-form-checkbox>
                    <b-form-checkbox value="Exotismes">Exotismes</b-form-checkbox>
                    <b-form-checkbox value="Expedia">Expedia</b-form-checkbox>
                    <b-form-checkbox value="Fram">Fram</b-form-checkbox>
                    <b-form-checkbox value="Héliades">Héliades</b-form-checkbox>
                    <b-form-checkbox value="Jet tours">Jet tours</b-form-checkbox>
                    <b-form-checkbox value="Kuoni">Kuoni (+ marques associées)</b-form-checkbox>
                    <b-form-checkbox value="Lagrange">Lagrange</b-form-checkbox>
                    <b-form-checkbox value="Le Chesnay Voyages">Le Chesnay Voyages</b-form-checkbox>
                    <b-form-checkbox value="Look voyages">Look voyages</b-form-checkbox>
                    <b-form-checkbox value="Marcel Cab">Marcel Cab</b-form-checkbox>
                    <b-form-checkbox value="Marmara">Marmara</b-form-checkbox>
                    <b-form-checkbox value="Misterfly">Misterfly</b-form-checkbox>
                    <b-form-checkbox value="Msc Croiieres">Msc Croiieres</b-form-checkbox>
                    <b-form-checkbox value="Pierre & Vacances">Pierre & Vacances</b-form-checkbox>
                    <b-form-checkbox value="Teldar Travel">Teldar Travel</b-form-checkbox>
                    <b-form-checkbox value="Vacances Transat">Vacances Transat</b-form-checkbox>
                    <b-form-checkbox value="Worldia">Worldia</b-form-checkbox>
                  </b-form-checkbox-group>
                </div>
              </div> 
              <div class="form-group">
                <label>Zone géopgraphique* </label>
                <b-form-radio-group v-model="geographicalArea">
                  <b-form-radio value="longHaul">Long courrier</b-form-radio>
                  <b-form-radio value="mediumHaul">Moyen courrier</b-form-radio>
                </b-form-radio-group>
              </div>
              <div class="form-group">
                <label>Pays* </label>
                <div class="col-7">
                  <v-select v-model="country" :options="countries"></v-select>
                </div>
              </div> 
            </div>     
          </div>
        </div>
      </tab-content>






    <!-- <tab-content title="Info client">
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
            <input class="form-control" type="date" v-model="dateStart">
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
   </tab-content> -->
</form-wizard>
</div>
</template>

<script>
import vSelect from "vue-select";
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
    TabContent,
    vSelect
  },

  data() {
    return {
      user: null,
      geographicalArea: "",
      dateDeparture: "",
      returnDate: "",
      country: "",
      typology: "",
      suppliers: [""],
      bookingDate: "",
      gestourOrder: "",
      businessVolume: "",
      insurance: "",

      firstname: "",
      lastname: "",
      customerEmail: "",
      mobileClient: "",
      numberPax: "",
      recruitement: "",
      origin: "",
      crmProducts: "",
      crmPersonal: "",
      crmOptIn: "",
      remarks: "",
      seller: this.$root.user._id,
      totalTicket: 1,
      messageError: null,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
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
      this.messageError = null;
      newTicket({
        start: this.start,
        dateStart: this.dateStart,
        end: this.end,
        dateEnd: this.dateEnd,
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
      })
        .then(() => {
          setTimeout(() => {
            this.showSuccess("custom-template");
          }, 1000);
          this.$router.push("/tickets");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
          this.showError("custom-template", "error");
        });
    },
    showSuccess(group, type = "") {
      let title = `Nouveau billet crée !`;
      let now = new Date();
      let text = `Date ${now}`;
      this.$notify({ group, title, text, type });
    },
    showError(group, type = "") {
      let title = `Erreur lors de la création du billet !`;
      let now = new Date();
      let text = `Date ${now}`;
      this.$notify({ group, title, text, type });
    },
    clean(group) {
      this.$notify({ group, clean: true });
    }
  }
};
</script>