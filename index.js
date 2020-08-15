const section = document.querySelector('#frame-spec');

function clicked(id) {

    switch (id) {
        case 1:
           section.src = './index-info.html#about';
            break;
        case 2:
            section.src = './index-info.html#skills';
            break;
        case 3:
            section.src = './index-info.html#languages';
            break;
     
    }
 
}