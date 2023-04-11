
// 01

function addNumber(num) {
    return function(value) {
      return num + value;
    }
  }
  
  const addFive = addNumber(5);
  console.log(addFive(10));

  // 02

  function recursiveSearch(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return recursiveSearch(array.slice(1), value);
    }
  }
  
  const array = [1, 2, 3, 4, 5];
  console.log(recursiveSearch(array, 3));
  console.log(recursiveSearch(array, 6));

  // 03

  function addParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
  }
  
  addParagraph('This is a new paragraph!');

  // 04

  function addListItem(text) {
    const listItem = document.createElement('li');
    listItem.textContent = text;
    const list = document.querySelector('ul');
    list.appendChild(listItem);
  }
  
  addListItem('This is a new list item!');

  // 06

  function saveObjectToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  
  const myObject = { name: 'John', age: 30 };
  saveObjectToLocalStorage('myKey', myObject);

  // 07

  function getObjectFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  
  const myObject = getObjectFromLocalStorage('myKey');

  // 08

  function saveObjectToLocalStorage(obj) {
    for (let key in obj) {
      localStorage.setItem(key, obj[key]);
    }
  }
  
  const myObject = { name: 'John', age: 30 };
  saveObjectToLocalStorage(myObject);

  function getObjectFromLocalStorage() {
    const obj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      obj[key] = localStorage.getItem(key);
    }
    return obj;
  }
  
  const myNewObject = getObjectFromLocalStorage();