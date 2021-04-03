class Base {
    getYear = () => {
        let host = window.location.href;
        let string = host.split("3000/year/");
        let year = string[1].split("#");
        return year[0];
    }
}

export default new Base;