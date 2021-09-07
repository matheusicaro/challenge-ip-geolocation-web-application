import app from './app';

app.listen(app.get('port'), () => {
  console.log(`Server started on ${app.get('host') || 'http://localhost:'}:${app.get('port')}`);
  console.log(`environment: ${app.get('env')}`);
});
