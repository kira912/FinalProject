<template>
  <div>
    <notifications v-if="messageError" group="custom-template"
                   :duration="5000"
                   :width="500"
                   animation-name="v-fade-left"
                   position="top right">
    </notifications>
    <form-wizard @on-complete="submit()" color="grey">
      <h3 slot="title">Enregistrement entité</h3>
      <tab-content title="Données de l'entité">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Nom : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="name">
                </div>  
              </div>
              <div class="form-group">
                <label>Type : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="typeEntity">
                </div>
              </div> 
              <div class="form-group">
                <label>Enseigne : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="enseign">
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
                <label>Code postal : </label>
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
            <div class="col">
              <div class="form-group">
                <label >Téléphone : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="numberTel">
                </div>
              </div>
              <div class="form-group">
                <label >Email : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="email">
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="Données juridique">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>RCS: </label>
                <div class="col-7">
                 <input class="form-control" type="text" v-model="rcs">
                </div>  
              </div>
              <div class="form-group">
                <label>TVA Intracommunautaire : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="tvaIntra">
                </div>
              </div> 
              <div class="form-group">
                <label>SIREN : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="Siren">
                </div>
              </div> 
            </div>     
            <div class="col">
              <div class="form-group">
                <label >SIRET : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="siret">
                </div>
              </div>
              <div class="form-group">
                <label>License : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="license">
                </div>
              </div> 
              <div class="form-group">
                <label >Garanties financières : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="financialGuarantees">
                </div>
              </div>         
            </div>
            <div class="col">
              <div class="form-group">
                <label >Status : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="statut">
                </div>
              </div>
              <div class="form-group">
                <label >Capital social : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="socialCapital">
                </div>
              </div>
              <div class="form-group">
                <label >Date d'exercice : </label>
                <div class="col-7">
                  <input class="form-control" type="date" v-model="exerciseDate">
                </div>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <tab-content title="Données bancaires">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Banque: </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="bank">
                </div>  
              </div>
              <div class="form-group">
                <label>Titulaire du compte : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="ownerCount">
                </div>
              </div> 
              <div class="form-group">
                <label>IBAN : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="iban">
                </div>
              </div>
              <div class="form-group">
                <label>Code BIC / SWIFT: </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="codeBic">
                </div>
              </div> 
            </div>     
            <div class="col">
              <div class="form-group">
                <label>Adresse : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="addressBank">
                </div>
              </div> 
              <div class="form-group">
                <label>Code postal : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="codePostalBank">
                </div>
              </div>        
              <div class="form-group">
                <label>Ville: </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="cityBank">
                </div>  
              </div>
            </div>
          </div>
        </div>
      </tab-content>
        <tab-content title="Données de gestion">
          <div class="container-fluid">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label>Directeur d'entité: </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="directorEntity">
                </div>  
              </div>
              <div class="form-group">
                <label>Utilisateurs de rattachement : </label>
                <div class="col-7">
                  <input class="form-control" type="text" v-model="userAttachment">
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
import { newEntity, checkUser } from "@/api/auth";
export default {
  data() {
    return {
      name: "",
      typeEntity: "",
      entityAttachment: "",
      enseign: "",
      address: "",
      codePostal: "",
      city: "",
      telNumber: "",
      email: "",
      rcs: "",
      tvaIntra: "",
      siren: "",
      siret: "",
      license: "",
      financialGuarantees: "",
      statut: "",
      socialCapital: "",
      exerciseDate: "",
      bank: "",
      addressBank: "",
      codePostalBank: "",
      cityBank: "",
      ownerCount: "",
      iban: "",
      codeBic: "",
      directorEntity: "",
      userAttachment: "",
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
  },

  methods: {
    submit() {
      this.messageError = null;
      newEntity({
        name: this.name,
        typeEntity: this.typeEntity,
        entityAttachment: this.entityAttachment,
        enseign: this.enseign,
        address: this.address,
        codePostal: this.codePostal,
        city: this.city,
        telNumber: this.telNumber,
        email: this.email,
        rcs: this.rcs,
        tvaIntra: this.tvaIntra,
        siren: this.siren,
        siret: this.siret,
        license: this.license,
        financialGuarantees: this.financialGuarantees,
        status: this.status,
        socialCapital: this.socialCapital,
        exerciseDate: this.exerciseDate,
        bank: this.bank,
        addressBank: this.addressBank,
        codePostalBank: this.codePostalBank,
        cityBank: this.cityBank,
        ownerCount: this.ownerCount,
        iban: this.iban,
        codeBic: this.codeBic,
        directorEntity: this.directorEntity,
        userAttachment: this.userAttachment
      })
        .then(() => {
          setTimeout(() => {
            this.showSuccess("custom-template");
          }, 1000);
          this.$router.push("/entities");
        })
        .catch(err => {
          this.messageError = err.response.data.error;
          this.showError("custom-template", "error");
        });
    },
    showSuccess(group, type = "") {
      let title = `Nouvel entité crée`;
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

<style scoped>
.div-center,
h2 {
  margin-left: 15%;
}
</style>