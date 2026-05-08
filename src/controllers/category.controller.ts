import prisma from "../config/prisma";


// as the access and creators might not be the same user then it start conflicting with the accessing idea. 
// simply make sure each table consist attribute org_id for access control. 


export const getCategoryById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const category = await prisma.categories.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    return res.json(category);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getCategories = async (req: any, res: any) => {
  try {
    // default limit = 10
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * limit;

    const categories = await prisma.categories.findMany({
      where: {
        user_id: req.user.userId,
        deleted_at: null,
      },
      take: limit + 1, // 👈 fetch one extra to check has_next
      skip,
      orderBy: {
        created_at: "desc",
      },
    });

    // check if next page exists
    const has_next = categories.length > limit;

    // remove extra record if exists
    if (has_next) {
      categories.pop();
    }

    return res.json({
      data: categories,
      pagination: {
        limit,
        page,
        has_next,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};


export const createCategory = async (req: any, res: any) => {
  try {
    const { name, parent_id } = req.body;
    // first check if there exit a category with parent=parent_id and user_id = user_id 
    // then simply return category already exists:

    
    const cat = await prisma.categories.findFirst({where: {parent_id:parent_id,user_id:req.user.user_id,name:name}});
  
    if(cat){
        return res.status(409).json({message:"Category already exists"});
    }

    //if there any item exist with same parent_id raise error to maintain homogenity
    if(parent_id){
    const item = await prisma.items.findFirst({where:{cat_id:parent_id}});

    if(item){
        return res.status(409).json({   message: "Cannot create subcategory under a category that already contains items."})
    }
    }
   

    const category = await prisma.categories.create({
      data: {
        name,
        parent_id: parent_id || null,
        user_id: req.user.user_id,
        created_by: req.user.user_id,
        updated_by: req.user.user_id,
      },
    });

    return res.status(201).json(category);
  } catch (err: any) {
  
    if (err.code === "P2002") {
      return res.status(409).json({
        message: "Category already exists",
      });
    }

    return res.status(500).json({ message: "Server error" });
  }
};



export const updateCategory = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await prisma.categories.update({
      where: { id },
      data: {
        name,
        updated_by: req.user.user_id,
        updated_at: new Date(),
      },
    });

    return res.json(category);
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};


export const deleteCategory = async (req: any, res: any) => {
  try {
    const { id } = req.params;


    const cat = await prisma.categories.findFirst({where:{id:id}});
    if(!cat){
        return res.status(404).json({message: "Content not found"});
    }

    await prisma.categories.update({
      where: { id },
      data: {
        deleted_at: new Date(),
        updated_by: req.user.user_id,
      },
    });

    return res.status(200).json({ message: "Category deleted" }); 
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};