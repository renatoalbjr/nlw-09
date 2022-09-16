export type RootStackParamList = {
    Loading: undefined,
    Home: undefined,
    Game: { 
        gameId: string,
        bannerUrl: string,
        title: string 
    },
    LetsPlayModal: {
        adId: string
    },
}