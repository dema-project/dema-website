<template>
  <v-app>
    <v-app-bar app elevate-on-scroll>
      <v-toolbar-title class="success--text font-weight-bold"
        >Dema Planner</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn link text rounded to="/about" class="text-none mx-2">About</v-btn>
      <v-btn link text rounded to="/contact" class="text-none mx-2"
        >Contact</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer padless dark>
      <v-card flat tile class="success">
        <v-card-text class="white--text text-center pa-0">
          <v-img
            src="./assets/images/dema7.jpeg"
            gradient="to bottom right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)"
            width="100vw"
            max-height="250px"
          >
            <v-container class="fill-height">
              <v-row align="center">
                <v-col cols="6">
                  <h2>Ready to get started?</h2>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    outlined
                    dense
                    single-line
                    label="Email"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    dense
                    single-line
                    label="Phone Number"
                  ></v-text-field>
                  <v-btn
                    block
                    rounded
                    depressed
                    color="success"
                    class="text-none"
                    >Download App</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-img>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <v-btn depressed rounded link text to="" class="mx-2 text-none"
            >About</v-btn
          >
          <v-btn depressed rounded link text to="" class="mx-2 text-none"
            >Contact</v-btn
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Hide y-scrollbar when content doesn't overflow */
html {
  overflow-y: auto !important;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff !important;
}

* {
  font-family: "Raleway", sans-serif;
}
</style>
