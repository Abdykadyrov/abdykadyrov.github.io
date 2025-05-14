
function t_onReady(func) {
  if (document.readyState != 'loading') {
    func();
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
}

function t_onFuncLoad(funcName, okFunc, time) {
  if (typeof window[funcName] === 'function') {
    okFunc();
  } else {
    setTimeout(function() {
      t_onFuncLoad(funcName, okFunc, time);
    }, (time || 100));
  }
}
window.tildaApiServiceRootDomain = "tildacdn.kz";

function t396_initialScale(t) {
  t = document.getElementById("rec" + t);
  if (t) {
    t = t.querySelector(".t396__artboard");
    if (t) {
      var e, r = document.documentElement.clientWidth,
        a = [];
      if (i = t.getAttribute("data-artboard-screens"))
        for (var i = i.split(","), l = 0; l < i.length; l++) a[l] = parseInt(i[l], 10);
      else a = [320, 480, 640, 960, 1200];
      for (l = 0; l < a.length; l++) {
        var n = a[l];
        n <= r && (e = n)
      }
      var o = "edit" === window.allrecords.getAttribute("data-tilda-mode"),
        d = "center" === t396_getFieldValue(t, "valign", e, a),
        c = "grid" === t396_getFieldValue(t, "upscale", e, a),
        s = t396_getFieldValue(t, "height_vh", e, a),
        u = t396_getFieldValue(t, "height", e, a),
        g = !!window.opr && !!window.opr.addons || !!window.opera || -1 !== navigator.userAgent.indexOf(" OPR/");
      if (!o && d && !c && !s && u && !g) {
        for (var _ = parseFloat((r / e).toFixed(3)), f = [t, t.querySelector(".t396__carrier"), t.querySelector(".t396__filter")], l = 0; l < f.length; l++) f[l].style.height = Math.floor(parseInt(u, 10) * _) + "px";
        t396_scaleInitial__getElementsToScale(t).forEach(function(t) {
          t.style.zoom = _
        })
      }
    }
  }
}

function t396_scaleInitial__getElementsToScale(t) {
  return t ? Array.prototype.slice.call(t.children).filter(function(t) {
    return t && (t.classList.contains("t396__elem") || t.classList.contains("t396__group"))
  }) : []
}

function t396_getFieldValue(t, e, r, a) {
  var i = a[a.length - 1],
    l = r === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + r);
  if (!l)
    for (var n = 0; n < a.length; n++) {
      var o = a[n];
      if (!(o <= r) && (l = o === i ? t.getAttribute("data-artboard-" + e) : t.getAttribute("data-artboard-" + e + "-res-" + o))) break
    }
  return l
}

function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.type = 'text/javascript';
  script.charSet = 'utf-8';
  script.onError = "this.loaderr='y';";
  script.async = true;

  document.head.appendChild(script);
}

function init() {
  console.log('init');
  t_onFuncLoad('t396_initialScale', function() {
    t396_initialScale('800711777');
  });
  t_onReady(function() {
    t_onFuncLoad('t396_init', function() {
      t396_init('800711777');
    });
  });

  loadScript('https://static.tildacdn.pro/ws/project9985795/tilda-blocks-page55172611.min.js?t=1735179572"');
  loadScript('https://static.tildacdn.pro/js/tilda-lazyload-1.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-animation-2.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-zero-1.1.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-forms-1.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-zero-forms-1.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-animation-sbs-1.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-zero-scale-1.0.min.js');
  loadScript('https://static.tildacdn.pro/js/tilda-events-1.0.min.js');
}

document.addEventListener('click', init, {
  once: true
});

document.addEventListener('DOMContentLoaded', function () {
  document.body.style.overflow = 'hidden';
});

