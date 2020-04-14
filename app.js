const express = require('express');
const app = express();
app.get('/', (req, res) => {
  for(let i=1;i<=50;i++){
    i % 2 === 0 ? x =' Soy Par!' : x = ' Soy Impar!'
    res.send('<p>'+i+x+'</>');
  }
});
app.listen(3000, () => console.log('Listening on port 3000!'));
