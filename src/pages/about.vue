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
          title="Summary"
          prepend-icon="mdi-account"
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
                >
                  <v-card-subtitle class="bg-primary">
                    <p class="text-subtitle my-2">
                      {{ card.title }}
                    </p>
                  </v-card-subtitle>
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
          title="Experience"
          prepend-icon="mdi-briefcase"
          subtitle="I worked somewhere, definitely"
        >
          <v-divider />
          <v-card-text>
            <v-timeline
              align="start"
              side="end"
            >
              <v-timeline-item
                v-for="job in workExperience"
                :key="job.title"
                dot-color="secondary"
                :hide-dot="job.company === workExperience[workExperience.indexOf(job) - 1]?.company"
                size="small"
                width="100%"
              >
                <v-row>
                  <v-col cols="8">
                    <h5 class="text-h5 text-primary mb-2">
                      {{ job.company }}
                    </h5>
                  </v-col>
                  <v-col
                    cols="4"
                    class="text-right"
                  >
                    <v-chip
                      color="primary"
                      label
                    >
                      {{ job.date }}
                    </v-chip>
                  </v-col>
                </v-row>
                <h6 class="text-h6 mb-1">
                  {{ job.title }}
                </h6>
                <p class="text-body-2 opacity-50 mb-2">
                  {{ job.client }}
                </p>
                <p class="text-body-1 mb-2">
                  {{ job.responsibilities }}
                </p>
                <div>
                  <v-chip
                    v-for="stack in job.stack"
                    :key="stack"
                    class="me-2"
                    color="secondary"
                    label
                  >
                    {{ stack }}
                  </v-chip>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card
          class="mx-auto mb-5"
          title="Contacts"
          prepend-icon="mdi-chat"
          subtitle="In case you have to say something"
        >
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="12">
                I hereby forbid you to contact me.
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card
          class="mx-auto mb-5"
          title="Education"
          prepend-icon="mdi-school"
          subtitle="I learned some stuff"
        >
          <v-divider />
          <v-card-text>
            <v-row>
              <v-col cols="12">
                I think my education is not that important...
              </v-col>
            </v-row>
          </v-card-text>
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
    workExperience: [
      {
        title: 'Full-Stack Developer',
        company: 'Exscientia/Recursion',
        date: 'May 2024 - Present',
        client: 'Biotech company who develops AI-powered solutions for drug discovery.',
        responsibilities: 'Building a tool for searching and purchasing chemicals from different vendors.',
        stack: [
          'Vue.js',
          'Django',
          'Vuetify',
          'Django REST Framework',
          'Snowflake',
          'Docker',
        ],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Honeycomb Software',
        date: 'Jan 2023 - Mar 2024',
        client: 'Successful SEO academy that helped 100s of businesses in most competitive verticals.',
        responsibilities: 'Creating backend with connection to different APIs, database structure and Azure infrastructure and pipelines.',
        stack: [
          'Flask',
          'PostgresQL',
          'Microsoft Azure',
          'ReactJS',
          'Python',
          'Docker',
        ],
      },
      {
        title: 'Full-Stack Developer',
        company: 'Honeycomb Software',
        date: 'Sep 2022 - Dec 2022',
        client: 'Next-generation service provider for medical companies and other facilities.',
        responsibilities: 'Development and deployment of the web app to process recommendation letters with NLP to detect gender bias.',
        stack: [
          'Flask',
          'PostgresQL',
          'Microsoft Azure',
          'ReactJS',
          'Python',
          'Docker',
        ],
      },
      {
        title: 'Software Developer',
        company: 'SoftServe, Inc.',
        date: 'Dec 2021 - Aug 2022',
        client: 'Next-generation service provider for medical companies and other facilities.',
        responsibilities: 'Creating and supporting solutions for the Inventory Management of infrastructure.',
        stack: [
          'Django',
          'DynamoDB',
          'AWS Lambda',
          'Docker',
          'Python',
          'Kafka',
        ],
      },
      {
        title: 'Software Developer',
        company: 'SoftServe, Inc.',
        date: 'Dec 2021 - Aug 2022',
        client: 'Building Digital UK, part of the DCMS in United Kingdom government.',
        responsibilities: 'Creating a system of products for people in rural areas to help them acquire broadband connection, autotesting with Selenium.',
        stack: [
          'Flask',
          'PostgresQL',
          'Google Cloud Platform',
          'Docker',
          'Python',
          'Selenium',
        ],
      },
      {
        title: 'Backend Developer',
        company: 'KeyUA - Software Development Services',
        date: 'Nov 2020 - Mar 2021',
        client: 'One of the biggest mobile operators in Middle East.',
        responsibilities: 'Creating the admin tools and API for the new website, migrating data from the old and modifying it to fit the new model',
        stack: [
          'Django',
          'MySQL',
          'jQuery',
          'Python',
          'Wagtial CMS',
        ],
      },
      {
        title: 'Backend Developer',
        company: 'Absolutist, Ltd.',
        date: 'Dec 2019 - Nov 2020',
        client: 'Internal company project.',
        responsibilities: 'Management, supporting and creating new features for the Jenkins pipelines, autotesting and web scrapping with Selenium, developing a backend side of league system for company\'s games, continue to maintain responsibilities from my previous job.',
        stack: [
          'Flask',
          'MongoDB',
          'Jenkins',
          'Selemium',
          'Python',
        ],
      },
      {
        title: 'Game Developer',
        company: 'Absolutist, Ltd.',
        date: 'Jul 2018 - Nov 2019',
        client: 'Internal company project.',
        responsibilities: 'Developing and bugfixing of two games using internal game engine.',
        stack: [
          'Lua',
          'XML',
          'Jenkins',
        ],
      },
    ],
  }),
}
</script>