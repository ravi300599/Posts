import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';

const styles = {
    card: {
        height: '300px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
};

function AllPosts(props) {
    const [imageUrl, setImageUrl] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(
                    `https://source.unsplash.com/600x400/?${props.data.tags[0]}`
                );
                setImageUrl(response.url);
            } catch (error) {
                console.log(error);
            }
        };

        fetchImage();
    }, [props.data.tags]);

    const handleHide = () => {
        setIsVisible(false);
    };

    const handleShow = () => {
        setIsVisible(true);
    };

    return (
        <>
            {isVisible && (
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
                        <CardContent>
                            <Typography variant="h4" component="div" sx={{ textTransform: 'uppercase' }}>
                            {props.data.tags[0]}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color = 'red' gutterBottom>
                                {props.data.title.split(' ').slice(0, 2).join(' ')}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1.5 }} color="blue">
                                User Id : {props.data.userId}
                            </Typography>
                            <Typography variant="body2" color="cyan">{props.data.body}</Typography>
                        </CardContent>
                        <Button
                        variant="contained"
                        onClick={handleHide}
                        style={{ backgroundColor: "blue", color: "white" }}
                    >
                        Hide
                    </Button>
                    </Card>
                </Grid>
            )}
            {!isVisible && (
                <Grid item xs={12} md={6} lg={4}>
                    <Button
                        variant="contained"
                        onClick={handleShow}
                        style={{ backgroundColor: "blue", color: "white" }}
                    >
                        Show
                    </Button>

                </Grid>
            )}
        </>
    );
}

export default AllPosts;
