<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm-10 class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`/${student.studentImage}`"></v-img>
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outlined color="primary">{{ student.title}}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <v-btn color="success ml-1" text :to="{ name: 'edit-student', params: { id:student._id}}">Edit</v-btn>
                                <v-btn color="red" text @click="removeStudent(student._id)">Delete</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-card-subtitle class="headline">
                        <h3>{{ student.surname }} {{ student.givenName}} born in {{ student.dateOfBirth}}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey-text">
                        <p>{{ student.residence}}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api';
export default {
    data() {
        return{
            student:{},
        }
    },
    async created(){
        const response = await API.getStudentByID(this.$route.params.id);
        this.student = response;
    },
    methods:{
        async removeStudent(id){
            const response = await API.deleteStudent(id);
            this.$router.push({ name: 'Home', params: { message: response.message}});
        }
    }
};
</script>
