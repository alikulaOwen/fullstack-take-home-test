import { Toolbar, Typography, AppBar, Container, Box } from '@mui/material'

import { Link } from 'react-router-dom'
import SearchBox from '../../custom/SearchBox'

const NavBar = () => {
  return (
    <AppBar position="static" elevation={0} className='bg-base'>
    <Toolbar>
      <Container>
        <Box>
         {/* search bar */}
        <SearchBox placeholder={''} onClick={()=>{console.log('search')}}/>
        </Box>
      <Typography variant="h6">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '15px' }}>Home</Link>
        <Link to="/reading-list" style={{ color: 'inherit', textDecoration: 'none', marginRight: '15px' }}>About</Link>
      </Typography>
      </Container>
      
    </Toolbar>
  </AppBar>
  )
}

export default NavBar