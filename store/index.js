// state
export const state = () => ({
    lang: 'zh'
})
// actions
export const actions = {

}

// mutation
export const mutations = {
    SET_LANG(state, value) {
        state.lang = value
    },
}

// getters
export const getters = {
    lang: (state) => state.lang,
}