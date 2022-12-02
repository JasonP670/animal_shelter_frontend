import { Button as Btn, Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import useFetch from '../utils/useFetch';
import { Alert } from 'react-bootstrap';

export default function Dog() {
  const { loading, error, value } = useFetch(`http://localhost:3030/api/v1/dogs`, {}, []);

  const handleClick = (e) => {
    console.log('clicked!');
  };

  const handleShare = (e) => {
    console.log('shared');
  };

  const dogCardBuilder = () => {
    if (value?.length > 0) {
      return value.map((dog) => (
        <Card key={`dog_${dog.id}`}>
          <CardActionArea onClick={handleClick}>
            <CardContent>
              <Typography variant='h5' component='div'>
                {dog.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions onClick={handleShare}>
            <Btn size='small' color='primary'>
              Share
            </Btn>
          </CardActions>
        </Card>
      ));
    } else {
      return <Alert variant='warning'>No dogs found in the database.</Alert>;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <Alert variant='danger'>{error}</Alert>;
  }

  return dogCardBuilder();
}
