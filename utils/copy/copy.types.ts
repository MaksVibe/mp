export type CopyStoreType = {
  copy: {
    // head: HeadProps;
    global: GlobalCopy;
    homePage: HomePageCopy;
  };
  setCopy(patch: Partial<CopyStoreType['copy']>): void;
};

export interface HomePageCopy {
  title: string;
  body: string;
  cta: string;
}

export interface GlobalCopy {
  additional: string;
  cookies: {
    title: string;
    description: string;
    cta: string;
  };
  errors: {
    mobileOnly: {
      title: string;
      body: string;
    };
    notFound: {
      title: string;
      body: string;
      cta: string;
    };
    javascriptDisabled: {
      title: string;
      body1: string;
      body2: string;
    };
    rotateDevice: {
      body: string;
    };
    unsupportedBrowser: {
      title: {
        mobile: string;
        banner: string;
      };
      body: {
        mobile: string;
        banner: string;
      };
      cta: string;
    };
    windowTooSmall: {
      title: string;
      body: string;
    };
    webGLDisabled: {
      title: string;
      body1: string;
      body2: string;
    };
  };
  // modals: {
  //   error: ModalPrompt;
  // };
  loading: string;
}
