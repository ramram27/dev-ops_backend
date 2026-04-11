import { describe, it, expect, vi, afterEach } from "vitest";
import controller from "../controllers/productController.js";
import Product from "../model/Product.js";
import { param } from "../routes/productRoutes.js";

const { createProduct } = controller;

afterEach(() => {
  vi.restoreAllMocks();
})

describe("createProduct", () =>{

  it("should create a new product and return it", async () =>{
    const req = {
      body:{
        name:"laptop",
        price:50000
      }
    }

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    }

    vi.spyOn(Product.prototype, "save").mockResolvedValue(req.body);

    await createProduct(req,res);

    expect(res.status).toHaveBeenCalled(201)
  })

  it("getProducts should return all products data", async () =>{
    const req = {};
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    vi.spyOn(Product, "find").mockResolvedValue([
      {name:"laptop", price:50000},
      {name:"phone", price:20000}
    ]);
  
    await controller.getProducts(req,res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {name:"laptop", price:50000},
      {name:"phone", price:20000}
    ]);
  })

  it("updateProduct should update the product and return it", async () =>{

    const req = {
      params: {id:"123"},
       body:{
        name:"laptop",
        price:50000
      }
    }

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    }

    vi.spyOn(Product, "findByIdAndUpdate").mockResolvedValue(req.body);

    await controller.updateProduct(req,res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
        name:"laptop",
        price:50000
      });

  })

})