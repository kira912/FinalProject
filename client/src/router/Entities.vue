<template>
  <div class="animated fadeIn">
    <button type="button" class="btn btn-primary active mt-3" @click.prevent="$router.push('/entity/new')">Créer entité</button>
    <div class="row">
      <div class="col-lg-6">
        <b-card>
          <table class="table">
            <thead>
              <tr>
                <th>Nom d'entité</th>
                <th>Type de l'entité</th>
              </tr>
            </thead>
            <tbody v-for='(entity, index) in entities' :key='entity._id'>
              <tr>
                <td>{{entity.name}}</td>
                <td>{{entity.type}}</td>
                <td><v-expansion-panel>
                  <v-expansion-panel-content>
                    <div slot="header">Voir détail de l'entité</div>
                    <v-card>
                      <v-card-text class="grey lighten-3">
                        <h2>Donnée de l'entité</h2>
                        <p> <strong>Nom de l'entité: </strong> {{entity.name}}</p>
                        <p> <strong>Type de l'entité: </strong> {{entity.typeEntity}} </p>
                        <p> <strong>Entité d'attachement: </strong> {{entity.entityAttachment}} </p>
                        <p> <strong>Enseigne: </strong> {{entity.enseign}} </p>
                        <p> <strong>Adresse: </strong> {{entity.address}} </p>
                        <p> <strong>Ville: </strong> {{entity.city}} </p>
                        <p> <strong>Code Postal: </strong> {{entity.codePostal}} </p>
                        <p> <strong>Numéro de téléphone: </strong> {{entity.telNumber}} </p>
                        <p> <strong>Email: </strong> {{entity.email}} </p>

                        <h2>Données juridiques</h2>
                        <p> <strong>RCS: </strong> {{entity.rcs}} </p>
                        <p> <strong>TVA Intracommunautaire: </strong> {{entity.tvaIntra}} </p>
                        <p> <strong>SIREN: </strong> {{entity.siren}} </p>
                        <p> <strong>SIRET: </strong> {{entity.siret}} </p>
                        <p> <strong>Licence: </strong> {{entity.license}} </p>
                        <p> <strong>Garanties finacières: </strong> {{entity.financialGuarantees}} </p>
                        <p> <strong>Statut: </strong> {{entity.statut}} </p>
                        <p> <strong>Capital social: </strong> {{entity.socialCapital}} </p>
                        <p> <strong>Dates d'exercice</strong> {{entity.exerciseDate}} </p>

                        <h2>Données bancaires</h2>
                        <p> <strong>Banque: </strong> {{entity.bank}} </p>
                        <p> <strong>Adresse de la banque: </strong> {{entity.address}}, {{entity.city}}, {{entity.codePostal}} </p>
                        <p> <strong>Titulaire du compte</strong> {{entity.ownerCount}} </p>
                        <p> <strong>IBAN: </strong> {{entity.iban}} </p>
                        <p> <strong>Code BIC / SWIFT</strong> {{entity.codeBic}} </p>

                        <h2>Données de gestion</h2>
                        <p> <strong>Directeur d'entité</strong> {{entity.directorEntity}} </p>
                        <p> <strong>Utilisateurs rattachés: </strong> {{entity.userAttachement}} </p>
                      </v-card-text>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                </td>

                <td><button type="button" @click.prevent='getSingleEntity(entity._id)' class="btn btn-primary active mt-3">Editer</button></td>
              </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>


    
  </div>
</template>

<script>
import {getEntities, getSingleEntity} from '@/api/auth'

export default {
  data () {
    return {
      entities: []
    }
  },

  created () {
    getEntities().then(entities => {
      this.entities = entities
    })
  },

  methods: {
    getSingleEntity (_id) {
      getSingleEntity(_id).then(data => {
        this.$router.push('/entity/' + _id)
      })
    }
  }

}
</script>

