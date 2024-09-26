<template>
  <v-container>
    <v-row no-gutter>
      <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
        <v-card class="pa-5">
          <v-card-title class="primary rounded white--text"
            >
           {{ student.title }} {{ student.surname }} {{ student.givenName }} Registration Information
          </v-card-title>

          <v-divider></v-divider>
          <v-list two-line>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="8">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-account-circle-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.surname }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Surname</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-account-circle-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.givenName }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Given Name</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary">
                      mdi-account-question-outline
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.title }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Title</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="4">
                 <v-img :src="`/${student.studentImage}`" height="auto" > </v-img>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="12">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-gender-male-female </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.gender }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Gender</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-calendar-range </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.dateOfBirth }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Date of Birth</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="6">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-earth </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.country }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Country</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
                        <v-divider></v-divider>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="12">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-map-marker-circle </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.residence }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Place of residence</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col class="mt-0 mx-auto" cols="12" xs="12" sm="12" md="12">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-flag-variant </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title color="primary">
                      <strong>{{ student.nationality }}</strong>
                    </v-list-item-title>
                    <v-list-item-subtitle>Nationality</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-list>
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
      student: {},
      dialog: false,
    };
  },
  async created() {
    const response = await API.getStudentByID(this.$route.params.id);
    this.student = response;
  },
};
</script>
