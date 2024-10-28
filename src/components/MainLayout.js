import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { Box, Grid } from '@mui/material';

export default function MainLayout() {
   const location = useLocation()

   let [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      let detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false')
      }
   }, [])

   return (
    <>
      <Box className={""}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
            </Grid>
            <Grid item flexGrow={1}>
               {singlePage ? <SinglePageRoutes refs={{refHome, refAbout, refPortfolio}}/> : <MultiPageRoutes />}
            </Grid>
            
         </Grid>
      </Box>
      <div>Hye</div>
      </>
   )
}

