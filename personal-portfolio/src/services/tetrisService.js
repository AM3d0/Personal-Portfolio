export const tetrisService = {
    getTetrisData() {
        return [
            {
                id: '1000',
                name: 'Tetris',
                topic: 'Vorstellung',
                description: 'Ein klassisches Tetris-Spiel, bei dem fallende Tetrominos so gestapelt werden müssen, dass ganze Reihen entstehen. Mit steigendem Level erhöht sich die Geschwindigkeit.',
                image: 'Tetris.jpeg',

            },
            {
                id: '1000',
                name: 'Harvard-CS50x',
                type: 'video',
                topic: 'Spielfluss',
                description: 'Die fallenden Tetrominos können gedreht und positioniert werden. Sobald ein Teil platziert ist, erscheint das nächste. Vollständige Reihen verschwinden und bringen Punkte.',
                video: 'tetrisMain2.mp4',

            },
                        {
                id: '1000',
                name: 'Harvard-CS50x',
                type: 'image',
                topic: 'Screen',
                description: 'Unter Punkt 1 sind Statistiken zu sehen, wie oft jedes Tetromino gespawnt wurde. Punkt 2 zeigt das Level, Punkt 3 die Punkte und das nächste Tetromino, Punkt 4 das Ghost-Tetromino.',
                image: 'screen.png',

            },
        ]
    }
}