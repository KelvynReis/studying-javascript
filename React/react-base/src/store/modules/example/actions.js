import * as types from '../types';

export function clicaBotãoRequest() {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotãoSuccess() {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotãoFailure() {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
