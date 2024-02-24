let shoppingList = [];

const addButton = document.getElementById('btn');

const deleteButton = document.getElementById('btn2');

const output = document.getElementById('output');
const input = document.getElementById('item');


const addNewTodo = () => {
    const input = document.getElementById('item').value;
    if(input.trim() === "") {
        alert("Lütfen bir şeyler yazınız.");
        return;
    }
    document.getElementById('item').value = '';
    shoppingList.push(input);
    showList();
};

addButton.addEventListener('click', addNewTodo);

input.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        addNewTodo()
    }
});

function showList() {
    output.innerHTML = '';
    shoppingList.forEach(function (item, index) {
        const newItem = document.createElement('div');
        const radioBtn = document.createElement('input');
        radioBtn.type = 'checkbox';
        radioBtn.name = 'shoppingItem';
        radioBtn.value = index;
        newItem.classList.add("new-item")
        radioBtn.addEventListener('click', function () {
            console.log("Seçili öge" + shoppingList[index])
        });
        newItem.textContent = item;
        newItem.appendChild(radioBtn);
        output.appendChild(newItem);
    });
}

deleteButton.addEventListener('click', function () {
    shoppingList = [];
    output.innerHTML = '';
})
