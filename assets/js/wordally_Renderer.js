function renderElementOnPage(element, location)
{
    var renderLocation = document.getElementById(location);
    renderLocation.appendChild(element);
};

function renderDeleteTool()
{
    var icon = document.createElement('i');
    icon.setAttribute('onclick', 'removeElementByParentId(this)');
    icon.setAttribute('class', 'tim-icons icon-simple-remove delete-btn-style faa-tada animated-hover');
    return icon;
}

function createTable(collection, category) {
    var div = document.createElement('div');
    div = setBasicParameters(div, 'row')

    var table = document.createElement('table');
    table.setAttribute('class', 'table text-center');

    // setting up header
    var thead = document.createElement('thead');
    var thead_tr = document.createElement('tr');
    var headers = ['#', 'Word', 'Translation', 'Action']
    for(var i = 0; i < headers.length; i++) {
        var th = document.createElement('th');
        th.textContent = headers[i];
        thead_tr.appendChild(th);
    }
    thead.appendChild(thead_tr);
    table.appendChild(thead);
    // setting up body
    var tbody = document.createElement('tbody');
    var orderNumber = 0;
    for(var i = 0; i < collection.length; i++) {
        var tr = document.createElement('tr');
        var td_number = createTableData(orderNumber + 1);
        var td_word = createTableData(category == 'word' ? '<hidden>': collection[i].value);
        var td_translation = createTableData(category == 'translation' ? '<hidden>' : collection[i].value);
        tr.appendChild(td_number);
        tr.appendChild(td_word);
        tr.appendChild(td_translation);
        tr.appendChild(createActionButton(category == 'word' ? td_word : td_translation, category, orderNumber));
        tbody.appendChild(tr);
        orderNumber++;
    }
    table.appendChild(tbody);
    div.appendChild(table);

    renderElementOnPage(div, 'readOnlyFields_Section1');
}

function createTableData(data) {
    var td = document.createElement('td');
    td.textContent = data;
    return td;
}

function createActionButton(element, category, number) {
    var td = document.createElement('td');

    var button = document.createElement('button');
    button.setAttribute('rel', 'tooltip');
    button.setAttribute('class', 'btn btn-success btn-sm btn-icon');
    button.onclick = function() {revealText(element, category, number)};
    var icon = document.createElement('i');
    icon.setAttribute('class', 'tim-icons icon-zoom-split');

    button.appendChild(icon);
    td.appendChild(button);
    return td;
}

// Category {word, translation}
function revealText(element, category, number) {
    if(category == 'translation') {
        element.textContent = document.getElementsByClassName('wordally_translation')[number].value;
    } else if (category == 'word') {
        element.textContent = document.getElementsByClassName('wordally_word')[number].value;
    }
}

function renderInputFields() {
    var div = document.createElement('div');
    div = setBasicParameters(div, 'blank-space row')

    var wordInputDiv = document.createElement('div');
    wordInputDiv.setAttribute('class', 'col-md-4 ml-auto');

    var translationInputDiv = document.createElement('div');
    translationInputDiv.setAttribute('class', 'col-md-4 mr-auto');

    var wordInput = document.createElement('input');
    wordInput.setAttribute('class', 'form-control wordally_word');
    wordInput.setAttribute('maxlength', '30');
    wordInput.type = 'text';
    wordInput.value = 'hi'
    wordInput.placeholder = 'word';
    
    wordInputDiv.appendChild(wordInput);

    var translationInput = document.createElement('input');
    translationInput.setAttribute('class', 'form-control wordally_translation');
    translationInput.setAttribute('maxlength', '30');
    translationInput.type = wordInput.type;
    translationInput.value = 'eee'
    translationInput.placeholder = 'translation';

    translationInputDiv.appendChild(translationInput);

    div.appendChild(wordInputDiv);
    div.appendChild(translationInputDiv);
    div.appendChild(renderDeleteTool());
    renderElementOnPage(div, 'inputFields_Section')
}

function setBasicParameters(element, classes)
{
    element.setAttribute('id', GenerateUniqueId());
    element.setAttribute('style', 'position: relative;');
    element.setAttribute('class', classes);
    element.setAttribute('onselectstart', 'return false'); 
    return element;
}

function tryToCloseAlert() {
    var renderedAlert = document.getElementById('wordally-alert');
    if(renderedAlert != null) {
        document.body.removeChild(renderedAlert);
    }
}

function renderAlert(message) {
    tryToCloseAlert();

    var div = document.createElement('div');
    div.setAttribute('id', 'wordally-alert');
    div.setAttribute('class', 'alert alert-danger alert-with-icon alert-fixed')

    var dismissButton = document.createElement('button');
    dismissButton.setAttribute('class', 'close');
    dismissButton.setAttribute('data-dismiss', 'alert');
    dismissButton.setAttribute('aria-hidden', 'true');
    dismissButton.setAttribute('aria-label', 'close');

    var dismissButtonIcon = document.createElement('i');
    dismissButtonIcon.setAttribute('class', 'tim-icons icon-simple-remove');

    dismissButton.appendChild(dismissButtonIcon);

    div.appendChild(dismissButton);

    var spanIcon = document.createElement('span');
    spanIcon.setAttribute('data-notify', 'icon');
    spanIcon.setAttribute('class', 'tim-icons icon-alert-circle-exc');

    div.appendChild(spanIcon);

    var spanMessage = document.createElement('span');
    spanMessage.innerHTML = `<strong>Oops</strong> <br/> ${message}`;

    div.appendChild(spanMessage);

    document.body.appendChild(div);
}