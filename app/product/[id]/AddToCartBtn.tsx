"use client";
import { BsCart4 } from "react-icons/bs";
import { useState, useTransition } from "react";

interface AddToCartButtonProps {
  productId: string;
  addCartButtonAction: (productId: string) => Promise<void>;
}

const AddToCartButton = ({
  productId,
  addCartButtonAction,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await addCartButtonAction(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart <BsCart4 size={20} />
      </button>
      {isPending && <span className="loading loading-spinner loading-md" />}
      {!isPending && success && (
        <span className="text-success">Added to Cart</span>
      )}
    </div>
  );
};

export default AddToCartButton;
