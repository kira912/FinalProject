<template>
<div>
  <h2>Données personnelles</h2>
  <fieldset class="form-group">
    <div class="form-check">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1">
        Madame
      </label>
    </div>
    <div class="form-check">
    <label class="form-check-label">
        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
        Monsieur
      </label>
    </div>
  </fieldset>

  <div class="form-group">
    <label for="lastName" class="col-2 col-form-label">Nom de famille</label>
    <div class="col-10">
      <input class="form-control" type="text" id="lastName">
    </div>
  </div>

  <div class="form-group">
    <label for="name" class="col-2 col-form-label">Prénom</label>
    <div class="col-10">
      <input class="form-control" type="text" id="name">
    </div>
  </div>

  <div class="form-group">
    <label for="birth" class="col-2 col-form-label">Date de naissance</label>
    <div class="col-10">
      <input class="form-control" type="date" id="birth">
    </div>
  </div>

  <div class="form-group">
    <label for="enseigne" class="col-2 col-form-label">Téléphone</label>
    <div class="col-10">
      <input class="form-control" type="text" id="numberTel">
    </div>
  </div>

  <div class="form-group">
    <label for="email" class="col-2 col-form-label">Email</label>
    <div class="col-10">
      <input class="form-control" type="email" id="email">
    </div>
  </div>

  <div class="form-inline">
    <label for="city">Adresse</label>
    <input type="text" id="city" class="form-control mx-sm-3">
    
    <label for="postal" class="col-2 col-form-label">Code Postal</label>
    <input class="form-control" type="text" id="postal">
    
    <label for="city" class="col-2 col-form-label">Ville</label>
    <input class="form-control" type="text" id="city">
  </div>

  <div class="form-group">
    <label for="country" class="col-2 col-form-label">Pays</label>
    <div class="col-10">
      <input class="form-control" type="text" id="country">
    </div>
  </div>


  <div class="form-group">
    <label for="natio" class="col-2 col-form-label">Nationalité</label>
    <div class="col-10">
      <input class="form-control" type="text" id="natio">
    </div>
  </div>

  <div class="form-group">
    <label for="nationality">Photocopie document d'identitée</label>
    <input type="file" class="form-control-file" id="nationality">
  </div>
  <br>

  <h2>Données professionnelles</h2>
  
  <div class="form-group">
    <label for="entity" class="col-2 col-form-label">Entité de rattachement</label>
    <div class="col-10">
      <input class="form-control" type="text" id="entity">
    </div>
  </div>

  <div class="form-group">
    <label for="function" class="col-2 col-form-label">Fonction (emploi)</label>
    <div class="col-10">
      <input class="form-control" type="text" id="function">
    </div>
  </div>

  <div class="form-group">
    <label for="contrat" class="col-2 col-form-label">Contrat de travail</label>
    <div class="col-10">
      <input class="form-control" type="text" id="contrat">
    </div>
  </div>

  <div class="form-group">
    <label for="salary" class="col-2 col-form-label">Salaire annuel (brut)</label>
    <div class="col-10">
      <input class="form-control" type="text" id="salary">
    </div>
  </div>

  <div class="form-group">
    <label for="dateEnter" class="col-2 col-form-label">Date d'entrée dans l'entreprise</label>
    <div class="col-10">
      <input class="form-control" type="date" id="dateEnter">
    </div>
  </div>

  <div class="form-group">
    <label for="dateActive" class="col-2 col-form-label">Date de début d'activité</label>
    <div class="col-10">
      <input class="form-control" type="date" id="dateActive">
    </div>
  </div>

  <div class="form-group">
    <label for="dateEnd" class="col-2 col-form-label">Date de fin de contrat</label>
    <div class="col-10">
      <input class="form-control" type="text" id="dateEnd">
    </div>
  </div>

  <div class="form-group">
    <label for="emailPro" class="col-2 col-form-label">Email professionnel</label>
    <div class="col-10">
      <input class="form-control" type="email" id="emailPro">
    </div>
  </div>

  <div class="form-group">
    <label for="telPro" class="col-2 col-form-label">Téléphone professionnel</label>
    <div class="col-10">
      <input class="form-control" type="text" id="telPro">
    </div>
  </div>

  <div class="form-group">
    <label for="role" class="col-2 col-form-label">Droit d'accès</label>
    <div class="col-10">
      <input class="form-control" type="email" id="role">
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>
