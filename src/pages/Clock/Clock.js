import React from 'react';
import Reflux from "reflux";
import Header from '../../components/core/Header/Header';
import ClockStore from "../../assets/javascripts/stores/clock_store";
import ClockActions from "../../assets/javascripts/actions/clock_actions";
import moment from "moment";

class Clock extends Reflux.Component {

	constructor(props) {
		super(props);
		this.store = ClockStore;
	}

	componentDidMount() {	
		ClockActions.loadClocks();
	}

	render() {
		if (this.state.clocks) {
			const htmlClocks = this.state.clocks.map((item) => {
				const days = item.days.map(day => (moment().day(day).format("ddd"))).join(" ");
			    return (
			        <div className="clock" key={item.id}>
			          	<div className="time">{moment(item.datetime).format("HH:mm")}</div>
			        	<div className="days">{days}</div>
			        </div>
			    );
		    });
		    return (
		      <div className="Clock">
		            <Header items={[{key: "add", class: "fa fa-plus", link: "#/Clock/Add"}]}/>
		            <div className="content">
			            <div className="clocks">
			            	{htmlClocks}
			            </div>
			        </div>
		      </div>
		    );
		} else {
			return (
				<div> Chargement en cours </div>
				)
		}
	}
}

export default Clock;
