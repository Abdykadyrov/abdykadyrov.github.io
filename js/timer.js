(function () {
  var _id = "06d35686db2bdbd8b79d6dfe3a0834ce";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write(
    "<div id='timer" + _id + "' style='min-width:387px;height:73px;'></div>"
  );
  var _t = document.createElement("script");
  _t.src = "https://megatimer.ru/timer/timer.min.js?v=1";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      view: [1, 1, 1, 1],
      type: {
        currentType: "1",
        params: { usertime: true, tz: "3", utc: 1755968400000 },
      },
      design: {
        type: "text",
        params: {
          "number-font-family": {
            family: "Marmelad",
            link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "number-font-size": "32",
          "number-font-color": "#000",
          "separator-margin": "8",
          "separator-on": true,
          "separator-text": ":",
          "text-on": true,
          "text-font-family": {
            family: "Marmelad",
            link: "<link href='//fonts.googleapis.com/css?family=Marmelad&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "text-font-size": "12",
          "text-font-color": "#c7c7c7",
        },
      },
      designId: 1,
      theme: "white",
      width: 387,
      height: 73,
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}).call(this);
