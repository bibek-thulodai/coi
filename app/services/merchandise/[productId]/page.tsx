import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductPurchaseForm from "@/components/forms/product-purchase-form"

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  // In a real application, you would fetch the product data based on the productId
  // For this example, we'll use mock data
  const product = getProductById(params.productId)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
        <Link href="/services/merchandise">
          <Button>Return to Merchandise</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Product Images */}
            <div className="md:w-1/2">
              <div className="mb-4 rounded-lg overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.gallery.map((img, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#0e9aa7]"
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="md:w-1/2">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#121d3e] mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">({product.reviewCount} reviews)</span>
                </div>
                <p className="text-2xl font-bold text-[#121d3e] mb-4">${product.price.toFixed(2)}</p>
                <p className="text-gray-700 mb-6">{product.description}</p>

                {product.variants && (
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Available Options</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(product.variants).map(([key, values]) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700 mb-1">{key}</label>
                          <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                            <option value="">Select {key}</option>
                            {values.map((value: string, i: number) => (
                              <option key={i} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <button className="border border-gray-300 px-3 py-1 rounded-l-md">-</button>
                    <input
                      type="number"
                      min="1"
                      value="1"
                      className="border-t border-b border-gray-300 py-1 w-16 text-center"
                      readOnly
                    />
                    <button className="border border-gray-300 px-3 py-1 rounded-r-md">+</button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-[#0e9aa7] hover:bg-[#0c8b98] text-white px-8 py-2 rounded font-bold">
                    ADD TO CART
                  </Button>
                  <Button variant="outline" className="px-8 py-2 rounded font-bold">
                    SAVE FOR LATER
                  </Button>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0e9aa7] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Secure payment options</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0e9aa7] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span>Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#0e9aa7] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>30-day return policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Product Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6 p-6 border rounded-lg">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Product Description</h3>
                  <p className="mb-4">{product.fullDescription}</p>
                  {product.features && (
                    <>
                      <h4 className="text-lg font-bold mb-2">Features</h4>
                      <ul className="list-disc pl-5 mb-4">
                        {product.features.map((feature: string, index: number) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="details" className="mt-6 p-6 border rounded-lg">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Product Details</h3>
                  <table className="min-w-full">
                    <tbody>
                      {product.details &&
                        Object.entries(product.details).map(([key, value]) => (
                          <tr key={key} className="border-b">
                            <td className="py-2 font-medium">{key}</td>
                            <td className="py-2">{value as React.ReactNode}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="mt-6 p-6 border rounded-lg">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Shipping Information</h3>
                  <p className="mb-4">
                    We ship to most countries worldwide. Shipping times and costs vary depending on your location.
                  </p>
                  <h4 className="text-lg font-bold mb-2">Shipping Times</h4>
                  <ul className="list-disc pl-5 mb-4">
                    <li>United States: 3-5 business days</li>
                    <li>Canada: 5-7 business days</li>
                    <li>Europe: 7-10 business days</li>
                    <li>Rest of the world: 10-14 business days</li>
                  </ul>

                  <h3 className="text-xl font-bold mb-4 mt-6">Return Policy</h3>
                  <p className="mb-4">
                    We offer a 30-day return policy for most items. To be eligible for a return, your item must be
                    unused and in the same condition that you received it.
                  </p>
                  <p>Please contact our customer service team to initiate a return.</p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6 p-6 border rounded-lg">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                  <div className="flex items-center mb-6">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 ${i < product.rating ? "fill-current" : "text-gray-300"}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold">{product.rating} out of 5</span>
                    <span className="text-gray-600 ml-2">({product.reviewCount} reviews)</span>
                  </div>

                  {product.reviews &&
                    product.reviews.map((review: any, index: number) => (
                      <div key={index} className="border-b pb-4 mb-4">
                        <div className="flex items-center mb-2">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.name}
                            width={40}
                            height={40}
                            className="rounded-full mr-3"
                          />
                          <div>
                            <h4 className="font-bold">{review.name}</h4>
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-gray-500 text-sm ml-auto">{review.date}</span>
                        </div>
                        <p>{review.comment}</p>
                      </div>
                    ))}

                  <Button className="mt-4">Write a Review</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#121d3e] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <Link href={`/services/merchandise/${product.id}`}>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Button className="bg-white text-[#121d3e] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Details
                        </Button>
                      </div>
                    </Link>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <span className="font-bold text-[#121d3e]">${product.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#121d3e] mb-12">Purchase This Product</h2>
          <div className="max-w-2xl mx-auto">
            <ProductPurchaseForm productId={params.productId} productName={product.name} />
          </div>
        </div>
      </section>
    </>
  )
}

// Mock function to get product by ID
function getProductById(productId: string) {
  // In a real application, this would fetch from a database or API
  const allProducts = [...apparelProducts, ...accessoriesProducts, ...booksProducts, ...giftProducts]

  return allProducts.find((product) => product.id === productId) || null
}

// Mock data for apparel products (expanded)
const apparelProducts = [
  {
    id: "tshirt-1",
    name: "Empowerment T-Shirt",
    category: "T-Shirts",
    price: 24.99,
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
    ],
    rating: 4.5,
    reviewCount: 28,
    description: "A comfortable, eco-friendly t-shirt with an inspiring message.",
    fullDescription:
      "This premium t-shirt features our signature 'Empowerment' design, printed on 100% organic cotton. The shirt is soft, comfortable, and designed to inspire both the wearer and those around them. Each purchase supports our mission to create opportunities for communities worldwide.",
    features: [
      "100% organic cotton",
      "Screen-printed design",
      "Unisex fit",
      "Pre-shrunk fabric",
      "Available in multiple colors",
    ],
    details: {
      Material: "100% organic cotton",
      Weight: "180 gsm",
      Care: "Machine wash cold, tumble dry low",
      Origin: "Ethically manufactured in the USA",
      Sizes: "XS, S, M, L, XL, XXL",
    },
    variants: {
      Size: ["XS", "S", "M", "L", "XL", "XXL"],
      Color: ["Black", "White", "Navy", "Gray"],
    },
    reviews: [
      {
        name: "Sarah J.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "June 12, 2023",
        comment:
          "Love this t-shirt! The material is so soft and comfortable, and the design is beautiful. I've received many compliments when wearing it.",
      },
      {
        name: "Michael T.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "May 28, 2023",
        comment:
          "Great quality shirt with a meaningful message. Fits true to size and has held up well after several washes.",
      },
    ],
    isNew: true,
  },
  // Other apparel products...
]

// Mock data for accessories products (expanded)
const accessoriesProducts = [
  {
    id: "bag-1",
    name: "Eco-Friendly Tote Bag",
    category: "Bags",
    price: 15.99,
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
    ],
    rating: 4.8,
    reviewCount: 42,
    description: "A durable, eco-friendly tote bag perfect for shopping and everyday use.",
    fullDescription:
      "Our Eco-Friendly Tote Bag is made from 100% recycled materials and designed to reduce single-use plastic waste. This spacious, durable bag features our logo and is perfect for grocery shopping, carrying books, or as an everyday bag. Each purchase helps fund our environmental initiatives.",
    features: [
      "Made from 100% recycled materials",
      "Reinforced handles for durability",
      "Interior pocket for small items",
      "Water-resistant coating",
      "Folds flat for easy storage",
    ],
    details: {
      Material: "100% recycled polyester",
      Dimensions: '15" x 16" x 4"',
      Capacity: "Approximately 30 lbs",
      Care: "Spot clean or hand wash, air dry",
      Features: "Interior pocket, reinforced handles",
    },
    variants: {
      Color: ["Natural", "Black", "Blue", "Green"],
    },
    reviews: [
      {
        name: "Elena R.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "July 3, 2023",
        comment:
          "This tote bag is amazing! It's much sturdier than I expected and holds a ton of groceries. I love that it's made from recycled materials too.",
      },
      {
        name: "David K.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "June 15, 2023",
        comment:
          "Great bag that folds up small enough to keep in my car. The inside pocket is perfect for my keys and wallet.",
      },
    ],
    isNew: true,
  },
  // Other accessories products...
]

// Mock data for books products (expanded)
const booksProducts = [
  {
    id: "book-1",
    name: "Creating Your Path: A Guide to Success",
    category: "Books",
    price: 18.99,
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
    ],
    rating: 4.7,
    reviewCount: 56,
    description: "A comprehensive guide to creating opportunities and achieving success in your career and life.",
    fullDescription:
      "Creating Your Path: A Guide to Success is a comprehensive resource for anyone looking to advance their career, start a business, or make positive changes in their life. Written by our founder, this book combines practical advice, inspiring stories, and actionable strategies to help you identify and pursue your goals.",
    features: [
      "256 pages of practical advice and strategies",
      "Real-world case studies and success stories",
      "Interactive exercises and worksheets",
      "Resource guide and recommended reading list",
      "Available in hardcover, paperback, and e-book formats",
    ],
    details: {
      Format: "Hardcover, Paperback, E-book",
      Pages: "256",
      Publisher: "Creating Opportunities Press",
      Language: "English",
      ISBN: "978-1-234567-89-0",
    },
    variants: {
      Format: ["Hardcover", "Paperback", "E-book"],
    },
    reviews: [
      {
        name: "James L.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "August 5, 2023",
        comment:
          "This book changed my perspective on career development. The exercises were particularly helpful in clarifying my goals and creating an action plan.",
      },
      {
        name: "Sophia M.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4,
        date: "July 22, 2023",
        comment:
          "Well-written with lots of practical advice. I appreciated the case studies that showed how others have overcome similar challenges.",
      },
    ],
    isNew: true,
  },
  // Other books products...
]

// Mock data for gift products (expanded)
const giftProducts = [
  {
    id: "giftset-1",
    name: "Empowerment Gift Box",
    category: "Gift Sets",
    price: 59.99,
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
      "/placeholder.svg?height=150&width=150",
    ],
    rating: 4.9,
    reviewCount: 37,
    description: "A curated collection of our most popular items, perfect for gifting.",
    fullDescription: "The Empowerment Gift Box is a carefully curated collection of our most popular items, designed to inspire and motivate. Each box includes an Empowerment T-shirt, Eco-Friendly Tote Bag, Inspirational Notebook, and our bestselling book 'Creating Your Path: A Guide to Success.' This gift set is perfect for graduates, career changers, or anyone embarking on a new journey.",
    features: [
      "Empowerment T-shirt (choice of size and color)",
      "Eco-Friendly Tote Bag",
      "Inspirational Notebook with pen",
      "'Creating Your Path: A Guide to Success' book",
      "Packaged in a premium gift box",
    ],
    details: {
      Contents: "T-shirt, Tote Bag, Notebook, Book",
      Value: "Over $75 if purchased separately",
      Customization: "Choice of t-shirt size and color",
      Packaging: "Premium gift box with ribbon",
      GiftMessage: "Option to include a personalized message",
    },
    variants: {
      "T-shirt Size": ["XS", "S", "M", "L", "XL", "XXL"],
      "T-shirt Color": ["Black", "White", "Navy", "Gray"],
    },
    reviews: [
      {
        name: "Rebecca T.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "September 10, 2023",
        comment: "I purchased this as a graduation gift and it was a huge hit! The quality of each item is excellent, and the presentation in the gift box was beautiful.",
      },
      {
        name: "Marcus J.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 5,
        date: "August 28, 2023",
        comment: "Great value for what's included. I bought this for myself as a motivation boost for a career change, and I use every item regularly.",
      },
    ],
    isNew: true,
  },
  // Other gift products...
]

// Mock data for related products
const relatedProducts = [
  {
    id: "hoodie-1",
    name: "Opportunity Hoodie",
    category: "Hoodies",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "bottle-1",
    name: "Stainless Steel Water Bottle",
    category: "Drinkware",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "journal-1",
    name: "Daily Reflection Journal",
    category: "Journals",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "hat-1",
    name: "Creating Opportunities Cap",
    category: "Headwear",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300",
  },
]
