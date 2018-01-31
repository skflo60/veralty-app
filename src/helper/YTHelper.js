import $ from "jquery";

class YTHelper {

    constructor()
    {
        this.api_key = "AIzaSyCPELXsk7XjAVlIr3a3Y-7TEk7fCoUl4ak";
    }

    get(q, data = {}) {
        return $.ajax({
            type: "GET",
            url: "https://www.googleapis.com/youtube/v3/search?part=id&type=video",
            data: Object.assign({ key: this.api_key, q }, data)
        });
    }
};

module.exports = YTHelper;