const url_link = ["https://drive.google.com/file/d/1ouk_NP57ikbor9b4RLhUKLP9BjcP1yzB/view?usp=sharing","https://drive.google.com/file/d/1Qisy6oV7RmgpH-IRxrFzUt47dhMFjWln/view?usp=sharing","https://drive.google.com/file/d/1ZpC9r977H1mHK8-Jun_mQJSiNCUEQRXX/view?usp=sharing","https://drive.google.com/file/d/1YJLBHlr1ZV2bZOTzM-t4xEDWu5z5qpn_/view?usp=sharing","https://drive.google.com/file/d/1T2pbWGcEhxZGUzEVPf9ZFe3eKC8EBQBI/view?usp=sharing"]

const rand = (items) => {
    return items[items.length * Math.random() | 0];
};

const url_random = rand(url_link)
window.location.replace(url_random)