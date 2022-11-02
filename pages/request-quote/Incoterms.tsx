import React, { useState } from 'react';

const Incoterms = ({ formData, setFormData }: any) => {
  const [exw, setExw] = useState(false);
  const [fob, setFob] = useState(false);
  const [cfr, setCfr] = useState(false);
  const [cif, setCif] = useState(false);
  const [dap, setDap] = useState(false);
  const [ddp, setDdp] = useState(false);
  return (
    <div className="grid gap-2 mb-6 grid-cols-3 w-[80%] sm:grid-cols-3 sm:w-[60%] sm:gap-4 md:grid-cols-3 md:w-[50%] md:gap-6 lg:grid-cols-6 xl:grid-cols-6 lg:w-[100%] lg:gap-4 xl:w-[90%]">
      <button
        type="button"
        onClick={() => {
          setExw(!exw);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: 'EXW' });
        }}
        className={
          exw
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-5 md:px-7 py-4 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-5 md:px-7 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={exw}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">EXW</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(!fob);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: 'FOB' });
        }}
        className={
          fob
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={fob}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">FOB</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(!cfr);
          setCif(false);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: 'CFR' });
        }}
        className={
          cfr
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={cfr}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">CFR</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(!cif);
          setDap(false);
          setDdp(false);
          setFormData({ ...formData, incoterms: 'CIF' });
        }}
        className={
          cif
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={cif}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">CIF</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(!dap);
          setDdp(false);
          setFormData({ ...formData, incoterms: 'DAP' });
        }}
        className={
          dap
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5] focus:outline-none'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={dap}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] focus:outline-none accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">DAP</p>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setExw(false);
          setFob(false);
          setCfr(false);
          setCif(false);
          setDap(false);
          setDdp(!ddp);
          setFormData({ ...formData, incoterms: 'DDP' });
        }}
        className={
          ddp
            ? 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'inline-flex items-center justify-between gap-2 mb-2 px-6 md:px-7 py-2 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          defaultChecked={false}
          checked={ddp}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <p className="font-lg font-normal">DDP</p>
        </div>
      </button>
    </div>
  );
};

export default Incoterms;
