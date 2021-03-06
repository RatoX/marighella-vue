import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {
    queries: [],
    news: [],
    newsToEdit: {},
    tags: [],
    skelleton: [{
      name: 'section',
      title: 'Seção',
      placeholder: 'Preencha a seção',
      required: false,
      type: {
        view: 'select',
        options: [
          {
            name: 'Capa',
            id: 'cover',
          },
          {
            name: 'Destaque',
            id: 'featured',
          },
        ],
      },
    }],
  },

  mutations: {
    REMOVE_QUERY_SEARCH(state, index) {
      state.queries.splice(index, 1);
    },

    REMOVE_TAG(state, index) {
      state.tags.splice(index, 1);
    },

    ADD_QUERY_SEARCH(state, query) {
      if (query) {
        state.queries.splice(0, 0, query);
      }
    },

    ADD_TAG(state, tag) {
      if (tag) {
        state.tags.splice(0, 0, tag);
      }
    },

    SET_VALUE(state, { dataKey, value }) {
      Vue.set(state.newsToEdit, dataKey, value);
    },

    REPLACE_NEWS_RESULT(state, news) {
      state.news = news;
    },

    NEWS_TO_EDIT(state, newsToEdit) {
      state.newsToEdit = newsToEdit;
    },
  },

  getters: {
    queries: state => state.queries,
    news: state => state.news,
    tags: state => state.tags,
    newsToEdit: state => state.newsToEdit,
    data: state => (
      Object.assign({},
        {
          tags: state.tags,
        },
        state.newsToEdit,
      )
    ),
  },

  actions: {
    USER_AUTHENTICATION(state, { username, password }) {
      return new Promise((resolve, reject) => {
        if (username === 'rato@test' && password === '123') {
          resolve();
        } else {
          reject();
        }
      });
    },

    SEARCH({ commit, state }) {
      return new Promise((resolve) => {
        console.log(`Searching for ${state.queries}`);
        const news = [...Array(5).keys()]
          .map((_, i) => ({
            id: `0x0${i}`,
            title: `Um titulo legal ${i}`,
          }));


        commit('REPLACE_NEWS_RESULT', news);
        resolve();
      });
    },

    EDIT({ commit }, { id }) {
      return new Promise((resolve) => {
        commit('NEWS_TO_EDIT', {
          id,
          title: 'Rodrigo isso eh um titulo',
        });

        setTimeout(() => {
          resolve();
        }, 1000);
      });
    },
  },
});
