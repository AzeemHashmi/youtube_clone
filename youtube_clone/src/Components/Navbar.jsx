import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from "../utils/constant";
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{position:"sticky", background:"#000", border:'2px solid red', top:0, justifyContent:"space-between" }}
    >
        <Link to="/" style={{display:"flex", alignItems:"center"}} >
            <img src={logo} alt="Logo" height={45} />
        </Link>

        <SearchBar/>

    </Stack>
  )

export default Navbar;

