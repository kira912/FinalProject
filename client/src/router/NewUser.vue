<template>
  <div>
    <notifications v-if="messageError" group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top right"></notifications>

    <notifications group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top left">
    </notifications>
    <form-wizard @on-complete="submit()" color="black">

<!-- First step -->      
      <h2 slot="title">Enregistrement nouvel utilisateur</h2> 
      <tab-content title="Info perso">
        <div class="container-fluid">
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
          <br><br>
          <div class="row">
            <div role="group" class="form-row b-form-group form-group">
              <label class="col-4-form-label col-12">
                <span>Nom de famille</span>
              </label>
              <div class="col-7">
                <input  type="text" v-model="lastname" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div>
            <div role="group" class="form-row b-form-group form-group" id="__BVID__247_">
              <label class="col-4-form-label col-12" id="__BVID__247___BV_label_">
                <span>Prénom</span>
              </label>
              <div class="col-8">
                <input  type="text" v-model="firstname" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div>  
            <div role="group" class="form-row b-form-group form-group" id="__BVID__248_">
              <label class="col-4-form-label col-12" id="__BVID__248___BV_label_">
                <span>Date de naissance</span>
              </label>
              <div class="col-7">
                <input  type="date" v-model="birthDate" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__249_">
              <label class="col-4-form-label col-12" id="__BVID__249___BV_label_">
                <span>Téléphone</span>
              </label>
              <div class="col-7">
                <input type="text" v-model="telNumber" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div>
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Email *</span>
              </label>
              <div class="col-8">
                <input type="email" v-model="email" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div>                                      
          </div>
          
          <div class="row"> 
            <div role="group" class="form-row b-form-group form-group">
              <label class="col-4-form-label col-12">
                <span>Pays</span>
              </label>
              <div class="col-9">
                <input type="text" v-model="country" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__247_">
              <label class="col-4-form-label col-12" id="__BVID__247___BV_label_">
                <span>Adresse</span>
              </label>
              <div class="col-8">
                <input  type="text" v-model="address" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div><!---->
              </div>
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__251_">
              <label class="col-4-form-label col-12" id="__BVID__251___BV_label_">
                <span>Code Postal</span>
              </label>
              <div class="col-8">
                <input type="text" v-model="codePostal" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Ville</span>
              </label>
              <div class="col-8">
                <input type="text" v-model="city" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>                          
          </div>
        </div>  
      </tab-content>

<!-- Second step -->      
      <tab-content title="Info pro">
          <div class="row">
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Entité de rattachement</span>
              </label>
              <div class="col-7">
                <input type="text" v-model="entityAttachment" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>  
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span></span>
              </label>
              
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Fonction (emploi)</span>
              </label>
              <div class="col-8">
                <input type="text" v-model="functionJob" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>                                   
          <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Contrat de travail</span>
              </label>
              <div class="col-8">
                <input type="text" v-model="contract" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Salaire annuel (brut)</span>
              </label>
              <div class="col-8">
                <input type="text" v-model="annualSalary" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>              
          </div>

          <div class="row">
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                <span>Entrée dans l'entreprise</span>
              </label>
              <div class="col-7">
                <input type="date" v-model="entryBusiness" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>       
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
                <label class="col-4-form-label col-12" id="__BVID__250___BV_label_">
                  <span>Date de début d'activité </span>
                </label>
                <div class="col-7">
                  <input type="text" v-model="startActivity" class="form-control">
                  <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                    <span></span>
                  </div>
                </div>
            </div> 
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-8" id="__BVID__250___BV_label_">
                <span>Date fin de contrat </span>
              </label>
              <div class="col-7">
                <input type="text" v-model="endBusiness" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-8" id="__BVID__250___BV_label_">
                <span>Email professionnel </span>
              </label>
              <div class="col-7">
                <input type="text" v-model="professionalEmail" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>    
          </div>
          <div class="row">
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-8" id="__BVID__250___BV_label_">
                <span>Téléphone professionnel </span>
              </label>
              <div class="col-7">
                <input type="text" v-model="professionalNumber" class="form-control">
                <div role="alert"  aria-live="assertive" aria-atomic="true" class="invalid-feedback" style="display: none;">
                  <span></span>
                </div>
              </div>
            </div>
            <div role="group" class="form-row b-form-group form-group" id="__BVID__250_">
              <label class="col-4-form-label col-8" id="__BVID__250___BV_label_">
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
                  <!-- <el-button  slot="finish">Back</el-button> -->

    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent, ElButton } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import { newUser, checkUser } from "@/api/auth";
export default {
  components: {
    FormWizard,
    TabContent,
    ElButton
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


