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

    <v-footer dark padless>
      <v-card flat tile class="success">
        <v-card-text class="text-center pa-0">
          <v-img
            src="./assets/images/dema7.jpeg"
            gradient="to top, rgba(0, 0, 0, 0.2), rgba(0, 105, 77, 0.6), rgba(0, 105, 77, 1)"
            width="100vw"
            max-height="300px"
          >
            <v-container class="fill-height">
              <v-row align="center">
                <v-col cols="12" md="6">
                  <h2 class="py-4">Ready to get started?</h2>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    outlined
                    dense
                    label="Name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    outlined
                    dense
                    label="Email address"
                    type="email"
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
          <v-btn depressed rounded link text to="/about" class="mx-2 text-none"
            >About</v-btn
          >
          <v-btn
            depressed
            rounded
            link
            text
            to="/contact"
            class="mx-2 text-none"
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

.b {
  border: 1px solid black;
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #ffffff !important;
}
</style>
