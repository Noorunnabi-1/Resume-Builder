function addNewWEField() {
    // console.log("add New W E Field")

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('form-group');
    newNode.setAttribute('rows', 5);

    let weObj = document.getElementById('we');
    let weAddBtnObj = document.getElementById('weAddBtn');

    weObj.insertBefore(newNode, weAddBtnObj);
}