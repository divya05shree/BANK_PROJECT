const express=require('express');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoute');
const userLoginRoutes=require('./routes/userloginRoute');
const cardRoutes=require('./routes/cardLoginRoute');
const loanRoutes=require('./routes/loanApplyRoute');
const cardupdateRoutes=require('./routes/cardStatusUpdateRoute');
const cardStatusAdminRoutes=require('./routes/cardStatusAdminRoute')
require('dotenv').config();

const app=express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

   .then(() => console.log('MongoDB connected successfully!'))
   .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); 
});


app.use('/api/users',userRoutes);
app.use('/api/users',userLoginRoutes);
app.use('/api/users',cardRoutes);
app.use('/api/users',loanRoutes);
app.use('/api/users',cardupdateRoutes);
app.use('/api/users',cardStatusAdminRoutes)

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`));