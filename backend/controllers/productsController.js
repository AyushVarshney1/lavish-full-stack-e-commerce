import products from "../databaseModels/products.js";

const getAllProducts = async (req, res) => {
  const { category, rating, price, types, brands, sort, search } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { category: { $regex: search, $options: "i" } },
      { productType: { $regex: search, $options: "i" } },
      { brand: { $regex: search, $options: "i" } },
    ];
  }

  if (rating) {
    if (rating == 1) {
      queryObject.rating = { $gte: 1 };
    } else if (rating == 2) {
      queryObject.rating = { $gte: 2 };
    } else if (rating == 3) {
      queryObject.rating = { $gte: 3 };
    } else if (rating == 4) {
      queryObject.rating = { $gte: 4 };
    }
  }

  if (price) {
    if (price == "Under₹1000") {
      queryObject.price = { $lte: 1000 };
    } else if (price == "₹1000-₹3000") {
      queryObject.price = { $gte: 1000, $lte: 3000 };
    } else if (price == "₹3000-₹5000") {
      queryObject.price = { $gte: 3000, $lte: 5000 };
    } else if (price == "Over₹5000") {
      queryObject.price = { $gte: 5000 };
    }
  }

  if (category) {
    let updatedCategory = category.toLowerCase();
    queryObject.category = updatedCategory;
  }

  if (types) {
    const updatedTypes = types.split(",");
    queryObject.productType = { $in: updatedTypes };
  }

  if (brands) {
    const updatedBrands = brands.split(",");
    queryObject.brand = { $in: updatedBrands };
  }

  let productList = products.find(queryObject);

  if (sort === "LowToHigh") {
    productList = productList.sort("price");
  }
  if (sort === "HighToLow") {
    productList = productList.sort("-price");
  }
  if (sort === "Ratings") {
    productList = productList.sort("-rating");
  }

  let page = Number(req.query.page) || 1;
  const limit = 9;
  const skip = (page - 1) * limit;

  productList = productList.skip(skip).limit(limit);

  const product = await productList;
  const productCount = await products.countDocuments(queryObject);

  const numOfPages = Math.ceil(productCount / limit);

  res.status(200).json({ product, productCount, numOfPages });
};

export { getAllProducts };
