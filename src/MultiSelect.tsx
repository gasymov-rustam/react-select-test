import { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { IOption } from './app.interface';

const options: IOption[] = [
  {
    value: 'south-korea',
    label: 'South korea',
  },
  {
    value: 'germany',
    label: 'Germany',
  },
  {
    value: 'canada',
    label: 'Canada',
  },
  {
    value: 'japan',
    label: 'Japan',
  },
];

function MultiSelect({ isMulti }: { isMulti: boolean }) {
  const [currentCountries, setCurrentCountries] = useState<string[] | string>([
    'south-korea',
    'japan',
  ]);

  const getValue = () => {
    if (currentCountries) {
      return isMulti
        ? options.filter((c) => currentCountries.includes(c.value))
        : options.find((c) => currentCountries.includes(c.value));
    } else {
      return isMulti ? [] : '';
    }
  };

  const onChange = (newValue: MultiValue<string | IOption> | SingleValue<string | IOption>) => {
    setCurrentCountries(
      isMulti ? (newValue as IOption[]).map((v: IOption) => v.value) : (newValue as IOption).value
    );
  };

  return (
    <div className='w-4/5 mx-auto my-10'>
      <h1 className='mb-3 text-white text-xl font-medium'>Chose country:</h1>
      <Select
        classNamePrefix='custom-select'
        onChange={onChange}
        value={getValue()}
        options={options}
        isMulti={isMulti}
        placeholder='Chose countries'
      />
    </div>
  );
}

export default MultiSelect;
