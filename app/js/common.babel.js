'use strict';

function fCutterText() {
  document.querySelectorAll('.item__text').forEach(function (element) {
    // Создаём фейковый элемент из блока (без текста)
    var oFakeElem = element.cloneNode(false);
    // Назначаем стили и прячем фейк
    oFakeElem.style = '\n        height: auto;\n        position: absolute;\n        text-align-last: justify;\n        /*visibility: hidden;\n        z-index: -100;*/\n        width: ' + getComputedStyle(element).width;
    // Добавляем фейк к документу
    document.body.appendChild(oFakeElem);
    // Получаем актуальную высоту основного блока
    var nHeightMain = parseFloat(getComputedStyle(element).height);
    // Если у блока нет свойства "fakeText", тогда...
    if (!element.fakeText) {
      // Добавляем это свойство и запоминаем в нём исходный текст блока
      element.fakeText = element.textContent;
    }

    //console.log('textAlignLast',oFakeElem.style.textAlignLast);
    oFakeElem.innerText = element.fakeText;
    // Если высота фейка больше оригинала, тогда...
    if (parseFloat(getComputedStyle(oFakeElem).height) > nHeightMain) {
      finish:

      // Приращиваем строку большими подстроками...
      for (var i = 0; i < element.fakeText.length; i += 20) {
        // Заносим постепенно текст в фейк 
        oFakeElem.innerText = element.fakeText.substring(0, i);

        // Если высота фейка стала больше оригинала, тогда...
        if (parseFloat(getComputedStyle(oFakeElem).height) > nHeightMain) {

          // Посимвольно сокращаем строку в фейке
          for (var d = 0; d < element.fakeText.length; d++) {
            // Заносим укороченный текст в фейк 
            oFakeElem.innerText = element.fakeText.substring(0, i - d);

            // Если высоты уравнялись, тогда...
            if (parseFloat(getComputedStyle(oFakeElem).height) <= nHeightMain) {
              // Отрезаем у фейкового текста ещё 3 символа (под многоточие) и добавляем "…"
              oFakeElem.innerText = oFakeElem.textContent.slice(0, -3) + '…';
              // Выходим из всех циклов разом
              break finish;
            }
          }
        }
      }
      // Копируем текст из фейка в основной блок
      element.innerText = oFakeElem.textContent;
    } else {
      // Копируем текст из фейка без изменений
      element.innerText = element.fakeText;
    }
    // Удаляем фейк из документа
    document.body.removeChild(oFakeElem);
  });
}
fCutterText();

/*
Динамическое появление дополнительного элемента, 
на основе наличия полосы прокрутки
*/
function fShowMore() {
  document.querySelectorAll('.full').forEach(function (element) {
    element.querySelector('a').style.display = element.scrollHeight > element.offsetHeight ? 'block' : 'none';
  });
}
fShowMore();

/* Слушатели событий DOM (в качестве примера, для интерактивности блоков) */
var observer1 = new MutationObserver(function (mutations) {
  fCutterText();
});
document.querySelectorAll('.dynamic').forEach(function (target) {
  observer1.observe(target, {
    attributes: true
  });
});

var observer2 = new MutationObserver(function (mutations) {
  fShowMore();
});
document.querySelectorAll('.full').forEach(function (target) {
  observer2.observe(target, {
    attributes: true
  });
});