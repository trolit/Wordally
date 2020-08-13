function GenerateUniqueId()
{
    return Math.random().toString(36).substr(2, 9);
}

function removeElementByParentId(elementId) {
    var element = document.getElementById(elementId.parentNode.id);
    if(element != null) {
        element.parentNode.removeChild(element);
    }
    // TODO
    if(document.getElementsByClassName('ezGitPart').length <= 0) {
        changeElementsVisiblity(codeGenButton);
        document.getElementById('resetButton').disabled = true;

        if(startingNoteRef.classList.contains('hide')) {
            startingNoteRef.classList.remove('hide');
        }
    }
}

var audio = new Audio('assets/sounds/alert-notification.mp3');

function changeActiveTab(tabId) {
    if(tabId == 'hiddenTranslationTab') {
        showTranslationTab(tabId);
    }
    else if (tabId == 'hiddenWordTab') {
        $(`#${tabId}`).tab('show');
        var translations = document.getElementsByClassName('wordally_translation');
        createTableForSection('hiddenWordTabTable', translations, 'word');
    }
    else if (tabId == 'testKnowledgeTab') {
        $(`#${tabId}`).tab('show');
        createVerificationContent();
    }
    else if (tabId == 'defaultTab') {
        $(`#${tabId}`).tab('show');
    }
    else if (tabId = 'testResultsTab') {
        $(`#${tabId}`).tab('show');
        verifyResults();
    }
}

function createVerificationContent() {
    clearSectionIfNotEmpty('verifyKnowledgeSection');
    var translations = document.getElementsByClassName('wordally_translation');
    for(var i = 0; i < translations.length; i++) {
        var element = createVerificationElement(translations[i].value);
        renderElementOnPage(element, 'verifyKnowledgeSection');
    }
}

function verifyResults() {
    var id = 'verificationResultsSection';
    var labels = document.getElementsByClassName('verification-label');
    var inputs = document.getElementsByClassName('verification-input');
    var words = document.getElementsByClassName('wordally_word');
    
    var ul = createUnorderedList();

    var correctAnswersCounter = 0;

    for(var i = 0; i < words.length; i++) {
        var element;
        var input = inputs[i].value.toLowerCase().trim();
        var word = words[i].value.toLowerCase().trim();
        if(input == word) {
            element = createCorrectListItem(labels[i].textContent, input);
            correctAnswersCounter++;
        } else {
            if(input == '') {
                input = 'no answer';
            }
            element = createInCorrectListItem(labels[i].textContent, input, word);
        }
        ul.appendChild(element);
    }
    $("#scoreText").text(`${correctAnswersCounter} / ${words.length}`);

    clearSectionIfNotEmpty(id);
    renderElementOnPage(ul, id);
}

function showTranslationTab(tabId) {
    var words = document.getElementsByClassName('wordally_word');
    var translations = document.getElementsByClassName('wordally_translation');
    var counter = 0;
    for(var i = 0; i < words.length; i++) {
        var word = words[i].value.trim();
        var translation = translations[i].value.trim();
        if(word != '' && translation != '') {
            counter++;
        } else {
            if(word == '' && translation == '') {
                renderAlert(`Please fill in word & translation fields for row: ${i + 1}.`);
            }
            else if(word == '') {
                renderAlert(`Please fill in word field for translation: ${translation}.`);
            } 
            else if (translation == '') {
                renderAlert(`Please fill in translation field for word: ${word}.`);
            }
            audio.play();
            return;
        }
    }
    if(counter < 3) {
        renderAlert(`You need to have at least 3 words to move forward(currently: ${counter})`);
        audio.play();
    } else {
        tryToCloseAlert();
        $(`#${tabId}`).tab('show');
        createTableForSection('hiddenTranslationTabTable', words, 'translation');
    }
}

var clipboard;
var hideTranslationsBtn;
var hideWordsBtn;

$(document).ready(function(){
    $('[rel=tooltip]').tooltip({ trigger: "hover" });
    clipboard = new ClipboardJS('#genURLbtn');
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });

    var url = window.location.href;
    if(url.includes('?')) {
        let params = new URLSearchParams(url);
        var words = params.getAll('word');
        var translations = params.getAll('translation');

        for(var i = 0; i < words.length; i++) {
            console.log(words[i] + ' ' + translations[i]);
            createPairOfInputFields(words[i], translations[i]);
        }
    } else {
        createPairOfInputFields()
        createPairOfInputFields()
        createPairOfInputFields()
    }

    hideTranslationsBtn = document.getElementById('hideAllTranslationsBtn');
    hideWordsBtn = document.getElementById('hideAllWordsBtn');
});

function createTableForSection(id, collection, mode) {
    clearSectionIfNotEmpty(id);
    createTable(id, collection, mode);
}

function clearSectionIfNotEmpty(id) {
    if(document.getElementById(id).childElementCount > 0) {
        $(`#${id}`).empty();
    }
}

function hideAllTranslations() {
    hideTranslationsBtn.classList.add('disabled');
    $("[data-toggle='tooltip']").tooltip('hide');
    var words = document.getElementsByClassName('wordally_word');
    createTableForSection('hiddenTranslationTabTable', words, 'translation');
}

function hideAllWords() {
    hideWordsBtn.classList.add('disabled');
    $("[data-toggle='tooltip']").tooltip('hide');
    var translations = document.getElementsByClassName('wordally_translation');
    createTableForSection('hiddenWordTabTable', translations, 'word');
}

function generateUrl() {
    var url = window.location.href;
    if(url.includes('?')) {
        url = url.split('?')[0];
    }
    url += '?';

    // source: https://stackoverflow.com/questions/814613/how-to-read-get-data-from-a-url-using-javascript/55576345#55576345
    // https://www.example.com?&name=n1&name=n2&
    // no & after ? and at the end results in not reading them :( TODO
    var words = document.getElementsByClassName('wordally_word');
    var translations = document.getElementsByClassName('wordally_translation');

    var parameters = '';
    for(var i = 0; i < words.length; i++) {
        parameters += `&word=${words[i].value}&translation=${translations[i].value}`
    }

    url += parameters;

    copyToClipBoard(url);
}

function copyToClipBoard(data) {
    document.getElementById('genURLbtn').setAttribute('data-clipboard-text', data)
}

function removeClassDisableOnCondition(element) {
    if(element.classList.contains('disabled')) {
        element.classList.remove('disabled');
    }
}