import { beforeAll, afterEach } from 'vitest';
import { config } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

let vuetify: any;

beforeAll(() => {
  vuetify = createVuetify();

  // Configuração global do Vuetify para os testes
  config.global.plugins = [vuetify];
});

afterEach(() => {
  // Limpar o DOM após cada teste
  document.body.innerHTML = '';
});