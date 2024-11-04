import { motion } from 'framer-motion';
import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Importing a search icon from react-icons
import Select from 'react-select';
import styled from 'styled-components';

interface ShopFilterCardProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  selectedSort: string | null;
  onSortChange: (option: SortOption | null) => void;
}

interface SortOption {
  value: string;
  label: string;
}

const sortOptions: SortOption[] = [
  { value: 'latest', label: 'Latest' },
  { value: 'Most colors', label: 'Most colors' },
];

const ShopFilterCard: React.FC<ShopFilterCardProps> = ({
  searchValue,
  onSearchChange,
  selectedSort,
  onSortChange,
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <SearchWrapper>
        <SearchInput
          type="text"
          value={searchValue}
          onChange={(e: { target: { value: string } }) =>
            onSearchChange(e.target.value)
          }
          placeholder="Search products..."
        />
        <SearchIcon />
      </SearchWrapper>
      <SortSelect
        options={sortOptions}
        value={sortOptions.find(option => option.value === selectedSort)}
        onChange={onSortChange}
        placeholder="Sort by"
        isClearable
      />
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.card};
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 0 auto;
  @media (max-width: 775px) {
    gap: 1rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 70%;
  @media (max-width: 775px) {
    width: 50%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-right: 2.5rem; /* Add padding to make room for the icon */
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  cursor: pointer;
`;

const SortSelect = styled(Select)<{ isClearable: boolean }>`
  width: 20%;
  .react-select__control {
    border-radius: 5px;
    border: 1px solid #ccc;
    &:hover {
      border-color: #007bff;
    }
  }

  .react-select__single-value {
    color: #333;
  }

  .react-select__menu {
    border-radius: 5px;
  }
  @media (max-width: 1051px) {
    width: 30%;
  }
  @media (max-width: 775px) {
    width: 50%;
  }
`;

export default ShopFilterCard;
