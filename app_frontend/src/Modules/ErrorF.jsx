class Error {
    getErrorValue = () => {
        let url = window.location.href;
        url = url.split("/Error/");
        return url[1];
    }
}

export default new Error();