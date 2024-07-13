import Blog from "../models/Blog.model.js";


export const Create = async (req,res) =>{
    try {
        const {author,title,content} = req.body;
        if(!author || !title || !content){
            return res.status(400).json({success:false,message:'Must provide all data'})
        }
        const blog = await Blog.create({author,title,content});
        if(!blog){
            return res.status(500).json({success:false,message:'Unable to create a blog!'})
        }
        res.status(200).json({success:true,message:'Blog created successfully!'})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}


export const GetALL = async (req,res)=>{
    try {
        const users = await Blog.findAll();
        res.status(200).json({success:true,message:'Users found!',users});
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}

export const Update = async (req,res) =>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).json({success:false,message:"Must provide id in url"});
        }
        const {author,title,content} = req.body;
        const user = await Blog.findByPk(id);
        if(!user){
            return res.status(404).json({success:false,message:"Blog not found"});
        }
        await Blog.update({author,title,content, updatedAt:Date.now()}, {
            where : { id }
        })
        res.status(200).json({success:true,message:'Blog updated successfully!'})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}

export const Delete = async (req,res) =>{
    try {
        const id = req.params.id;
        if(!id){
            return res.status(400).json({success:false,message:"Must provide id in url"});
        }
        await Blog.destroy({
            where: {id}
        })
        res.status(200).json({success:true,message:'Blog deleted successfully!'})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }
}

