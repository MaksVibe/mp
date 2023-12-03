export type ModalStoreType = {
  isOpened: boolean;
  modalType: string;
  show(): void;
  hide(): void;
  setModalType(type: string): void;
};
