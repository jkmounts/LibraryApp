class Library {
    constructor() {
        this.books = [];
        this.patrons = [];
        this.dailyFine = .1;
    }

    addBook(book) {
        this.books.push(book);
    }
    
    addPatron(patron) {
        this.patrons.push(patron);
    }

    chargeFines() {
        const now = new Date();
        const overduePatrons = this.patrons.filter(patron => 
            (patron.currentBook !== null && patron.currentBook.dueDate < now)
        );
        for (let patron of overduePatrons) {
            const dateDiff = new Date(now - patron.currentBook.dueDate);
            const daysLate = dateDiff.getDate();
            patron.balance += this.dailyFine * daysLate;
        }
    }
}