import React, { useState } from 'react';
import Tabs from './Tabs';

function SectionWrapper({ children }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200">
      <div className="p-4 md:p-6">{children}</div>
    </div>
  );
}

function SimpleTable({ headers, rows, renderCell }) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-slate-600">
            {headers.map((h) => (
              <th key={h} className="text-left font-medium px-3 py-2 border-b border-slate-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={headers.length} className="px-3 py-6 text-center text-slate-400">No data</td>
            </tr>
          ) : (
            rows.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-slate-50">
                {headers.map((h, i) => (
                  <td key={i} className="px-3 py-2 border-b border-slate-100">
                    {renderCell ? renderCell(h, row) : row[h]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={'w-10 h-6 rounded-full p-0.5 transition-colors ' + (checked ? 'bg-green-500' : 'bg-slate-300')}
    >
      <span className={'block w-5 h-5 bg-white rounded-full transform transition-transform ' + (checked ? 'translate-x-4' : 'translate-x-0')} />
    </button>
  );
}

function CartView() {
  const [tabs, setTabs] = useState([{ id: 'trx-1', label: 'T1' }, { id: 'trx-2', label: 'T2' }, { id: 'trx-3', label: 'T3' }]);
  const [active, setActive] = useState('trx-1');

  const addTab = () => {
    const id = `trx-${tabs.length + 1}`;
    setTabs([...tabs, { id, label: `T${tabs.length + 1}` }]);
    setActive(id);
  };

  return (
    <SectionWrapper>
      <div className="space-y-4">
        <Tabs tabs={tabs} active={active} onChange={setActive} onAdd={addTab} />

        <div className="grid grid-cols-3 gap-3">
          <input className="h-8 w-full rounded-lg border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Enter barcode" />
          <button className="h-8 px-3 rounded-lg bg-gray-900 text-white text-sm hover:bg-black w-fit">Submit</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <SimpleTable headers={["Barcode", "Name", "Quantity", "Unit", "Price", "Subtotal"]} rows={[]} />
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-3 h-fit">
            <div className="flex items-center justify-between"><span className="text-slate-600">Subtotal</span><span className="font-semibold">$0.00</span></div>
            <div className="flex items-center justify-between gap-3"><label className="text-slate-600">Discount</label><input type="number" className="w-40 px-3 py-2 rounded border border-slate-300" placeholder="0" /></div>
            <div className="flex items-center justify-between gap-3"><label className="text-slate-600">Tax</label><input type="number" className="w-40 px-3 py-2 rounded border border-slate-300" placeholder="0" /></div>
            <div className="flex items-center justify-between"><span className="text-slate-600">Grand Total</span><span className="font-semibold">$0.00</span></div>
            <div className="flex items-center justify-between gap-3"><label className="text-slate-600">Payment Amount</label><input type="number" className="w-40 px-3 py-2 rounded border border-slate-300" placeholder="0" /></div>
            <div className="flex items-center justify-between"><span className="text-slate-600">Change</span><span className="font-semibold">$0.00</span></div>
            <div className="pt-2 grid grid-cols-1 gap-2">
              <button className="px-3 py-2 rounded bg-slate-100 text-slate-700 hover:bg-slate-200">Cancel</button>
              <button className="px-3 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
              <button className="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Print</button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ItemView() {
  const [rows, setRows] = useState([
    { Barcode: '123456', Name: 'Sample Item', Stock: 10, Unit: 'pcs', Price: 10.0, Status: true },
  ]);
  return (
    <SectionWrapper>
      <SimpleTable
        headers={["Barcode", "Name", "Stock", "Unit", "Price", "Status"]}
        rows={rows}
        renderCell={(h, row) => {
          if (h === 'Status') {
            return <Toggle checked={row.Status} onChange={(v) => {
              setRows((prev) => prev.map((r) => r.Barcode === row.Barcode ? { ...r, Status: v } : r));
            }} />;
          }
          return row[h];
        }}
      />
    </SectionWrapper>
  );
}

function HistoryView() {
  const rows = [
    { 'History ID': 'H-001', 'Transaction Time': '2025-01-01 10:00', Total: '$20.00' },
  ];
  return (
    <SectionWrapper>
      <SimpleTable headers={["History ID", "Transaction Time", "Total"]} rows={rows} />
    </SectionWrapper>
  );
}

function IncomingItemView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["Barcode", "Item Name", "Invoice Number", "Date", "Quantity", "Price"]} rows={[]} />
    </SectionWrapper>
  );
}

function MemberView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["NIK", "Name", "Address"]} rows={[]} />
    </SectionWrapper>
  );
}

function SupplierView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["Name", "Address", "Phone Number"]} rows={[]} />
    </SectionWrapper>
  );
}

function CreditView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["Invoice Number", "Total", "Description", "Debt Date", "Due Date"]} rows={[]} />
    </SectionWrapper>
  );
}

function SpendingView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["Date", "Name", "Description", "Total"]} rows={[]} />
    </SectionWrapper>
  );
}

function ReceivableView() {
  return (
    <SectionWrapper>
      <SimpleTable headers={["Receivable Date", "Person/Institution", "Description", "Total"]} rows={[]} />
    </SectionWrapper>
  );
}

export { CartView, ItemView, HistoryView, IncomingItemView, MemberView, SupplierView, CreditView, SpendingView, ReceivableView };
