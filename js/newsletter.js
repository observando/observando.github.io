
var newsletter_feed = "observando.substack.com";
var col_dark = "#010E1A";
var col_light = "#FFF9F2";

window.CustomSubstackWidget = {
    substackUrl: newsletter_feed,
    placeholder: "tumail@gmail.com",
    buttonText: "Suscribirme",
    theme: "custom",
    colors: {
      primary: col_light,
      input: col_dark,
      email: col_light,
      text: col_dark,
    }
  };

  window.SubstackFeedWidget = {
    substackUrl: newsletter_feed,
    posts: 5,
    colors: {
      primary: col_light,
      secondary: col_light,
      background: col_dark,
    }
  };