import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FC, useState } from 'react';

export interface ISortSelectProps {
  albumNumbers: Array<number>;
  onChangeSort: (sortBy: number) => void;
}

const SortSelect: FC<ISortSelectProps> = ({ albumNumbers, onChangeSort }) => {
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setSortBy(value);
    onChangeSort(Number(value));
  };

  return (
    <Box sx={{ minWidth: 400 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Album number"
          onChange={handleChange}
        >
          <MenuItem selected value={0}>
            All
          </MenuItem>
          {albumNumbers &&
            albumNumbers.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  Set {item}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
