import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "~/actions/index";
import '../style/index.scss';
import PropTypes from 'prop-types';
import Footer from '~shared/components/footer';
import Loader from '~shared/components/loader';
import * as Utilities from '~shared/helpers/utilities';

const Home = ({ actions, location }) => {

  const [loading, setLoading] = useState(true);
  useEffect(checkForURL, [])
  
  const checkForURL = () => {
    if (location.search.includes('sample')) {
      let sample = Utilities.findURLParam('sample');
      this.props.history.replace({ pathname: `/${sample}` });
    }
    setLoading(false);
  }

  if(loading)
    return <Loader/>;
  return <Footer />;
}

Home.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    sample_reducer: state.sample_reducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);