<template>
  <div class="Dashboard">
    <!--<h1 class="subheadings white--text">Dashboard</h1>-->
 
    <v-carousel>
      <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
     ></v-carousel-item>
   </v-carousel>

  </div>
</template>

<script>



export default {
data () {
      return {
        items: [
          {
            src: 'https://lh3.googleusercontent.com/TmqFcJHFIN-qvFXTjdpoEaNo07JYq6ANAESlnK8Q58ijy3QJXT2Bh7yDwkTNtFtIgxbUTd-igUexm4Zym5A6PJZZ5rGnDEF7qDsM1c4qzWKIafgodJCZ15dIccgraAKuMS-gpALiBL_kEXUOpYqm6k8h2XQtgChf3Nj7q44wBiP2CygJcYm0NaPEV37SM5DmeUCzy7RPnm446TX2y7JZftZoCqPuoTTdicrXhEeIrc5VnD6bSBMcw3bBLjUuPEiL0a6GY4fFlEdoalctSfJCSBuv23CZqRqeLfTTZondT_9LzJyuMY9-GnD3wkKT2nLfZezjmC_JxhaHJ8fKtALoTxHia7UOXJ2SFShRY9hoX9AtWvfpKbQ4hmSH_le9yB-w0HsePeDrCFFxbqj7DgLxFfsSsYXsPjIq260kYuL9C6qjBz1jZS8tG0fUEFuY0ojppOcqYmuCo5KvgGjvvZ9c1b103FEvfbsMOP1RfZweEbiFRKs91b2zKY-zOgTHT03Xgc-H3qAGgn99YZK1O8QfZegLEobh0UzPaoubN90612PIbh33vbvDcUT36kbzvmuPa0_2Xx5RTigx9C0MhP06ZD4S9_3jRWfPJEz4js7aenbV1w8EHhby2DJ_0TOBxj9V60NbM9qgGKLr8BW4mg1pku8aRxBF3HdjqyT7yYghJ0uxHCR7UG1GPRazkD4a=w960-h720-no',
          },
          {
            src: 'https://lh3.googleusercontent.com/U5p1PF3kYU8jvrpD1sTUQQVpM95Vo_Ed67Ne4ercwRF-S5AUoq-r8UnmQnw7LdSlRVU2mIRi5j9q8pshPKl3qAGDMp1E42bybS8NoEDABsvUy783SWjS-78gDIHOq0GhFpH5x6RWzLfbaihFsyynGz9NrthsFdLCmgHXWFEIAYkNV9ZVvMYOdTfTVZpp8hu5YJ4-KQqu61PS9qrmSG4vx7bthdvjl4vgMRZFZtZ7Nny7yaQxep4RFnejVoOOBWbnloNXmXMxaG3XSjO54S8YV5bkX7VszPq9JVZzA5BnYQqQze5tA7xwLbbmLS4akyv5CcrJdWZ9UkNwJMTCqu8vJ9sYkBnAvjXSLB8Evtq_m9GLzMemoyDo9XoZHZaDXyawJWcoEnV3tqc0E8gJS2cjNIkFnQq5ucP2-x5pTgKWaAnVW_C_iK-XJe8bS5bG6a__GgwBbzaTFSxokAuVpJYj_u1a59afy0bxUAiz9YdiCe3yX149rnIopiikCrdkgQzXo0j3miSUSV5APtYj4rc0IYijy0yU7ouNBJ_gEKgDjTlaN6kW0WcFEEfEhX0IM5TQP4A2JpgQfxHqCLSZCXzdKN9lm0fb3lxNXS-X1F_PLlJMXuWMbOnSTBV180u9np-dRHzOgC8oMtRaki5aNvkp6ngyHz4_eM0Gj0Lwor3dLRD_2hLjjOry0hr-jXfd=w960-h720-no',
          },
          {
            src: 'https://lh3.googleusercontent.com/sEHeuzMe24Da6HSdJm0F7DkNosWghK42GYeDWZiWdba2_T9XUVdZHsfUsZN_NGsRKi2D3z6vlZdwO-aQz0DM1lJN9wwEobW7YXJ57HdAV36fBogBN5irL3WcWITy4sCXt6_fZO0a2Q-ON0_p3Cs61W3iiXZLfLBgzfCmEpSWkaS7_aqiAB--V_TIhk0fAr7Zo0afYxjjp6VNGf0_pqHUWq-e1GQtC0IgBbIqbEdnrXOkYqGobpvfXtNwu86rDkDQUgm1HkjCFtDTyOpC8QM06P9RkWE9LpPfu50JgSpr3yJMkFpHytk3GacX4-LaxgJ4059EtmKZL72yfILPIJc6UKjwlaCw_K7QWgFVVUtfhrq9CLpGxGv7oFtlNkmyOmUUAep4NDzj-fKl3Ewk7aq9Ilx5z7Bnbu4M5h70qxQgGNxSyEXDey18D91CcPQC0kTx3rboaouQPDF2u3SMgswqc4khi4JdWALmElqpN2EiEO__q3vtVxb3JcNZ9Kv_jbILLTIqJICjh-OQ3m-1L2I06_F0C68VmfHY0JZba_5ZAVhpICJmN1V1_5Ije86x6XD5LhD7-G4Js-PB9Nq1WXlkQqY9UfH5n4Ap2tr64HXkbd3K2s8wIvrNNGuVydINHU7hjUe1H-moIntf_HA1rvHLrcWL1HEEiwArHumGwML_fYTbv5ujODhlTNxRi1La=w960-h720-no',
          },
          {
            src: 'https://lh3.googleusercontent.com/RtqrpbJSfiFcw8TEVsGtxQysoOgn_Y27T5peF6IO20pkapoWk7C1vl1jYKNx1xsw_NMoqhoGOsKKXmXiLK2bAEthlzZ7ttK3ZAbJB-z59PdI5LClRkryJnS7opzKvu9QpCiSRk1hXisycOSgFf-v1x57AlMqvQbm0uKT6b8XQ8y5tn_Qv_G3M2wlsk1U7rg6ReQ7ZNvdth_yfdpksxCT9_9_uMTqV0w41rfP6AitI4UU5kujLxnHSSstOGzr2HPLAqF8Mb_sOYZn5Ei5xKq7VPD0IaKVdE4rFMxaN6LSujQo-0JfjktqVbNCByWvrnhemp5u4X067tWyjZs3EIrqif_nCse3ZbJAPVb9GzEg-S4cGL_BMjQveUBH2h7QY1TxYrb-_tamqc_YSAlN1yMHGvNUm-K1UmCpr6KmBJSgvLE7U1DfH4l0PMSO7YTVikoqmBakyZqBNXBjwTeSM4jUgSRMT1ta1IKblTJo7KmeXK5A4OepEz-Z5KfJ_r7acCKySY-k8SzNvOk-v9qu_t-bzTW9Qaa13KBIycrw94PqON2eduwX8MvnuMPGJzcs-dQRXHK_zP9vOUV4JQJRoZkZX3-WuS2982pgDk6kcYz83XN-mycZAtqJl7K3d6EcMcBFPs4swihI64ZNT-xgzGJmHpwhs3oIMaaWtuP1UBflzOT91QpOKSXO_m3QIi1P=w339-h254-no',
          },
        ],
      }
    },

}
</script>

<style>



</style>
