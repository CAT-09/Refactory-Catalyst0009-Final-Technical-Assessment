<template>
  <v-container>
    <v-row no-gutter>
      <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
        <v-card class="pa-5">
          <v-card-title class="secondary white--text"
            >Student Registration Form</v-card-title
          >
          <v-divider></v-divider>

          <v-form
            ref="form"
            @submit.prevent="submitForm"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
                <v-text-field
                  label="Surname"
                  v-model="student.surname"
                  prepend-icon="mdi-account-circle-outline"
                  :rules="rules"
                ></v-text-field>
                <v-text-field
                  label="Given Name"
                  v-model="student.givenName"
                  prepend-icon="mdi-account-circle-outline "
                  :rules="rules"
                ></v-text-field>
                <v-select
                  label="Title"
                  :items="titles"
                  filled
                  v-model="student.title"
                  prepend-icon="mdi-account-question-outline"
                  :rules="rules"
                ></v-select>
              </v-col>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="4">
                <v-file-input
                  @change="selectFile"
                  label="Student Photo"
                  show-size
                  counter
                  multiple
                  prepend-icon="mdi-account-box-outline"
                  :rules="rules"
                ></v-file-input>
                <div v-if="student.studentImage">
                  <v-img
                    v-model="student.studentImage"
                    :src="`${student.studentImage}`"
                  ></v-img>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="12">
                <v-radio-group
                  v-model="student.gender"
                  prepend-icon="mdi-gender-male-female"
                  :rules="rules"
                  row
                  >
                    <v-radio label="Male" value="Male"></v-radio>
                  <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                    <v-radio label="Female" value="Female"></v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>

            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-text-field
                  label="Date of Birth"
                  v-model="student.dateOfBirth"
                  prepend-icon="mdi-calendar-range "
                  :rules="rules"
                  type="date"
                ></v-text-field>
              </v-col>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-select
                  :items="countries"
                  prepend-icon="mdi-earth"
                  label="Country"
                  v-model="student.country"
                  :rules="rules"
                  filled
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-text-field
                label="Place of Residence"
                v-model="student.residence"
                prepend-icon="mdi-map-marker-circle"
                :rules="rules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Nationality"
                v-model="student.nationality"
                prepend-icon="mdi-flag-variant"
                :rules="rules"
              ></v-text-field>
            </v-row>

            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="12">
                <v-btn type="submit" class="mt-3" color="secondary float-right"
                  >Register</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      rules: [(value) => !!value || 'This field is required'],
      countries: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi'],
      titles: ['Mr', 'Mrs', 'Miss', 'Dr', 'Prof', 'Eng'],
      student: {
        surname: '',
        givenName: '',
        dateOfBirth: '',
        residence: '',
        title: '',
        studentImage: '',
        nationality: '',
        gender: '',
        country: '',
      },
      studentImage: '',
    };
  },
  methods: {
    selectFile(file) {
      this.studentImage = file[0];
    },

    async submitForm() {
      const formData = new FormData();
      formData.append('studentImage', this.studentImage);
      formData.append('title', this.student.title);
      formData.append('surname', this.student.surname);
      formData.append('givenName', this.student.givenName);
      formData.append('dateOfBirth', this.student.dateOfBirth);
      formData.append('residence', this.student.residence);
      formData.append('nationality', this.student.nationality);
      formData.append('gender', this.student.gender);
      formData.append('country', this.student.country);

      if (this.$refs.form.validate()) {
        const response = await API.addStudent(formData);
        this.$router.push({
          name: 'Home',
          params: { message: response.message },
        });
      }
    },
  },
};
</script>
