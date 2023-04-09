import Link from "next/link"

export function ProductCard({x}) {
  return (
    <Link key={x.id} href={`/products/${x.id}`}>
    <div className="border border-gray-400 shadow-md p-6">
      <h1>{x.name}</h1>
      <p>{x.description}</p>
      <p>{x.price}</p></div>

  </Link>
  )
}

