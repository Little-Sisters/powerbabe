import { FaMoon, FaSun } from 'react-icons/fa6';
import styled from 'styled-components';

interface Props {
  themeToggler: () => void;
  theme: string;
}

const ThemeToggler: React.FC<Props> = ({ themeToggler, theme }) => {
  const Icon = theme === 'pink' ? FaSun : FaMoon;
  return (
    <ThemeToggleButton onClick={themeToggler}>
      <Icon />
    </ThemeToggleButton>
  );
};

const ThemeToggleButton = styled.button`
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  display: flex;
  align-items: center;
`;

export default ThemeToggler;
