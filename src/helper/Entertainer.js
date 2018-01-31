import $ from "jquery";
import FBHelper from "./FBHelper";
import YTHelper from "./YTHelper";

class Entertainer {

    constructor(likes)
    {
        this.fb = new FBHelper();
        this.yt = new YTHelper();
        this.token = this.fb.getToken();
    }

    getRandomMusic() {
        const defer = $.Deferred();
        const userID = this.token.userID;
        this.fb.get(userID + "/music", { limit: 50 }).then(result => {
          const musics = result.data;
          const randomIndex = this.getRandomIndex(musics.length - 1);
          const chosenMusic = musics[randomIndex];
          console.log(chosenMusic.name);
          this.yt.get(chosenMusic.name).then(_searchResults => {
            const _randomIndex = this.getRandomIndex(0, _searchResults.items.length - 1);
            defer.resolve(_searchResults.items[_randomIndex]);
          });
        });
        return defer;
    }

    getRandomIndex(max, min = 0) {
        return Math.floor((Math.random() * max) + min);
    }



    /*getTotalLikes(likes) {
        while (likes.paging.next && this.i < 10) {
            this.totalLikes.concat(likes.data);
            this.i++;
            this.FBHelper.getResult(likes.paging.next).then(result=>{
                this.getTotalLikes(result);
            });
        }
        return this.totalLikes;
    }*/
};

module.exports = Entertainer;