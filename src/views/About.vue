<template>
  <v-container class="my-6">
    <v-row align="center">
      <v-col cols="12">
        <h2 class="py-4 text-center success--text">About Us</h2>
      </v-col>
      <v-col cols="12">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptatem laborum assumenda qui, velit magni accusantium ipsum
          consequuntur? Amet, repudiandae officiis? Vero, asperiores consectetur
          minus aliquam aspernatur enim adipisci quia?
        </p>
      </v-col>
      <v-col cols="12" md="6">
        <v-img contain src="../assets/images/dema15.jpg" height="400px"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt delectus
          molestiae nulla et sed placeat distinctio reiciendis accusantium
          ducimus libero quos exercitationem ipsa autem, quasi dolorem commodi
          officiis assumenda ipsam?
        </p>
      </v-col>
      <v-col cols="12">
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos
          nulla mollitia voluptatibus, sequi, sapiente rerum perspiciatis omnis
          velit suscipit dolores accusantium quasi voluptatem. Tenetur maiores
          architecto magnam quas magni!
        </p>
      </v-col>
      <v-col cols="12">
        <v-img contain height="400px" src="../assets/images/dema16.jpg"></v-img>
      </v-col>
      <v-col cols="12">
        <h2 class="py-4 text-center success--text">Meet the Team</h2>
      </v-col>
      <v-col cols="12">
        <v-carousel hide-delimiters show-arrows-on-hover height="300">
          <v-carousel-item>
            <v-card
              outlined
              height="100%"
              width="400px"
              class="mx-auto rounded-lg"
            >
              <v-img
                height="100%"
                class="align-end"
                src="../assets/images/dema14.jpg"
                gradient="to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4), rgba(0, 105, 77, 0.8)"
              >
                <v-card-title class="white--text">Silas Jimmy</v-card-title>
                <v-card-subtitle class="white--text"
                  >Project Manager</v-card-subtitle
                >
              </v-img>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>
