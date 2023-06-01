import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}
      >
        <CircularProgress
          // variant="determinate"
          sx={{ color: '#000' }}
          size={40}
          thickness={4}
          value={80}
        />
      </Box>
    </>
  )
}

export default Loader
