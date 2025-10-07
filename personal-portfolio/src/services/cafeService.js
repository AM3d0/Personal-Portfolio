export const cafeService = {
    getCafeData() {
        return [
            {
                id: '1000',
                name: 'Cafe',
                topic: 'Vorstellung',
                description: 'Eine App für Cafés, mit der Gäste Bestellungen digital und bequem aufgeben können. Die Bestellungen werden automatisch an die Küche weitergeleitet und dort verarbeitet.',
                image: 'cafe.jpeg',

            },
            {
                id: '1000',
                name: 'Cafe',
                type: 'video',
                topic: 'Bestellvorgang',
                description: 'Beim Auswählen eines Produkts öffnet sich ein Detailfenster, in dem Gäste Menge und Notizen angeben können. In der Übersicht lassen sich Bestellungen flexibel anpassen oder löschen.',
                video: 'cafeMain.mp4',

            },
            {
                id: '1000',
                name: 'Cafe',
                type: 'video',
                topic: 'Küche',
                description: 'In der Küche werden Bestellungen in Echtzeit angezeigt – inklusive Produkte, Mengen und Notizen. Nach der Bearbeitung können sie direkt gelöscht werden.',
                video: 'delete_order.mp4',
            },
        ]
    }
}