import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import ByUnits from './ByUnits';

const transportation = [
  {
    id: 1,
    transportation_by: 'Standard Cargo',
    abbreviation: 'SC',
    icon: 'https://cdn-icons-png.flaticon.com/512/1061/1061198.png',
  },
  {
    id: 2,
    transportation_by: 'ULD Container',
    abbreviation: 'ULDC',
    icon: 'https://cdn-icons-png.flaticon.com/512/1358/1358770.png',
  },
];

const container_type = [
  { id: 1, container_type: 'Demi' },
  { id: 2, container_type: 'HMA Stall' },
  { id: 3, container_type: 'LD-1' },
  { id: 4, container_type: 'LD-11' },
  { id: 5, container_type: 'LD-2' },
  { id: 6, container_type: 'LD-26' },
  { id: 7, container_type: 'LD-29' },
  { id: 8, container_type: 'LD-29 Reefer' },
  { id: 9, container_type: 'LD-3' },
  { id: 10, container_type: 'LD-3 Reefer' },
  { id: 11, container_type: 'LD-39' },
  { id: 12, container_type: 'LD-4' },
  { id: 13, container_type: 'LD-6' },
  { id: 14, container_type: 'LD-7' },
  { id: 15, container_type: 'LD-7 with Angled Wings' },
  { id: 16, container_type: 'LD-7 with Folding Wings' },
  { id: 17, container_type: 'LD-8' },
  { id: 18, container_type: 'LD-9' },
  { id: 19, container_type: 'LD-9 Reefer' },
  { id: 20, container_type: 'M-1' },
  { id: 21, container_type: 'M-1H' },
  { id: 22, container_type: 'M-2' },
  { id: 23, container_type: 'M-6' },
  { id: 24, container_type: 'M-6 (118H)' },
  { id: 25, container_type: 'M-6 Twin Car Rack' },
  { id: 26, container_type: 'MDP' },
  { id: 27, container_type: 'PLA Half Pallet' },
  { id: 28, container_type: 'PNP/P6P Pallet' },
  { id: 29, container_type: 'PNA Half Pallet' },
  { id: 30, container_type: 'Type A Pen' },
  { id: 31, container_type: 'N/A' },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Air({ setFormData, formData, handleChange }: any) {
  const [selected, setSelected] = useState(transportation[0]);
  const [selectedContainer, setSelectedContainer] = useState();
  const [byUnits, setByUnits] = useState(false);

  return (
    <>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <Listbox
          value={selected}
          onChange={(e) => {
            console.log(e);
            setSelected(e);
            setFormData({
              ...formData,
              transportation_by: e.abbreviation,
            });
          }}
        >
          {({ open }) => (
            <div className="flex flex-col">
              <label htmlFor="transportation_by" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                Transportation By<span className="text-[red]">*</span>
              </label>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg border hover:border-[#4F46E5] border-gray-300 bg-white py-5 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  <span className="flex items-center">
                    <img src={selected.icon} alt="" className="h-8 w-8 flex-shrink-0 rounded-full" />
                    <span className="ml-3 block truncate text-lg">{selected.transportation_by}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                  <Listbox.Options className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-lg bg-white py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {transportation.map((way) => (
                      <Listbox.Option
                        key={way.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'relative cursor-default select-none py-5 pl-3 pr-9',
                          )
                        }
                        value={way}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <img src={way.icon} alt="" className="h-8 w-8 flex-shrink-0 rounded-full" />
                              <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-lg')}>
                                {way.transportation_by}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4',
                                )}
                              >
                                <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>
      </div>
      {selected.id === 1 ? (
        <div>
          <div className="mb-5">
            <input
              id="bordered-checkbox-1"
              type="checkbox"
              value=""
              name="bordered-checkbox"
              onChange={() => {
                setByUnits(!byUnits);
                setFormData({ ...formData, by_units: !byUnits });
              }}
              className="w-6 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="bordered-checkbox-1" className="py-4 ml-4 w-full text-xl font-medium text-gray-900 dark:text-gray-300">
              By Units
            </label>
          </div>

          <div>
            {byUnits ? (
              <ByUnits formData={formData} setFormData={setFormData} />
            ) : (
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                {' '}
                <div>
                  <label htmlFor="weight" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
                    Weight <span className="text-[red]">*</span>
                  </label>
                  <div className="flex items-center bg-white rounded-lg border border-gray-300 focus:outline-[#4F46E5] hover:border-[#4F46E5]  w-full">
                    <input
                      type="number"
                      name="weight"
                      onChange={(e) => handleChange(e)}
                      className="bg-white text-gray-900 text-sm p-5 outline-none w-[85%]"
                      placeholder="0"
                      required
                      onInvalid={(e) => {
                        (e.target as HTMLInputElement).setCustomValidity('Enter valid Weight.');
                        (e.target as HTMLInputElement).style.border = '1px solid red';
                      }}
                      onInput={(e) => {
                        (e.target as HTMLInputElement).setCustomValidity('');
                        (e.target as HTMLInputElement).style.border = 'none';
                      }}
                    />
                    <div className="w-[15%] border-l-2 border-gray-300 text-gray-500 text-lg flex justify-center items-center">kg</div>
                  </div>
                </div>
                <div>
                  <label htmlFor="volume" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
                    Volume <span className="text-[red]">*</span>
                  </label>
                  <div className="flex items-center bg-white rounded-lg border border-gray-300 focus:outline-[#4F46E5] hover:border-[#4F46E5]  w-full">
                    <input
                      type="number"
                      name="volume"
                      onChange={(e) => handleChange(e)}
                      className="bg-white text-gray-900 text-sm p-5 outline-none w-[85%]"
                      placeholder="0"
                      required
                      onInvalid={(e) => {
                        (e.target as HTMLInputElement).setCustomValidity('Enter valid Volume.');
                        (e.target as HTMLInputElement).style.border = '1px solid red';
                      }}
                      onInput={(e) => {
                        (e.target as HTMLInputElement).setCustomValidity('');
                        (e.target as HTMLInputElement).style.border = 'none';
                      }}
                    />
                    <div className="w-[15%] border-l-2 border-gray-300 text-gray-500 text-lg flex justify-center items-center">m³</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <Listbox
            value={selectedContainer}
            onChange={(e) => {
              setSelectedContainer(e);
              setFormData({
                ...formData,
                container_type: e?.['container_type'],
              });
            }}
          >
            {({ open }) => (
              <div className="flex flex-col">
                <label htmlFor="last_name" className="block mb-1 text-xl font-medium text-gray-900 dark:text-gray-300">
                  Container Type<span className="text-[red]">*</span>
                </label>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg border hover:border-[#4F46E5] border-gray-300 bg-white py-5 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate text-lg">
                        {selectedContainer?.['container_type'] ? (
                          selectedContainer['container_type']
                        ) : (
                          <p className="text-gray-400">Choose Container</p>
                        )}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronDownIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition show={open} as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {container_type.map((type) => (
                        <Listbox.Option
                          key={type.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-white bg-indigo-600' : 'text-gray-900',
                              'relative cursor-default select-none py-5 pl-3 pr-9',
                            )
                          }
                          value={type}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate text-lg')}>
                                  {type.container_type}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                  )}
                                >
                                  <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            )}
          </Listbox>
          <div>
            <label htmlFor="Quantity of Containers" className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300">
              Quantity of Containers <span className="text-[red]">*</span>
            </label>
            <input
              type="number"
              name="containers_quantity"
              onChange={(e) => handleChange(e)}
              className="bg-white rounded-lg border border-gray-300 text-gray-900 text-lg focus:outline-[#4F46E5] hover:border-[#4F46E5] block w-full p-5 mb-2"
              placeholder="0"
              required
              onInvalid={(e) => {
                (e.target as HTMLInputElement).setCustomValidity('Enter valid Quantity of Containers.');
                (e.target as HTMLInputElement).style.border = '1px solid red';
              }}
              onInput={(e) => {
                (e.target as HTMLInputElement).setCustomValidity('');
                (e.target as HTMLInputElement).style.border = 'none';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
