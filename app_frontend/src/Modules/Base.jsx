class Base {
    getYear = () => {
        let host = window.location.href;
        let string = host.split("3000/year/");
        let year = string[1].split("#");
        return year[0];
    }

    getPort = () => {
        return 9000;
    }

    getIp = () => {
        let ip = window.location.host;
        ip = ip.split(":");
        return ip[0];
    }

}

export default new Base;