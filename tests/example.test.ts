import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import ExampleComponent from '../src/components/atoms/ExampleComponent.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

describe('ExampleComponent', () => {
  const vuetify = createVuetify();

  it('renders properly', () => {
    const wrapper = mount(ExampleComponent, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.text()).toContain('Example Component');
  });
});