import { create, StoreApi, UseBoundStore } from 'zustand';

import { getCopy } from './copy.data';
import { CopyStoreType } from './copy.types';

export const useCopyStore: UseBoundStore<StoreApi<CopyStoreType>> = create(
  (set: (partial: (store: CopyStoreType) => Partial<CopyStoreType>) => void) => ({
    copy: getCopy(),
    setCopy: patch => {
      set(({ copy }) => ({
        copy: {
          ...copy,
          ...patch,
        },
      }));
    },
  }),
);
