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

function renderInputField() {
    var div = document.createElement('div');
    div = setBasicParameters(div, 'blank-space')

    var input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.type = 'text';
    input.placeholder = 'word';
    
    div.appendChild(input);
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