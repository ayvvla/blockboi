import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Add Product - Blockboi",
};

const addProduct = async (formData: FormData) => {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const category = formData.get("category")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !category || !imageUrl || !price) {
    throw Error("Mising required fields");
  }

  
  await prisma.product.create({
    data: { name, description, category, imageUrl, price },
  });

  redirect("/");
};

const AddProductPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          required
          type="input"
          name="name"
          placeholder="Name"
          className="mb-3 w-full input input-bordered"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />

        <input
          required
          name="category"
          placeholder="T-shirts, Jackets, Hoodies or Hats"
          className="mb-3 w-full input input-bordered"
        />

        <input
          required
          type="url"
          name="imageUrl"
          placeholder="Image Url"
          className="mb-3 w-full input input-bordered"
        />

        <input
          required
          type="number"
          name="price"
          placeholder="Price"
          className="mb-3 w-full input input-bordered"
        />

        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
};

export default AddProductPage;
