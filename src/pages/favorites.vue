<template>
  <MainLayout wide>
    <v-row>
      <v-col cols="12">
        <h4 class="text-h4 mt-5 d-print-none">
          Complete And Utter List Of My Favorite Things
        </h4>
        <p class="text-body-1 my-3 d-print-none">
          Might be the most extensive list ever! I hope your browser can handle it.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="favorite in favorites"
        :key="favorite.title"
        cols="12"
        md="6"
      >
        <v-card class="mb-3">
          <v-img
            :src="favorite.image"
          />
          <v-card-title>
            <h5 class="text-h5">
              {{ favorite.title }}
            </h5>
            <p class="text-body-1">
              {{ favorite.subtitle }}
            </p>
          </v-card-title>
          <v-card-text>
            <p>{{ favorite.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </MainLayout>
</template>

<script>
import MainLayout from '@/components/MainLayout.vue'

import food from '@/assets/food.png'
import gonster from '@/assets/gonster.png'
export default {
  components: {
    MainLayout,
  },
  title: 'Favorites',
  data: () => ({
    favorites: [
      {
        title: 'Dumplings',
        subtitle: 'Favorite Food',
        description: `
          Since from my childhood, my favorite food in the world is pierogi. 
          You may know it as pierogi or varenyky.
          It is definitely not the healthiest food, yet I still love it.
        `,
        image: food,
      },
      {
        title: 'Gonster',
        subtitle: 'Favorite Drink',
        description: `
          I think it is kinda silly to choose as a favorite drink something you really never drink.
          But both the idea and the execution are fascinating.
          Just look at this smooth gradient as from light brown to toxic green.
        `,
        image: gonster,
      },
    ],
  }),
}
</script>