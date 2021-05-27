class Book {
    constructor(title, author, ibsn) {
        this.title = title;
        this.author = author;
        this.ibsn = ibsn;
        this._out = false;
        this.dueDate = null;
        this.patron = null;
    }

    set out(out) {
        this._out = out;
        if (out === true) {
            const newDueDate = new Date();
            newDueDate.setDate(newDueDate.getDate() - 14);
            this.dueDate = newDueDate;
        } else {
            this.dueDate = null;
        }
    }

    get out() {
        return this._out;
    }
}