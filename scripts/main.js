var SELECTOR_BIG_IMG = '[data-img-type = "target"]';
var SELECTOR_IMG_TITLE = '[data-img-type = "title"]';
var SELECTOR_IMG_FRAME = '[data-img-type = "frame"]';
var SELECTOR_MINIATURE = '[data-img-type = "trigger"]';
var CLASS_BIG_IMG_HIDDEN = 'big-img-hidden';
var RULE_SMALL_IMG = 'very-small-img';
var ESC_KEY = 27;

function changeImg(imgUrl, titleText) {
  'use strict';
  var bigImg = document.querySelector(SELECTOR_BIG_IMG);
  bigImg.setAttribute('src', imgUrl);

  var imgTitle = document.querySelector(SELECTOR_IMG_TITLE);
  imgTitle.textContent = titleText;
}

function minatureImg(miniature) {
  'use strict';
  return miniature.getAttribute('data-img-ulr');
}

function minatureTitle(miniature) {
  'use strict';
  return miniature.getAttribute('data-img-title');
}

function changeImgOnMinature(miniature) {
  'use strict';
  changeImg(minatureImg(miniature), minatureTitle(miniature));
}

function handleMouseClick(miniature) {
  'use strict';
  miniature.addEventListener('click', function(click) {
    click.preventDefault();
    changeImgOnMinature(miniature);
    showBigImg();
  });
}

function readMiniatureTable() {
  'use strict';
  var miniatures = document.querySelectorAll(SELECTOR_MINIATURE);
  var miniatureTable = [].slice.call(miniatures);
  return miniatureTable;
}

function hideBigImg() {
  'use-strict';
  document.body.classList.add(CLASS_BIG_IMG_HIDDEN);
}

function showBigImg() {
  'use-strict';
  var frame = document.querySelector(SELECTOR_IMG_FRAME);
  document.body.classList.remove(CLASS_BIG_IMG_HIDDEN);
  frame.classList.add(RULE_SMALL_IMG);
  setTimeout(function() {
    frame.classList.remove(RULE_SMALL_IMG);
  }, 50);
}

function addKeyPressing() {
  'use-strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode == ESC_KEY) {
      hideBigImg();
    }
  });
}

function startEvent() {
  'use strict';
  var miniatures = readMiniatureTable();
  miniatures.forEach(handleMouseClick);
  addKeyPressing();
}

startEvent();
