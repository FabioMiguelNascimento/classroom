export default async function Class({ params }:  { params: Promise<{ id: string  }> }) {
    const { id } = await params

    return (
        <h1>{id}</h1>
    )
}