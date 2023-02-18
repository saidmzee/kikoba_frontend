import { Card } from "@mui/material";
import { Container } from "@mui/system";
import LoginCard from "../components/LoginCard";
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';

const Login = () => {

    return (
        
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <LoginCard/>
        </Box>



    );
}

export default Login;