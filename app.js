const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  }
]

const results = document.querySelector('#results');
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories)

results.innerHTML = categories.map((category) => {

  return `<button>${category}</button>`
})
.join('');