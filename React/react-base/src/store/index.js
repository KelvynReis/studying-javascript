import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  botaoClicado: false,
};
// eslint-disable-next-line default-param-last
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = configureStore({
  reducer,
});

export default store;
