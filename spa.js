window.onhashchange=switchToStateFromURLHash;
let  SPAState={}
function switchToStateFromURLHash() {
    let  URLHash=window.location.hash
     let stateStr=URLHash.substr(1)
     if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
        let  parts=stateStr.split("_")
        SPAState={ pagename: parts[0] }   // номер страницы
     } 
    
     else
    SPAState={pagename:'Main'}

    var pageHTML="";
    switch ( SPAState.pagename ) {
      case 'Main':
        pageHTML+="<h3>Главная страница</h3>";
        pageHTML+="<p>Щёлкайте по кнопкам!</p>";
        break;
      case 'About':
        pageHTML+="<h3>О нас</h3>";
        pageHTML+="<p>Мы круты!</p>";
        break;
        case 'Records':
            pageHTML+=buildTable()    
            break;

    }
document.getElementById('IPage').innerHTML=pageHTML
console.log(pageHTML)
}

function switchToState(newState) {
    // устанавливаем закладку УРЛа
    // нужно для правильной работы кнопок навигации браузера
    // (т.к. записывается новый элемент истории просмотренных страниц)
    // и для возможности передачи УРЛа другим лицам
    var stateStr=newState.pagename;
    location.hash=stateStr;

    // АВТОМАТИЧЕСКИ вызовется switchToStateFromURLHash()
    // т.к. закладка УРЛа изменилась (ЕСЛИ она действительно изменилась)
  }

  function switchToMainPage() {
    switchToState( { pagename:'Main' } );
  }


  function switchToAboutPage() {
    switchToState( { pagename:'About' } );

  }
  function switchToRecordsPage() {
    switchToState( { pagename:'Records' } );

  }
  // переключаемся в состояние, которое сейчас прописано в закладке УРЛ
  switchToStateFromURLHash();

