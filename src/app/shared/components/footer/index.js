import React from 'react';
import FloorSwitcher from '../floorSwitcher';
import ZoomButton from '../zoomButton';
import './style.scss';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      height: '',
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    const heightBt = document.getElementById('bt-cmp').clientHeight;
    this.setState({
      height: heightBt + 15
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 575.98 });
  }

  render() {
    const { height, isDesktop } = this.state;
    return (
      <div className="sample-footer"
        style={{
          bottom: isDesktop ? 10 : height
        }}
      >
        <FloorSwitcher />
        <ZoomButton />
      </div >
    );
  }
}
