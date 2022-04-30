<template>
  <v-container>
    <v-row align="center">
      <v-col cols="6">
        <div class="text-center">
          <h1 class="success--text">Introducing Dema Planner</h1>
          <p class="success--text">
            Food recommendations on the go and at home
          </p>
          <v-btn depressed rounded large color="success" class="text-none"
            >Download</v-btn
          >
        </div>
      </v-col>
      <v-col cols="6">
        <v-img contain src="../assets/images/dema1.png" height="300px"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-decoration-underline text-center success--text">
          Features
        </h2>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema3.png"
            height="150px"
          ></v-img>
          <p class="success--text my-2 font-weight-medium">
            Engaging chat with digital coach and active community
          </p>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema4.png"
            height="150px"
          ></v-img>
          <p class="success--text my-2 font-weight-medium">
            Food/fitness tracker with recommended personalized foods
          </p>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="text-center">
          <v-img
            contain
            src="../assets/images/dema5.png"
            height="150px"
          ></v-img>
          <p class="success--text my-2 font-weight-medium">
            Food journalfor keeping track of food you eat
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-img contain src="../assets/images/dema6.png" height="300px"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-decoration-underline text-center success--text">
          Testimonials
        </h2>
      </v-col>
      <v-col cols="12">
        <v-container>
          <v-row align="center">
            <v-col cols="4">
              <v-img
                src="../assets/images/dema14.jpeg"
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