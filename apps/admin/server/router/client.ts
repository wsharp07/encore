import { createRouter } from './context';
import { z } from 'zod';

import clientRepository from '../repository/client';

export const clientRouter = createRouter().query('getAll', {
  async resolve() {
    const result = await clientRepository.getAll();

    return {
      clients: result,
    };
  },
});
