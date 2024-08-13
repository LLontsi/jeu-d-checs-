class Piece {
    constructor(color, type) {
        this.color = color;
        this.type = type;
        this.selected = false;
    }

    // Méthode pour obtenir le caractère de la pièce
    getSymbol() {
        const symbols = {
            'white': {
                'pawn': '&#9817;',
                // Ajoutez les autres types de pièces ici
            },
            'black': {
                'pawn': '&#9823;',
                // Ajoutez les autres types de pièces ici
            }
        };
        return symbols[this.color][this.type];
    }
}

class Jeu {
    constructor() {
        this.selectedPiece = null;
        this.initEvents();
    }

    // Initialiser les événements de clic
    initEvents() {
        const tableau = document.querySelector('.tableau');
        tableau.addEventListener('click', (event) => {
            const caseDiv = event.target.closest('.case');
            if (!caseDiv) return;

            this.handleClick(caseDiv);
        });
    }

    // Gestion des clics
    handleClick(caseDiv) {
        const pieceElement = caseDiv.querySelector('.chess-piece');

        if (this.selectedPiece) {
            // Déplacer la pièce sélectionnée
            this.selectedPiece.classList.remove('selected'); // Supprimer la classe de sélection
            caseDiv.appendChild(this.selectedPiece); // Ajouter la pièce à la nouvelle case
            this.selectedPiece = null;
        } else if (pieceElement) {
            // Sélectionner une pièce
            this.selectedPiece = pieceElement;
            this.selectedPiece.classList.add('selected'); // Ajouter une classe de sélection (pour la mise en forme si souhaitée)
        }
    }
}

const jeu = new Jeu();
