<template>
  <MainLayout>
    
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
  title: 'Baazar Builder',
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