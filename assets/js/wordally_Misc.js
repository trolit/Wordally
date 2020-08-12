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

$(document).ready(function(){
    $('[rel=tooltip]').tooltip({ trigger: "hover" });
});

// mode = normal (A visible, B hidden)
//      = inverted (A hidden, B visible)

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
    $("[data-toggle='tooltip']").tooltip('hide');
    var words = document.getElementsByClassName('wordally_word');
    createTableForSection('hiddenTranslationTabTable', words, 'translation');
}

function hideAllWords() {
    $("[data-toggle='tooltip']").tooltip('hide');
    var translations = document.getElementsByClassName('wordally_translation');
    createTableForSection('hiddenWordTabTable', translations, 'word');
}

}