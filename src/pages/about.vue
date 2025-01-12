<template>
  <MainLayout>
    <v-row>
      <v-col cols="12">
        <h4 class="text-h4 mt-5 d-print-none">
          Everything You Need To Know
        </h4>
        <p class="text-body-1 my-3 d-print-none">
          Yes, this counts as a CV
        </p>

        <h4 class="text-h4 mt-5 d-none d-print-block">
          Oleksii Hava
        </h4>
        <p class="text-body-1 my-3 d-none d-print-block">
          Full-Stack Developer
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-card
          class="mx-auto mb-5"
          prepend-icon="mdi-account"
          title="Summary"
          subtitle="Three key points about me"
        >
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col
                v-for="card in summaryCards"
                :key="card.title"
              >
                <v-card
                  elevation="3"
                  rounded="lg"
                  :subtitle="card.title"
                >
                  <v-divider />
                  <v-card-text>
                    {{ card.text }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto mb-5"
          prepend-icon="mdi-briefcase"
          title="Experience"
          subtitle="I worked somewhere, definitely"
        >
          <v-divider />
          <v-card-text>
            text
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-item>
            <v-card-title>
              text
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'
export default {
  components: {
    MainLayout,
  },
  title: 'About',
  data: () => ({
    summaryCards: [
      {
        title: 'Hungry For Knowledge',
        text: 'Whenever I am getting to a new project, I always make sure to learn everything I can about it.',
      },
      {
        title: 'Appreciated Mentor',
        text: 'I like to help others and make sure they understand what they\'re doing.',
      },
      {
        title: 'Strategic Thinker',
        text: 'I try to think ahead whenever it\'s possible and make sure to account for edge cases.',
      },
    ],
  }),
}
</script>