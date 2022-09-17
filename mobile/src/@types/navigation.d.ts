namespace ReactNavigation {
  //No need
  declare type RootParamList = {
    Loading: undefined;
    Home: undefined;
    Game: {
      gameId: string;
      bannerUrl: string;
      title: string;
    };
    LetsPlayModal: {
      adId: string;
    };
  };
}
