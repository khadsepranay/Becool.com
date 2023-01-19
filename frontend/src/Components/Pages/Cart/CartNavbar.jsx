import {Box} from "@mui/material"

let CartNavbar = () =>{
    return(
        <Box sx={{border:'1px solid gray'}}>
        <Box sx={{display:'flex',justifyContent:'space-between', width:'75vw',margin:'10px auto',boxSizing:'border-box'}}>
            <Box component='img' src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg" width='200px'/>
            <Box sx={{textAlign:'left'}}>
                <Box sx={{color:'gray',fontSize:'14px'}}>signed as</Box>
                <Box>email</Box>
            </Box>
        </Box>
        </Box>
    )
}

export default CartNavbar