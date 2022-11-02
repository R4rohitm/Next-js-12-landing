import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Fragment, useState } from 'react';
import Data from '../../utils/countries.json';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const CountryIsoCode = ({ formData, setFormData }: any) => {
  const [selectedCountry, setSelectedCountry] = useState(Data[98]);
  return (
    <Listbox
      id="country_code"
      value={selectedCountry}
      onChange={(e) => {
        setSelectedCountry(e);
        setFormData({
          ...formData,
          phone: {
            ...formData.phone,
            dialcode: e.dialCode,
            country: e.name,
            isocode: e.isoCode,
          },
        });
      }}
    >
      {({ open }) => (
        <>
          <div className="relative w-1/4">
            <Listbox.Button className="relative w-full text-lg cursor-pointer bg-white py-5 pl-3 pr-2 text-left  focus:outline-none">
              <span className="flex items-center">
                <img src={selectedCountry.flag} alt="" className="h-8 w-8 flex-shrink-0 sm:h-5 sm:w-5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span className="ml-3 block truncate font-light text-lg">{selectedCountry.dialCode}</span>
              </span>
            </Listbox.Button>

            <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options
                id="countryscollbar"
                className="countryscollbar absolute z-10 mt-1 max-h-52 w-[280%] overflow-auto rounded-md bg-white py-1 -ml-1 text-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {Data.map((country) => (
                  <Listbox.Option
                    key={country.isoCode}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-pointer  select-none py-4 pl-3 pr-9',
                      )
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={country.flag} alt="" className="h-6 w-6 flex-shrink-0" />
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate font-light max-[333]:text-md text-lg',
                            )}
                          >
                            {country.isoCode}
                          </span>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'ml-3 block truncate pr-2 max-[333]:text-lg text-lg',
                            )}
                          >
                            {country.dialCode}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-2',
                            )}
                          >
                            <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <span className="pointer-events-none absolute inset-y-0 -right-3 ml-3 flex items-center">
              <ChevronUpDownIcon
                className="h-3 w-3 sm:w-5 sm:h-5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-gray-400 ml-1 hidden md:block"
                aria-hidden="true"
              />
            </span>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default CountryIsoCode;
