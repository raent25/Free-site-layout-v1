class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.$btn = document.querySelector('#language-btn')
        this.items = options.items
        this.$el.querySelector('.dropdown__label').innerHTML = `<li data-id="${this.items[0].id}"><img class="dropdown__img" src="${this.items[0].label}" alt=""></li>`
        this.$el.querySelector('.dropdown__text').innerHTML = this.items[0].text
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label') || event.target.classList.contains('language-btn') || event.target.classList.contains('dropdown__text') || event.target.classList.contains('language-btn__img')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        })


        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}"><img class="dropdown__img" src="${i.label}" alt=""><p>${i.text}</p></li>`
        }).join(' ')
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }
    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').innerHTML = `<li data-id="${item.id}"><img class="dropdown__img" src="${item.label}" alt=""></li>`
        this.$el.querySelector('.dropdown__text').textContent = item.text
        this.close()
    }
    open() {
        this.$el.classList.add('open')
        this.$btn.classList.add('language-btn-transform')
    }
    close() {
        this.$el.classList.remove('open')
        this.$btn.classList.remove('language-btn-transform')
    }

}
const dropdown3 = new Dropdown('#dropdown', {
    items: [{
        label: 'img/en.png',
        id: 'msk',
        text: 'EN'
    }, {
        label: 'img/ua.png',
        id: 'msk1',
        text: 'UA'
    }, {
        label: 'img/ru.png',
        id: 'msk2',
        text: 'RU'
    }]
})