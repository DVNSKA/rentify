import { Flat } from '../Models/Flats.js';
import {SavedRecipe} from '../Models/SavedRecipe.js'

export const add = async (req,res)=>{
    const { title, ist, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4,imgurl } =
      req.body;
      try {
        const flat = await Flat.create({
          title,
          ist,
          ing1,
          ing2,
          ing3,
          ing4,
          qty1,
          qty2,
          qty3,
          qty4,
          imgurl,
          user: req.user,
        });

        res.json({message:"Recipe Created Successfully..!",flat})
      } catch (error) {
        res.json({message:error})
      }
} 


export const getAllRecipe = async (req,res) =>{
    const recipe = await Flat.find();
    res.json({recipe}) 
}


export const getRecipeById = async (req,res)=>{
    const id = req.params.id
    try { 
        let recipe = await Flat.findById(id)

        if(!recipe) res.json({message:'recipe not exist'})

        res.json({message:"recipe by id", recipe})
        
    } catch (error) {
        res.json({message:error})
    }
}

export const getRecipeByUserId = async (req,res) =>{
 const userId = req.params.id;
 try {
   let recipe = await Flat.find({user:userId});

   if (!recipe) res.json({ message: "recipe not exist" });

   res.json({ message: "recipe by userId", recipe });
 } catch (error) {
   res.json({ message: error });
 }
}

export const savedRecipeById = async (req,res) =>{
    const id = req.params.id

    let recipe = await SavedRecipe.findOne({recipe:id})

    if(recipe) return res.json({message:"recipe already saved"})

    recipe = await SavedRecipe.create({recipe:id})
    
    res.json({message:"Recipe saved Successfully..!"})
}

export const getSavedRecipe  = async (req,res) =>{
    const recipe = await SavedRecipe.find()
    res.json({recipe})
}