import ProductPurchaseForm from "@/components/forms/product-purchase-form"

export default function ProductPurchaseFormPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Purchase Form Component</h1>
      <div className="border rounded-lg p-4">
        <ProductPurchaseForm />
      </div>
    </div>
  )
}
