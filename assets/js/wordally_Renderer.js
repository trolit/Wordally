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