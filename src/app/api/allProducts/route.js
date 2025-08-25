import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const data = await dbConnect(process.env.DB_COLLECTION)
  const result = await data.find().toArray();
  return Response.json(result);
}
