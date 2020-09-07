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
  const [data, setData] = useState([]);
  useEffect(checkForURL, []);
  useEffect(getDataFromAPI,[]);

  const getDataFromAPI = async() => {
    actions.getDataFromAPI().then(()=>{
      setData(home.dataState);
    });
  }
  
  const checkForURL = () => {
    if (location.search.includes('sample')) {
      let sample = Utilities.findURLParam('sample');
      this.props.history.replace({ pathname: `/${sample}` });
    }
    setLoading(false);
  }

  const renderDataList = () => {
    return data.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))
  }

  if(loading)
    return <Loader/>;
  return (
    <>
      {renderDataList()}
      <Footer />
    </>
  );
}

Home.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);