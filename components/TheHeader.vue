<!-- Please remove this file from your project -->
<template>
    <header>
        <div class="h-8 bg-gray-100 text-sm">
            <div class="container flex justify-between items-center h-full">
                <div></div>
                <div></div>
                <div class="flex items-center">
                    <nuxt-link :to="localePath('/about')">about</nuxt-link>
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    </button>
                    <span class="mx-2">｜</span>
                    <label for="langSelect">語系：</label>
                    <select id="langSelect" name="" @change="setLang($event)">
                        <option
                            v-for="locale in $i18n.locales"
                            :key="locale.code"
                            :value="locale.code"
                            :selected="locale.code == $root.$i18n.locale"
                        >
                            {{ locale.name }}
                        </option>
                    </select>
                    <span class="mx-2">｜</span>
                    <nuxt-link :to="localePath('/login')">{{ $t('login') }}</nuxt-link>
                    <span class="mx-2">/</span>
                    <nuxt-link :to="localePath('/register')">{{ $t('register') }}</nuxt-link>
                </div>
            </div>
        </div>
        <div></div>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    methods: {
        setLang(e) {
            this.$router.push(this.switchLocalePath(e.target.value));
        },
    },
}
</script>

<style lang="scss">
</style>