import Reflux from "reflux";
import React from 'react';
import ActionBar from '../../components/common/ActionBar/ActionBar';
import MultiSelectBox from '../../components/common/MultiSelectBox/MultiSelectBox';
import moment from "moment";
import Time from "../../components/common/lib/time";
import "../../components/common/lib/input-moment.css";
import { Menu, MainButton, ChildButton} from "react-mfb";
import ClockActions from "../../assets/javascripts/actions/clock_actions";
import ClockStore from "../../assets/javascripts/stores/clock_store";

class ClockAdd extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = ClockStore; // <- just assign the store class itself
    this.m = moment();
    this.days = [{ key: 1, label: "Lun"}, { key: 2, label: "Mar"}, { key: 3, label: "Mer"}, { key: 4, label: "Jeu"}, { key: 5, label: "Ven"}, { key: 6, label: "Sam"}, { key: 0, label: "Dim"}];
    this.initDay();
  }

  handleChange(m) {
    this.setState({ m });
  }

  handleSave() {
    const selectedDays = this.getActiveDays(this.days);
    ClockActions.clockAdd(this.m, selectedDays);
    window.history.back();
  }

  initDay() {
    this.days = this.days.map(day => {
      day.active = moment().weekday() === day.key;
      return day;
    });
  }

  getActiveDays(days) {
    const activeDays = days.filter(day=>(day.active));
    return activeDays.map(day=> (day.key));
  }

  render() {
    const text = "Ajout d'un réveil";
    const menu = [
      { key: "back", class: "fa fa-arrow-left left", callback: () => { window.history.back() } },
      { key: "validate", class: "right", text: "Valider", callback: {} }
    ];

    // demo defaults
    const effect = 'zoomin';
    const pos = 'br';
    const method = 'click';

    return (
      <div className="ClockAdd">
            <div className="title">
                <ActionBar items={menu} />
                {text}
            </div>
            <div className="content">
                <form>
                  <MultiSelectBox values={this.days} />
                  <Time
                    moment={this.m}
                    onChange={() => this.handleChange()}
                  />
                </form>
            </div>
            <Menu effect={effect} method={method} position={pos}>
              <MainButton iconResting="fa fa-bars" iconActive="fa fa-bars" />
              <ChildButton
              icon="fa fa-plus"
              label="Ajouter le réveil"
              onClick={() => this.handleSave()} />
            </Menu>
      </div>
    );
  }
}

export default ClockAdd;