function selectLocale(locale) {
  console.log(locale);
  const localeWrapper = document.getElementById('localeSelector');
  const welcomeText = document.getElementById('welcomeText');
  const inviteText = document.getElementById('inviteText');
  const waitText = document.getElementById('waitText');
  const dateText = document.getElementById('dateText');
  const beforeCelebrationText = document.getElementById('beforeCelebrationText');
  const addressTitleText = document.getElementById('addressTitleText');
  const addressText = document.getElementById('addressText');
  const programmText = document.getElementById('programmText');
  const guestsText = document.getElementById('guestsText');
  const beginningText = document.getElementById('beginningText');
  const endingText = document.getElementById('endingText');
  const ownersText = document.getElementById('ownersText');
  const presenceText = document.getElementById('presenceText');
  const waitText2 = document.getElementById('waitText2');
  const openMapLink = document.getElementById('openMapLink');
  const calendarSvg = document.getElementById('calendarSvg');
  const googleForm = document.getElementById('googleFormFrame');
  localeWrapper.style.display = 'none';
  document.body.style.overflow = 'auto';

  switch (locale) {
    case 'ru':
      welcomeText.innerHTML = 'Дорогие <br> наши друзья и родные!';
      inviteText.innerHTML = 'С радостью приглашаем <br>вас разделить с нами этот <br>незабываемый день — день <br>нашей свадьбы! <br>\n' +
        '<br>Ваше присутствие делает этот <br>праздник полным, ведь именно <br>с вами мы хотим разделить <br>все радостные моменты.';
      waitText.innerHTML = 'Ждём Вас: ';
      dateText.innerHTML = '23 августа 2025 года в 17:00';
      beforeCelebrationText.innerHTML = 'До торжества:';
      addressTitleText.innerHTML = 'По адресу:';
      addressText.innerHTML = 'город Костанай, <br> улица Камшат Доненбаевой 114, <br>банкетный зал <br>" Султан Сарайы " ';
      programmText.innerHTML = 'Программа свадьбы:';
      guestsText.innerHTML = 'сбор гостей';
      beginningText.innerHTML = 'начало торжества';
      endingText.innerHTML = 'Завершение торжества';
      ownersText.innerHTML = 'организаторы<br>Кайыржан - Оксана';
      presenceText.innerHTML = 'Ваше присутствие:';
      waitText2.innerHTML = 'С нетерпением <br> ждём Вас! ';
      openMapLink.innerHTML = 'открыть карту';
      calendarSvg.src = './assets/images/calendar.svg';
      googleForm.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdr3W5BmOV_FIe7Yyg4cvMHZy5XvhQK2N0NlnELyvly6p2c4w/viewform?embedded=true';
      googleForm.height = 680;
      break;
    case 'kk': {
      console.log(waitText);
      welcomeText.innerHTML = 'Құрметті <br> достар мен туыстар!';
      inviteText.innerHTML = 'Сіздерді өміріміздің<br>ең қуанышты, <br>ең есте қалар күндерінің бірі — <br>үйлену тойымызға арналған <br>салтанатты ақ дастарханның қадірлі <br>қонағы болуға шақырамыз !';
      waitText.innerHTML = 'Сіздерді күтеміз: ';
      dateText.innerHTML = '2025 жылғы 23 тамыз<br>сағат 17:00-де';
      beforeCelebrationText.innerHTML = 'Тойға дейін:';
      addressTitleText.innerHTML = 'Мекенжай:';
      addressText.innerHTML = 'Қостанай қаласы, <br> Қамшат Дөненбаева көшесі, 114, <br> " Сұлтан Сарайы " <br>банкет залы';
      programmText.innerHTML = 'Той бағдарламасы:';
      guestsText.innerHTML = 'қонақтарды қарсы алу';
      beginningText.innerHTML = 'тойдың басталуы';
      endingText.innerHTML = 'тойдың аяқталуы';
      ownersText.innerHTML = 'Той иелері<br>Қайыржан - Оксана';
      presenceText.innerHTML = 'Сіздің қатысуыңыз:';
      waitText2.innerHTML = 'Қуанышымызға<br>ортақ болыңыздар! ';
      openMapLink.innerHTML = 'картаны ашу';
      calendarSvg.src = './assets/images/calendar_kz.svg';
      googleForm.src = 'https://docs.google.com/forms/d/e/1FAIpQLSdr9YwP5L6a0zGefn3kT_53K-uSlGITQKOvxyLY6ZqwEIMcQg/viewform?embedded=true';
      googleForm.height = 675;

      break;
    }
    default:
      return null;
  }
}