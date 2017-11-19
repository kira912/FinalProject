<template>
  <div>
    <notifications v-if="messageError" group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top right">
    </notifications>
    <form-wizard @on-complete="submit()" color="grey">
      <h3 slot="title">Enregistrement nouvel utilisateur</h3>
      <tab-content title="Données perso ">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" v-model="civility" name="inlineRadioOptions" id="inlineRadio1" value="Madame"> Madame
                </label>
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" v-model="civility" name="inlineRadioOptions" id="inlineRadio2" value="Monsieur"> Monsieur
                </label>
              </div>
              <div class="form-group">
                <label>Prénom : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="firstname">
                </div>  
              </div>
              <div class="form-group">
                <label>Nom : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="lastname">
                </div>
              </div> 
              <div class="form-group">
                <label>Date de naissance : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="birthDate">
                </div>
              </div> 
            </div>     

            <div class="col">
              <div class="form-group">
                <label >Téléphone : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="telNumber">
                </div>
              </div>
              <div class="form-group">
                <label>Email* : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="email">
                </div>
              </div> 
              <div class="form-group">
                <label >Nationalité : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="nationality">
                </div>
              </div>
              <div class="form-group">
                <label >Pays : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="country">
                </div>
              </div>         
            </div>
            <div class="col">
              <div class="form-group">
                <label >Adresse : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="address">
                </div>
              </div>
              <div class="form-group">
                <label >Code postal : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="codePostal">
                </div>
              </div>
              <div class="form-group">
                <label >Ville : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="city">
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="Données pro">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Entité de rattachement: </label>
                <div class="col-7">
                 <input class="form-control" type="text" v-model="entityAttachment">
                </div>  
              </div>
              <div class="form-group">
                <label>Fonction : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="functionJob">
                </div>
              </div> 
              <div class="form-group">
                <label>Contrat de travail : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="contract">
                </div>
              </div> 
            </div>     
            <div class="col">
              <div class="form-group">
                <label >Salaire annuel (brut) : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="annualSalary">
                </div>
              </div>
              <div class="form-group">
                <label>Entrée dans l'entreprise : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="entryBusiness">
                </div>
              </div> 
              <div class="form-group">
                <label>Date de début d'activité : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="startActivity">
                </div>
              </div>         
            </div>
            <div class="col">
              <div class="form-group">
                <label >Date de fin de contrat : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="endBusiness">
                </div>
              </div>
              <div class="form-group">
                <label >Email professionnel : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="professionalEmail">
                </div>
              </div>
              <div class="form-group">
                <label>Téléphone professionnel : </label>
                <div class="col-7">
                  <input class="form-control" type="date" v-model="professionalNumber">
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="Attribution">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Directeur entité: </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="directorEntity">
                </div>  
              </div>
              <div class="form-group">
                <label>Role : </label>
                <div class="col-7">
                  <select class="form-control" v-model="role">
                    <option disabled value="">Choisir un role</option>
                    <option>Directeur</option>
                    <option>Manager</option>
                    <option>Vendeur</option>
                    <option>Prestataire</option>
                  </select> 
                </div>
              </div> 
            </div>     
          </div>
        </div>
      </tab-content>
    </form-wizard>






    <!-- <form-wizard @on-complete="submit()" color="black">

      <tab-content title="Info pro">
          <div class="row">
            <div role="group" class="form-row b-form-group form-group">
              <label class="col-4-form-label col-8">
                <span>Si directeur d'entité </span>
              </label>
              <div class="col-7">
                <input type="text" v-model="directorEntity" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="role" class="col-8 col-form-label">Droit d'accès  : (Champs obligatoire)</label>
              <div class="col-9">
                <select class="form-control" v-model="role">
                  <option disabled value="">Choisir un role</option>
                  <option>Directeur</option>
                  <option>Manager</option>
                  <option>Vendeur</option>
                  <option>Prestataire</option>
                </select>
              </div>
            </div>
          </div>
      </tab-content>
    </form-wizard> -->
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { newUser, checkUser } from "@/api/auth";
export default {
  components: {
    FormWizard,
    TabContent
  },
  data() {
    return {
      messageError: null,
      firstname: "",
      lastname: "",
      civility: "",
      nationality: "",
      birthDate: "",
      telNumber: "",
      email: "",
      address: "",
      codePostal: "",
      city: "",
      country: "",
      entityAttachment: null,
      directorEntity: null,
      functionJob: "",
      contract: "",
      annualSalary: "",
      entryBusiness: "",
      startActivity: "",
      endBusiness: "",
      professionalEmail: "",
      professionalNumber: "",
      role: "",
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
  },

  methods: {
    submit() {
      this.messageError = null;

      newUser({
        firstname: this.firstname,
        lastname: this.lastname,
        civility: this.civility,
        nationality: this.nationality,
        birthDate: this.birthDate,
        telNumber: this.telNumber,
        email: this.email,
        address: this.address,
        codePostal: this.codePostal,
        city: this.city,
        country: this.country,
        profilePic: this.profilePic,
        entityAttachment: this.entityAttachment,
        directorEntity: this.directorEntity,
        functionJob: this.functionJob,
        contract: this.contract,
        annualSalary: this.annualSalary,
        entryBusiness: this.entryBusiness,
        startActivity: this.startActivity,
        endBusiness: this.endBusiness,
        professionalEmail: this.professionalEmail,
        professionalNumber: this.professionalNumber,
        role: this.role
      })
        .then(() => {
          setTimeout(() => {
            this.showSuccess("custom-template");
          }, 1000);
          this.$router.push("/users");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
          this.showError("custom-template", "error");
        });
    },
    showSuccess(group, type = "") {
      let title = `Nouvel utilisateur crée`;
      let now = new Date();
      let text = `Date: ${now}`;
      this.$notify({ group, title, text, type });
    },
    showError(group, type = "") {
      let title = `Erreur lors de la création !`;
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


