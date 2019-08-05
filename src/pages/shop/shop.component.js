import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors.js';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(
  mapStateToProps,
  null
)(Shop);
