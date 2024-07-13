// import Blog from "../models/Blog.model.js";  // My Mistake
import Blog from "./blog.route.js";


const connectRoutes = (app)=>{
    app.use('/api/blog', Blog);
}


export default connectRoutes;

