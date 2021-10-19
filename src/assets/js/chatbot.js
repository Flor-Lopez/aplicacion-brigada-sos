//  Kommunicate Dialog flow

// PRIMER PERMISO
  // (function(d, m){
  //     var kommunicateSettings =
  //         {"appId":"1bd589a50eab5136fb440995838ef7494","popupWidget":true,"automaticChatOpenOnNavigation":true};
  //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //     window.kommunicate = m; m._globals = kommunicateSettings;
  // })(document, window.kommunicate || {});

  // SEGUNDO PERMISO
    (function(d, m){
        var kommunicateSettings =
            {"appId":"1df3a49859e3ef6f16931f2cd70278f2d","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
