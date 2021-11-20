<template>
  <v-container>
    <v-row no-gutter>
      <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
        <v-card class="pa-5">
          <v-card-title class="secondary rounded white--text"
            >Student Registration Form
          </v-card-title>

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
                  :rules="nameRules"
                ></v-text-field>
                <v-text-field
                  label="Given Name"
                  v-model="student.givenName"
                  prepend-icon="mdi-account-circle-outline "
                  :rules="nameRules"
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
                    :src="`/${student.studentImage}`"
                  ></v-img>
                </div>
                <div v-else>
                  <v-img :src="`/student.png`"></v-img>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-radio-group
                v-model="student.gender"
                prepend-icon="mdi-gender-male-female"
                :rules="gendeRules"
                row
              >
                <v-col class="mx-auto" cols="12" xs="12" sm="12" md="6">
                  <v-radio label="Male" value="Male"></v-radio>
                </v-col>
                <v-col class="mx-auto" cols="12" xs="12" sm="12" md="6">
                  <v-radio label="Female" value="Female"></v-radio>
                </v-col>
              </v-radio-group>
            </v-row>

            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-text-field
                  label="Date of Birth"
                  v-model="student.dateOfBirth"
                  prepend-icon="mdi-calendar-range "
                  :rules="dateRules"
                  type="date"
                ></v-text-field>
              </v-col>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-select
                  :items="countries"
                  prepend-icon="mdi-earth"
                  label="Select country"
                  v-model="student.country"
                  :rules="countryRules"
                  filled
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-text-field
                label="Place of Residence"
                v-model="student.residence"
                prepend-icon="mdi-map-marker-circle"
                :rules="residenceRules"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="Nationality"
                v-model="student.nationality"
                prepend-icon="mdi-flag-variant"
                :rules="residenceRules"
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
      rules: [(value) => !!value || 'Invalid field'],
      nameRules: [
        (value) => !!value || 'Invalid field',
        (value) =>
          (value && value.length <= 16) ||
          'Names should be between 1 to 16 alpha-bet characters',
      ],
      gendeRules: [(value) => !!value || 'Gender must be specified'],
      dateRules: [(value) => !!value || 'Select date of birth'],
      residenceRules: [
        (value) => !!value || 'Invalid field',
        (value) =>
          (value && value.length <= 20) ||
          'Should be between 1 to 20 alpha-bet characters',
      ],
      countryRules: [
        (value) => !!value || 'You must select your country of residence',
      ],
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
          name: 'students',
          params: {surname: `${this.student.surname}`, givname:`${this.student.givenName}`, message: ' has been registered successfully!' },
        });
      }
    },
  },
};
</script>
