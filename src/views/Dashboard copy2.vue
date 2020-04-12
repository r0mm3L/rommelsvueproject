<template>
  <div class="Dashboard">
    <h1 class="subheadings white--text">Dashboard</h1>
    <v-container class="my-9">

      <v-card text v-for="project in projects" :key="project.title">

        <v-layout row wrap :class="'pa-3 project ${project.status}'">

          <v-flex xs6 md6>

            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

            <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

            <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip small :class="'$(project.status) black--text caption my-2'">{{ project.status }}</v-chip>
            </div>
            
          </v-flex>

        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>



export default {
 data() {
   return {
     projects: [
     { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'lorem' },
     { title: 'Code up the homepage', person: 'Chun Li', due: '2nd Jan 2019', status: 'completed', content: 'lorem' },
     { title: 'Design video thumbnails', person: 'Ryu', due: '3rd Jan 2019', status: 'completed', content: 'lorem' },
     { title: 'Create a community forum', person: 'Gouken', due: '4th Jan 2019', status: 'overdue', content: 'lorem' },
     ]
   }
 }

}
</script>

<style>

.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: tomato;
}

</style>
