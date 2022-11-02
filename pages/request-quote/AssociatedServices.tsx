import React, { useState } from 'react';

const AssociatedServices = ({ formData, setFormData }: any) => {
  const [insurance, setInsurance] = useState(false);
  const [inspection, setInspection] = useState(false);
  const [certification, setCertification] = useState(false);
  const [customs, setCustoms] = useState(false);
  //
  const [insuranceInfo, setInsuranceInfo] = useState(false);
  const [inspectionInfo, setInspectionInfo] = useState(false);
  const [certificationInfo, setCertificationInfo] = useState(false);
  const [customsInfo, setCustomsInfo] = useState(false);
  return (
    <div className="flex flex-col items-start sm:flex-row sm:items-center gap-x-10 mb-8 w-[80%] sm:w-[70%] md:w-[110%] md:gap-3 xl:w-[120%] xl:gap-x-6 flex-wrap">
      <button
        type="button"
        onClick={() => {
          setInsurance(!insurance);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              insurance: !insurance,
            },
          });
        }}
        onMouseEnter={() => setInsuranceInfo(true)}
        onMouseLeave={() => setInsuranceInfo(false)}
        className={
          insurance
            ? 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border rounded-full md:w-auto  border-[#4F46E5]'
            : 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={insurance}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/YlP9jAY.png" alt="" className="w-6 h-6" />
          <p className="font-xl font-normal">Insurance</p>
        </div>
        {insuranceInfo ? (
          <div className=" absolute bottom-20 -left-32 max-w-lg text-lg md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p className="text-white my-1">Add cargo insurance to your shipment to stay safe from any accidents.</p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setInspection(!inspection);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              inspection: !inspection,
            },
          });
        }}
        onMouseEnter={() => setInspectionInfo(true)}
        onMouseLeave={() => setInspectionInfo(false)}
        className={
          inspection
            ? 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl sm:ml-4 xl:ml-0 shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]'
            : 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl sm:ml-4 xl:ml-0 shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={inspection}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/9QHXC2E.png" alt="" className="w-6 h-6" />
          <p className="font-xl font-normal">Inspection Services</p>
        </div>
        {inspectionInfo ? (
          <div className=" absolute bottom-20 -left-24 max-w-lg text-lg md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p className="text-white my-1">Order an inspection or tally service by checking this one.</p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setCertification(!certification);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              certification: !certification,
            },
          });
        }}
        onMouseEnter={() => setCertificationInfo(true)}
        onMouseLeave={() => setCertificationInfo(false)}
        className={
          certification
            ? 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]'
            : 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={certification}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/LJfHZAe.png" alt="" className="w-6 h-6" />
          <p className="font-xl font-normal">Certification</p>
        </div>
        {certificationInfo ? (
          <div className=" absolute bottom-20 -left-28 max-w-lg text-lg md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p className="text-white my-1">
              For different types of commodities and specific local requirements,we will help you to get phytosanitary, radiology,
              veterinary and other types of certificates.
            </p>
          </div>
        ) : null}
      </button>
      <button
        type="button"
        onClick={() => {
          setCustoms(!customs);
          setFormData({
            ...formData,
            associated_services: {
              ...formData.associated_services,
              customs_clearance: !customs,
            },
          });
        }}
        onMouseEnter={() => setCustomsInfo(true)}
        onMouseLeave={() => setCustomsInfo(false)}
        className={
          customs
            ? 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto  border-[#4F46E5]'
            : 'relative inline-flex items-center justify-between gap-4 mb-2 px-6 py-4 text-black hover:shadow-2xl shadow-md border border-transparent rounded-full md:w-auto hover:border-[#4F46E5]'
        }
      >
        <input
          id="link-checkbox"
          type="checkbox"
          checked={customs}
          value=""
          className="w-6 h-6 bg-gray-100 rounded border-gray-300 hover:border-[#4F46E5] accent-[#4F46E5]"
        />
        <div className="flex gap-1 justify-center items-center">
          <img src="https://imgur.com/0DXcRm5.png" alt="" className="w-6 h-6" />
          <p className="font-xl font-normal">Customs Clearance</p>
        </div>
        {customsInfo ? (
          <div className=" absolute bottom-20 -left-28 max-w-lg text-lg md:w-[350px] rounded-lg shadow-lg p-4 bg-[#4F46E5]">
            <p className="text-white my-1">Select this item if you need customs brokerage service.</p>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default AssociatedServices;
