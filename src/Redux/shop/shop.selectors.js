import memoize from 'lodash.memoize';
import { createSelector } from "reselect";

const selectShop = state => state.shop;


export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
);

export const selectShopDataForPreview = createSelector(
    [selectShopData],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = memoize((collectionUrlParam) => createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
));