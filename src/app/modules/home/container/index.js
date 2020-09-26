import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "~/actions/index";
import '../style/index.scss';
import PropTypes from 'prop-types';
import Footer from '~shared/components/footer';
import Loader from '~shared/components/loader';

const Home = ({ actions, home }) => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    actions.getDataFromAPI().then(() => {
      setData(home.dataState);
      setLoading(false);
    });
  };

  const renderDataList = () => {
    if (data && data.length)
      return data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ));
    return null;
  };

  if (loading)
    return <Loader />;
  return (
    <>
      {renderDataList()}
      <h2>HOME</h2>
      <Footer />
    </>
  );
};

Home.propTypes = {
  actions: PropTypes.object,
  location: PropTypes.object,
  home: PropTypes.object,
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