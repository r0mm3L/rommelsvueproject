<template>
    <nav>
    <v-app-bar text app>
        <v-app-bar-nav-icon mini-variant-width="5" class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Rommel</span>
            <span></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-arrow-right-bold-box-outline</v-icon>
        </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app class="primary">
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <!--<v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>-->
                    <v-list-item-title>{{ link.text }}</v-list-item-title>

                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
                { icon: 'mdi-account', text: 'Team', route: '/team' },
            ]
        }
    }
    
}
</script>