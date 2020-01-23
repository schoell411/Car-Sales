import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, removeFeature } from './actions/action';

const App = props => {

  const removeFeature = item => {
    props.removeFeature(item)
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="card">
        <Header car={props.car} className="card-title" />
        <AddedFeatures car={props.car} removeFeature={removeFeature} className="card-body" />
      </div>
      <div className="card">
      <Total car={props.car} additionalPrice={props.additionalPrice} className="card-title" />
        <AdditionalFeatures additionalFeatures={props.additionalFeatures}
        addFeature={buyItem} className="card-body"  />
        
      </div>
    </div>
  );
};

const mapDispatchToProps = { addFeature, removeFeature };

export default connect(state => state, mapDispatchToProps)(App);
