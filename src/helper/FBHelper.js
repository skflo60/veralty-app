import $ from "jquery";

class FBHelper {

    constructor()
    {
        if (!this.token) {
            this.token = JSON.parse(localStorage.getItem("token"));
            this.userID = this.token.userID;
            this.accessToken = this.token.accessToken;
        }
    }

    getToken() {
        return this.token;
    }

    get(module, data) {
        return $.ajax({
            type: "GET",
            url: "https://graph.facebook.com/v2.8/" + module,
            data: Object.assign({ access_token: this.accessToken }, data)
        });
    }

    getResult(http) {
        return $.get(http);
    }
};

module.exports = FBHelper;