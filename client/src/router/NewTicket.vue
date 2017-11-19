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
                  <b-select v-model="country" expanded>  
					          <option disabled value="">Selectionner un pays</option>
					          <option v-for="option in options" :value="option">{{option}}</option>
			          	</b-select>
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
                  <b-dropdown id="ddown1" text="Dropdown Button" v-model="typology" class="m-md-2">
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
            </div>     
          </div>
        </div>
      </tab-content>

      <tab-content title="Vente">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Date de réservation* </label>
                <div class="col-7">
                  <input class="form-control" type="date" v-model="bookingDate">
                </div>  
              </div>
              <div class="form-group">
                <label>Commande Gestour* </label>
                <div class="col-7">
                  <input class="form-control" type="number" v-model="gestourOrder">
                </div>
              </div> 
              <div class="form-group">
                <label>Volume d'affaires* </label>
                <div class="col-7">
                  <input class="form-control" type="number" v-model="businessVolume">
                </div>
              </div> 
              <div class="form-group">
                <label>Assurance* </label>
                <div class="col-7">
                  <b-dropdown text="Selectionner" v-model="insurance" class="m-md-2">
                    <b-dropdown-item>April voyage</b-dropdown-item>
                    <b-dropdown-item>Mondial assistance</b-dropdown-item>
                    <b-dropdown-item>Non</b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>
            </div>     
          </div>
        </div>
      </tab-content>

      <tab-content title="Client">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Nom de famille* </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="lastname">
                </div>  
              </div>
              <div class="form-group">
                <label>Prénom* </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="firstname">
                </div>
              </div> 
              <div class="form-group">
                <label>Email du client* </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="customerEmail">
                </div>
              </div> 
              <div class="form-group">
                <label>Mobile du client* </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="mobileClient">
                </div>
              </div>
              <div class="form-group">
                <label>Nombres de Pax* </label>
                <div class="col-7">
                  <input class="form-control" type="number" v-model="numberPax">
                </div>
              </div>
              <div class="form-group">
                <label>Recrutement* </label>
                <div class="col-7">
                  <b-form-radio-group stacked v-model="recruitement">
                  <b-form-radio value="true">Oui</b-form-radio>
                  <b-form-radio value="false">Non</b-form-radio>
                </b-form-radio-group>
                </div>
              </div>
              <div class="form-group">
                <label>Provenance * </label>
                <div class="col-7">
                  <b-form-radio-group stacked v-model="origin">
                  <b-form-radio value="Agence">Agence</b-form-radio>
                  <b-form-radio value="Partenariat">Partenariat</b-form-radio>
                  <b-form-radio value="Relationnel">Relationnel</b-form-radio>
                  <b-form-radio value="Téléphone">Téléphone</b-form-radio>
                  <b-form-radio value="Web">Web</b-form-radio>
                </b-form-radio-group>
                </div>
              </div>
              <div class="form-group">
                <label>CRM - Produits *</label>
                <div class="col-7">
                  <b-form-checkbox-group stacked v-model="crmProducts">
                  <b-form-checkbox value="Billeterie">Billeterie</b-form-checkbox>
                  <b-form-checkbox value="Circuits">Circuits</b-form-checkbox>
                  <b-form-checkbox value="Clubs">Clubs</b-form-checkbox>
                  <b-form-checkbox value="Croisières">Croisières</b-form-checkbox>
                  <b-form-checkbox value="Prestations terrestres">Prestations terrestres</b-form-checkbox>
                  <b-form-checkbox value="Séjours">Séjours</b-form-checkbox>
                  <b-form-checkbox value="Sur-mesure">Sur-mesure</b-form-checkbox>
                  <b-form-checkbox value="Week-ends">Week-ends</b-form-checkbox>
                  <b-form-checkbox value="Autre">Autre :</b-form-checkbox>
                </b-form-checkbox-group>
                </div>
              </div>
              <div class="form-group">
                <label>CRM - Perso *</label>
                <div class="col-7">
                  <b-form-checkbox-group stacked v-model="crmPersonal">
                  <b-form-checkbox value="Couple">Couple</b-form-checkbox>
                  <b-form-checkbox value="Famille">Famille</b-form-checkbox>
                  <b-form-checkbox value="Senior">Senior</b-form-checkbox>
                  <b-form-checkbox value="Single">Single</b-form-checkbox>
                  <b-form-checkbox value="Tribus">Tribus</b-form-checkbox>
                  <b-form-checkbox value="Autre">Autre : </b-form-checkbox>
                </b-form-checkbox-group>
                </div>
              </div>
              <div class="form-group">
                <label>CRM - Opt-in *</label>
                <div class="col-7">
                  <b-form-checkbox-group stacked v-model="crmOptIn">
                  <b-form-checkbox value="Email">Email</b-form-checkbox>
                  <b-form-checkbox value="Mailing">Mailing</b-form-checkbox>
                  <b-form-checkbox value="Phoning">Phoning</b-form-checkbox>
                  <b-form-checkbox value="SMS">SMS</b-form-checkbox>
                  <b-form-checkbox value="Autre">Autre : </b-form-checkbox>
                </b-form-checkbox-group>
                </div>
              </div>
              <div class="form-group">
                <label>Remarques </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="remarks">
                </div>
              </div>
            </div>
          </div>
        </div>     
      </tab-content>
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
import { listCountries } from "@/api/countries";
export default {
  components: {
    FormWizard,
    TabContent,
    vSelect
  },

  data() {
    return {
      currentUser: [],
      options: listCountries(),
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
      crmProducts: [""],
      crmPersonal: [""],
      crmOptIn: [""],
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
      this.currentUser = user;
    });
  },

  methods: {
    newTicket() {
      this.messageError = null;
      newTicket({
        geographicalArea: this.geographicalArea,
        dateDeparture: this.dateDeparture,
        returnDate: this.returnDate,
        country: this.country,
        typology: this.typology,
        suppliers: this.suppliers,
        bookingDate: this.bookingDate,
        gestourOrder: this.gestourOrder,
        businessVolume: this.businessVolume,
        insurance: this.insurance,
        firstname: this.firstname,
        lastname: this.lastname,
        customerEmail: this.customerEmail,
        mobileClient: this.mobileClient,
        numberPax: this.numberPax,
        recruitement: this.recruitement,
        origin: this.origin,
        crmProducts: this.crmProducts,
        crmPersonal: this.crmPersonal,
        crmOptIn: this.crmOptIn,
        remarks: this.remarks,
        seller: this.$root.user._id
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