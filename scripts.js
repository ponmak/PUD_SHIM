const url_link = ["http://www.reddit.com","https://www.youtube.com/watch?v=VxR_BYPG7v4"]

const rand = (items) => {
    return items[items.length * Math.random() | 0];
};

const url_random = rand(url_link)
window.location.replace(url_random)