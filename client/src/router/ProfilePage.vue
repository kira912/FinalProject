<template>
  <div class="d-flex justify-content-center">
    <div>
      <img :src="user.profilePic" alt="">
    </div>
    <div class="card" style="width: 20rem;">
      <form @submit.prevent = "uploadPicture">
        <input type="file" name="image" @change="onFileChange">
        <button @click.prevent="edit()">Sauvegarder photo</button>
      </form>
    <img :src="image" />
  <div class="card-block">
    <h4 class="card-title">Données personnelles</h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Nom prénom: </strong> {{user.firstname}} {{user.lastname}} </li>
    <li class="list-group-item"><strong>Email perso: </strong> {{user.email}} </li>
    <li class="list-group-item"><strong>Téléphone perso: </strong> {{user.telNumber}} </li>
    <li class="list-group-item"><strong>Adresse perso: </strong> {{user.address}}, {{user.codePostal}}, {{user.city}} </li>
  </ul>
  <br>
  <h4 class="card-title">Données Professionnel</h4>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Email perso: </strong> {{user.professionalEmail}} </li>
    <li class="list-group-item"><strong>Téléphone perso: </strong> {{user.professionalNumber}} </li>
  </ul>
</div>


  </div>
</template>

<script>
import axios from "axios";
import { getSingleUser, editUser } from "@/api/auth";
export default {
  data() {
    return {
      user: true,
      image: ""
    };
  },

  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let vm = this;

      // debugger;
      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    uploadPicture() {
      const formData = new FormData();
      formData.append("image", this.image);
      axios
        .post("http://localhost:3000/api/images/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.image = response.data.secure_url;
        });
    },
    edit() {
      editUser(this.$root.user._id, { profilePic: this.image });
    }
  },

  created() {
    getSingleUser(this.$route.params.id).then(user => {
      if (user) {
        this.user = user;
      }
    });
  }
};
</script>
