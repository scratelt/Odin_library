function Book (title, author, pages, read) {
    this.title = title
    this.author = authorthis.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`
    }
}