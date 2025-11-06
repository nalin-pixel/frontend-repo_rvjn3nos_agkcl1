import React from 'react';
import {
  CartView,
  ItemView,
  HistoryView,
  IncomingItemView,
  MemberView,
  SupplierView,
  CreditView,
  SpendingView,
  ReceivableView,
} from './POSViews';

export default function ContentSwitcher({ active }) {
  if (active === 'cart') return <CartView />;
  if (active === 'item') return <ItemView />;
  if (active === 'history') return <HistoryView />;
  if (active === 'incoming') return <IncomingItemView />;
  if (active === 'member') return <MemberView />;
  if (active === 'supplier') return <SupplierView />;
  if (active === 'credit') return <CreditView />;
  if (active === 'spending') return <SpendingView />;
  if (active === 'receivable') return <ReceivableView />;
  return null;
}
