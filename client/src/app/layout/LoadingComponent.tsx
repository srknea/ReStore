import { Backdrop, CircularProgress, Typography } from "@mui/material";

interface Props{
    message?: string;
}

export default function LoadingComponent({message ='Loading...'}: Props) {
    return (
        <Backdrop open={true} invisible={true}>
            <CircularProgress size={100} color='secondary'/>
            <Typography variant='h4' sx={{justifyContent: 'center', position: 'fixed', top: '60%'}}>{message}</Typography>
        </Backdrop>
    )
}