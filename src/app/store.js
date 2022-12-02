import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import topSalesReducer, { actionGetTopSales, effectGetTopSales } from '../features/topSales/topSalesSlice';
import catalogReducer, { actionGetCatalog, effectGetCatalog } from '../features/catalog/catalogSlice';
import categoryReducer, {
  actionGetCategory, effectGetCategory,
  actionSetActiveCategory, effectSetActiveCategory
} from '../features/category/categorySlice';
import productReducer, { actionGetProduct, effectGetProduct } from '../features/product/productSlice';
import cartReducer from '../features/cart/cartSlice';
import orderReducer, { actionPostOrder, effectPostOrder } from '../features/order/orderSlice';

const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
  actionCreator: actionGetTopSales,
  effect: effectGetTopSales
});

listenerMiddleware.startListening({
  actionCreator: actionGetCatalog,
  effect: effectGetCatalog
});

listenerMiddleware.startListening({
  actionCreator: actionGetCategory,
  effect: effectGetCategory
});

listenerMiddleware.startListening({
  actionCreator: actionSetActiveCategory,
  effect: effectSetActiveCategory
});

listenerMiddleware.startListening({
  actionCreator: actionGetProduct,
  effect: effectGetProduct
});

listenerMiddleware.startListening({
  actionCreator: actionPostOrder,
  effect: effectPostOrder
});


export const store = configureStore({
  reducer: {
    topSales: topSalesReducer,
    catalog: catalogReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
      thunk: false
    })
    .prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});
