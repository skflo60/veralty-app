var Reflux = require('reflux');
import ClockActions from "../actions/clock_actions";
import db from "../DAO/db";

class ClockStore extends Reflux.Store {

    constructor()
    {
        super();
        this.clocks = [];
        this.listenables = ClockActions;
    }

    onLoadClocks() {
        console.log("Loading clocks");
        db.table('clocks')
          .toArray()
          .then((clocks) => {
            this.setState({clocks});
        });
    }

   
    // Load a review when the store is initialized
    onClockAdd(datetime, days) {
        const clock = {
            days: days,
            datetime: datetime.toISOString()
        };
        db.table('clocks')
          .add(clock)
          .then((id) => {
            const newList = [...this.state.clocks, Object.assign({}, clock, { id })];
            this.setState({ clocks: newList });
          });
        };

};

module.exports = ClockStore;