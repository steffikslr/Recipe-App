import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CategoryDropDownPicker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Abendessen');
  const [items, setItems] = useState([
    { label: 'Abendessen', value: 'Abendessen' },
    { label: 'Mittagessen', value: 'Mittagessen' },
    { label: 'Aufstrich', value: 'Aufstrich' },
    { label: 'Kuchen', value: 'Kuchen' },
    { label: 'Salat', value: 'Salat' }
    ,
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      containerStyle={{ width: '80%' }}
    />
  );
}
