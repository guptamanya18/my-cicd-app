const express = require('express');
const app=express();

app.get('/',(req,res) => { 
    res.json ({
        message: "Hello from my CI/CD pipeline!",
        version: process.env.APP_VERSION || '1.0.0',
        timestamp: new Date().toString()
    });

 });

app.get('/health', (req,res) => {
    res.json({ status: 'healthy' });
});

if(require.main===module){
    const PORT=process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
 
module.exports = app; 
