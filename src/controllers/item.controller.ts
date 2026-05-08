import prisma from "../config/prisma";
import { currencyType, itemType } from "../generated/client";

/**
 * GET /items/:id : it gives only the details of the item:
 */
type CreateItemDTO = {
  name: string;
  cat_id: string;
  type: itemType;
  price_per_base_unit: number;
  unit_id: string;
  image_url?:string;
  currency?: currencyType;
};

export const getItemById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const item = await prisma.items.findFirst({
      where: {
        id,
        deleted_at: null,
        // access control
        categories: {
          user_id: req.user.user_id,
        },
      },

      include: {

        // fetch all options
        options: {
          where: {
            deleted_at: null,
          },

          orderBy: {
            name: "asc",
          },
        },
      },
    });

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    return res.json(item);
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

/**
 * GET /items
 */
export const getItems = async (req: any, res: any) => {
  try {
    const { cat_id } = req.params;

    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;

    const skip = (page - 1) * limit;

    /**
     * Access control:
     * Ensure category belongs to current user
     */
    const category = await prisma.categories.findFirst({
      where: {
        id: cat_id,
        deleted_at: null,
      },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    if(category.user_id !== req.user.user_id){
        return res.status(403).json({message:"Access Denied"});
    }

    const items = await prisma.items.findMany({
      where: {
        cat_id,
        deleted_at: null,

        // extra access safety
        categories: {
          user_id: req.user.user_id,
        },
      },

      include: {
        options: {
          where: {
            deleted_at: null,
          },

          orderBy: {
            name: "asc",
          },
        },
      },

      orderBy: {
        created_at: "asc",
      },

      skip,
      take: limit + 1,
    });

    const has_next = items.length > limit;

    if (has_next) {
      items.pop();
    }

    return res.json({
      data: items,
      pagination: {
        limit,
        page,
        has_next,
      },
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};
/**
 * POST /items
 */
export const createItem = async (req: any, res: any) => {
  try {
  const {
  name,
  cat_id,
  type,
  price_per_base_unit,
  unit_id,
  currency,
}: CreateItemDTO = req.body;
    // validate category exists
    const category = await prisma.categories.findFirst({
      where: {
        id: cat_id,
        deleted_at: null,
       
      },
    });

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }
    if(category.user_id !== req.user.user_id){
        return res.status(403).json({message: "Access Denied"});
    }

    // prevent item creation in parent category
    const childCategory = await prisma.categories.findFirst({
      where: {
        parent_id: cat_id,
        deleted_at: null,
      },
    });

    if (childCategory) {
      return res.status(409).json({
        message:
          "Cannot create item inside category containing subcategories",
      });
    }

    // duplicate check
    const existingItem = await prisma.items.findFirst({
      where: {
        name,
        cat_id,
        deleted_at: null,
      },
    });

    if (existingItem) {
      return res.status(409).json({
        message: "Item already exists",
      });
    }

     const result = await prisma.$transaction(async (tx) => {
      // 1. create item
      const item = await tx.items.create({
        data: {
          name,
          cat_id,
          type,
          created_by: req.user.user_id,
          updated_by: req.user.user_id,
        },
      });

      // 2. create default option (MANDATORY)
      const option = await tx.options.create({
        data: {
          name, // same as item name
          item_id: item.id,
          unit_id,

          price_per_base_unit,

          currency: currency || "INR",

          created_by: req.user.user_id,
          updated_by: req.user.user_id,
        },
      });

      return { item, option };
    });

    return res.status(201).json({
      message: "Item created with default option",
      data: result,
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      return res.status(409).json({
        message: "Item already exists",
      });
    }

    return res.status(500).json({
      message: "Server error",
    });
  }
};

/**
 * PUT /items/:id
 */
export const updateItem = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const { name, image_url, type } = req.body;

    const existingItem = await prisma.items.findFirst({
      where: {
        id,
        deleted_at: null,

        categories: {
          user_id: req.user.user_id,
        },
      },
    });

    if (!existingItem) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    const item = await prisma.items.update({
      where: {
        id,
      },

      data: {
        name,
        image_url,
        type,
        updated_by: req.user.user_id,
        updated_at: new Date(),
      },
    });

    return res.json(item);
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

/**
 * DELETE /items/:id
 */
export const deleteItem = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const item = await prisma.items.findFirst({
      where: {
        id,
        deleted_at: null,
        categories: {
          user_id: req.user.user_id,
        },
      },
    });

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    await prisma.items.update({
      where: {
        id,
      },

      data: {
        deleted_at: new Date(),
        updated_by: req.user.user_id,
      },
    });

    return res.status(200).json({
      message: "Item deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};