import css from './Filter.module.css';
import { useFilter } from 'hooks/useFilter';

export const Filter = () => {
   const [filter, changeFilter] = useFilter();
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
