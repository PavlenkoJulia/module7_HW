const gadgets = {
    tablet: "sony",
    phone: "iphone",
    laptop: "asus"
  }
  function checkSimilar(string, gadgets) {
    if (string in gadgets) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  checkSimilar("laptop", gadgets);