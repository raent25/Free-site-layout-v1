class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.$btn = document.querySelector('#language-btn')
        this.items = options.items
        this.$el.querySelector('.dropdown__label').innerHTML = this.items[0].label
        this.$el.querySelector('.dropdown__text').innerHTML = this.items[0].text
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label') || event.target.classList.contains('language-btn') || event.target.classList.contains('dropdown__text') || event.target.classList.contains('language-btn__img')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            } else if (event.target.classList.contains('dropdown__li')) {
                this.select(event.target.dataset.id)
            }
            // else if (event.target.tagName.toLowerCase() === 'li') {
            //     this.select(event.target.dataset.id)
            // }
        })


        const itemsHTML = this.items.map(i => {
            return i.label
        }).join(' ')
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }
    select(id) {

        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').innerHTML = item.label
        this.$el.querySelector('dropdown__text').innerHTML = item.text
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
const dropdown = new Dropdown('#dropdown', {
    items: [{
            label: '<li  data-id="msk"  class="dropdown__li"><img src="img/en.png" class="dropdown__img" alt="0"></li>',
            id: 'msk',
            text: 'EN'
        }, {
            label: '<li data-id="msk1" class="dropdown__li"><img src="img/ua.png"  class="dropdown__img" alt="1"></li>',
            id: 'msk1',
            text: 'UA'
        }, {
            label: '<li data-id="msk2" class="dropdown__li"><img src="img/ru.png"  class="dropdown__img" alt="2"></li>',
            id: 'msk2',
            text: 'RU'
        }

    ]
})