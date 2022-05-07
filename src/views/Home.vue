<template>
  <v-container class="my-6">
    <v-row align="center">
      <v-col cols="12" md="6">
        <div class="text-center py-4">
          <h1 class="success--text text-h5 font-weight-bold">
            Introducing Dema Planner
          </h1>
          <p class="success--text">Meal planning made easier for you!</p>
          <v-btn depressed rounded large color="success" class="text-none"
            >Download</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          contain
          src="../assets/images/dema1.png"
          :height="imageHeight"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-decoration-underline py-4 text-center success--text">
          Features
        </h2>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema4.png"
            height="150px"
          ></v-img>
          <p class="success--text pb-4 font-weight-medium">
            Meal planning with a customizable fitness tracker to keep fit
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema5.png"
            height="150px"
          ></v-img>
          <p class="success--text py-4 font-weight-medium">
            Keep a record of foods you eat in a journal and share with friends
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema3.png"
            height="150px"
          ></v-img>
          <p class="success--text py-4 font-weight-medium">
            Engaging and useful conversations with coaches and active
            communities
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="success py-4">
      <v-col cols="12">
        <v-img
          contain
          class="my-4"
          src="../assets/images/dema6.png"
          height="300px"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-decoration-underline py-4 text-center success--text">
          Testimonials
        </h2>
      </v-col>
      <v-col cols="12">
        <v-container>
          <v-row align="center">
            <v-col cols="4">
              <v-img
                src="../assets/images/dema14.jpg"
                class="rounded-circle"
                height="100px"
                width="100px"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <h3 class="success--text quote">
                Dema planner has all the features into one app needed to stay
                fit.
              </h3>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-container>
          <v-img
            src="../assets/images/dema6.jpeg"
            gradient="to bottom right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)"
            class="d-flex align-center"
            height="500px"
          >
            <v-img
              src="../assets/images/dema7.png"
              class="mx-auto"
              height="100px"
              width="100px"
            ></v-img>
          </v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  title: "Home",
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xl":
          return "400px";
        case "lg":
          return "350px";
        case "md":
          return "300px";
        case "sm":
          return "250px";
        default:
          return "200px";
      }
    },
  },
};
</script>

<style scoped>
.b {
  border: 1px solid black;
}

.quote::before,
.quote::after {
  content: '"';
}
</style>