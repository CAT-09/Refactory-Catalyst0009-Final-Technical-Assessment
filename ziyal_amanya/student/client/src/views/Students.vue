<template v-for="student in students" :key="student._id" :items="students">
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold secondary--text">
        We have {{ students.length }} students
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

      <v-data-table
        loading
        loading-text="Loading registered students..."
        :headers="headers"
        :items="students"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar text>
            <v-toolbar-title>Students</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <template>
              <v-btn
                :to="{ name: 'AddStudent' }"
                color="primary"
                dark
                class="mb-2"
              >
                New Student
              </v-btn>
            </template>
          </v-toolbar>
        </template>
        <template #item._id="{ item }">
          <v-btn
            :to="`student/${item._id}`"
            flat
            outlined
            class="ml-4"
            small
            color="primary darken-2"
          >
            View
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import API from '../api';
export default {
  data() {
    return {
      search: '',
            headers: [
        {
          text: 'Surname',
          align: 'start',
          sortable: true,
          value: 'surname',
        },
        { text: 'Given Name', value: 'givenName' },
        { text: 'Date of Birth', value: 'dateOfBirth' },
        { text: 'Residence', value: 'residence' },
        { text: 'Country', value: 'country' },
        { text: 'Title', value: 'title' },
        { text: 'Nationality', value: 'nationality' },
        { text: 'Gender', value: 'gender' },
        { text: 'Details', value: '_id' },
      ],
      students: [],
    };
  },

  async created() {
    this.students = await API.getAllStudents();
  },
};
</script>
