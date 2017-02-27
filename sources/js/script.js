'use strict';

window.onload = function () {
    
    var sidebar = document.getElementsByTagName('aside')[0];
    
    sidebar.onclick = function (event) {
        var target = event.target;
        if (target.tagName !== 'DIV') return; // not a button
        
        if (target.classList.contains('active')) return; // already active
        
        // switch buttons
        var activeButton = document.getElementsByClassName('menuitem active')[0];
        activeButton.classList.remove('active');        
        target.classList.add('active');
        
        // switch divs
        var activeDiv = document.getElementsByClassName('info show')[0];
        activeDiv.classList.remove('show');
        
        switch (target.innerHTML) {
            case 'About myself':
                document.getElementById('about').classList.add('show');
                return;
            case 'Education':
                document.getElementById('education').classList.add('show');
                return;
            case 'Work experience':
                document.getElementById('experience').classList.add('show');
                return;
            case 'Skills':
                document.getElementById('skills').classList.add('show');
                return;
        }
    }
}