import React, { useState } from 'react';

const ByUnits = ({ setFormData, formData }: any) => {
  const [dimensionsArray, setDimensionsArray] = useState<any[]>([{ id: 1, width: '' }]);

  const handleRemoveComponent = (index: number) => {
    const list = [...dimensionsArray];
    list.splice(index, 1);
    setDimensionsArray(list);
    setFormData({
      ...formData,
      dimensions: [...list],
    });
  };

  const handleChangeObjs = (e: any, index: number) => {
    const { name, value } = e.target;
    const list = [...dimensionsArray];
    list[index][name] = value;
    setDimensionsArray(list);
  };

  return (
    <div>
      {dimensionsArray.map((component, index) => {
        return (
          <div key={component.id} className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="dimensions" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Dimensions
              </label>
              <div className="border flex space-between items-center rounded-lg focus:outline-[#4F46E5] hover:border-[#4F46E5] bg-white">
                <input
                  type="text"
                  name="width"
                  onChange={(e) => {
                    // setDimensions({ ...dimensions, width: e.target.value });
                    handleChangeObjs(e, index);
                  }}
                  className="  text-gray-900 text-lg outline-none block w-[25%] p-5 placeholder:text-center indent-2"
                  placeholder="width"
                />{' '}
                ×
                <input
                  type="text"
                  name="height"
                  onChange={(e) => {
                    // setDimensions({ ...dimensions, height: e.target.value });
                    handleChangeObjs(e, index);
                  }}
                  className=" text-gray-900 text-lg outline-none block w-[25%] p-5 placeholder:text-center indent-2"
                  placeholder="height"
                />{' '}
                ×
                <input
                  type="text"
                  name="length"
                  onChange={(e) => {
                    handleChangeObjs(e, index);
                  }}
                  className=" text-gray-900 text-lg outline-none block w-[25%] p-5  placeholder:text-center indent-2"
                  placeholder="length"
                />
                <div className="w-[15%] flex justify-center items-center text-lg border-l-2">m</div>
              </div>
            </div>
            <div className="grid relative gap-6 grid-cols-5 sm:grid-cols-5 lg:grid-cols-7 items-center">
              <div className="col-span-2 lg:col-span-3">
                <label htmlFor="quantity" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  onChange={(e) => {
                    handleChangeObjs(e, index);
                  }}
                  className="bg-white rounded-lg border border-gray-300 text-gray-900 text-lg focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-5 mb-2"
                  placeholder="Quantity"
                />
              </div>
              <div className="col-span-2 lg:col-span-3">
                <label htmlFor="gross_weight" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Gross Weight
                </label>
                <div className="flex items-center bg-white rounded-lg border border-gray-300 focus:outline-[#4F46E5] mb-2 hover:border-[#4F46E5]  w-full">
                  <input
                    type="text"
                    name="gross_weight"
                    onKeyUp={(e) => {
                      handleChangeObjs(e, index);
                    }}
                    onBlur={() => {
                      setFormData({
                        ...formData,
                        dimensions: dimensionsArray,
                      });
                    }}
                    className="bg-white text-gray-900 text-lg outline-none block w-[80%] p-5"
                    placeholder="Gross Weight"
                  />
                  <div className="w-[20%] border-l-2 border-gray-300 text-gray-500 text-lg flex justify-center items-center">kg</div>
                </div>
              </div>
              {dimensionsArray.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveComponent(index)}
                  className="group text-[#4F46E5] absolute right-0 col-span-1  flex justify-center items-center bg-white hover:bg-[#4F46E5] hover:text-white focus:ring-4 focus:outline-none font-medium text-sm rounded-lg w-14 h-14 sm:w-12 sm:h-12  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7 sm:w-6 sm:h-6 text-[#4F46E5] group-hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              )}
            </div>
            {dimensionsArray.length - 1 === index && (
              <button
                type="button"
                onClick={() => {
                  setDimensionsArray((prev) => [...prev, { id: dimensionsArray.length + 1, width: '' }]);
                }}
                className="text-[#4F46E5] bg-white hover:bg-[#4F46E5] hover:text-white focus:ring-4 focus:outline-none font-medium text-lg w-16 rounded-lg sm:w-24 px-4 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ByUnits;
