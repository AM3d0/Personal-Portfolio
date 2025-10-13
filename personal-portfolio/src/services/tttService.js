export const tttService = {
    getTttData() {
        return [
            {
                id: '1000',
                name: 'Tic-Tac-Toe vs KI',
                type: 'image',
                topic: 'Vorstellung',
                description: 'In dieser Version von Tic-Tac-Toe spielst du nicht gegen einen zweiten Spieler, sondern gegen eine KI. Ziel ist es, drei eigene Symbole in einer Reihe zu platzieren.',
                image: 'ttt.png',

            },
            {
                id: '1000',
                name: 'Tic-Tac-Toe vs KI',
                type: 'video',
                topic: 'Spielfluss',
                description: 'Die KI nutzt den Minimax-Algorithmus, um optimal zu spielen. Dabei bewertet sie alle möglichen Züge und wählt den, der den bestmöglichen Ausgang garantiert.',
                video: 'ttt.mp4',

            },
        ]
    }
}