import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled(Typography)(() => ({
  background: 'linear-gradient(170deg, #a3d5f4 0%, #2b348d 100%)',
  color: '#fff',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: 25,
  margin: '25px 0 0 0',
}));
