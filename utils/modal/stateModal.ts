import { create, StoreApi, UseBoundStore } from 'zustand';

import { ModalStoreType } from './stateModal.types';

const useModal: UseBoundStore<StoreApi<ModalStoreType>> = create(
  (set: (partial: (store: ModalStoreType) => Partial<ModalStoreType>) => void) => ({
    isOpened: false,
    modalType: '',
    show: () => {
      set(() => ({ isOpened: true }));
    },
    hide: () => {
      set(() => ({ isOpened: false }));
    },
    setModalType: type => {
      set(() => ({ modalType: type }));
    },
  }),
);

export default useModal;
